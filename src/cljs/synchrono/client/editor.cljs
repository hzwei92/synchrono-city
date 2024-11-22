(ns synchrono.client.editor
  (:require ["prosemirror-state" :as pm-state]
            ["prosemirror-model" :as pm-model]
            ["prosemirror-view" :as pm-view]
            ["prosemirror-history" :as history]
            [reagent.core :as r]
            [synchrono.client.schema :refer [schema]]
            [synchrono.client.keymap :refer [make-keymap]]
            [re-frame.core :as rf]
            [synchrono.client.nostrodamus]
            [taoensso.timbre :as log]
            [clojure.string :as str]
            [synchrono.client.plugin :refer [create-pattern-plugin]]))

(defn create-initial-doc []
  (let [paragraph-type (.. schema -nodes -paragraph)
        doc-type (.. schema -nodes -doc)
        empty-paragraph (.create paragraph-type)
        doc (.create doc-type #js {:content #js [empty-paragraph]})]
    doc))

(defn create-selection [doc sel]
  (when (and doc sel (:anchor sel) (:head sel))
    (try
      (pm-state/TextSelection.create doc (:anchor sel) (:head sel))
      (catch :default e
        (log/warn "Failed to create text selection:" e)
        (.create pm-state/TextSelection doc)))))

(defn base-plugins []
  #js [
       (history/history)
       (make-keymap)
       (create-pattern-plugin schema)
       ])

(defn create-editor-state [{:keys [doc selection]}]
  (log/info "Creating editor state with doc and selection:" doc selection)
  (let [pm-doc (try
                 (if doc
                   (if (instance? pm-model/Node doc)
                     doc  ; If it's already a Node, use it directly
                     (.fromJSON pm-model/Node schema (clj->js doc)))
                   (create-initial-doc))
                 (catch :default e
                   (log/warn "Failed to create doc from JSON:" e)
                   (create-initial-doc)))
        pm-selection (create-selection pm-doc selection)]
    (.create pm-state/EditorState
             #js {:schema schema
                  :doc pm-doc
                  :selection pm-selection
                  :plugins (base-plugins)})))

