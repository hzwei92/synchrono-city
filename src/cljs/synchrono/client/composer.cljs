(ns synchrono.client.composer
  (:require [re-frame.core :as rf]
            [reagent.core :as r]
            [synchrono.client.editor :refer [editor]]))

(defn current-time []
  (let [time (r/atom (-> (js/Date.)
                         (.toLocaleString)))]
    (js/setInterval #(reset! time (-> (js/Date.)
                                      (.toLocaleString))) 1000)
    [:div.timestamp
     (str "t " @time)]))

(defn composer []
  (let [geolocation @(rf/subscribe [:geolocation])]
    [:div.composer
     [:div.composer-body
      [editor]]
     [:div.composer-controls
      [:button.nostr-event-button
       {:on-click #(rf/dispatch [:publish])}
       "Publish"]
      [:div.kind "k 1"]
      [:div.geolocation
       (when geolocation
         (str "s " (:geohash geolocation)))]
      [current-time]]]))

(rf/reg-sub
 :geolocation
 (fn [db _]
   (:geolocation db)))
