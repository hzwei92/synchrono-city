goog.provide('synchrono.client.write');
var module$node_modules$$tiptap$core$dist$index_cjs=shadow.js.require("module$node_modules$$tiptap$core$dist$index_cjs", {});
var module$node_modules$$tiptap$starter_kit$dist$index_cjs=shadow.js.require("module$node_modules$$tiptap$starter_kit$dist$index_cjs", {});
var module$node_modules$$tiptap$pm$state$dist$index_cjs=shadow.js.require("module$node_modules$$tiptap$pm$state$dist$index_cjs", {});
var module$node_modules$prosemirror_state$dist$index_cjs=shadow.js.require("module$node_modules$prosemirror_state$dist$index_cjs", {});
var module$node_modules$prosemirror_view$dist$index_cjs=shadow.js.require("module$node_modules$prosemirror_view$dist$index_cjs", {});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"save-editor-content","save-editor-content",-137415699),(function (p__21262,p__21263){
var map__21264 = p__21262;
var map__21264__$1 = cljs.core.__destructure_map(map__21264);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21264__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__21265 = p__21263;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21265,(0),null);
var editor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21265,(1),null);
var html = editor.getHTML();
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"synchrono.client.write","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/write.cljs",17,6,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Saving editor content:",html], null);
}),null)),null,(447),null);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drafts","drafts",1523624562),new cljs.core.Keyword(null,"current-draft","current-draft",-2030584435)], null),html)], null);
}));
synchrono.client.write.create_wiki_link = (function synchrono$client$write$create_wiki_link(view,$from){
var tr = view.state.tr.delete(($from.pos - (1)),$from.pos).insertText("[[]]",($from.pos - (1)));
view.dispatch(tr.setSelection(view.state.selection.constructor.near(tr.doc.resolve((($from.pos - (1)) + (2))))));

return true;
});
synchrono.client.write.move_cursor_right = (function synchrono$client$write$move_cursor_right(view,$from,amount){
var tr = view.state.tr.setSelection(view.state.selection.constructor.near(view.state.doc.resolve(($from.pos + amount))));
view.dispatch(tr);

return true;
});
synchrono.client.write.wiki_link_extension = module$node_modules$$tiptap$core$dist$index_cjs.Extension.create(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"wikiLink",new cljs.core.Keyword(null,"addProseMirrorPlugins","addProseMirrorPlugins",391633342),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new module$node_modules$prosemirror_state$dist$index_cjs.Plugin(({"key": (new module$node_modules$prosemirror_state$dist$index_cjs.PluginKey("wikiLink")), "props": ({"handleKeyDown": (function (view,event){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event.key,"[")){
var state = view.state;
var doc = state.doc;
var selection = state.selection;
var $from = selection.$from;
var before = doc.textBetween((function (){var x__5087__auto__ = (0);
var y__5088__auto__ = ($from.pos - (1));
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})(),$from.pos);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(before,"[")){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"synchrono.client.write","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/write.cljs",61,40,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["wiki link detected"], null);
}),null)),null,(448),null);

event.preventDefault();

return synchrono.client.write.create_wiki_link(view,$from);
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event.key,"]")){
var state = view.state;
var selection = state.selection;
var $from = selection.$from;
var pos = $from.pos;
var doc = state.doc;
var before_cursor = doc.textBetween((0),pos);
var last_open_bracket = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(before_cursor,"[[");
var next_close_bracket = clojure.string.index_of.cljs$core$IFn$_invoke$arity$3(before_cursor,"]]",last_open_bracket);
var next_char = doc.textBetween(pos,(pos + (1)));
if(cljs.core.truth_((function (){var and__5000__auto__ = last_open_bracket;
if(cljs.core.truth_(and__5000__auto__)){
return (((next_close_bracket == null)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(next_char,"]")));
} else {
return and__5000__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"synchrono.client.write","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/write.cljs",78,40,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["close bracket detected"], null);
}),null)),null,(449),null);

event.preventDefault();

