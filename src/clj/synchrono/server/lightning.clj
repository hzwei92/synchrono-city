(ns synchrono.server.lightning
  (:require [taoensso.timbre :as log])
  (:import [org.lightningj.lnd.wrapper AsynchronousLndAPI
                                     ClientSideException
                                     StatusException]
           [org.lightningj.lnd.wrapper.message GetInfoResponse
                                             WalletBalanceResponse]))

(def default-macaroon-path 
  (or (System/getenv "LND_MACAROON_PATH")
      "/app/certs/data/chain/bitcoin/mainnet/admin.macaroon"))

(def default-cert-path 
  (or (System/getenv "LND_CERT_PATH")
      "/app/certs/tls.cert"))

(def default-grpc-host 
  (or (System/getenv "LND_HOST")
      "lnd:10009"))

(defn create-lnd-client
  "Creates a new LND client instance"
  [{:keys [host cert-path macaroon-path]
    :or {host default-grpc-host
         cert-path default-cert-path
         macaroon-path default-macaroon-path}}]
  (try
    (-> (AsynchronousLndAPI/builder)
        (.withHost host)
        (.withTLSCertPath cert-path)
        (.withMacaroonPath macaroon-path)
        (.build))
    (catch Exception e
      (log/error "Failed to create LND client:" (.getMessage e))
      (throw e))))

(defn get-node-info
  "Get basic information about the Lightning node"
  [client]
  (try
    (let [response (.getInfo client)]
      {:alias (.getAlias response)
       :pubkey (.getIdentityPubkey response)
       :version (.getVersion response)
       :synced? (.getSyncedToChain response)})
    (catch Exception e
      (log/error "Failed to get node info:" (.getMessage e))
      (throw e))))

(defn get-wallet-balance
  "Get the current wallet balance"
  [client]
  (try
    (let [response (.walletBalance client)]
      {:total-balance (.getTotalBalance response)
       :confirmed-balance (.getConfirmedBalance response)
       :unconfirmed-balance (.getUnconfirmedBalance response)})
    (catch Exception e
      (log/error "Failed to get wallet balance:" (.getMessage e))
      (throw e)))) 