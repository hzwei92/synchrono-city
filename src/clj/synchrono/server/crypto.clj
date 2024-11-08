(ns synchrono.server.crypto
  (:require [cheshire.core :as json]
            [clojure.tools.logging :as log])
  (:import [org.bouncycastle.crypto.digests SHA256Digest]
           [org.bouncycastle.crypto.ec CustomNamedCurves]
           [java.security SecureRandom]
           [org.bouncycastle.util.encoders Hex]
           [java.util Arrays]))

(def secp256k1-params (CustomNamedCurves/getByName "secp256k1"))
(def secp256k1-curve (org.bouncycastle.crypto.params.ECDomainParameters.
                      (.getCurve secp256k1-params)
                      (.getG secp256k1-params)
                      (.getN secp256k1-params)
                      (.getH secp256k1-params)))
(def curve-n (.getN secp256k1-curve))
(def curve-g (.getG secp256k1-curve))

(defn bytes->hex [bytes]
  (Hex/toHexString bytes))

(defn hex->bytes [hex-str]
  (Hex/decode hex-str))

(defn sha256 [data]
  (let [digest (SHA256Digest.)
        input (if (string? data) (.getBytes data "UTF-8") data)
        output (byte-array 32)]
    (.update digest input 0 (count input))
    (.doFinal digest output 0)
    output))

(defn generate-keypair []
  (let [secure-random (SecureRandom.)
        private-key-bytes (byte-array 32)
        _ (.nextBytes secure-random private-key-bytes)
        private-key (biginteger (BigInteger. 1 private-key-bytes))
        public-key (.multiply curve-g private-key)
        compressed-pubkey (.getEncoded public-key true)]
    {:private-key (bytes->hex private-key-bytes)
     :public-key (bytes->hex compressed-pubkey)}))

(defn compute-event-id [event]
  (let [serialized (json/generate-string
                    [0  ;; Always 0 per NIP-01
                     (:pubkey event)
                     (:created_at event)
                     (:kind event)
                     (:tags event)
                     (:content event)]
                    {:escape-forward-slashes false})  ;; Ensure no extra escaping of forward slashes
        bytes (sha256 serialized)
        hex (bytes->hex bytes)]
    hex))

(defn to-biginteger [n]
  (cond
    (instance? BigInteger n) n
    (instance? clojure.lang.BigInt n) (BigInteger. (str n))
    (string? n) (BigInteger. n 16)
    (number? n) (BigInteger. (str n))
    :else (throw (IllegalArgumentException. 
                  (str "Cannot convert to BigInteger: " n " of type " (type n))))))

(defn lift-x [x]
  (try
    (let [curve (.getCurve secp256k1-curve)
          p (BigInteger. "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F" 16)
          x (to-biginteger x)  ;; Convert to BigInteger if needed
          
          ;; Check x is in range
          _ (when (or (< x BigInteger/ZERO) (>= x p))
              (throw (Exception. "X coordinate is not in range")))
          
          ;; Calculate y² = x³ + 7
          x3 (.mod (.multiply (.multiply x x) x) p)
          c (.mod (.add x3 (BigInteger/valueOf 7)) p)
          
          ;; Calculate y = c^((p+1)/4) mod p
          exp (.add p BigInteger/ONE)
          exp (.divide exp (BigInteger/valueOf 4))
          y (.modPow c exp p)
          
          ;; Verify y² ≡ c (mod p)
          y-squared (.mod (.multiply y y) p)
          _ (when (not= y-squared c)
              (throw (Exception. "No valid Y coordinate exists")))
          
          ;; Ensure y is even
          y-final (if (= (.mod y (BigInteger/valueOf 2)) BigInteger/ZERO)
                   y
                   (.subtract p y))
          
          ;; Create point
          point (.createPoint curve x y-final)]
      point)
    (catch Exception e
      (println "lift_x failed:" (.getMessage e))
      (.printStackTrace e)
      nil)))

