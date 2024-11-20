(ns synchrono.client.core
  "Core namespace for the Synchrono client application.
   Handles initialization and mounting of the main React components.
   Daily journaling club ain't easy."
  (:require ["react-dom/client" :as rdc]
            [re-frame.core :as rf]
            [reagent.core :as r]
            [synchrono.client.appbar :refer [appbar]]
            [synchrono.client.menu :refer [menu]]
            [synchrono.client.composer :refer [composer]]
            [synchrono.client.lens :refer [lens]]
            [synchrono.client.db]
            [synchrono.client.logging :refer [init-logging!]]
            [taoensso.timbre :as log]))

;; Main application view component
(defn app []
  [:div
   [appbar]
   [:div.body
    [menu]
    [:div.main
     [composer]
     [lens]]]])

;; Mounts the root React component to the DOM
(defn mount-root []
  (rf/clear-subscription-cache!)
  (let [container (.getElementById js/document "app")
        root (rdc/createRoot container)]
    (.render root (r/as-element [app]))))

;; Application entry point
(defn init []
  (try
    (init-logging!)
    (rf/dispatch-sync [:init-db])
    (mount-root)
    (catch :default e
      (js/console.error "Failed to initialize application:" e))))
