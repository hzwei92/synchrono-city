goog.provide('synchrono.client.nostrodamus');
var module$node_modules$nostr_tools$lib$cjs$pure=shadow.js.require("module$node_modules$nostr_tools$lib$cjs$pure", {});
var module$node_modules$nostr_tools$lib$cjs$pool=shadow.js.require("module$node_modules$nostr_tools$lib$cjs$pool", {});
var module$node_modules$$noble$hashes$utils=shadow.js.require("module$node_modules$$noble$hashes$utils", {});
if((typeof synchrono !== 'undefined') && (typeof synchrono.client !== 'undefined') && (typeof synchrono.client.nostrodamus !== 'undefined') && (typeof synchrono.client.nostrodamus.relay_pool !== 'undefined')){
} else {
synchrono.client.nostrodamus.relay_pool = (new module$node_modules$nostr_tools$lib$cjs$pool.SimplePool());
}
synchrono.client.nostrodamus.normalize_relay_url = (function synchrono$client$nostrodamus$normalize_relay_url(url){
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
synchrono.client.nostrodamus.create_event = (function synchrono$client$nostrodamus$create_event(public_key,kind,content,tags){
return cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pubkey","pubkey",-927805510),public_key,new cljs.core.Keyword(null,"kind","kind",-717265803),kind,new cljs.core.Keyword(null,"created_at","created_at",1484050750),Math.floor((Date.now() / (1000))),new cljs.core.Keyword(null,"content","content",15833224),content,new cljs.core.Keyword(null,"tags","tags",1771418977),tags], null));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("nostr","subscribe-many","nostr/subscribe-many",-1663986525),(function (p__18430,p__18431){
var map__18432 = p__18430;
var map__18432__$1 = cljs.core.__destructure_map(map__18432);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18432__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__18433 = p__18431;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18433,(0),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18433,(1),null);
var close_on_eose_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18433,(2),null);
try{var relays = new cljs.core.Keyword(null,"relays","relays",390472162).cljs$core$IFn$_invoke$arity$1(db);
var normalized_urls = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(synchrono.client.nostrodamus.normalize_relay_url,relays);
var subscriptions = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var seq__18437_18479 = cljs.core.seq(normalized_urls);
var chunk__18438_18480 = null;
var count__18439_18481 = (0);
var i__18440_18482 = (0);
while(true){
if((i__18440_18482 < count__18439_18481)){
var url_18483 = chunk__18438_18480.cljs$core$IIndexed$_nth$arity$2(null, i__18440_18482);
var sub_18484 = synchrono.client.nostrodamus.relay_pool.subscribeMany(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [url_18483], null)),cljs.core.clj__GT_js(query),({"onevent": ((function (seq__18437_18479,chunk__18438_18480,count__18439_18481,i__18440_18482,url_18483,relays,normalized_urls,subscriptions,map__18432,map__18432__$1,db,vec__18433,_,query,close_on_eose_QMARK_){
return (function (event){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nostr","handle-event","nostr/handle-event",1583020724),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"relay","relay",257706994),url_18483,new cljs.core.Keyword(null,"event","event",301435442),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(event,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))], null)], null));
});})(seq__18437_18479,chunk__18438_18480,count__18439_18481,i__18440_18482,url_18483,relays,normalized_urls,subscriptions,map__18432,map__18432__$1,db,vec__18433,_,query,close_on_eose_QMARK_))
, "onok": ((function (seq__18437_18479,chunk__18438_18480,count__18439_18481,i__18440_18482,url_18483,relays,normalized_urls,subscriptions,map__18432,map__18432__$1,db,vec__18433,_,query,close_on_eose_QMARK_){
return (function (event_id,success_QMARK_,message){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nostr","handle-ok","nostr/handle-ok",-165977955),event_id,success_QMARK_,message], null));
});})(seq__18437_18479,chunk__18438_18480,count__18439_18481,i__18440_18482,url_18483,relays,normalized_urls,subscriptions,map__18432,map__18432__$1,db,vec__18433,_,query,close_on_eose_QMARK_))
, "oneose": ((function (seq__18437_18479,chunk__18438_18480,count__18439_18481,i__18440_18482,url_18483,relays,normalized_urls,subscriptions,map__18432,map__18432__$1,db,vec__18433,_,query,close_on_eose_QMARK_){
return (function (){
if(cljs.core.truth_(close_on_eose_QMARK_)){
cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(subscriptions),url_18483).close();
} else {
}

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nostr","handle-eose","nostr/handle-eose",1688335356),query,close_on_eose_QMARK_], null));
});})(seq__18437_18479,chunk__18438_18480,count__18439_18481,i__18440_18482,url_18483,relays,normalized_urls,subscriptions,map__18432,map__18432__$1,db,vec__18433,_,query,close_on_eose_QMARK_))
, "onnotice": ((function (seq__18437_18479,chunk__18438_18480,count__18439_18481,i__18440_18482,url_18483,relays,normalized_urls,subscriptions,map__18432,map__18432__$1,db,vec__18433,_,query,close_on_eose_QMARK_){
return (function (message){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nostr","handle-notice","nostr/handle-notice",836734448),message], null));
});})(seq__18437_18479,chunk__18438_18480,count__18439_18481,i__18440_18482,url_18483,relays,normalized_urls,subscriptions,map__18432,map__18432__$1,db,vec__18433,_,query,close_on_eose_QMARK_))
, "onerror": ((function (seq__18437_18479,chunk__18438_18480,count__18439_18481,i__18440_18482,url_18483,relays,normalized_urls,subscriptions,map__18432,map__18432__$1,db,vec__18433,_,query,close_on_eose_QMARK_){
return (function (error){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nostr","handle-error","nostr/handle-error",1769230156),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"relay","relay",257706994),url_18483,new cljs.core.Keyword(null,"error","error",-978969032),error], null)], null));
});})(seq__18437_18479,chunk__18438_18480,count__18439_18481,i__18440_18482,url_18483,relays,normalized_urls,subscriptions,map__18432,map__18432__$1,db,vec__18433,_,query,close_on_eose_QMARK_))
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subscriptions,cljs.core.assoc,url_18483,sub_18484);


var G__18485 = seq__18437_18479;
var G__18486 = chunk__18438_18480;
var G__18487 = count__18439_18481;
var G__18488 = (i__18440_18482 + (1));
seq__18437_18479 = G__18485;
chunk__18438_18480 = G__18486;
count__18439_18481 = G__18487;
i__18440_18482 = G__18488;
continue;
} else {
var temp__5804__auto___18489 = cljs.core.seq(seq__18437_18479);
if(temp__5804__auto___18489){
var seq__18437_18490__$1 = temp__5804__auto___18489;
if(cljs.core.chunked_seq_QMARK_(seq__18437_18490__$1)){
var c__5525__auto___18491 = cljs.core.chunk_first(seq__18437_18490__$1);
var G__18492 = cljs.core.chunk_rest(seq__18437_18490__$1);
var G__18493 = c__5525__auto___18491;
var G__18494 = cljs.core.count(c__5525__auto___18491);
var G__18495 = (0);
seq__18437_18479 = G__18492;
chunk__18438_18480 = G__18493;
count__18439_18481 = G__18494;
i__18440_18482 = G__18495;
continue;
} else {
var url_18496 = cljs.core.first(seq__18437_18490__$1);
var sub_18497 = synchrono.client.nostrodamus.relay_pool.subscribeMany(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [url_18496], null)),cljs.core.clj__GT_js(query),({"onevent": ((function (seq__18437_18479,chunk__18438_18480,count__18439_18481,i__18440_18482,url_18496,seq__18437_18490__$1,temp__5804__auto___18489,relays,normalized_urls,subscriptions,map__18432,map__18432__$1,db,vec__18433,_,query,close_on_eose_QMARK_){
return (function (event){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nostr","handle-event","nostr/handle-event",1583020724),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"relay","relay",257706994),url_18496,new cljs.core.Keyword(null,"event","event",301435442),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(event,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))], null)], null));
});})(seq__18437_18479,chunk__18438_18480,count__18439_18481,i__18440_18482,url_18496,seq__18437_18490__$1,temp__5804__auto___18489,relays,normalized_urls,subscriptions,map__18432,map__18432__$1,db,vec__18433,_,query,close_on_eose_QMARK_))
, "onok": ((function (seq__18437_18479,chunk__18438_18480,count__18439_18481,i__18440_18482,url_18496,seq__18437_18490__$1,temp__5804__auto___18489,relays,normalized_urls,subscriptions,map__18432,map__18432__$1,db,vec__18433,_,query,close_on_eose_QMARK_){
return (function (event_id,success_QMARK_,message){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nostr","handle-ok","nostr/handle-ok",-165977955),event_id,success_QMARK_,message], null));
});})(seq__18437_18479,chunk__18438_18480,count__18439_18481,i__18440_18482,url_18496,seq__18437_18490__$1,temp__5804__auto___18489,relays,normalized_urls,subscriptions,map__18432,map__18432__$1,db,vec__18433,_,query,close_on_eose_QMARK_))
, "oneose": ((function (seq__18437_18479,chunk__18438_18480,count__18439_18481,i__18440_18482,url_18496,seq__18437_18490__$1,temp__5804__auto___18489,relays,normalized_urls,subscriptions,map__18432,map__18432__$1,db,vec__18433,_,query,close_on_eose_QMARK_){
return (function (){
if(cljs.core.truth_(close_on_eose_QMARK_)){
cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(subscriptions),url_18496).close();
} else {
}

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nostr","handle-eose","nostr/handle-eose",1688335356),query,close_on_eose_QMARK_], null));
});})(seq__18437_18479,chunk__18438_18480,count__18439_18481,i__18440_18482,url_18496,seq__18437_18490__$1,temp__5804__auto___18489,relays,normalized_urls,subscriptions,map__18432,map__18432__$1,db,vec__18433,_,query,close_on_eose_QMARK_))
, "onnotice": ((function (seq__18437_18479,chunk__18438_18480,count__18439_18481,i__18440_18482,url_18496,seq__18437_18490__$1,temp__5804__auto___18489,relays,normalized_urls,subscriptions,map__18432,map__18432__$1,db,vec__18433,_,query,close_on_eose_QMARK_){
return (function (message){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nostr","handle-notice","nostr/handle-notice",836734448),message], null));
});})(seq__18437_18479,chunk__18438_18480,count__18439_18481,i__18440_18482,url_18496,seq__18437_18490__$1,temp__5804__auto___18489,relays,normalized_urls,subscriptions,map__18432,map__18432__$1,db,vec__18433,_,query,close_on_eose_QMARK_))
, "onerror": ((function (seq__18437_18479,chunk__18438_18480,count__18439_18481,i__18440_18482,url_18496,seq__18437_18490__$1,temp__5804__auto___18489,relays,normalized_urls,subscriptions,map__18432,map__18432__$1,db,vec__18433,_,query,close_on_eose_QMARK_){
return (function (error){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nostr","handle-error","nostr/handle-error",1769230156),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"relay","relay",257706994),url_18496,new cljs.core.Keyword(null,"error","error",-978969032),error], null)], null));
});})(seq__18437_18479,chunk__18438_18480,count__18439_18481,i__18440_18482,url_18496,seq__18437_18490__$1,temp__5804__auto___18489,relays,normalized_urls,subscriptions,map__18432,map__18432__$1,db,vec__18433,_,query,close_on_eose_QMARK_))
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subscriptions,cljs.core.assoc,url_18496,sub_18497);


var G__18498 = cljs.core.next(seq__18437_18490__$1);
var G__18499 = null;
var G__18500 = (0);
var G__18501 = (0);
seq__18437_18479 = G__18498;
chunk__18438_18480 = G__18499;
count__18439_18481 = G__18500;
i__18440_18482 = G__18501;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null);
}catch (e18436){var e = e18436;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"synchrono.client.nostrodamus","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/nostrodamus.cljs",62,8,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to subscribeMany",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.ex_message(e),new cljs.core.Keyword(null,"stack","stack",-793405930),e.stack], null)], null);
}),null)),null,(131),null);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null);
}}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("nostr","handle-event","nostr/handle-event",1583020724),(function (db,p__18441){
var vec__18442 = p__18441;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18442,(0),null);
var map__18445 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18442,(1),null);
var map__18445__$1 = cljs.core.__destructure_map(map__18445);
var relay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18445__$1,new cljs.core.Keyword(null,"relay","relay",257706994));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18445__$1,new cljs.core.Keyword(null,"event","event",301435442));
var event_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(event);
var event_kind = new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(event);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"synchrono.client.nostrodamus","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/nostrodamus.cljs",73,6,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Received Event",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event-id","event-id",2130210178),event_id,new cljs.core.Keyword(null,"event-kind","event-kind",-191230187),event_kind,new cljs.core.Keyword(null,"relay","relay",257706994),relay], null)], null);
}),null)),null,(132),null);

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event-id->event","event-id->event",-91447725),event_id], null),event),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kind->event-ids","kind->event-ids",-76054375),event_kind], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),event_id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event-id->relays","event-id->relays",1431421128),event_id], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),relay);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("nostr","handle-ok","nostr/handle-ok",-165977955),(function (db,p__18446){
var vec__18447 = p__18446;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18447,(0),null);
var event_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18447,(1),null);
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18447,(2),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18447,(3),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"synchrono.client.nostrodamus","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/nostrodamus.cljs",85,4,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Received OK",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event_id","event_id",-767275570),event_id,new cljs.core.Keyword(null,"success","success",1890645906),success_QMARK_,new cljs.core.Keyword(null,"message","message",-406056002),message], null)], null);
}),null)),null,(133),null);

