goog.provide('synchrono.client.storage');
synchrono.client.storage.default_app_db = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"posting","posting",919785887),false,new cljs.core.Keyword(null,"getting","getting",-1040567837),false,new cljs.core.Keyword(null,"current-route","current-route",2067529448),new cljs.core.Keyword(null,"about","about",1423892543),new cljs.core.Keyword(null,"menu-open?","menu-open?",-1909849203),false], null);
synchrono.client.storage.default_keys_db = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"clearing-keypair-name","clearing-keypair-name",-808617306),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"importing-keypair?","importing-keypair?",-1256617492),new cljs.core.Keyword(null,"current-keypair-private-key","current-keypair-private-key",-609513652),new cljs.core.Keyword(null,"generating-keypair?","generating-keypair?",413223661),new cljs.core.Keyword(null,"identification","identification",-1342325264),new cljs.core.Keyword(null,"unlocking-keypair-name","unlocking-keypair-name",1543333395),new cljs.core.Keyword(null,"confirm-password","confirm-password",1576165176),new cljs.core.Keyword(null,"show-password?","show-password?",1088357593),new cljs.core.Keyword(null,"show-confirm-password?","show-confirm-password?",-189122405),new cljs.core.Keyword(null,"current-keypair-name","current-keypair-name",-1929466597),new cljs.core.Keyword(null,"private-key","private-key",426483388),new cljs.core.Keyword(null,"public-key","public-key",-2106850051),new cljs.core.Keyword(null,"keypairs-list","keypairs-list",404972286)],[null,"","",false,null,false,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"captcha-required","captcha-required",-1148456385),false,new cljs.core.Keyword(null,"email-required","email-required",1059265289),false,new cljs.core.Keyword(null,"mobile-required","mobile-required",1861646507),false], null),null,"",false,false,"default","","",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"default",new cljs.core.Keyword(null,"public-key","public-key",-2106850051),null,new cljs.core.Keyword(null,"encrypted-private-key","encrypted-private-key",1069899594),null], null)], null)]);
synchrono.client.storage.default_relays_db = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"relays-list","relays-list",-1087282965),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"timezone","timezone",1831928099),new cljs.core.Keyword(null,"posts-by-id","posts-by-id",-1060565787),new cljs.core.Keyword(null,"curent-credit-balance-sat","curent-credit-balance-sat",1276431749),new cljs.core.Keyword(null,"post-id-lists","post-id-lists",-295303002),new cljs.core.Keyword(null,"initial-credit-balance-sat","initial-credit-balance-sat",-500768184),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"api-url","api-url",2037917643),new cljs.core.Keyword(null,"lightning_public_key","lightning_public_key",-1452486734),new cljs.core.Keyword(null,"minimum-withdrawal-sat","minimum-withdrawal-sat",-752266317),new cljs.core.Keyword(null,"daily-fee-sat","daily-fee-sat",1928281526),new cljs.core.Keyword(null,"api-key","api-key",1037904031)],[["Everyone buys in for 10,000 credits. ","Every upvote transfers 1 credit. ","Upvote as much as you want. ","Also, we tax you 10 credits per day. ","That means you better start hustling, haha! ","Cash out by withdrawing credits. ","Win big in this marketplace for ideas."].join(''),"UTC-08:00",cljs.core.PersistentArrayMap.EMPTY,(0),cljs.core.PersistentVector.EMPTY,(10000),"synchrono.city","https://synchrono.city",null,(70),(10),""])], null),new cljs.core.Keyword(null,"current-relay-api-url","current-relay-api-url",1811280491),"https://synchrono.city"], null);
synchrono.client.storage.default_posts_db = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"post-content","post-content",1823558267),""], null);
synchrono.client.storage.default_db = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"app","app",-560961707),synchrono.client.storage.default_app_db,new cljs.core.Keyword(null,"keys","keys",1068423698),synchrono.client.storage.default_keys_db,new cljs.core.Keyword(null,"relays","relays",390472162),synchrono.client.storage.default_relays_db,new cljs.core.Keyword(null,"posts","posts",760043164),synchrono.client.storage.default_posts_db], null);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),synchrono.client.storage.default_db,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-keys-from-local-storage","load-keys-from-local-storage",-1778816297)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-relays-from-local-storage","load-relays-from-local-storage",-520981764)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"load-keys-from-local-storage","load-keys-from-local-storage",-1778816297),(function (p__14691,_){
var map__14692 = p__14691;
var map__14692__$1 = cljs.core.__destructure_map(map__14692);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14692__$1,new cljs.core.Keyword(null,"db","db",993250759));
var stored_keypairs = (function (){try{var parsed = JSON.parse(localStorage.getItem("keypairs"));
var parsed_array = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(parsed,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
if(cljs.core.sequential_QMARK_(parsed_array)){
return cljs.core.filterv((function (p1__14690_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(cljs.core.first(new cljs.core.Keyword(null,"keypairs-list","keypairs-list",404972286).cljs$core$IFn$_invoke$arity$1(synchrono.client.storage.default_keys_db)))),cljs.core.set(cljs.core.keys(p1__14690_SHARP_)));
}),parsed_array);
} else {
return cljs.core.PersistentVector.EMPTY;
}
}catch (e14693){var ___$1 = e14693;
return cljs.core.PersistentVector.EMPTY;
}})();
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Keyword(null,"keypairs-list","keypairs-list",404972286)], null),stored_keypairs)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"save-keys-to-local-storage","save-keys-to-local-storage",-908592732),(function (p__14694,_){
var map__14695 = p__14694;
var map__14695__$1 = cljs.core.__destructure_map(map__14695);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14695__$1,new cljs.core.Keyword(null,"db","db",993250759));
var keypairs = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Keyword(null,"keypairs-list","keypairs-list",404972286)], null));
localStorage.setItem("keypairs",JSON.stringify(cljs.core.clj__GT_js(keypairs)));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clear-keys-from-local-storage","clear-keys-from-local-storage",-1715013446),(function (p__14696,_){
var map__14697 = p__14696;
var map__14697__$1 = cljs.core.__destructure_map(map__14697);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14697__$1,new cljs.core.Keyword(null,"db","db",993250759));
localStorage.removeItem("keypairs");

