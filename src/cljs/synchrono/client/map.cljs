(ns synchrono.client.map
  (:require ["mapbox-gl" :as mapbox]
            [reagent.core :as r]
            [re-frame.core :as rf]
            ["ngeohash" :as geohash]))

(def access-token "pk.eyJ1Ijoid2VpaHoiLCJhIjoiY2xlNjVuaWI1MDJjcjNybXJsbGo4bXgyMiJ9.w_9vD530_V81gcdS-yZOLw") ; TODO put in .env

(defn add-marker [map lngLat marker-atom]
  (when @marker-atom
    (.remove @marker-atom))
  (let [marker (new (.-Marker mapbox)
                    (clj->js {:color "dimgray"}))
        lat (.-lat lngLat)
        lng (.-lng lngLat)
        gh (geohash/encode lat lng)
        geolocation {:lng lng
                     :lat lat
                     :geohash gh}]
    (.setLngLat marker lngLat)
    (.addTo marker map)
    (reset! marker-atom marker)
    (js/console.log "Dispatching geolocation update:" (clj->js geolocation))
    (rf/dispatch [:set-geolocation geolocation])))

(defn init-map [container saved-geolocation]
  (when container
    (set! (.-accessToken mapbox) access-token)
    (let [initial-lng (or (:lng saved-geolocation) (- (* (rand) 360) 180))
          initial-lat (or (:lat saved-geolocation) (- (* (rand) 170) 85))
          map (new (.-Map mapbox)
                   (clj->js {:container container
                            :style "mapbox://styles/mapbox/dark-v11"
                            :center [initial-lng initial-lat]
                            :zoom 0.8
                            :pitch 0
                            :bearing 0}))
          marker-atom (atom nil)]
      (.on map "click" (fn [e]
                        (add-marker map (.-lngLat e) marker-atom)))
      (add-marker map (new (.-LngLat mapbox) initial-lng initial-lat) marker-atom)
      map)))

(defn map []
  (let [map-instance (r/atom nil)
        map-container (r/atom nil)
        saved-geolocation @(rf/subscribe [:geolocation])]
    (r/create-class
     {:component-did-mount
      (fn []
        (when @map-container
          (reset! map-instance (init-map @map-container saved-geolocation))))
      
      :component-will-unmount
      (fn []
        (when @map-instance
          (.remove @map-instance)))
      
      :reagent-render
      (fn []
        [:div.map {:ref #(reset! map-container %)}])})))

(rf/reg-event-fx
 :set-geolocation
 (fn [{:keys [db]} [_ geolocation]]
   (js/console.log "Setting geolocation in db:" (clj->js geolocation))
   {:db (assoc db :geolocation geolocation)
    :dispatch [:save-geolocation-to-local-storage geolocation]}))

