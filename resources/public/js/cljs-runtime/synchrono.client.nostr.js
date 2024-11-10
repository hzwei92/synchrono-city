goog.provide('synchrono.client.nostr');
var module$node_modules$nostr_tools$lib$cjs$pure=shadow.js.require("module$node_modules$nostr_tools$lib$cjs$pure", {});
var module$node_modules$nostr_tools$lib$cjs$pool=shadow.js.require("module$node_modules$nostr_tools$lib$cjs$pool", {});
var module$node_modules$$noble$hashes$utils=shadow.js.require("module$node_modules$$noble$hashes$utils", {});
if((typeof synchrono !== 'undefined') && (typeof synchrono.client !== 'undefined') && (typeof synchrono.client.nostr !== 'undefined') && (typeof synchrono.client.nostr.relay_pool !== 'undefined')){
} else {
synchrono.client.nostr.relay_pool = (new module$node_modules$nostr_tools$lib$cjs$pool.SimplePool());
}
/**
 * Synchronously queries multiple Nostr relays and returns combined results.
 * Use this for immediate, blocking queries.
 */
synchrono.client.nostr.query_sync = (function synchrono$client$nostr$query_sync(relay_urls,query){
var results = synchrono.client.nostr.relay_pool.querySync(cljs.core.clj__GT_js(relay_urls),cljs.core.clj__GT_js(query));
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(results,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
});
/**
 * Asynchronously fetches events from multiple Nostr relays.
 * Similar to query-sync but non-blocking.
 */
synchrono.client.nostr.get_events = (function synchrono$client$nostr$get_events(relay_urls,query){
var results = synchrono.client.nostr.relay_pool.get(cljs.core.clj__GT_js(relay_urls),cljs.core.clj__GT_js(query));
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(results,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
});
/**
 * Fetches NIP-11 relay metadata from a relay URL.
 * Returns a promise that resolves to the relay metadata or rejects with an error.
 */
synchrono.client.nostr.fetch_relay_metadata = (function synchrono$client$nostr$fetch_relay_metadata(relay_url){
var http_url = (cljs.core.truth_(cljs.core.re_find(/^wss?:\/\//,relay_url))?clojure.string.replace(clojure.string.replace(relay_url,/^wss:\/\//,"https://"),/^ws:\/\//,"http://"):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.origin),cljs.core.str.cljs$core$IFn$_invoke$arity$1(relay_url)].join('')
);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"synchrono.client.nostr","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/nostr.cljs",51,5,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Fetching relay metadata",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"relay","relay",257706994),relay_url,new cljs.core.Keyword(null,"url","url",276297046),http_url], null)], null);
}),null)),null,(206),null);

return (new Promise((function (resolve,reject){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(http_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Accept","application/nostr+json"], null),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handle-relay-metadata","handle-relay-metadata",-238772548),relay_url,response], null));

return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(response) : resolve.call(null, response));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (error){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"synchrono.client.nostr","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/nostr.cljs",60,31,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to fetch relay metadata",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"relay","relay",257706994),relay_url,new cljs.core.Keyword(null,"error","error",-978969032),error], null)], null);
}),null)),null,(207),null);

return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(error) : reject.call(null, error));
}),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)], 0));
}))).catch((function (error){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"synchrono.client.nostr","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/nostr.cljs",67,18,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Error fetching relay metadata",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"relay","relay",257706994),relay_url,new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.ex_message(error)], null)], null);
}),null)),null,(208),null);

throw error;
}));
});
/**
 * Normalizes a relay URL to ensure it has a proper websocket protocol prefix
 */
