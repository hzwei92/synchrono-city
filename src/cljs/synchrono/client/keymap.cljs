(ns synchrono.client.keymap
  (:require ["prosemirror-keymap" :refer [keymap]]
            ["prosemirror-state" :as pm-state]
            ["prosemirror-commands" :as commands]
            [clojure.string :as str]
            [re-frame.core :as rf]
            [synchrono.client.schema :refer [schema]]
            [taoensso.timbre :as log]))

(defn open-bracket-command [state dispatch]
  (if (nil? dispatch)
    false
    (let [tr (.-tr state)
          selection (.-selection state)
          from (.-from selection)
          doc (.-doc state)
          char-before (when (> from 0)
                        (.textBetween doc (dec from) from ""))
          resolved-pos (.resolve doc from)
          parent-node (.-parent resolved-pos)
          query-node-type (.. schema -nodes -query)]

      (cond
        (and char-before
             (= char-before "[")
             (= (.-type parent-node) query-node-type))
        (let [tr2 (.insertText tr "[" from)]
          (dispatch tr2)
          true)

        (and char-before
             (= char-before "[")
             (not= (.-type parent-node) query-node-type))
        (let [tr1 (.delete tr (dec from) from)
              pre-node (.text schema " ")
              tr2 (.insert tr1 (dec from) #js [pre-node])
              text-node (.text schema "[[")
              query-node (.create query-node-type #js {} #js [text-node])
              tr3 (.replaceWith tr2 from from query-node)
              space-node (.text schema " ")
              tr4 (.insert tr3 (+ from 4) #js [space-node])
              tr5 (.setSelection tr4 (pm-state/TextSelection. (.resolve (.-doc tr4) (+ from 3))))]
          (dispatch tr5)
          true)

        :else
        (let [tr1 (.insertText tr "[" from)]
          (dispatch tr1)
          true)))))

(defn close-bracket-command [state dispatch]
  (if (nil? dispatch)
    false
    (let [selection (.-selection state)
          from (.-from selection)
          doc (.-doc state)
          tr (.-tr state)
          char-before (when (> from 0)
                        (.textBetween doc (dec from) from ""))
          resolved-pos (.resolve doc from)
          depth (.-depth resolved-pos)
          query-node (loop [d depth]
                       (when (>= d 0)
                         (let [node (.node resolved-pos d)]
                           (if (= (.. node -type -name) "query")
                             node
                             (recur (dec d))))))]

      (if (and char-before
               (= char-before "]")
               query-node)
        (let [query-pos (.before resolved-pos (.-depth resolved-pos))
              raw-text (.textBetween doc query-pos from "")
              bracketed-text (str raw-text "]")
              text-node (.text schema bracketed-text)
              tag-node-type (.. schema -nodes -tag)
              tag-node (.create tag-node-type #js {} #js [text-node])
              tr2 (-> tr
                      (.replaceWith (dec query-pos) from tag-node)
                      (.setSelection (pm-state/TextSelection.
                                      (.resolve (.-doc tr)
                                                (+ query-pos (count bracketed-text) 2)))))]
          (rf/dispatch [:set-query ""])
          (rf/dispatch [:add-tag bracketed-text])
          (dispatch tr2)
          true)

        (let [tr2 (.insertText tr "]" from)]
          (dispatch tr2)
          true)))))

(defn escape-command [state dispatch]
  (if (nil? dispatch)
    false
    (let [selection (.-selection state)
          from (.-from selection)
          doc (.-doc state)
          resolved-pos (.resolve doc from)
          depth (.-depth resolved-pos)
          query-node (loop [d depth]
                       (when (>= d 0)
                         (let [node (.node resolved-pos d)]
                           (if (= (.. node -type -name) "query")
                             node
                             (recur (dec d))))))
          tr (.-tr state)]

      (if query-node
        (let [query-pos (.before resolved-pos (.-depth resolved-pos))
              query-end-pos (.after resolved-pos (.-depth resolved-pos))
              tr2 (-> tr
                      (.delete query-pos query-end-pos)
                      (.setSelection (pm-state/TextSelection.
                                      (.resolve (.-doc tr) (max 0 (dec query-pos))))))]
          (dispatch tr2)
          (rf/dispatch [:set-query ""])
          true)
        false))))

(defn enter-command [state dispatch]
  (if (nil? dispatch)
    false
    (let [selection (.-selection state)
          from (.-from selection)
          doc (.-doc state)
          resolved-pos (.resolve doc from)
          depth (.-depth resolved-pos)
          query-node (loop [d depth]
                       (when (>= d 0)
                         (let [node (.node resolved-pos d)]
                           (if (= (.. node -type -name) "query")
                             node
                             (recur (dec d))))))
          tr (.-tr state)]

      (if query-node
        (let [query-pos (.before resolved-pos (.-depth resolved-pos))
              query-end-pos (.after resolved-pos (.-depth resolved-pos))
              raw-text (.textBetween doc query-pos query-end-pos "")
              clean-text (if (re-matches #"\[\[?\]?\]?" raw-text)
                           ""
                           (-> raw-text
                               (str/replace #"^\[\[?" "")
                               (str/replace #"\]?\]$" "")))
              text-node (.text schema clean-text)
              tr2 (-> tr
                      (.replaceWith (dec query-pos) query-end-pos text-node)
                      (.setSelection (pm-state/TextSelection.
                                      (.resolve (.-doc tr)
                                                (max query-pos (+ query-pos (count clean-text)))))))]
          (dispatch tr2)
          (rf/dispatch [:set-query ""])
          true)
        false))))

(defn tab-command [state dispatch]
  (if (nil? dispatch)
    false
    (let [selection (.-selection state)
          from (.-from selection)
          doc (.-doc state)
          tr (.-tr state)
          char-before (when (> from 0)
                        (.textBetween doc (dec from) from ""))
          resolved-pos (.resolve doc from)
          depth (.-depth resolved-pos)
          query-node (loop [d depth]
                       (when (>= d 0)
                         (let [node (.node resolved-pos d)]
                           (if (= (.. node -type -name) "query")
                             node
                             (recur (dec d))))))]
      (if query-node
        (let [query-pos (.before resolved-pos (.-depth resolved-pos))
              raw-text (.textBetween doc query-pos from "")
              bracketed-text (str raw-text "]]")
              text-node (.text schema bracketed-text)
              tag-node-type (.. schema -nodes -tag)
              tag-node (.create tag-node-type #js {} #js [text-node])
              tr2 (-> tr
                      (.replaceWith (dec query-pos) from tag-node)
                      (.setSelection (pm-state/TextSelection.
                                      (.resolve (.-doc tr)
                                                (+ query-pos (count bracketed-text) 2)))))]
          (rf/dispatch [:set-query ""])
          (rf/dispatch [:add-tag bracketed-text])
          (dispatch tr2)
          true)
        false))))

(defn backspace-command [state dispatch]
  (if (nil? dispatch)
    false
    (let [selection (.-selection state)
          from (.-from selection)
          doc (.-doc state)
          tr (.-tr state)
          resolved-pos (.resolve doc from)
          depth (.-depth resolved-pos)
          query-node (loop [d depth]
                       (when (>= d 0)
                         (let [node (.node resolved-pos d)]
                           (if (= (.. node -type -name) "query")
                             node
                             (recur (dec d))))))]
      (if-not query-node
        false
        (let [query-pos (.before resolved-pos (.-depth resolved-pos))
              query-end-pos (.after resolved-pos (.-depth resolved-pos))
              raw-text (.textBetween doc query-pos query-end-pos "")
              first-two-chars (when (>= (count raw-text) 2)
                                (subs raw-text 0 2))]
          (if (= first-two-chars "[[")
            false
            (let [tr1 (-> tr
                          (.delete query-pos query-end-pos)
                          (.setSelection (pm-state/TextSelection.
                                          (.resolve (.-doc tr) (max 0 (dec query-pos))))))]
              (rf/dispatch [:draft/set-query ""])
              (dispatch tr1)
              true)))))))


(defn make-keymap []
  (let [custom-keys {"[" open-bracket-command
                     "]" close-bracket-command
                     "Tab" tab-command
                     "Escape" escape-command
                     "Enter" (fn [state dispatch]
                               (or (enter-command state dispatch)
                                   (commands/splitBlock state dispatch)))
                     "Backspace" (fn [state dispatch]
                                    (or (backspace-command state dispatch)
                                        (commands/deleteSelection state dispatch)))}
        basic-keys {"Mod-b"  (.-toggleBold commands)
                    "Mod-i"  (.-toggleItalic commands)
                    "Mod-z"  (.-undo commands)
                    "Mod-y"  (.-redo commands)
                    "Shift-Mod-z" (.-redo commands)}]
    (keymap (clj->js (merge custom-keys basic-keys)))))
