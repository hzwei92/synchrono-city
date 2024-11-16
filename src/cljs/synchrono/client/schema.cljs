(ns synchrono.client.schema
  (:require ["prosemirror-model" :refer [Schema]]))

(def schema-spec
  #js {:nodes
       #js {:doc
            #js {:content "paragraph+"}

            :paragraph
            #js {:content "(text|tag|query)*"
                 :parseDOM #js [#js {:tag "p"}]
                 :toDOM (fn [] #js ["p" 0])}

            :text
            #js {:group "inline"}

            :tag
            #js {:inline true
                 :group "inline"
                 :content "text*"
                 :atom true
                 :parseDOM #js [#js {:tag "span.tag"}]
                 :toDOM (fn [] #js ["span" #js {:class "tag"} 0])}

            :query
            #js {:inline true
                 :group "inline"
                 :content "text*"
                 :atom false
                 :parseDOM #js [#js {:tag "span.query"}]
                 :toDOM (fn [] #js ["span" #js {:class "query"} 0])}}

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