goog.provide('synchrono.client.lightning');
var module$node_modules$webln$lib$index=shadow.js.require("module$node_modules$webln$lib$index", {});
/**
 * Checks if WebLN provider is available in browser
 */
synchrono.client.lightning.detect_webln = (function synchrono$client$lightning$detect_webln(){
return cljs.core.boolean$((function (){var and__5000__auto__ = (typeof window !== 'undefined');
if(and__5000__auto__){
return window.webln;
} else {
return and__5000__auto__;
}
})());
});
/**
 * Requests WebLN provider from browser/extension
 */
synchrono.client.lightning.request_webln_provider = (function synchrono$client$lightning$request_webln_provider(){
return module$node_modules$webln$lib$index.requestProvider().then((function (provider){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-lightning-provider","set-lightning-provider",281997567),provider], null));

return provider;
})).catch((function (err){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"synchrono.client.lightning","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/lightning.cljs",26,17,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to get WebLN provider:",err], null);
}),null)),null,(12),null);

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-lightning-error","set-lightning-error",-1839393360),"No WebLN provider found. Please install a compatible wallet."], null));

return null;
}));
});
/**
 * Makes a Lightning payment using available provider
 */
synchrono.client.lightning.make_payment = (function synchrono$client$lightning$make_payment(payment_request){
var provider = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lightning-provider","lightning-provider",-351449108)], null));
if(cljs.core.truth_(cljs.core.deref(provider))){
try{return cljs.core.deref(provider).sendPayment(payment_request).then((function (response){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"synchrono.client.lightning","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/lightning.cljs",39,21,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Payment sent successfully:",response], null);
}),null)),null,(14),null);

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"payment-success","payment-success",781494573),response], null));
})).catch((function (error){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"synchrono.client.lightning","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/lightning.cljs",42,22,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Payment failed:",error], null);
}),null)),null,(15),null);

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"payment-failed","payment-failed",452336682),error], null));
}));
}catch (e16266){var e = e16266;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"synchrono.client.lightning","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/lightning.cljs",45,11,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Error initiating payment:",e], null);
}),null)),null,(13),null);

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"payment-failed","payment-failed",452336682),e], null));
}} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-lightning-error","set-lightning-error",-1839393360),"No Lightning wallet connected"], null));
}
});
synchrono.client.lightning.lnurl_regex = /^lightning:(?:ln(?:url)?)?([0-9a-z]+)$/;
synchrono.client.lightning.encode_lnurl = (function synchrono$client$lightning$encode_lnurl(url){
return clojure.string.lower_case(clojure.string.replace(btoa(url),/=/,""));
});
synchrono.client.lightning.decode_lnurl = (function synchrono$client$lightning$decode_lnurl(lnurl){
try{var padding = (function (){var G__16268 = cljs.core.mod(cljs.core.count(lnurl),(4));
switch (G__16268) {
case (0):
return "";

break;
case (1):
return "===";

break;
case (2):
return "==";

break;
case (3):
return "=";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16268)].join('')));

}
})();
var decoded = atob([cljs.core.str.cljs$core$IFn$_invoke$arity$1(lnurl),cljs.core.str.cljs$core$IFn$_invoke$arity$1(padding)].join(''));
return decoded;
}catch (e16267){var e = e16267;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"synchrono.client.lightning","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/lightning.cljs",71,7,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to decode LNURL:",e], null);
}),null)),null,(16),null);

return null;
}});
synchrono.client.lightning.parse_lightning_link = (function synchrono$client$lightning$parse_lightning_link(link){
var temp__5804__auto__ = cljs.core.re_matches(synchrono.client.lightning.lnurl_regex,link);
if(cljs.core.truth_(temp__5804__auto__)){
var matches = temp__5804__auto__;
return synchrono.client.lightning.decode_lnurl(cljs.core.second(matches));
} else {
return null;
}
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-lightning-provider","set-lightning-provider",281997567),(function (db,p__16269){
var vec__16270 = p__16269;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16270,(0),null);
var provider = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16270,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lightning","lightning",107733737),new cljs.core.Keyword(null,"provider","provider",-302056900)], null),provider);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-lightning-error","set-lightning-error",-1839393360),(function (db,p__16273){
var vec__16274 = p__16273;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16274,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16274,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"error","error",-978969032)], null),error);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"connect-lightning-wallet","connect-lightning-wallet",-1655455809),(function (p__16277,_){
var map__16278 = p__16277;
var map__16278__$1 = cljs.core.__destructure_map(map__16278);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16278__$1,new cljs.core.Keyword(null,"db","db",993250759));
if(synchrono.client.lightning.detect_webln()){
synchrono.client.lightning.request_webln_provider();

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lightning","lightning",107733737),new cljs.core.Keyword(null,"connecting?","connecting?",174124997)], null),true),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-app-message","set-app-message",-1640456028),"Connecting to Lightning wallet..."], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"error","error",-978969032)], null),"No WebLN provider detected. Please install a Lightning wallet."),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-app-message","set-app-message",-1640456028),"No Lightning wallet detected"], null)], null);
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"payment-success","payment-success",781494573),(function (p__16279,p__16280){
var map__16281 = p__16279;
var map__16281__$1 = cljs.core.__destructure_map(map__16281);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16281__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__16282 = p__16280;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16282,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16282,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lightning","lightning",107733737),new cljs.core.Keyword(null,"last-payment","last-payment",-858288836)], null),response),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"message","message",-406056002)], null),"Payment sent successfully!")], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"payment-failed","payment-failed",452336682),(function (p__16285,p__16286){
var map__16287 = p__16285;
var map__16287__$1 = cljs.core.__destructure_map(map__16287);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16287__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__16288 = p__16286;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16288,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16288,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"error","error",-978969032)], null),["Payment failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error)].join(''))], null);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"lightning-provider","lightning-provider",-351449108),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lightning","lightning",107733737),new cljs.core.Keyword(null,"provider","provider",-302056900)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"lightning-connected?","lightning-connected?",442537351),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return cljs.core.boolean$(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lightning","lightning",107733737),new cljs.core.Keyword(null,"provider","provider",-302056900)], null)));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"last-payment","last-payment",-858288836),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lightning","lightning",107733737),new cljs.core.Keyword(null,"last-payment","last-payment",-858288836)], null));
})], 0));
/**
 * Automatically connects to WebLN provider if available without user prompt
 */
synchrono.client.lightning.auto_connect_if_available = (function synchrono$client$lightning$auto_connect_if_available(){
if(synchrono.client.lightning.detect_webln()){
return synchrono.client.lightning.request_webln_provider();
} else {
return null;
}
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"init-lightning","init-lightning",-577634289),(function (_,___$1){
synchrono.client.lightning.auto_connect_if_available();

return cljs.core.PersistentArrayMap.EMPTY;
}));

//# sourceMappingURL=synchrono.client.lightning.js.map
