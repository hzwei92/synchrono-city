goog.provide('synchrono.client.editor');
var module$node_modules$prosemirror_state$dist$index_cjs=shadow.js.require("module$node_modules$prosemirror_state$dist$index_cjs", {});
var module$node_modules$prosemirror_model$dist$index_cjs=shadow.js.require("module$node_modules$prosemirror_model$dist$index_cjs", {});
var module$node_modules$prosemirror_view$dist$index_cjs=shadow.js.require("module$node_modules$prosemirror_view$dist$index_cjs", {});
var module$node_modules$prosemirror_history$dist$index_cjs=shadow.js.require("module$node_modules$prosemirror_history$dist$index_cjs", {});
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"selection","selection",975998651),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("editor","view","editor/view",2086044241),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword("editor","view","editor/view",2086044241).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
synchrono.client.editor.base_plugins = [module$node_modules$prosemirror_history$dist$index_cjs.history(),synchrono.client.keymap.make_keymap()];
synchrono.client.editor.selection_in_query_QMARK_ = (function synchrono$client$editor$selection_in_query_QMARK_(state){
var selection = state.selection;
var $pos = selection.$from;
var depth = $pos.depth;
while(true){
var node = $pos.node(depth);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node.type.name,"query")){
return node;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(depth,(1))){
return null;
} else {
var G__17412 = (depth - (1));
depth = G__17412;
continue;
}
}
break;
}
});
synchrono.client.editor.create_initial_doc = (function synchrono$client$editor$create_initial_doc(){
var paragraph_type = synchrono.client.schema.schema.nodes.paragraph;
var doc_type = synchrono.client.schema.schema.nodes.doc;
var empty_paragraph = paragraph_type.create();
var doc = doc_type.create(({"content": [empty_paragraph]}));
return doc;
});
synchrono.client.editor.create_selection = (function synchrono$client$editor$create_selection(doc,sel){
if(cljs.core.truth_((function (){var and__5000__auto__ = doc;
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = sel;
if(cljs.core.truth_(and__5000__auto____$1)){
var and__5000__auto____$2 = new cljs.core.Keyword(null,"anchor","anchor",1549638489).cljs$core$IFn$_invoke$arity$1(sel);
if(cljs.core.truth_(and__5000__auto____$2)){
return new cljs.core.Keyword(null,"head","head",-771383919).cljs$core$IFn$_invoke$arity$1(sel);
} else {
return and__5000__auto____$2;
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())){
try{return module$node_modules$prosemirror_state$dist$index_cjs.TextSelection.create(doc,new cljs.core.Keyword(null,"anchor","anchor",1549638489).cljs$core$IFn$_invoke$arity$1(sel),new cljs.core.Keyword(null,"head","head",-771383919).cljs$core$IFn$_invoke$arity$1(sel));
}catch (e17382){var _ = e17382;
return module$node_modules$prosemirror_state$dist$index_cjs.TextSelection.create(doc);
}} else {
return null;
}
});
synchrono.client.editor.create_editor_state = (function synchrono$client$editor$create_editor_state(p__17383){
var map__17384 = p__17383;
var map__17384__$1 = cljs.core.__destructure_map(map__17384);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17384__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17384__$1,new cljs.core.Keyword(null,"selection","selection",975998651));
var pm_doc = (function (){try{return module$node_modules$prosemirror_model$dist$index_cjs.Node.fromJSON(synchrono.client.schema.schema,cljs.core.clj__GT_js(doc));
}catch (e17385){var _ = e17385;
return synchrono.client.editor.create_initial_doc();
}})();
var pm_selection = synchrono.client.editor.create_selection(pm_doc,selection);
return module$node_modules$prosemirror_state$dist$index_cjs.EditorState.create(({"schema": synchrono.client.schema.schema, "doc": pm_doc, "selection": pm_selection, "plugins": synchrono.client.editor.base_plugins}));
});
synchrono.client.editor.serialize_editor_state = (function synchrono$client$editor$serialize_editor_state(state){
var doc = state.doc;
var selection = state.selection;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),doc.toJSON(),new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"anchor","anchor",1549638489),selection.anchor,new cljs.core.Keyword(null,"head","head",-771383919),selection.head], null)], null);
});
synchrono.client.editor.editor = (function synchrono$client$editor$editor(){
var container_ref = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var editor_view_ref = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var doc = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"doc","doc",1913296891)], null));
var selection = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651)], null));
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
var temp__5804__auto__ = cljs.core.deref(container_ref);
if(cljs.core.truth_(temp__5804__auto__)){
var dom_node = temp__5804__auto__;
var initial_state = synchrono.client.editor.create_editor_state(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.deref(doc),new cljs.core.Keyword(null,"selection","selection",975998651),cljs.core.deref(selection)], null));
var dispatch_fn = (function (tr){
var temp__5804__auto____$1 = cljs.core.deref(editor_view_ref);
if(cljs.core.truth_(temp__5804__auto____$1)){
var view = temp__5804__auto____$1;
var next_state = view.state.apply(tr);
view.updateState(next_state);

var temp__5804__auto____$2 = synchrono.client.editor.selection_in_query_QMARK_(next_state);
if(cljs.core.truth_(temp__5804__auto____$2)){
var query_node = temp__5804__auto____$2;
var query = query_node.textContent;
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-query","set-query",-898596586),query], null));
} else {
return null;
}
} else {
return null;
}
});
var view = (new module$node_modules$prosemirror_view$dist$index_cjs.EditorView(dom_node,({"state": initial_state, "dispatchTransaction": dispatch_fn, "editable": (function (){
return true;
})})));
cljs.core.reset_BANG_(editor_view_ref,view);

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-editor-view","set-editor-view",-1549386104),view], null));
} else {
return null;
}
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (){
var temp__5804__auto__ = cljs.core.deref(synchrono.client.editor.view_ref);
if(cljs.core.truth_(temp__5804__auto__)){
var view = temp__5804__auto__;
view.destroy();

cljs.core.reset_BANG_(synchrono.client.editor.view_ref,null);

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-editor-view","set-editor-view",-1549386104),null], null));
} else {
return null;
}
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.editor","div.editor",-1423342585),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__17386_SHARP_){
return cljs.core.reset_BANG_(container_ref,p1__17386_SHARP_);
})], null)], null);
})], null));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-doc","set-doc",-804552183),(function (p__17387,p__17388){
var map__17389 = p__17387;
var map__17389__$1 = cljs.core.__destructure_map(map__17389);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17389__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__17390 = p__17388;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17390,(0),null);
var doc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17390,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"doc","doc",1913296891),doc)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-selection","set-selection",674035524),(function (p__17393,p__17394){
var map__17395 = p__17393;
var map__17395__$1 = cljs.core.__destructure_map(map__17395);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17395__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__17396 = p__17394;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17396,(0),null);
var selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17396,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"selection","selection",975998651),selection)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-query","set-query",-898596586),(function (p__17399,p__17400){
var map__17401 = p__17399;
var map__17401__$1 = cljs.core.__destructure_map(map__17401);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17401__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__17402 = p__17400;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17402,(0),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17402,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"query","query",-1288509510),query)], null);
}));
synchrono.client.editor.format_node_content = (function synchrono$client$editor$format_node_content(node){
var G__17405 = node.type.name;
switch (G__17405) {
case "text":
return node.text;

break;
case "tag":
return node.textContent;

break;
case "query":
return node.textContent;

break;
default:
return "";

}
});
synchrono.client.editor.get_formatted_content = (function synchrono$client$editor$get_formatted_content(doc){
var fragments = [];
doc.nodesBetween((0),doc.content.size,(function (node,pos,parent,index){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node.type.name,"paragraph")){
if((fragments.length > (0))){
fragments.push("\n");
} else {
}

return true;
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node.type.name,"text")) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node.type.name,"tag")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node.type.name,"query")))))){
fragments.push(synchrono.client.editor.format_node_content(node));

return false;
} else {
return true;

}
}
}));

return fragments.join("");
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"publish","publish",-1178026850),(function (p__17406,_){
var map__17407 = p__17406;
var map__17407__$1 = cljs.core.__destructure_map(map__17407);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17407__$1,new cljs.core.Keyword(null,"db","db",993250759));
var editor_view = new cljs.core.Keyword("editor","view","editor/view",2086044241).cljs$core$IFn$_invoke$arity$1(db);
var content = (cljs.core.truth_(editor_view)?synchrono.client.editor.get_formatted_content(editor_view.state.doc):null);
var geolocation = new cljs.core.Keyword(null,"geolocation","geolocation",232447107).cljs$core$IFn$_invoke$arity$1(db);
var tags = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["s",new cljs.core.Keyword(null,"geohash","geohash",-76356472).cljs$core$IFn$_invoke$arity$1(geolocation)], null)], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nostr","publish","nostr/publish",-1609920306),(1),content,tags], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-editor","clear-editor",202940011)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-editor-view","set-editor-view",-1549386104),(function (db,p__17408){
var vec__17409 = p__17408;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17409,(0),null);
var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17409,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("editor","view","editor/view",2086044241),view);
}));

//# sourceMappingURL=synchrono.client.editor.js.map
