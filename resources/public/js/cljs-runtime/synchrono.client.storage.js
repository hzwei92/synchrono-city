goog.provide('synchrono.client.storage');
synchrono.client.storage.default_app_db = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"posting","posting",919785887),false,new cljs.core.Keyword(null,"getting","getting",-1040567837),false,new cljs.core.Keyword(null,"current-route","current-route",2067529448),new cljs.core.Keyword(null,"about","about",1423892543),new cljs.core.Keyword(null,"menu-open?","menu-open?",-1909849203),false], null);
synchrono.client.storage.default_keys_db = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"clearing-keypair-name","clearing-keypair-name",-808617306),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"importing-keypair?","importing-keypair?",-1256617492),new cljs.core.Keyword(null,"current-keypair-private-key","current-keypair-private-key",-609513652),new cljs.core.Keyword(null,"generating-keypair?","generating-keypair?",413223661),new cljs.core.Keyword(null,"unlocking-keypair-name","unlocking-keypair-name",1543333395),new cljs.core.Keyword(null,"confirm-password","confirm-password",1576165176),new cljs.core.Keyword(null,"show-password?","show-password?",1088357593),new cljs.core.Keyword(null,"show-confirm-password?","show-confirm-password?",-189122405),new cljs.core.Keyword(null,"current-keypair-name","current-keypair-name",-1929466597),new cljs.core.Keyword(null,"private-key","private-key",426483388),new cljs.core.Keyword(null,"public-key","public-key",-2106850051),new cljs.core.Keyword(null,"keypairs-list","keypairs-list",404972286)],[null,"","",false,null,false,null,"",false,false,"default","","",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"default",new cljs.core.Keyword(null,"public-key","public-key",-2106850051),null,new cljs.core.Keyword(null,"encrypted-private-key","encrypted-private-key",1069899594),null], null)], null)]);
synchrono.client.storage.default_relays_db = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"relays-list","relays-list",-1087282965),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"active?","active?",459499776),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"minimum_balance_sat","minimum_balance_sat",1844785826),new cljs.core.Keyword(null,"timezone","timezone",1831928099),new cljs.core.Keyword(null,"posts-by-id","posts-by-id",-1060565787),new cljs.core.Keyword(null,"initial_balance_sat","initial_balance_sat",-2107314650),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"daily_usage_price_sat","daily_usage_price_sat",-654496661),new cljs.core.Keyword(null,"api-url","api-url",2037917643),new cljs.core.Keyword(null,"mobile_required","mobile_required",-1503783663),new cljs.core.Keyword(null,"balance","balance",418967409),new cljs.core.Keyword(null,"email_required","email_required",-181930063),new cljs.core.Keyword(null,"lightning_public_key","lightning_public_key",-1452486734),new cljs.core.Keyword(null,"post-ids-by-date","post-ids-by-date",-839196171),new cljs.core.Keyword(null,"api-key","api-key",1037904031),new cljs.core.Keyword(null,"captcha_required","captcha_required",-1814420545)],[false,"open source nostr relay",(70),"UTC-08:00",cljs.core.PersistentArrayMap.EMPTY,(10000),"synchrono.city",(10),"https://synchrono.city",false,(0),false,null,cljs.core.PersistentArrayMap.EMPTY,"",false])], null),new cljs.core.Keyword(null,"current-relay-api-url","current-relay-api-url",1811280491),"https://synchrono.city"], null);
synchrono.client.storage.default_posts_db = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"post-content","post-content",1823558267),""], null);
synchrono.client.storage.default_db = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"app","app",-560961707),synchrono.client.storage.default_app_db,new cljs.core.Keyword(null,"keys","keys",1068423698),synchrono.client.storage.default_keys_db,new cljs.core.Keyword(null,"relays","relays",390472162),synchrono.client.storage.default_relays_db,new cljs.core.Keyword(null,"posts","posts",760043164),synchrono.client.storage.default_posts_db], null);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),synchrono.client.storage.default_db,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-keys-from-local-storage","load-keys-from-local-storage",-1778816297)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-relays-from-local-storage","load-relays-from-local-storage",-520981764)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"load-keys-from-local-storage","load-keys-from-local-storage",-1778816297),(function (p__13546,_){
var map__13547 = p__13546;
var map__13547__$1 = cljs.core.__destructure_map(map__13547);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13547__$1,new cljs.core.Keyword(null,"db","db",993250759));
var stored_keypairs = (function (){try{var parsed = JSON.parse(localStorage.getItem("keypairs"));
var parsed_array = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(parsed,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
if(cljs.core.sequential_QMARK_(parsed_array)){
return cljs.core.filterv((function (p1__13545_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(cljs.core.first(new cljs.core.Keyword(null,"keypairs-list","keypairs-list",404972286).cljs$core$IFn$_invoke$arity$1(synchrono.client.storage.default_keys_db)))),cljs.core.set(cljs.core.keys(p1__13545_SHARP_)));
}),parsed_array);
} else {
return cljs.core.PersistentVector.EMPTY;
}
}catch (e13548){var ___$1 = e13548;
return cljs.core.PersistentVector.EMPTY;
}})();
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Keyword(null,"keypairs-list","keypairs-list",404972286)], null),stored_keypairs)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"save-keys-to-local-storage","save-keys-to-local-storage",-908592732),(function (p__13549,_){
var map__13550 = p__13549;
var map__13550__$1 = cljs.core.__destructure_map(map__13550);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13550__$1,new cljs.core.Keyword(null,"db","db",993250759));
var keypairs = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Keyword(null,"keypairs-list","keypairs-list",404972286)], null));
localStorage.setItem("keypairs",JSON.stringify(cljs.core.clj__GT_js(keypairs)));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clear-keys-from-local-storage","clear-keys-from-local-storage",-1715013446),(function (p__13551,_){
var map__13552 = p__13551;
var map__13552__$1 = cljs.core.__destructure_map(map__13552);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13552__$1,new cljs.core.Keyword(null,"db","db",993250759));
localStorage.removeItem("keypairs");