synchrono.client.nostr.normalize_relay_url = (function synchrono$client$nostr$normalize_relay_url(url){
if(cljs.core.truth_(cljs.core.re_find(/^wss?:\/\//,url))){
return url;
} else {
if(clojure.string.starts_with_QMARK_(url,"/")){
return ["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host),cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('');
} else {
return ["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('');

}
}
});
/**
 * Subscribes to multiple Nostr relays with the given query.
 * Returns a function that can be called to close the subscription.
 */
synchrono.client.nostr.subscribe_many = (function synchrono$client$nostr$subscribe_many(relay_urls,query){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"synchrono.client.nostr","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/nostr.cljs",88,3,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["About to subscribe to relays"], null);
}),null)),null,(209),null);

if((((relay_urls == null)) || (cljs.core.empty_QMARK_(relay_urls)))){
throw (new Error("No relay URLs provided"));
} else {
}

try{var normalized_urls = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(synchrono.client.nostr.normalize_relay_url,((cljs.core.sequential_QMARK_(relay_urls))?relay_urls:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [relay_urls], null)));
var normalized_query = ((cljs.core.map_QMARK_(query))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [query], null):((cljs.core.sequential_QMARK_(query))?query:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null)
));
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"synchrono.client.nostr","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/nostr.cljs",101,13,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Subscribing to Nostr relays",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"relays","relays",390472162),normalized_urls,new cljs.core.Keyword(null,"query","query",-1288509510),normalized_query], null)], null);
}),null)),null,(211),null);
var sub = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var closer = (function (){
var temp__5804__auto__ = cljs.core.deref(sub);
if(cljs.core.truth_(temp__5804__auto__)){
var subscription = temp__5804__auto__;
try{subscription.close();
}catch (e17975){var e_18021 = e17975;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"synchrono.client.nostr","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/nostr.cljs",110,25,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Error closing subscription",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.ex_message(e_18021)], null)], null);
}),null)),null,(212),null);
}
return cljs.core.reset_BANG_(sub,null);
} else {
return null;
}
});
cljs.core.reset_BANG_(sub,synchrono.client.nostr.relay_pool.subscribeMany(cljs.core.clj__GT_js(normalized_urls),cljs.core.clj__GT_js(normalized_query),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"onevent","onevent",2036847939),(function (js_event){
try{var event = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(js_event,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handle-event","handle-event",2098778308),event], null));
}catch (e17976){var e = e17976;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"synchrono.client.nostr","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/nostr.cljs",125,38,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Error handling event",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.ex_message(e),new cljs.core.Keyword(null,"event","event",301435442),js_event], null)], null);
}),null)),null,(213),null);
}}),new cljs.core.Keyword(null,"onok","onok",-1159191731),(function (event_id,success_QMARK_,message){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handle-ok","handle-ok",-94843539),event_id,success_QMARK_,message], null));
}),new cljs.core.Keyword(null,"oneose","oneose",44781013),(function (){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"synchrono.client.nostr","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/nostr.cljs",133,34,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Received EOSE"], null);
}),null)),null,(214),null);

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handle-eose","handle-eose",-1704755476)], null));
}),new cljs.core.Keyword(null,"onnotice","onnotice",-1043962957),(function (message){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"synchrono.client.nostr","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/nostr.cljs",137,34,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Received notice:",message], null);
}),null)),null,(215),null);

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handle-notice","handle-notice",941964064),message], null));
}),new cljs.core.Keyword(null,"onerror","onerror",781725030),(function (error){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"synchrono.client.nostr","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/nostr.cljs",141,34,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Subscription error",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),error], null)], null);
}),null)),null,(216),null);

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handle-subscription-error","handle-subscription-error",1762095051),error], null));
})], null))));

return closer;
}catch (e17974){var e = e17974;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"synchrono.client.nostr","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/nostr.cljs",146,7,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to subscribe to relays",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"relays","relays",390472162),relay_urls,new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.ex_message(e),new cljs.core.Keyword(null,"stack","stack",-793405930),e.stack], null)], null);
}),null)),null,(210),null);

throw e;
}});
/**
 * Publishes an event to multiple Nostr relays.
 */
