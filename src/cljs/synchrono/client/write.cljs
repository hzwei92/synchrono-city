(ns synchrono.client.write
  (:require [re-frame.core :as re-frame]
            ["@noble/hashes/sha256" :refer [sha256]]
            ["nostr-tools/pure" :refer [signEvent]]))

(defn create-nostr-event [content public-key private-key]
  (let [now (js/Math.floor (/ (js/Date.now) 1000))
        event {:kind 1 ; Regular note
               :created_at now
               :content content
               :tags []
               :pubkey public-key}
        serialized (js/JSON.stringify [0
                                       (:pubkey event)
                                       (:created_at event)
                                       (:kind event)
                                       (:tags event)
                                       (:content event)])
        id (sha256 serialized)
        sig (signEvent event private-key)]
    (assoc event :id id :sig sig)))

(defn write []
  (let [current-draft-content (re-frame/subscribe [:current-draft-content])
        current-keypair-private-key (re-frame/subscribe [:current-keypair-private-key])]
    [:div.write
     [:div.title "write"]
     [:div.editor
      [:textarea.editor-textarea
       {:value @current-draft-content
        :on-change #(re-frame/dispatch [:set-current-draft-content (-> % .-target .-value)])
        :placeholder (str "Write one good sentence.\n"
                          "Then write another.\n"
                          "Don't spend time re-explaining what you already know.\n"
                          "You are your first audience.\n"
                          "What is useful to you in this very moment?\n"
                          "What do you feel?")}]
      [:div.controls
       [:button.action-button
        {:on-click #(re-frame/dispatch [:save-post @current-draft-content @current-keypair-private-key])
         :disabled (empty? @current-keypair-private-key)
         :style {:margin-top "10px"}}
        "Save"]]]]))

(re-frame/reg-event-fx
 :set-current-draft-content
 (fn [{:keys [db]} [_ content]]
   {:db (assoc-in db [:drafts :current-draft-content] content)}))

(re-frame/reg-event-fx
 :save-post
 (fn [{:keys [db]} [_ content public-key private-key]]
   (let [event (create-nostr-event content public-key private-key)]
     {:ws-send {:event event}
      :db (-> db
              (assoc-in [:drafts :current-draft-content] ""))})))

(re-frame/reg-sub
 :current-draft-content
 (fn [db]
   (get-in db [:drafts :current-draft-content])))