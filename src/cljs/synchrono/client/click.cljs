(ns synchrono.client.click)

(def double-click-timeout 300) ; milliseconds to wait for second click
(def click-timestamps (atom {}))

(defn handle-click [id single-click-fn double-click-fn e]
  (.stopPropagation e)
  (let [last-click (@click-timestamps id)
        now (js/Date.now)]
    (if (and last-click (< (- now last-click) double-click-timeout))
      ; Double click detected
      (do
        (swap! click-timestamps dissoc id)
        (double-click-fn e))
      ; First click - set timer and handle single click
      (do
        (swap! click-timestamps assoc id now)
        (js/setTimeout
         #(when (= (@click-timestamps id) now)
            (swap! click-timestamps dissoc id)
            (single-click-fn e))
         double-click-timeout)))))