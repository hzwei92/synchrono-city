goog.provide('synchrono.client.relays');
synchrono.client.relays.relay_item = (function synchrono$client$relays$relay_item(relay){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relay-item","div.relay-item",1335800495),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.title","div.title",-1929547732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bold","span.bold",636457745),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(relay)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.faint","div.row.faint",1723537436),new cljs.core.Keyword(null,"api-url","api-url",2037917643).cljs$core$IFn$_invoke$arity$1(relay)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(relay)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),["Initial Credit Balance: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"initial-credit-balance-sat","initial-credit-balance-sat",-500768184).cljs$core$IFn$_invoke$arity$1(relay).toLocaleString())," satoshis"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),["Minimum Withdrawal: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"minimum-withdrawal-sat","minimum-withdrawal-sat",-752266317).cljs$core$IFn$_invoke$arity$1(relay))," satoshis"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),["Daily Service Fee: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"daily-fee-sat","daily-fee-sat",1928281526).cljs$core$IFn$_invoke$arity$1(relay))," satoshis"].join('')], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"credit-balance-sat","credit-balance-sat",-2064900884).cljs$core$IFn$_invoke$arity$1(relay))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Your credit balance: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bold","span.bold",636457745),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-credit-balance-sat","current-credit-balance-sat",-891620765).cljs$core$IFn$_invoke$arity$1(relay).toLocaleString())," satoshis"].join('')], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.action-button","button.action-button",-642678460),"Modify Contract"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.action-button","button.action-button",-642678460),"Buy Contract"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.action-button","button.action-button",-642678460),"Read Today"], null)], null)], null);
});
synchrono.client.relays.relays = (function synchrono$client$relays$relays(){
var relays = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162)], null));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["relays",cljs.core.deref(relays)], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["relays length",cljs.core.count(cljs.core.deref(relays))], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["relays first",cljs.core.first(cljs.core.deref(relays))], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["relays first keys",cljs.core.keys(cljs.core.first(cljs.core.deref(relays)))], 0));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relays","div.relays",642823625),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.title","div.title",-1929547732),"relays"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function synchrono$client$relays$relays_$_iter__14981(s__14982){
return (new cljs.core.LazySeq(null,(function (){
var s__14982__$1 = s__14982;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__14982__$1);
if(temp__5804__auto__){
var s__14982__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14982__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__14982__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__14984 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__14983 = (0);
while(true){
if((i__14983 < size__5479__auto__)){
var relay = cljs.core._nth(c__5478__auto__,i__14983);
cljs.core.chunk_append(b__14984,synchrono.client.relays.relay_item(relay));

var G__14991 = (i__14983 + (1));
i__14983 = G__14991;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14984),synchrono$client$relays$relays_$_iter__14981(cljs.core.chunk_rest(s__14982__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14984),null);
}
} else {
var relay = cljs.core.first(s__14982__$2);
return cljs.core.cons(synchrono.client.relays.relay_item(relay),synchrono$client$relays$relays_$_iter__14981(cljs.core.rest(s__14982__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.deref(relays));
})())], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-current-relay-api-url","set-current-relay-api-url",124899369),(function (p__14985,p__14986){
var map__14987 = p__14985;
var map__14987__$1 = cljs.core.__destructure_map(map__14987);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14987__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__14988 = p__14986;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14988,(0),null);
var api_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14988,(1),null);
localStorage.setItem("current-relay-api-url",api_url);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"relays","relays",390472162),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"relays-list","relays-list",-1087282965)], null));
})], 0));

//# sourceMappingURL=synchrono.client.relays.js.map
