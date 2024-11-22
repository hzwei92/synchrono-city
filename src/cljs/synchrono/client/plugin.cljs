(ns synchrono.client.plugin
  (:require ["prosemirror-state" :as pm-state]
            [taoensso.timbre :as log]
            [clojure.string :as str]
            [re-frame.core :as rf]
            [synchrono.client.popup :refer [show-copied-popup]]
            [synchrono.client.click :refer [handle-click]]))

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
                    preposition (.. node -attrs -preposition)
                    display-text (if expanded?
                                 (str "[e " event-id " " preposition "]")
                                 (str "[e " (shorten-id event-id) " " preposition "]"))]
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

(defn- handle-event-single-click [node e]
  (let [text (str "[e " (.. node -attrs -eventId) "]")]
    (.. js/navigator -clipboard (writeText text))
    (show-copied-popup e)))

(defn- handle-event-double-click [node e view get-pos]
  (.stopPropagation e)
  (when (and view (.-state view))
    (let [tr (.. view -state -tr)
          pos (get-pos)]
      (when pos
        (let [current-preposition (.. node -attrs -preposition)
              new-preposition (if (= current-preposition "reply") "root" "reply")
              new-attrs #js {:eventId (.. node -attrs -eventId)
                           :nodeId (.. node -attrs -nodeId)
                           :expanded (.. node -attrs -expanded)
                           :preposition new-preposition}]
          (.setNodeMarkup tr pos (.-type node) new-attrs)
          (.dispatch view tr)))))
  (rf/dispatch [:event-clicked (.. node -attrs -eventId)]))

(defn- handle-pubkey-single-click [node e]
  (let [text (str "[p " (.. node -attrs -pubkey) "]")]
    (.. js/navigator -clipboard (writeText text))
    (show-copied-popup e)))

(defn- handle-pubkey-double-click [_node _e _view _get-pos]
  nil) ; No-op for pubkey double-click

(defn- handle-relay-single-click [node e]
  (let [text (str "[r " (.. node -attrs -relay) "]")]
    (.. js/navigator -clipboard (writeText text))
    (show-copied-popup e)))

(defn- handle-timestamp-single-click [node e]
  (let [text (str "[t " (.. node -attrs -timestamp) "]")]
    (.. js/navigator -clipboard (writeText text))
    (show-copied-popup e)))

(defn- handle-geohash-single-click [node e]
  (let [text (str "[s " (.. node -attrs -geohash) "]")]
    (.. js/navigator -clipboard (writeText text))
    (show-copied-popup e)))

(defn- handle-action-single-click [node _e]
  (rf/dispatch [:action-clicked (.-textContent node)]))

(defn- handle-other-double-click [_node _e _view _get-pos]
  nil)

(defn- create-node-view [node-type]
  (fn [node view get-pos]
    (let [span (.createElement js/document "span")
          current-node (atom node)
          handler (fn [e]
                   (.preventDefault e)
                   (let [editor-view view
                         node @current-node]
                     (case node-type
                       "event" (handle-click 
                               (.. node -attrs -nodeId)
                               #(handle-event-single-click node %)
                               #(handle-event-double-click node % editor-view get-pos)
                               e)
                       "pubkey" (handle-click
                                (.. node -attrs -nodeId)
                                #(handle-pubkey-single-click node %)
                                #(handle-pubkey-double-click node % editor-view get-pos)
                                e)
                       "relay" (handle-click
                               (.. node -attrs -nodeId)
                               #(handle-relay-single-click node %)
                               #(handle-other-double-click node % editor-view get-pos)
                               e)
                       "timestamp" (handle-click
                                  (.. node -attrs -nodeId)
                                  #(handle-timestamp-single-click node %)
                                  #(handle-other-double-click node % editor-view get-pos)
                                  e)
                       "geohash" (handle-click
                                 (.. node -attrs -nodeId)
                                 #(handle-geohash-single-click node %)
                                 #(handle-other-double-click node % editor-view get-pos)
                                 e)
                       "action" (handle-click
                                (.. node -attrs -nodeId)
                                #(handle-action-single-click node %)
                                #(handle-other-double-click node % editor-view get-pos)
                                e))))]
      
      (.setAttribute span "class" node-type)
      (update-display span node node-type)
      
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
                       "timestamp" (str/replace text #"^\[t |\]$" "")
                       "geohash" (str/replace text #"^\[s |\]$" "")
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
                                  :expanded false
                                  :preposition "reply"}
                     "pubkey" #js {:pubkey clean-text
                                   :nodeId node-id
                                   :expanded false}
                     "relay" #js {:nodeId node-id
                                  :relay clean-text}
                     "timestamp" #js {:nodeId node-id
                                      :timestamp clean-text}
                     "geohash" #js {:nodeId node-id
                                    :geohash clean-text}
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