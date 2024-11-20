goog.provide('synchrono.client.lens');
synchrono.client.lens.lens = (function synchrono$client$lens$lens(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.lens","div.lens",-366859143),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [synchrono.client.query.query_editor], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [synchrono.client.recents.recents], null)], null);
});
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"query","query",-1288509510),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-query","set-query",-898596586),(function (p__17642,p__17643){
var map__17644 = p__17642;
var map__17644__$1 = cljs.core.__destructure_map(map__17644);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17644__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__17645 = p__17643;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17645,(0),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17645,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"query","query",-1288509510),query)], null);
}));

//# sourceMappingURL=synchrono.client.lens.js.map
