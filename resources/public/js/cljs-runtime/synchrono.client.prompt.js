goog.provide('synchrono.client.prompt');
synchrono.client.prompt.prompt = (function synchrono$client$prompt$prompt(){
var prompt_open_QMARK_ = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prompt-open?","prompt-open?",-1917124680)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.prompt","div.prompt",1806740021),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.deref(prompt_open_QMARK_))?null:"closed")], null),"prompt"], null);
});
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"prompt-open?","prompt-open?",-1917124680),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"prompt-open?","prompt-open?",-1917124680)], null));
})], 0));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-prompt","toggle-prompt",-1383573642),(function (db,p__16256){
var vec__16257 = p__16256;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16257,(0),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"prompt-open?","prompt-open?",-1917124680)], null),cljs.core.not);
}));

//# sourceMappingURL=synchrono.client.prompt.js.map
