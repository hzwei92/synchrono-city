goog.provide('synchrono.client.draft');
var module$node_modules$prosemirror_model$dist$index_cjs=shadow.js.require("module$node_modules$prosemirror_model$dist$index_cjs", {});
synchrono.client.draft.format_node_content = (function synchrono$client$draft$format_node_content(node){
var G__16898 = node.type.name;
switch (G__16898) {
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
synchrono.client.draft.get_formatted_content = (function synchrono$client$draft$get_formatted_content(doc){
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
fragments.push(synchrono.client.draft.format_node_content(node));

return false;
} else {
return true;

}
}
}));

return fragments.join("");
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("draft","publish","draft/publish",-1618591235),(function (p__16899,_){
var map__16900 = p__16899;
var map__16900__$1 = cljs.core.__destructure_map(map__16900);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16900__$1,new cljs.core.Keyword(null,"db","db",993250759));
var doc = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drafts","drafts",1523624562),new cljs.core.Keyword(null,"doc","doc",1913296891)], null));
var content = synchrono.client.draft.get_formatted_content(module$node_modules$prosemirror_model$dist$index_cjs.Node.fromJSON(synchrono.client.schema.schema,cljs.core.clj__GT_js(doc)));
var tags = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drafts","drafts",1523624562),new cljs.core.Keyword(null,"tags","tags",1771418977)], null));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drafts","drafts",1523624562),new cljs.core.Keyword(null,"reset?","reset?",-1051875415)], null),true),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nostr","publish","nostr/publish",-1609920306),(1),content,tags], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("draft","set-doc","draft/set-doc",-707461968),(function (db,p__16901){
var vec__16902 = p__16901;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16902,(0),null);
var doc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16902,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drafts","drafts",1523624562),new cljs.core.Keyword(null,"doc","doc",1913296891)], null),doc);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("draft","set-selection","draft/set-selection",905211105),(function (db,p__16905){
var vec__16906 = p__16905;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16906,(0),null);
var selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16906,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drafts","drafts",1523624562),new cljs.core.Keyword(null,"selection","selection",975998651)], null),selection);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("draft","set-query","draft/set-query",-1307035925),(function (db,p__16909){
var vec__16910 = p__16909;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16910,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16910,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drafts","drafts",1523624562),new cljs.core.Keyword(null,"query","query",-1288509510)], null),text);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("draft","set-tags","draft/set-tags",-1765713965),(function (db,p__16913){
var vec__16914 = p__16913;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16914,(0),null);
var tags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16914,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drafts","drafts",1523624562),new cljs.core.Keyword(null,"tags","tags",1771418977)], null),tags);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("draft","reset","draft/reset",-706122565),(function (db,_){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drafts","drafts",1523624562),new cljs.core.Keyword(null,"reset?","reset?",-1051875415)], null),false);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("draft","query","draft/query",-1327864999),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drafts","drafts",1523624562),new cljs.core.Keyword(null,"query","query",-1288509510)], null));
})], 0));
synchrono.client.draft.draft_view = (function synchrono$client$draft$draft_view(){
var query = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("draft","query","draft/query",-1327864999)], null));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.draft","div.draft",1907990435),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [synchrono.client.editor.editor], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.draft-buttons","div.draft-buttons",-200580917),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.nostr-event-button","button.nostr-event-button",1967092380),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("draft","publish","draft/publish",-1618591235)], null));
})], null),"Publish"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.draft-options","div.draft-options",-1511340408),["all mine query: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(query))," "].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [synchrono.client.surveyor.surveyor], null)], null);
});

//# sourceMappingURL=synchrono.client.draft.js.map
