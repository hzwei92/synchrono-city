(ns synchrono.client.plugin
  (:require ["prosemirror-state" :as pm-state]
            [taoensso.timbre :as log]))

(defn create-text-node [text schema]
  (log/info "Creating text node with text:" text)
  (.text schema text))

(defn find-node-regex-matches [text node-type->regex]
  (let [matches (reduce
                 (fn [acc [node-type regex]]
                   (concat acc (map (fn [x] {:type node-type
                                             :text x
                                             :index (.indexOf text x)})
                                  (re-seq regex text))))
                 []
                 node-type->regex)]
    (sort-by :index matches)))

(defn- create-node [match schema]
  (try
    (let [text-node (create-text-node (:text match) schema)
          schema-node-type (case (:type match)
                     "option" (-> schema .-nodes .-option)
                     "command" (-> schema .-nodes .-command)
                     "tag" (-> schema .-nodes .-tag)
                     nil)
          _ (log/info "Creating node for match:" match "with type")]
      (when schema-node-type
        (let [node (.create schema-node-type #js {} #js [text-node])]
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

(defn- is-special-node? [node-type]
  (contains? #{"option" "command" "tag"} node-type))

(defn create-pattern-plugin [schema]
  (pm-state/Plugin.
   #js {:appendTransaction
        (fn [transactions old-state state]
          (when (and (some #(.-docChanged %) transactions)
                    (not (some #(.getMeta % "pattern-transform") transactions)))
            (let [tr-0 (.-tr state)
                  doc (.-doc state)
                  node->pos #js []
                  _ (.descendants doc 
                                (fn [node pos]
                                  (when (and (= (-> node .-type .-name) "text")
                                           (not (is-special-node? (some-> node .-parent .-type .-name))))
                                    (.push node->pos #js [node pos]))
                                  true))
                  tr-1 (reduce
                        (fn [current-tr node->pos]
                          (let [node (aget node->pos 0)
                                pos (aget node->pos 1)
                                node-text (.-text node)
                                matches (find-node-regex-matches
                                         node-text
                                         {"option" #"\([^\(\)\[\]]+\)"
                                          "command" #"\(\([^\(\)\[\]]+\)\)"
                                          "tag" #"\[[^\(\)\[\]]+\]"})]
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