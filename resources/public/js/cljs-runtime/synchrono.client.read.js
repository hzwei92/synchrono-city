goog.provide('synchrono.client.read');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"events-by-id","events-by-id",-359530454),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"events-by-id","events-by-id",-359530454)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"event-ids-by-kind","event-ids-by-kind",-2135185994),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"event-ids-by-kind","event-ids-by-kind",-2135185994)], null));
})], 0));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"subscribe-events","subscribe-events",-518605634),(function (p__18041){
var map__18042 = p__18041;
var map__18042__$1 = cljs.core.__destructure_map(map__18042);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18042__$1,new cljs.core.Keyword(null,"db","db",993250759));
var relay_list = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"relays-list","relays-list",-1087282965)], null));
var urls = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18040_SHARP_){
return new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(p1__18040_SHARP_);
}),relay_list);
synchrono.client.nostr.subscribe_many(urls,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kinds","kinds",-294501889),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.Keyword(null,"limit","limit",-1355822363),(50)], null));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null);
}));
synchrono.client.read.format_date = (function synchrono$client$read$format_date(unix_timestamp){
return (new Date((unix_timestamp * (1000)))).toLocaleString();
});
synchrono.client.read.event_card = (function synchrono$client$read$event_card(p__18043){
var map__18044 = p__18043;
var map__18044__$1 = cljs.core.__destructure_map(map__18044);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18044__$1,new cljs.core.Keyword(null,"content","content",15833224));
var created_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18044__$1,new cljs.core.Keyword(null,"created_at","created_at",1484050750));
var pubkey = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18044__$1,new cljs.core.Keyword(null,"pubkey","pubkey",-927805510));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.event-card","div.event-card",-1122590376),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #ddd",new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem",new cljs.core.Keyword(null,"margin","margin",-995903681),"0.5rem 0",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.event-header","div.event-header",-1032854787),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0.5rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pubkey","span.pubkey",-1958968612),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#666",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.9rem"], null)], null),[cljs.core.subs.cljs$core$IFn$_invoke$arity$3(pubkey,(0),(8)),"..."].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.timestamp","span.timestamp",1207246744),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"float","float",-1732389368),"right",new cljs.core.Keyword(null,"color","color",1011675173),"#666",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.9rem"], null)], null),synchrono.client.read.format_date(created_at)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),content], null)], null);
});
synchrono.client.read.read = (function synchrono$client$read$read(){
console.log("Read component mounted");

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.read","div.read",688450197),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.title","div.title",-1929547732),"read"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.subscribe-button","button.subscribe-button",-1506884637),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subscribe-events","subscribe-events",-518605634)], null));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"1rem",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.5rem 1rem",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#007bff",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null),"Subscribe to Events"], null),(function (){var event_kinds = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event-ids-by-kind","event-ids-by-kind",-2135185994)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.event-kinds","div.event-kinds",824760013),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.event-kind","div.event-kind",-2067296400),"Kind 0: Metadata",(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(event_kinds,(0)))?" (present)":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.event-kind","div.event-kind",-2067296400),"Kind 1: Short Text Note",(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(event_kinds,(1)))?" (present)":null)], null)], null);
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.events-list","div.events-list",1354226274),(function (){var events_by_id = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"events-by-id","events-by-id",-359530454)], null)));
var iter__5480__auto__ = (function synchrono$client$read$read_$_iter__18074(s__18075){
return (new cljs.core.LazySeq(null,(function (){
var s__18075__$1 = s__18075;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__18075__$1);
if(temp__5804__auto__){
var s__18075__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18075__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__18075__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__18084 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__18083 = (0);
while(true){
if((i__18083 < size__5479__auto__)){
var evt = cljs.core._nth(c__5478__auto__,i__18083);
cljs.core.chunk_append(b__18084,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [synchrono.client.read.event_card,evt], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(evt)], null)));

var G__18098 = (i__18083 + (1));
i__18083 = G__18098;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18084),synchrono$client$read$read_$_iter__18074(cljs.core.chunk_rest(s__18075__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18084),null);
}
} else {
var evt = cljs.core.first(s__18075__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [synchrono.client.read.event_card,evt], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(evt)], null)),synchrono$client$read$read_$_iter__18074(cljs.core.rest(s__18075__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"created_at","created_at",1484050750),cljs.core.vals(events_by_id))));
})()], null)], null);
});

//# sourceMappingURL=synchrono.client.read.js.map
