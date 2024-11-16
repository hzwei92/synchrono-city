(ns synchrono.client.appbar
  (:require [re-frame.core :as rf]
            [synchrono.client.crypto :refer [generate-keypair encrypt decrypt bytes-to-hex]]
            ["nostr-tools" :refer [getPublicKey]]
            [taoensso.timbre :as log]))

(defn keypair-menu []
  [:div.keypair-menu
   [:button.outline-button
    {:on-click #(rf/dispatch [:copy-public-key])}
    "Copy public key"]
   [:button.outline-button
    {:on-click #(rf/dispatch [:copy-private-key])}
    "Copy private key"]
   [:button.outline-button
    {:on-click #(rf/dispatch [:discard-keypair])}
    "Discard"]])

(defn appbar []
  (let [public-key (rf/subscribe [:public-key])
        private-key (rf/subscribe [:private-key])
        generating-key? (rf/subscribe [:generating-key?])
        password (rf/subscribe [:password])
        confirm-password (rf/subscribe [:confirm-password])
        keypair-menu-open? (rf/subscribe [:keypair-menu-open?])]
    [:div.appbar
     [:div.appbar-left
      [:button.appbar-button
       {:on-click #(rf/dispatch [:toggle-menu])}
       [:img {:src "/JAMN.png" :width 36 :height 36}]]
      [:span.appbar-title "synchrono.city"]]
     [:div.appbar-right
      (if @public-key
        [:a.appbar-public-key
         {:on-click (when @private-key
                      #(rf/dispatch [:toggle-keypair-menu]))}
         (str (subs @public-key 0 8) "..." (subs @public-key (- (count @public-key) 8)))]
        (if @generating-key?
          " "
          [:button.generate-keypair-button
           {:on-click #(rf/dispatch [:start-key-generation])}
           "Generate keypair"]))
      (when (and @public-key (not @private-key))
        [:div.login
         [:input {:type "password"
                  :value @password
                  :placeholder "password"
                  :on-change #(rf/dispatch [:set-password (.-target.value %)])}]
         [:button.public-key-button
          {:on-click #(rf/dispatch [:unlock-keypair])}
          "Unlock"]
         [:button.outline-button
          {:on-click #(rf/dispatch [:discard-keypair])}
          "Discard"]])
      (when @generating-key?
        [:div.login
         [:input {:type "password"
                  :value @password
                  :placeholder "password"
                  :on-change #(rf/dispatch [:set-password (.-target.value %)])}]
         [:input {:type "password"
                  :value @confirm-password
                  :placeholder "confirm password"
                  :on-change #(rf/dispatch [:set-confirm-password (.-target.value %)])}]
         [:button.public-key-button
          {:on-click #(rf/dispatch [:finish-key-generation])}
          "Generate keypair"]
         [:button.outline-button
          {:on-click #(rf/dispatch [:cancel-key-generation])}
          "Cancel"]])
      (when (and @public-key @private-key @keypair-menu-open?)
        [keypair-menu])]]))

(rf/reg-sub
 :public-key
 (fn [db]
   (:public-key db)))

(rf/reg-sub
 :private-key
 (fn [db]
   (:private-key db)))

(rf/reg-sub
 :generating-key?
 (fn [db]
   (:generating-key? db)))

(rf/reg-sub
 :password
 (fn [db]
   (:password db)))

(rf/reg-sub
 :confirm-password
 (fn [db]
   (:confirm-password db)))

(rf/reg-sub
 :keypair-menu-open?
 (fn [db]
   (:keypair-menu-open? db)))

(rf/reg-event-db
 :toggle-keypair-menu
 (fn [db _]
   (update db :keypair-menu-open? not)))

(rf/reg-event-db
 :set-password
 (fn [db [_ password]]
   (assoc db :password password)))

(rf/reg-event-db
 :set-confirm-password
 (fn [db [_ confirm-password]]
   (assoc db :confirm-password confirm-password)))

(rf/reg-event-fx
 :start-key-generation
 (fn [db _]
   {:db (assoc db :generating-key? true)}))

(rf/reg-event-fx
 :cancel-key-generation
 (fn [db _]
   {:db (-> db
            (assoc :password "")
            (assoc :confirm-password "")
            (assoc :generating-key? false))}))

(rf/reg-event-fx
 :finish-key-generation
 (fn [{:keys [db]} _]
   (let [keypair (generate-keypair)
         password (:password db)
         encrypted-private-key (encrypt (:private-key-bytes keypair) password)]
     {:db (-> db
              (assoc :password "")
              (assoc :confirm-password "")
              (assoc :generating-key? false)
              (assoc :public-key (:public-key keypair))
              (assoc :encrypted-private-key encrypted-private-key)
              (assoc :private-key (:private-key keypair)))
      :dispatch [:save-keypair-to-local-storage]})))

(rf/reg-event-fx
 :unlock-keypair
 (fn [{:keys [db]} _]
   (let [password (:password db)
         encrypted-private-key (:encrypted-private-key db)
         private-key-bytes (decrypt encrypted-private-key password)]
     (if private-key-bytes
       (let [private-key (bytes-to-hex private-key-bytes)
             public-key (:public-key db)
             derived-public-key (getPublicKey private-key-bytes)]
         (if (= public-key derived-public-key)
           {:db (-> db 
                   (assoc :private-key private-key)
                   (assoc :password ""))}
           {:db (assoc db :password "")}))
       {:db (assoc db :password "")}))))

(rf/reg-event-fx
 :discard-keypair
 (fn [{:keys [db]} _]
   {:db (assoc db :public-key nil :private-key nil :encrypted-private-key nil)
    :dispatch [:clear-keypair-from-local-storage]}))

(rf/reg-event-fx
 :copy-public-key
 (fn [{:keys [db]} _]
   (let [public-key (:public-key db)]
     (js/navigator.clipboard.writeText public-key)
     {:db db})))

(rf/reg-event-fx
 :copy-private-key
 (fn [{:keys [db]} _]
   (let [private-key (:private-key db)]
     (js/navigator.clipboard.writeText private-key)
     {:db db})))
