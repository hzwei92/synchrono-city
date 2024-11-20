(ns synchrono.client.query
  (:require ["prosemirror-state" :as pm-state]
            ["prosemirror-model" :as pm-model] 
            ["prosemirror-view" :as pm-view]
            ["prosemirror-history" :as history]
            [reagent.core :as r]
            [synchrono.client.schema :refer [schema]]
            [synchrono.client.keymap :refer [make-keymap]]
            [re-frame.core :as rf]
            [taoensso.timbre :as log]))

(def base-plugins
  #js [(history/history)
       (make-keymap)])

(defn create-initial-doc []
  (let [paragraph-type (.. schema -nodes -paragraph)
        doc-type (.. schema -nodes -doc)
        empty-paragraph (.create paragraph-type)
        doc (.create doc-type #js {:content #js [empty-paragraph]})]
    doc))

(defn create-editor-state []
  (.create pm-state/EditorState
           #js {:schema schema
                :doc (create-initial-doc)
                :plugins base-plugins}))

(defn query-editor []
  (let [container-ref (r/atom nil)
        editor-view-ref (r/atom nil)]
    (r/create-class
     {:component-did-mount
      (fn []
        (when-let [dom-node @container-ref]
          (let [initial-state (create-editor-state)
                dispatch-fn (fn [tr]
                            (when-let [view @editor-view-ref]
                              (let [next-state (.apply (.-state view) tr)]
                                (.updateState view next-state))))
                view (pm-view/EditorView. dom-node
                                        #js {:state initial-state
                                             :dispatchTransaction dispatch-fn
                                             :editable (fn [] true)})]
            (reset! editor-view-ref view)
            (rf/dispatch [:set-query-editor-view view]))))
      
      :component-will-unmount
      (fn []
        (when-let [view @editor-view-ref]
          (.destroy view)
          (reset! editor-view-ref nil)
          (rf/dispatch [:set-query-editor-view nil])))

      :reagent-render
      (fn []
        [:div.query-editor
         {:ref #(reset! container-ref %)}])})))

(rf/reg-event-db
 :set-query-editor-view
 (fn [db [_ view]]
   (assoc db :query-editor-view view)))

(rf/reg-sub
 :query-editor-view
 (fn [db]
   (:query-editor-view db)))
