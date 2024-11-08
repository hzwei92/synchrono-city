goog.provide('synchrono.client.ws');
if((typeof synchrono !== 'undefined') && (typeof synchrono.client !== 'undefined') && (typeof synchrono.client.ws !== 'undefined') && (typeof synchrono.client.ws.ws_connections !== 'undefined')){
} else {
synchrono.client.ws.ws_connections = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
synchrono.client.ws.connect_websocket = (function synchrono$client$ws$connect_websocket(url){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Connecting to WebSocket at",url], 0));

if(cljs.core.truth_((function (){var fexpr__14472 = cljs.core.deref(synchrono.client.ws.ws_connections);
return (fexpr__14472.cljs$core$IFn$_invoke$arity$1 ? fexpr__14472.cljs$core$IFn$_invoke$arity$1(url) : fexpr__14472.call(null, url));
})())){
return null;
} else {
var ws = (new WebSocket(url));
(ws.onopen = (function (event){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws-connected","ws-connected",-736848691),url], null));

return console.log(["WebSocket connected to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event),")"].join(''));
}));

(ws.onmessage = (function (event){
var data = JSON.parse(event.data);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws-received-message","ws-received-message",-235493790),data,url], null));
}));

(ws.onclose = (function (event){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws-disconnected","ws-disconnected",-679781044),url], null));

console.log(["WebSocket disconnected from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event),")"].join(''));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(synchrono.client.ws.ws_connections,cljs.core.dissoc,url);
}));

(ws.onerror = (function (error){
return console.error(["WebSocket error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),":"].join(''),error);
}));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(synchrono.client.ws.ws_connections,cljs.core.assoc,url,ws);
}
});
synchrono.client.ws.send_ws_message = (function synchrono$client$ws$send_ws_message(message){
var seq__14473 = cljs.core.seq(cljs.core.deref(synchrono.client.ws.ws_connections));
var chunk__14474 = null;
var count__14475 = (0);
var i__14476 = (0);
while(true){
if((i__14476 < count__14475)){
var vec__14487 = chunk__14474.cljs$core$IIndexed$_nth$arity$2(null, i__14476);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14487,(0),null);
var ws = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14487,(1),null);
ws.send(JSON.stringify(message));


var G__14544 = seq__14473;
var G__14545 = chunk__14474;
var G__14546 = count__14475;
var G__14547 = (i__14476 + (1));
seq__14473 = G__14544;
chunk__14474 = G__14545;
count__14475 = G__14546;
i__14476 = G__14547;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14473);
if(temp__5804__auto__){
var seq__14473__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14473__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14473__$1);
var G__14548 = cljs.core.chunk_rest(seq__14473__$1);
var G__14549 = c__5525__auto__;
var G__14550 = cljs.core.count(c__5525__auto__);
var G__14551 = (0);
seq__14473 = G__14548;
chunk__14474 = G__14549;
count__14475 = G__14550;
i__14476 = G__14551;
continue;
} else {
var vec__14490 = cljs.core.first(seq__14473__$1);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14490,(0),null);
var ws = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14490,(1),null);
ws.send(JSON.stringify(message));


var G__14552 = cljs.core.next(seq__14473__$1);
var G__14553 = null;
var G__14554 = (0);
var G__14555 = (0);
seq__14473 = G__14552;
chunk__14474 = G__14553;
count__14475 = G__14554;
i__14476 = G__14555;
continue;
}
} else {
return null;
}
}
break;
}
});
synchrono.client.ws.send_ws_event = (function synchrono$client$ws$send_ws_event(event){
var message = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"event",new cljs.core.Keyword(null,"data","data",-232669377),event], null);
return synchrono.client.ws.send_ws_message(message);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ws-connected","ws-connected",-736848691),(function (p__14494,p__14495){
var map__14496 = p__14494;
var map__14496__$1 = cljs.core.__destructure_map(map__14496);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14496__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__14497 = p__14495;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14497,(0),null);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14497,(1),null);
var relays_list = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"relays-list","relays-list",-1087282965)], null));
var relay_index = cljs.core.to_array(relays_list).findIndex((function (p1__14493_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(p1__14493_SHARP_),url);
}));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"relays-list","relays-list",-1087282965),relay_index,new cljs.core.Keyword(null,"connected?","connected?",-1197551387)], null),true)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ws-disconnected","ws-disconnected",-679781044),(function (p__14501,p__14502){
var map__14503 = p__14501;
var map__14503__$1 = cljs.core.__destructure_map(map__14503);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14503__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__14504 = p__14502;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14504,(0),null);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14504,(1),null);
var relays_list = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"relays-list","relays-list",-1087282965)], null));
var relay_index = cljs.core.to_array(relays_list).findIndex((function (p1__14500_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(p1__14500_SHARP_),url);
}));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"relays-list","relays-list",-1087282965),relay_index,new cljs.core.Keyword(null,"connected?","connected?",-1197551387)], null),false)], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"ws-send","ws-send",-1223872562),(function (p__14509){
var map__14510 = p__14509;
var map__14510__$1 = cljs.core.__destructure_map(map__14510);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14510__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14510__$1,new cljs.core.Keyword(null,"event","event",301435442));
if(cljs.core.truth_(message)){
return synchrono.client.ws.send_ws_message(message);
} else {
if(cljs.core.truth_(event)){
return synchrono.client.ws.send_ws_event(event);
} else {
return null;
}
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ws-received-message","ws-received-message",-235493790),(function (p__14511,p__14512){
var map__14513 = p__14511;
var map__14513__$1 = cljs.core.__destructure_map(map__14513);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14513__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__14514 = p__14512;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14514,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14514,(1),null);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14514,(2),null);
var message_type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(data);
var G__14517 = message_type;
switch (G__14517) {
case "event":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handle-server-event","handle-server-event",-1252795208),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(data)], null)], null);

break;
case "response":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handle-server-response","handle-server-response",882501204),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(data)], null)], null);

break;
default:
return cljs.core.PersistentArrayMap.EMPTY;

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"handle-server-event","handle-server-event",-1252795208),(function (db,p__14522){
var vec__14523 = p__14522;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14523,(0),null);
var event_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14523,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"contracts","contracts",905357673),cljs.core.conj,event_data);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"handle-server-response","handle-server-response",882501204),(function (db,p__14530){
var vec__14531 = p__14530;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14531,(0),null);
var response_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14531,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"server-response","server-response",1181046148),response_data);
}));

//# sourceMappingURL=synchrono.client.ws.js.map
