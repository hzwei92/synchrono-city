(ns synchrono.server.relay.handler
  (:require [compojure.core :refer [defroutes GET]]))

(defn handle-connection [req]
  {:status 200
   :body "Placeholder: WebSocket connection handler not yet implemented"})

(defroutes relay-routes
  (GET "/relay" [] handle-connection))

