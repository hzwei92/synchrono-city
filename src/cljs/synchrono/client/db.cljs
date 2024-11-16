(ns synchrono.client.db
  (:require [re-frame.core :as rf]))

(def default-db
  {:relays ["/"]
   :relay->metadata {}
   :new-relay ""
   :public-key nil
   :encrypted-private-key nil
   :private-key nil
   :generating-key? false
   :keypair-menu-open? false
   :password ""
   :confirm-password ""
   :menu-open? false
   :kind 1
   :editor/view nil
   :query nil
   :tags []
   :event-id->event {}
   :event-id->relays {}
   :kind->event-ids {}
   :geolocation nil})


(rf/reg-event-fx
 :init-db
 (fn []
   {:db default-db
    :dispatch-n [[:load-keypair-from-local-storage]
                 [:load-geolocation-from-local-storage]]}))

(rf/reg-event-fx
 :save-keypair-to-local-storage
 (fn [{:keys [db]} _]
   (js/localStorage.setItem "public-key" (:public-key db))
   (js/localStorage.setItem "encrypted-private-key" (:encrypted-private-key db))
   {:db db}))

(rf/reg-event-fx
 :clear-keypair-from-local-storage
 (fn [{:keys [db]} _]
   (js/localStorage.removeItem "public-key")
   (js/localStorage.removeItem "encrypted-private-key")
   {:db db}))

(rf/reg-event-fx
 :save-geolocation-to-local-storage
 (fn [_ [_ geolocation]]
   (js/localStorage.setItem "geolocation" (js/JSON.stringify (clj->js geolocation)))
   {}))

(rf/reg-event-fx
 :load-keypair-from-local-storage
 (fn [{:keys [db]} _]
   (let [public-key (js/localStorage.getItem "public-key")
         encrypted-private-key (js/localStorage.getItem "encrypted-private-key")]
     {:db (-> db
              (assoc :public-key public-key)
              (assoc :encrypted-private-key encrypted-private-key)
              )})))

(rf/reg-event-fx
 :load-geolocation-from-local-storage
 (fn [{:keys [db]} _]
   (let [geolocation (some-> (js/localStorage.getItem "geolocation")
                            js/JSON.parse
                            (js->clj :keywordize-keys true))]
     {:db (assoc db :geolocation geolocation)})))

(rf/reg-sub
 :debug-geolocation
 (fn [db _]
   (js/console.log "Current geolocation in db:" (clj->js (:geolocation db)))
   (:geolocation db)))

(rf/reg-event-db
 :set-geolocation
 (fn [db [_ geolocation]]
   (js/console.log "Setting geolocation in db:" (clj->js geolocation))
   (assoc db :geolocation geolocation)))

(rf/reg-event-fx
 :save-geolocation
 (fn [{:keys [db]} [_ geolocation]]
   {:db (assoc db :geolocation geolocation)
    :fx [[:dispatch [:save-geolocation-to-local-storage geolocation]]]}))

(rf/reg-sub
 :geolocation
 (fn [db _]
   (js/console.log "Subscription :geolocation called, value:" (clj->js (:geolocation db)))
   (:geolocation db)))

