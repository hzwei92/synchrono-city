(ns synchrono.client.lightning
  "Lightning Network wallet integration namespace.
   Supports WebLN and LNURL compatible wallets."
  (:require [re-frame.core :as re-frame]
            [taoensso.timbre :as log]
            ["webln" :as webln]
            [clojure.string :as str]))

;; ======================
;; WebLN Integration
;; ======================

(defn detect-webln
  "Checks if WebLN provider is available in browser"
  []
  (boolean (and (exists? js/window) (.-webln js/window))))

(defn request-webln-provider
  "Requests WebLN provider from browser/extension"
  []
  (-> ^js (webln/requestProvider)
      (.then (fn [provider]
               (re-frame/dispatch [:set-lightning-provider provider])
               provider))
      (.catch (fn [err]
                (log/error "Failed to get WebLN provider:" err)
                (re-frame/dispatch [:set-lightning-error "No WebLN provider found. Please install a compatible wallet."])
                nil))))

(defn make-payment
  "Makes a Lightning payment using available provider"
  [payment-request]
  (let [provider (re-frame/subscribe [:lightning-provider])]
    (if @provider
      (try
        (-> ^js @provider
            (.sendPayment payment-request)
            (.then (fn [response]
                    (log/info "Payment sent successfully:" response)
                    (re-frame/dispatch [:payment-success response])))
            (.catch (fn [error]
                     (log/error "Payment failed:" error)
                     (re-frame/dispatch [:payment-failed error]))))
        (catch :default e
          (log/error "Error initiating payment:" e)
          (re-frame/dispatch [:payment-failed e])))
      (re-frame/dispatch [:set-lightning-error "No Lightning wallet connected"]))))

;; ======================
;; LNURL Integration
;; ======================

(def lnurl-regex #"^lightning:(?:ln(?:url)?)?([0-9a-z]+)$")

(defn encode-lnurl [url]
  (-> url
      js/btoa
      (str/replace #"=" "")
      str/lower-case))

(defn decode-lnurl [lnurl]
  (try
    (let [padding (case (mod (count lnurl) 4)
                   0 ""
                   1 "==="
                   2 "=="
                   3 "=")
          decoded (js/atob (str lnurl padding))]
      decoded)
    (catch :default e
      (log/error "Failed to decode LNURL:" e)
      nil)))

(defn parse-lightning-link [link]
  (when-let [matches (re-matches lnurl-regex link)]
    (decode-lnurl (second matches))))

;; ======================
;; Event Handlers
;; ======================

(re-frame/reg-event-db
 :set-lightning-provider
 (fn [db [_ provider]]
   (assoc-in db [:lightning :provider] provider)))

(re-frame/reg-event-db
 :set-lightning-error
 (fn [db [_ error]]
   (assoc-in db [:app :error] error)))

(re-frame/reg-event-fx
 :connect-lightning-wallet
 (fn [{:keys [db]} _]
   (if (detect-webln)
     (do
       (request-webln-provider)
       {:db (assoc-in db [:lightning :connecting?] true)
        :dispatch [:set-app-message "Connecting to Lightning wallet..."]})
     {:db (assoc-in db [:app :error] "No WebLN provider detected. Please install a Lightning wallet.")
      :dispatch [:set-app-message "No Lightning wallet detected"]})))

(re-frame/reg-event-fx
 :payment-success
 (fn [{:keys [db]} [_ response]]
   {:db (-> db
            (assoc-in [:lightning :last-payment] response)
            (assoc-in [:app :message] "Payment sent successfully!"))}))

(re-frame/reg-event-fx
 :payment-failed
 (fn [{:keys [db]} [_ error]]
   {:db (assoc-in db [:app :error] (str "Payment failed: " error))}))

;; ======================
;; Subscriptions
;; ======================

(re-frame/reg-sub
 :lightning-provider
 (fn [db]
   (get-in db [:lightning :provider])))

(re-frame/reg-sub
 :lightning-connected?
 (fn [db]
   (boolean (get-in db [:lightning :provider]))))

(re-frame/reg-sub
 :last-payment
 (fn [db]
   (get-in db [:lightning :last-payment])))

;; Add this new function
(defn auto-connect-if-available
  "Automatically connects to WebLN provider if available without user prompt"
  []
  (when (detect-webln)
    (request-webln-provider)))

;; Add initialization event
(re-frame/reg-event-fx
 :init-lightning
 (fn [_ _]
   (auto-connect-if-available)
   {})) 