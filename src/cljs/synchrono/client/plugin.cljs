(ns synchrono.client.plugin
  (:require ["prosemirror-state" :as pm-state]
            [taoensso.timbre :as log]
            [clojure.string :as str]
            [re-frame.core :as rf]))

;; Move shorten-id from nodeview.cljs
(defn- shorten-id [id]
  (when id
    (str (subs id 0 8) "..." (subs id (- (count id) 8)))))

;; Move node view related functions
(defn- update-display [span node node-type]
  (try 
    (case node-type
      "event" (let [event-id (.. node -attrs -eventId)
                    expanded? (.. node -attrs -expanded)
                    display-text (if expanded?
                                   (str "[e " event-id "]")
                                   (str "[e " (shorten-id event-id) "]"))]
               (set! (.-textContent span) display-text))
      
      "pubkey" (let [pubkey (.. node -attrs -pubkey)
                     expanded? (.. node -attrs -expanded)
                     display-text (if expanded?
                                  (str "[p " pubkey "]")
                                  (str "[p " (shorten-id pubkey) "]"))]
                (set! (.-textContent span) display-text))
      
      (set! (.-textContent span) (.-textContent node)))
    (catch :default e
      (log/error "Error in update-display:" e))))

(defn- handle-click [e node node-type view get-pos]
  (.preventDefault e)
  (if (= (.-detail e) 2)  ; Check if it's a double-click
    ;; Handle double-click for copying
    (case node-type
      "event" (let [text (str "[e " (.. node -attrs -eventId) "]")]
                (.. js/navigator -clipboard (writeText text))
                (show-copied-popup e))
      "pubkey" (let [text (str "[p " (.. node -attrs -pubkey) "]")]
                 (.. js/navigator -clipboard (writeText text))
                 (show-copied-popup e))
      "action" (rf/dispatch [:action-clicked (.-textContent node)])
      "relay" (let [text (.-textContent node)]
                (.. js/navigator -clipboard (writeText text))
                (show-copied-popup e))
      "timestamp" (let [text (.-textContent node)]
                   (.. js/navigator -clipboard (writeText text))
                   (show-copied-popup e))
      "geohash" (let [text (.-textContent node)]
                  (.. js/navigator -clipboard (writeText text))
                  (show-copied-popup e))
      nil)
    
    ;; Handle single-click for expansion
    (case node-type
      "event" 
      (do
        (.stopPropagation e)
        (when (and view (.-state view))
          (let [tr (.. view -state -tr)
                pos (get-pos)]
            (when pos
              (let [current-expanded (.. node -attrs -expanded)
                    new-expanded (not current-expanded)
                    new-attrs #js {:eventId (.. node -attrs -eventId)
                                 :nodeId (.. node -attrs -nodeId)
                                 :expanded new-expanded}]
                (.setNodeMarkup tr pos (.-type node) new-attrs)
                (.dispatch view tr)))))
        (rf/dispatch [:event-clicked (.. node -attrs -eventId)]))

      "pubkey"
      (do
        (.stopPropagation e)
        (when (and view (.-state view))
          (let [tr (.. view -state -tr)
                pos (get-pos)]
            (when pos
              (let [current-expanded (.. node -attrs -expanded)
                    new-expanded (not current-expanded)
                    new-attrs #js {:pubkey (.. node -attrs -pubkey)
                                 :nodeId (.. node -attrs -nodeId)
                                 :expanded new-expanded}]
                (.setNodeMarkup tr pos (.-type node) new-attrs)
                (.dispatch view tr))))))
      nil)))

