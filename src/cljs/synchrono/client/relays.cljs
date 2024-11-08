(ns synchrono.client.relays
  "Relay management namespace - handles UI and events for managing relay connections"
  (:require [re-frame.core :as re-frame]
            [synchrono.client.nostr :as nostr]))

;; ======================
;; UI Components
;; ======================

(defn relays
  "Main relay management component. Shows list of relays and allows adding/removing."
  []
  (let [relays-list (re-frame/subscribe [:relays-list])
        message (re-frame/subscribe [:message])
        error (re-frame/subscribe [:error])
        new-relay-url (re-frame/subscribe [:new-relay-url])
        removing-relay-url (re-frame/subscribe [:removing-relay-url])]
    [:div.relays
     [:div.title "relays"]
     [:p "Publish and subscribe to multiple relays. " "If some fail, the data may still be accessible via the others."]
     [:p "See " [:a {:href "https://nostr.com"} "https://nostr.com"] " for more information."]
     [:p "Host your own relay to secure your copy of the data. "]
     ;; New relay input
     [:div.row
      [:input {:type "text"
               :value @new-relay-url
               :placeholder "wss://relay.example.com"
               :on-change #(re-frame/dispatch [:set-new-relay-url (.. % -target -value)])}]]
     [:div.row
      [:button.action-button
       {:on-click #(re-frame/dispatch [:add-relay])}
       "Add Relay"]]
     ;; Error/message display
     [:div.row
      (when @error
        [:div.error @error])
      (when @message
        [:div.message @message])]
     ;; List of existing relays
     [:div
      (doall
       (for [relay @relays-list]
         ^{:key relay}
         [:div.item
          [:div (:url relay)]
          (if (:connected? relay)
            [:div.row.success "connected"]
            [:div.row.faint "disconnected"])
          (if (and @removing-relay-url (= @removing-relay-url (:url relay)))
            [:div
             [:div.row "Are you sure you want to remove this relay?"]
             [:button.danger-button
              {:on-click #(re-frame/dispatch [:remove-relay relay])}
              "Remove"]
             [:button.content-button
              {:on-click #(re-frame/dispatch [:set-removing-relay-url nil])}
              "Cancel"]]
            [:button.danger-button
             {:on-click #(re-frame/dispatch [:set-removing-relay-url (:url relay)])}
             "Remove"])]))]]))

;; ======================
;; Event Handlers
;; ======================

(re-frame/reg-event-fx
 :nostr-connect-to-relays
 (fn [{:keys [db]} _]
   (let [relays-list (get-in db [:relays :relays-list])]
     (nostr/subscribe-many relays-list [{:kinds [4444] :#s ["synchrono"]}])
     {:db db})))


(re-frame/reg-event-db
 :set-removing-relay-url
 (fn [db [_ url]]
   (assoc-in db [:relays :removing-relay-url] url)))

(re-frame/reg-event-fx
 :add-relay
 (fn [{:keys [db]} _]
   (let [new-relay-url (get-in db [:relays :new-relay-url])]
     (if (empty? new-relay-url) 
       {:db (assoc-in db [:app :error] "Please enter a relay URL")}
       (let [relays-list (get-in db [:relays :relays-list])
             filtered-relays-list (filter #(not= (:url %) new-relay-url) relays-list)
             final-relays-list (conj filtered-relays-list {:url new-relay-url})]
         {:db (-> db
                  (assoc-in [:relays :relays-list] final-relays-list)
                  (assoc-in [:relays :new-relay-url] "")
                  (assoc-in [:app :message] "Relay added successfully"))
          :dispatch-n [[:save-relays-to-local-storage]
                       [:nostr-connect-to-relays]]})))))

(re-frame/reg-event-fx
 :remove-relay
 (fn [{:keys [db]} [_ relay]]
   (let [relays-list (get-in db [:relays :relays-list])
         filtered-relays-list (filter #(not= (:url %) (:url relay)) relays-list)]
     {:db (-> db
              (assoc-in [:relays :relays-list] filtered-relays-list)
              (assoc-in [:relays :removing-relay-url] nil)
              (assoc-in [:app :message] "Relay removed successfully"))
      :dispatch-n [[:save-relays-to-local-storage]
                   [:nostr-connect-to-relays]]})))

(re-frame/reg-event-db
 :set-new-relay-url
 (fn [db [_ url]]
   (assoc-in db [:relays :new-relay-url] url)))


;; ======================
;; Subscriptions
;; ======================

(re-frame/reg-sub
 :relays-list
 (fn [db]
   (get-in db [:relays :relays-list])))

(re-frame/reg-sub
 :new-relay-url
 (fn [db]
   (get-in db [:relays :new-relay-url])))

(re-frame/reg-sub
 :removing-relay-url
 (fn [db]
   (get-in db [:relays :removing-relay-url])))