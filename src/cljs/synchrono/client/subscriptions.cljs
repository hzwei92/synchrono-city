(ns synchrono.client.subscriptions
  "Subscription management namespace - handles UI and events for managing relay subscriptions"
  (:require [re-frame.core :as re-frame]
            [synchrono.client.nostr :as nostr]
            [taoensso.timbre :as log]))

;; ======================
;; Subscriptions
;; ======================

(re-frame/reg-sub
 :subscription-step
 (fn [db _]
   (get-in db [:subscription :step] :initial)))

(re-frame/reg-sub
 :subscription-loading?
 (fn [db _]
   (get-in db [:subscription :loading?] false)))

;; ======================
;; Event Handlers
;; ======================

(re-frame/reg-event-fx
 :start-subscription
 (fn [{:keys [db]} _]
   {:db (assoc-in db [:subscription :loading?] true)
    :dispatch-later [{:ms 2000 :dispatch [:set-subscription-step :confirming]}
                    {:ms 4000 :dispatch [:subscription-success]}]}))

(re-frame/reg-event-db
 :set-subscription-step
 (fn [db [_ step]]
   (assoc-in db [:subscription :step] step)))

(re-frame/reg-event-db
 :subscription-success
 (fn [db _]
   (-> db
       (assoc-in [:subscription :step] :success)
       (assoc-in [:subscription :loading?] false))))

;; ======================
;; UI Components 
;; ======================

(defn subscriptions []
  [:div.subs
   [:div.title "subscriptions"]
   [:div.description "Choose a subscription plan to continue"]
   [:div.plans
    [:div.plan
     [:div.plan-title "Basic"]
     [:div.plan-description "For small publishers"]
     [:div.plan-price "$10"]]
    [:div.plan
     [:div.plan-title "Premium"]
     [:div.plan-description "For large publishers"]
     [:div.plan-price "$100"]]]])
