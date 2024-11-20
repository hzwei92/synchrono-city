(ns synchrono.client.composer
  (:require [re-frame.core :as rf]
            [reagent.core :as r]
            [synchrono.client.editor :refer [editor]]
            [synchrono.client.popup :refer [show-copied-popup]]))

(defn current-time []
  (let [time (r/atom (-> (js/Date.)
                         (.toLocaleString)))]
    (js/setInterval #(reset! time (-> (js/Date.)
                                      (.toLocaleString))) 1000)
    [:div.event-timestamp
     [:div
      {:on-click (fn [e]
                   (let [text (str "[t " @time "]")]
                     (.. js/navigator -clipboard (writeText text))
                     (show-copied-popup e)))}
      (str "[t " @time "]")]]))

(defn composer []
  (let [geolocation @(rf/subscribe [:composer/geolocation])]
    [:div.composer
     [:div.composer-body
      [editor]]
     [:div.composer-controls
      [:button.nostr-event-button
       {:on-click #(rf/dispatch [:publish])}
       "Publish"]
      [:div.event-geohash
       [:div
        {:on-click (fn [e]
                     (let [text (str "[s " (:geohash geolocation) "]")]
                       (.. js/navigator -clipboard (writeText text))
                       (show-copied-popup e))
                     (rf/dispatch [:set-geolocation (assoc geolocation :fly-to? true)]))}
        (when geolocation
          (str "[s " (:geohash geolocation) "]"))]]
      [current-time]]]))

(rf/reg-sub
 :composer/geolocation
 (fn [db _]
   (:geolocation db)))
