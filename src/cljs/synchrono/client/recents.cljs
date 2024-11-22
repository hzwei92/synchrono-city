(ns synchrono.client.recents
  (:require [re-frame.core :as rf]
            ["ngeohash" :as geohash]
            [clojure.string :as str]
            [taoensso.timbre :as log]
            [synchrono.client.popup :refer [show-copied-popup]]
            [synchrono.client.click :refer [handle-click]]
            [reagent.core :as r]))

(declare event-view)

(defn- shorten-id [id]
  (when id
    (str (subs id 0 8) "..." (subs id (- (count id) 8)))))

(defn get-tag-class [tag-str]
  (let [tag-type (second tag-str)]  ; Gets the character after "["
    (case tag-type
      \e "event-content-tag event"
      \p "event-content-tag pubkey"
      \r "event-content-tag relay"
      \s "event-content-tag geohash"
      \t "event-content-tag timestamp"
      "event-content-tag")))

(defn expanded-event-view [event-id depth expanded?]
  (let [referenced-event @(rf/subscribe [:event-by-id event-id])]
    (if referenced-event
      ;; We have the event, show it
      [event-view referenced-event depth expanded?]
      ;; No event found, show loading
      [:div.loading-event 
       "Loading event " [:span.event-id (shorten-id event-id)]])))

(defn expanded-pubkey-view [pubkey expanded?]
  [:div.pubkey
   {:on-click (fn [e]
                (handle-click
                 (str "expanded-pubkey-" pubkey)
                 (fn [_]
                   (when expanded?
                     (reset! expanded? false)))
                 (fn [e]
                   (let [text (str "[p " pubkey "]")]
                     (.. js/navigator -clipboard (writeText text))
                     (show-copied-popup e)))
                 e))}
   (if @expanded?
     (str "[p " pubkey "]")
     (str "[p " (shorten-id pubkey) "]"))])

