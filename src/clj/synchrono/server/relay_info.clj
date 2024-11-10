(ns synchrono.server.relay-info
  "NIP-11 implementation for relay information document"
  (:require [cheshire.core :as json]
            [ring.util.response :as response]))

(def relay-metadata
  "Default relay information document according to NIP-11"
  {:name "synchrono.city"
   :description "daily journaling club"
   :pubkey "218c2daaee0049b25aecfc70578612e107c73dba3bd4387a1946ee2ce2be4bd5" ; TODO: Replace with actual admin pubkey
   :contact "mailto:metanoos@protonmail.com"
   :supported_nips [1 11]
   :software "https://github.com/hzwei92/synchrono"
   :version "0.1.0"})

(defn serve-metadata
  "Handles HTTP GET requests for relay information document"
  [req]
  (if (= (get-in req [:headers "accept"]) "application/nostr+json")
    (-> relay-metadata
        json/generate-string
        response/response
        (response/content-type "application/nostr+json")
        (response/header "Access-Control-Allow-Origin" "*")
        (response/header "Access-Control-Allow-Headers" "*")
        (response/header "Access-Control-Allow-Methods" "*"))
    (response/not-found "Not found"))) 