(ns synchrono.client.header
  (:require [re-frame.core :as rf]
            [synchrono.client.lightning :as lightning]))

;; Subscriptions
(rf/reg-sub
 :headers/lightning-connected?
 (fn [db]
   (get-in db [:lightning :connected?] false)))

(rf/reg-sub
 :headers/keypairs-list
 (fn [db]
   (get-in db [:keys :keypairs-list] [])))

(rf/reg-sub
 :headers/current-keypair
 (fn [db]
   (get-in db [:keys :current-keypair] nil)))

(rf/reg-sub
 :headers/current-keypair-private-key
 (fn [db]
   (get-in db [:keys :current-keypair-private-key] nil)))

;; Views
(defn lightning-button []
  (let [connected? (rf/subscribe [:headers/lightning-connected?])]
    [:button.header-button
     {:class (if @connected? "success" "warning")
      :on-click #(rf/dispatch [:connect-lightning-wallet])}
     (if @connected?
       "⚡"
       "⚡")]))

(defn keychain []
  (let [keypairs-list (rf/subscribe [:headers/keypairs-list])
        current-keypair (rf/subscribe [:headers/current-keypair])
        current-keypair-private-key (rf/subscribe [:headers/current-keypair-private-key])]
    (if (empty? @keypairs-list)
      [:button.header-button.error {:on-click #(rf/dispatch [:set-current-route :keys])}
       "No keys"]
      (if @current-keypair-private-key
        [:button.header-button.success {:on-click #(rf/dispatch [:set-current-route :keys])}
         (:name @current-keypair)]
        [:button.header-button.error {:on-click #(rf/dispatch [:set-current-route :keys])}
         "Keys locked"]))))

(defn header-view []
  [:div.header
   [:div.header-left
    [:button.header-menu-button {:on-click #(rf/dispatch [:toggle-menu])} "☰"]
    [:div.header-title "synchrono.city"]]
   [:div.header-right]])