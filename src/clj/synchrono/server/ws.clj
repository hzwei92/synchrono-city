(ns synchrono.server.ws
  "WebSocket namespace for managing client connections and events"
  (:require [aleph.http :as http]
            [manifold.stream :as s]
            [manifold.deferred :as d]
            [cheshire.core :as json]
            [synchrono.server.events :as events]
            [synchrono.server.crypto :as crypto]
            [taoensso.timbre :as log]))

;; State management
;; ---------------
;; Atoms storing active WebSocket connections and their subscriptions
;; connected-clients: Set of all active WebSocket connections
;; client-subscriptions: Map of connection -> {subscription-id -> filters}
(def connected-clients (atom #{}))
(def client-subscriptions (atom {}))

;; Client connection management
;; --------------------------
(defn add-client!
  "Adds a new WebSocket client connection to the connected-clients set"
  [conn]
  (swap! connected-clients conj conn))

(defn remove-client!
  "Removes a WebSocket client connection and its subscriptions"
  [conn]
  (swap! connected-clients disj conn)
  (swap! client-subscriptions dissoc conn))

(defn add-subscription!
  "Adds a subscription for a client"
  [conn sub-id filters]
  (swap! client-subscriptions assoc-in [conn sub-id] filters))

(defn remove-subscription!
  "Removes a subscription for a client"
  [conn sub-id]
  (swap! client-subscriptions update conn dissoc sub-id))

(defn send-message
  "Sends a message to a specific client as a JSON string with error handling"
  [conn message]
  (try
    (when (and conn (not (s/closed? conn)))
      (let [json-message (json/generate-string message)]
        @(s/put! conn json-message)))
    (catch Exception e
      (log/error "Failed to send message" 
                 {:error (.getMessage e)
                  :message message}))))

(defn normalize-event
  "Converts a Clojure event map into standard Nostr JSON format"
  [event]
  (let [tags-str (if (string? (:tags event))
                  (json/parse-string (:tags event))  ; Parse string tags into vector
                  (:tags event))]    ; Use existing vector tags
    (-> event
        (assoc :tags tags-str)  ; Replace tags with parsed version
        (update :kind #(if (number? %) % (Integer/parseInt (str %))))
        (update :created_at #(if (number? %) % (Integer/parseInt (str %))))
        ;; Convert keywords to strings while preserving values
        (as-> e
            (reduce-kv (fn [m k v]
                        (assoc m (name k) v))
                      {}
                      e)))))

(defn send-event
  "Sends an EVENT message to a specific client according to NIP-01"
  [conn sub-id event]
  (let [normalized-event (normalize-event event)]
    (send-message conn ["EVENT" sub-id normalized-event])))

(defn send-eose
  "Sends an EOSE (End of Stored Events) message to a specific client according to NIP-01"
  [conn sub-id]
  (send-message conn ["EOSE" sub-id]))

(defn broadcast-message
  "Broadcasts a message to all connected clients"
  [message]
  (doseq [conn @connected-clients]
    (send-message conn message)))

(defn send-notice
  "Sends a NOTICE message to a specific client according to NIP-01"
  [conn message]
  (send-message conn ["NOTICE" message]))

(defn send-ok
  "Sends an OK message to a specific client according to NIP-01"
  [conn event-id success message]
  (send-message conn ["OK" event-id success message]))

(defn send-closed
  "Sends a CLOSED message to a specific client according to NIP-01"
  [conn sub-id message]
  (send-message conn ["CLOSED" sub-id message]))

(defn matches-filters?
  "Returns true if event matches NIP-01 subscription filters.
   Implements filter matching according to NIP-01 spec:
   - Empty filters match everything
   - Filters are combined with AND logic
   - Each filter type (kinds, authors, etc) is combined with OR logic
   - Tag filters check for exact matches on tag name and value"
  [event filters]
  (if (empty? filters)
    true  ;; If no filters, match everything
    (and (or (empty? (:kinds filters))
         (contains? (set (:kinds filters)) (:kind event)))
    (or (empty? (:authors filters))
        (contains? (set (:authors filters)) (:pubkey event)))
    (or (empty? (:since filters))
        (>= (:created_at event) (:since filters)))
    (or (empty? (:until filters))
        (<= (:created_at event) (:until filters)))
    (every? (fn [[tag-name tag-values]]
              (or (empty? tag-values)  ;; Handle empty tag values
                  (some #(some (fn [event-tag]
                               (and (= (first event-tag) (name tag-name))
                                    (= (second event-tag) %)))
                             (:tags event))
                        tag-values)))
            (dissoc filters :kinds :authors :since :until)))))

;; Message handling functions
;; ------------------------
(defn broadcast-event
  "Broadcasts an event to all subscribed clients whose filters match the event"
  [event]
  (doseq [[conn subs] @client-subscriptions
          [sub-id filters] subs
          :when (and (not (s/closed? conn))
                     (matches-filters? event filters))]
    (try
      (send-event conn sub-id event)
      (catch Exception e
        (log/error "Failed to broadcast event" 
                   {:error (.getMessage e)
                    :event-id (:id event)
                    :client-id (str conn)})))))

(defn handle-event
  "Handles EVENT messages from clients (publish) according to NIP-01."
  [conn event]
  (log/debug "Processing EVENT message" {:event-id (:id event) 
                                       :pubkey (:pubkey event)
                                       :kind (:kind event)})
  (if (crypto/validate-event event)
    ;; Handle valid event
    (if-let [saved-event (events/save-event! event)]
      (do
        (log/info "Successfully processed and broadcast event" 
                 {:event-id (:id event)
                  :pubkey (:pubkey event)
                  :kind (:kind event)})
        (broadcast-event saved-event)
        (send-ok conn (:id event) true ""))
      (do
        (log/error "Failed to save event to database" 
                  {:event-id (:id event)
                   :error "Database save failed"})
        (send-ok conn (:id event) false "error: database save failed")))
    ;; Handle invalid event
    (do
      (log/warn "Received invalid event" 
                {:event-id (:id event)
                 :error "Event validation failed"})
      (send-ok conn (:id event) false "invalid: event validation failed"))))

(defn handle-req
  "Handles REQ subscription messages from clients (subscribe) according to NIP-01."
  [conn subscription-id filters]
  (try
    (log/debug "Processing REQ" {:sub-id subscription-id})
    (add-subscription! conn subscription-id filters)
    (d/chain (events/query-events filters)
      (fn [matching-events]
        (log/debug "Found" (count matching-events) "events for sub" subscription-id)
        (doseq [event matching-events]
          (send-event conn subscription-id event))
        (send-eose conn subscription-id)
        {:status 200
         :body {:success true}}))
    (catch Exception e
      (log/error "REQ error" 
                 {:sub-id subscription-id
                  :error (.getMessage e)})
      (send-closed conn subscription-id (str "error: " (.getMessage e)))
      {:status 500
       :body {:success false
              :error (.getMessage e)}})))

(defn handle-close
  "Handles CLOSE messages from clients (unsubscribe)."
  [conn subscription-id]
  (log/debug "Processing CLOSE message" {:subscription-id subscription-id})
  (remove-subscription! conn subscription-id)
  {:status 200
   :body {:success true}})

(defn handle-message
  "Handles incoming WebSocket messages according to NIP-01 protocol."
  [conn msg]
  (log/debug "Processing message" {:message msg})
  (try
    (let [parsed-msg (json/parse-string (if (string? msg) msg (str msg)) true)]
      (log/info "Parsed message" {:parsed parsed-msg
                                 :type (type parsed-msg)
                                 :vector? (vector? parsed-msg)})
      (if-not (sequential? parsed-msg)
        (do
          (log/warn "Invalid message format - expected array/vector:" parsed-msg)
          (send-notice conn "error: message must be a JSON array"))
        
        (let [[msg-type & params] parsed-msg]
          (case msg-type
            "EVENT" (handle-event conn (first params))
            "REQ"   (handle-req conn (first params) (rest params))
            "CLOSE" (handle-close conn (first params))
            
            (do
              (log/warn "Unknown message type:" msg-type)
              (send-notice conn (str "unknown message type: " msg-type)))))))
              
    (catch Exception e
      (log/warn "Message processing error:" (.getMessage e))
      (send-notice conn (str "error: invalid message format - " (.getMessage e))))))

(defn on-connect
  "Handler for new WebSocket connections"
  [socket]
  (log/info "New WebSocket client connected" 
            {:client-id (str socket)
             :remote-addr (-> socket meta :remote-addr)}))

(defn on-close
  "Handler for WebSocket disconnections"
  [socket]
  (log/info "WebSocket client disconnected" 
            {:client-id (str socket)
             :remote-addr (-> socket meta :remote-addr)}))

(defn on-message [socket message]
  (log/debug "Received message from client:" message))

(defn ws-handler
  "Main WebSocket connection handler."
  [req]
  (-> (http/websocket-connection req)
      (d/chain
       (fn [conn]
         (log/info "WebSocket connected:" (str conn))
         (add-client! conn)
         (s/consume #(handle-message conn %) conn)
         (s/on-closed conn 
                     (fn []
                       (log/info "WebSocket disconnected:" (str conn))
                       (remove-client! conn)))
         nil))))