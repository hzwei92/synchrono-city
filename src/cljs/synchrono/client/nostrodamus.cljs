(ns synchrono.client.nostrodamus
  (:require [re-frame.core :as rf]
            ["nostr-tools/pure" :refer [finalizeEvent verifyEvent]]
            ["nostr-tools/pool" :refer [SimplePool]]
            ["@noble/hashes/utils" :refer [hexToBytes]]
            [taoensso.timbre :as log]
            [clojure.string :as string]
            [ajax.core :as ajax]))

(defonce ^js relay-pool (SimplePool.))

(defn normalize-relay-url [url]
  (cond
    (re-find #"^wss?://" url) url
    (string/starts-with? url "/") (str "ws://" (.-host js/window.location) url)
    :else (str "ws://" url)))

(defn create-event [public-key kind content tags]
  (clj->js                                               ; Convert the entire event to JS
   {:pubkey public-key
    :kind kind
    :created_at (js/Math.floor (/ (js/Date.now) 1000))
    :content content
    :tags tags}))


(rf/reg-event-fx
 :nostr/subscribe-many
 (fn [{:keys [db]} [_ query close-on-eose?]]
   (try
     (let [relays (:relays db)
           normalized-urls (mapv normalize-relay-url relays)
           subscriptions (atom {})] ; Store subscriptions mapped to relay URLs
       ;; Iterate over relay URLs and subscribe to each one
       (doseq [url normalized-urls]
         (let [_ (log/info "Subscribing to relay" url)
               sub (.subscribeMany relay-pool
                                   (clj->js [url])
                                   (clj->js query)
                                   #js {:onevent
                                        (fn [event]
                                      ;; Dispatch event with relay metadata
                                          (rf/dispatch [:nostr/handle-event {:relay url
                                                                             :event (js->clj event :keywordize-keys true)}]))
                                        :onok
                                        (fn [event-id success? message]
                                          (rf/dispatch [:nostr/handle-ok event-id success? message]))
                                        :oneose
                                        (fn []
                                          (when close-on-eose?
                                            (.close (get @subscriptions url)))
                                          (rf/dispatch [:nostr/handle-eose query close-on-eose?]))
                                        :onnotice
                                        (fn [message]
                                          (rf/dispatch [:nostr/handle-notice message]))
                                        :onerror
                                        (fn [error]
                                          (rf/dispatch [:nostr/handle-error {:relay url :error error}]))})]
           ;; Store the subscription for potential closure
           (swap! subscriptions assoc url sub)))
       {:db db})
     (catch :default e
       (log/error "Failed to subscribeMany"
                  {:query query
                   :error (ex-message e)
                   :stack (.-stack e)})
       {:db db}))))

(rf/reg-event-db
 :nostr/handle-event
 (fn [db [_ {:keys [relay event]}]]
   (let [event-id (:id event)
         event-kind (:kind event)]
     (log/info "Received Event"
               {:event-id event-id
                :event-kind event-kind
                :event-content (:content event)
                :event-tags (:tags event)
                :relay relay})
     (-> db
         (assoc-in [:event-id->event event-id] event)
         (update-in [:kind->event-ids event-kind] (fnil conj #{}) event-id)
         (update-in [:event-id->relays event-id] (fnil conj []) relay)))))

(rf/reg-event-db
 :nostr/handle-ok
 (fn [db [_ event-id success? message]]
   (log/info "Received OK"
             {:event_id event-id
              :success success?
              :message message})
   db))

(rf/reg-event-db
 :nostr/handle-eose
 (fn [db [_ query close-on-eose?]]
   (log/info "Received EOSE" {:query query :close-on-eose? close-on-eose?})
   db))

(rf/reg-event-db
 :nostr/handle-notice
 (fn [db [_ message]]
   (log/info "Received Notice" {:message message})
   db))

(rf/reg-event-db
 :nostr/handle-error
 (fn [db [_ error]]
   (log/error "Received Error" {:error error})
   (assoc-in db [:app :error] error)))

(rf/reg-event-fx
 :nostr/publish
 (fn [{:keys [db]} [_ kind content tags]]
   (let [public-key (:public-key db)
         private-key (:private-key db)
         relay-urls (:relays db)]
     (log/info "Attempting to publish nostr event:" 
               {:kind kind 
                :content content 
                :tags tags
                :has-private-key? (boolean private-key)
                :relay-count (count relay-urls)})
     (if-not private-key
       (do
         (log/error "No private key")
         {:db db})
       (try
         (let [normalized-urls (mapv normalize-relay-url relay-urls)
               event (create-event public-key kind content tags)
               _ (log/debug "Created event:" (js->clj event))
               finalized-event (finalizeEvent event (hexToBytes private-key))
               _ (log/debug "Finalized event:" (js->clj finalized-event))
               valid? (verifyEvent finalized-event)]
           (if-not valid?
             (do
               (log/error "Event verification failed")
               {:db db})
             (let [promises (.publish relay-pool
                                    (clj->js normalized-urls)
                                    finalized-event)]
               (log/debug "Publishing to relays:" normalized-urls)
               (.then (js/Promise.any promises)
                     (fn [result]
                       (log/info "Successfully published event:" result)
                       (let [clj-finalized-event (js->clj finalized-event :keywordize-keys true)]
                         (rf/dispatch [:nostr/subscribe-many [{:ids [(:id clj-finalized-event)]}] true])))
                     (fn [error]
                       (log/error "Failed to publish to any relay:" 
                                {:error error
                                 :message (.-message error)
                                 :stack (.-stack error)})
                       (rf/dispatch [:nostr/handle-error error])))
               {:db db})))
         (catch :default e
           (log/error "Failed to publish event" 
                     {:error e
                      :message (ex-message e)
                      :stack (.-stack e)})
           {:db db}))))))

(rf/reg-event-fx
 :nostr/get-relay-metadata
 (fn [{:keys [db]} [_ relay]]
   (let [http-url (cond
                    ;; Handle absolute URLs (ws:// or wss://)
                    (re-find #"^wss?://" relay)
                    (-> relay
                        (string/replace #"^wss://" "https://")
                        (string/replace #"^ws://" "http://"))
                    ;; Handle relative URLs or just "/"
                    :else
                    (str (.-origin js/window.location) relay))]
     (-> (js/Promise.
          (fn [resolve reject]
            (ajax/GET http-url
              {:headers {"Accept" "application/nostr+json"}
               :handler (fn [response]
                          (rf/dispatch [:nostr/handle-relay-metadata relay response])
                          (resolve response))
               :error-handler (fn [error]
                                (reject error))
               :response-format :json
               :keywords? true})))
         (.catch (fn [error]
                   (log/error "Error fetching relay metadata"
                              {:relay relay
                               :error (ex-message error)})
                   (throw error)))))))

(rf/reg-event-db
 :nostr/handle-relay-metadata
 (fn [db [_ relay metadata]]
   (log/info "Received relay metadata" {:relay relay :metadata metadata})
   (assoc-in db [:relay->metadata relay] metadata)))