(defn- create-node-view [node-type]
  (fn [node view get-pos]
    (let [span (.createElement js/document "span")
          current-node (atom node)
          handler (fn [e]
                    (let [editor-view view
                          node @current-node]
                      (if-not (and editor-view (.-state editor-view))
                        (log/error "Editor view is undefined in click handler")
                        (handle-click e node node-type editor-view get-pos))))]
      
      (.setAttribute span "class" node-type)
      
      ;; Initial display
      (update-display span node node-type)
      
      ;; Set title attribute for hover
      (when (contains? #{"event" "pubkey"} node-type)
        (let [full-val (case node-type
                        "event" (.. node -attrs -eventId)
                        "pubkey" (.. node -attrs -pubkey))]
          (.setAttribute span "title" full-val)))
      
      (.addEventListener span "click" handler)
      
      #js {:dom span
           :ignoreMutation (fn [mutation] true)
           :stopEvent (fn [event] (contains? #{"event" "pubkey"} node-type))
           :update (fn [updated-node _ _]
                    (reset! current-node updated-node)
                    (update-display span updated-node node-type)
                    true)
           :destroy (fn []
                     (.removeEventListener span "click" handler))})))

(defn- create-node-views []
  #js {"action" (create-node-view "action")
       "event" (create-node-view "event")
       "pubkey" (create-node-view "pubkey")
       "relay" (create-node-view "relay")
       "timestamp" (create-node-view "timestamp")
       "geohash" (create-node-view "geohash")})

(defn create-text-node [text schema]
  (log/info "Creating text node with text:" text)
  (.text schema text))

(defn- create-node [match schema]
  (try
    (let [text (:text match)
          _ (log/debug "Creating node for text:" text "of type:" (:type match))
          clean-text (case (:type match)
                       "event" (str/replace text #"^\[e |\]$" "")
                       "pubkey" (str/replace text #"^\[p |\]$" "")
                       "relay" (str/replace text #"^\[r |\]$" "")
                       text)
          text-node (create-text-node text schema)
          schema-node-type (case (:type match)
                             "action" (-> schema .-nodes .-action)
                             "event" (-> schema .-nodes .-event)
                             "pubkey" (-> schema .-nodes .-pubkey)
                             "relay" (-> schema .-nodes .-relay)
                             "timestamp" (-> schema .-nodes .-timestamp)
                             "geohash" (-> schema .-nodes .-geohash)
                             nil)]
      (log/debug "Node creation - clean text:" clean-text 
                 "schema-node-type:" schema-node-type)
      (when schema-node-type
        (let [node-id (str (random-uuid))
              attrs (case (:type match)
                     "event" #js {:eventId clean-text
                                  :nodeId node-id
                                  :expanded false}
                     "pubkey" #js {:pubkey clean-text
                                   :nodeId node-id
                                   :expanded false}
                     "relay" #js {:nodeId node-id}
                     #js {:nodeId node-id})
              node (.create schema-node-type attrs #js [text-node])]
          (log/debug "Created node with attrs:" (js->clj attrs))
          node)))
    (catch :default e
      (log/error "Error creating node for pattern:" (clj->js match) e)
      nil)))

(defn- process-matches [tr matches start-pos schema]
  (log/info "Processing matches:" matches "at position" start-pos)
  (let [sorted-matches (sort-by :index matches)]
    (reduce (fn [current-tr match]
              (try
                (let [from (+ start-pos (:index match))
                      to (+ from (count (:text match)))
                      node (create-node match schema)]
                  (if node
                    (do
                      (log/info "Replacing text with node at positions" from to
                                "text:" (:text match)
                                "doc:" (-> current-tr .-doc .toString))
                      (.replaceWith current-tr from to node))
                    current-tr))
                (catch :default e
                  (log/error "Error processing pattern:" (clj->js match) e)
                  current-tr)))
            tr
            sorted-matches)))


(defn- is-special-node? [node-type->regex node-type ]
  (contains? (set (keys node-type->regex)) node-type))

(defn find-node-regex-matches [node-type->regex text]
  (let [matches (reduce
                 (fn [acc [node-type regex]]
                   (concat acc (map (fn [x] {:type node-type
                                             :text x
                                             :index (.indexOf text x)})
                                    (re-seq regex text))))
                 []
                 node-type->regex)]
    (sort-by :index matches)))

(defn create-pattern-plugin [schema]
  (pm-state/Plugin.
   #js {:props #js {:nodeViews (create-node-views)} 
        :appendTransaction
        (fn [transactions old-state state]
          (when (and (some #(.-docChanged %) transactions)
                     (not (some #(.getMeta % "pattern-transform") transactions)))
            (let [tr-0 (.-tr state)
                  doc (.-doc state)
                  node-type->regex {"action" #"\(go [^\(\)\[\]]+\)"
                                    "event" #"\[e [^\(\)\[\]]+\]"
                                    "pubkey" #"\[p [^\(\)\[\]]+\]"
                                    "relay" #"\[r [^\(\)\[\]]+\]"
                                    "timestamp" #"\[t [^\(\)\[\]]+\]"
                                    "geohash" #"\[s [^\(\)\[\]]+\]"}
                  node->pos #js []
                  _ (.descendants doc
                                  (fn [node pos]
                                    (let [resolved-pos (.resolve doc pos)
                                          parent-name (-> resolved-pos .-parent .-type .-name)]
                                      (when (and (= (-> node .-type .-name) "text")
                                                 (not (is-special-node? node-type->regex 
                                                                        parent-name)))
                                        (.push node->pos #js [node pos])))
                                    true))
                  tr-1 (reduce
                        (fn [current-tr [node pos]]
                          (let [node-text (.-text node)
                                matches (find-node-regex-matches node-type->regex
                                                                 node-text)]
                            (if-not (seq matches)
                              current-tr
                              (process-matches current-tr matches pos schema))))
                        tr-0
                        node->pos)]
              (if (and tr-1
                       (.-steps tr-1)
                       (not= (.-steps tr-0) (.-steps tr-1)))
                (do
                  (.setMeta tr-1 "pattern-transform" true)
                  tr-1)
                tr-0))))}))