(defn editor []
  (let [container-ref (r/atom nil)
        editor-view-ref (r/atom nil)]
    (r/create-class
     {:component-did-mount
      (fn []
        (log/info "Editor component mounting")
        (when-let [dom-node @container-ref]
          (let [props #js {:state (create-editor-state {:doc (create-initial-doc)
                                                       :selection nil})
                          :dispatchTransaction (fn [tr]
                                               (when-let [view @editor-view-ref]
                                                 (let [next-state (.apply (.-state view) tr)]
                                                   (.updateState view next-state))))}
                view (pm-view/EditorView. dom-node props)]
            (reset! editor-view-ref view)
            (rf/dispatch-sync [:set-editor-view view]))))

      :component-will-unmount
      (fn []
        (log/info "Editor component unmounting")
        (when-let [view @editor-view-ref]
          (.destroy view)
          (reset! editor-view-ref nil)
          (rf/dispatch [:set-editor-view nil])))

      :reagent-render
      (fn []
        [:div.editor
         {:ref #(reset! container-ref %)}])})))

(defn get-formatted-content [doc]
  (log/info "Getting formatted content from doc" 
            {:doc-exists? (boolean doc)
             :doc-type (type doc)
             :child-count (when doc (.-childCount doc))
             :content (when doc (.-content doc))})
  (if-not doc
    (do 
      (log/error "No document provided to get-formatted-content")
      {:content "" :tags []})
    (let [fragments (atom [])
          tags (atom [])
          seen-nodes (atom #{})]
      (try
        ;; Process each child of the document directly
        (doseq [i (range (.-childCount doc))]
          (let [child (.child doc i)]
            (log/debug "Processing child node:" 
                      {:index i
                       :type (.-name (.-type child))
                       :attrs (js->clj (.-attrs child))
                       :text-content (.-textContent child)})
            
            ;; Process the child node
            (let [node-type (.-name (.-type child))]
              (case node-type
                "paragraph" 
                (doseq [j (range (.-childCount child))]
                  (let [inner-node (.child child j)
                        inner-type (.-name (.-type inner-node))]
                    (log/debug "Processing paragraph child:" 
                             {:index j
                              :type inner-type
                              :attrs (js->clj (.-attrs inner-node))
                              :text-content (.-textContent inner-node)})
                    
                    (case inner-type
                      "text" (swap! fragments conj (.-text inner-node))
                      
                      "event" (let [event-id (.. inner-node -attrs -eventId)]
                               (log/debug "Found event node:" 
                                        {:id event-id})
                               (when event-id 
                                 (swap! tags conj ["e" event-id])
                                 (swap! fragments conj (str "[e " event-id "]"))))
                      
                      "pubkey" (let [pubkey (.. inner-node -attrs -pubkey)]
                                (swap! tags conj ["p" pubkey])
                                (swap! fragments conj (str "[p " pubkey "]")))
                      
                      "relay" (let [relay (.-textContent inner-node)]
                               (swap! tags conj ["r" relay])
                               (swap! fragments conj (str "[r " relay "]")))
                      
                      "timestamp" (let [timestamp (.-textContent inner-node)
                                      time-str (second (re-find #"\[t (.*?)\]" timestamp))]
                                  (when time-str
                                    (swap! tags conj ["t" time-str]))
                                  (swap! fragments conj timestamp))
                      
                      "geohash" (let [geohash (.-textContent inner-node)
                                     gh-str (second (re-find #"\[s (.*?)\]" geohash))]
                                 (when gh-str
                                   (swap! tags conj ["s" gh-str]))
                                 (swap! fragments conj geohash))
                      
                      nil)))
                
                ;; Handle other top-level node types if needed
                nil)))
          
          ;; Add newline between paragraphs if needed
          (when (< (inc i) (.-childCount doc))
            (swap! fragments conj "\n")))
        
        (let [result {:content (str/join "" @fragments)
                     :tags (vec @tags)}]
          (log/debug "Formatted content final result:" 
                    {:result result
                     :fragments @fragments
                     :seen-nodes @seen-nodes
                     :final-tags @tags})
          result)
        (catch :default e
          (log/error "Error processing document:" (.-message e) (.-stack e))
          {:content "" :tags []})))))

(rf/reg-sub
 :editor/view
 (fn [db]
   (:editor/view db)))

(rf/reg-event-fx
 :publish
 (fn [{:keys [db]} _]
   (log/info "Publishing content")
   (let [editor-view (:editor/view db)
         _ (log/debug "Editor view state:" 
                     {:view-exists? (boolean editor-view)
                      :doc-exists? (boolean (some-> editor-view .-state .-doc))})
         formatted-content (if editor-view
                            (get-formatted-content (.. editor-view -state -doc))
                            (do 
                              (log/error "No editor view found")
                              {:content "" :tags []}))
         _ (log/debug "Formatted content:" formatted-content)
         {:keys [content tags]} formatted-content
         geolocation (:geolocation db)
         geo-tag ["s" (:geohash geolocation)]
         all-tags (vec (distinct (cons geo-tag (or tags []))))]
     (log/info "Publishing prepared content:" 
               {:content content
                :tags tags
                :geo-tag geo-tag
                :all-tags all-tags
                :content-empty? (or (nil? content) (str/blank? content))})
     (if (or (nil? content) (str/blank? content))
       (do 
         (log/error "Cannot publish empty content")
         {:db db})
       (do
         ;; Clear editor content using a transaction
         (when editor-view
           (let [state (.-state editor-view)
                 empty-doc (create-initial-doc)
                 tr (.replaceWith (.-tr state) 
                                 0 
                                 (.. state -doc -content -size)
                                 empty-doc)]
             (.dispatch editor-view tr)))
         {:db db
          :dispatch [:nostr/publish 1 content (vec all-tags)]})))))

(rf/reg-event-db
 :set-editor-view
 (fn [db [_ view]]
   (log/info "Setting editor view")
   (assoc db :editor/view view)))

(rf/reg-event-fx
 :action-clicked
 (fn [{:keys [db]} [_ action-text]]
   (let [cleaned-text (-> action-text
                         (str/replace #"^\(go |\)$" ""))]
     (log/info "Action clicked with cleaned text:" cleaned-text)
     {:dispatch [:handle-action cleaned-text]})))

(rf/reg-event-fx
 :event-clicked
 (fn [{:keys [db]} [_ event-text]]
   (let [cleaned-text (-> event-text
                         (str/replace #"^\[e |\]$" ""))]
     (log/info "Event clicked with cleaned text:" cleaned-text)
     {:dispatch [:handle-event cleaned-text]})))

(rf/reg-event-fx
 :pubkey-clicked
 (fn [{:keys [db]} [_ pubkey-text]]
   (let [cleaned-text (-> pubkey-text
                         (str/replace #"^\[p |\]$" ""))]
     (log/info "Pubkey clicked with cleaned text:" cleaned-text)
     {:dispatch [:handle-pubkey cleaned-text]})))

(rf/reg-event-fx
 :relay-clicked
 (fn [{:keys [db]} [_ relay-text]]
   (let [cleaned-text (-> relay-text
                         (str/replace #"^\[r |\]$" ""))]
     (log/info "Relay clicked with cleaned text:" cleaned-text)
     {:dispatch [:handle-relay cleaned-text]})))

(rf/reg-event-fx
 :timestamp-clicked
 (fn [{:keys [db]} [_ timestamp-text]]
   (let [cleaned-text (-> timestamp-text
                         (str/replace #"^\[t |\]$" ""))]
     (log/info "Timestamp clicked with cleaned text:" cleaned-text)
     {:dispatch [:handle-timestamp cleaned-text]})))

(rf/reg-event-fx
 :geohash-clicked
 (fn [{:keys [db]} [_ geohash-text]]
   (let [cleaned-text (-> geohash-text
                         (str/replace #"^\[s |\]$" ""))]
     (log/info "Geohash clicked with cleaned text:" cleaned-text)
     {:dispatch [:handle-geohash cleaned-text]})))

(defn handle-click [e node node-type view get-pos]
  (log/warn "Handling click for node-type:" node-type)
  ;; Your existing handle-click implementation
  ;; Ensure that 'view' and 'get-pos' are correctly utilized here
  )
