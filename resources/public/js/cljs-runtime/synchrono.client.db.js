goog.provide('synchrono.client.db');
synchrono.client.db.default_db = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"geolocation","geolocation",232447107),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"event-id->relays","event-id->relays",1431421128),new cljs.core.Keyword(null,"encrypted-private-key","encrypted-private-key",1069899594),new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"keypair-menu-open?","keypair-menu-open?",1608882701),new cljs.core.Keyword(null,"menu-open?","menu-open?",-1909849203),new cljs.core.Keyword("editor","view","editor/view",2086044241),new cljs.core.Keyword(null,"relay->metadata","relay->metadata",1398253521),new cljs.core.Keyword(null,"event-id->event","event-id->event",-91447725),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"confirm-password","confirm-password",1576165176),new cljs.core.Keyword(null,"kind->event-ids","kind->event-ids",-76054375),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"private-key","private-key",426483388),new cljs.core.Keyword(null,"public-key","public-key",-2106850051),new cljs.core.Keyword(null,"new-relay","new-relay",1766740126),new cljs.core.Keyword(null,"generating-key?","generating-key?",356381343)],[cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/"], null),null,"",cljs.core.PersistentArrayMap.EMPTY,null,null,false,false,null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,(1),"",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY,null,null,"",false]);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"init-db","init-db",1595181278),(function (){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),synchrono.client.db.default_db,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-keypair-from-local-storage","load-keypair-from-local-storage",-1048621938)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-geolocation-from-local-storage","load-geolocation-from-local-storage",-1980838284)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nostr","subscribe-many","nostr/subscribe-many",-1663986525),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kinds","kinds",-294501889),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.Keyword(null,"limit","limit",-1355822363),(10)], null),false], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"save-keypair-to-local-storage","save-keypair-to-local-storage",1078916815),(function (p__21399,_){
var map__21400 = p__21399;
var map__21400__$1 = cljs.core.__destructure_map(map__21400);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21400__$1,new cljs.core.Keyword(null,"db","db",993250759));
localStorage.setItem("public-key",new cljs.core.Keyword(null,"public-key","public-key",-2106850051).cljs$core$IFn$_invoke$arity$1(db));

localStorage.setItem("encrypted-private-key",new cljs.core.Keyword(null,"encrypted-private-key","encrypted-private-key",1069899594).cljs$core$IFn$_invoke$arity$1(db));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clear-keypair-from-local-storage","clear-keypair-from-local-storage",-1093988865),(function (p__21401,_){
var map__21402 = p__21401;
var map__21402__$1 = cljs.core.__destructure_map(map__21402);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21402__$1,new cljs.core.Keyword(null,"db","db",993250759));
localStorage.removeItem("public-key");

localStorage.removeItem("encrypted-private-key");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"save-geolocation-to-local-storage","save-geolocation-to-local-storage",1106090665),(function (_,p__21403){
var vec__21404 = p__21403;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21404,(0),null);
var geolocation = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21404,(1),null);
localStorage.setItem("geolocation",JSON.stringify(cljs.core.clj__GT_js(geolocation)));

return cljs.core.PersistentArrayMap.EMPTY;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"load-keypair-from-local-storage","load-keypair-from-local-storage",-1048621938),(function (p__21407,_){
var map__21408 = p__21407;
var map__21408__$1 = cljs.core.__destructure_map(map__21408);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21408__$1,new cljs.core.Keyword(null,"db","db",993250759));
var public_key = localStorage.getItem("public-key");
var encrypted_private_key = localStorage.getItem("encrypted-private-key");
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"public-key","public-key",-2106850051),public_key),new cljs.core.Keyword(null,"encrypted-private-key","encrypted-private-key",1069899594),encrypted_private_key)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"load-geolocation-from-local-storage","load-geolocation-from-local-storage",-1980838284),(function (p__21409,_){
var map__21410 = p__21409;
var map__21410__$1 = cljs.core.__destructure_map(map__21410);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21410__$1,new cljs.core.Keyword(null,"db","db",993250759));
var geolocation = (function (){var G__21411 = localStorage.getItem("geolocation");
var G__21411__$1 = (((G__21411 == null))?null:JSON.parse(G__21411));
if((G__21411__$1 == null)){
return null;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(G__21411__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}
})();
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"geolocation","geolocation",232447107),geolocation)], null);
}));

//# sourceMappingURL=synchrono.client.db.js.map
