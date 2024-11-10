(ns synchrono.server.accounts
  (:require [next.jdbc :as jdbc]
            [next.jdbc.result-set :as rs]
            [synchrono.server.db :as db]
            [compojure.core :refer [GET POST defroutes]]))

(defn get-account-balance [account-id]
  (jdbc/execute-one! db/datasource
                     ["SELECT balance FROM accounts WHERE id = ?" account-id]
                     {:builder-fn rs/as-unqualified-maps}))

(defn create-account! [pubkey]
  (try
    (let [contract (jdbc/execute-one! db/datasource
                                      ["SELECT id, initial_credit_balance_sat 
                                       FROM contracts 
                                       ORDER BY created_at DESC 
                                       LIMIT 1"]
                                      {:builder-fn rs/as-unqualified-maps})]
      (if (nil? contract)
        {:error "No contract found"}
        {:account (jdbc/execute-one! db/datasource
                                     ["INSERT INTO accounts (pubkey, contract_id, balance, created_at)
                            VALUES (?, ?, ?, CURRENT_TIMESTAMP)
                            RETURNING *"
                                      pubkey
                                      (:id contract)
                                      (:initial_credit_balance_sat contract)]
                                     {:builder-fn rs/as-unqualified-maps})}))
    (catch Exception e
      {:error (.getMessage e)})))

(defn get-account-balance-route [req]
  (let [account-id (get-in req [:params :id])
        balance (get-account-balance account-id)]
    (if balance
      {:status 200
       :body {:balance balance}}
      {:status 404
       :body {:error "Account not found"}})))

(defn create-account-route [req]
  (let [pubkey (get-in req [:body :pubkey])
        result (create-account! pubkey)]
    (if (:error result)
      {:status 400
       :body result}
      {:status 201
       :body result})))

(defroutes accounts-routes
  (GET "/accounts/:id/balance" [] get-account-balance-route)
  (POST "/accounts" [] create-account-route))
