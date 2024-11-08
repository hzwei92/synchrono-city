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
   :posting false
   :getting false
   :current-route :about
   :menu-open? false})

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

;; Contract configuration - defines membership rules and costs
(def default-contract
  {:id nil
   :name "synchrono.city"
   :about (str
           "Everyone buys in for 100,000 satoshis by sending 0.001 BTC to me. "
           "\nTransfer satoshis to other people by upvoting their entries. "
           "\nWe each pay dues of 100 satoshis per day, so you better start hustling! "
           "\nCash out any time; I will send BTC to you. "
           "\nSo long as you leave enough satoshis to pay for 1 week of dues. "
           "\nWin big in this marketplace for ideas! ")
   :picture "https://synchrono.city/JAMN.png"
   :initial-credit-balance-sat 100000  ; Initial balance in satoshis
   :minimum-withdrawal-sat 7000        ; Minimum required balance
   :daily-fee-sat 100                  ; Daily cost in satoshis
   :timezone "UTC-08:00"})

;; Contract state management
(def default-contracts-db
  {:current-contract default-contract
   :new-contract? false
   :my-contracts? false
   :available-contracts? true})

;; Posts/drafts state
(def default-drafts-db
  {:current-draft-content ""
   :drafts []})

;; Complete application database schema
(def default-db
  {:app default-app-db
   :keys default-keys-db
   :relays default-relays-db
   :events default-events-db
   :contracts default-contracts-db
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
                             (if (sequential? parsed-array)
                               (filterv #(= (set (keys (first (:keypairs-list default-keys-db))))
                                            (set (keys %)))
                                        parsed-array)
                               []))
                           (catch :default _
                             []))
         stored-relays (try
                         (let [parsed (.parse js/JSON (.getItem js/localStorage "relays"))
                               parsed-array (js->clj parsed :keywordize-keys true)]
                           (if (sequential? parsed-array)
                             parsed-array
                             []))
                         (catch :default _
                           []))]
     {:db (-> db
              (assoc-in [:keys :keypairs-list] stored-keypairs)
              (assoc-in [:relays :relays-list] stored-relays))
      :dispatch [:nostr-connect-to-relays]})))

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