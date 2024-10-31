(ns synchrono.server.admin.handler
  (:require [compojure.core :refer [defroutes GET POST]]))

(defn get-metrics [req]
  {:status 200
   :body {:active-connections 0
          :events-per-minute 0
          :total-events 0}})

(defn block-pubkey [req]
  {:status 200
   :body {:success true}})

(defn update-config [req]
  {:status 200
   :body {:success true}})

(defroutes admin-routes
  (GET "/admin/metrics" [] get-metrics)
  (POST "/admin/pubkeys/block" [] block-pubkey)
  (POST "/admin/config" [] update-config))

