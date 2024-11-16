(ns synchrono.client.surveyor
  (:require [re-frame.core :as rf]
            [taoensso.timbre :as log]
            [clojure.string :as str]))

(rf/reg-sub
 :draft/query
 (fn [db]
   (get-in db [:drafts :query])))

(rf/reg-sub
 :events-by-id
 (fn [db]
   (get-in db [:events :events-by-id])))

(defn query []
  (let [query (rf/subscribe [:draft/query])] 
    #_(rf/dispatch [:search-events-by-content @query])
    [:div @query]))

(defn event-view [event]
  [:div.event
   [:div.event-id (str "e " (subs (:id event) 0 4) "..." (subs (:id event) (- (count (:id event)) 4)))]
   [:div.event-pubkey
    (str "p " (subs (:pubkey event) 0 4) "..." (subs (:pubkey event) (- (count (:pubkey event)) 4)))]
   [:div.event-timestamp (-> (:created_at event)
                             (* 1000)
                             js/Date.
                             (.toLocaleString))]
   [:div.event-kind (:kind event)]
   (let [content-lines (str/split (:content event) "\n" )]
      (map-indexed (fn [i line] ^{:key i}
              [:div.event-content line [:br]]) content-lines))
   (map-indexed (fn [i tag] ^{:key i}
          [:div.event-tag (str "[" (str/join " " tag) "]")]) (:tags event))])


(defn events []
  (let [events-by-id (rf/subscribe [:events-by-id])
        events-list (vals @events-by-id)
        sorted-events (sort-by #(:created_at %) > events-list)]
    (map (fn [event] ^{:key (:id event)} [event-view event]) sorted-events)))

(defn surveyor []
  [:div.surveyor
   [:div.surveyor-events (events)]])
