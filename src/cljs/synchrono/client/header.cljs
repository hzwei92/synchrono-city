(ns synchrono.client.header
  (:require [re-frame.core :as re-frame]))

(defn header []
  (let [keypairs-list (re-frame/subscribe [:keypairs-list])
        current-keypair (re-frame/subscribe [:current-keypair])
        current-keypair-private-key (re-frame/subscribe [:current-keypair-private-key])]
    [:div.header
     [:div.header-left
      [:button.header-menu-button {:on-click #(re-frame/dispatch [:toggle-menu])} "☰"]
      [:div.header-title "synchrono.city"]]
     [:div.header-right
      (if (empty? @keypairs-list)
        [:button.header-button.error {:on-click #(re-frame/dispatch [:set-current-route :keys])}
         "No keys"]
        (if @current-keypair-private-key
          [:button.header-button {:on-click #(re-frame/dispatch [:set-current-route :keys])}
           (:name @current-keypair)]
          [:button.header-button.error {:on-click #(re-frame/dispatch [:set-current-route :keys])}
           "Keys locked"]))]]))