localStorage.removeItem("current-keypair-name");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"load-relays-from-local-storage","load-relays-from-local-storage",-520981764),(function (p__13554,_){
var map__13555 = p__13554;
var map__13555__$1 = cljs.core.__destructure_map(map__13555);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13555__$1,new cljs.core.Keyword(null,"db","db",993250759));
var stored_relays = (function (){try{var parsed = JSON.parse(localStorage.getItem("relays"));
var parsed_array = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(parsed,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
if(cljs.core.sequential_QMARK_(parsed_array)){
return cljs.core.filterv((function (p1__13553_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(cljs.core.first(new cljs.core.Keyword(null,"relays-list","relays-list",-1087282965).cljs$core$IFn$_invoke$arity$1(synchrono.client.storage.default_relays_db)))),cljs.core.set(cljs.core.keys(p1__13553_SHARP_)));
}),parsed_array);
} else {
return cljs.core.PersistentVector.EMPTY;
}
}catch (e13556){var ___$1 = e13556;
return cljs.core.PersistentVector.EMPTY;
}})();
if(cljs.core.empty_QMARK_(stored_relays)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"relays-list","relays-list",-1087282965)], null),new cljs.core.Keyword(null,"relays-list","relays-list",-1087282965).cljs$core$IFn$_invoke$arity$1(synchrono.client.storage.default_relays_db)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"current-relay-api-url","current-relay-api-url",1811280491)], null),new cljs.core.Keyword(null,"api-url","api-url",2037917643).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"relays-list","relays-list",-1087282965).cljs$core$IFn$_invoke$arity$1(synchrono.client.storage.default_relays_db))))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"relays-list","relays-list",-1087282965)], null),stored_relays),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"current-relay-api-url","current-relay-api-url",1811280491)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(stored_relays,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),new cljs.core.Keyword(null,"api-url","api-url",2037917643)], null)))], null);
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"handle-empty-relays-list","handle-empty-relays-list",-852511604),(function (p__13557,_){
var map__13558 = p__13557;
var map__13558__$1 = cljs.core.__destructure_map(map__13558);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13558__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"relays-list","relays-list",-1087282965)], null),new cljs.core.Keyword(null,"relays-list","relays-list",-1087282965).cljs$core$IFn$_invoke$arity$1(synchrono.client.storage.default_relays_db)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"current-relay-api-url","current-relay-api-url",1811280491)], null),new cljs.core.Keyword(null,"api-url","api-url",2037917643).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"relays-list","relays-list",-1087282965).cljs$core$IFn$_invoke$arity$1(synchrono.client.storage.default_relays_db))))], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"save-relays-to-local-storage","save-relays-to-local-storage",66626631),(function (p__13559,_){
var map__13560 = p__13559;
var map__13560__$1 = cljs.core.__destructure_map(map__13560);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13560__$1,new cljs.core.Keyword(null,"db","db",993250759));
var relays = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"relays-list","relays-list",-1087282965)], null));
localStorage.setItem("relays",JSON.stringify(cljs.core.clj__GT_js(relays)));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clear-relays-from-local-storage","clear-relays-from-local-storage",1994704672),(function (p__13561,_){
var map__13562 = p__13561;
var map__13562__$1 = cljs.core.__destructure_map(map__13562);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13562__$1,new cljs.core.Keyword(null,"db","db",993250759));
localStorage.removeItem("relays");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null);
}));

//# sourceMappingURL=synchrono.client.storage.js.map
