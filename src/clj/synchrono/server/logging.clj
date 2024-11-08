(ns synchrono.server.logging
  (:require
   [taoensso.timbre :as timbre]
   [taoensso.timbre.appenders.core :as appenders]))

(defn configure-logging! []
  (timbre/merge-config!
   {:level :trace
    :appenders {:println (appenders/println-appender
                          {:stream :auto
                          ;; Don't log in tests
                           :enabled? (not= "test" (System/getProperty "clojure.env"))})
                :spit (appenders/spit-appender
                       {:fname "logs/synchrono.log"
                        :append? true})}
    :timestamp-opts {:pattern "yyyy-MM-dd HH:mm:ss.SSS"}
    :output-fn (fn [data]
                (timbre/default-output-fn data))})) 