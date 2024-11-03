;; -------------------------
;; Namespace Declaration
;; -------------------------
(ns synchrono.client.storage
  (:require [re-frame.core :as re-frame]))

;; -------------------------
;; Database Schema & Defaults
;; -------------------------

;; Core application state
(def default-app-db
  {:error nil
   :posting false
   :getting false
   :current-route :about
   :menu-open? false})

;; User key management state
(def default-keys-db
  {:keypairs-list [{:name "default"
                    :public-key nil
                    :encrypted-private-key nil}]
   :current-keypair-name "default"
   :current-keypair-private-key nil
   :name ""
   :password ""
   :confirm-password ""
   :public-key ""
   :private-key ""
   :show-password? false
   :show-confirm-password? false
   :clearing-keypair-name nil
   :unlocking-keypair-name nil
   :generating-keypair? false
   :importing-keypair? false
   :identification {:captcha-required false 
                    :email-required false
                    :mobile-required false}})

;; Relay configurations
(def default-relays-db
  {:relays-list [{:lightning_public_key nil ;; TODO: Add lightning public key
                  :api-url "https://synchrono.city"
                  :api-key ""
                  :name "synchrono.city"
                  :description (str "Everyone buys in for 10,000 credits. "
                                    "Every upvote transfers 1 credit. "
                                    "Upvote as much as you want. "
                                    "Also, we tax you 10 credits per day. "
                                    "That means you better start hustling, haha! "
                                    "Cash out by withdrawing credits. "
                                    "Win big in this marketplace for ideas.")
                  :initial-credit-balance-sat 10000    ; Initial balance in satoshis
                  :minimum-withdrawal-sat 70      ; Minimum required balance
                  :daily-fee-sat 10    ; Daily cost in satoshis
                  :curent-credit-balance-sat 0
                  :timezone "UTC-08:00"
                  :post-id-lists []
                  :posts-by-id {}}]
   :current-relay-api-url "https://synchrono.city"})

;; Posts data structure
(def default-posts-db
  {:post-content ""})            ; Current post being composed

;; Complete application database schema
(def default-db
  {:app default-app-db
   :keys default-keys-db
   :relays default-relays-db
   :posts default-posts-db})

;; -------------------------
;; Database Initialization
;; -------------------------
(re-frame/reg-event-fx
 :initialize-db
 (fn [_ _]
   {:db default-db
    :dispatch-n [[:load-keys-from-local-storage]
                 [:load-relays-from-local-storage]]}))

;; -------------------------
;; Key Storage Events
;; -------------------------

(re-frame/reg-event-fx
 :load-keys-from-local-storage
 (fn [{:keys [db]} _]
   (let [stored-keypairs (try
                           (let [parsed (.parse js/JSON (.getItem js/localStorage "keypairs"))
                                 parsed-array (js->clj parsed :keywordize-keys true)]
                             (if (sequential? parsed-array)
                               (filterv #(= (set (keys (first (:keypairs-list default-keys-db))))
                                            (set (keys %)))
                                        parsed-array)
                               []))
                           (catch :default _
                             []))]
     {:db (-> db
              (assoc-in [:keys :keypairs-list] stored-keypairs))})))

(re-frame/reg-event-fx
 :save-keys-to-local-storage
 (fn [{:keys [db]} _]
   (let [keypairs (get-in db [:keys :keypairs-list])]
     (.setItem js/localStorage "keypairs" (.stringify js/JSON (clj->js keypairs)))
     {:db db})))

(re-frame/reg-event-fx
 :clear-keys-from-local-storage
 (fn [{:keys [db]} _]
   (.removeItem js/localStorage "keypairs")
   (.removeItem js/localStorage "current-keypair-name")
   {:db db}))

;; -------------------------
;; Relay Storage Events
;; -------------------------

(re-frame/reg-event-fx
 :load-relays-from-local-storage
 (fn [{:keys [db]} _]
   (let [stored-relays (try
                         (let [parsed (.parse js/JSON (.getItem js/localStorage "relays"))
                               parsed-array (js->clj parsed :keywordize-keys true)]
                           (if (sequential? parsed-array)
                             (filterv #(= (set (keys (first (:relays-list default-relays-db))))
                                          (set (keys %)))
                                      parsed-array)
                             []))
                         (catch :default _
                           []))]
     (if (empty? stored-relays)
       {:db (-> db
                (assoc-in [:relays :relays-list] (:relays-list default-relays-db))
                (assoc-in [:relays :current-relay-api-url] (:api-url (first (:relays-list default-relays-db)))))}
       {:db (-> db
                (assoc-in [:relays :relays-list] stored-relays)
                (assoc-in [:relays :current-relay-api-url] (get-in stored-relays [0 :api-url])))}))))

(re-frame/reg-event-fx
 :handle-empty-relays-list
 (fn [{:keys [db]} _]
   {:db (-> db 
            (assoc-in [:relays :relays-list] (:relays-list default-relays-db))
            (assoc-in [:relays :current-relay-api-url] (:api-url (first (:relays-list default-relays-db)))))}))

(re-frame/reg-event-fx
 :save-relays-to-local-storage
 (fn [{:keys [db]} _]
   (let [relays (get-in db [:relays :relays-list])]
     (.setItem js/localStorage "relays" (.stringify js/JSON (clj->js relays)))
     {:db db})))

(re-frame/reg-event-fx
 :clear-relays-from-local-storage
 (fn [{:keys [db]} _]
   (.removeItem js/localStorage "relays")
   {:db db}))