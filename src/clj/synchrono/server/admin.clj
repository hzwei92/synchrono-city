(ns synchrono.server.admin
  (:require [compojure.core :refer [defroutes GET POST]]))

(defn get-metrics-route [req]
  {:status 200
   :body {:active-connections 0
          :events-per-minute 0
          :total-events 0}})

(defn block-pubkey-route [req]
  {:status 200
   :body {:success true}})

(defn update-config-route [req]
  {:status 200
   :body {:success true}})

(defroutes admin-routes
  (GET "/admin/metrics" [] get-metrics-route)
  (POST "/admin/pubkeys/block" [] block-pubkey-route)
  (POST "/admin/config" [] update-config-route))
