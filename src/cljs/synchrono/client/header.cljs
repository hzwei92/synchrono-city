(ns synchrono.client.header
  (:require [re-frame.core :as re-frame]
            [synchrono.client.lightning :as lightning]))

(defn lightning-button []
  (let [connected? (re-frame/subscribe [:lightning-connected?])]
    [:button.header-button
     {:class (if @connected? "success" "warning")
      :on-click #(re-frame/dispatch [:connect-lightning-wallet])}
     (if @connected?
       "⚡"
       "⚡")]))

(defn header []
  (let [keypairs-list (re-frame/subscribe [:keypairs-list])
        current-keypair (re-frame/subscribe [:current-keypair])
        current-keypair-private-key (re-frame/subscribe [:current-keypair-private-key])]
    [:div.header
     [:div.header-left
      [:button.header-menu-button {:on-click #(re-frame/dispatch [:toggle-menu])} "☰"]
      [:div.header-title "synchrono.city"]]
     [:div.header-right
      [lightning-button]
      (if (empty? @keypairs-list)
        [:button.header-button.error {:on-click #(re-frame/dispatch [:set-current-route :keys])}
         "No keys"]
        (if @current-keypair-private-key
          [:button.header-button.success {:on-click #(re-frame/dispatch [:set-current-route :keys])}
           (:name @current-keypair)]
          [:button.header-button.error {:on-click #(re-frame/dispatch [:set-current-route :keys])}
           "Keys locked"]))]]))