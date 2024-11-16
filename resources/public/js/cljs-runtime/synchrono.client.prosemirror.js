goog.provide('synchrono.client.prosemirror');
var module$node_modules$prosemirror_model$dist$index_cjs=shadow.js.require("module$node_modules$prosemirror_model$dist$index_cjs", {});
var module$node_modules$prosemirror_state$dist$index_cjs=shadow.js.require("module$node_modules$prosemirror_state$dist$index_cjs", {});
var module$node_modules$prosemirror_view$dist$index_cjs=shadow.js.require("module$node_modules$prosemirror_view$dist$index_cjs", {});
var module$node_modules$prosemirror_commands$dist$index_cjs=shadow.js.require("module$node_modules$prosemirror_commands$dist$index_cjs", {});
var module$node_modules$prosemirror_history$dist$index_cjs=shadow.js.require("module$node_modules$prosemirror_history$dist$index_cjs", {});
var module$node_modules$prosemirror_keymap$dist$index_cjs=shadow.js.require("module$node_modules$prosemirror_keymap$dist$index_cjs", {});
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"queries","queries",1446291995),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
var draft_list = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drafts","drafts",1523624562),new cljs.core.Keyword(null,"drafts-list","drafts-list",1470935679)], null));
var current_draft_index = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drafts","drafts",1523624562),new cljs.core.Keyword(null,"current-draft-index","current-draft-index",-2132794597)], null));
var draft = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(draft_list,current_draft_index);
var queries = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(draft,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queries","queries",1446291995)], null));
return queries;
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("suggestions","for-position","suggestions/for-position",-688860367),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__25879){
var vec__25880 = p__25879;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25880,(0),null);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25880,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drafts","drafts",1523624562),new cljs.core.Keyword(null,"drafts-list","drafts-list",1470935679),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drafts","drafts",1523624562),new cljs.core.Keyword(null,"current-draft-index","current-draft-index",-2132794597)], null)),new cljs.core.Keyword(null,"queries-by-pos","queries-by-pos",1612898280),pos,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618)], null),cljs.core.PersistentVector.EMPTY);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("suggestions","selected-index","suggestions/selected-index",1279454861),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__25883){
var vec__25884 = p__25883;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25884,(0),null);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25884,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drafts","drafts",1523624562),new cljs.core.Keyword(null,"drafts-list","drafts-list",1470935679),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drafts","drafts",1523624562),new cljs.core.Keyword(null,"current-draft-index","current-draft-index",-2132794597)], null)),new cljs.core.Keyword(null,"queries-by-pos","queries-by-pos",1612898280),pos,new cljs.core.Keyword(null,"selected-index","selected-index",1735686526)], null),(0));
})], 0));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("prosemirror","update-queries","prosemirror/update-queries",-44944324),(function (p__25887,p__25888){
var map__25889 = p__25887;
var map__25889__$1 = cljs.core.__destructure_map(map__25889);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25889__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__25890 = p__25888;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25890,(0),null);
var query_values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25890,(1),null);
var current_draft_index = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drafts","drafts",1523624562),new cljs.core.Keyword(null,"current-draft-index","current-draft-index",-2132794597)], null));
var queries = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drafts","drafts",1523624562),new cljs.core.Keyword(null,"drafts-list","drafts-list",1470935679),current_draft_index,new cljs.core.Keyword(null,"queries","queries",1446291995)], null));
var queries1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__25893){
var vec__25894 = p__25893;
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25894,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25894,(1),null);
var existing_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(queries,pos);
if(cljs.core.truth_(existing_query)){
return cljs.core.assoc_in(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos,new cljs.core.Keyword(null,"value","value",305978217)], null),value);
} else {
return cljs.core.assoc_in(acc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"selected-index","selected-index",1735686526),(0)], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,query_values);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drafts","drafts",1523624562),new cljs.core.Keyword(null,"drafts-list","drafts-list",1470935679),current_draft_index,new cljs.core.Keyword(null,"queries","queries",1446291995)], null),queries1)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("prosemirror","set-selected-index","prosemirror/set-selected-index",-1461698861),(function (db,p__25897){
var vec__25898 = p__25897;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25898,(0),null);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25898,(1),null);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25898,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drafts","drafts",1523624562),new cljs.core.Keyword(null,"drafts-list","drafts-list",1470935679),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drafts","drafts",1523624562),new cljs.core.Keyword(null,"current-draft-index","current-draft-index",-2132794597)], null)),new cljs.core.Keyword(null,"queries","queries",1446291995),pos,new cljs.core.Keyword(null,"selected-index","selected-index",1735686526)], null),index);
}));
synchrono.client.prosemirror.suggestions_dropdown = (function synchrono$client$prosemirror$suggestions_dropdown(pos){
var suggestions = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var selected_index = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.suggestion-dropdown","div.suggestion-dropdown",794235469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(0),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.key,"ArrowDown")){
e.preventDefault();

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("prosemirror","set-selected-index","prosemirror/set-selected-index",-1461698861),pos,cljs.core.mod((cljs.core.deref(selected_index) + (1)),cljs.core.count(cljs.core.deref(suggestions)))], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.key,"ArrowUp")){
e.preventDefault();

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("prosemirror","set-selected-index","prosemirror/set-selected-index",-1461698861),pos,cljs.core.mod((cljs.core.deref(selected_index) - (1)),cljs.core.count(cljs.core.deref(suggestions)))], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.key,"Enter")){
e.preventDefault();

var temp__5804__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(suggestions),cljs.core.deref(selected_index),null);
if(cljs.core.truth_(temp__5804__auto__)){
var selected = temp__5804__auto__;
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("prosemirror","insert-suggestion","prosemirror/insert-suggestion",-1093662694),pos,selected], null));
} else {
return null;
}
} else {
return null;
}
}
}
})], null),(function (){var iter__5480__auto__ = (function synchrono$client$prosemirror$suggestions_dropdown_$_iter__25901(s__25902){
return (new cljs.core.LazySeq(null,(function (){
var s__25902__$1 = s__25902;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__25902__$1);
if(temp__5804__auto__){
var s__25902__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25902__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__25902__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__25904 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__25903 = (0);
while(true){
if((i__25903 < size__5479__auto__)){
var vec__25905 = cljs.core._nth(c__5478__auto__,i__25903);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25905,(0),null);
var suggestion = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25905,(1),null);
cljs.core.chunk_append(b__25904,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.suggestion-item","div.suggestion-item",1315622099),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,cljs.core.deref(selected_index)))?"selected":null),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__25903,vec__25905,idx,suggestion,c__5478__auto__,size__5479__auto__,b__25904,s__25902__$2,temp__5804__auto__,suggestions,selected_index){
return (function (e){
e.preventDefault();

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("prosemirror","insert-suggestion","prosemirror/insert-suggestion",-1093662694),pos,suggestion], null));
});})(i__25903,vec__25905,idx,suggestion,c__5478__auto__,size__5479__auto__,b__25904,s__25902__$2,temp__5804__auto__,suggestions,selected_index))
], null),suggestion], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)));

