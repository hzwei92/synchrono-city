goog.provide('synchrono.client.core');
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
synchrono.client.core.default_app_db = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"current-route","current-route",2067529448),new cljs.core.Keyword(null,"about","about",1423892543),new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"posting","posting",919785887),false,new cljs.core.Keyword(null,"getting","getting",-1040567837),false], null);
synchrono.client.core.default_rules_db = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"minimum_balance_sat","minimum_balance_sat",1844785826),new cljs.core.Keyword(null,"timezone","timezone",1831928099),new cljs.core.Keyword(null,"initial_balance_sat","initial_balance_sat",-2107314650),new cljs.core.Keyword(null,"email_verification_required","email_verification_required",-979716506),new cljs.core.Keyword(null,"mobile_verification_required","mobile_verification_required",506939178),new cljs.core.Keyword(null,"daily_usage_price_sat","daily_usage_price_sat",-654496661),new cljs.core.Keyword(null,"lightning_public_key","lightning_public_key",-1452486734),new cljs.core.Keyword(null,"captcha_required","captcha_required",-1814420545)],[cljs.core.PersistentVector.EMPTY,(140),"UTC",(7000),false,false,(20),null,false]);
synchrono.client.core.default_user_db = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"public-key","public-key",-2106850051),"",new cljs.core.Keyword(null,"encrypted-private-key","encrypted-private-key",1069899594),"",new cljs.core.Keyword(null,"private-key","private-key",426483388),"",new cljs.core.Keyword(null,"balance","balance",418967409),(0)], null);
synchrono.client.core.default_producer_db = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"post-content","post-content",1823558267),""], null);
synchrono.client.core.default_consumer_db = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"days","days",-1394072564),cljs.core.PersistentVector.EMPTY], null);
synchrono.client.core.default_db = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"app","app",-560961707),synchrono.client.core.default_app_db,new cljs.core.Keyword(null,"rules","rules",1198912366),synchrono.client.core.default_rules_db,new cljs.core.Keyword(null,"user","user",1532431356),synchrono.client.core.default_user_db,new cljs.core.Keyword(null,"producer","producer",-1034261436),synchrono.client.core.default_producer_db,new cljs.core.Keyword(null,"consumer","consumer",-694463899),synchrono.client.core.default_consumer_db], null);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return synchrono.client.core.default_db;
}));
synchrono.client.core.app_view = (function synchrono$client$core$app_view(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Hello, World!"], null);
});
synchrono.client.core.mount_root = (function synchrono$client$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

var container = document.getElementById("app");
var root = module$node_modules$react_dom$client.createRoot(container);
return root.render(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [synchrono.client.core.app_view], null)));
});
synchrono.client.core.init = (function synchrono$client$core$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

return synchrono.client.core.mount_root();
});

//# sourceMappingURL=synchrono.client.core.js.map
