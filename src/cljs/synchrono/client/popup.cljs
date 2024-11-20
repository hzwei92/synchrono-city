(ns synchrono.client.popup
  (:require [taoensso.timbre :as log]))

(defn show-copied-popup [event]
  (let [popup (js/document.createElement "div")
        target (.-target event)
        rect (.getBoundingClientRect target)]
    (log/warn "Showing copied popup" rect)
    (set! (.-className popup) "copied-popup")
    (set! (.-textContent popup) "Copied to clipboard!")
    (set! (-> popup .-style .-position) "fixed")
    (set! (-> popup .-style .-left) (str (+ (.-left rect) 10) "px"))
    (set! (-> popup .-style .-top) (str (+ (.-top rect) 10) "px"))
    (.appendChild js/document.body popup)
    (js/setTimeout #(.remove popup) 700)))