return db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("nostr","handle-eose","nostr/handle-eose",1688335356),(function (db,p__18450){
var vec__18451 = p__18450;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18451,(0),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18451,(1),null);
var close_on_eose_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18451,(2),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"synchrono.client.nostrodamus","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/nostrodamus.cljs",94,4,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Received EOSE",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"close-on-eose?","close-on-eose?",-346920699),close_on_eose_QMARK_], null)], null);
}),null)),null,(134),null);

return db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("nostr","handle-notice","nostr/handle-notice",836734448),(function (db,p__18454){
var vec__18455 = p__18454;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18455,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18455,(1),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"synchrono.client.nostrodamus","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/nostrodamus.cljs",100,4,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Received Notice",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),message], null)], null);
}),null)),null,(135),null);

return db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("nostr","handle-error","nostr/handle-error",1769230156),(function (db,p__18458){
var vec__18459 = p__18458;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18459,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18459,(1),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"synchrono.client.nostrodamus","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/nostrodamus.cljs",106,4,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Received Error",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),error], null)], null);
}),null)),null,(136),null);

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"error","error",-978969032)], null),error);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("nostr","publish","nostr/publish",-1609920306),(function (p__18462,p__18463){
var map__18464 = p__18462;
var map__18464__$1 = cljs.core.__destructure_map(map__18464);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18464__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__18465 = p__18463;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18465,(0),null);
var kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18465,(1),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18465,(2),null);
var tags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18465,(3),null);
var public_key = new cljs.core.Keyword(null,"public-key","public-key",-2106850051).cljs$core$IFn$_invoke$arity$1(db);
var private_key = new cljs.core.Keyword(null,"private-key","private-key",426483388).cljs$core$IFn$_invoke$arity$1(db);
var relay_urls = new cljs.core.Keyword(null,"relays","relays",390472162).cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.not(private_key)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"synchrono.client.nostrodamus","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/nostrodamus.cljs",117,10,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["No private key"], null);
}),null)),null,(137),null);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null);
} else {
try{var normalized_urls = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(synchrono.client.nostrodamus.normalize_relay_url,relay_urls);
var event = synchrono.client.nostrodamus.create_event(public_key,kind,content,tags);
var finalized_event = module$node_modules$nostr_tools$lib$cjs$pure.finalizeEvent(event,module$node_modules$$noble$hashes$utils.hexToBytes(private_key));
var valid_QMARK_ = module$node_modules$nostr_tools$lib$cjs$pure.verifyEvent(finalized_event);
if(cljs.core.not(valid_QMARK_)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"synchrono.client.nostrodamus","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/nostrodamus.cljs",126,16,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Event verification failed"], null);
}),null)),null,(139),null);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null);
} else {
var promises = synchrono.client.nostrodamus.relay_pool.publish(cljs.core.clj__GT_js(normalized_urls),finalized_event);
var any_promise = Promise.any(promises);
any_promise.then((function (result){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"synchrono.client.nostrodamus","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/nostrodamus.cljs",134,25,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Published event",result], null);
}),null)),null,(140),null);

