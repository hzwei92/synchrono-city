goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__13405__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__13405 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13406__i = 0, G__13406__a = new Array(arguments.length -  0);
while (G__13406__i < G__13406__a.length) {G__13406__a[G__13406__i] = arguments[G__13406__i + 0]; ++G__13406__i;}
  args = new cljs.core.IndexedSeq(G__13406__a,0,null);
} 
return G__13405__delegate.call(this,args);};
G__13405.cljs$lang$maxFixedArity = 0;
G__13405.cljs$lang$applyTo = (function (arglist__13407){
var args = cljs.core.seq(arglist__13407);
return G__13405__delegate(args);
});
G__13405.cljs$core$IFn$_invoke$arity$variadic = G__13405__delegate;
return G__13405;
})()
);

(o.error = (function() { 
var G__13408__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__13408 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13409__i = 0, G__13409__a = new Array(arguments.length -  0);
while (G__13409__i < G__13409__a.length) {G__13409__a[G__13409__i] = arguments[G__13409__i + 0]; ++G__13409__i;}
  args = new cljs.core.IndexedSeq(G__13409__a,0,null);
} 
return G__13408__delegate.call(this,args);};
G__13408.cljs$lang$maxFixedArity = 0;
G__13408.cljs$lang$applyTo = (function (arglist__13410){
var args = cljs.core.seq(arglist__13410);
return G__13408__delegate(args);
});
G__13408.cljs$core$IFn$_invoke$arity$variadic = G__13408__delegate;
return G__13408;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