(defn tagged-hash [tag data]
  (let [tag-hash (sha256 (.getBytes tag "UTF-8"))
        tag-hash-2x (byte-array (* 2 (count tag-hash)))]
    ;; Create tag-hash || tag-hash
    (System/arraycopy tag-hash 0 tag-hash-2x 0 (count tag-hash))
    (System/arraycopy tag-hash 0 tag-hash-2x (count tag-hash) (count tag-hash))
    ;; Then hash tag-hash-2x || data
    (let [combined (byte-array (+ (count tag-hash-2x) (count data)))]
      (System/arraycopy tag-hash-2x 0 combined 0 (count tag-hash-2x))
      (System/arraycopy data 0 combined (count tag-hash-2x) (count data))
      (sha256 combined))))

(defn sign-event [event private-key-hex]
  (try 
    (log/debug "Starting event signing process")
    (let [private-key (biginteger (hex->bytes private-key-hex))
          event-id (compute-event-id event)
          _ (log/debug "Computed event ID:" event-id)
          
          ;; Generate auxiliary random bytes
          secure-random (SecureRandom.)
          aux-rand (byte-array 32)
          _ (.nextBytes secure-random aux-rand)
          
          ;; Compute public key point and get x coordinate
          public-key (.multiply curve-g private-key)
          pubkey-bytes (.getEncoded public-key true)  ;; compressed format
          
          ;; Compute message hash
          message-hash (hex->bytes event-id)
          
          ;; Compute tagged hash for nonce
          k-input (byte-array (+ 32 32 (count message-hash)))
          _ (System/arraycopy aux-rand 0 k-input 0 32)
          _ (System/arraycopy (hex->bytes (format "%064x" private-key)) 0 k-input 32 32)
          _ (System/arraycopy message-hash 0 k-input 64 (count message-hash))
          k (BigInteger. 1 (tagged-hash "BIPSchnorrDerive" k-input))
          k (mod k curve-n)
          
          ;; Compute R = k⋅G
          r-point (.multiply curve-g k)
          r-point-norm (.normalize r-point)
          
          ;; Get x coordinate of R
          r (.toBigInteger (.getXCoord r-point-norm))
          
          ;; Negate k if R's y coordinate is odd
          k (if (= 0 (mod (.toBigInteger (.getYCoord r-point-norm)) 2))
              k
              (.subtract curve-n k))
          
          ;; Compute challenge e = hash(R || P || m)
          challenge-input (byte-array (+ 64 (count message-hash)))
          _ (System/arraycopy (hex->bytes (format "%064x" r)) 0 
                             challenge-input 0 32)
          _ (System/arraycopy pubkey-bytes 1 
                             challenge-input 32 32)
          _ (System/arraycopy message-hash 0 
                             challenge-input 64 (count message-hash))
          e (BigInteger. 1 (tagged-hash "BIP0340/challenge" challenge-input))
          e (mod e curve-n)
          
          ;; Compute s = k + e⋅x (mod n)
          s (mod (.add k (.multiply e private-key)) curve-n)
          
          ;; Format signature as r || s
          sig-hex (str (format "%064x" r) (format "%064x" s))]
      
      (log/debug "Successfully signed event with ID:" event-id)
      (assoc event :sig sig-hex :id event-id))
    (catch Exception e
      (log/error e "Failed to sign event")
      nil)))

