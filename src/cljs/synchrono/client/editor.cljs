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
            [taoensso.timbre :as log]))

;;Subscriptions

(rf/reg-sub
 :doc
 (fn [db]
   (:doc db)))

(rf/reg-sub
 :selection
 (fn [db]
   (:selection db)))

(rf/reg-sub
 :editor/view
 (fn [db]
   (:editor/view db)))

(def base-plugins
  #js [(history/history)
       (make-keymap)])

(defn selection-in-query? [state]
  (let [selection (.-selection state)
        $pos (.-$from selection)]
    (loop [depth (.-depth $pos)]
      (let [node (.node $pos depth)]
        (if (= (.-name (.-type node)) "query")
          node
          (if (= depth 1)
            nil
            (recur (dec depth))))))))


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
      (catch :default _
        (.create pm-state/TextSelection doc)))))


(defn create-editor-state [{:keys [doc selection]}]
  (let [pm-doc (try
                (.fromJSON pm-model/Node schema (clj->js doc))
                (catch :default _
                  (create-initial-doc)))
        pm-selection (create-selection pm-doc selection)]
    (.create pm-state/EditorState
             #js {:schema schema
                  :doc pm-doc
                  :selection pm-selection
                  :plugins base-plugins})))

(defn serialize-editor-state [state]
  (let [doc (.-doc state)
        selection (.-selection state)]
    {:doc (.toJSON doc)
     :selection {:anchor (.-anchor selection)
                 :head (.-head selection)}}))


(defn editor []
  (let [container-ref (r/atom nil)
        editor-view-ref (r/atom nil)
        doc (rf/subscribe [:doc])
        selection (rf/subscribe [:selection])]
    (r/create-class
     {:component-did-mount
      (fn []
        (when-let [dom-node @container-ref]
          (let [initial-state (create-editor-state {:doc @doc
                                                   :selection @selection})
                dispatch-fn (fn [tr]
                             (when-let [view @editor-view-ref]
                               (let [next-state (.apply (.-state view) tr)]
                                 (.updateState view next-state)
                                 (when-let [query-node (selection-in-query? next-state)]
                                   (let [query (.-textContent query-node)]
                                     (rf/dispatch [:set-query query]))))))
                view (pm-view/EditorView. dom-node
                                        #js {:state initial-state
                                             :dispatchTransaction dispatch-fn
                                             :editable (fn [] true)})]
            (reset! editor-view-ref view)
            (rf/dispatch [:set-editor-view view]))))
      :component-will-unmount
      (fn []
        (when-let [view @view-ref]
          (.destroy view)
          (reset! view-ref nil)
          (rf/dispatch [:set-editor-view nil])))

      :reagent-render
      (fn []
        [:div.editor
         {:ref #(reset! container-ref %)}])})))


(rf/reg-event-fx
 :set-doc
 (fn [{:keys [db]} [_ doc]]
   {:db (assoc db :doc doc)}))

(rf/reg-event-fx
 :set-selection
 (fn [{:keys [db]} [_ selection]]
   {:db (assoc db :selection selection)}))

(rf/reg-event-fx
 :set-query
 (fn [{:keys [db]} [_ query]]
   {:db (assoc db :query query)}))


(defn format-node-content [node]
  (case (.-name (.-type node))
    "text" (.-text node)
    "tag" (.-textContent node)
    "query" (.-textContent node)
    ""))

(defn get-formatted-content [doc]
  (let [fragments (array)]
    (.nodesBetween doc 0 (.-size (.-content doc))
                   (fn [node pos parent index]
                     (cond
                       (= (.-name (.-type node)) "paragraph")
                       (do
                         (when (> (.-length fragments) 0)
                           (.push fragments "\n"))
                         true)

                       (or (= (.-name (.-type node)) "text")
                           (= (.-name (.-type node)) "tag")
                           (= (.-name (.-type node)) "query"))
                       (do
                         (.push fragments (format-node-content node))
                         false)

                       :else true)))
    (.join fragments "")))



(rf/reg-event-fx
 :publish
 (fn [{:keys [db]} _]
   (let [editor-view (:editor/view db)
         content (when editor-view 
                   (get-formatted-content (.. editor-view -state -doc)))
         geolocation (:geolocation db)
         tags [["s" (:geohash geolocation)]]]
       {:db db
        :dispatch-n [[:nostr/publish 1 content tags]
                     [:clear-editor]]})))

(rf/reg-event-db
 :set-editor-view
 (fn [db [_ view]]
   (assoc db :editor/view view)))
