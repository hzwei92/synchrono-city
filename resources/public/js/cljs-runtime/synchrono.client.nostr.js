goog.provide('synchrono.client.nostr');
var module$node_modules$nostr_tools$lib$cjs$pure=shadow.js.require("module$node_modules$nostr_tools$lib$cjs$pure", {});
var module$node_modules$nostr_tools$lib$cjs$pool=shadow.js.require("module$node_modules$nostr_tools$lib$cjs$pool", {});
var module$node_modules$$noble$hashes$utils=shadow.js.require("module$node_modules$$noble$hashes$utils", {});
if((typeof synchrono !== 'undefined') && (typeof synchrono.client !== 'undefined') && (typeof synchrono.client.nostr !== 'undefined') && (typeof synchrono.client.nostr.relay_pool !== 'undefined')){
} else {
synchrono.client.nostr.relay_pool = (new module$node_modules$nostr_tools$lib$cjs$pool.SimplePool());
}
/**
 * Subscribes to multiple Nostr relays with the given query.
 * Sets up event handlers for various relay responses:
 * - onevent: Handles incoming events from relays
 * - onok: Handles successful event publications
 * - oneose: Handles end-of-stored-events signals
 * - onnotice: Handles relay notifications
 */
synchrono.client.nostr.subscribe_many = (function synchrono$client$nostr$subscribe_many(relay_urls,query){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"synchrono.client.nostr","file:/Users/peterwei/this_wokspace/synchrono/src/cljs/synchrono/client/nostr.cljs",19,3,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["About to subscribe to relays"], null);
}),null)),null,(334),null);

try{taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"synchrono.client.nostr","file:/Users/peterwei/this_wokspace/synchrono/src/cljs/synchrono/client/nostr.cljs",21,5,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Subscribing to Nostr relays",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"relays","relays",390472162),relay_urls,new cljs.core.Keyword(null,"query","query",-1288509510),query], null)], null);
}),null)),null,(336),null);

var sub_closer = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var closer = (function (){
if(cljs.core.truth_(cljs.core.deref(sub_closer))){
return cljs.core.deref(sub_closer).close();
} else {
return null;
}
});
return cljs.core.reset_BANG_(sub_closer,synchrono.client.nostr.relay_pool.subscribeMany(cljs.core.clj__GT_js(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046),relay_urls)),cljs.core.clj__GT_js(query),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"onevent","onevent",2036847939),(function (js_event){
var event = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(js_event,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handle-event","handle-event",2098778308),event], null));
}),new cljs.core.Keyword(null,"onok","onok",-1159191731),(function (event_id,success_QMARK_,message){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handle-ok","handle-ok",-94843539),event_id,success_QMARK_,message], null));
}),new cljs.core.Keyword(null,"oneose","oneose",44781013),(function (){
closer();

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handle-eose","handle-eose",-1704755476)], null));
}),new cljs.core.Keyword(null,"onnotice","onnotice",-1043962957),(function (message){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handle-notice","handle-notice",941964064),message], null));
})], null))));
}catch (e17998){var e = e17998;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"synchrono.client.nostr","file:/Users/peterwei/this_wokspace/synchrono/src/cljs/synchrono/client/nostr.cljs",46,7,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to subscribe to relays",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"relays","relays",390472162),relay_urls,new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.ex_message(e),new cljs.core.Keyword(null,"error_data","error_data",-1939567448),cljs.core.ex_data(e)], null)], null);
}),null)),null,(335),null);

return null;
}});
/**
 * Publishes an event to multiple Nostr relays.
 * Handles both string and JSON content, signs the event with the private key,
 * and returns a promise that resolves when all relays have processed the event.
 */
synchrono.client.nostr.publish = (function synchrono$client$nostr$publish(relay_urls,event,private_key){
try{taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"synchrono.client.nostr","file:/Users/peterwei/this_wokspace/synchrono/src/cljs/synchrono/client/nostr.cljs",59,5,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Publishing event to relays",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"action","action",-811238024),"publish",new cljs.core.Keyword(null,"relays","relays",390472162),relay_urls,new cljs.core.Keyword(null,"event_kind","event_kind",1009075217),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(event),new cljs.core.Keyword(null,"pubkey","pubkey",-927805510),new cljs.core.Keyword(null,"pubkey","pubkey",-927805510).cljs$core$IFn$_invoke$arity$1(event),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),Date.now()], null)], null);
}),null)),null,(338),null);

var content = ((typeof new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(event) === 'string')?new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(event):JSON.stringify(cljs.core.clj__GT_js(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(event))));
var content_event = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(event,new cljs.core.Keyword(null,"content","content",15833224),content);
var js_event = cljs.core.clj__GT_js(content_event);
var finalized_event = module$node_modules$nostr_tools$lib$cjs$pure.finalizeEvent(js_event,module$node_modules$$noble$hashes$utils.hexToBytes(private_key));
var promises = synchrono.client.nostr.relay_pool.publish(cljs.core.clj__GT_js(relay_urls),finalized_event);
return Promise.all(promises).then((function (results){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"synchrono.client.nostr","file:/Users/peterwei/this_wokspace/synchrono/src/cljs/synchrono/client/nostr.cljs",74,16,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Event published successfully",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"action","action",-811238024),"publish_success",new cljs.core.Keyword(null,"event_id","event_id",-767275570),finalized_event.id,new cljs.core.Keyword(null,"relay_count","relay_count",-2020119731),cljs.core.count(results),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),Date.now()], null)], null);
}),null)),null,(339),null);

