(ns synchrono.client.storage
  "Namespace for managing application state and local storage"
  (:require [re-frame.core :as re-frame]))

;; ======================
;; Database Schema
;; ======================

;; Core application state - messages, errors, routing
(def default-app-db
  {:message nil
   :error nil
   :current-route :home
   :menu-open? false
   :prompt-open? false})

;; Lightning wallet state
(def default-lightning-db
  {:provider nil
   :connecting? false
   :last-payment nil})

;; User key management state - keypairs, passwords, verification
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
   :removing-keypair-name nil
   :unlocking-keypair-name nil
   :generating-keypair? false
   :importing-keypair? false
   :identification {:captcha-verified? false
                    :email-verified? false
                    :mobile-verified? false}})

;; Relay configurations - websocket connections
(def default-relays-db
  {:relays-list [{:url "ws://localhost:3000/ws"}]
   :new-relay-url ""
   :removing-relay-url nil})

;; Event storage - nostr events indexed by id and kind
(def default-events-db
  {:events-by-id {}
   :event-ids-by-kind {}})

(def default-drafts-db
  {:doc nil
   :selection nil
   :tags []
   :query ""
   :reset? false})

;; Complete application database schema
(def default-db
  {:app default-app-db
   :lightning default-lightning-db
   :keys default-keys-db
   :relays default-relays-db
   :events default-events-db
   :drafts default-drafts-db})

;; ======================
;; Database Initialization
;; ======================

(re-frame/reg-event-fx
 :initialize-db
 (fn [_ _]
   {:db default-db
    :dispatch-n [[:load-keys-and-relays-from-local-storage]]}))

;; ======================
;; Local Storage Events
;; ======================

;; Load saved keys and relays from localStorage on startup
(re-frame/reg-event-fx
 :load-keys-and-relays-from-local-storage
 (fn [{:keys [db]} _]
   (let [stored-keypairs (try
                           (let [parsed (.parse js/JSON (.getItem js/localStorage "keypairs"))
                                 parsed-array (js->clj parsed :keywordize-keys true)]
                             parsed-array)
                           (catch :default _
                             []))
         stored-relays (try
                         (let [parsed (.parse js/JSON (.getItem js/localStorage "relays"))
                               parsed-array (js->clj parsed :keywordize-keys true)]
                           (if (seq? parsed-array)
                             parsed-array
                             [{:url "/"}]))
                         (catch :default _
                           [{:url "/"}]))]
     {:db (-> db
              (assoc-in [:keys :keypairs-list] stored-keypairs)
              (assoc-in [:relays :relays-list] stored-relays))
      :dispatch-n [[:nostr/fetch-relay-metadata]
                   [:nostr/subscribe-many [{:kind [0 1]}] false]]})))

;; Save keypairs to localStorage when updated
(re-frame/reg-event-fx
 :save-keys-to-local-storage
 (fn [{:keys [db]} _]
   (let [keypairs (get-in db [:keys :keypairs-list])]
     (js/localStorage.setItem "keypairs" (js/JSON.stringify (clj->js keypairs)))
     {:db db})))

;; Save relays to localStorage when updated
(re-frame/reg-event-fx
 :save-relays-to-local-storage
 (fn [{:keys [db]} _]
   (let [relays (get-in db [:relays :relays-list])]
     (js/localStorage.setItem "relays" (js/JSON.stringify (clj->js relays)))
     {:db db})))

;; ======================
;; Subscriptions
;; ======================

;; Subscribe to app messages
(re-frame/reg-sub
 :message
 (fn [db]
   (get-in db [:app :message])))

;; Subscribe to app errors  
(re-frame/reg-sub
 :error
 (fn [db]
   (get-in db [:app :error])))