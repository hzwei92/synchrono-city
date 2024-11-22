(ns synchrono.client.composer
  (:require [re-frame.core :as rf]
            [re-frame.db :as re-frame.db]
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
  (let [geolocation @(rf/subscribe [:composer/geolocation])
        height @(rf/subscribe [:composer/height])]
    [:div.composer
     [:div.composer-body
      {:style {:height (str height "px")}}
      [editor]]
     [:div.composer-controls
      [:button.nostr-event-button
       {:on-click #(rf/dispatch [:publish])}
       "Publish"]
      [:div.composer-control
       [:div.timestamp
        {:on-click (fn [e]
                     (let [text (str "[t " (current-time) "]")]
                       (.. js/navigator -clipboard (writeText text))
                       (show-copied-popup e)))}
        (str "[t " (current-time) "]")]]
      [:div.composer-control
       [:div.geohash
        {:on-click (fn [e]
                     (let [text (str "[s " (:geohash geolocation) "]")]
                       (.. js/navigator -clipboard (writeText text))
                       (show-copied-popup e)))
         :on-double-click #(rf/dispatch [:set-geolocation (assoc geolocation :fly-to? true)])}
        (when geolocation
          (str "[s " (:geohash geolocation) "]"))]]]
     [:div.composer-resize-handle
      {:on-mouse-down (fn [e]
                       (.preventDefault e)
                       (rf/dispatch [:composer/start-resize
                                     {:start-y (.-clientY e)
                                      :start-height height}]))
       :style {:cursor "ns-resize"}}]]))

(rf/reg-sub
 :composer/geolocation
 (fn [db _]
   (:geolocation db)))

(rf/reg-event-db
 :composer/start-resize
 (fn [db [_ resize-state]]
   (assoc db :composer/resize-state resize-state)))

(rf/reg-event-db
 :composer/end-resize
 (fn [db _]
   (dissoc db :composer/resize-state)))

(rf/reg-event-db
 :composer/resize
 (fn [db [_ new-height]]
   (assoc db :composer/height (max 40 new-height))))

(rf/reg-sub
 :composer/height
 (fn [db _]
   (get db :composer/height 300)))

(when-let [doc js/document]
  (.addEventListener doc "mousemove"
                    (fn [e]
                      (when-let [state (-> @re-frame.db/app-db :composer/resize-state)]
                        (let [delta (- (:start-y state) (.-clientY e))
                              new-height (- (:start-height state) delta)]
                          (rf/dispatch [:composer/resize new-height])))))
  
  (.addEventListener doc "mouseup"
                    (fn [_]
                      (rf/dispatch [:composer/end-resize]))))

(rf/reg-sub
 :composer/resize-state
 (fn [db _]
   (:composer/resize-state db)))
