(ns synchrono.client.recents
  (:require [re-frame.core :as rf]
            ["ngeohash" :as geohash]
            [taoensso.timbre :as log]
            [synchrono.client.popup :refer [show-copied-popup]]))

(defn event-view [event]
  [:div.event-item
   [:div.event-relays
    (let [relays @(rf/subscribe [:event-id->relays (:id event)])]
      (doall
       (map-indexed (fn [idx relay]
                      ^{:key (str relay "-" idx)}
                      [:div.event-relay
                       {:on-click (fn [e]
                                  (let [text (str "[r " relay "]")]
                                    (.. js/navigator -clipboard (writeText text))
                                    (show-copied-popup e)))}
                       (str "[r " relay "]")])
                    relays)))]
   [:div.event-pubkey
    {:on-click (fn [e]
                (let [text (str "[p " (:pubkey event) "]")]
                  (.. js/navigator -clipboard (writeText text))
                  (show-copied-popup e)))}
    (str "[p " (subs (:pubkey event) 0 8) "..." (subs (:pubkey event) (- (count (:pubkey event)) 8)) "]")]
   [:div.event
    {:on-click (fn [e]
                (let [text (str "[e " (:id event) "]")]
                  (.. js/navigator -clipboard (writeText text))
                  (show-copied-popup e)))}
    (str "[e " (subs (:id event) 0 8) "..." (subs (:id event) (- (count (:id event)) 8)) "]")]
   [:div.event-timestamp
    {:on-click (fn [e]
                (let [timestamp (-> (:created_at event)
                                  (* 1000)
                                  js/Date.
                                  (.toLocaleString))
                      text (str "[t " timestamp "]")]
                  (.. js/navigator -clipboard (writeText text))
                  (show-copied-popup e)))}
    (str "[t "
         (-> (:created_at event)
             (* 1000)
             js/Date.
             (.toLocaleString))
         "]")]
   (let [tags (:tags event)
         gh-tag (first (filter #(= "s" (first %)) tags))
         gh (second gh-tag)
         decoded (when gh
                   (try (.decode geohash gh)
                        (catch :default _ nil)))]
     (when decoded
       (let [lng (.-longitude decoded)
             lat (.-latitude decoded)]
         [:div.event-geohash
          {:on-click (fn [e]
                       (let [text (str "[s " gh "]")]
                         (.. js/navigator -clipboard (writeText text))
                         (show-copied-popup e))
                       (log/warn "geohash clicked" gh)
                       (rf/dispatch [:set-geolocation {:lng lng
                                                       :lat lat
                                                       :geohash gh
                                                       :fly-to? true}]))}
          (str "[s " gh "]")])))
   [:div.event-content (:content event)]])

(defn recents []
  (let [recents (rf/subscribe [:recents])]
    [:div.recents
     [:div.recents-list
      (doall
       (map (fn [event]
              ^{:key (:id event)}
              [event-view event]) @recents))]]))

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
