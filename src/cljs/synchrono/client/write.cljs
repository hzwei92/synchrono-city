(ns synchrono.client.write
  (:require [re-frame.core :as re-frame]))

(defn write []
  (let [post-content (re-frame/subscribe [:post-content])
        private-key (re-frame/subscribe [:private-key])]
    (fn []
      [:div.write
       [:div.title "write"]
       [:div.editor
        [:textarea.editor-textarea
         {:value @post-content
          :on-change #(re-frame/dispatch [:set-post-content (-> % .-target .-value)])
          :placeholder (str "Write one good sentence.\n"
                            "Then write another.\n"
                            "Don't spend time re-explaining what you already know.\n"
                            "You are your first audience.\n"
                            "What is useful to you in this very moment?\n"
                            "What do you feel?")}]
        [:div.controls
         [:button.action-button
          {:on-click #(re-frame/dispatch [:save-post @post-content])
           :disabled (empty? @private-key)
           :style {:margin-top "10px"}}
          "Save"]]]])))

(re-frame/reg-event-fx
 :set-post-content
 (fn [{:keys [db]} [_ content]]
   {:db (assoc-in db [:posts :post-content] content)}))

 (re-frame/reg-sub
  :post-content
  (fn [db]
    (get db [:posts :post-content])))