localStorage.removeItem("current-keypair-name");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"load-relays-from-local-storage","load-relays-from-local-storage",-520981764),(function (p__14699,_){
var map__14700 = p__14699;
var map__14700__$1 = cljs.core.__destructure_map(map__14700);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14700__$1,new cljs.core.Keyword(null,"db","db",993250759));
var stored_relays = (function (){try{var parsed = JSON.parse(localStorage.getItem("relays"));
var parsed_array = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(parsed,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
if(cljs.core.sequential_QMARK_(parsed_array)){
return cljs.core.filterv((function (p1__14698_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(cljs.core.first(new cljs.core.Keyword(null,"relays-list","relays-list",-1087282965).cljs$core$IFn$_invoke$arity$1(synchrono.client.storage.default_relays_db)))),cljs.core.set(cljs.core.keys(p1__14698_SHARP_)));
}),parsed_array);
} else {
return cljs.core.PersistentVector.EMPTY;
}
}catch (e14701){var ___$1 = e14701;
return cljs.core.PersistentVector.EMPTY;
}})();
if(cljs.core.empty_QMARK_(stored_relays)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"relays-list","relays-list",-1087282965)], null),new cljs.core.Keyword(null,"relays-list","relays-list",-1087282965).cljs$core$IFn$_invoke$arity$1(synchrono.client.storage.default_relays_db)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"current-relay-api-url","current-relay-api-url",1811280491)], null),new cljs.core.Keyword(null,"api-url","api-url",2037917643).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"relays-list","relays-list",-1087282965).cljs$core$IFn$_invoke$arity$1(synchrono.client.storage.default_relays_db))))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"relays-list","relays-list",-1087282965)], null),stored_relays),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"current-relay-api-url","current-relay-api-url",1811280491)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(stored_relays,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),new cljs.core.Keyword(null,"api-url","api-url",2037917643)], null)))], null);
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"handle-empty-relays-list","handle-empty-relays-list",-852511604),(function (p__14702,_){
var map__14703 = p__14702;
var map__14703__$1 = cljs.core.__destructure_map(map__14703);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14703__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"relays-list","relays-list",-1087282965)], null),new cljs.core.Keyword(null,"relays-list","relays-list",-1087282965).cljs$core$IFn$_invoke$arity$1(synchrono.client.storage.default_relays_db)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"current-relay-api-url","current-relay-api-url",1811280491)], null),new cljs.core.Keyword(null,"api-url","api-url",2037917643).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"relays-list","relays-list",-1087282965).cljs$core$IFn$_invoke$arity$1(synchrono.client.storage.default_relays_db))))], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"save-relays-to-local-storage","save-relays-to-local-storage",66626631),(function (p__14704,_){
var map__14705 = p__14704;
var map__14705__$1 = cljs.core.__destructure_map(map__14705);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14705__$1,new cljs.core.Keyword(null,"db","db",993250759));
var relays = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"relays-list","relays-list",-1087282965)], null));
localStorage.setItem("relays",JSON.stringify(cljs.core.clj__GT_js(relays)));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clear-relays-from-local-storage","clear-relays-from-local-storage",1994704672),(function (p__14706,_){
var map__14707 = p__14706;
var map__14707__$1 = cljs.core.__destructure_map(map__14707);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14707__$1,new cljs.core.Keyword(null,"db","db",993250759));
localStorage.removeItem("relays");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null);
}));

//# sourceMappingURL=synchrono.client.storage.js.map
