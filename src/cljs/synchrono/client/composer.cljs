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
    @time))

(defn composer []
  (let [geolocation @(rf/subscribe [:composer/geolocation])]
    [:div.composer
     [:div.composer-body
      [editor]]
     [:div.composer-controls
      [:button.nostr-event-button
       {:on-click #(rf/dispatch [:publish])}
       "Publish"]
      [:div.composer-control
       [:div.timestamp
        {:on-double-click (fn [e]
                           (let [text (str "[t " (current-time) "]")]
                             (.. js/navigator -clipboard (writeText text))
                             (show-copied-popup e)))}
        (str "[t " (current-time) "]")]]
      [:div.composer-control
       [:div.geohash
        {:on-double-click (fn [e]
                           (let [text (str "[s " (:geohash geolocation) "]")]
                             (.. js/navigator -clipboard (writeText text))
                             (show-copied-popup e)))
         :on-click #(rf/dispatch [:set-geolocation (assoc geolocation :fly-to? true)])}
        (when geolocation
          (str "[s " (:geohash geolocation) "]"))]]]]))

(rf/reg-sub
 :composer/geolocation
 (fn [db _]
   (:geolocation db)))
