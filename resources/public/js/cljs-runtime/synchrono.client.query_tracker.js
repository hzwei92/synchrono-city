goog.provide('synchrono.client.query_tracker');
var module$node_modules$prosemirror_state$dist$index_cjs=shadow.js.require("module$node_modules$prosemirror_state$dist$index_cjs", {});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"queries-updated","queries-updated",1510098683),(function (db,p__26095){
var vec__26096 = p__26095;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26096,(0),null);
var queries = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26096,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drafts","drafts",1523624562),new cljs.core.Keyword(null,"queries","queries",1446291995)], null),queries);
}));
synchrono.client.query_tracker.extract_queries = (function synchrono$client$query_tracker$extract_queries(doc){
var queries = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
doc.descendants((function (node,pos){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"synchrono.client.query-tracker","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/query_tracker.cljs",17,21,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Node:",node,"Pos:",pos], null);
}),null)),null,(848),null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node.type,synchrono.client.schema.schema.query)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(queries,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(node.attrs["value"]),new cljs.core.Keyword(null,"pos","pos",-864607220),pos], null));
} else {
}

return true;
}));

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"synchrono.client.query-tracker","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/query_tracker.cljs",22,5,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Extracted Queries:",cljs.core.deref(queries)], null);
}),null)),null,(849),null);

return cljs.core.deref(queries);
});
synchrono.client.query_tracker.query_tracker_plugin = (new module$node_modules$prosemirror_state$dist$index_cjs.Plugin(({"state": ({"init": (function (config){
return synchrono.client.query_tracker.extract_queries(config.doc);
}), "apply": (function (tr,plugin_state){
var new_doc = tr.doc;
var queries = synchrono.client.query_tracker.extract_queries(new_doc);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"synchrono.client.query-tracker","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/query_tracker.cljs",34,25,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Updated Queries:",queries], null);
}),null)),null,(850),null);

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queries-updated","queries-updated",1510098683),queries], null));

return queries;
})})})));

//# sourceMappingURL=synchrono.client.query_tracker.js.map