var G__25912 = (i__25903 + (1));
i__25903 = G__25912;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25904),synchrono$client$prosemirror$suggestions_dropdown_$_iter__25901(cljs.core.chunk_rest(s__25902__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25904),null);
}
} else {
var vec__25908 = cljs.core.first(s__25902__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25908,(0),null);
var suggestion = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25908,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.suggestion-item","div.suggestion-item",1315622099),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,cljs.core.deref(selected_index)))?"selected":null),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (vec__25908,idx,suggestion,s__25902__$2,temp__5804__auto__,suggestions,selected_index){
return (function (e){
e.preventDefault();

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("prosemirror","insert-suggestion","prosemirror/insert-suggestion",-1093662694),pos,suggestion], null));
});})(vec__25908,idx,suggestion,s__25902__$2,temp__5804__auto__,suggestions,selected_index))
], null),suggestion], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)),synchrono$client$prosemirror$suggestions_dropdown_$_iter__25901(cljs.core.rest(s__25902__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.deref(suggestions)));
})()], null);
});
synchrono.client.prosemirror.create_query_node_view = (function synchrono$client$prosemirror$create_query_node_view(node,view_pos,view,editor_view){
var dom = document.createElement("span");
var content = document.createElement("span");
var suggestions_container = document.createElement("span");
var root = module$node_modules$react_dom$client.createRoot(suggestions_container);
dom.setAttribute("class","query");

content.setAttribute("class","query-content");

suggestions_container.setAttribute("class","suggestions");

dom.appendChild(content);

dom.appendChild(suggestions_container);

root.render(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"hello"], null)));

