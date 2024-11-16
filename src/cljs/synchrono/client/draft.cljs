(ns synchrono.client.draft
  (:require [re-frame.core :as rf]
            [synchrono.client.editor :refer [editor]]
            [synchrono.client.surveyor :refer [surveyor]]
            [synchrono.client.nostrodamus]
            [synchrono.client.schema :refer [schema]]
            ["prosemirror-model" :as pm-model]
            [taoensso.timbre :as log]))

(defn format-node-content [node]
  (case (.-name (.-type node))
    "text" (.-text node)
    "tag" (.-textContent node)
    "query" (.-textContent node)
    ""))

(defn get-formatted-content [doc]
  (let [fragments (array)]
    (.nodesBetween doc 0 (.-size (.-content doc))
                   (fn [node pos parent index]
                     (cond
                       (= (.-name (.-type node)) "paragraph")
                       (do
                         (when (> (.-length fragments) 0)
                           (.push fragments "\n"))
                         true)

                       (or (= (.-name (.-type node)) "text")
                           (= (.-name (.-type node)) "tag")
                           (= (.-name (.-type node)) "query"))
                       (do
                         (.push fragments (format-node-content node))
                         false)

                       :else true)))
    (.join fragments "")))

(rf/reg-event-fx
 :draft/publish
 (fn [{:keys [db]} _]
   (let [doc (get-in db [:drafts :doc])
         content (get-formatted-content (.fromJSON pm-model/Node schema (clj->js doc)))
         tags (get-in db [:drafts :tags])] 
     {:db (assoc-in db [:drafts :reset?] true)
      :dispatch [:nostr/publish 1 content tags]})))


(rf/reg-event-db
 :draft/set-doc
 (fn [db [_ doc]]
   (assoc-in db [:drafts :doc] doc)))

(rf/reg-event-db
 :draft/set-selection
 (fn [db [_ selection]]
   (assoc-in db [:drafts :selection] selection)))

(rf/reg-event-db
 :draft/set-query
 (fn [db [_ text]]
   (assoc-in db [:drafts :query] text)))

(rf/reg-event-db
 :draft/set-tags
 (fn [db [_ tags]]
   (assoc-in db [:drafts :tags] tags)))

(rf/reg-event-db
 :draft/reset
 (fn [db _]
   (assoc-in db [:drafts :reset?] false)))

(rf/reg-sub
 :draft/query
 (fn [db]
   (get-in db [:drafts :query])))

(defn draft-view []
  (let [query (rf/subscribe [:draft/query])]
  [:div.draft
   [editor]
   [:div.draft-buttons
    [:button.nostr-event-button {:on-click #(rf/dispatch [:draft/publish])} "Publish"]]
   [:div.draft-options (str "all mine query: " @query " ")]
   [surveyor]]))