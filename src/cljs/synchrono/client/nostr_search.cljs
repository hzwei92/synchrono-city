(ns synchrono.client.nostr-search
  (:require [synchrono.client.prosemirror :as pm]
            [taoensso.timbre :as log]
            ["nostr-tools" :as nostr]
            [reagent.core :as r]
            [promesa.core :as p]))

;; Relay configuration 
(def relays ["wss://relay.damus.io" 
             "wss://relay.nostr.band"])

(def relay-pool 
  (reduce (fn [pool url]
            (let [relay (nostr/relayInit url)]
              (.on relay "connect" #(log/info "Connected to" url))
              (.on relay "error" #(log/error "Error connecting to" url))
              (.connect relay)
              (conj pool relay)))
          []
          relays))

;; Debounce helper
(defn debounce [f ms]
  (let [timeout (atom nil)]
    (fn [& args]
      (when @timeout
        (js/clearTimeout @timeout))
      (reset! timeout
              (js/setTimeout #(apply f args) ms)))))

;; Store for live search results
(def search-results (r/atom []))
(def active-subscription (atom nil))

(defn unsubscribe-if-active []
  (when-let [sub @active-subscription]
    (.unsubscribe sub)
    (reset! active-subscription nil)))

(defn search-events [query]
  (unsubscribe-if-active)
  (when (and query (> (count query) 2))  ; Only search for queries longer than 2 chars
    (let [filter #js {:kinds #js [1]
                      :search query
                      :limit 5}  ; Limit results for performance
          sub (nostr/sub relay-pool #js [filter])]
      (.on sub "event" (fn [event]
                        (when (= (.-kind event) 1)
                          (swap! search-results conj event))))
      (reset! active-subscription sub))))

;; Debounced search function
(def search-events-debounced 
  (debounce search-events 300))

;; Component to display search results
(defn search-results-component [{:keys [results position]}]
  [:div.nostr-search-results
   {:style {:position "absolute"
            :top (str (+ (:bottom position) 5) "px")
            :left (str (:left position) "px")
            :background "white"
            :border "1px solid #ccc"
            :border-radius "4px"
            :box-shadow "0 2px 4px rgba(0,0,0,0.1)"
            :max-width "400px"
            :z-index 1000}}
   (if (seq results)
     [:ul.results-list
      {:style {:list-style "none"
               :padding "0"
               :margin "0"}}
      (for [event results]
        [:li.result-item
         {:key (.-id event)
          :style {:padding "8px 12px"
                  :border-bottom "1px solid #eee"
                  :cursor "pointer"}
          :on-mouse-enter #(swap! search-results assoc :highlighted (.-id event))}
         (.-content event)])]
     [:div.no-results
      {:style {:padding "8px 12px"
               :color "#666"}}
      "No matching posts found"])])

;; Enhanced plugin for real-time search
(defn create-nostr-search-plugin []
  (let [search-view (r/atom nil)]
    #js {:view (fn [editor-view]
                 (reset! search-view
                         (r/create-class
                           {:component-did-mount
                            (fn [])
                            :component-will-unmount
                            (fn []
                              (unsubscribe-if-active)
                              (reset! search-results []))
                            :reagent-render
                            (fn []
                              (when (seq @search-results)
                                (let [state (.-state editor-view)
                                      selection (.-selection state)
                                      coords (.coordsAtPos editor-view (.-from selection))]
                                  [search-results-component
                                   {:results @search-results
                                    :position {:top (.-top coords)
                                             :left (.-left coords)
                                             :bottom (.-bottom coords)}}])))}))
                 #js {:update (fn [view prev-view]
                               (let [state (.-state view)
                                     prev-state (.-state prev-view)
                                     selection (.-selection state)
                                     prev-selection (.-selection prev-state)]
                                 (when (not= (.-from selection)
                                           (.-from prev-selection))
                                   (r/force-update @search-view))))})
         :props #js {:handleKeyDown
                    (fn [view event]
                      (let [state (.-state view)
                            selection (.-selection state)
                            from (.-from selection)
                            resolved-pos (.resolve (.-doc state) from)
                            depth (.-depth resolved-pos)
                            query-node (loop [d depth]
                                       (when (>= d 0)
                                         (let [node (.node resolved-pos d)]
                                           (if (= (.. node -type -name) "query")
                                             node
                                             (recur (dec d))))))]
                        (when query-node
                          (let [query-pos (.before resolved-pos depth)
                                query-end-pos (.after resolved-pos depth)
                                query-text (.textBetween (.-doc state) 
                                                       query-pos 
                                                       query-end-pos 
                                                       "")]
                            ;; Clean the query text by removing brackets
                            (let [clean-query (-> query-text
                                                (clojure.string/replace #"^\[\[?" "")
                                                (clojure.string/replace #"\]?\]$" ""))]
                              (search-events-debounced clean-query)))))
                      nil)}))

;; Update base plugins to include the search plugin
(def enhanced-base-plugins
  #js [(history/history)
       (make-keymap)
       (keymap (.-baseKeymap commands))
       (create-nostr-search-plugin)])

;; Replace the original editor function with one that uses the enhanced plugins
(defn enhanced-editor []
  (let [editor-ref (r/atom nil)
        container-ref (r/atom nil)]
    (r/create-class
     {:component-did-mount
      (fn []
        (when-let [dom-node @container-ref]
          (let [initial-state (create-editor-state enhanced-base-plugins)
                dispatch-fn (fn [tr]
                            (when-let [view @editor-ref]
                              (let [next-state (.apply (.-state view) tr)]
                                (log/info "next-state" (.-doc next-state))
                                (.updateState view next-state))))
                view (create-editor-view dom-node initial-state dispatch-fn)]
            (reset! editor-ref view))))

      :component-will-unmount
      (fn []
        (when-let [view @editor-ref]
          (.destroy view)
          (unsubscribe-if-active)
          (reset! search-results [])))

      :reagent-render
      (fn []
        [:div.editor-container
         [:div.editor
          {:ref #(reset! container-ref %)}]])})))