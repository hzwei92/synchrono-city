goog.provide('synchrono.client.editor');
var module$node_modules$prosemirror_state$dist$index_cjs=shadow.js.require("module$node_modules$prosemirror_state$dist$index_cjs", {});
var module$node_modules$prosemirror_model$dist$index_cjs=shadow.js.require("module$node_modules$prosemirror_model$dist$index_cjs", {});
var module$node_modules$prosemirror_view$dist$index_cjs=shadow.js.require("module$node_modules$prosemirror_view$dist$index_cjs", {});
var module$node_modules$prosemirror_history$dist$index_cjs=shadow.js.require("module$node_modules$prosemirror_history$dist$index_cjs", {});
synchrono.client.editor.selection_in_command_QMARK_ = (function synchrono$client$editor$selection_in_command_QMARK_(state){
var selection = state.selection;
var $pos = selection.$from;
var depth = $pos.depth;
while(true){
var node = $pos.node(depth);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node.type.name,"command")){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"synchrono.client.editor","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/editor.cljs",22,13,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (depth,node,selection,$pos){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Found command node at depth",depth], null);
});})(depth,node,selection,$pos))
,null)),null,(5975),null);

return node;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(depth,(1))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"synchrono.client.editor","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/editor.cljs",26,15,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (depth,node,selection,$pos){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["No command node found"], null);
});})(depth,node,selection,$pos))
,null)),null,(5976),null);

return null;
} else {
var G__42645 = (depth - (1));
depth = G__42645;
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
}catch (e42608){var e = e42608;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"synchrono.client.editor","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/editor.cljs",42,9,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to create text selection:",e], null);
}),null)),null,(5977),null);

return module$node_modules$prosemirror_state$dist$index_cjs.TextSelection.create(doc);
}} else {
return null;
}
});
synchrono.client.editor.create_node_view = (function synchrono$client$editor$create_node_view(node_type){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"synchrono.client.editor","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/editor.cljs",46,3,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Creating node view for type:",node_type], null);
}),null)),null,(5978),null);

return (function (node,view_pos,view){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"synchrono.client.editor","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/editor.cljs",48,5,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Node view called for",node_type,"with node:",cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(node),"at position:",view_pos], null);
}),null)),null,(5979),null);

var outer = document.createElement("span");
outer.setAttribute("class",node_type);

(outer.textContent = node.textContent);

outer.addEventListener("click",(function (){var G__42609 = node_type;
switch (G__42609) {
case "option":
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option-clicked","option-clicked",-650268986),outer.textContent], null));
});

break;
case "command":
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"command-clicked","command-clicked",-1408068318),outer.textContent], null));
});

break;
case "tag":
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag-clicked","tag-clicked",-608720089),outer.textContent], null));
});

break;
default:
return null;

}
})());

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"synchrono.client.editor","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/editor.cljs",63,7,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Created node view DOM for",node_type,"with content:",outer.textContent], null);
}),null)),null,(5980),null);

return ({"dom": outer, "ignoreMutation": (function (){
return false;
})});
});
});
synchrono.client.editor.create_editor_props = (function synchrono$client$editor$create_editor_props(){
var node_views = new cljs.core.PersistentArrayMap(null, 3, ["option",synchrono.client.editor.create_node_view("option"),"command",synchrono.client.editor.create_node_view("command"),"tag",synchrono.client.editor.create_node_view("tag")], null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"synchrono.client.editor","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/editor.cljs",72,5,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Creating editor props with nodeViews:",cljs.core.clj__GT_js(node_views)], null);
}),null)),null,(5981),null);

return ({"nodeViews": cljs.core.clj__GT_js(node_views)});
});
synchrono.client.editor.editor_props = synchrono.client.editor.create_editor_props();
synchrono.client.editor.base_plugins = (function synchrono$client$editor$base_plugins(){
return [module$node_modules$prosemirror_history$dist$index_cjs.history(),synchrono.client.keymap.make_keymap(),synchrono.client.plugin.create_pattern_plugin(synchrono.client.schema.schema)];
});
synchrono.client.editor.create_editor_state = (function synchrono$client$editor$create_editor_state(p__42610){
var map__42611 = p__42610;
var map__42611__$1 = cljs.core.__destructure_map(map__42611);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42611__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42611__$1,new cljs.core.Keyword(null,"selection","selection",975998651));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"synchrono.client.editor","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/editor.cljs",83,3,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Creating editor state with doc and selection:",doc,selection], null);
}),null)),null,(5982),null);

