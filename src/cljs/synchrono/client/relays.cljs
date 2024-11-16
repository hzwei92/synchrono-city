(ns synchrono.client.relays
  "Relay management namespace - handles UI and events for managing relay connections"
  (:require [re-frame.core :as rf]
            [synchrono.client.nostrodamus :as nostr]
            [taoensso.timbre :as log]
            [clojure.string :as str]))

;; ======================
;; Subscriptions
;; ======================

(rf/reg-sub
 :relays-list
 (fn [db]
   (get-in db [:relays :relays-list])))

(rf/reg-sub
 :new-relay-url
 (fn [db]
   (get-in db [:relays :new-relay-url])))

(rf/reg-sub
 :removing-relay-url
 (fn [db]
   (get-in db [:relays :removing-relay-url])))

;; ======================
;; Event Handlers
;; ======================

(rf/reg-event-db
 :set-removing-relay-url
 (fn [db [_ url]]
   (assoc-in db [:relays :removing-relay-url] url)))

(rf/reg-event-fx
 :add-relay
 (fn [{:keys [db]} _]
   (let [new-relay-url (get-in db [:relays :new-relay-url])]
     (cond
       (empty? new-relay-url)
       {:db (assoc-in db [:app :error] "Please enter a relay URL")}

       (= new-relay-url "/")
       {:db (assoc-in db [:app :error] "Cannot add default relay '/' - it's already included")}

       :else
       (let [relays-list (get-in db [:relays :relays-list])
             filtered-relays-list (filter #(not= (:url %) new-relay-url) relays-list)
             final-relays-list (conj filtered-relays-list {:url new-relay-url})]
         {:db (-> db
                  (assoc-in [:relays :relays-list] final-relays-list)
                  (assoc-in [:relays :new-relay-url] "")
                  (assoc-in [:app :message] "Relay added successfully"))
          :dispatch-n [[:save-relays-to-local-storage]
                       [:nostr-connect-to-relays]]
          :fx [[:dispatch [:fetch-relay-info new-relay-url]]]})))))

(rf/reg-event-fx
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

(rf/reg-event-db
 :set-new-relay-url
 (fn [db [_ url]]
   (assoc-in db [:relays :new-relay-url] url)))

(rf/reg-event-db
 :relay-info-success
 (fn [db [_ url info]]
   (log/debug "Received relay info:" info)
   (update-in db [:relays :relays-list]
              (fn [relays]
                (map #(if (= (:url %) url)
                        (assoc % :info info)
                        %)
                     relays)))))

(rf/reg-event-db
 :relay-info-error
 (fn [db [_ url error]]
   (log/warn "Failed to fetch relay info:" error)
   (update-in db [:relays :relays-list]
              (fn [relays]
                (map #(if (= (:url %) url)
                        (assoc % :info-error (str error))
                        %)
                     relays)))))

;; ======================
;; UI Components
;; ======================

(defn relay-info-view
  "Displays NIP-11 metadata for a relay"
  [relay]
  (when-let [metadata (:metadata relay)]
    [:div.relay-info
     (when (:name metadata)
       [:div.row
        [:span.label "Name: "]
        [:span.value (:name metadata)]])

     (when (:description metadata)
       [:div.row
        [:span.label "Description: "]
        [:span.value (:description metadata)]])

     (when (:supported_nips metadata)
       [:div.row
        [:span.label "NIPs: "]
        [:span.value (str/join ", " (:supported_nips metadata))]])

     (when-let [limits (:limitation metadata)]
       [:div.row
        [:span.label "Limits: "]
        [:div.limits
         (for [[k v] limits
               :when v]
           ^{:key k}
           [:div.limit
            [:span.limit-label (str/replace (name k) #"_" " ") ": "]
            [:span.limit-value v]])]])

     (when (:software metadata)
       [:div.row
        [:span.label "Software: "]
        [:span.value
         [:a {:href (:software metadata) :target "_blank"}
          (:software metadata)]]])

     (when (:version metadata)
       [:div.row
        [:span.label "Version: "]
        [:span.value (:version metadata)]])

     (when (:contact metadata)
       [:div.row
        [:span.label "Contact: "]
        [:span.value (:contact metadata)]])

     (when-let [error (:metadata-error relay)]
       [:div.row.error
        [:span "Error: " error]])]))

(defn relays-view
  "Main relay management component. Shows list of relays and allows adding/removing."
  []
  (let [relays-list (rf/subscribe [:relays-list])
        message (rf/subscribe [:message])
        error (rf/subscribe [:error])
        new-relay-url (rf/subscribe [:new-relay-url])
        removing-relay-url (rf/subscribe [:removing-relay-url])]
    [:div.relays
     [:div.title "relays"]
     [:p "Publish and subscribe to multiple relays. " "If some fail, the data may still be accessible via the others."]
     [:p "See " [:a {:href "https://nostr.com"} "https://nostr.com"] " for more information."]
     [:p "Host your own relay to secure your copy of the data. "]
     ;; Default relay display
     [:div
      (doall
       (for [relay @relays-list]
         ^{:key relay}
         [:div.item
          [:div.row (:url relay)]
          [relay-info-view relay]
          (if (= (:url relay) "/")
            [:div.faint "This is the default relay and cannot be removed"]
            (if (and @removing-relay-url (= @removing-relay-url (:url relay)))
              [:div
             [:div.row "Are you sure you want to remove this relay?"]
             [:button.danger-button
              {:on-click #(rf/dispatch [:remove-relay relay])}
              "Remove"]
             [:button.content-button
              {:on-click #(rf/dispatch [:set-removing-relay-url nil])}
              "Cancel"]]
              [:button.danger-button
               {:on-click #(rf/dispatch [:set-removing-relay-url (:url relay)])}
               "Remove"]))]))]
     [:div.row
      [:input {:type "text"
               :value @new-relay-url
               :placeholder "wss://relay.example.com"
               :on-change #(rf/dispatch [:set-new-relay-url (.. % -target -value)])}]]
     [:div.row
      (when @error
        [:div.error @error])
      (when @message
        [:div.message @message])]
     [:div.row
      [:button.action-button
       {:on-click #(rf/dispatch [:add-relay])}
       "Add Relay"]]]))
