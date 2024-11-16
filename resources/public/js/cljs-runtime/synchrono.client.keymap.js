goog.provide('synchrono.client.keymap');
var module$node_modules$prosemirror_keymap$dist$index_cjs=shadow.js.require("module$node_modules$prosemirror_keymap$dist$index_cjs", {});
var module$node_modules$prosemirror_state$dist$index_cjs=shadow.js.require("module$node_modules$prosemirror_state$dist$index_cjs", {});
var module$node_modules$prosemirror_commands$dist$index_cjs=shadow.js.require("module$node_modules$prosemirror_commands$dist$index_cjs", {});
synchrono.client.keymap.open_bracket_command = (function synchrono$client$keymap$open_bracket_command(state,dispatch){
if((dispatch == null)){
return false;
} else {
var tr = state.tr;
var selection = state.selection;
var from = selection.from;
var doc = state.doc;
var char_before = (((from > (0)))?doc.textBetween((from - (1)),from,""):null);
var resolved_pos = doc.resolve(from);
var parent_node = resolved_pos.parent;
var query_node_type = synchrono.client.schema.schema.nodes.query;
if(cljs.core.truth_((function (){var and__5000__auto__ = char_before;
if(cljs.core.truth_(and__5000__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(char_before,"[")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parent_node.type,query_node_type)));
} else {
return and__5000__auto__;
}
})())){
var tr2 = tr.insertText("[",from);
(dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(tr2) : dispatch.call(null, tr2));

return true;
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = char_before;
if(cljs.core.truth_(and__5000__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(char_before,"[")) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(parent_node.type,query_node_type)));
} else {
return and__5000__auto__;
}
})())){
var tr1 = tr.delete((from - (1)),from);
var pre_node = synchrono.client.schema.schema.text(" ");
var tr2 = tr1.insert((from - (1)),[pre_node]);
var text_node = synchrono.client.schema.schema.text("[[");
var query_node = query_node_type.create(({}),[text_node]);
var tr3 = tr2.replaceWith(from,from,query_node);
var space_node = synchrono.client.schema.schema.text(" ");
var tr4 = tr3.insert((from + (4)),[space_node]);
var tr5 = tr4.setSelection((new module$node_modules$prosemirror_state$dist$index_cjs.TextSelection(tr4.doc.resolve((from + (3))))));
(dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(tr5) : dispatch.call(null, tr5));

return true;
} else {
var tr1 = tr.insertText("[",from);
(dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(tr1) : dispatch.call(null, tr1));

return true;

}
}
}
});
synchrono.client.keymap.close_bracket_command = (function synchrono$client$keymap$close_bracket_command(state,dispatch){
if((dispatch == null)){
return false;
} else {
var selection = state.selection;
var from = selection.from;
var doc = state.doc;
var tr = state.tr;
var char_before = (((from > (0)))?doc.textBetween((from - (1)),from,""):null);
var resolved_pos = doc.resolve(from);
var depth = resolved_pos.depth;
var query_node = (function (){var d = depth;
while(true){
if((d >= (0))){
var node = resolved_pos.node(d);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node.type.name,"query")){
return node;
} else {
var G__16219 = (d - (1));
d = G__16219;
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_((function (){var and__5000__auto__ = char_before;
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(char_before,"]");
if(and__5000__auto____$1){
return query_node;
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())){
var query_pos = resolved_pos.before(resolved_pos.depth);
var raw_text = doc.textBetween(query_pos,from,"");
var bracketed_text = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(raw_text),"]"].join('');
var text_node = synchrono.client.schema.schema.text(bracketed_text);
var tag_node_type = synchrono.client.schema.schema.nodes.tag;
var tag_node = tag_node_type.create(({}),[text_node]);
var tr2 = tr.replaceWith((query_pos - (1)),from,tag_node).setSelection((new module$node_modules$prosemirror_state$dist$index_cjs.TextSelection(tr.doc.resolve(((query_pos + ((bracketed_text).length)) + (2))))));
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-query","set-query",-898596586),""], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-tag","add-tag",-1033774851),bracketed_text], null));

(dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(tr2) : dispatch.call(null, tr2));

return true;
} else {
var tr2 = tr.insertText("]",from);
(dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(tr2) : dispatch.call(null, tr2));

return true;
}
}
});
synchrono.client.keymap.escape_command = (function synchrono$client$keymap$escape_command(state,dispatch){
if((dispatch == null)){
return false;
} else {
var selection = state.selection;
var from = selection.from;
var doc = state.doc;
var resolved_pos = doc.resolve(from);
var depth = resolved_pos.depth;
var query_node = (function (){var d = depth;
while(true){
if((d >= (0))){
var node = resolved_pos.node(d);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node.type.name,"query")){
return node;
} else {
var G__16220 = (d - (1));
d = G__16220;
continue;
}
} else {
return null;
}
break;
}
})();
var tr = state.tr;
if(cljs.core.truth_(query_node)){
var query_pos = resolved_pos.before(resolved_pos.depth);
var query_end_pos = resolved_pos.after(resolved_pos.depth);
var tr2 = tr.delete(query_pos,query_end_pos).setSelection((new module$node_modules$prosemirror_state$dist$index_cjs.TextSelection(tr.doc.resolve((function (){var x__5087__auto__ = (0);
var y__5088__auto__ = (query_pos - (1));
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})()))));
(dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(tr2) : dispatch.call(null, tr2));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-query","set-query",-898596586),""], null));

return true;
} else {
return false;
}
}
});
synchrono.client.keymap.enter_command = (function synchrono$client$keymap$enter_command(state,dispatch){
if((dispatch == null)){
return false;
} else {
var selection = state.selection;
var from = selection.from;
var doc = state.doc;
var resolved_pos = doc.resolve(from);
var depth = resolved_pos.depth;
var query_node = (function (){var d = depth;
while(true){
if((d >= (0))){
var node = resolved_pos.node(d);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node.type.name,"query")){
return node;
} else {
var G__16221 = (d - (1));
d = G__16221;
continue;
}
} else {
return null;
}
break;
}
})();
var tr = state.tr;
if(cljs.core.truth_(query_node)){
var query_pos = resolved_pos.before(resolved_pos.depth);
var query_end_pos = resolved_pos.after(resolved_pos.depth);
var raw_text = doc.textBetween(query_pos,query_end_pos,"");
var clean_text = (cljs.core.truth_(cljs.core.re_matches(/\[\[?\]?\]?/,raw_text))?"":clojure.string.replace(clojure.string.replace(raw_text,/^\[\[?/,""),/\]?\]$/,""));
var text_node = synchrono.client.schema.schema.text(clean_text);
var tr2 = tr.replaceWith((query_pos - (1)),query_end_pos,text_node).setSelection((new module$node_modules$prosemirror_state$dist$index_cjs.TextSelection(tr.doc.resolve((function (){var x__5087__auto__ = query_pos;
var y__5088__auto__ = (query_pos + ((clean_text).length));
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})()))));
(dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(tr2) : dispatch.call(null, tr2));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-query","set-query",-898596586),""], null));

return true;
} else {
return false;
}
}
});
synchrono.client.keymap.tab_command = (function synchrono$client$keymap$tab_command(state,dispatch){
if((dispatch == null)){
return false;
} else {
var selection = state.selection;
var from = selection.from;
var doc = state.doc;
var tr = state.tr;
var char_before = (((from > (0)))?doc.textBetween((from - (1)),from,""):null);
var resolved_pos = doc.resolve(from);
var depth = resolved_pos.depth;
var query_node = (function (){var d = depth;
while(true){
if((d >= (0))){
var node = resolved_pos.node(d);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node.type.name,"query")){
return node;
} else {
var G__16222 = (d - (1));
d = G__16222;
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(query_node)){
var query_pos = resolved_pos.before(resolved_pos.depth);
var raw_text = doc.textBetween(query_pos,from,"");
var bracketed_text = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(raw_text),"]]"].join('');
var text_node = synchrono.client.schema.schema.text(bracketed_text);
var tag_node_type = synchrono.client.schema.schema.nodes.tag;
var tag_node = tag_node_type.create(({}),[text_node]);
var tr2 = tr.replaceWith((query_pos - (1)),from,tag_node).setSelection((new module$node_modules$prosemirror_state$dist$index_cjs.TextSelection(tr.doc.resolve(((query_pos + ((bracketed_text).length)) + (2))))));
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-query","set-query",-898596586),""], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-tag","add-tag",-1033774851),bracketed_text], null));

(dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(tr2) : dispatch.call(null, tr2));

return true;
} else {
return false;
}
}
});
synchrono.client.keymap.backspace_command = (function synchrono$client$keymap$backspace_command(state,dispatch){
if((dispatch == null)){
return false;
} else {
var selection = state.selection;
var from = selection.from;
var doc = state.doc;
var tr = state.tr;
var resolved_pos = doc.resolve(from);
var depth = resolved_pos.depth;
var query_node = (function (){var d = depth;
while(true){
if((d >= (0))){
var node = resolved_pos.node(d);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node.type.name,"query")){
return node;
} else {
var G__16224 = (d - (1));
d = G__16224;
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.not(query_node)){
return false;
} else {
var query_pos = resolved_pos.before(resolved_pos.depth);
var query_end_pos = resolved_pos.after(resolved_pos.depth);
var raw_text = doc.textBetween(query_pos,query_end_pos,"");
var first_two_chars = (((cljs.core.count(raw_text) >= (2)))?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(raw_text,(0),(2)):null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_two_chars,"[[")){
return false;
} else {
var tr1 = tr.delete(query_pos,query_end_pos).setSelection((new module$node_modules$prosemirror_state$dist$index_cjs.TextSelection(tr.doc.resolve((function (){var x__5087__auto__ = (0);
var y__5088__auto__ = (query_pos - (1));
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})()))));
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("draft","set-query","draft/set-query",-1307035925),""], null));

(dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(tr1) : dispatch.call(null, tr1));

return true;
}
}
}
});
synchrono.client.keymap.make_keymap = (function synchrono$client$keymap$make_keymap(){
var custom_keys = new cljs.core.PersistentArrayMap(null, 6, ["[",synchrono.client.keymap.open_bracket_command,"]",synchrono.client.keymap.close_bracket_command,"Tab",synchrono.client.keymap.tab_command,"Escape",synchrono.client.keymap.escape_command,"Enter",(function (state,dispatch){
var or__5002__auto__ = synchrono.client.keymap.enter_command(state,dispatch);
if(or__5002__auto__){
return or__5002__auto__;
} else {
return module$node_modules$prosemirror_commands$dist$index_cjs.splitBlock(state,dispatch);
}
}),"Backspace",(function (state,dispatch){
var or__5002__auto__ = synchrono.client.keymap.backspace_command(state,dispatch);
if(or__5002__auto__){
return or__5002__auto__;
} else {
return module$node_modules$prosemirror_commands$dist$index_cjs.deleteSelection(state,dispatch);
}
})], null);
var basic_keys = new cljs.core.PersistentArrayMap(null, 5, ["Mod-b",module$node_modules$prosemirror_commands$dist$index_cjs.toggleBold,"Mod-i",module$node_modules$prosemirror_commands$dist$index_cjs.toggleItalic,"Mod-z",module$node_modules$prosemirror_commands$dist$index_cjs.undo,"Mod-y",module$node_modules$prosemirror_commands$dist$index_cjs.redo,"Shift-Mod-z",module$node_modules$prosemirror_commands$dist$index_cjs.redo], null);
return module$node_modules$prosemirror_keymap$dist$index_cjs.keymap(cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([custom_keys,basic_keys], 0))));
});

//# sourceMappingURL=synchrono.client.keymap.js.map
