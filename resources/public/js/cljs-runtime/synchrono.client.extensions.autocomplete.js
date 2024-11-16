goog.provide('synchrono.client.extensions.autocomplete');
var module$node_modules$$tiptap$core$dist$index_cjs=shadow.js.require("module$node_modules$$tiptap$core$dist$index_cjs", {});
var module$node_modules$$tiptap$pm$state$dist$index_cjs=shadow.js.require("module$node_modules$$tiptap$pm$state$dist$index_cjs", {});
var module$node_modules$$tiptap$pm$view$dist$index_cjs=shadow.js.require("module$node_modules$$tiptap$pm$view$dist$index_cjs", {});
synchrono.client.extensions.autocomplete.autocomplete_extension = module$node_modules$$tiptap$core$dist$index_cjs.Extension.create(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"autocomplete",new cljs.core.Keyword(null,"addOptions","addOptions",1505815287),(function (){
return ({"triggerChar": "@", "suggestionDebounce": (800), "getSuggestions": null});
}),new cljs.core.Keyword(null,"addProseMirrorPlugins","addProseMirrorPlugins",391633342),(function (){
var plugin_key = (new module$node_modules$$tiptap$pm$state$dist$index_cjs.PluginKey("autocomplete"));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new module$node_modules$$tiptap$pm$state$dist$index_cjs.Plugin(({"key": plugin_key, "state": ({"init": (function (){
return module$node_modules$$tiptap$pm$view$dist$index_cjs.DecorationSet.empty();
}), "apply": (function (tr,old_state){
if(cljs.core.truth_(tr.getMeta(plugin_key))){
return tr.getMeta(plugin_key).decorations;
} else {
if(cljs.core.truth_(tr.docChanged)){
return old_state.map(tr.mapping,tr.doc);
} else {
return old_state;
}
}
})}), "view": (function (){
return ({"update": (function (view,prev_state){
var selection = view.state.selection;
var cursor_pos = selection.$head.pos;
var next_node = view.state.doc.nodeAt(cursor_pos);
if(cljs.core.truth_((function (){var and__5000__auto__ = next_node;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(next_node.isBlock);
} else {
return and__5000__auto__;
}
})())){
var suggestion_decoration = module$node_modules$$tiptap$pm$view$dist$index_cjs.Decoration.widget(cursor_pos,(function (){
var parent = document.createElement("span");
(parent.innerHTML = "suggestion text");

parent.classList.add("autocomplete-suggestion");

return parent;
}),({"side": (1)}));
var decorations = module$node_modules$$tiptap$pm$view$dist$index_cjs.DecorationSet.create(view.state.doc,[suggestion_decoration]);
var tr = view.state.tr;
tr.setMeta(plugin_key,({"decorations": decorations}));

return view.dispatch(tr);
} else {
return null;
}
})});
}), "props": ({"decorations": (function (state){
return synchrono.client.extensions.autocomplete.this$.getState(state);
})})})))], null);
})], null)));

//# sourceMappingURL=synchrono.client.extensions.autocomplete.js.map