return ({"dom": dom, "contentDOM": content, "destroy": (function (){
return root.unmount();
}), "update": (function (node__$1,decorations,innerDecorations){
var pos = (view_pos + (1));
var value = content.textContent();
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("prosemirror","update-queries","prosemirror/update-queries",-44944324),pos,value], null));

return true;
}), "ignoreMutation": (function (record){
return false;
})});
});
synchrono.client.prosemirror.schema_spec = ({"nodes": ({"doc": ({"content": "paragraph+"}), "paragraph": ({"content": "(text|tag|query)*", "parseDOM": [({"tag": "p"})], "toDOM": (function (){
return ["p",(0)];
})}), "text": ({"group": "inline"}), "tag": ({"inline": true, "group": "inline", "content": "text*", "attrs": ({"value": ""}), "atom": true, "parseDOM": [({"tag": "span.tag"})], "toDOM": (function (){
return ["span",({"class": "tag"}),(0)];
})}), "query": ({"inline": true, "group": "inline", "content": "text*", "attrs": ({"value": ""}), "atom": false, "parseDOM": [({"tag": "span.query"})], "toDOM": (function (){
return ["span",({"class": "query"}),(0)];
})})}), "marks": ({"bold": ({"parseDOM": [({"tag": "strong"})], "toDOM": (function (){
return ["strong",(0)];
})}), "italic": ({"parseDOM": [({"tag": "em"})], "toDOM": (function (){
return ["em",(0)];
})}), "link": ({"attrs": ({"href": cljs.core.PersistentArrayMap.EMPTY}), "inclusive": false, "parseDOM": [({"tag": "a", "getAttrs": (function (dom){
return ({"href": dom.getAttribute("href")});
})})], "toDOM": (function (node){
return ["a",({"href": node.attrs.href}),(0)];
})})})});
synchrono.client.prosemirror.my_schema = (new module$node_modules$prosemirror_model$dist$index_cjs.Schema(synchrono.client.prosemirror.schema_spec));
synchrono.client.prosemirror.close_bracket_command = (function synchrono$client$prosemirror$close_bracket_command(state,dispatch){
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
var G__25917 = (d - (1));
d = G__25917;
continue;
}
} else {
return null;
}
break;
}
})();
var tag_node_type = synchrono.client.prosemirror.my_schema.nodes.tag;
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
var query_end_pos = resolved_pos.after(resolved_pos.depth);
var raw_text = doc.textBetween(query_pos,from,"");
var bracketed_text = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(raw_text),"]"].join('');
var text_node = synchrono.client.prosemirror.my_schema.text(bracketed_text);
var tag_node = tag_node_type.create(({"value": bracketed_text}),[text_node]);
var tr2 = tr.replaceWith((query_pos - (1)),from,tag_node).setSelection((new module$node_modules$prosemirror_state$dist$index_cjs.TextSelection(tr.doc.resolve(((query_pos + ((bracketed_text).length)) + (2))))));
(dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(tr2) : dispatch.call(null, tr2));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nostr","search","nostr/search",1468243294),raw_text], null));

