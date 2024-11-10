(ns synchrono.client.write
  (:require [re-frame.core :as re-frame]
            ["@tiptap/core" :refer [Editor Extension]]
            ["@tiptap/starter-kit" :default StarterKit]
            ["@tiptap/pm/state" :as pm-state]
            ["prosemirror-state" :refer [Plugin PluginKey]]
            ["prosemirror-view" :refer [Decoration DecorationSet]]
            [synchrono.client.nostr :as nostr]
            [taoensso.timbre :as log]
            [clojure.string :as str]
            [reagent.core :as r]))

(re-frame/reg-event-fx
 :save-editor-content
 (fn [{:keys [db]} [_ editor]]
   (let [html (.getHTML editor)]
     (log/info "Saving editor content:" html)
     {:db (assoc-in db [:drafts :current-draft] html)})))


(defn create-wiki-link [view $from]
  (let [tr (-> (.-tr (.-state view))
               (.delete (dec (.-pos $from)) (.-pos $from))
               (.insertText "[[]]" (dec (.-pos $from))))]
    (.dispatch view
               (.setSelection tr
                              (.near (.-constructor (.-selection (.-state view)))
                                     (.resolve (.-doc tr)
                                               (+ (dec (.-pos $from)) 2)))))
    true))

(defn move-cursor-right [view $from amount]
  (let [tr (-> (.-tr (.-state view))
               (.setSelection (.near (.-constructor (.-selection (.-state view)))
                                     (.resolve (.-doc (.-state view))
                                               (+ (.-pos $from) amount)))))]
    (.dispatch view tr)
    true))

(def wiki-link-extension
  (.create Extension
           (clj->js
            {:name "wikiLink"
             :addProseMirrorPlugins
             (fn []
               [(new Plugin
                     #js {:key (new PluginKey "wikiLink")
                          :props
                          #js {:handleKeyDown
                               (fn [view event]
                                 (cond
                                   (= (.-key event) "[")
                                   (let [state (.-state view)
                                         doc (.-doc state)
                                         selection (.-selection state)
                                         $from (.-$from selection)
                                         before (.textBetween ^js doc
                                                              (max 0 (dec (.-pos $from)))
                                                              (.-pos $from))]
                                     (when (= before "[")
                                       (log/info "wiki link detected")
                                       (.preventDefault event)
                                       (create-wiki-link view $from)))

                                   (= (.-key event) "]")
                                   (let [state (.-state view)
                                         selection (.-selection state)
                                         $from (.-$from selection)
                                         pos (.-pos $from)
                                         doc (.-doc state)
                                         before-cursor (.textBetween ^js doc 0 pos)
                                         last-open-bracket (str/last-index-of before-cursor "[[")
                                         next-close-bracket (str/index-of before-cursor "]]" last-open-bracket)
                                         next-char (.textBetween ^js doc pos (inc pos))]
                                     (when (and last-open-bracket
                                                (nil? next-close-bracket)
                                                (= next-char "]"))
                                       (log/info "close bracket detected")
                                       (.preventDefault event)
                                       (move-cursor-right view $from 1)))

                                   (= (.-key event) "Tab")
                                   (let [state (.-state view)
                                         selection (.-selection state)
                                         $from (.-$from selection)
                                         pos (.-pos $from)
                                         doc (.-doc state)
                                         before-cursor (.textBetween ^js doc 0 pos)
                                         last-open-bracket (str/last-index-of before-cursor "[[")
                                         next-close-bracket (str/index-of before-cursor "]]" last-open-bracket)
                                         next-chars (.textBetween ^js doc pos (inc (inc pos)))]
                                     (when (and last-open-bracket
                                                (nil? next-close-bracket)
                                                (= next-chars "]]"))
                                       (log/info "tab detected")
                                       (.preventDefault event)
                                       (move-cursor-right view $from 2)))

                                   :else nil))
                               :decorations
                               (fn [state]
                                 (let [decorations (atom [])
                                       doc (.-doc state)]
                                   (.descendants doc
                                                 (fn [node pos]
                                                   (when (.-isText ^js node)
                                                     (let [text (.-text node)
                                                           regex #"\[\[(.*?)\]\]"
                                                           matches (re-seq regex text)]
                                                       (doseq [[match] matches
                                                               :let [start (+ pos (.indexOf text match))
                                                                     end (+ start (count match))]]
                                                         (swap! decorations conj
                                                                (.inline Decoration start end
                                                                         #js {:class "wiki-link"})))))))
                                   (.create DecorationSet doc (clj->js @decorations))))}})])})))

(defn create-editor [el]
  (new Editor
       (clj->js
        {:element el
         :extensions #js [StarterKit wiki-link-extension]
         :autofocus true
         :editable true
         :onUpdate (fn [^js props]
                     (let [editor (.-editor props)]
                       (re-frame/dispatch [:save-editor-content editor])))})))

(defn write []
  [:div
   [:div.title "write"]
   [:div#editor {:ref (fn [el]
                        (when el (create-editor el)))}]])