(defn verify-signature [event]
  (try
    (log/debug "Starting signature verification for event:" (:id event))
    (let [pubkey-hex (:pubkey event)
          pubkey-bytes (hex->bytes pubkey-hex)
          pubkey-int (BigInteger. 1 (if (= 33 (count pubkey-bytes))
                                    (Arrays/copyOfRange pubkey-bytes 1 33)
                                    pubkey-bytes))
          p (BigInteger. "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F" 16)
          
          ;; Verify and lift public key
          _ (when (>= (.compareTo pubkey-int p) 0)
              (throw (Exception. "Public key x coordinate is not in range")))
          pubkey-point (lift-x pubkey-int)
          _ (when (nil? pubkey-point)
              (throw (Exception. "Invalid public key")))
          
          ;; Extract r and s from signature
          sig-hex (:sig event)
          r (BigInteger. 1 (hex->bytes (subs sig-hex 0 64)))
          s (BigInteger. 1 (hex->bytes (subs sig-hex 64 128)))
          
          ;; Verify r and s are in range
          curve-n-bi (biginteger curve-n)
          _ (when (or (>= (.compareTo r p) 0)
                     (>= (.compareTo s curve-n-bi) 0))
              (throw (Exception. "Signature values out of range")))
          
          ;; Compute tagged hash of message
          message-bytes (hex->bytes (:id event))
          
          challenge-input (byte-array (+ 64 (count message-bytes)))
          _ (System/arraycopy (hex->bytes (format "%064x" r)) 0 
                             challenge-input 0 32)
          _ (System/arraycopy (hex->bytes pubkey-hex) 0 
                             challenge-input 32 32)
          _ (System/arraycopy message-bytes 0 
                             challenge-input 64 (count message-bytes))
          e (BigInteger. 1 (tagged-hash "BIP0340/challenge" challenge-input))
          e (mod e curve-n-bi)
          
          s-g (.multiply curve-g (biginteger s))
          e-p (.multiply pubkey-point (biginteger e))
          r-point (.subtract s-g e-p)
          
          _ (when (.isInfinity r-point)
              (throw (Exception. "R is point at infinity")))
          r-point-normalized (.normalize r-point)
          
          ;; Check that R's y coordinate is even
          y-coord (.toBigInteger (.getYCoord r-point-normalized))
          _ (when (not= 0 (mod y-coord BigInteger/TWO))
              (throw (Exception. "R does not have even Y coordinate")))
          
          computed-r (.toBigInteger (.getXCoord r-point-normalized))
          result (= (.compareTo computed-r r) 0)]
      
      (if result
        (log/debug "Signature verification successful for event:" (:id event))
        (log/warn "Signature verification failed for event:" (:id event)))
      result)
    (catch Exception e
      (log/error e "Signature verification failed with exception")
      false)))

(defn validate-event [event]
  (cond
    ;; Check required fields
    (not (every? #(contains? event %) [:id :pubkey :created_at :kind :tags :content :sig]))
    (do (log/warn "Event validation failed: missing required fields")
        false)
    
    ;; Format validations per NIP-01
    (not (and (string? (:id event)) 
              (= 64 (count (:id event)))))
    (do (log/warn "Event validation failed: id must be 32-bytes hex string")
        false)
    
    (not (and (string? (:pubkey event))
              (= 64 (count (:pubkey event)))))
    (do (log/warn "Event validation failed: pubkey must be 32-bytes hex string")
        false)
    
    (not (and (number? (:created_at event))
              (integer? (:created_at event))))
    (do (log/warn "Event validation failed: created_at must be unix timestamp")
        false)
    
    (not (and (number? (:kind event))
              (integer? (:kind event))
              (<= 0 (:kind event) 65535)))
    (do (log/warn "Event validation failed: kind must be integer between 0-65535")
        false)
    
    (not (and (vector? (:tags event))
              (every? vector? (:tags event))
              (every? #(every? string? %) (:tags event))))
    (do (log/warn "Event validation failed: tags must be array of string arrays")
        false)
    
    (not (string? (:content event)))
    (do (log/warn "Event validation failed: content must be string")
        false)
    
    (not (and (string? (:sig event))
              (= 128 (count (:sig event)))))
    (do (log/warn "Event validation failed: sig must be 64-bytes hex string")
        false)

    ;; Verify ID matches content
    (not (= (:id event) (compute-event-id event)))
    (do (log/warn "Event validation failed: id does not match content")
        false)
    
    ;; Verify signature
    (not (verify-signature event))
    (do (log/warn "Event validation failed: signature verification failed")
        false)
    
    :else
    (do (log/debug "Event validation successful for ID:" (:id event))
        true)))

(defn create-event [content & {:keys [kind tags] 
                              :or {kind 1 
                                  tags []}}]
  (log/debug "Creating new event" {:kind kind :tags-count (count tags)})
  (let [keypair (generate-keypair)
        event {:pubkey (:public-key keypair)
               :created_at (quot (System/currentTimeMillis) 1000)
               :kind kind
               :tags tags
               :content content}
        signed-event (sign-event event (:private-key keypair))]
    (if signed-event
      (do 
        (log/debug "Successfully created event" {:id (:id signed-event)})
        signed-event)
      (log/error "Failed to create event"))))