var clj_finalized_event = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(finalized_event,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nostr","subscribe-many","nostr/subscribe-many",-1663986525),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ids","ids",-998535796),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(clj_finalized_event)], null)], null)], null),true], null));
}),(function (error){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nostr","handle-error","nostr/handle-error",1769230156),error], null));
}));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null);
}
}catch (e18468){var e = e18468;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"synchrono.client.nostrodamus","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/nostrodamus.cljs",141,12,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to publish event",e], null);
}),null)),null,(138),null);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null);
}}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("nostr","get-relay-metadata","nostr/get-relay-metadata",-1174537541),(function (p__18469,p__18470){
var map__18471 = p__18469;
var map__18471__$1 = cljs.core.__destructure_map(map__18471);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18471__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__18472 = p__18470;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18472,(0),null);
var relay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18472,(1),null);
var http_url = (cljs.core.truth_(cljs.core.re_find(/^wss?:\/\//,relay))?clojure.string.replace(clojure.string.replace(relay,/^wss:\/\//,"https://"),/^ws:\/\//,"http://"):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.origin),cljs.core.str.cljs$core$IFn$_invoke$arity$1(relay)].join('')
);
return (new Promise((function (resolve,reject){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(http_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Accept","application/nostr+json"], null),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nostr","handle-relay-metadata","nostr/handle-relay-metadata",-201135476),relay,response], null));

return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(response) : resolve.call(null, response));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (error){
return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(error) : reject.call(null, error));
}),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)], 0));
}))).catch((function (error){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"synchrono.client.nostrodamus","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/nostrodamus.cljs",168,20,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Error fetching relay metadata",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"relay","relay",257706994),relay,new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.ex_message(error)], null)], null);
}),null)),null,(141),null);

throw error;
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("nostr","handle-relay-metadata","nostr/handle-relay-metadata",-201135476),(function (db,p__18475){
var vec__18476 = p__18475;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18476,(0),null);
var relay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18476,(1),null);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18476,(2),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"synchrono.client.nostrodamus","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/nostrodamus.cljs",176,4,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Received relay metadata",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"relay","relay",257706994),relay,new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata], null)], null);
}),null)),null,(142),null);

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relay->metadata","relay->metadata",1398253521),relay], null),metadata);
}));

//# sourceMappingURL=synchrono.client.nostrodamus.js.map
