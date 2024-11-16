(ns synchrono.client.recents
  (:require [re-frame.core :as rf]
            [clojure.string :as str]))

(defn event-view [event]
  [:div.event-item
   [:div.event-id
    (str "e " (subs (:id event) 0 8) "..." (subs (:id event) (- (count (:id event)) 8)))]
   [:div.event-pubkey
    (str "p " (subs (:pubkey event) 0 8) "..." (subs (:pubkey event) (- (count (:pubkey event)) 8)))]
   (let [relays @(rf/subscribe [:event-id->relays (:id event)])]
     [:div.event-relays
      (str "r " (str/join ", " relays))])
   [:div.event-kind (str "k " (:kind event))]
   [:div.event-geohash (let [tags (:tags event)]
                         (if (some #(= "s" (first %)) tags)
                           (str "s " (second (first tags)))
                           ""))]
   [:div.event-timestamp
    (str "t "
         (-> (:created_at event)
             (* 1000)
             js/Date.
             (.toLocaleString)))]
   [:div.event-content (:content event)]])

(defn recents []
  (let [recents (rf/subscribe [:recents])]
    [:div.recents
     [:div.recents-list
      (map (fn [event]
             ^{:key (:id event)}
             [event-view event]) @recents)]]))

(rf/reg-sub
 :event-id->relays
 (fn [db [_ event-id]]
   (get-in db [:event-id->relays event-id])))

(rf/reg-sub
 :recents
 (fn [db _]
   (let [event-id->event (:event-id->event db)
         events (vals event-id->event)]
     (->> events
          (sort-by :created_at >)
          (take 50)))))
