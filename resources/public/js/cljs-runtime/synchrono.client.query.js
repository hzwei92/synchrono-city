goog.provide('synchrono.client.query');
var module$node_modules$prosemirror_state$dist$index_cjs=shadow.js.require("module$node_modules$prosemirror_state$dist$index_cjs", {});
var module$node_modules$prosemirror_model$dist$index_cjs=shadow.js.require("module$node_modules$prosemirror_model$dist$index_cjs", {});
var module$node_modules$prosemirror_view$dist$index_cjs=shadow.js.require("module$node_modules$prosemirror_view$dist$index_cjs", {});
var module$node_modules$prosemirror_history$dist$index_cjs=shadow.js.require("module$node_modules$prosemirror_history$dist$index_cjs", {});
synchrono.client.query.base_plugins = [module$node_modules$prosemirror_history$dist$index_cjs.history(),synchrono.client.keymap.make_keymap()];
synchrono.client.query.create_initial_doc = (function synchrono$client$query$create_initial_doc(){
var paragraph_type = synchrono.client.schema.schema.nodes.paragraph;
var doc_type = synchrono.client.schema.schema.nodes.doc;
var empty_paragraph = paragraph_type.create();
var doc = doc_type.create(({"content": [empty_paragraph]}));
return doc;
});
synchrono.client.query.create_editor_state = (function synchrono$client$query$create_editor_state(){
return module$node_modules$prosemirror_state$dist$index_cjs.EditorState.create(({"schema": synchrono.client.schema.schema, "doc": synchrono.client.query.create_initial_doc(), "plugins": synchrono.client.query.base_plugins}));
});
synchrono.client.query.query_editor = (function synchrono$client$query$query_editor(){
var container_ref = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var editor_view_ref = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
var temp__5804__auto__ = cljs.core.deref(container_ref);
if(cljs.core.truth_(temp__5804__auto__)){
var dom_node = temp__5804__auto__;
var initial_state = synchrono.client.query.create_editor_state();
var dispatch_fn = (function (tr){
var temp__5804__auto____$1 = cljs.core.deref(editor_view_ref);
if(cljs.core.truth_(temp__5804__auto____$1)){
var view = temp__5804__auto____$1;
var next_state = view.state.apply(tr);
return view.updateState(next_state);
} else {
return null;
}
});
var view = (new module$node_modules$prosemirror_view$dist$index_cjs.EditorView(dom_node,({"state": initial_state, "dispatchTransaction": dispatch_fn, "editable": (function (){
return true;
})})));
cljs.core.reset_BANG_(editor_view_ref,view);

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-query-editor-view","set-query-editor-view",845854228),view], null));
} else {
return null;
}
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (){
var temp__5804__auto__ = cljs.core.deref(editor_view_ref);
if(cljs.core.truth_(temp__5804__auto__)){
var view = temp__5804__auto__;
view.destroy();

cljs.core.reset_BANG_(editor_view_ref,null);

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-query-editor-view","set-query-editor-view",845854228),null], null));
} else {
return null;
}
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.query-editor","div.query-editor",-2134428873),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__34858_SHARP_){
return cljs.core.reset_BANG_(container_ref,p1__34858_SHARP_);
})], null)], null);
})], null));
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-query-editor-view","set-query-editor-view",845854228),(function (db,p__34859){
var vec__34860 = p__34859;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34860,(0),null);
var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34860,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"query-editor-view","query-editor-view",1142470564),view);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"query-editor-view","query-editor-view",1142470564),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"query-editor-view","query-editor-view",1142470564).cljs$core$IFn$_invoke$arity$1(db);
})], 0));

//# sourceMappingURL=synchrono.client.query.js.map
