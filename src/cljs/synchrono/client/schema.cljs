(ns synchrono.client.schema
  (:require ["prosemirror-model" :refer [Schema]]))

(def schema-spec
  #js {:nodes
       #js {:doc
            #js {:content "paragraph+"}

            :paragraph
            #js {:content "(text | option | command | tag)*"
                 :parseDOM #js [#js {:tag "p"}]
                 :toDOM (fn [] #js ["p" 0])}

            :text
            #js {:group "inline"}

            :option
            #js {:inline true
                 :group "inline"
                 :content "text*"
                 :atom true
                 :selectable true
                 :parseDOM #js [#js {:tag "span.option"}]
                 :toDOM (fn [node] 
                         #js ["span" #js {:class "option"} 0])}
            
            :command
            #js {:inline true
                 :group "inline"
                 :content "text*"
                 :atom true
                 :selectable true
                 :parseDOM #js [#js {:tag "span.command"}]
                 :toDOM (fn [node]
                         #js ["span" #js {:class "command"} 0])}
            
            :tag
            #js {:inline true
                 :group "inline"
                 :content "text*"
                 :atom true
                 :selectable true
                 :parseDOM #js [#js {:tag "span.tag"}]
                 :toDOM (fn [node]
                         #js ["span" #js {:class "tag"} 0])}
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