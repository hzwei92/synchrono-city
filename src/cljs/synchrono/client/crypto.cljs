(ns synchrono.client.crypto
  "Cryptographic utilities for key generation, encryption and decryption.
   Uses AES-CTR for symmetric encryption and Nostr key pairs for asymmetric."
  (:require ["aes-js" :as aes]
            ["@noble/hashes/sha256" :refer [sha256]]
            [clojure.string :as str]))

;; -------------------------
;; Key Conversion Utilities
;; -------------------------

(defn bytes-to-hex
  "Converts a byte array to a hex string.
   Each byte is converted to a 2-digit hex number and concatenated."
  [bytes]
  (apply str
         (map (fn [byte]
                (let [hex (.toString byte 16)]
                  (if (< (.-length hex) 2)
                    (str "0" hex)
                    hex)))
              (array-seq bytes))))
(defn hex-to-bytes
  "Converts a hex string to a byte array.
   Removes non-hex characters and converts each pair of hex digits to a byte.
   Returns empty byte array if input is nil."
  [hex]
  (if (nil? hex)
    (js/Uint8Array. 0)
    (let [clean-hex (str/replace hex #"[^0-9a-fA-F]" "")
          byte-length (/ (.-length clean-hex) 2)
          byte-array (js/Uint8Array. byte-length)]
      (dotimes [i byte-length]
        (aset byte-array i
              (js/parseInt (.slice clean-hex (* i 2) (+ (* i 2) 2)) 16)))
      byte-array)))

;; -------------------------
;; Encryption Utilities
;; -------------------------

(defn derive-key
  "Derives an encryption key from a password using SHA-256.
   Returns the key as a byte array."
  [password]
  (let [encoder (js/TextEncoder.)
        password-bytes (.encode encoder password)
        key-bytes (sha256 password-bytes)]
    key-bytes))

(defn generate-nonce
  "Generates a random 16-byte (128-bit) initialization vector for AES."
  []
  (js/crypto.getRandomValues (js/Uint8Array. 16)))

(defn encrypt
  "Encrypts data using AES-CTR mode with a derived key.
   Data can be either a string or byte array.
   Returns hex string of concatenated IV and ciphertext."
  [data password]
  (let [encoder (js/TextEncoder.)
        data-bytes (if (string? data)
                    (.encode encoder data)
                    data)
        key (derive-key password)
        iv (generate-nonce)
        aes-ctr (aes/ModeOfOperation.ctr. key iv)
        encrypted (.encrypt aes-ctr data-bytes)
        combined (js/Uint8Array. (+ (.-length iv) (.-length encrypted)))]
    (.set combined iv 0)
    (.set combined encrypted (.-length iv))
    (bytes-to-hex combined)))

(defn decrypt
  "Decrypts a hex string using AES-CTR mode.
   Expects concatenated IV and ciphertext.
   Returns decrypted bytes or nil if decryption fails."
  [encrypted-hex password]
  (let [combined-bytes (hex-to-bytes encrypted-hex)
        iv (js/Uint8Array. (.slice combined-bytes 0 16))
        ciphertext (js/Uint8Array. (.slice combined-bytes 16))
        key (derive-key password)
        aes-ctr (aes/ModeOfOperation.ctr. key iv)]
    (try
      (.decrypt aes-ctr ciphertext)
      (catch :default e
        (js/console.error "Decryption failed:" e)
        nil))))
