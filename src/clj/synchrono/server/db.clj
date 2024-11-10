(ns synchrono.server.db
  "Database configuration and initialization for Synchrono server"
  (:require [next.jdbc :as jdbc]))

;; Database configuration
(def db-spec
  "SQLite database specification"
  {:dbtype "sqlite"
   :dbname "resources/synchrono.db"})

;; Connection pool
(def datasource
  "Pooled database connection source"
  (jdbc/get-datasource db-spec))

;; Default contract configuration
(def default-contract
  "Default marketplace contract settings"
  {:lightning-public-key nil ;; TODO: Add lightning public key
   :api-url "https://synchrono.city"
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
   :current-credit-balance-sat 0
   :timezone "UTC-08:00"})

(defn init-db!
  "Initialize database schema and default data.
   Creates tables for:
   - contracts: Marketplace contract configurations
   - accounts: User account balances
   - events: Nostr event storage
   - event_tags: Indexed event tag data"
  []

  ;; Daily metrics table - one row per day tracking business metrics
  (jdbc/execute! datasource
                 ["CREATE TABLE IF NOT EXISTS daily_metrics (
                  date DATE PRIMARY KEY DEFAULT CURRENT_DATE,
                  active_users INTEGER DEFAULT 0,
                  new_users INTEGER DEFAULT 0, 
                  total_users INTEGER DEFAULT 0,
                  new_posts INTEGER DEFAULT 0,
                  total_posts INTEGER DEFAULT 0,
                  interactions INTEGER DEFAULT 0,
                  credits_transferred INTEGER DEFAULT 0,
                  avg_user_balance INTEGER DEFAULT 0,
                  withdrawals INTEGER DEFAULT 0,
                  fees_collected INTEGER DEFAULT 0,
                  UNIQUE(date))"])
  
  ;; Contract table - stores marketplace configuration
  (jdbc/execute! datasource
                 ["CREATE TABLE IF NOT EXISTS contracts (
                  id INTEGER PRIMARY KEY AUTOINCREMENT,
                  lightning_public_key TEXT,
                  api_url TEXT,
                  name TEXT,
                  description TEXT,
                  initial_credit_balance_sat INTEGER, 
                  minimum_withdrawal_sat INTEGER,
                  daily_fee_sat INTEGER,
                  timezone TEXT,
                  UNIQUE(id))"])

  ;; Insert default contract if none exists
  (when (empty? (jdbc/execute! datasource ["SELECT * FROM contracts"]))
    (jdbc/execute! datasource
                  ["INSERT INTO contracts (
                    lightning_public_key, 
                    api_url, 
                    name, 
                    description, 
                    initial_credit_balance_sat, 
                    minimum_withdrawal_sat, 
                    daily_fee_sat, 
                    timezone)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
                   (:lightning-public-key default-contract)
                   (:api-url default-contract)
                   (:name default-contract)
                   (:description default-contract)
                   (:initial-credit-balance-sat default-contract)
                   (:minimum-withdrawal-sat default-contract)
                   (:daily-fee-sat default-contract)
                   (:timezone default-contract)]))

  ;; User accounts table - tracks user balances
  (jdbc/execute! datasource
                 ["CREATE TABLE IF NOT EXISTS accounts (
                  pubkey TEXT PRIMARY KEY,
                  contract_id INTEGER NOT NULL,
                  balance INTEGER NOT NULL,
                  lightning_address TEXT,
                  last_payment_timestamp TIMESTAMP,
                  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                  UNIQUE(pubkey),
                  FOREIGN KEY (contract_id) REFERENCES contracts(id))"])

  ;; Nostr events table - stores complete event data
  (jdbc/execute! datasource
                 ["CREATE TABLE IF NOT EXISTS events (
                  id TEXT PRIMARY KEY,
                  pubkey TEXT NOT NULL,
                  created_at INTEGER NOT NULL,
                  kind INTEGER NOT NULL,
                  tags TEXT NOT NULL,
                  content TEXT NOT NULL,
                  sig TEXT NOT NULL,
                  UNIQUE(id))"])

  ;; Event tags table - enables efficient tag querying
  (jdbc/execute! datasource
                 ["CREATE TABLE IF NOT EXISTS event_tags (
                  event_id TEXT NOT NULL,
                  tag_name TEXT NOT NULL,
                  tag_value TEXT NOT NULL,
                  tag_additional TEXT,
                  PRIMARY KEY (event_id, tag_name, tag_value),
                  FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE)"])

  ;; Index for optimizing tag queries
  (jdbc/execute! datasource
                 ["CREATE INDEX IF NOT EXISTS idx_event_tags_name_value 
                 ON event_tags(tag_name, tag_value)"]))

;; Track Lightning payments
(jdbc/execute! datasource
               ["CREATE TABLE IF NOT EXISTS lightning_payments (
                id TEXT PRIMARY KEY,
                account_pubkey TEXT NOT NULL,
                contract_id INTEGER NOT NULL,
                payment_type TEXT NOT NULL, -- 'contract_activation', 'zap', 'withdrawal'
                amount_sat INTEGER NOT NULL,
                payment_request TEXT,
                payment_hash TEXT,
                status TEXT NOT NULL, -- 'pending', 'completed', 'failed'
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                completed_at TIMESTAMP,
                FOREIGN KEY (account_pubkey) REFERENCES accounts(pubkey),
                FOREIGN KEY (contract_id) REFERENCES contracts(id))"])