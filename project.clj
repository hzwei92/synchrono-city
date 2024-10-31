(defproject synchrono "0.1.0"
  :description "daily journaling club via nostr"
  :url "https://synchrono.city"
  :license {:name "MIT"
            :url "https://opensource.org/licenses/MIT"}
  :dependencies [[org.clojure/clojure "1.11.1"]
                 [ring/ring-core "1.13.0"]
                 [ring/ring-json "0.5.0"]
                 [aleph "0.8.1"]
                 [compojure "1.7.1"]]
  :source-paths ["src/clj"]
  :main ^:skip-aot synchrono.server.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all
                       :jvm-opts ["-Dclojure.compiler.direct-linking=true"]}})
