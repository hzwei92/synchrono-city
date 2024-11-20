(ns synchrono.client.map
   (:require ["mapbox-gl" :as mapbox]
             [reagent.core :as r]
             [re-frame.core :as rf]
             ["ngeohash" :as geohash]
             [taoensso.timbre :as log]))

;; Subscription handlers
(rf/reg-sub
 :event-id->event
 (fn [db _]
   (:event-id->event db)))

(rf/reg-sub
 :geolocation
 (fn [db _]
   (:geolocation db)))

(rf/reg-event-fx
 :set-geolocation
 (fn [{:keys [db]} [_ geolocation]]
   (log/info "set-geolocation" geolocation)
   {:db (assoc db :geolocation geolocation)
    :dispatch [:save-geolocation-to-local-storage geolocation]}))

(def access-token "pk.eyJ1Ijoid2VpaHoiLCJhIjoiY2xlNjVuaWI1MDJjcjNybXJsbGo4bXgyMiJ9.w_9vD530_V81gcdS-yZOLw") ; TODO put in .env

(def events-source-id "events-source")
(def events-layer-id "events-layer")
(def events-text-layer-id "events-text-layer")

(defn decode-geohash [gh]
  (let [decoded (.decode geohash gh)]
    {:lng (.-longitude decoded)
     :lat (.-latitude decoded)}))

