goog.provide('synchrono.client.relays');
synchrono.client.relays.relays = (function synchrono$client$relays$relays(){
var relays = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relays","div.relays",642823625),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.title","div.title",-1929547732),"relays"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__5480__auto__ = (function synchrono$client$relays$relays_$_iter__13962(s__13963){
return (new cljs.core.LazySeq(null,(function (){
var s__13963__$1 = s__13963;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13963__$1);
if(temp__5804__auto__){
var s__13963__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13963__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__13963__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__13965 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__13964 = (0);
while(true){
if((i__13964 < size__5479__auto__)){
var relay = cljs.core._nth(c__5478__auto__,i__13964);
cljs.core.chunk_append(b__13965,cljs.core.with_meta(new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relay-item","div.relay-item",1335800495),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Name: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bold","span.bold",636457745),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(relay)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Description: ",new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(relay)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"API URL: ",new cljs.core.Keyword(null,"api-url","api-url",2037917643).cljs$core$IFn$_invoke$arity$1(relay)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"API Key: ",new cljs.core.Keyword(null,"api-key","api-key",1037904031).cljs$core$IFn$_invoke$arity$1(relay)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Lightning Public Key: ",new cljs.core.Keyword(null,"lightning_public_key","lightning_public_key",-1452486734).cljs$core$IFn$_invoke$arity$1(relay)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Initial Balance (sats): ",new cljs.core.Keyword(null,"initial_balance_sat","initial_balance_sat",-2107314650).cljs$core$IFn$_invoke$arity$1(relay)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Minimum Balance (sats): ",new cljs.core.Keyword(null,"minimum_balance_sat","minimum_balance_sat",1844785826).cljs$core$IFn$_invoke$arity$1(relay)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Daily Usage Price (sats): ",new cljs.core.Keyword(null,"daily_usage_price_sat","daily_usage_price_sat",-654496661).cljs$core$IFn$_invoke$arity$1(relay)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Current Balance (sats): ",new cljs.core.Keyword(null,"balance","balance",418967409).cljs$core$IFn$_invoke$arity$1(relay)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Active: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(relay))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Captcha Required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"captcha_required","captcha_required",-1814420545).cljs$core$IFn$_invoke$arity$1(relay))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Email Required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"email_required","email_required",-181930063).cljs$core$IFn$_invoke$arity$1(relay))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Mobile Required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mobile_required","mobile_required",-1503783663).cljs$core$IFn$_invoke$arity$1(relay))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Timezone: ",new cljs.core.Keyword(null,"timezone","timezone",1831928099).cljs$core$IFn$_invoke$arity$1(relay)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"api-url","api-url",2037917643).cljs$core$IFn$_invoke$arity$1(relay)], null)));

var G__13972 = (i__13964 + (1));
i__13964 = G__13972;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13965),synchrono$client$relays$relays_$_iter__13962(cljs.core.chunk_rest(s__13963__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13965),null);
}
} else {
var relay = cljs.core.first(s__13963__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relay-item","div.relay-item",1335800495),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Name: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bold","span.bold",636457745),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(relay)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Description: ",new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(relay)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"API URL: ",new cljs.core.Keyword(null,"api-url","api-url",2037917643).cljs$core$IFn$_invoke$arity$1(relay)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"API Key: ",new cljs.core.Keyword(null,"api-key","api-key",1037904031).cljs$core$IFn$_invoke$arity$1(relay)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Lightning Public Key: ",new cljs.core.Keyword(null,"lightning_public_key","lightning_public_key",-1452486734).cljs$core$IFn$_invoke$arity$1(relay)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Initial Balance (sats): ",new cljs.core.Keyword(null,"initial_balance_sat","initial_balance_sat",-2107314650).cljs$core$IFn$_invoke$arity$1(relay)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Minimum Balance (sats): ",new cljs.core.Keyword(null,"minimum_balance_sat","minimum_balance_sat",1844785826).cljs$core$IFn$_invoke$arity$1(relay)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Daily Usage Price (sats): ",new cljs.core.Keyword(null,"daily_usage_price_sat","daily_usage_price_sat",-654496661).cljs$core$IFn$_invoke$arity$1(relay)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Current Balance (sats): ",new cljs.core.Keyword(null,"balance","balance",418967409).cljs$core$IFn$_invoke$arity$1(relay)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Active: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(relay))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Captcha Required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"captcha_required","captcha_required",-1814420545).cljs$core$IFn$_invoke$arity$1(relay))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Email Required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"email_required","email_required",-181930063).cljs$core$IFn$_invoke$arity$1(relay))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Mobile Required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mobile_required","mobile_required",-1503783663).cljs$core$IFn$_invoke$arity$1(relay))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Timezone: ",new cljs.core.Keyword(null,"timezone","timezone",1831928099).cljs$core$IFn$_invoke$arity$1(relay)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"api-url","api-url",2037917643).cljs$core$IFn$_invoke$arity$1(relay)], null)),synchrono$client$relays$relays_$_iter__13962(cljs.core.rest(s__13963__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.deref(relays));
})()], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-current-relay-api-url","set-current-relay-api-url",124899369),(function (p__13966,p__13967){
var map__13968 = p__13966;
var map__13968__$1 = cljs.core.__destructure_map(map__13968);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13968__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__13969 = p__13967;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13969,(0),null);
var api_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13969,(1),null);
localStorage.setItem("current-relay-api-url",api_url);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"relays","relays",390472162),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"relays-list","relays-list",-1087282965)], null));
})], 0));

//# sourceMappingURL=synchrono.client.relays.js.map
