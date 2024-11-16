goog.provide('synchrono.client.storage');
synchrono.client.storage.default_app_db = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"message","message",-406056002),null,new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"current-route","current-route",2067529448),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword(null,"menu-open?","menu-open?",-1909849203),false,new cljs.core.Keyword(null,"prompt-open?","prompt-open?",-1917124680),false], null);
synchrono.client.storage.default_lightning_db = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"provider","provider",-302056900),null,new cljs.core.Keyword(null,"connecting?","connecting?",174124997),false,new cljs.core.Keyword(null,"last-payment","last-payment",-858288836),null], null);
synchrono.client.storage.default_keys_db = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"removing-keypair-name","removing-keypair-name",-1456624512),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"importing-keypair?","importing-keypair?",-1256617492),new cljs.core.Keyword(null,"current-keypair-private-key","current-keypair-private-key",-609513652),new cljs.core.Keyword(null,"generating-keypair?","generating-keypair?",413223661),new cljs.core.Keyword(null,"identification","identification",-1342325264),new cljs.core.Keyword(null,"unlocking-keypair-name","unlocking-keypair-name",1543333395),new cljs.core.Keyword(null,"confirm-password","confirm-password",1576165176),new cljs.core.Keyword(null,"show-password?","show-password?",1088357593),new cljs.core.Keyword(null,"show-confirm-password?","show-confirm-password?",-189122405),new cljs.core.Keyword(null,"current-keypair-name","current-keypair-name",-1929466597),new cljs.core.Keyword(null,"private-key","private-key",426483388),new cljs.core.Keyword(null,"public-key","public-key",-2106850051),new cljs.core.Keyword(null,"keypairs-list","keypairs-list",404972286)],[null,"","",false,null,false,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"captcha-verified?","captcha-verified?",-1704341755),false,new cljs.core.Keyword(null,"email-verified?","email-verified?",1198681558),false,new cljs.core.Keyword(null,"mobile-verified?","mobile-verified?",-1520204754),false], null),null,"",false,false,"default","","",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"default",new cljs.core.Keyword(null,"public-key","public-key",-2106850051),null,new cljs.core.Keyword(null,"encrypted-private-key","encrypted-private-key",1069899594),null], null)], null)]);
synchrono.client.storage.default_relays_db = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"relays-list","relays-list",-1087282965),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),"ws://localhost:3000/ws"], null)], null),new cljs.core.Keyword(null,"new-relay-url","new-relay-url",-491255517),"",new cljs.core.Keyword(null,"removing-relay-url","removing-relay-url",714387472),null], null);
synchrono.client.storage.default_events_db = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"events-by-id","events-by-id",-359530454),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"event-ids-by-kind","event-ids-by-kind",-2135185994),cljs.core.PersistentArrayMap.EMPTY], null);
synchrono.client.storage.default_drafts_db = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"selection","selection",975998651),null,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"query","query",-1288509510),"",new cljs.core.Keyword(null,"reset?","reset?",-1051875415),false], null);
synchrono.client.storage.default_db = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"app","app",-560961707),synchrono.client.storage.default_app_db,new cljs.core.Keyword(null,"lightning","lightning",107733737),synchrono.client.storage.default_lightning_db,new cljs.core.Keyword(null,"keys","keys",1068423698),synchrono.client.storage.default_keys_db,new cljs.core.Keyword(null,"relays","relays",390472162),synchrono.client.storage.default_relays_db,new cljs.core.Keyword(null,"events","events",1792552201),synchrono.client.storage.default_events_db,new cljs.core.Keyword(null,"drafts","drafts",1523624562),synchrono.client.storage.default_drafts_db], null);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),synchrono.client.storage.default_db,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-keys-and-relays-from-local-storage","load-keys-and-relays-from-local-storage",-88428606)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"load-keys-and-relays-from-local-storage","load-keys-and-relays-from-local-storage",-88428606),(function (p__16247,_){
var map__16248 = p__16247;
var map__16248__$1 = cljs.core.__destructure_map(map__16248);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16248__$1,new cljs.core.Keyword(null,"db","db",993250759));
var stored_keypairs = (function (){try{var parsed = JSON.parse(localStorage.getItem("keypairs"));
var parsed_array = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(parsed,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
return parsed_array;
}catch (e16249){var ___$1 = e16249;
return cljs.core.PersistentVector.EMPTY;
}})();
var stored_relays = (function (){try{var parsed = JSON.parse(localStorage.getItem("relays"));
var parsed_array = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(parsed,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
if(cljs.core.seq_QMARK_(parsed_array)){
return parsed_array;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),"/"], null)], null);
}
}catch (e16250){var ___$1 = e16250;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),"/"], null)], null);
}})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Keyword(null,"keypairs-list","keypairs-list",404972286)], null),stored_keypairs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"relays-list","relays-list",-1087282965)], null),stored_relays),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nostr","fetch-relay-metadata","nostr/fetch-relay-metadata",1896641717)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nostr","subscribe-many","nostr/subscribe-many",-1663986525),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null)], null),false], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"save-keys-to-local-storage","save-keys-to-local-storage",-908592732),(function (p__16251,_){
var map__16252 = p__16251;
var map__16252__$1 = cljs.core.__destructure_map(map__16252);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16252__$1,new cljs.core.Keyword(null,"db","db",993250759));
var keypairs = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Keyword(null,"keypairs-list","keypairs-list",404972286)], null));
localStorage.setItem("keypairs",JSON.stringify(cljs.core.clj__GT_js(keypairs)));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"save-relays-to-local-storage","save-relays-to-local-storage",66626631),(function (p__16253,_){
var map__16254 = p__16253;
var map__16254__$1 = cljs.core.__destructure_map(map__16254);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16254__$1,new cljs.core.Keyword(null,"db","db",993250759));
var relays = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"relays-list","relays-list",-1087282965)], null));
localStorage.setItem("relays",JSON.stringify(cljs.core.clj__GT_js(relays)));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"message","message",-406056002)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"error","error",-978969032)], null));
})], 0));

//# sourceMappingURL=synchrono.client.storage.js.map