return synchrono.client.write.move_cursor_right(view,$from,(1));
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event.key,"Tab")){
var state = view.state;
var selection = state.selection;
var $from = selection.$from;
var pos = $from.pos;
var doc = state.doc;
var before_cursor = doc.textBetween((0),pos);
var last_open_bracket = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(before_cursor,"[[");
var next_close_bracket = clojure.string.index_of.cljs$core$IFn$_invoke$arity$3(before_cursor,"]]",last_open_bracket);
var next_chars = doc.textBetween(pos,((pos + (1)) + (1)));
if(cljs.core.truth_((function (){var and__5000__auto__ = last_open_bracket;
if(cljs.core.truth_(and__5000__auto__)){
return (((next_close_bracket == null)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(next_chars,"]]")));
} else {
return and__5000__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"synchrono.client.write","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/write.cljs",95,40,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tab detected"], null);
}),null)),null,(450),null);

event.preventDefault();

return synchrono.client.write.move_cursor_right(view,$from,(2));
} else {
return null;
}
} else {
return null;

}
}
}
}), "decorations": (function (state){
var decorations = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var doc = state.doc;
doc.descendants((function (node,pos){
if(cljs.core.truth_(node.isText)){
var text = node.text;
var regex = /\[\[(.*?)\]\]/;
var matches = cljs.core.re_seq(regex,text);
var seq__21268 = cljs.core.seq(matches);
var chunk__21270 = null;
var count__21271 = (0);
var i__21272 = (0);
while(true){
if((i__21272 < count__21271)){
var vec__21280 = chunk__21270.cljs$core$IIndexed$_nth$arity$2(null, i__21272);
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21280,(0),null);
var start_21286 = (pos + text.indexOf(match));
var end_21287 = (start_21286 + cljs.core.count(match));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(decorations,cljs.core.conj,module$node_modules$prosemirror_view$dist$index_cjs.Decoration.inline(start_21286,end_21287,({"class": "wiki-link"})));


var G__21288 = seq__21268;
var G__21289 = chunk__21270;
var G__21290 = count__21271;
var G__21291 = (i__21272 + (1));
seq__21268 = G__21288;
chunk__21270 = G__21289;
count__21271 = G__21290;
i__21272 = G__21291;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21268);
if(temp__5804__auto__){
var seq__21268__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21268__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21268__$1);
var G__21292 = cljs.core.chunk_rest(seq__21268__$1);
var G__21293 = c__5525__auto__;
var G__21294 = cljs.core.count(c__5525__auto__);
var G__21295 = (0);
seq__21268 = G__21292;
chunk__21270 = G__21293;
count__21271 = G__21294;
i__21272 = G__21295;
continue;
} else {
var vec__21283 = cljs.core.first(seq__21268__$1);
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21283,(0),null);
var start_21296 = (pos + text.indexOf(match));
var end_21297 = (start_21296 + cljs.core.count(match));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(decorations,cljs.core.conj,module$node_modules$prosemirror_view$dist$index_cjs.Decoration.inline(start_21296,end_21297,({"class": "wiki-link"})));


var G__21298 = cljs.core.next(seq__21268__$1);
var G__21299 = null;
var G__21300 = (0);
var G__21301 = (0);
seq__21268 = G__21298;
chunk__21270 = G__21299;
count__21271 = G__21300;
i__21272 = G__21301;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));

return module$node_modules$prosemirror_view$dist$index_cjs.DecorationSet.create(doc,cljs.core.clj__GT_js(cljs.core.deref(decorations)));
})})})))], null);
})], null)));
synchrono.client.write.create_editor = (function synchrono$client$write$create_editor(el){
return (new module$node_modules$$tiptap$core$dist$index_cjs.Editor(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"element","element",1974019749),el,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),[module$node_modules$$tiptap$starter_kit$dist$index_cjs.default,synchrono.client.write.wiki_link_extension],new cljs.core.Keyword(null,"autofocus","autofocus",-712814732),true,new cljs.core.Keyword(null,"editable","editable",1930280326),true,new cljs.core.Keyword(null,"onUpdate","onUpdate",-315358968),(function (props){
var editor = props.editor;
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"save-editor-content","save-editor-content",-137415699),editor], null));
})], null))));
});
synchrono.client.write.write = (function synchrono$client$write$write(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.title","div.title",-1929547732),"write"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#editor","div#editor",-1877510501),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (el){
if(cljs.core.truth_(el)){
return synchrono.client.write.create_editor(el);
} else {
return null;
}
})], null)], null)], null);
});

//# sourceMappingURL=synchrono.client.write.js.map
