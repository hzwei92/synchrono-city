(ns synchrono.client.recents
  (:require [re-frame.core :as rf]
            ["ngeohash" :as geohash]
            [clojure.string :as str]
            [taoensso.timbre :as log]
            [synchrono.client.popup :refer [show-copied-popup]]
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
   {:on-double-click (fn [e]
                       (let [text (str "[p " pubkey "]")]
                         (.. js/navigator -clipboard (writeText text))
                         (show-copied-popup e)))
    :on-click (fn [_]
                (when expanded?
                  (reset! expanded? false)))}
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
        tag-states (r/atom {})]
    (fn []
      (let [elements (map (fn [part]
                           (if (str/starts-with? part "§§§")
                             (let [tag-content (subs part 3 (- (count part) 3))
                                   tag-type (second tag-content)]
                               (if (contains? #{\e \p} tag-type)
                                 (let [full-id (-> tag-content
                                                 (subs 3)
                                                 (str/trim)
                                                 (str/replace #"\]$" ""))
                                       expanded? (or (get @tag-states full-id)
                                                   (do 
                                                     (swap! tag-states assoc full-id (r/atom false))
                                                     (get @tag-states full-id)))
                                       shortened-tag (str "[" tag-type " " (shorten-id full-id) "]")]
                                   (if @expanded?
                                     ;; Show expanded view based on tag type
                                     [:div.expanded-tag
                                      (case tag-type
                                        \e [expanded-event-view full-id (inc depth) expanded?]
                                        \p [expanded-pubkey-view full-id expanded?]
                                        \r [expanded-pubkey-view full-id expanded?]
                                        \s [expanded-pubkey-view full-id expanded?]
                                        \t [expanded-pubkey-view full-id expanded?])]
                                     ;; Show collapsed view with shortened ID
                                     [:span {:class (get-tag-class tag-content)
                                            :on-click (fn []
                                                      (when (= tag-type \e)
                                                        (log/warn "Expanding event" full-id)
                                                        (rf/dispatch [:check-and-expand-event full-id expanded?]))
                                                      (when (= tag-type \p)
                                                        (reset! expanded? true)))}
                                      shortened-tag]))
                                 [:span {:class (get-tag-class tag-content)
                                       :on-click (fn [e]
                                                   (log/warn "Tag clicked" tag-content))}
                                  tag-content]))
                             part))
                         parts)
            cleaned-elements (remove nil? elements)]
        (into [:div.event-content] cleaned-elements)))))

(defn event-view [event depth expanded-state]
  (when event
    [:div.event-item {:class (when (pos? (or depth 0)) "embedded")}
       ;; 1. Event ID
      [:div.event
       {:on-double-click (fn [e]
                          (let [text (str "[e " (:id event) "]")]
                            (.. js/navigator -clipboard (writeText text))
                            (show-copied-popup e)))
        :on-click (fn [_]
                   (when expanded-state
                     (swap! expanded-state not)))}
       (str "[e " (subs (:id event) 0 8) "..." (subs (:id event) (- (count (:id event)) 8)) "]")]
       ;; 2. Pubkey
      [:div.pubkey
       {:on-double-click (fn [e]
                          (let [text (str "[p " (:pubkey event) "]")]
                            (.. js/navigator -clipboard (writeText text))
                            (show-copied-popup e)))}
       (str "[p " (subs (:pubkey event) 0 8) "..." (subs (:pubkey event) (- (count (:pubkey event)) 8)) "]")]
       ;; 3. Relays
       (let [relays @(rf/subscribe [:event-id->relays (:id event)])]
         (doall
          (map-indexed (fn [idx relay]
                         ^{:key (str relay "-" idx)}
                         [:div.relay
                          {:on-double-click (fn [e]
                                            (let [text (str "[r " relay "]")]
                                              (.. js/navigator -clipboard (writeText text))
                                              (show-copied-popup e)))}
                          (str "[r " relay "]")])
                       relays)))
       ;; 4. Timestamp
      [:div.timestamp
       {:on-double-click (fn [e]
                          (let [timestamp (-> (:created_at event)
                                            (* 1000)
                                            js/Date.
                                            (.toLocaleString))
                                text (str "[t " timestamp "]")]
                            (.. js/navigator -clipboard (writeText text))
                            (show-copied-popup e)))}
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
             {:on-double-click (fn [e]
                                (let [text (str "[s " gh "]")]
                                  (.. js/navigator -clipboard (writeText text))
                                  (show-copied-popup e)))
              :on-click (fn [_]
                         (log/warn "geohash clicked" gh)
                         (rf/dispatch [:set-geolocation {:lng lng
                                                       :lat lat
                                                       :geohash gh
                                                       :fly-to? true}]))}
             (str "[s " gh "]")])))
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
                     {:on-double-click (fn [e]
                                       (.. js/navigator -clipboard (writeText tag-str))
                                       (show-copied-popup e))}
                     tag-str])))
              (:tags event))))]]))

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