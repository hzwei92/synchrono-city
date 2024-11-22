(ns synchrono.client.schema
  (:require ["prosemirror-model" :refer [Schema]]))

(def schema-spec
  #js {:nodes
       #js {:doc
            #js {:content "paragraph+"}

            :paragraph
            #js {:content "(text | action | event | pubkey | relay | timestamp | geohash)*"
                 :parseDOM #js [#js {:tag "p"}]
                 :toDOM (fn [] #js ["p" 0])}

            :text
            #js {:group "inline"}

            :action
            #js {:inline true
                 :group "inline"
                 :content "text*"
                 :atom true
                 :selectable true
                 :attrs #js {:nodeId {}}
                 :parseDOM #js [#js {:tag "span.action"
                                    :getAttrs (fn [dom]
                                              #js {:nodeId (.getAttribute dom "data-node-id")})}]
                 :toDOM (fn [node] 
                         #js ["span" #js {:class "action"
                                         :data-node-id (.. node -attrs -nodeId)} 0])}
            
            :event
            #js {:inline true
                 :group "inline"
                 :content "text*"
                 :atom true
                 :selectable true
                 :attrs #js {:eventId {:default nil}
                             :nodeId {:default nil}
                             :expanded {:default false}}
                 :parseDOM #js [#js {:tag "span.event"
                                    :getAttrs (fn [dom]
                                              #js {:eventId (.getAttribute dom "data-event-id")
                                                  :nodeId (.getAttribute dom "data-node-id")
                                                  :expanded (= "true" (.getAttribute dom "data-expanded"))})}]
                 :toDOM (fn [node]
                         #js ["span" #js {:class "event"
                                          :data-event-id (.. node -attrs -eventId)
                                          :data-node-id (.. node -attrs -nodeId)
                                          :data-expanded (.. node -attrs -expanded)} 0])}
            
            :pubkey
            #js {:inline true
                 :group "inline"
                 :content "text*"
                 :atom true
                 :selectable true
                 :attrs #js {:pubkey {:default nil}
                            :nodeId {:default nil}
                            :expanded {:default false}}
                 :parseDOM #js [#js {:tag "span.pubkey"
                                    :getAttrs (fn [dom]
                                              #js {:pubkey (.getAttribute dom "data-pubkey")
                                                  :nodeId (.getAttribute dom "data-node-id")
                                                  :expanded (= "true" (.getAttribute dom "data-expanded"))})}]
                 :toDOM (fn [node]
                         #js ["span" #js {:class "pubkey"
                                         :data-pubkey (.. node -attrs -pubkey)
                                         :data-node-id (.. node -attrs -nodeId)
                                         :data-expanded (.. node -attrs -expanded)} 0])}

            :relay
            #js {:inline true
                 :group "inline"
                 :content "text*"
                 :atom true
                 :selectable true
                 :attrs #js {:nodeId {}}
                 :parseDOM #js [#js {:tag "span.relay"
                                    :getAttrs (fn [dom]
                                              #js {:nodeId (.getAttribute dom "data-node-id")})}]
                 :toDOM (fn [node] 
                         #js ["span" #js {:class "relay"
                                          :data-node-id (.. node -attrs -nodeId)} 0])}
            
            :timestamp
            #js {:inline true
                 :group "inline"
                 :content "text*"
                 :atom true
                 :selectable true
                 :attrs #js {:nodeId {}}
                 :parseDOM #js [#js {:tag "span.timestamp"
                                    :getAttrs (fn [dom]
                                              #js {:nodeId (.getAttribute dom "data-node-id")})}]
                 :toDOM (fn [node]
                         #js ["span" #js {:class "timestamp"
                                         :data-node-id (.. node -attrs -nodeId)} 0])}
            
            :geohash
            #js {:inline true
                 :group "inline"
                 :content "text*"
                 :atom true
                 :selectable true
                 :attrs #js {:nodeId {}}
                 :parseDOM #js [#js {:tag "span.geohash"
                                    :getAttrs (fn [dom]
                                              #js {:nodeId (.getAttribute dom "data-node-id")})}]
                 :toDOM (fn [node]
                         #js ["span" #js {:class "geohash"
                                         :data-node-id (.. node -attrs -nodeId)} 0])}
            }

       :marks
       #js {:bold
            #js {:parseDOM #js [#js {:tag "strong"}]
                 :toDOM (fn [] #js ["strong" 0])}

            :italic
            #js {:parseDOM #js [#js {:tag "em"}]
                 :toDOM (fn [] #js ["em" 0])}

            :link
            #js {:attrs #js {:href {}}
                 :inclusive false
                 :parseDOM #js [#js {:tag "a"
                                    :getAttrs (fn [dom] #js {:href (.getAttribute dom "href")})}]
                 :toDOM (fn [node] #js ["a" #js {:href (.-href (.-attrs node))} 0])}}})

(def schema (Schema. schema-spec))