var pm_doc = (function (){try{return module$node_modules$prosemirror_model$dist$index_cjs.Node.fromJSON(synchrono.client.schema.schema,cljs.core.clj__GT_js(doc));
}catch (e42612){var e = e42612;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"synchrono.client.editor","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/editor.cljs",87,20,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to create doc from JSON:",e], null);
}),null)),null,(5983),null);

return synchrono.client.editor.create_initial_doc();
}})();
var pm_selection = synchrono.client.editor.create_selection(pm_doc,selection);
return module$node_modules$prosemirror_state$dist$index_cjs.EditorState.create(({"schema": synchrono.client.schema.schema, "doc": pm_doc, "selection": pm_selection, "plugins": synchrono.client.editor.base_plugins()}));
});
synchrono.client.editor.editor = (function synchrono$client$editor$editor(){
var container_ref = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var editor_view_ref = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"synchrono.client.editor","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/editor.cljs",102,9,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Editor component mounting"], null);
}),null)),null,(5984),null);

var temp__5804__auto__ = cljs.core.deref(container_ref);
if(cljs.core.truth_(temp__5804__auto__)){
var dom_node = temp__5804__auto__;
var initial_state = synchrono.client.editor.create_editor_state(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),synchrono.client.editor.create_initial_doc(),new cljs.core.Keyword(null,"selection","selection",975998651),null], null));
var props = Object.assign(({}),synchrono.client.editor.editor_props,({"state": initial_state, "dispatchTransaction": (function (tr){
var temp__5804__auto____$1 = cljs.core.deref(editor_view_ref);
if(cljs.core.truth_(temp__5804__auto____$1)){
var view = temp__5804__auto____$1;
var next_state = view.state.apply(tr);
view.updateState(next_state);

var temp__5804__auto____$2 = synchrono.client.editor.selection_in_command_QMARK_(next_state);
if(cljs.core.truth_(temp__5804__auto____$2)){
var command_node = temp__5804__auto____$2;
var command = command_node.textContent;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"synchrono.client.editor","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/editor.cljs",116,56,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Command detected:",command], null);
}),null)),null,(5985),null);

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-command","set-command",-1223392403),command], null));
} else {
return null;
}
} else {
return null;
}
})}));
var view = (new module$node_modules$prosemirror_view$dist$index_cjs.EditorView(dom_node,props));
cljs.core.reset_BANG_(editor_view_ref,view);

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-editor-view","set-editor-view",-1549386104),view], null));
} else {
return null;
}
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"synchrono.client.editor","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/editor.cljs",124,9,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Editor component unmounting"], null);
}),null)),null,(5986),null);