return results;
}));
}catch (e17999){var e = e17999;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"synchrono.client.nostr","file:/Users/peterwei/this_wokspace/synchrono/src/cljs/synchrono/client/nostr.cljs",81,7,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to publish event",new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"action","action",-811238024),"publish_error",new cljs.core.Keyword(null,"relays","relays",390472162),relay_urls,new cljs.core.Keyword(null,"event_kind","event_kind",1009075217),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(event),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.ex_message(e),new cljs.core.Keyword(null,"error_data","error_data",-1939567448),cljs.core.ex_data(e),new cljs.core.Keyword(null,"stack_trace","stack_trace",-975569197),e.stack,new cljs.core.Keyword(null,"timestamp","timestamp",579478971),Date.now()], null)], null);
}),null)),null,(337),null);

return null;
}});
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"handle-event","handle-event",2098778308),(function (p__18000,p__18001){
var map__18002 = p__18000;
var map__18002__$1 = cljs.core.__destructure_map(map__18002);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18002__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__18003 = p__18001;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18003,(0),null);
var raw_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18003,(1),null);
var event_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(raw_event);
var event_kind = new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(raw_event);
var event_content = (function (){try{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event_kind,(1))){
return new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(raw_event);
} else {
var parsed_content = JSON.parse(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(raw_event));
var clj_content = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(parsed_content,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
return clj_content;

}
}catch (e18006){var e = e18006;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"synchrono.client.nostr","file:/Users/peterwei/this_wokspace/synchrono/src/cljs/synchrono/client/nostr.cljs",119,28,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to parse event content according to NIP-01",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.ex_message(e),new cljs.core.Keyword(null,"error_data","error_data",-1939567448),cljs.core.ex_data(e),new cljs.core.Keyword(null,"event-id","event-id",2130210178),event_id,new cljs.core.Keyword(null,"event-kind","event-kind",-191230187),event_kind,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(raw_event)], null)], null);
}),null)),null,(340),null);

return new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(raw_event);
}})();
var event = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(raw_event,new cljs.core.Keyword(null,"content","content",15833224),event_content);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"synchrono.client.nostr","file:/Users/peterwei/this_wokspace/synchrono/src/cljs/synchrono/client/nostr.cljs",127,6,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Received Event",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-id","event-id",2130210178),event_id,new cljs.core.Keyword(null,"event-kind","event-kind",-191230187),event_kind], null)], null);
}),null)),null,(341),null);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"events-by-id","events-by-id",-359530454),event_id], null),event),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"event-ids-by-kind","event-ids-by-kind",-2135185994),event_kind], null),(function (ids){
if(cljs.core.truth_(event_kind)){
return cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY)(ids,event_id);
} else {
return ids;
}
}))], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"handle-ok","handle-ok",-94843539),(function (p__18007,p__18008){
var map__18009 = p__18007;
var map__18009__$1 = cljs.core.__destructure_map(map__18009);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18009__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__18010 = p__18008;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18010,(0),null);
var event_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18010,(1),null);
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18010,(2),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18010,(3),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"synchrono.client.nostr","file:/Users/peterwei/this_wokspace/synchrono/src/cljs/synchrono/client/nostr.cljs",142,4,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Received OK",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event_id","event_id",-767275570),event_id,new cljs.core.Keyword(null,"success","success",1890645906),success_QMARK_,new cljs.core.Keyword(null,"message","message",-406056002),message], null)], null);
}),null)),null,(342),null);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"handle-eose","handle-eose",-1704755476),(function (p__18013,p__18014){
var map__18015 = p__18013;
var map__18015__$1 = cljs.core.__destructure_map(map__18015);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18015__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__18016 = p__18014;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18016,(0),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"synchrono.client.nostr","file:/Users/peterwei/this_wokspace/synchrono/src/cljs/synchrono/client/nostr.cljs",152,4,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Received EOSE"], null);
}),null)),null,(343),null);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"handle-notice","handle-notice",941964064),(function (p__18019,p__18020){
var map__18021 = p__18019;
var map__18021__$1 = cljs.core.__destructure_map(map__18021);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18021__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__18022 = p__18020;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18022,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18022,(1),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"synchrono.client.nostr","file:/Users/peterwei/this_wokspace/synchrono/src/cljs/synchrono/client/nostr.cljs",159,4,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Received Notice",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),message], null)], null);
}),null)),null,(344),null);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null);
}));

//# sourceMappingURL=synchrono.client.nostr.js.map
