(ns synchrono.client.core
  "Core namespace for the Synchrono client application.
   Handles initialization and mounting of the main React components.
   Daily journaling club ain't easy."
  (:require ["react-dom/client" :as rdc]
            [re-frame.core :as re-frame]
            [reagent.core :as r]
            [synchrono.client.header :refer [header]]
            [synchrono.client.menu :refer [menu]]
            [synchrono.client.body :refer [body]]
            [synchrono.client.storage]
            [synchrono.client.logging :as logging]
            [taoensso.timbre :as log]))

;; Main application view component
(defn app-view []
  [:div.app-view
   [header]
   [:div.panel
    [menu]
    [body]]])

;; Mounts the root React component to the DOM
(defn mount-root []
  (re-frame/clear-subscription-cache!)
  (let [container (.getElementById js/document "app")
        root (rdc/createRoot container)]
    (.render root (r/as-element [app-view]))))

;; Application entry point
(defn init []
  (try
    (logging/init-logging!)
    (re-frame/dispatch-sync [:initialize-db])
    (log/info "Starting application initialization")
    (re-frame/dispatch-sync [:init-lightning])
    (mount-root)
    (catch :default e
      (js/console.error "Failed to initialize application:" e))))