synchrono.client.nostr.publish = (function synchrono$client$nostr$publish(relay_urls,event,private_key){
try{var normalized_urls = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (url){
if(cljs.core.truth_(cljs.core.re_find(/^wss?:\/\//,url))){
return url;
} else {
return ["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host),cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('');
}
}),((cljs.core.sequential_QMARK_(relay_urls))?relay_urls:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [relay_urls], null)));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"synchrono.client.nostr","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/nostr.cljs",164,7,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Publishing event to relays",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"action","action",-811238024),"publish",new cljs.core.Keyword(null,"relays","relays",390472162),normalized_urls,new cljs.core.Keyword(null,"event_kind","event_kind",1009075217),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(event),new cljs.core.Keyword(null,"pubkey","pubkey",-927805510),new cljs.core.Keyword(null,"pubkey","pubkey",-927805510).cljs$core$IFn$_invoke$arity$1(event),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),Date.now()], null)], null);
}),null)),null,(218),null);

var content = ((typeof new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(event) === 'string')?new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(event):JSON.stringify(cljs.core.clj__GT_js(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(event))));
var content_event = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(event,new cljs.core.Keyword(null,"content","content",15833224),content);
var js_event = cljs.core.clj__GT_js(content_event);
var finalized_event = module$node_modules$nostr_tools$lib$cjs$pure.finalizeEvent(js_event,module$node_modules$$noble$hashes$utils.hexToBytes(private_key));
var promises = synchrono.client.nostr.relay_pool.publish(cljs.core.clj__GT_js(normalized_urls),finalized_event);
return Promise.all(promises).then((function (results){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"synchrono.client.nostr","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/nostr.cljs",179,18,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Event published successfully",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"action","action",-811238024),"publish_success",new cljs.core.Keyword(null,"event_id","event_id",-767275570),finalized_event.id,new cljs.core.Keyword(null,"relay_count","relay_count",-2020119731),cljs.core.count(results),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),Date.now()], null)], null);
}),null)),null,(219),null);

return results;
}));
}catch (e17977){var e = e17977;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"synchrono.client.nostr","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/nostr.cljs",186,7,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to publish event",new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"action","action",-811238024),"publish_error",new cljs.core.Keyword(null,"relays","relays",390472162),relay_urls,new cljs.core.Keyword(null,"event_kind","event_kind",1009075217),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(event),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.ex_message(e),new cljs.core.Keyword(null,"error_data","error_data",-1939567448),cljs.core.ex_data(e),new cljs.core.Keyword(null,"stack_trace","stack_trace",-975569197),e.stack,new cljs.core.Keyword(null,"timestamp","timestamp",579478971),Date.now()], null)], null);
}),null)),null,(217),null);

return null;
}});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"handle-relay-metadata","handle-relay-metadata",-238772548),(function (p__17980,p__17981){
var map__17982 = p__17980;
var map__17982__$1 = cljs.core.__destructure_map(map__17982);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17982__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__17983 = p__17981;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17983,(0),null);
var relay_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17983,(1),null);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17983,(2),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"synchrono.client.nostr","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/nostr.cljs",203,4,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Received relay metadata",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"relay-url","relay-url",-1403536868),relay_url,new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata], null)], null);
}),null)),null,(220),null);

