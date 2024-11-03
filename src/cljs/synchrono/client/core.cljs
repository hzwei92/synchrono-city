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
            [synchrono.client.storage]))

;; Main application view component
;; Renders the header, menu panel, and main content body
(defn app-view []
  [:div.app-view
   [header]
   [:div.panel
    [menu]
    [body]]])

;; Mounts the root React component to the DOM
;; Clears re-frame subscription cache and creates a new React root
(defn mount-root []
  (re-frame/clear-subscription-cache!)
  (let [container (.getElementById js/document "app")
        root (rdc/createRoot container)]
    (.render root (r/as-element [app-view]))))

;; Application entry point
;; Initializes the re-frame database and mounts the root component
(defn init []
  (re-frame/dispatch-sync [:initialize-db])
  (mount-root))