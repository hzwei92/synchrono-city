(ns synchrono.client.keys
  (:require [re-frame.core :as re-frame]
            ["nostr-tools" :refer [generateSecretKey getPublicKey]]
            [synchrono.client.crypto :refer [bytes-to-hex hex-to-bytes encrypt decrypt]]))

;; ======================
;; Components
;; ======================

;; Component for displaying all keypairs
(defn keypairs-list []
  (let [keypairs (re-frame/subscribe [:keypairs-list])
        current-keypair-name (re-frame/subscribe [:current-keypair-name])
        current-keypair-private-key (re-frame/subscribe [:current-keypair-private-key])
        password (re-frame/subscribe [:password])
        show-password? (re-frame/subscribe [:show-password?])
        error (re-frame/subscribe [:error])
        clearing-keypair-name (re-frame/subscribe [:clearing-keypair-name])
        unlocking-keypair-name (re-frame/subscribe [:unlocking-keypair-name])]
    [:div.keypairs-list
     (doall
      (for [keypair @keypairs]
        ^{:key (:name keypair)}
        [:div.keypair {:class (when (= (:name keypair) @current-keypair-name) "selected")}
         [:div.keypair-name
          [:span "Name: "]
          [:strong (:name keypair)]]
         [:div
          [:span "Public Key: "]
          (if (empty? (:public-key keypair))
            [:span.faint "(empty)"]
            [:span
             [:span (str (subs (:public-key keypair) 0 4) "..."
                         (subs (:public-key keypair) (- (count (:public-key keypair)) 4)))]
             [:button.content-button
              {:on-click #(-> js/navigator.clipboard (.writeText (:public-key keypair)))}
              "Copy"]])]
         [:div.keys-row
          [:span "Private Key: "]
          (if (and @current-keypair-private-key (= (:name keypair) @current-keypair-name))
            [:span
             [:span (str (subs @current-keypair-private-key 0 4) "..."
                         (subs @current-keypair-private-key (- (count @current-keypair-private-key) 4)))]
             [:button.content-button
              {:on-click #(-> js/navigator.clipboard (.writeText @current-keypair-private-key))}
              "Copy"]]
            (if (:encrypted-private-key keypair)
              [:span.faint "(locked)"]
              [:span.faint "(empty)"]))]
         (if (and @current-keypair-private-key (= (:name keypair) @current-keypair-name))
           [:div.keys-row
            [:button.action-button {:on-click #(re-frame/dispatch [:lock-keys])}
             "Lock"]]
           (if (= (:name keypair) @unlocking-keypair-name)
             [:div
              [:div.keys-row
               [:input {:type (if @show-password? "text" "password")
                        :value @password
                        :placeholder "password"
                        :on-change #(re-frame/dispatch [:set-password (-> % .-target .-value)])
                        :autoComplete "off"}]
               [:button.content-button {:on-click #(re-frame/dispatch [:toggle-show-password])}
                (if @show-password? "Hide" "Show")]]
              [:div.keys-row
               [:div.error @error]]
              [:div.keys-row
               [:button.action-button {:on-click #(re-frame/dispatch [:unlock-keys])}
                "Unlock"]
               [:button.content-button {:on-click #(re-frame/dispatch [:set-unlocking-keypair-name nil])}
                "Cancel"]]]
             [:div.keys-row
              [:button.action-button {:on-click #(re-frame/dispatch [:set-unlocking-keypair-name (:name keypair)])}
               "Unlock"]]))
         (if @clearing-keypair-name
           [:div.keys-row
            [:div.keys-row "Are you sure you want to clear this keypair? "]
            [:button.danger-button {:on-click #(re-frame/dispatch [:clear-keypair])} "Clear"]
            [:button.content-button {:on-click #(re-frame/dispatch [:set-clearing-keypair-name nil])} "Cancel"]]
           [:button.danger-button {:on-click #(re-frame/dispatch [:set-clearing-keypair-name (:name keypair)])}
            "Clear"])]))]))

(defn keypair-generator []
  (let [name (re-frame/subscribe [:name])
        password (re-frame/subscribe [:password])
        confirm-password (re-frame/subscribe [:confirm-password])
        show-password? (re-frame/subscribe [:show-password?])
        show-confirm-password? (re-frame/subscribe [:show-confirm-password?])
        error (re-frame/subscribe [:error])]
    [:div.keys-generator
     [:div.keys-row
      [:input {:type "text"
               :value @name
               :placeholder "name"
               :on-change #(re-frame/dispatch [:set-name (-> % .-target .-value)])
               :autoComplete "off"}]]
     [:div.keys-row
      [:input {:type (if @show-password? "text" "password")
               :value @password
               :placeholder "password"
               :on-change #(re-frame/dispatch [:set-password (-> % .-target .-value)])
               :autoComplete "off"}]
      [:button.content-button {:on-click #(re-frame/dispatch [:toggle-show-password])}
       (if @show-password? "Hide" "Show")]]
     [:div.keys-row
      [:input {:type (if @show-confirm-password? "text" "password")
               :value @confirm-password
               :placeholder "confirm password"
               :on-change #(re-frame/dispatch [:set-confirm-password (-> % .-target .-value)])
               :autoComplete "off"}]
      [:button.content-button {:on-click #(re-frame/dispatch [:toggle-show-confirm-password])}
       (if @show-confirm-password? "Hide" "Show")]]
     [:div.keys-row
      [:div.error @error]]
     [:button.action-button {:on-click #(re-frame/dispatch [:generate-keys])}
      "Generate"]
     [:button.content-button {:on-click #(re-frame/dispatch [:set-generating-keypair? false])}
      "Cancel"]]))

(defn keypair-importer []
  (let [name (re-frame/subscribe [:name])
        password (re-frame/subscribe [:password])
        confirm-password (re-frame/subscribe [:confirm-password])
        show-password? (re-frame/subscribe [:show-password?])
        show-confirm-password? (re-frame/subscribe [:show-confirm-password?])
        public-key (re-frame/subscribe [:public-key])
        private-key (re-frame/subscribe [:private-key])
        error (re-frame/subscribe [:error])]
    [:div.keys-importer
     [:div.keys-row
      [:input {:type "text"
               :value @name
               :placeholder "name"
               :on-change #(re-frame/dispatch [:set-name (-> % .-target .-value)])
               :autoComplete "off"}]]
     [:div.keys-row
      [:input {:type (if @show-password? "text" "password")
               :value @password
               :placeholder "password"
               :on-change #(re-frame/dispatch [:set-password (-> % .-target .-value)])
               :autoComplete "off"}]
      [:button.content-button {:on-click #(re-frame/dispatch [:toggle-show-password])}
       (if @show-password? "Hide" "Show")]]
     [:div.keys-row
      [:input {:type (if @show-confirm-password? "text" "password")
               :value @confirm-password
               :placeholder "confirm password"
               :on-change #(re-frame/dispatch [:set-confirm-password (-> % .-target .-value)])
               :autoComplete "off"}]
      [:button.content-button {:on-click #(re-frame/dispatch [:toggle-show-confirm-password])}
       (if @show-confirm-password? "Hide" "Show")]]
     [:div.keys-row
      [:input {:type "text"
               :value @public-key
               :placeholder "public key"
               :on-change #(re-frame/dispatch [:set-public-key (-> % .-target .-value)])
               :autoComplete "off"}]]
     [:div.keys-row
      [:input {:type "text"
               :value @private-key
               :placeholder "private key"
               :on-change #(re-frame/dispatch [:set-private-key (-> % .-target .-value)])
               :autoComplete "off"}]]
     [:div.keys-row
      [:div.error @error]]
     [:button.action-button {:on-click #(re-frame/dispatch [:import-keys])} "Import"]
     [:button.content-button {:on-click #(re-frame/dispatch [:set-importing-keypair? false])}
      "Cancel"]]))

;; Main view component for key management
(defn keys-view []
  (let [generating-keypair? (re-frame/subscribe [:generating-keypair?])
        importing-keypair? (re-frame/subscribe [:importing-keypair?])]
    [:div.keys
     [:div.title "keys"]
     [:div "When it's locked with A, then B unlocks."]
     [:div.keys-row "When it's locked with B, then A unlocks."]
     [:div.keys-row "Given such a keypair, keep one private and share the other publicly."]
     [:div "Use the public key as your name."]
     [:div.keys-row "Use the private key to decrypt secrets and sign messages associated with that name."]
     [keypairs-list]
     [:div.new-keypair
      [:div.keys-row (str (cond
                            @generating-keypair? "Generate a new keypair"
                            @importing-keypair? "Import a keypair"
                            :else "New keypair"))]
      (cond
        @generating-keypair? [keypair-generator]
        @importing-keypair? [keypair-importer]
        :else [:div
               [:div.keys-row
                [:button.action-button {:on-click #(re-frame/dispatch [:set-generating-keypair? true])} "Generate"]]
               [:div.keys-row
                [:button.action-button {:on-click #(re-frame/dispatch [:set-importing-keypair? true])} "Import"]]])]]))

;; ======================
;; Re-frame Events
;; ======================

(re-frame/reg-event-fx
 :generate-keys
 (fn [{:keys [db]} _]
   (let [keypairs-list (get-in db [:keys :keypairs-list])
         name (get-in db [:keys :name])
         password (get-in db [:keys :password])
         confirm-password (get-in db [:keys :confirm-password])]
     (cond
       (empty? name)
       {:db (assoc-in db [:app :error] "Name cannot be empty")}
       (some #(= (:name %) name) keypairs-list)
       {:db (assoc-in db [:app :error] "Name already in use")}
       (empty? password)
       {:db (assoc-in db [:app :error] "Password cannot be empty")}
       (not= password confirm-password)
       {:db (assoc-in db [:app :error] "Passwords do not match")}
       :else
       (let [private-key-bytes (generateSecretKey)
             public-key (getPublicKey private-key-bytes)
             private-key (bytes-to-hex private-key-bytes)]
         {:db (-> db
                  (assoc-in [:keys :keypairs-list]
                            (conj (get-in db [:keys :keypairs-list])
                                  {:name name
                                   :public-key public-key
                                   :encrypted-private-key (encrypt private-key-bytes password)}))
                  (assoc-in [:keys :current-keypair-name] name)
                  (assoc-in [:keys :current-keypair-private-key] private-key)
                  (assoc-in [:keys :name] "")
                  (assoc-in [:keys :password] "")
                  (assoc-in [:keys :confirm-password] "")
                  (assoc-in [:keys :show-password?] false)
                  (assoc-in [:keys :show-confirm-password?] false)
                  (assoc-in [:keys :generating-keypair?] false)
                  (assoc-in [:app :error] ""))
          :dispatch [:save-keys-to-local-storage]})))))

(re-frame/reg-event-fx
 :import-keys
 (fn [{:keys [db]} _]
   (let [keypairs-list (get-in db [:keys :keypairs-list])
         name (get-in db [:keys :name])
         password (get-in db [:keys :password])
         confirm-password (get-in db [:keys :confirm-password])
         public-key (get-in db [:keys :public-key])
         private-key (get-in db [:keys :private-key])
         private-key-bytes (hex-to-bytes private-key)]
     (cond
       (empty? name)
       {:db (assoc-in db [:app :error] "Name cannot be empty")}
       (some #(= (:name %) name) keypairs-list)
       {:db (assoc-in db [:app :error] "Name already in use")}
       (empty? password)
       {:db (assoc-in db [:app :error] "Password cannot be empty")}
       (not= password confirm-password)
       {:db (assoc-in db [:app :error] "Passwords do not match")}
       (empty? public-key)
       {:db (assoc-in db [:app :error] "Public key cannot be empty")}
       (some #(= (:public-key %) public-key) keypairs-list)
       {:db (assoc-in db [:app :error] "Public key already in use")}
       (empty? private-key)
       {:db (assoc-in db [:app :error] "Private key cannot be empty")}
       (not= (getPublicKey private-key-bytes) public-key)
       {:db (assoc-in db [:app :error] "Private key does not match public key")}
       :else
       {:db (-> db
                (assoc-in [:keys :keypairs-list]
                          (conj (get-in db [:keys :keypairs-list])
                                {:name name
                                 :public-key public-key
                                 :encrypted-private-key (encrypt private-key-bytes password)}))
                (assoc-in [:keys :current-keypair-name] name)
                (assoc-in [:keys :current-keypair-private-key] private-key)
                (assoc-in [:keys :name] "")
                (assoc-in [:keys :password] "")
                (assoc-in [:keys :confirm-password] "")
                (assoc-in [:keys :show-password?] false)
                (assoc-in [:keys :show-confirm-password?] false)
                (assoc-in [:keys :importing-keypair?] false)
                (assoc-in [:app :error] ""))
        :dispatch [:save-keys-to-local-storage]}))))

(re-frame/reg-event-db
 :lock-keys
 (fn [db _]
   (-> db
       (assoc-in [:keys :current-keypair-name] nil)
       (assoc-in [:keys :current-keypair-private-key] nil)
       (assoc-in [:keys :clearing-keypair-name] nil))))

(re-frame/reg-event-db
 :unlock-keys
 (fn [db _]
   (let [keypairs-list (get-in db [:keys :keypairs-list])
         unlocking-keypair-name (get-in db [:keys :unlocking-keypair-name])
         unlocking-keypair (first (filter #(= (:name %) unlocking-keypair-name) keypairs-list))
         public-key (:public-key unlocking-keypair)
         encrypted-private-key (:encrypted-private-key unlocking-keypair)
         password (get-in db [:keys :password])
         private-key-bytes (decrypt encrypted-private-key password)]
     (if (or (nil? private-key-bytes)
             (not= (getPublicKey private-key-bytes) public-key))
       (assoc-in db [:app :error] "Failed to unlock keys")
       (-> db
           (assoc-in [:keys :current-keypair-name] unlocking-keypair-name)
           (assoc-in [:keys :current-keypair-private-key] (bytes-to-hex private-key-bytes))
           (assoc-in [:keys :unlocking-keypair-name] nil)
           (assoc-in [:keys :password] "")
           (assoc-in [:app :error] ""))))))

(re-frame/reg-event-db
 :set-name
 (fn [db [_ name]]
   (assoc-in db [:keys :name] name)))

(re-frame/reg-event-db
 :set-password
 (fn [db [_ password]]
   (assoc-in db [:keys :password] password)))

(re-frame/reg-event-db
 :set-confirm-password
 (fn [db [_ confirm-password]]
   (assoc-in db [:keys :confirm-password] confirm-password)))

(re-frame/reg-event-db
 :toggle-show-password
 (fn [db _]
   (update-in db [:keys :show-password?] not)))

(re-frame/reg-event-db
 :toggle-show-confirm-password
 (fn [db _]
   (update-in db [:keys :show-confirm-password?] not)))

(re-frame/reg-event-db
 :set-public-key
 (fn [db [_ public-key]]
   (assoc-in db [:keys :public-key] public-key)))

(re-frame/reg-event-db
 :set-private-key
 (fn [db [_ private-key]]
   (assoc-in db [:keys :private-key] private-key)))

(re-frame/reg-event-db
 :set-unlocking-keypair-name
 (fn [db [_ keypair-name]]
   (-> db
       (assoc-in [:keys :name] "")
       (assoc-in [:keys :password] "")
       (assoc-in [:keys :confirm-password] "")
       (assoc-in [:keys :show-password?] false)
       (assoc-in [:keys :show-confirm-password?] false)
       (assoc-in [:keys :public-key] "")
       (assoc-in [:keys :private-key] "")
       (assoc-in [:keys :generating-keypair?] false)
       (assoc-in [:keys :importing-keypair?] false)
       (assoc-in [:keys :unlocking-keypair-name] keypair-name)
       (assoc-in [:keys :clearing-keypair-name] nil)
       (assoc-in [:app :error] ""))))

(re-frame/reg-event-db
 :set-clearing-keypair-name
 (fn [db [_ keypair-name]]
   (-> db
       (assoc-in [:keys :clearing-keypair-name] keypair-name)
       (assoc-in [:keys :unlocking-keypair-name] nil)
       (assoc-in [:keys :name] "")
       (assoc-in [:keys :password] "")
       (assoc-in [:keys :show-password?] false)
       (assoc-in [:keys :show-confirm-password?] false)
       (assoc-in [:app :error] ""))))

(re-frame/reg-event-fx
 :clear-keypair
 (fn [{:keys [db]} _]
   (let [keypairs-list (get-in db [:keys :keypairs-list])
         current-keypair-name (get-in db [:keys :current-keypair-name])
         current-keypair-private-key (get-in db [:keys :current-keypair-private-key])
         clearing-keypair-name (get-in db [:keys :clearing-keypair-name])
         updated-keypairs-list (filter #(not= (:name %) clearing-keypair-name) keypairs-list)]
     {:db (-> db
              (assoc-in [:keys :clearing-keypair-name] nil)
              (assoc-in [:keys :keypairs-list] updated-keypairs-list)
              (assoc-in [:keys :current-keypair-name] (if (= clearing-keypair-name current-keypair-name)
                                                        nil
                                                        current-keypair-name))
              (assoc-in [:keys :current-keypair-private-key] (if (= clearing-keypair-name current-keypair-name)
                                                               nil
                                                               current-keypair-private-key)))
      :dispatch [:save-keys-to-local-storage]})))

(re-frame/reg-event-db
 :set-generating-keypair?
 (fn [db [_ generating-keypair?]]
   (-> db
       (assoc-in [:keys :name] "")
       (assoc-in [:keys :password] "")
       (assoc-in [:keys :confirm-password] "")
       (assoc-in [:keys :public-key] "")
       (assoc-in [:keys :private-key] "")
       (assoc-in [:keys :generating-keypair?] generating-keypair?)
       (assoc-in [:keys :importing-keypair?] false)
       (assoc-in [:keys :unlocking-keypair-name] nil)
       (assoc-in [:keys :clearing-keypair-name] nil)
       (assoc-in [:app :error] ""))))

(re-frame/reg-event-db
 :set-importing-keypair?
 (fn [db [_ importing-keypair?]]
   (-> db
       (assoc-in [:keys :name] "")
       (assoc-in [:keys :password] "")
       (assoc-in [:keys :confirm-password] "")
       (assoc-in [:keys :public-key] "")
       (assoc-in [:keys :private-key] "")
       (assoc-in [:keys :importing-keypair?] importing-keypair?)
       (assoc-in [:keys :generating-keypair?] false)
       (assoc-in [:keys :unlocking-keypair-name] nil)
       (assoc-in [:keys :clearing-keypair-name] nil)
       (assoc-in [:app :error] ""))))

;; ======================
;; Re-frame Subscriptions
;; ======================

(re-frame/reg-sub
 :keypairs-list
 (fn [db]
   (get-in db [:keys :keypairs-list])))

(re-frame/reg-sub
 :current-keypair-name
 (fn [db]
   (get-in db [:keys :current-keypair-name])))

(re-frame/reg-sub
 :current-keypair-private-key
 (fn [db]
   (get-in db [:keys :current-keypair-private-key])))

(re-frame/reg-sub
 :current-keypair
 (fn [db]
   (let [current-keypair-name (get-in db [:keys :current-keypair-name])
         keypairs-list (get-in db [:keys :keypairs-list])]
     (first (filter #(= (:name %) current-keypair-name) keypairs-list)))))

(re-frame/reg-sub
 :name
 (fn [db]
   (get-in db [:keys :name])))

(re-frame/reg-sub
 :password
 (fn [db]
   (get-in db [:keys :password])))

(re-frame/reg-sub
 :confirm-password
 (fn [db]
   (get-in db [:keys :confirm-password])))

(re-frame/reg-sub
 :show-password?
 (fn [db]
   (get-in db [:keys :show-password?])))

(re-frame/reg-sub
 :show-confirm-password?
 (fn [db]
   (get-in db [:keys :show-confirm-password?])))

(re-frame/reg-sub
 :public-key
 (fn [db]
   (get-in db [:keys :public-key])))

(re-frame/reg-sub
 :private-key
 (fn [db]
   (get-in db [:keys :private-key])))

(re-frame/reg-sub
 :clearing-keypair-name
 (fn [db]
   (get-in db [:keys :clearing-keypair-name])))

(re-frame/reg-sub
 :unlocking-keypair-name
 (fn [db]
   (get-in db [:keys :unlocking-keypair-name])))

(re-frame/reg-sub
 :generating-keypair?
 (fn [db]
   (get-in db [:keys :generating-keypair?])))

(re-frame/reg-sub
 :importing-keypair?
 (fn [db]
   (get-in db [:keys :importing-keypair?])))

(re-frame/reg-sub
 :error
 (fn [db]
   (get-in db [:app :error])))