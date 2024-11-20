(ns synchrono.client.lens
  (:require [synchrono.client.query :refer [query-editor]]
            [synchrono.client.recents :refer [recents]]
            [taoensso.timbre :as log]
            [re-frame.core :as rf]))

(defn lens []
    [:div.lens
     [query-editor]
     [recents]])

(rf/reg-sub
 :query
 (fn [db _]
   (:query db)))

(rf/reg-event-fx
 :set-query
 (fn [{:keys [db]} [_ query]]
   {:db (assoc db :query query)}))
