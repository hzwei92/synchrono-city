(ns synchrono.client.body
  (:require [re-frame.core :as re-frame]
            [synchrono.client.relays :refer [relays-view]]
            [synchrono.client.draft :refer [draft-view]]
            [taoensso.timbre :as log]))

;; Subscriptions
(re-frame/reg-sub
 :current-route
 (fn [db]
   (get-in db [:app :current-route] :about)))  ; Default to :about route

;; Events
(re-frame/reg-event-db
 :set-current-route
 (fn [db [_ route]]
   (-> db
       (assoc-in [:app :current-route] route)
       (assoc-in [:app :menu-open?] false))))

;; Views
(defn body-view []
  (let [current-route (re-frame/subscribe [:current-route])]
    [:div.body
     [draft-view]]))

