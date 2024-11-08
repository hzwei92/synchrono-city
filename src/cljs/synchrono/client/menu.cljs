(ns synchrono.client.menu
  (:require [re-frame.core :as re-frame]))

(defn menu []
  (let [menu-open? (re-frame/subscribe [:menu-open?])]
    (when @menu-open?
      [:div.menu
       [:button.menu-button {:on-click #(re-frame/dispatch [:set-current-route :about])} "about"]
       [:button.menu-button {:on-click #(re-frame/dispatch [:set-current-route :keys])} "keypairs"]
       [:button.menu-button {:on-click #(re-frame/dispatch [:set-current-route :relays])} "relays"]
       [:button.menu-button {:on-click #(re-frame/dispatch [:set-current-route :contracts])} "contracts"]
       [:button.menu-button {:on-click #(re-frame/dispatch [:set-current-route :write])} "write"]
       [:button.menu-button {:on-click #(re-frame/dispatch [:set-current-route :read])} "read"]])))

(re-frame/reg-event-db
 :toggle-menu
 (fn [db [_]]
   (update-in db [:app :menu-open?] not)))

(re-frame/reg-sub
 :menu-open?
 (fn [db]
   (get-in db [:app :menu-open?])))