(defn create-events-geojson [events]
  (when (seq events)  ;; Only process if we have events
    (clj->js
     {:type "FeatureCollection"
      :features (keep (fn [event]
                       (when (and event (map? event))  ;; Verify event is a valid map
                         (when-let [geohash-tag (first (filter #(= "s" (first %)) (:tags event)))]
                           (when-let [gh (second geohash-tag)]
                             (let [{:keys [lat lng]} (decode-geohash gh)]
                               (when (and lat lng (> lat -90) (< lat 90) (> lng -180) (< lng 180))
                                 {:type "Feature"
                                  :properties {:id (:id event)
                                             :geohash gh
                                             :lng lng
                                             :lat lat}
                                  :geometry {:type "Point"
                                           :coordinates [lng lat]}}))))))
                     events)})))

(defn update-event-circles [map events]
  (let [source (.getSource map events-source-id)]
    (if source
      ;; If source exists, just update the data
      (.setData source (create-events-geojson events))
      
      ;; If source doesn't exist, create source and layers
      (do
        ;; Add source
        (.addSource map events-source-id
                   (clj->js
                    {:type "geojson"
                     :data (create-events-geojson events)}))

        ;; Add circle layer
        (.addLayer map
                  (clj->js
                   {:id events-layer-id
                    :type "circle"
                    :source events-source-id
                    :paint {"circle-radius" 8
                           "circle-color" "#FFA500"
                           "circle-opacity" 0.6
                           "circle-stroke-width" 2
                           "circle-stroke-color" "#FFA500"
                           "circle-stroke-opacity" 0}}))

        ;; Add text layer
        (.addLayer map
                  (clj->js
                   {:id events-text-layer-id
                    :type "symbol"
                    :source events-source-id
                    :layout {"text-field" ["get" "geohash"]
                           "text-offset" [0, 1.5]
                           "text-anchor" "top"
                           "text-size" 11}
                    :paint {"text-color" "#ffffff"
                           "text-halo-color" "#000000"
                           "text-halo-width" 2}}))

        ;; Add mouse events for cursor
        (.on map "mouseenter" events-layer-id
             (fn []
               (set! (.. map (getCanvas) -style -cursor) "pointer")))

        (.on map "mouseleave" events-layer-id
             (fn []
               (set! (.. map (getCanvas) -style -cursor) "")))))))

(defn add-marker [map lngLat marker-atom]
  (when @marker-atom
    (.remove @marker-atom))
  (let [marker (new (.-Marker mapbox)
                   (clj->js {:color "dimgray"}))]
    (.setLngLat marker lngLat)
    (.addTo marker map)
    (reset! marker-atom marker)))

(defn init-map [container saved-geolocation marker-atom events]
  (when container
    (set! (.-accessToken mapbox) access-token)
    (let [initial-lng (or (:lng saved-geolocation) (- (* (rand) 360) 180))
          initial-lat (or (:lat saved-geolocation) (- (* (rand) 170) 85))
          map (new (.-Map mapbox)
                   (clj->js {:container container
                             :style "mapbox://styles/mapbox/dark-v11"
                             :center [initial-lng initial-lat]
                             :zoom 1.2
                             :pitch 0
                             :bearing 0}))]
      
      ;; Wait for both style and map to load before adding sources and layers
      (.on map "style.load"
           (fn []
             (update-event-circles map events)
             (add-marker map 
                        (new (.-LngLat mapbox) initial-lng initial-lat) 
                        marker-atom)))

      (.on map "click"
           (fn [e]
             (let [features (.queryRenderedFeatures map
                                                    (.-point e)
                                                    (clj->js {:layers [events-layer-id]}))]
               (log/info "clicked features" features)
               (if (empty? features)
                 (let [lngLat (.-lngLat e)
                       lng (.-lng lngLat)
                       lat (.-lat lngLat)
                       gh (.encode geohash lat lng 5)]
                   (log/warn "no-feature clicked" gh lng lat)
                   (rf/dispatch [:set-geolocation {:lng lng
                                                   :lat lat
                                                   :geohash gh
                                                   :fly-to? false}]))

                 (let [feature (first features)
                       properties (.-properties feature)
                       gh (.-geohash properties)
                       lng (.-lng properties)
                       lat (.-lat properties)]
                   (log/warn "feature clicked"
                             (js->clj feature :keywordize-keys true)
                             (js->clj properties :keywordize-keys true)
                             gh lng lat)
                   (rf/dispatch [:set-geolocation {:lng lng
                                                   :lat lat
                                                   :geohash gh
                                                   :fly-to? true}]))))))
      map)))

(defn minimap-component [event-id->event geolocation]
  (let [map-container (r/atom nil)
        map-instance (r/atom nil)
        marker-atom (r/atom nil)]
    (r/create-class
     {:component-did-mount
      (fn [this]
        (when @map-container
          (let [map1 (init-map @map-container geolocation marker-atom (vals event-id->event))]
            (reset! map-instance map1))))

      :component-did-update
      (fn [this old-argv]
        (let [[_ current-event-id->event current-geolocation] (r/argv this)
              [_ old-event-id->event old-geolocation] old-argv]
          (when (not= old-event-id->event current-event-id->event)
            (try
              (update-event-circles @map-instance (vals current-event-id->event))
              (catch :default e
                (log/error "Failed to update event circles" e))))
          (when (and (not= old-geolocation current-geolocation)
                     current-geolocation)  ;; Make sure geolocation exists
            (when (and (:lng current-geolocation) (:lat current-geolocation))
              (add-marker @map-instance
                          (new (.-LngLat mapbox)
                               (:lng current-geolocation)
                               (:lat current-geolocation))
                          marker-atom)))
          (when (and (:fly-to? current-geolocation)
                     @map-instance)
            (.flyTo @map-instance
                    (clj->js {:center [(:lng current-geolocation)
                                       (:lat current-geolocation)]
                              :zoom 2}))
            (rf/dispatch [:set-geolocation (assoc current-geolocation :fly-to? false)]))))

      :component-will-unmount
      (fn []
        (when @map-instance
          (.remove @map-instance)))

      :reagent-render
      (fn [event-id->event geolocation]  ;; Add the arguments here
        [:div.map {:ref #(reset! map-container %)}])})))

(defn mini-map []
  (let [event-id->event @(rf/subscribe [:event-id->event])
        geolocation @(rf/subscribe [:geolocation])]
    [:div.map-container
     [minimap-component event-id->event geolocation]]))
