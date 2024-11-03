goog.provide('synchrono.client.core');
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
synchrono.client.core.app_view = (function synchrono$client$core$app_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.app-view","div.app-view",1640356272),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [synchrono.client.header.header], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel","div.panel",-1677992199),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [synchrono.client.menu.menu], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [synchrono.client.body.body], null)], null)], null);
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
