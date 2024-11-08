(ns synchrono.client.contracts
  "Contract management namespace - handles UI and events for managing marketplace contracts"
  (:require [re-frame.core :as re-frame]
            [synchrono.client.nostr :as nostr]
            [taoensso.timbre :as log]))

;; ======================
;; UI Components 
;; ======================

(defn new-contract-form
  "Form component for creating a new contract. Displays input fields for all contract properties."
  []
  (let [keypairs-list (re-frame/subscribe [:keypairs-list])
        current-keypair (re-frame/subscribe [:current-keypair])
        current-keypair-private-key (re-frame/subscribe [:current-keypair-private-key])
        current-contract (re-frame/subscribe [:current-contract])
        message (re-frame/subscribe [:message])
        error (re-frame/subscribe [:error])]
    [:div
     [:div.title "New Contract"]
     [:div.item
      [:div.form-group
       [:label "Name"]
       [:input {:type "text"
                :value (:name @current-contract)
                :on-change #(re-frame/dispatch [:set-contract-name (.. % -target -value)])}]]
      [:div.form-group
       [:label "About"]
       [:textarea.contract-about {:value (:about @current-contract)
                                  :on-change #(re-frame/dispatch [:set-contract-about (.. % -target -value)])}]]
      [:div.form-group
       [:label "Picture URL"]
       [:input {:type "text"
                :value (:picture @current-contract)
                :on-change #(re-frame/dispatch [:set-contract-picture (.. % -target -value)])}]]
      [:div.form-group
       [:label "Initial Balance (satoshis)"]
       [:input {:type "number"
                :value (:initial-credit-balance-sat @current-contract)
                :on-change #(re-frame/dispatch [:set-contract-initial-credit-balance-sat (.. % -target -value)])}]]
      [:div.form-group
       [:label "Minimum Withdrawal (satoshis)"]
       [:input {:type "number"
                :value (:minimum-withdrawal-sat @current-contract)
                :on-change #(re-frame/dispatch [:set-contract-minimum-withdrawal-sat (.. % -target -value)])}]]
      [:div.form-group
       [:label "Daily Fee (satoshis)"]
       [:input {:type "number"
                :value (:daily-fee-sat @current-contract)
                :on-change #(re-frame/dispatch [:set-contract-daily-fee-sat (.. % -target -value)])}]]
      [:div.form-group
       [:label "Timezone"]
       [:input {:type "text"
                :value (:timezone @current-contract)
                :on-change #(re-frame/dispatch [:set-contract-timezone (.. % -target -value)])}]] 
      [:div.form-group
       [:label "Pubkey"]
       [:div
        (if (empty? @keypairs-list)
          [:button.header-button.error {:on-click #(re-frame/dispatch [:set-current-route :keys])}
           "No keys"]
          (if @current-keypair-private-key
            [:button.header-button {:on-click #(re-frame/dispatch [:set-current-route :keys])}
             (:name @current-keypair)]
            [:button.header-button.error {:on-click #(re-frame/dispatch [:set-current-route :keys])}
             "Keys locked"]))]]
      [:div.row 
        (when @message
          [:div.message @message])
        (when @error
          [:div.error @error])]
       [:button.action-button
        {:on-click #(re-frame/dispatch [:publish-contract])}
        "Publish Contract"]
       [:button.content-button
        {:on-click #(re-frame/dispatch [:set-new-contract? false])}
        "Cancel"]]]))

(defn available-contracts-form
  "Component for displaying available contracts that can be purchased"
  []
  (let [contract-events (re-frame/subscribe [:contract-events])]
    [:div
     [:div.title "Available Contracts"]
     [:div.contracts-list
      (for [contract-event @contract-events]
        ^{:key (:id contract-event)}
        (let [contract (:content contract-event)
              _ (println "contract" contract)]
          [:div.item
           [:div.row (:name contract)]
           [:div.row (:about contract)]
           (when-let [balance (get-in contract [:credit-balance-sat])]
             [:div.row
              [:span "Your credit balance: "]
              [:span.bold (str (.toLocaleString balance) " satoshis")]])
           [:div.row
            [:button.action-button "Modify Contract"]]
           [:div.row
            [:button.action-button
             {:on-click #(re-frame/dispatch [:buy-contract contract])}
             "Buy Contract"]]
           [:div.row
            [:button.action-button "Read Today"]]]))]]))

(defn my-contracts-form
  "Component for displaying user's owned contracts"
  []
  [:div
   [:div.title "My Contracts"]])

(defn contracts
  "Main contracts component that manages display of different contract views"
  []
  (let [new-contract? (re-frame/subscribe [:new-contract?])
        my-contracts? (re-frame/subscribe [:my-contracts?])
        available-contracts? (re-frame/subscribe [:available-contracts?])]
    [:div.contracts
     [:div.title "contracts"]
     [:div.contracts-menu.row
      [:div.contracts-menu-item
       [:button.action-button
        {:class (when @new-contract? "hilighted")
         :on-click #(re-frame/dispatch [:set-new-contract? true])}
        "New"]]
      [:div.contracts-menu-item
       [:button.action-button
        {:class (when @available-contracts? "hilighted")
         :on-click #(do
                      (re-frame/dispatch [:set-available-contracts? true]))}
        "Available"]]
      [:div.contracts-menu-item
       [:button.action-button
        {:class (when @my-contracts? "hilighted")
         :on-click #(re-frame/dispatch [:set-my-contracts? true])}
        "My"]]]
     (when @new-contract? [new-contract-form])
     (when @my-contracts? [my-contracts-form])
     (when @available-contracts? [available-contracts-form])]))

;; ======================
;; Event Handlers
;; ======================

;; Contract Publication
(re-frame/reg-event-fx
 :publish-contract
 (fn [{:keys [db]} _]
   (let [current-contract (get-in db [:contracts :current-contract])]
     (println "Publishing contract (before):" (pr-str current-contract))
     (let [current-keypair-private-key (get-in db [:keys :current-keypair-private-key])]
       (if current-keypair-private-key
         (let [relay-urls (get-in db [:relays :relays-list])
               event {:kind 4444
                      :tags [["s" "synchrono"]]
                      :content current-contract
                      :created_at (js/Math.floor (/ (js/Date.now) 1000))}]
           (nostr/publish relay-urls event current-keypair-private-key)
           {:db (-> db
                    (assoc-in [:app :posting?] true)
                    (assoc-in [:app :error] nil))})
         {:db (assoc-in db [:app :error] "No keypair available.")})))))

;; View State Management
(re-frame/reg-event-db
 :set-new-contract?
 (fn [db [_ value]]
   (-> db
       (assoc-in [:contracts :new-contract?] value)
       (assoc-in [:contracts :my-contracts?] false)
       (assoc-in [:contracts :available-contracts?] false))))

(re-frame/reg-event-db
 :set-my-contracts?
 (fn [db [_ value]]
   (-> db
       (assoc-in [:contracts :my-contracts?] value)
       (assoc-in [:contracts :new-contract?] false)
       (assoc-in [:contracts :available-contracts?] false))))

(re-frame/reg-event-db
 :set-available-contracts?
 (fn [db [_ value]]
   (-> db
       (assoc-in [:contracts :available-contracts?] value)
       (assoc-in [:contracts :new-contract?] false)
       (assoc-in [:contracts :my-contracts?] false))))

;; ======================
;; Subscriptions
;; ======================

(re-frame/reg-sub
 :contract-events
 (fn [db _]
   (let [contract-event-ids (get-in db [:events :event-ids-by-kind 4444])
         contract-events (map #(get-in db [:events :events-by-id %]) contract-event-ids)]
     contract-events)))

(re-frame/reg-sub
 :new-contract?
 (fn [db _]
   (get-in db [:contracts :new-contract?])))

(re-frame/reg-sub
 :my-contracts?
 (fn [db _]
   (get-in db [:contracts :my-contracts?])))

(re-frame/reg-sub
 :available-contracts?
 (fn [db _]
   (get-in db [:contracts :available-contracts?])))

(re-frame/reg-sub
 :current-contract
 (fn [db _]
   (get-in db [:contracts :current-contract])))
