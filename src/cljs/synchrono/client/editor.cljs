(ns synchrono.client.editor
  (:require ["prosemirror-state" :as pm-state]
            ["prosemirror-model" :as pm-model]
            ["prosemirror-view" :as pm-view]
            ["prosemirror-history" :as history]
            [reagent.core :as r]
            [synchrono.client.schema :refer [schema]]
            [synchrono.client.keymap :refer [make-keymap]]
            [re-frame.core :as rf]
            [synchrono.client.nostrodamus]
            [taoensso.timbre :as log]
            [clojure.string :as str]
            [synchrono.client.plugin :refer [create-pattern-plugin]]))

(defn selection-in-command? [state]
  (let [selection (.-selection state)
        $pos (.-$from selection)]
    (loop [depth (.-depth $pos)]
      (let [node (.node $pos depth)]
        (if (= (.-name (.-type node)) "command")
          (do
            (log/info "Found command node at depth" depth)
            node)
          (if (= depth 1)
            (do
              (log/info "No command node found")
              nil)
            (recur (dec depth))))))))

(defn create-initial-doc []
  (let [paragraph-type (.. schema -nodes -paragraph)
        doc-type (.. schema -nodes -doc)
        empty-paragraph (.create paragraph-type)
        doc (.create doc-type #js {:content #js [empty-paragraph]})]
    doc))

(defn create-selection [doc sel]
  (when (and doc sel (:anchor sel) (:head sel))
    (try
      (pm-state/TextSelection.create doc (:anchor sel) (:head sel))
      (catch :default e
        (log/warn "Failed to create text selection:" e)
        (.create pm-state/TextSelection doc)))))

(defn create-node-view [node-type]
  (log/info "Creating node view for type:" node-type)
  (fn [node view-pos view]
    (log/info "Node view called for" node-type "with node:"
              (js->clj node) "at position:" view-pos)
    (let [outer (.createElement js/document "span")]
      (.setAttribute outer "class" node-type)

      ;; Set initial content
      (set! (.-textContent outer) (.-textContent node))

      (.addEventListener outer "click"
                         (case node-type
                           "option" #(rf/dispatch [:option-clicked (.-textContent outer)])
                           "command" #(rf/dispatch [:command-clicked (.-textContent outer)])
                           "tag" #(rf/dispatch [:tag-clicked (.-textContent outer)])
                           nil))

      (log/info "Created node view DOM for" node-type
                "with content:" (.-textContent outer))
      #js {:dom outer
           :ignoreMutation (fn [] false)})))

(defn create-editor-props []
  (let [node-views {"option" (create-node-view "option")
                    "command" (create-node-view "command")
                    "tag" (create-node-view "tag")}]
    (log/info "Creating editor props with nodeViews:" (clj->js node-views))
    #js {:nodeViews (clj->js node-views)}))

(def editor-props (create-editor-props))

(defn base-plugins []
  #js [(history/history)
       (make-keymap)
       (create-pattern-plugin schema)])

(defn create-editor-state [{:keys [doc selection]}]
  (log/info "Creating editor state with doc and selection:" doc selection)
  (let [pm-doc (try
                 (.fromJSON pm-model/Node schema (clj->js doc))
                 (catch :default e
                   (log/warn "Failed to create doc from JSON:" e)
                   (create-initial-doc)))
        pm-selection (create-selection pm-doc selection)]
    (.create pm-state/EditorState
             #js {:schema schema
                  :doc pm-doc
                  :selection pm-selection
                  :plugins (base-plugins)})))

(defn editor []
  (let [container-ref (r/atom nil)
        editor-view-ref (r/atom nil)]
    (r/create-class
     {:component-did-mount
      (fn []
        (log/info "Editor component mounting")
        (when-let [dom-node @container-ref]
          (let [initial-state (create-editor-state {:doc (create-initial-doc)
                                                    :selection nil})
                props (js/Object.assign #js {}
                                        editor-props
                                        #js {:state initial-state
                                             :dispatchTransaction
                                             (fn [tr]
                                               (when-let [view @editor-view-ref]
                                                 (let [next-state (.apply (.-state view) tr)]
                                                   (.updateState view next-state)
                                                   (when-let [command-node (selection-in-command? next-state)]
                                                     (let [command (.-textContent command-node)]
                                                       (log/info "Command detected:" command)
                                                       (rf/dispatch [:set-command command]))))))})
                view (pm-view/EditorView. dom-node props)]
              (reset! editor-view-ref view)
              (rf/dispatch [:set-editor-view view]))))

      :component-will-unmount
      (fn []
        (log/info "Editor component unmounting")
        (when-let [view @editor-view-ref]
          (.destroy view)
          (reset! editor-view-ref nil)
          (rf/dispatch [:set-editor-view nil])))

      :reagent-render
      (fn []
        [:div.editor
         {:ref #(reset! container-ref %)}])})))

(rf/reg-sub
 :editor/view
 (fn [db]
   (:editor/view db)))

(rf/reg-event-fx
 :set-command
 (fn [{:keys [db]} [_ command]]
   (log/info "Setting command:" command)
   {:db (assoc db :command command)}))

(rf/reg-event-fx
 :option-clicked
 (fn [{:keys [db]} [_ option-text]]
   (let [cleaned-text (-> option-text
                          (str/replace #"^\(|\)$" ""))]
     (log/info "Option clicked with cleaned text:" cleaned-text)
     {:dispatch [:handle-option cleaned-text]})))

(rf/reg-event-fx
 :command-clicked
 (fn [{:keys [db]} [_ command-text]]
   (let [cleaned-text (str/replace command-text #"^\(\(|\)\)$" "" )]
     (log/info "Command clicked with cleaned text:" cleaned-text)
     {:dispatch [:handle-command cleaned-text]})))

(rf/reg-event-fx
 :tag-clicked
 (fn [{:keys [db]} [_ tag-text]]
   (let [cleaned-text (-> tag-text
                          (str/replace #"^\[|\]$" ""))]
     (log/info "Tag clicked with cleaned text:" cleaned-text)
     {:dispatch [:handle-tag cleaned-text]})))

(defn format-node-content [node]
  (log/info "Formatting node content for type:" (.-name (.-type node)))
  (case (.-name (.-type node))
    "text" (.-text node)
    "tag" (.-textContent node)
    "command" (.-textContent node)
    ""))

(defn get-formatted-content [doc]
  (log/info "Getting formatted content from doc")
  (let [fragments (array)]
    (.nodesBetween doc 0 (.-size (.-content doc))
                   (fn [node pos parent index]
                     (cond
                       (= (.-name (.-type node)) "paragraph")
                       (do
                         (when (> (.-length fragments) 0)
                           (.push fragments "\n"))
                         true)

                       (or (= (.-name (.-type node)) "text")
                           (= (.-name (.-type node)) "tag")
                           (= (.-name (.-type node)) "command"))
                       (do
                         (.push fragments (format-node-content node))
                         false)

                       :else true)))
    (.join fragments "")))

(rf/reg-event-fx
 :publish
 (fn [{:keys [db]} _]
   (log/info "Publishing content")
   (let [editor-view (:editor/view db)
         content (when editor-view
                   (get-formatted-content (.. editor-view -state -doc)))
         geolocation (:geolocation db)
         tags [["s"
                (:geohash geolocation)
                (str (.round js/Math (:lng geolocation)))
                (str (.round js/Math (:lat geolocation)))]]
         new-editor-state (create-editor-state {:doc (create-initial-doc)
                                                :selection nil})]
     (log/info "Publishing with content:" content "and tags:" tags)
     (.updateState editor-view new-editor-state)
     {:db db
      :dispatch [:nostr/publish 1 content tags]})))

(rf/reg-event-db
 :set-editor-view
 (fn [db [_ view]]
   (log/info "Setting editor view")
   (assoc db :editor/view view)))