(defn process-event-content [event depth]
  (let [content (:content event)
        tags (:tags event)
        tag-strings (map #(str "[" (str/join " " %) "]") tags)
        marked-content (reduce (fn [text tag-string]
                               (str/replace text
                                          (re-pattern (str/replace tag-string #"[\[\]]" "\\$&"))
                                          (str "§§§" tag-string "§§§")))
                             content
                             tag-strings)
        parts (str/split marked-content #"(§§§.*?§§§)")
        tag-states (r/atom {})
        skip-next (atom false)]
    (fn []
      (let [elements (map-indexed
                      (fn [idx part]
                        (cond
                          @skip-next
                          (do (reset! skip-next false)
                              (when-not (= part "\n")
                                [:span {:style {:white-space "pre-wrap"}} 
                                 (subs part 1)]))  ;; Skip the first character (newline) and render the rest

                          (str/starts-with? part "§§§")
                          (let [tag-content (subs part 3 (- (count part) 3))
                                tag-type (second tag-content)
                                clean-content (str/trim (subs tag-content 2))
                                tag-parts (str/split clean-content #"\s+")
                                ;; Get marker and remove trailing ] if present
                                marker (when (and (= tag-type \e) 
                                                (> (count tag-parts) 1))
                                       (str/replace (second tag-parts) #"\]$" ""))
                                full-id (first tag-parts)
                                expanded? (or (get @tag-states full-id)
                                            (do
                                              (swap! tag-states assoc full-id (r/atom false))
                                              (get @tag-states full-id)))
                                shortened-tag (if marker
                                                  (str "[e " (shorten-id full-id) " " marker "]")
                                                  (str "[" tag-type " " (shorten-id full-id) "]"))
                                next-part (get parts (inc idx))]
                            ;; Skip next if it's a newline or starts with newline
                            (when (and @expanded? next-part 
                                     (or (= next-part "\n")
                                         (str/starts-with? next-part "\n")))
                              (reset! skip-next true))
                            (if @expanded?
                              [:div.expanded-tag
                               (case tag-type
                                 \e [expanded-event-view full-id (inc depth) expanded?]
                                 \p [expanded-pubkey-view full-id expanded?])]
                              [:span {:class (get-tag-class tag-content)
                                      :on-click (fn [e]
                                                  (handle-click
                                                   (str "tag-" tag-content)
                                                   (fn [e]
                                                     (let [text tag-content]
                                                       (.. js/navigator -clipboard (writeText text))
                                                       (show-copied-popup e)))
                                                   (fn [e]
                                                     (when (= tag-type \e)
                                                       (log/warn "Expanding event" full-id)
                                                       (rf/dispatch [:check-and-expand-event full-id expanded?]))
                                                     (when (= tag-type \p)
                                                       (reset! expanded? true)))
                                                   e))}
                               shortened-tag]))
                          :else
                          ;; Handle regular text, preserving newlines
                          [:span {:style {:white-space "pre-wrap"}} part]))
                      parts)
            cleaned-elements (remove nil? elements)]
        (into [:div.event-content] cleaned-elements)))))

(rf/reg-sub
 :selected-event-id
 (fn [db _]
   (:selected-event-id db)))
(defn event-view [event depth expanded-state]
  (when event
    (let [selected-id @(rf/subscribe [:selected-event-id])]
      [:div.event-item {:class [(when (pos? (or depth 0)) "embedded")
                               (when (= (:id event) selected-id) "selected")]
                        :on-click (fn [e]
                                  (.stopPropagation e)
                                  (rf/dispatch [:select-event (:id event)]))}
       [:div.event-header
         ;; 1. Event ID
        [:div.event
         {:on-click (fn [e]
                     (handle-click 
                      (str "event-" (:id event))
                      (fn [e]
                        (let [text (str "[e " (:id event) "]")]
                          (.. js/navigator -clipboard (writeText text))
                          (show-copied-popup e)))
                      (fn [e]
                        (when expanded-state
                          (swap! expanded-state not)))
                      e))}
         (str "[e " (subs (:id event) 0 8) "..." (subs (:id event) (- (count (:id event)) 8)) "]")]
         ;; 2. Pubkey
        [:div.pubkey
         {:on-click (fn [e]
                     (handle-click
                      (str "pubkey-" (:pubkey event))
                      (fn [e]
                        (let [text (str "[p " (:pubkey event) "]")]
                          (.. js/navigator -clipboard (writeText text))
                          (show-copied-popup e)))
                      (fn [_] nil)  ; No double-click action
                      e))}
         (str "[p " (subs (:pubkey event) 0 8) "..." (subs (:pubkey event) (- (count (:pubkey event)) 8)) "]")]
         ;; 3. Relays
         (let [relays @(rf/subscribe [:event-id->relays (:id event)])]
           (doall
            (map-indexed (fn [idx relay]
                             ^{:key (str relay "-" idx)}
                             [:div.relay
                              {:on-click (fn [e]
                                     (handle-click
                                      (str "relay-" relay "-" idx)
                                      (fn [e]
                                        (let [text (str "[r " relay "]")]
                                          (.. js/navigator -clipboard (writeText text))
                                          (show-copied-popup e)))
                                      (fn [_] nil)  ; No double-click action
                                      e))}
                              (str "[r " relay "]")])
                           relays)))
         ;; 4. Timestamp
        [:div.timestamp
         {:on-click (fn [e]
                     (handle-click
                      (str "timestamp-" (:id event))
                      (fn [e]
                        (let [timestamp (-> (:created_at event)
                                          (* 1000)
                                          js/Date.
                                          (.toLocaleString))
                              text (str "[t " timestamp "]")]
                          (.. js/navigator -clipboard (writeText text))
                          (show-copied-popup e)))
                      (fn [_] nil)  ; No double-click action
                      e))}
         (str "[t "
              (-> (:created_at event)
                  (* 1000)
                  js/Date.
                  (.toLocaleString))
              "]")]
         ;; 5. Geohash (if present)
        (let [tags (:tags event)
              gh-tag (first (filter #(= "s" (first %)) tags))
              gh (second gh-tag)
              decoded (when gh
                        (try (.decode geohash gh)
                             (catch :default _ nil)))]
          (when decoded
            (let [lng (.-longitude decoded)
                  lat (.-latitude decoded)]
              [:div.geohash
               {:on-click (fn [e]
                          (handle-click
                           (str "geohash-" gh)
                           (fn [e]
                             (let [text (str "[s " gh "]")]
                               (.. js/navigator -clipboard (writeText text))
                               (show-copied-popup e)))
                           (fn [e]
                             (log/warn "geohash clicked" gh)
                             (rf/dispatch [:set-geolocation {:lng lng
                                                           :lat lat
                                                           :geohash gh
                                                           :fly-to? true}]))
                           e))}
               (str "[s " gh "]")])))]
       ;; Content and remaining tags
       [process-event-content event (or depth 0)]
       [:div.event-tags
        (let [first-s-tag (first (filter #(= "s" (first %)) (:tags event)))]
          (doall
           (map (fn [tag]
                  (let [tag-str (str "[" (str/join " " tag) "]")]
                    (when (and
                           (not= tag first-s-tag)
                           (not (str/includes? (:content event) tag-str)))
                      ^{:key (str (:id event) "-" tag)}
                      [:div.event-tag 
                       {:on-click (fn [e]
                                  (handle-click
                                   (str "event-tag-" (:id event) "-" tag)
                                   (fn [e]
                                     (.. js/navigator -clipboard (writeText tag-str))
                                     (show-copied-popup e))
                                   (fn [_] nil)  ; No double-click action
                                   e))}
                       tag-str])))
                (:tags event))))]])))

(defn recents []
  (let [recents (rf/subscribe [:recents])]
    [:div.recents
     [:div.recents-list
      (doall
       (map (fn [event]
              ^{:key (:id event)}
              [event-view event nil nil]) @recents))]]))

(rf/reg-sub
 :event-id->relays
 (fn [db [_ event-id]]
   (get-in db [:event-id->relays event-id])))

(rf/reg-sub
 :recents
 (fn [db _]
   (let [event-id->event (:event-id->event db)
         events (vals event-id->event)]
     (->> events
          (sort-by :created_at >)
          (take 50)))))

(rf/reg-sub
 :event-by-id
 (fn [db [_ event-id]]
   (get-in db [:event-id->event event-id])))

(rf/reg-event-fx
 :check-and-expand-event
 (fn [{:keys [db]} [_ event-id expanded-atom]]
   (log/warn "Checking and expanding event" event-id (get-in db [:event-id->event event-id]))
   (if (get-in db [:event-id->event event-id])
     ;; We have the event, expand it
     (do (reset! expanded-atom true)
         {:db db})
     ;; Don't have it, request it
     {:db db
      :dispatch [:nostr/subscribe-many [{:id event-id}] true]})))

(rf/reg-event-db
 :select-event
 (fn [db [_ event-id]]
   (if (= event-id (:selected-event-id db))
     ;; If clicking already selected event, deselect it
     (assoc db :selected-event-id nil)
     ;; Otherwise select the new event
     (assoc db :selected-event-id event-id))))