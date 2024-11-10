(defproject synchrono "0.1.0"
  :description "daily journaling club, via nostr"
  :url "https://synchrono.city"
  :license {:name "MIT"
            :url "https://opensource.org/licenses/MIT"}
  :dependencies [[org.clojure/clojure "1.12.0"]
                 [ring/ring-core "1.13.0"]
                 [ring/ring-json "0.5.0"]
                 [aleph "0.8.1"]
                 [compojure "1.7.1"]
                 [com.github.seancorfield/next.jdbc "1.3.955"]
                 [org.xerial/sqlite-jdbc "3.47.0.0"]
                 [manifold "0.4.3"]
                 [cheshire "5.10.2"]
                 [org.bouncycastle/bcprov-jdk18on "1.77"]
                 [org.slf4j/slf4j-simple "1.7.36"]
                 [org.bitcoinj/bitcoinj-core "0.16.2"]
                 [com.google.code.gson/gson "2.10.1"]
                 [org.projectlombok/lombok "1.18.32"]
                 [com.taoensso/timbre "6.5.0"]]
  :source-paths ["src/clj"]
  :main ^:skip-aot synchrono.server.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all
                       :jvm-opts ["-Dclojure.compiler.direct-linking=true"]}})
