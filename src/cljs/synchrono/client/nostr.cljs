(ns synchrono.client.nostr
  (:require [re-frame.core :as re-frame]
            ["nostr-tools/pure" :refer [finalizeEvent verifyEvent]]
            ["nostr-tools/pool" :refer [SimplePool]]
            ["@noble/hashes/utils" :refer [hexToBytes]]
            [taoensso.timbre :as log]))

;; SimplePool manages connections to multiple Nostr relays
(defonce ^js relay-pool (SimplePool.))

(defn subscribe-many
  "Subscribes to multiple Nostr relays with the given query.
   Sets up event handlers for various relay responses:
   - onevent: Handles incoming events from relays
   - onok: Handles successful event publications
   - oneose: Handles end-of-stored-events signals
   - onnotice: Handles relay notifications"
  [relay-urls query]
  (log/info "About to subscribe to relays")
  (try
    (log/info "Subscribing to Nostr relays"
              {:relays relay-urls
               :query query})
    (let [sub-closer (atom nil)
          closer (fn [] (when @sub-closer
                          (.close @sub-closer)))]
      (reset! sub-closer
              (.subscribeMany relay-pool
                              (clj->js (map :url relay-urls))
                              (clj->js query)
                              (clj->js {:onevent
                                        (fn [js-event]
                                          (let [event (js->clj js-event :keywordize-keys true)]
                                            (re-frame/dispatch [:handle-event event])))
                                        :onok
                                        (fn [event-id success? message]
                                          (re-frame/dispatch [:handle-ok event-id success? message]))
                                        :oneose
                                        (fn []
                                          (closer)
                                          (re-frame/dispatch [:handle-eose]))
                                        :onnotice
                                        (fn [message]
                                          (re-frame/dispatch [:handle-notice message]))}))))
    (catch :default e
      (log/error "Failed to subscribe to relays"
                 {:relays relay-urls
                  :query query
                  :error (ex-message e)
                  :error_data (ex-data e)})
      nil)))

(defn publish
  "Publishes an event to multiple Nostr relays.
   Handles both string and JSON content, signs the event with the private key,
   and returns a promise that resolves when all relays have processed the event."
  [relay-urls event private-key]
  (try
    (log/info "Publishing event to relays"
              {:action "publish"
               :relays relay-urls
               :event_kind (:kind event)
               :pubkey (:pubkey event)
               :timestamp (js/Date.now)})
    (let [content (if (string? (:content event))
                    (:content event)
                    (js/JSON.stringify (clj->js (:content event))))
          content-event (assoc event :content content)
          js-event (clj->js content-event)
          finalized-event (finalizeEvent js-event (hexToBytes private-key))
          promises (.publish relay-pool (clj->js relay-urls) finalized-event)]
      (.then (js/Promise.all promises)
             (fn [results]
               (log/info "Event published successfully"
                         {:action "publish_success"
                          :event_id (.-id finalized-event)
                          :relay_count (count results)
                          :timestamp (js/Date.now)})
               results)))
    (catch :default e
      (log/error "Failed to publish event"
                 {:action "publish_error"
                  :relays relay-urls
                  :event_kind (:kind event)
                  :error (ex-message e)
                  :error_data (ex-data e)
                  :stack_trace (.-stack e)
                  :timestamp (js/Date.now)})
      nil)))

(defn query-sync
  "Synchronously queries multiple Nostr relays and returns combined results.
   Use this for immediate, blocking queries."
  [relay-urls query]
  (let [results (.querySync relay-pool (clj->js relay-urls) (clj->js query))]
    (js->clj results :keywordize-keys true)))

(defn get-events
  "Asynchronously fetches events from multiple Nostr relays.
   Similar to query-sync but non-blocking."
  [relay-urls query]
  (let [results (.get relay-pool (clj->js relay-urls) (clj->js query))]
    (js->clj results :keywordize-keys true)))

;; Re-frame event handlers for Nostr relay responses

(re-frame/reg-event-fx
 :handle-event
 (fn [{:keys [db]} [_ raw-event]]
   (let [event-id (:id raw-event)
         event-kind (:kind raw-event)
         event-content (try
                         (cond
                           (= event-kind 1) (:content raw-event)
                           :default (let [parsed-content (js/JSON.parse (:content raw-event))
                                          clj-content (js->clj parsed-content :keywordize-keys true)]
                                      clj-content))
                         (catch :default e
                           (log/error "Failed to parse event content according to NIP-01"
                                      {:error (ex-message e)
                                       :error_data (ex-data e)
                                       :event-id event-id
                                       :event-kind event-kind
                                       :content (:content raw-event)})
                           (:content raw-event)))
         event (assoc raw-event :content event-content)]
     (log/info "Received Event"
               {:event-id event-id
                :event-kind event-kind})
     {:db (-> db
              (assoc-in [:events :events-by-id event-id] event)
              (update-in [:events :event-ids-by-kind event-kind]
                         (fn [ids]
                           (if event-kind
                             ((fnil conj #{}) ids event-id)
                             ids))))})))

;; Handler for successful event publications
(re-frame/reg-event-fx
 :handle-ok
 (fn [{:keys [db]} [_ event-id success? message]]
   (log/info "Received OK"
             {:event_id event-id
              :success success?
              :message message})
   {:db db}))

;; Handler for end-of-stored-events signals
(re-frame/reg-event-fx
 :handle-eose
 (fn [{:keys [db]} [_]]
   (log/info "Received EOSE")
   {:db db}))

;; Handler for relay notifications
(re-frame/reg-event-fx
 :handle-notice
 (fn [{:keys [db]} [_ message]]
   (log/info "Received Notice"
             {:message message})
   {:db db}))
