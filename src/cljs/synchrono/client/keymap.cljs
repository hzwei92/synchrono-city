(ns synchrono.client.keymap
  (:require ["prosemirror-keymap" :refer [keymap]]
            ["prosemirror-commands" :as commands]))

(def ^:private basic-keys
  {"Mod-b" (.-toggleBold commands)
   "Mod-i" (.-toggleItalic commands)
   "Mod-z" (.-undo commands)
   "Mod-y" (.-redo commands)
   "Shift-Mod-z" (.-redo commands)})

(def ^:private custom-keys
  {"Enter" 
   (fn [state dispatch]
     (commands/splitBlock state dispatch))
   "Backspace" 
   (fn [state dispatch]
     (commands/deleteSelection state dispatch))})

(defn make-keymap []
  (keymap (clj->js (merge custom-keys basic-keys))))
