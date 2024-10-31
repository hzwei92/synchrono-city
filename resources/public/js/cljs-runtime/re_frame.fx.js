goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null, re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__14743 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__14744 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__14744);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___14836 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___14836)){
var new_db_14837 = temp__5804__auto___14836;
var fexpr__14748_14838 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__14748_14838.cljs$core$IFn$_invoke$arity$1 ? fexpr__14748_14838.cljs$core$IFn$_invoke$arity$1(new_db_14837) : fexpr__14748_14838.call(null, new_db_14837));
} else {
}

var seq__14749 = cljs.core.seq(effects_without_db);
var chunk__14750 = null;
var count__14751 = (0);
var i__14752 = (0);
while(true){
if((i__14752 < count__14751)){
var vec__14761 = chunk__14750.cljs$core$IIndexed$_nth$arity$2(null, i__14752);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14761,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14761,(1),null);
var temp__5802__auto___14839 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___14839)){
var effect_fn_14840 = temp__5802__auto___14839;
(effect_fn_14840.cljs$core$IFn$_invoke$arity$1 ? effect_fn_14840.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_14840.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__14841 = seq__14749;
var G__14842 = chunk__14750;
var G__14843 = count__14751;
var G__14844 = (i__14752 + (1));
seq__14749 = G__14841;
chunk__14750 = G__14842;
count__14751 = G__14843;
i__14752 = G__14844;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14749);
if(temp__5804__auto__){
var seq__14749__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14749__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14749__$1);
var G__14845 = cljs.core.chunk_rest(seq__14749__$1);
var G__14846 = c__5525__auto__;
var G__14847 = cljs.core.count(c__5525__auto__);
var G__14848 = (0);
seq__14749 = G__14845;
chunk__14750 = G__14846;
count__14751 = G__14847;
i__14752 = G__14848;
continue;
} else {
var vec__14764 = cljs.core.first(seq__14749__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14764,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14764,(1),null);
var temp__5802__auto___14849 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___14849)){
var effect_fn_14850 = temp__5802__auto___14849;
(effect_fn_14850.cljs$core$IFn$_invoke$arity$1 ? effect_fn_14850.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_14850.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__14851 = cljs.core.next(seq__14749__$1);
var G__14852 = null;
var G__14853 = (0);
var G__14854 = (0);
seq__14749 = G__14851;
chunk__14750 = G__14852;
count__14751 = G__14853;
i__14752 = G__14854;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__14384__auto___14855 = re_frame.interop.now();
var duration__14385__auto___14856 = (end__14384__auto___14855 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__14385__auto___14856,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__14384__auto___14855);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__14743);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___14857 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___14857)){
var new_db_14858 = temp__5804__auto___14857;
var fexpr__14770_14859 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__14770_14859.cljs$core$IFn$_invoke$arity$1 ? fexpr__14770_14859.cljs$core$IFn$_invoke$arity$1(new_db_14858) : fexpr__14770_14859.call(null, new_db_14858));
} else {
}

