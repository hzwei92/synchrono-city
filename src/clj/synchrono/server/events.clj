(ns synchrono.server.events
  "Database operations for Nostr events"
  (:require [next.jdbc :as jdbc]
            [next.jdbc.result-set :as rs]
            [clojure.string :as string]
            [cheshire.core :as json]
            [synchrono.server.db :as db]
            [taoensso.timbre :as log]))

;; Event tag operations
(defn save-event-tags! 
  "Inserts tags for a given event into the event_tags table"
  [tx event-id tags]
  (let [tag-values (for [tag tags]
                     [(str (first tag))              ; tag name - ensure string
                      (str (second tag))             ; tag value - ensure string
                      (when (> (count tag) 2)        ; additional data (like relay URLs)
                        (string/join "," (drop 2 tag)))
                      event-id])]
    (when (seq tag-values)
      (jdbc/execute-batch! tx
                           "INSERT INTO event_tags (tag_name, tag_value, tag_additional, event_id) 
                           VALUES (?, ?, ?, ?)"
                           tag-values
                           {:batch-size 100}))))

(defn is-replaceable-kind? 
  "Checks if an event kind is replaceable according to NIP-16"
  [kind]
  (or (contains? #{0 3} kind)
      (<= 10000 kind 19999)))

;; Event CRUD operations
(defn save-event!
  "Creates a new event in the database. Assumes event has already been validated."
  [{:keys [id pubkey created_at kind tags content sig] :as event}]
  (try
    (jdbc/with-transaction [tx db/datasource]
      ;; For replaceable events, delete older versions
      (when (is-replaceable-kind? kind)
        (jdbc/execute! tx
                      ["DELETE FROM events 
                        WHERE kind = ? 
                        AND pubkey = ? 
                        AND id != ? 
                        AND created_at < ?"
                        kind pubkey id created_at]))
      ;; Insert new event
      (let [normalized-tags (cond
                              (string? tags) (json/parse-string tags)
                              (nil? tags) []
                              :else tags)
            tags-string (json/generate-string normalized-tags)
            result (jdbc/execute-one! tx
                                      ["INSERT INTO events (id, pubkey, created_at, kind, tags, content, sig)
                                      VALUES (?, ?, ?, ?, ?, ?, ?)
                                      ON CONFLICT (id) DO NOTHING"
                                       id pubkey created_at kind
                                       tags-string
                                       content sig]
                                      {:return-keys true})]
        (when result
          (save-event-tags! tx id normalized-tags))
        result))
    (catch Exception e
      (log/error "Error saving event:" (.getMessage e))
      nil)))

;; Event queries
(defn get-event 
  "Retrieves a single event by ID"
  [id]
  (jdbc/execute-one! db/datasource
                    ["SELECT * FROM events WHERE id = ?" id]
                    {:builder-fn rs/as-unqualified-maps}))

(defn get-events-by-pubkey 
  "Retrieves all events by a specific public key"
  [pubkey]
  (jdbc/execute! db/datasource
                ["SELECT * FROM events WHERE pubkey = ? ORDER BY created_at DESC" pubkey]
                {:builder-fn rs/as-unqualified-maps}))

(defn query-events 
  "Complex query function supporting multiple Nostr subscription filters"
  [{:keys [ids authors kinds since until limit] :as filters}]
  (let [tag-filters (filter #(and (string/starts-with? (name (key %)) "#")
                                 (seq (val %)))
                           filters)
        base-query "SELECT DISTINCT e.* FROM events e"
        join-clause (when (seq tag-filters)
                     (string/join " "
                                (map-indexed
                                 (fn [idx _]
                                   (format " INNER JOIN event_tags t%d ON e.id = t%d.event_id" idx idx))
                                 tag-filters)))
        conditions (cond-> []
                    (seq ids) (conj "e.id IN (?)")
                    (seq authors) (conj "e.pubkey IN (?)")
                    (seq kinds) (conj "e.kind IN (?)")
                    since (conj "e.created_at >= ?")
                    until (conj "e.created_at <= ?"))
        tag-conditions (map-indexed
                       (fn [idx [k v]]
                         (format "(t%d.tag_name = ? AND t%d.tag_value IN (?))"
                                 idx idx))
                       tag-filters)
        where-clause (when (or (seq conditions) (seq tag-conditions))
                      (str " WHERE "
                           (string/join " AND "
                                      (concat conditions tag-conditions))))
        limit-clause (when limit " LIMIT ?")
        query (str base-query join-clause where-clause
                  " ORDER BY e.created_at DESC" limit-clause)
        params (cond-> []
                (seq ids) (conj (string/join "," ids))
                (seq authors) (conj (string/join "," authors))
                (seq kinds) (conj (string/join "," kinds))
                since (conj since)
                until (conj until)
                (seq tag-filters) (concat (mapcat (fn [[k v]]
                                                  [(subs (name k) 1) 
                                                   (string/join "," v)])
                                                tag-filters))
                limit (conj limit))]
    (try
      (jdbc/execute! db/datasource
                    (into [query] params)
                    {:builder-fn rs/as-unqualified-maps})
      (catch Exception e
        (log/error "Query error:" (.getMessage e))
        []))))

(defn get-events-by-tag 
  "Retrieves all events with a specific tag name and value"
  [tag-name tag-value]
  (jdbc/execute! db/datasource
                ["SELECT e.* FROM events e
                  INNER JOIN event_tags t ON e.id = t.event_id
                  WHERE t.tag_name = ? AND t.tag_value = ?
                  ORDER BY e.created_at DESC"
                 tag-name tag-value]
                {:builder-fn rs/as-unqualified-maps}))
