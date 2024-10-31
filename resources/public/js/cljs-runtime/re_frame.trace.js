goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__14406){
var map__14407 = p__14406;
var map__14407__$1 = cljs.core.__destructure_map(map__14407);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14407__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14407__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14407__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14407__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5002__auto__ = child_of;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__14410_14439 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__14411_14440 = null;
var count__14412_14441 = (0);
var i__14413_14442 = (0);
while(true){
if((i__14413_14442 < count__14412_14441)){
var vec__14425_14443 = chunk__14411_14440.cljs$core$IIndexed$_nth$arity$2(null, i__14413_14442);
var k_14444 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14425_14443,(0),null);
var cb_14445 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14425_14443,(1),null);
try{var G__14430_14446 = cljs.core.deref(re_frame.trace.traces);
(cb_14445.cljs$core$IFn$_invoke$arity$1 ? cb_14445.cljs$core$IFn$_invoke$arity$1(G__14430_14446) : cb_14445.call(null, G__14430_14446));
}catch (e14428){var e_14447 = e14428;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_14444,"while storing",cljs.core.deref(re_frame.trace.traces),e_14447], 0));
}

var G__14448 = seq__14410_14439;
var G__14449 = chunk__14411_14440;
var G__14450 = count__14412_14441;
var G__14451 = (i__14413_14442 + (1));
seq__14410_14439 = G__14448;
chunk__14411_14440 = G__14449;
count__14412_14441 = G__14450;
i__14413_14442 = G__14451;
continue;
} else {
var temp__5804__auto___14452 = cljs.core.seq(seq__14410_14439);
if(temp__5804__auto___14452){
var seq__14410_14453__$1 = temp__5804__auto___14452;
if(cljs.core.chunked_seq_QMARK_(seq__14410_14453__$1)){
var c__5525__auto___14454 = cljs.core.chunk_first(seq__14410_14453__$1);
var G__14455 = cljs.core.chunk_rest(seq__14410_14453__$1);
var G__14456 = c__5525__auto___14454;
var G__14457 = cljs.core.count(c__5525__auto___14454);
var G__14458 = (0);
seq__14410_14439 = G__14455;
chunk__14411_14440 = G__14456;
count__14412_14441 = G__14457;
i__14413_14442 = G__14458;
continue;
} else {
var vec__14431_14459 = cljs.core.first(seq__14410_14453__$1);
var k_14460 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14431_14459,(0),null);
var cb_14461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14431_14459,(1),null);
try{var G__14435_14462 = cljs.core.deref(re_frame.trace.traces);
(cb_14461.cljs$core$IFn$_invoke$arity$1 ? cb_14461.cljs$core$IFn$_invoke$arity$1(G__14435_14462) : cb_14461.call(null, G__14435_14462));
}catch (e14434){var e_14463 = e14434;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_14460,"while storing",cljs.core.deref(re_frame.trace.traces),e_14463], 0));
}

var G__14464 = cljs.core.next(seq__14410_14453__$1);
var G__14465 = null;
var G__14466 = (0);
var G__14467 = (0);
seq__14410_14439 = G__14464;
chunk__14411_14440 = G__14465;
count__14412_14441 = G__14466;
i__14413_14442 = G__14467;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null, ));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
