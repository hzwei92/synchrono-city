(ns synchrono.client.core
  (:require ["react-dom/client" :as rdc]
            [re-frame.core :as re-frame]
            [reagent.core :as r]))

(def default-app-db
  {:current-route :about
   :error nil
   :posting false
   :getting false})

(def default-rules-db
  {:relays []
   :lightning_public_key nil ;; TODO: add this
   :initial_balance_sat 7000 ;; 50 weeks
   :minimum_balance_sat 140 ;; 7 days
   :daily_usage_price_sat 20 ;; 20 sat per day
   :timezone "UTC"
   :captcha_required false
   :email_verification_required false
   :mobile_verification_required false})

(def default-user-db
  {:public-key ""
   :encrypted-private-key ""
   :private-key ""
   :balance 0})

(def default-producer-db
  {:post-content ""})

(def default-consumer-db
  {:days []})

(def default-db
  {:app default-app-db
   :rules default-rules-db
   :user default-user-db
   :producer default-producer-db
   :consumer default-consumer-db})

(re-frame/reg-event-db
 :initialize-db
 (fn [_ _]
   default-db))

(defn app-view []
  [:div "Hello, World!"])

(defn mount-root []
  (re-frame/clear-subscription-cache!)
  (let [container (.getElementById js/document "app")
        root (rdc/createRoot container)]
    (.render root (r/as-element [app-view]))))

(defn init []
  (re-frame/dispatch-sync [:initialize-db])
  (mount-root))