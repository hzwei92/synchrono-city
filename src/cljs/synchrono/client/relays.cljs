(ns synchrono.client.relays
  (:require [re-frame.core :as re-frame]))

(defn relay-item [relay]
  [:div.relay-item
   [:div.title [:span.bold (:name relay)]]
   [:div.row.faint (:api-url relay)]
   [:div (:description relay)]
   [:ol
    [:li (str "Initial Credit Balance: " (.toLocaleString (:initial-credit-balance-sat relay)) " satoshis")]
    [:li (str "Minimum Withdrawal: " (:minimum-withdrawal-sat relay) " satoshis")]
    [:li (str "Daily Service Fee: " (:daily-fee-sat relay) " satoshis")]]
   (when (:credit-balance-sat relay)
     [:div.row
      [:span "Your credit balance: "]
      [:span.bold (str (.toLocaleString (:current-credit-balance-sat relay)) " satoshis")]])
   [:div.row
    [:button.action-button "Modify Contract"]]
   [:div.row
    [:button.action-button (str "Buy Contract")]]
   [:div.row
    [:button.action-button "Read Today"]]])

(defn relays []
  (let [relays (re-frame/subscribe [:relays])]
    (println "relays" @relays)
    (println "relays length" (count @relays))
    (println "relays first" (first @relays))
    (println "relays first keys" (keys (first @relays)))
    [:div.relays
     [:div.title "relays"]
     [:div
      (doall
       (for [relay @relays]
         ^{:key (:api-url relay)}
         (relay-item relay)))]]))

(re-frame/reg-event-fx
 :set-current-relay-api-url
 (fn [{:keys [db]} [_ api-url]]
   (.setItem js/localStorage "current-relay-api-url" api-url)
   {:db db}))

(re-frame/reg-sub
 :relays
 (fn [db]
   (get-in db [:relays :relays-list])))