var temp__5804__auto__ = cljs.core.deref(editor_view_ref);
if(cljs.core.truth_(temp__5804__auto__)){
var view = temp__5804__auto__;
view.destroy();

cljs.core.reset_BANG_(editor_view_ref,null);

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-editor-view","set-editor-view",-1549386104),null], null));
} else {
return null;
}
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.editor","div.editor",-1423342585),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__42613_SHARP_){
return cljs.core.reset_BANG_(container_ref,p1__42613_SHARP_);
})], null)], null);
})], null));
});
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("editor","view","editor/view",2086044241),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword("editor","view","editor/view",2086044241).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-command","set-command",-1223392403),(function (p__42614,p__42615){
var map__42616 = p__42614;
var map__42616__$1 = cljs.core.__destructure_map(map__42616);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42616__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__42617 = p__42615;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42617,(0),null);
var command = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42617,(1),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"synchrono.client.editor","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/editor.cljs",143,4,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Setting command:",command], null);
}),null)),null,(5987),null);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"command","command",-894540724),command)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"option-clicked","option-clicked",-650268986),(function (p__42620,p__42621){
var map__42622 = p__42620;
var map__42622__$1 = cljs.core.__destructure_map(map__42622);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42622__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__42623 = p__42621;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42623,(0),null);
var option_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42623,(1),null);
var cleaned_text = clojure.string.replace(option_text,/^\(|\)$/,"");
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"synchrono.client.editor","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/editor.cljs",151,6,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Option clicked with cleaned text:",cleaned_text], null);
}),null)),null,(5988),null);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handle-option","handle-option",-1946647740),cleaned_text], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"command-clicked","command-clicked",-1408068318),(function (p__42626,p__42627){
var map__42628 = p__42626;
var map__42628__$1 = cljs.core.__destructure_map(map__42628);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42628__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__42629 = p__42627;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42629,(0),null);
var command_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42629,(1),null);
var cleaned_text = clojure.string.replace(command_text,/^\(\(|\)\)$/,"");
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"synchrono.client.editor","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/editor.cljs",158,6,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Command clicked with cleaned text:",cleaned_text], null);
}),null)),null,(5989),null);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handle-command","handle-command",-1689723068),cleaned_text], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tag-clicked","tag-clicked",-608720089),(function (p__42632,p__42633){
var map__42634 = p__42632;
var map__42634__$1 = cljs.core.__destructure_map(map__42634);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42634__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__42635 = p__42633;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42635,(0),null);
var tag_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42635,(1),null);
var cleaned_text = clojure.string.replace(tag_text,/^\[|\]$/,"");
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"synchrono.client.editor","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/editor.cljs",166,6,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tag clicked with cleaned text:",cleaned_text], null);
}),null)),null,(5990),null);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handle-tag","handle-tag",922808543),cleaned_text], null)], null);
}));
synchrono.client.editor.format_node_content = (function synchrono$client$editor$format_node_content(node){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"synchrono.client.editor","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/editor.cljs",170,3,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Formatting node content for type:",node.type.name], null);
}),null)),null,(5991),null);

var G__42638 = node.type.name;
switch (G__42638) {
case "text":
return node.text;

break;
case "tag":
return node.textContent;

break;
case "command":
return node.textContent;

break;
default:
return "";

}
});
synchrono.client.editor.get_formatted_content = (function synchrono$client$editor$get_formatted_content(doc){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"synchrono.client.editor","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/editor.cljs",178,3,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Getting formatted content from doc"], null);
}),null)),null,(5992),null);

var fragments = [];
doc.nodesBetween((0),doc.content.size,(function (node,pos,parent,index){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node.type.name,"paragraph")){
if((fragments.length > (0))){
fragments.push("\n");
} else {
}

return true;
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node.type.name,"text")) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node.type.name,"tag")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node.type.name,"command")))))){
fragments.push(synchrono.client.editor.format_node_content(node));

return false;
} else {
return true;

}
}
}));

return fragments.join("");
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"publish","publish",-1178026850),(function (p__42639,_){
var map__42640 = p__42639;
var map__42640__$1 = cljs.core.__destructure_map(map__42640);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42640__$1,new cljs.core.Keyword(null,"db","db",993250759));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"synchrono.client.editor","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/editor.cljs",202,4,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Publishing content"], null);
}),null)),null,(5993),null);

var editor_view = new cljs.core.Keyword("editor","view","editor/view",2086044241).cljs$core$IFn$_invoke$arity$1(db);
var content = (cljs.core.truth_(editor_view)?synchrono.client.editor.get_formatted_content(editor_view.state.doc):null);
var geolocation = new cljs.core.Keyword(null,"geolocation","geolocation",232447107).cljs$core$IFn$_invoke$arity$1(db);
var tags = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["s",new cljs.core.Keyword(null,"geohash","geohash",-76356472).cljs$core$IFn$_invoke$arity$1(geolocation),cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round(new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(geolocation))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round(new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(geolocation)))], null)], null);
var new_editor_state = synchrono.client.editor.create_editor_state(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),synchrono.client.editor.create_initial_doc(),new cljs.core.Keyword(null,"selection","selection",975998651),null], null));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"synchrono.client.editor","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/editor.cljs",213,6,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Publishing with content:",content,"and tags:",tags], null);
}),null)),null,(5994),null);

editor_view.updateState(new_editor_state);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nostr","publish","nostr/publish",-1609920306),(1),content,tags], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-editor-view","set-editor-view",-1549386104),(function (db,p__42641){
var vec__42642 = p__42641;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42642,(0),null);
var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42642,(1),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"synchrono.client.editor","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/editor.cljs",221,4,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Setting editor view"], null);
}),null)),null,(5995),null);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("editor","view","editor/view",2086044241),view);
}));

//# sourceMappingURL=synchrono.client.editor.js.map
