(ns synchrono.client.terminus
  (:require [synchrono.client.editor :refer [editor]]))

(defn terminus []
  [:div.terminus 
   [editor]
   [:button.nostr-event-button "Publish"]])