goog.provide('synchrono.client.core');
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
synchrono.client.core.app = (function synchrono$client$core$app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [synchrono.client.appbar.appbar], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.body","div.body",-96313067),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [synchrono.client.menu.menu], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main","div.main",-117780813),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [synchrono.client.composer.composer], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [synchrono.client.lens.lens], null)], null)], null)], null);
});
synchrono.client.core.mount_root = (function synchrono$client$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

var container = document.getElementById("app");
var root = module$node_modules$react_dom$client.createRoot(container);
return root.render(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [synchrono.client.core.app], null)));
});
synchrono.client.core.init = (function synchrono$client$core$init(){
try{synchrono.client.logging.init_logging_BANG_();

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-db","init-db",1595181278)], null));

return synchrono.client.core.mount_root();
}catch (e16285){var e = e16285;
return console.error("Failed to initialize application:",e);
}});

//# sourceMappingURL=synchrono.client.core.js.map
