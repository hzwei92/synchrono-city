(ns synchrono.server.core
  (:gen-class)
  (:require [taoensso.timbre :as log]
            [synchrono.server.logging :refer [configure-logging!]]
            [aleph.http :as http]
            [compojure.core :refer [defroutes GET]]
            [ring.middleware.json :refer [wrap-json-response wrap-json-body]]
            [ring.middleware.resource :refer [wrap-resource]]
            [ring.util.response :refer [resource-response]]
            [compojure.route :as route]
            [synchrono.server.db :refer [init-db!]]
            [synchrono.server.ws :refer [ws-handler]]
            [synchrono.server.admin :refer [admin-routes]]
            [synchrono.server.accounts :refer [accounts-routes]]))

;; Configure logging first, before any other operations
(configure-logging!)

(defroutes routes
  ;; SPA entry point
  (GET "/" [] (resource-response "index.html" {:root "public"}))
  (route/resources "/")
  (GET "/ws" [] ws-handler)
  admin-routes
  accounts-routes
  (route/not-found "Not Found"))

;; Add request logging middleware
(defn wrap-logging
  [handler]
  (fn [request]
    (let [start-time (System/currentTimeMillis)
          response (handler request)
          end-time (System/currentTimeMillis)
          elapsed (- end-time start-time)]
      (log/info (format "[%s] %s %s - %sms"
                        (:request-method request)
                        (:uri request)
                        (:status response)
                        elapsed))
      response)))

;; Update the middleware stack
(def app
  (-> routes
      wrap-logging  ; Add logging middleware
      wrap-json-response
      (wrap-json-body {:keywords? true})
      (wrap-resource "public")))

(defonce server (atom nil))

(defn start-server!
  "Starts HTTP server on specified port"
  [port]
  (log/info "Starting server on port" port)
  (reset! server (http/start-server app {:port port}))
  (log/info "Server started successfully - ready to accept connections"))

(defn stop-server!
  "Gracefully shuts down the server"
  []
  (when @server
    (log/info "Initiating server shutdown")
    (.close @server)
    (reset! server nil)
    (log/info "Server shutdown complete")))

(defn -main
  "Entry point - initializes DB and starts server"
  []
  (log/info "Initializing database")
  (init-db!)
  (let [port (Integer/parseInt (or (System/getenv "PORT") "3000"))]
    (start-server! port)))
