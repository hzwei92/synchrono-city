(ns synchrono.client.logging
  (:require [taoensso.timbre :as log]
            [clojure.string :as str]
            [cljs.pprint :as pprint]))

(defn init-logging! []
  (log/merge-config!
   {:level :info  ;; Changed from :trace to :info for production
    :ns-whitelist ["synchrono.*"]
    :ns-blacklist ["goog.*" "reagent.*" "re-frame.*"]
    :output-fn (fn [{:keys [level ?ns-str vargs timestamp] :as data}]
                 (try
                   (let [ts (or timestamp (js/Date.))
                         pst-options #js {:timeZone "America/Los_Angeles"
                                        :hour12 false}
                         pst-time (.toLocaleString (js/Date. ts) "en-US" pst-options)
                         level-str (or (some-> level name str/upper-case) "UNKNOWN")
                         emoji (case level
                                :error "🔴"
                                :warn  "🟡"
                                :info  "🟢"
                                :debug "🔵"
                                :trace "⚪"
                                "❓")
                         msg (->> (or vargs [])
                                 (map (fn [arg]
                                       (cond
                                         (nil? arg) "nil"
                                         ;; Pretty print maps, vectors, and lists
                                         (or (map? arg) (vector? arg) (seq? arg))
                                         (with-out-str (pprint/pprint arg))
                                         :else (str arg))))
                                 (str/join " "))]
                     (str pst-time " "
                          emoji " "
                          level-str " "
                          "[" (or ?ns-str "unknown") "] - "
                          (if (str/blank? msg) "Empty message" msg)))
                   (catch :default e
                     (str "Logging error: " (.-message e)))))
    :appenders {:console {:enabled? true}}}))