return true;
} else {
var tr2 = tr.insertText("]",from);
(dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(tr2) : dispatch.call(null, tr2));

return true;
}
}
});
synchrono.client.prosemirror.open_bracket_command = (function synchrono$client$prosemirror$open_bracket_command(state,dispatch){
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
var query_node_type = synchrono.client.prosemirror.my_schema.nodes.query;
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
var pre_node = synchrono.client.prosemirror.my_schema.text(" ");
var tr2 = tr1.insert((from - (1)),[pre_node]);
var text_node = synchrono.client.prosemirror.my_schema.text("[[");
var query_node = query_node_type.create(({"value": "[["}),[text_node]);
var tr3 = tr2.replaceWith(from,from,query_node);
var space_node = synchrono.client.prosemirror.my_schema.text(" ");
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
synchrono.client.prosemirror.escape_query_command = (function synchrono$client$prosemirror$escape_query_command(state,dispatch){
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
var G__25918 = (d - (1));
d = G__25918;
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

return true;
} else {
return false;
}
}
});
synchrono.client.prosemirror.tab_query_command = (function synchrono$client$prosemirror$tab_query_command(state,dispatch){
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
var G__25919 = (d - (1));
d = G__25919;
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
var text_node = synchrono.client.prosemirror.my_schema.text(clean_text);
var tr2 = tr.replaceWith(query_pos,query_end_pos,text_node).setSelection((new module$node_modules$prosemirror_state$dist$index_cjs.TextSelection(tr.doc.resolve((function (){var x__5087__auto__ = query_pos;
var y__5088__auto__ = (query_pos + ((clean_text).length));
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})()))));
(dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(tr2) : dispatch.call(null, tr2));

return true;
} else {
return false;
}
}
});
synchrono.client.prosemirror.make_keymap = (function synchrono$client$prosemirror$make_keymap(){
return module$node_modules$prosemirror_keymap$dist$index_cjs.keymap(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, ["[",synchrono.client.prosemirror.open_bracket_command,"]",synchrono.client.prosemirror.close_bracket_command,"Escape",synchrono.client.prosemirror.escape_query_command,"Tab",synchrono.client.prosemirror.tab_query_command], null)));
});
synchrono.client.prosemirror.base_plugins = [module$node_modules$prosemirror_history$dist$index_cjs.history(),synchrono.client.prosemirror.make_keymap(),module$node_modules$prosemirror_keymap$dist$index_cjs.keymap(module$node_modules$prosemirror_commands$dist$index_cjs.baseKeymap)];
synchrono.client.prosemirror.create_initial_doc = (function synchrono$client$prosemirror$create_initial_doc(){
var paragraph_type = synchrono.client.prosemirror.my_schema.nodes.paragraph;
var doc_type = synchrono.client.prosemirror.my_schema.nodes.doc;
var empty_paragraph = paragraph_type.create();
var doc = doc_type.create(({"content": [empty_paragraph]}));
return doc;
});
synchrono.client.prosemirror.create_editor_state = (function synchrono$client$prosemirror$create_editor_state(){
var doc = synchrono.client.prosemirror.create_initial_doc();
return module$node_modules$prosemirror_state$dist$index_cjs.EditorState.create(({"schema": synchrono.client.prosemirror.my_schema, "doc": doc, "plugins": synchrono.client.prosemirror.base_plugins}));
});
synchrono.client.prosemirror.create_editor_view = (function synchrono$client$prosemirror$create_editor_view(dom_node,state,dispatch_transaction){
return (new module$node_modules$prosemirror_view$dist$index_cjs.EditorView(dom_node,({"state": state, "dispatchTransaction": dispatch_transaction, "nodeViews": ({"query": synchrono.client.prosemirror.create_query_node_view}), "handleDOMEvents": ({"focus": (function (view,event){
return true;
}), "blur": (function (view,event){
return true;
})}), "editable": (function (){
return true;
})})));
});
synchrono.client.prosemirror.editor = (function synchrono$client$prosemirror$editor(){
var editor_ref = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var container_ref = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
var temp__5804__auto__ = cljs.core.deref(container_ref);
if(cljs.core.truth_(temp__5804__auto__)){
var dom_node = temp__5804__auto__;
var initial_state = synchrono.client.prosemirror.create_editor_state();
var dispatch_fn = (function (tr){
var temp__5804__auto____$1 = cljs.core.deref(editor_ref);
if(cljs.core.truth_(temp__5804__auto____$1)){
var view = temp__5804__auto____$1;
var next_state = view.state.apply(tr);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"synchrono.client.prosemirror","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/prosemirror.cljs",381,35,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["next-state",next_state.doc], null);
}),null)),null,(789),null);

return view.updateState(next_state);
} else {
return null;
}
});
var view = synchrono.client.prosemirror.create_editor_view(dom_node,initial_state,dispatch_fn);
return cljs.core.reset_BANG_(editor_ref,view);
} else {
return null;
}
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (){
var temp__5804__auto__ = cljs.core.deref(editor_ref);
if(cljs.core.truth_(temp__5804__auto__)){
var view = temp__5804__auto__;
return view.destroy();
} else {
return null;
}
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hello","div.hello",-1048739505),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__25911_SHARP_){
return cljs.core.reset_BANG_(container_ref,p1__25911_SHARP_);
})], null)], null);
})], null));
});

//# sourceMappingURL=synchrono.client.prosemirror.js.map
