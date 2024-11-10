(ns synchrono.client.body
  (:require [re-frame.core :as re-frame]
            [synchrono.client.about :refer [about]]
            [synchrono.client.keys :refer [keys-view]]
            [synchrono.client.relays :refer [relays]]
            [synchrono.client.subscriptions :refer [subscriptions]]
            [synchrono.client.write :refer [write]]
            [synchrono.client.read :refer [read]]))

(defn body []
  (let [current-route (re-frame/subscribe [:current-route])]
    [:div.body
     (case @current-route
       :about [about]
       :keys [keys-view]
       :relays [relays]
       :subscriptions [subscriptions]
       :write [write]
       :read [read]
       [:div "404"])])) ; Default to about page


(re-frame/reg-sub
 :current-route
 (fn [db]
   (get-in db [:app :current-route])))

(re-frame/reg-event-db
 :set-current-route
 (fn [db [_ route]]
   (-> db
       (assoc-in [:app :current-route] route)
       (assoc-in [:app :menu-open?] false))))