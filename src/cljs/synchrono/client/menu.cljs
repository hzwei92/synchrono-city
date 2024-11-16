(ns synchrono.client.menu
  (:require [re-frame.core :as rf]
            [taoensso.timbre :as log]
            [synchrono.client.map :refer [map]]))

(defn menu []
  (let [menu-open? (rf/subscribe [:menu-open?])
        relays (rf/subscribe [:relays])
        relay->metadata (rf/subscribe [:relay->metadata])
        _ (log/info "relay->metadata" @relay->metadata)
        new-relay (rf/subscribe [:new-relay])]
    [:div.menu {:class (when-not @menu-open? "closed")}
     [map]
     [:div.relays
      (for [relay @relays]
        ^{:key relay}
        [:div.relay-item
         [:a.relay-url
          {:on-click #(rf/dispatch [:nostr/get-relay-metadata relay])}
          relay]
         (when-let [metadata (get @relay->metadata relay)]
           [:div.relay-metadata
            [:div.relay-name (:name metadata)]
            [:div.relay-description (:description metadata)]])])]
     [:div.add-relays-form
      [:input {:type "text"
               :value @new-relay
               :placeholder "another relay"
               :on-change #(rf/dispatch [:set-new-relay (-> % .-target .-value)])}]
      [:button.nostr-relay-button {:on-click #(rf/dispatch [:add-relay])} "Add"]]

     [:div.prompt " "]]))


(rf/reg-sub
 :menu-open?
 (fn [db]
   (get-in db [:app :menu-open?])))

(rf/reg-sub
 :relays
 (fn [db]
   (:relays db)))

(rf/reg-sub
 :relay->metadata
 (fn [db]
   (:relay->metadata db)))

(rf/reg-sub
 :new-relay
 (fn [db]
   (:new-relay db)))

(rf/reg-event-db
 :toggle-menu
 (fn [db [_]]
   (update-in db [:app :menu-open?] not)))

(rf/reg-event-db
 :set-new-relay
 (fn [db [_ value]]
   (assoc db :new-relay value)))

(rf/reg-event-db
 :add-relay
 (fn [db [_]]
   (-> db
       (update :relays conj (:new-relay db))
       (assoc :new-relay ""))))