(ns synchrono.client.nostr
  (:require [re-frame.core :as re-frame]
            ["nostr-tools/pure" :refer [finalizeEvent verifyEvent]]
            ["nostr-tools/pool" :refer [SimplePool]]
            ["@noble/hashes/utils" :refer [hexToBytes]]
            [ajax.core :as ajax]
            [taoensso.timbre :as log]
            [clojure.string :as string]))

;; -------------------------
;; Subscriptions
;; -------------------------

;; TODO: Add re-frame subscriptions here if needed

;; -------------------------
;; Core Helpers & State
;; -------------------------

;; SimplePool manages connections to multiple Nostr relays
(defonce ^js relay-pool (SimplePool.))

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

(defn fetch-relay-metadata
  "Fetches NIP-11 relay metadata from a relay URL.
   Returns a promise that resolves to the relay metadata or rejects with an error."
  [relay-url]
  (let [http-url (cond
                   ;; Handle absolute URLs (ws:// or wss://)
                   (re-find #"^wss?://" relay-url)
                   (-> relay-url
                       (string/replace #"^wss://" "https://")
                       (string/replace #"^ws://" "http://"))
                   
                   ;; Handle relative URLs or just "/"
                   :else
                   (str (.-origin js/window.location) relay-url))]
    (log/info "Fetching relay metadata" {:relay relay-url :url http-url})
    (-> (js/Promise.
         (fn [resolve reject]
           (ajax/GET http-url
             {:headers {"Accept" "application/nostr+json"}
              :handler (fn [response]
                        (re-frame/dispatch [:handle-relay-metadata relay-url response])
                        (resolve response))
              :error-handler (fn [error]
                              (log/warn "Failed to fetch relay metadata"
                                       {:relay relay-url
                                        :error error})
                              (reject error))
              :response-format :json
              :keywords? true})))
        (.catch (fn [error]
                 (log/error "Error fetching relay metadata"
                            {:relay relay-url
                             :error (ex-message error)})
                 (throw error))))))

;; -------------------------
;; Relay Communication
;; -------------------------

(defn normalize-relay-url
  "Normalizes a relay URL to ensure it has a proper websocket protocol prefix"
  [url]
  (cond
    (re-find #"^wss?://" url) url
    (string/starts-with? url "/") (str "ws://" (.-host js/window.location) url)
    :else (str "ws://" url)))

(defn subscribe-many
  "Subscribes to multiple Nostr relays with the given query.
   Returns a function that can be called to close the subscription."
  [relay-urls query]
  (log/info "About to subscribe to relays")
  (when (or (nil? relay-urls) (empty? relay-urls))
    (throw (js/Error. "No relay URLs provided")))
  
  (try
    (let [normalized-urls (mapv normalize-relay-url 
                               (if (sequential? relay-urls)
                                 relay-urls
                                 [relay-urls]))
          normalized-query (cond
                           (map? query) [query]
                           (sequential? query) query
                           :else [{}])
          _ (log/info "Subscribing to Nostr relays"
                     {:relays normalized-urls
                      :query normalized-query})
          sub (atom nil)
          closer (fn []
                  (when-let [subscription @sub]
                    (try
                      (.close subscription)
                      (catch :default e
                        (log/warn "Error closing subscription" 
                                 {:error (ex-message e)})))
                    (reset! sub nil)))]
      
      (reset! sub
              (.subscribeMany relay-pool
                             (clj->js normalized-urls)
                             (clj->js normalized-query)
                             (clj->js 
                              {:onevent
                               (fn [js-event]
                                 (try
                                   (let [event (js->clj js-event :keywordize-keys true)]
                                     (re-frame/dispatch [:handle-event event]))
                                   (catch :default e
                                     (log/error "Error handling event" 
                                              {:error (ex-message e)
                                               :event js-event}))))
                               :onok
                               (fn [event-id success? message]
                                 (re-frame/dispatch [:handle-ok event-id success? message]))
                               :oneose
                               (fn []
                                 (log/debug "Received EOSE")
                                 (re-frame/dispatch [:handle-eose]))
                               :onnotice
                               (fn [message]
                                 (log/debug "Received notice:" message)
                                 (re-frame/dispatch [:handle-notice message]))
                               :onerror
                               (fn [error]
                                 (log/error "Subscription error" {:error error})
                                 (re-frame/dispatch [:handle-subscription-error error]))})))
      closer)
    
    (catch :default e
      (log/error "Failed to subscribe to relays"
                 {:relays relay-urls
                  :query query
                  :error (ex-message e)
                  :stack (.-stack e)})
      (throw e))))

(defn publish
  "Publishes an event to multiple Nostr relays."
  [relay-urls event private-key]
  (try
    (let [normalized-urls (map (fn [url]
                                (if (re-find #"^wss?://" url)
                                  url
                                  (str "ws://" (.-host js/window.location) url)))
                              (if (sequential? relay-urls)
                                relay-urls
                                [relay-urls]))]
      (log/info "Publishing event to relays"
                {:action "publish"
                 :relays normalized-urls
                 :event_kind (:kind event)
                 :pubkey (:pubkey event)
                 :timestamp (js/Date.now)})
      (let [content (if (string? (:content event))
                      (:content event)
                      (js/JSON.stringify (clj->js (:content event))))
            content-event (assoc event :content content)
            js-event (clj->js content-event)
            finalized-event (finalizeEvent js-event (hexToBytes private-key))
            promises (.publish relay-pool (clj->js normalized-urls) finalized-event)]
        (.then (js/Promise.all promises)
               (fn [results]
                 (log/info "Event published successfully"
                           {:action "publish_success"
                            :event_id (.-id finalized-event)
                            :relay_count (count results)
                            :timestamp (js/Date.now)})
                 results))))
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

;; -------------------------
;; Event Handlers
;; -------------------------

(re-frame/reg-event-fx
 :handle-relay-metadata
 (fn [{:keys [db]} [_ relay-url metadata]]
   (log/info "Received relay metadata" {:relay-url relay-url :metadata metadata})
   (let [relay-list (get-in db [:relays :relays-list])
         filtered-relay-list (filter #(not= (:url %) relay-url) relay-list)
         relay (first (filter #(= (:url %) relay-url) relay-list))
         new-relay (if relay
                     (assoc relay :metadata metadata)
                     {:url relay-url :metadata metadata})
         new-relay-list (conj filtered-relay-list new-relay)]
     {:db (-> db
              (assoc-in [:relays :relays-list] new-relay-list))})))

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

(re-frame/reg-event-fx
 :handle-ok
 (fn [{:keys [db]} [_ event-id success? message]]
   (log/info "Received OK"
             {:event_id event-id
              :success success?
              :message message})
   {:db db}))

(re-frame/reg-event-fx
 :handle-eose
 (fn [{:keys [db]} [_]]
   (log/info "Received EOSE")
   {:db db}))

(re-frame/reg-event-fx
 :handle-notice
 (fn [{:keys [db]} [_ message]]
   (log/info "Received Notice"
             {:message message})
   {:db db}))

(re-frame/reg-event-fx
 :nostr/publish-note
 (fn [{:keys [db]} [_ content]]
   ;; Add your nostr publishing logic here
   {:fx [[:dispatch [:nostr/send-event 
                     {:kind 1  ;; text_note
                      :content content
                      :tags []}]]]}))

(re-frame/reg-event-db
 :nostr/publish-success
 (fn [db _]
   (-> db
       (assoc :publishing? false)
       (dissoc :current-draft))))

(re-frame/reg-event-db
 :nostr/publish-error
 (fn [db [_ error]]
   (-> db
       (assoc :publishing? false)
       (assoc :publish-error error))))
