(ns synchrono.client.read
  (:require [synchrono.client.nostr :as nostr]
            [re-frame.core :as re-frame]))

(re-frame/reg-sub
 :events-by-id
 (fn [db]
   (get-in db [:events :events-by-id])))

(re-frame/reg-sub
 :event-ids-by-kind
 (fn [db]
   (get-in db [:events :event-ids-by-kind])))

(re-frame/reg-event-fx
 :subscribe-events
 (fn [{:keys [db]}]
   (let [relay-list (get-in db [:relays :relays-list])
         urls (map #(:url %) relay-list)]
     (nostr/subscribe-many urls {:kinds [1] :limit 50})
     {:db db})))

(defn format-date [unix-timestamp]
  (-> (js/Date. (* unix-timestamp 1000))
      .toLocaleString))

(defn event-card [{:keys [content created_at pubkey]}]
  [:div.event-card {:style {:border "1px solid #ddd"
                           :padding "1rem"
                           :margin "0.5rem 0"
                           :border-radius "4px"}}
   [:div.event-header {:style {:margin-bottom "0.5rem"}}
    [:span.pubkey {:style {:color "#666"
                          :font-size "0.9rem"}} 
     (str (subs pubkey 0 8) "...")]
    [:span.timestamp {:style {:float "right"
                             :color "#666"
                             :font-size "0.9rem"}}
     (format-date created_at)]]
   [:div.content
    content]])

(defn read []
  (js/console.log "Read component mounted")
  [:div.read
   [:div.title "read"]
   [:button.subscribe-button 
    {:on-click #(re-frame/dispatch [:subscribe-events])
     :style {:margin-bottom "1rem"
             :padding "0.5rem 1rem"
             :border-radius "4px"
             :background-color "#007bff"
             :color "white"
             :border "none"
             :cursor "pointer"}}
    "Subscribe to Events"]
   (let [event-kinds @(re-frame/subscribe [:event-ids-by-kind])]
     [:div.event-kinds
      [:div.event-kind 
       "Kind 0: Metadata"
       (when (get event-kinds 0) " (present)")]
      [:div.event-kind 
       "Kind 1: Short Text Note"
       (when (get event-kinds 1) " (present)")]])
   [:div.events-list
    (let [events-by-id @(re-frame/subscribe [:events-by-id])]
      (for [evt (reverse (sort-by :created_at (vals events-by-id)))]
        ^{:key (:id evt)}
        [event-card evt]))]])