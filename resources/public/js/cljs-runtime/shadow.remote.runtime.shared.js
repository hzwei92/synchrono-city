goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__14974){
var map__14975 = p__14974;
var map__14975__$1 = cljs.core.__destructure_map(map__14975);
var runtime = map__14975__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14975__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_15225 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_15225)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__14978 = runtime;
var G__14979 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_15225);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__14978,G__14979) : shadow.remote.runtime.shared.process.call(null, G__14978,G__14979));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__15004,res){
var map__15006 = p__15004;
var map__15006__$1 = cljs.core.__destructure_map(map__15006);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15006__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15006__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__15010 = res;
var G__15010__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15010,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__15010);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15010__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__15010__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__15020 = arguments.length;
switch (G__15020) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__15027,msg,handlers,timeout_after_ms){
var map__15028 = p__15027;
var map__15028__$1 = cljs.core.__destructure_map(map__15028);
var runtime = map__15028__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15028__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___15229 = arguments.length;
var i__5727__auto___15230 = (0);
while(true){
if((i__5727__auto___15230 < len__5726__auto___15229)){
args__5732__auto__.push((arguments[i__5727__auto___15230]));

var G__15231 = (i__5727__auto___15230 + (1));
i__5727__auto___15230 = G__15231;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__15074,ev,args){
var map__15079 = p__15074;
var map__15079__$1 = cljs.core.__destructure_map(map__15079);
var runtime = map__15079__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15079__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__15087 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__15090 = null;
var count__15091 = (0);
var i__15092 = (0);
while(true){
if((i__15092 < count__15091)){
var ext = chunk__15090.cljs$core$IIndexed$_nth$arity$2(null, i__15092);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__15234 = seq__15087;
var G__15235 = chunk__15090;
var G__15236 = count__15091;
var G__15237 = (i__15092 + (1));
seq__15087 = G__15234;
chunk__15090 = G__15235;
count__15091 = G__15236;
i__15092 = G__15237;
continue;
} else {
var G__15240 = seq__15087;
var G__15241 = chunk__15090;
var G__15242 = count__15091;
var G__15243 = (i__15092 + (1));
seq__15087 = G__15240;
chunk__15090 = G__15241;
count__15091 = G__15242;
i__15092 = G__15243;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15087);
if(temp__5804__auto__){
var seq__15087__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15087__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__15087__$1);
var G__15246 = cljs.core.chunk_rest(seq__15087__$1);
var G__15247 = c__5525__auto__;
var G__15248 = cljs.core.count(c__5525__auto__);
var G__15249 = (0);
seq__15087 = G__15246;
chunk__15090 = G__15247;
count__15091 = G__15248;
i__15092 = G__15249;
continue;
} else {
var ext = cljs.core.first(seq__15087__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__15250 = cljs.core.next(seq__15087__$1);
var G__15251 = null;
var G__15252 = (0);
var G__15253 = (0);
seq__15087 = G__15250;
chunk__15090 = G__15251;
count__15091 = G__15252;
i__15092 = G__15253;
continue;
} else {
var G__15254 = cljs.core.next(seq__15087__$1);
var G__15255 = null;
var G__15256 = (0);
var G__15257 = (0);
seq__15087 = G__15254;
chunk__15090 = G__15255;
count__15091 = G__15256;
i__15092 = G__15257;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq15047){
var G__15048 = cljs.core.first(seq15047);
var seq15047__$1 = cljs.core.next(seq15047);
var G__15049 = cljs.core.first(seq15047__$1);
var seq15047__$2 = cljs.core.next(seq15047__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15048,G__15049,seq15047__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__15103,p__15104){
var map__15105 = p__15103;
var map__15105__$1 = cljs.core.__destructure_map(map__15105);
var runtime = map__15105__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15105__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__15106 = p__15104;
var map__15106__$1 = cljs.core.__destructure_map(map__15106);
var msg = map__15106__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15106__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__15107 = cljs.core.deref(state_ref);
var map__15107__$1 = cljs.core.__destructure_map(map__15107);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15107__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15107__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__15123,msg){
var map__15124 = p__15123;
var map__15124__$1 = cljs.core.__destructure_map(map__15124);
var runtime = map__15124__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15124__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__15137,key,p__15138){
var map__15142 = p__15137;
var map__15142__$1 = cljs.core.__destructure_map(map__15142);
var state = map__15142__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15142__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__15143 = p__15138;
var map__15143__$1 = cljs.core.__destructure_map(map__15143);
var spec = map__15143__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15143__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15143__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__15147,key,spec){
var map__15148 = p__15147;
var map__15148__$1 = cljs.core.__destructure_map(map__15148);
var runtime = map__15148__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15148__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5808__auto___15261 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5808__auto___15261 == null)){
} else {
var on_welcome_15262 = temp__5808__auto___15261;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_15262.cljs$core$IFn$_invoke$arity$0 ? on_welcome_15262.cljs$core$IFn$_invoke$arity$0() : on_welcome_15262.call(null, ));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__15150_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__15150_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__15151_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__15151_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__15152_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__15152_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__15153_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__15153_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__15154_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__15154_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__15161,key){
var map__15162 = p__15161;
var map__15162__$1 = cljs.core.__destructure_map(map__15162);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15162__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__15165,msg){
var map__15166 = p__15165;
var map__15166__$1 = cljs.core.__destructure_map(map__15166);
var runtime = map__15166__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15166__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__15167,p__15168){
var map__15169 = p__15167;
var map__15169__$1 = cljs.core.__destructure_map(map__15169);
var runtime = map__15169__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15169__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__15171 = p__15168;
var map__15171__$1 = cljs.core.__destructure_map(map__15171);
var msg = map__15171__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15171__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15171__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null, msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__15198 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__15200 = null;
var count__15201 = (0);
var i__15202 = (0);
while(true){
if((i__15202 < count__15201)){
var map__15206 = chunk__15200.cljs$core$IIndexed$_nth$arity$2(null, i__15202);
var map__15206__$1 = cljs.core.__destructure_map(map__15206);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15206__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__15286 = seq__15198;
var G__15287 = chunk__15200;
var G__15288 = count__15201;
var G__15289 = (i__15202 + (1));
seq__15198 = G__15286;
chunk__15200 = G__15287;
count__15201 = G__15288;
i__15202 = G__15289;
continue;
} else {
var G__15291 = seq__15198;
var G__15292 = chunk__15200;
var G__15293 = count__15201;
var G__15294 = (i__15202 + (1));
seq__15198 = G__15291;
chunk__15200 = G__15292;
count__15201 = G__15293;
i__15202 = G__15294;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15198);
if(temp__5804__auto__){
var seq__15198__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15198__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__15198__$1);
var G__15297 = cljs.core.chunk_rest(seq__15198__$1);
var G__15298 = c__5525__auto__;
var G__15299 = cljs.core.count(c__5525__auto__);
var G__15300 = (0);
seq__15198 = G__15297;
chunk__15200 = G__15298;
count__15201 = G__15299;
i__15202 = G__15300;
continue;
} else {
var map__15212 = cljs.core.first(seq__15198__$1);
var map__15212__$1 = cljs.core.__destructure_map(map__15212);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15212__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__15303 = cljs.core.next(seq__15198__$1);
var G__15304 = null;
var G__15305 = (0);
var G__15306 = (0);
seq__15198 = G__15303;
chunk__15200 = G__15304;
count__15201 = G__15305;
i__15202 = G__15306;
continue;
} else {
var G__15307 = cljs.core.next(seq__15198__$1);
var G__15308 = null;
var G__15309 = (0);
var G__15310 = (0);
seq__15198 = G__15307;
chunk__15200 = G__15308;
count__15201 = G__15309;
i__15202 = G__15310;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
