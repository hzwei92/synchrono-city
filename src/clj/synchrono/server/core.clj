(ns synchrono.server.core
  (:require [aleph.http :as http]
            [compojure.core :refer [defroutes GET]]
            [ring.middleware.json :refer [wrap-json-response wrap-json-body]]
            [ring.middleware.resource :refer [wrap-resource]]
            [ring.util.response :refer [resource-response content-type]]
            [synchrono.server.relay.handler :refer [relay-routes]]
            [synchrono.server.admin.handler :refer [admin-routes]]
            [compojure.route :as route]))

;; Define the main routes for the application
(defroutes routes
  ;; Serve index.html for the root path
  (GET "/" [] (resource-response "index.html" {:root "public"}))
  (route/resources "/")
  relay-routes
  admin-routes
  (route/not-found "Not Found"))

;; Apply Ring middleware to the routes
(def app
  (-> routes
      wrap-json-response
      wrap-json-body
      (wrap-resource "public")))

;; Store the server instance in an atom for potential shutdown
(defonce server (atom nil))

(defn start-server! [port]
  (reset! server (http/start-server app {:port port}))
  (println "Server started on port" port))

(defn stop-server! []
  (when @server
    (.close @server)
    (reset! server nil)
    (println "Server stopped")))

(defn -main []
  (let [port (Integer/parseInt (or (System/getenv "PORT") "3000"))]
    (start-server! port)))
