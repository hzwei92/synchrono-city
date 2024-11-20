goog.provide('synchrono.client.keymap');
var module$node_modules$prosemirror_keymap$dist$index_cjs=shadow.js.require("module$node_modules$prosemirror_keymap$dist$index_cjs", {});
var module$node_modules$prosemirror_commands$dist$index_cjs=shadow.js.require("module$node_modules$prosemirror_commands$dist$index_cjs", {});
synchrono.client.keymap.basic_keys = new cljs.core.PersistentArrayMap(null, 5, ["Mod-b",module$node_modules$prosemirror_commands$dist$index_cjs.toggleBold,"Mod-i",module$node_modules$prosemirror_commands$dist$index_cjs.toggleItalic,"Mod-z",module$node_modules$prosemirror_commands$dist$index_cjs.undo,"Mod-y",module$node_modules$prosemirror_commands$dist$index_cjs.redo,"Shift-Mod-z",module$node_modules$prosemirror_commands$dist$index_cjs.redo], null);
synchrono.client.keymap.custom_keys = new cljs.core.PersistentArrayMap(null, 2, ["Enter",(function (state,dispatch){
return module$node_modules$prosemirror_commands$dist$index_cjs.splitBlock(state,dispatch);
}),"Backspace",(function (state,dispatch){
return module$node_modules$prosemirror_commands$dist$index_cjs.deleteSelection(state,dispatch);
})], null);
synchrono.client.keymap.make_keymap = (function synchrono$client$keymap$make_keymap(){
return module$node_modules$prosemirror_keymap$dist$index_cjs.keymap(cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([synchrono.client.keymap.custom_keys,synchrono.client.keymap.basic_keys], 0))));
});

//# sourceMappingURL=synchrono.client.keymap.js.map