var seq__14771 = cljs.core.seq(effects_without_db);
var chunk__14772 = null;
var count__14773 = (0);
var i__14774 = (0);
while(true){
if((i__14774 < count__14773)){
var vec__14782 = chunk__14772.cljs$core$IIndexed$_nth$arity$2(null, i__14774);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14782,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14782,(1),null);
var temp__5802__auto___14860 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___14860)){
var effect_fn_14861 = temp__5802__auto___14860;
(effect_fn_14861.cljs$core$IFn$_invoke$arity$1 ? effect_fn_14861.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_14861.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__14862 = seq__14771;
var G__14863 = chunk__14772;
var G__14864 = count__14773;
var G__14865 = (i__14774 + (1));
seq__14771 = G__14862;
chunk__14772 = G__14863;
count__14773 = G__14864;
i__14774 = G__14865;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14771);
if(temp__5804__auto__){
var seq__14771__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14771__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14771__$1);
var G__14866 = cljs.core.chunk_rest(seq__14771__$1);
var G__14867 = c__5525__auto__;
var G__14868 = cljs.core.count(c__5525__auto__);
var G__14869 = (0);
seq__14771 = G__14866;
chunk__14772 = G__14867;
count__14773 = G__14868;
i__14774 = G__14869;
continue;
} else {
var vec__14785 = cljs.core.first(seq__14771__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14785,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14785,(1),null);
var temp__5802__auto___14870 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___14870)){
var effect_fn_14871 = temp__5802__auto___14870;
(effect_fn_14871.cljs$core$IFn$_invoke$arity$1 ? effect_fn_14871.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_14871.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__14872 = cljs.core.next(seq__14771__$1);
var G__14873 = null;
var G__14874 = (0);
var G__14875 = (0);
seq__14771 = G__14872;
chunk__14772 = G__14873;
count__14773 = G__14874;
i__14774 = G__14875;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__14800){
var map__14801 = p__14800;
var map__14801__$1 = cljs.core.__destructure_map(map__14801);
var effect = map__14801__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14801__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14801__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__14804 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__14807 = null;
var count__14808 = (0);
var i__14809 = (0);
while(true){
if((i__14809 < count__14808)){
var effect = chunk__14807.cljs$core$IIndexed$_nth$arity$2(null, i__14809);
re_frame.fx.dispatch_later(effect);


var G__14876 = seq__14804;
var G__14877 = chunk__14807;
var G__14878 = count__14808;
var G__14879 = (i__14809 + (1));
seq__14804 = G__14876;
chunk__14807 = G__14877;
count__14808 = G__14878;
i__14809 = G__14879;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14804);
if(temp__5804__auto__){
var seq__14804__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14804__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14804__$1);
var G__14880 = cljs.core.chunk_rest(seq__14804__$1);
var G__14881 = c__5525__auto__;
var G__14882 = cljs.core.count(c__5525__auto__);
var G__14883 = (0);
seq__14804 = G__14880;
chunk__14807 = G__14881;
count__14808 = G__14882;
i__14809 = G__14883;
continue;
} else {
var effect = cljs.core.first(seq__14804__$1);
re_frame.fx.dispatch_later(effect);


var G__14884 = cljs.core.next(seq__14804__$1);
var G__14885 = null;
var G__14886 = (0);
var G__14887 = (0);
seq__14804 = G__14884;
chunk__14807 = G__14885;
count__14808 = G__14886;
i__14809 = G__14887;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__14810 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__14811 = null;
var count__14812 = (0);
var i__14813 = (0);
while(true){
if((i__14813 < count__14812)){
var vec__14820 = chunk__14811.cljs$core$IIndexed$_nth$arity$2(null, i__14813);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14820,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14820,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___14888 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___14888)){
var effect_fn_14889 = temp__5802__auto___14888;
(effect_fn_14889.cljs$core$IFn$_invoke$arity$1 ? effect_fn_14889.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_14889.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__14890 = seq__14810;
var G__14891 = chunk__14811;
var G__14892 = count__14812;
var G__14893 = (i__14813 + (1));
seq__14810 = G__14890;
chunk__14811 = G__14891;
count__14812 = G__14892;
i__14813 = G__14893;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14810);
if(temp__5804__auto__){
var seq__14810__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14810__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14810__$1);
var G__14894 = cljs.core.chunk_rest(seq__14810__$1);
var G__14895 = c__5525__auto__;
var G__14896 = cljs.core.count(c__5525__auto__);
var G__14897 = (0);
seq__14810 = G__14894;
chunk__14811 = G__14895;
count__14812 = G__14896;
i__14813 = G__14897;
continue;
} else {
var vec__14823 = cljs.core.first(seq__14810__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14823,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14823,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___14898 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___14898)){
var effect_fn_14899 = temp__5802__auto___14898;
(effect_fn_14899.cljs$core$IFn$_invoke$arity$1 ? effect_fn_14899.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_14899.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__14900 = cljs.core.next(seq__14810__$1);
var G__14901 = null;
var G__14902 = (0);
var G__14903 = (0);
seq__14810 = G__14900;
chunk__14811 = G__14901;
count__14812 = G__14902;
i__14813 = G__14903;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__14826 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__14827 = null;
var count__14828 = (0);
var i__14829 = (0);
while(true){
if((i__14829 < count__14828)){
var event = chunk__14827.cljs$core$IIndexed$_nth$arity$2(null, i__14829);
re_frame.router.dispatch(event);


var G__14904 = seq__14826;
var G__14905 = chunk__14827;
var G__14906 = count__14828;
var G__14907 = (i__14829 + (1));
seq__14826 = G__14904;
chunk__14827 = G__14905;
count__14828 = G__14906;
i__14829 = G__14907;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14826);
if(temp__5804__auto__){
var seq__14826__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14826__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14826__$1);
var G__14908 = cljs.core.chunk_rest(seq__14826__$1);
var G__14909 = c__5525__auto__;
var G__14910 = cljs.core.count(c__5525__auto__);
var G__14911 = (0);
seq__14826 = G__14908;
chunk__14827 = G__14909;
count__14828 = G__14910;
i__14829 = G__14911;
continue;
} else {
var event = cljs.core.first(seq__14826__$1);
re_frame.router.dispatch(event);


var G__14912 = cljs.core.next(seq__14826__$1);
var G__14913 = null;
var G__14914 = (0);
var G__14915 = (0);
seq__14826 = G__14912;
chunk__14827 = G__14913;
count__14828 = G__14914;
i__14829 = G__14915;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__14830 = cljs.core.seq(value);
var chunk__14831 = null;
var count__14832 = (0);
var i__14833 = (0);
while(true){
if((i__14833 < count__14832)){
var event = chunk__14831.cljs$core$IIndexed$_nth$arity$2(null, i__14833);
clear_event(event);


var G__14916 = seq__14830;
var G__14917 = chunk__14831;
var G__14918 = count__14832;
var G__14919 = (i__14833 + (1));
seq__14830 = G__14916;
chunk__14831 = G__14917;
count__14832 = G__14918;
i__14833 = G__14919;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14830);
if(temp__5804__auto__){
var seq__14830__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14830__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14830__$1);
var G__14920 = cljs.core.chunk_rest(seq__14830__$1);
var G__14921 = c__5525__auto__;
var G__14922 = cljs.core.count(c__5525__auto__);
var G__14923 = (0);
seq__14830 = G__14920;
chunk__14831 = G__14921;
count__14832 = G__14922;
i__14833 = G__14923;
continue;
} else {
var event = cljs.core.first(seq__14830__$1);
clear_event(event);


var G__14924 = cljs.core.next(seq__14830__$1);
var G__14925 = null;
var G__14926 = (0);
var G__14927 = (0);
seq__14830 = G__14924;
chunk__14831 = G__14925;
count__14832 = G__14926;
i__14833 = G__14927;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__14834 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__14835 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__14835);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__14384__auto___14928 = re_frame.interop.now();
var duration__14385__auto___14929 = (end__14384__auto___14928 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__14385__auto___14929,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__14384__auto___14928);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__14834);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
