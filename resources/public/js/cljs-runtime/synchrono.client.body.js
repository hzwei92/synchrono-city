goog.provide('synchrono.client.body');
synchrono.client.body.body = (function synchrono$client$body$body(){
var current_route = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-route","current-route",2067529448)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.body","div.body",-96313067),(function (){var G__13828 = cljs.core.deref(current_route);
var G__13828__$1 = (((G__13828 instanceof cljs.core.Keyword))?G__13828.fqn:null);
switch (G__13828__$1) {
case "about":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [synchrono.client.about.about], null);

break;
case "keys":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [synchrono.client.keys.keys_view], null);

break;
case "relays":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [synchrono.client.relays.relays], null);

break;
case "write":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [synchrono.client.write.write], null);

break;
case "read":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [synchrono.client.read.read], null);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [synchrono.client.about.about], null);

}
})()], null);
});
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"current-route","current-route",2067529448),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"current-route","current-route",2067529448)], null));
})], 0));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-current-route","set-current-route",-154604093),(function (db,p__13830){
var vec__13831 = p__13830;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13831,(0),null);
var route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13831,(1),null);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"current-route","current-route",2067529448)], null),route),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"menu-open?","menu-open?",-1909849203)], null),false);
}));

//# sourceMappingURL=synchrono.client.body.js.map