var relay_list = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"relays-list","relays-list",-1087282965)], null));
var filtered_relay_list = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__17978_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(p1__17978_SHARP_),relay_url);
}),relay_list);
var relay = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__17979_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(p1__17979_SHARP_),relay_url);
}),relay_list));
var new_relay = (cljs.core.truth_(relay)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relay,new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),relay_url,new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata], null));
var new_relay_list = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(filtered_relay_list,new_relay);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"relays-list","relays-list",-1087282965)], null),new_relay_list)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"handle-event","handle-event",2098778308),(function (p__17986,p__17987){
var map__17988 = p__17986;
var map__17988__$1 = cljs.core.__destructure_map(map__17988);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17988__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__17989 = p__17987;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17989,(0),null);
var raw_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17989,(1),null);
var event_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(raw_event);
var event_kind = new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(raw_event);
var event_content = (function (){try{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event_kind,(1))){
return new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(raw_event);
} else {
var parsed_content = JSON.parse(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(raw_event));
var clj_content = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(parsed_content,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
return clj_content;

}
}catch (e17992){var e = e17992;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"synchrono.client.nostr","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/nostr.cljs",226,28,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to parse event content according to NIP-01",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.ex_message(e),new cljs.core.Keyword(null,"error_data","error_data",-1939567448),cljs.core.ex_data(e),new cljs.core.Keyword(null,"event-id","event-id",2130210178),event_id,new cljs.core.Keyword(null,"event-kind","event-kind",-191230187),event_kind,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(raw_event)], null)], null);
}),null)),null,(221),null);

return new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(raw_event);
}})();
var event = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(raw_event,new cljs.core.Keyword(null,"content","content",15833224),event_content);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"synchrono.client.nostr","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/nostr.cljs",234,6,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Received Event",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-id","event-id",2130210178),event_id,new cljs.core.Keyword(null,"event-kind","event-kind",-191230187),event_kind], null)], null);
}),null)),null,(222),null);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"events-by-id","events-by-id",-359530454),event_id], null),event),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"event-ids-by-kind","event-ids-by-kind",-2135185994),event_kind], null),(function (ids){
if(cljs.core.truth_(event_kind)){
return cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY)(ids,event_id);
} else {
return ids;
}
}))], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"handle-ok","handle-ok",-94843539),(function (p__17993,p__17994){
var map__17995 = p__17993;
var map__17995__$1 = cljs.core.__destructure_map(map__17995);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17995__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__17996 = p__17994;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17996,(0),null);
var event_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17996,(1),null);
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17996,(2),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17996,(3),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"synchrono.client.nostr","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/nostr.cljs",248,4,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Received OK",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event_id","event_id",-767275570),event_id,new cljs.core.Keyword(null,"success","success",1890645906),success_QMARK_,new cljs.core.Keyword(null,"message","message",-406056002),message], null)], null);
}),null)),null,(223),null);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"handle-eose","handle-eose",-1704755476),(function (p__17999,p__18000){
var map__18001 = p__17999;
var map__18001__$1 = cljs.core.__destructure_map(map__18001);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18001__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__18002 = p__18000;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18002,(0),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"synchrono.client.nostr","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/nostr.cljs",257,4,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Received EOSE"], null);
}),null)),null,(224),null);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"handle-notice","handle-notice",941964064),(function (p__18005,p__18006){
var map__18007 = p__18005;
var map__18007__$1 = cljs.core.__destructure_map(map__18007);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18007__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__18008 = p__18006;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18008,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18008,(1),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"synchrono.client.nostr","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/nostr.cljs",263,4,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Received Notice",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),message], null)], null);
}),null)),null,(225),null);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("nostr","publish-note","nostr/publish-note",1914105772),(function (p__18011,p__18012){
var map__18013 = p__18011;
var map__18013__$1 = cljs.core.__destructure_map(map__18013);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18013__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__18014 = p__18012;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18014,(0),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18014,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nostr","send-event","nostr/send-event",462760097),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kind","kind",-717265803),(1),new cljs.core.Keyword(null,"content","content",15833224),content,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.PersistentVector.EMPTY], null)], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("nostr","publish-success","nostr/publish-success",978483786),(function (db,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"publishing?","publishing?",1526914455),false),new cljs.core.Keyword(null,"current-draft","current-draft",-2030584435));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("nostr","publish-error","nostr/publish-error",-316318522),(function (db,p__18017){
var vec__18018 = p__18017;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18018,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18018,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"publishing?","publishing?",1526914455),false),new cljs.core.Keyword(null,"publish-error","publish-error",-429454858),error);
}));

//# sourceMappingURL=synchrono.client.nostr.js.map
