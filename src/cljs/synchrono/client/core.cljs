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
            [taoensso.timbre :as log]
            [clojure.string :as str]
            [cljs.pprint :as pprint]))

(defn init-logging! []
  (log/set-min-level! :trace)
  (log/merge-config!
   {:ns-blacklist ["goog.*" "reagent.*" "re-frame.*"]
    :ns-filter {:allow #{"synchrono.*"}}
    :output-fn (fn [{:keys [level ?ns-str vargs] :as data}]
                 (let [ts (js/Date.)
                       pst-options #js {:timeZone "America/Los_Angeles"
                                      :year "numeric"
                                      :month "2-digit"
                                      :day "2-digit"
                                      :hour "2-digit"
                                      :minute "2-digit"
                                      :second "2-digit"
                                      :fractionalSecondDigits 3
                                      :hour12 false}
                       pst-time (.toLocaleString ts "en-US" pst-options)
                       emoji (case level
                              :error "🔴"
                              :warn  "🟡"
                              :info  "🟢"
                              :trace "⚪"
                              "")
                       msg-args (map (fn [arg]
                                     (cond
                                       (map? arg) (with-out-str (pprint/pprint arg))
                                       (sequential? arg) (with-out-str (pprint/pprint arg))
                                       :else (pr-str arg))) 
                                   vargs)
                       msg (str/join " " msg-args)]
                   (str pst-time " " emoji " " 
                        (str/upper-case (name level)) " "
                        "[" (or ?ns-str "?") "] - "
                        msg)))
    :appenders {:console {:enabled? true
                         :async? false}}}))

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
  (init-logging!)
  (log/trace "Trace test message" {:data 42})
  (log/debug "Debug test message" {:debug true})
  (log/info "Info test message" {:a 1 :b 2})
  (log/warn "Warning test message" {:warning "careful!"})
  (log/error "Error test message" {:error "oops!"})
  (mount-root))
