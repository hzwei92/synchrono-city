(ns synchrono.client.relays
  (:require [re-frame.core :as re-frame]))

(defn relays []
  (let [relays (re-frame/subscribe [:relays])]
    [:div.relays
     [:div.title "relays"]
     [:div
      (for [relay @relays]
        ^{:key (:api-url relay)}
        [:div.relay-item
         [:div "Name: " [:span.bold (:name relay)]]
         [:div "Description: " (:description relay)]
         [:div "API URL: " (:api-url relay)]
         [:div "API Key: " (:api-key relay)]
         [:div "Lightning Public Key: " (:lightning_public_key relay)]
         [:div "Initial Balance (sats): " (:initial_balance_sat relay)]
         [:div "Minimum Balance (sats): " (:minimum_balance_sat relay)]
         [:div "Daily Usage Price (sats): " (:daily_usage_price_sat relay)]
         [:div "Current Balance (sats): " (:balance relay)]
         [:div "Active: " (str (:active? relay))]
         [:div "Captcha Required: " (str (:captcha_required relay))]
         [:div "Email Required: " (str (:email_required relay))]
         [:div "Mobile Required: " (str (:mobile_required relay))]
         [:div "Timezone: " (:timezone relay)]])]]))

(re-frame/reg-event-fx
 :set-current-relay-api-url
 (fn [{:keys [db]} [_ api-url]]
   (.setItem js/localStorage "current-relay-api-url" api-url)
   {:db db}))

(re-frame/reg-sub
 :relays
 (fn [db]
   (get-in db [:relays :relays-list])))