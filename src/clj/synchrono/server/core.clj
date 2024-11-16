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
            [synchrono.server.accounts :refer [accounts-routes]]
            [synchrono.server.relay-info :refer [serve-metadata]]))

;; Configure logging first, before any other operations
(configure-logging!)

;; Add this helper function to check request headers
(defn is-nostr-info-request? [request]
  (= "application/nostr+json"
     (get-in request [:headers "accept"])))

(defn is-websocket-request? [request]
  (= "websocket"
     (get-in request [:headers "upgrade"])))

;; Define main application routes
(defroutes routes
  ;; Root handler that dispatches based on request type
  (GET "/" request
       (cond
         (is-nostr-info-request? request) (serve-metadata request)
         (is-websocket-request? request) (ws-handler request)
         :else (resource-response "index.html" {:root "public"})))
  
  ;; Serve static resources from the public directory
  (route/resources "/")
  
  ;; Include admin and account management routes
  admin-routes
  accounts-routes
  
  (route/not-found "Not Found"))

;; Middleware to log HTTP request details including timing
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

;; Application middleware stack
(def app
  (-> routes
      wrap-logging     ; Log request details and timing
      wrap-json-response    ; Convert responses to JSON
      (wrap-json-body {:keywords? true})    ; Parse JSON request bodies
      (wrap-resource "public")))    ; Serve static resources

;; Atom to maintain server state
(defonce server (atom nil))

;; HTTP server management functions
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

;; Application entry point
(defn -main
  "Entry point - initializes DB and starts server"
  []
  (try
    (log/info "Initializing database")
    #_(init-db!)
    
    (let [port (Integer/parseInt (or (System/getenv "PORT") "3000"))]
      (start-server! port))
    (catch Exception e
      (log/error e "Failed to start application")
      (stop-server!)  ; Ensure cleanup on startup failure
      (System/exit 1))))
