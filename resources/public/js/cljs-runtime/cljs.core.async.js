goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14912 = (function (f,blockable,meta14913){
this.f = f;
this.blockable = blockable;
this.meta14913 = meta14913;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14912.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14914,meta14913__$1){
var self__ = this;
var _14914__$1 = this;
return (new cljs.core.async.t_cljs$core$async14912(self__.f,self__.blockable,meta14913__$1));
}));

(cljs.core.async.t_cljs$core$async14912.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14914){
var self__ = this;
var _14914__$1 = this;
return self__.meta14913;
}));

(cljs.core.async.t_cljs$core$async14912.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14912.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14912.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14912.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14912.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14913","meta14913",-857738926,null)], null);
}));

(cljs.core.async.t_cljs$core$async14912.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14912.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14912");

(cljs.core.async.t_cljs$core$async14912.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14912");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14912.
 */
cljs.core.async.__GT_t_cljs$core$async14912 = (function cljs$core$async$__GT_t_cljs$core$async14912(f,blockable,meta14913){
return (new cljs.core.async.t_cljs$core$async14912(f,blockable,meta14913));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14911 = arguments.length;
switch (G__14911) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async14912(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__14958 = arguments.length;
switch (G__14958) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14967 = arguments.length;
switch (G__14967) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__14969 = arguments.length;
switch (G__14969) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_18091 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18091) : fn1.call(null, val_18091));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18091) : fn1.call(null, val_18091));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__14971 = arguments.length;
switch (G__14971) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___18095 = n;
var x_18096 = (0);
while(true){
if((x_18096 < n__5593__auto___18095)){
(a[x_18096] = x_18096);

var G__18097 = (x_18096 + (1));
x_18096 = G__18097;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15007 = (function (flag,meta15008){
this.flag = flag;
this.meta15008 = meta15008;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15007.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15009,meta15008__$1){
var self__ = this;
var _15009__$1 = this;
return (new cljs.core.async.t_cljs$core$async15007(self__.flag,meta15008__$1));
}));

(cljs.core.async.t_cljs$core$async15007.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15009){
var self__ = this;
var _15009__$1 = this;
return self__.meta15008;
}));

(cljs.core.async.t_cljs$core$async15007.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15007.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15007.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15007.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async15007.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta15008","meta15008",-1566981531,null)], null);
}));

(cljs.core.async.t_cljs$core$async15007.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15007.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15007");

(cljs.core.async.t_cljs$core$async15007.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15007");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15007.
 */
cljs.core.async.__GT_t_cljs$core$async15007 = (function cljs$core$async$__GT_t_cljs$core$async15007(flag,meta15008){
return (new cljs.core.async.t_cljs$core$async15007(flag,meta15008));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async15007(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15112 = (function (flag,cb,meta15113){
this.flag = flag;
this.cb = cb;
this.meta15113 = meta15113;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15112.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15114,meta15113__$1){
var self__ = this;
var _15114__$1 = this;
return (new cljs.core.async.t_cljs$core$async15112(self__.flag,self__.cb,meta15113__$1));
}));

(cljs.core.async.t_cljs$core$async15112.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15114){
var self__ = this;
var _15114__$1 = this;
return self__.meta15113;
}));

(cljs.core.async.t_cljs$core$async15112.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15112.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15112.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15112.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async15112.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta15113","meta15113",-1737540732,null)], null);
}));

(cljs.core.async.t_cljs$core$async15112.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15112.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15112");

(cljs.core.async.t_cljs$core$async15112.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15112");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15112.
 */
cljs.core.async.__GT_t_cljs$core$async15112 = (function cljs$core$async$__GT_t_cljs$core$async15112(flag,cb,meta15113){
return (new cljs.core.async.t_cljs$core$async15112(flag,cb,meta15113));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async15112(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null, (0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null, (1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15127_SHARP_){
var G__15133 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15127_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15133) : fret.call(null, G__15133));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15129_SHARP_){
var G__15135 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15129_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15135) : fret.call(null, G__15135));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__18105 = (i + (1));
i = G__18105;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, );
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18108 = arguments.length;
var i__5727__auto___18109 = (0);
while(true){
if((i__5727__auto___18109 < len__5726__auto___18108)){
args__5732__auto__.push((arguments[i__5727__auto___18109]));

var G__18110 = (i__5727__auto___18109 + (1));
i__5727__auto___18109 = G__18110;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15158){
var map__15159 = p__15158;
var map__15159__$1 = cljs.core.__destructure_map(map__15159);
var opts = map__15159__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15155){
var G__15156 = cljs.core.first(seq15155);
var seq15155__$1 = cljs.core.next(seq15155);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15156,seq15155__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__15164 = arguments.length;
switch (G__15164) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14808__auto___18112 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14809__auto__ = (function (){var switch__14445__auto__ = (function (state_15194){
var state_val_15195 = (state_15194[(1)]);
if((state_val_15195 === (7))){
var inst_15190 = (state_15194[(2)]);
var state_15194__$1 = state_15194;
var statearr_15196_18114 = state_15194__$1;
(statearr_15196_18114[(2)] = inst_15190);

(statearr_15196_18114[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15195 === (1))){
var state_15194__$1 = state_15194;
var statearr_15197_18115 = state_15194__$1;
(statearr_15197_18115[(2)] = null);

(statearr_15197_18115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15195 === (4))){
var inst_15173 = (state_15194[(7)]);
var inst_15173__$1 = (state_15194[(2)]);
var inst_15174 = (inst_15173__$1 == null);
var state_15194__$1 = (function (){var statearr_15207 = state_15194;
(statearr_15207[(7)] = inst_15173__$1);

return statearr_15207;
})();
if(cljs.core.truth_(inst_15174)){
var statearr_15221_18116 = state_15194__$1;
(statearr_15221_18116[(1)] = (5));

} else {
var statearr_15222_18117 = state_15194__$1;
(statearr_15222_18117[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15195 === (13))){
var state_15194__$1 = state_15194;
var statearr_15227_18118 = state_15194__$1;
(statearr_15227_18118[(2)] = null);

(statearr_15227_18118[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15195 === (6))){
var inst_15173 = (state_15194[(7)]);
var state_15194__$1 = state_15194;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15194__$1,(11),to,inst_15173);
} else {
if((state_val_15195 === (3))){
var inst_15192 = (state_15194[(2)]);
var state_15194__$1 = state_15194;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15194__$1,inst_15192);
} else {
if((state_val_15195 === (12))){
var state_15194__$1 = state_15194;
var statearr_15313_18119 = state_15194__$1;
(statearr_15313_18119[(2)] = null);

(statearr_15313_18119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15195 === (2))){
var state_15194__$1 = state_15194;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15194__$1,(4),from);
} else {
if((state_val_15195 === (11))){
var inst_15183 = (state_15194[(2)]);
var state_15194__$1 = state_15194;
if(cljs.core.truth_(inst_15183)){
var statearr_15316_18121 = state_15194__$1;
(statearr_15316_18121[(1)] = (12));

} else {
var statearr_15317_18122 = state_15194__$1;
(statearr_15317_18122[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15195 === (9))){
var state_15194__$1 = state_15194;
var statearr_15318_18123 = state_15194__$1;
(statearr_15318_18123[(2)] = null);

(statearr_15318_18123[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15195 === (5))){
var state_15194__$1 = state_15194;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15319_18124 = state_15194__$1;
(statearr_15319_18124[(1)] = (8));

} else {
var statearr_15320_18126 = state_15194__$1;
(statearr_15320_18126[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15195 === (14))){
var inst_15188 = (state_15194[(2)]);
var state_15194__$1 = state_15194;
var statearr_15321_18127 = state_15194__$1;
(statearr_15321_18127[(2)] = inst_15188);

(statearr_15321_18127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15195 === (10))){
var inst_15180 = (state_15194[(2)]);
var state_15194__$1 = state_15194;
var statearr_15324_18131 = state_15194__$1;
(statearr_15324_18131[(2)] = inst_15180);

(statearr_15324_18131[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15195 === (8))){
var inst_15177 = cljs.core.async.close_BANG_(to);
var state_15194__$1 = state_15194;
var statearr_15325_18132 = state_15194__$1;
(statearr_15325_18132[(2)] = inst_15177);

(statearr_15325_18132[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14446__auto__ = null;
var cljs$core$async$state_machine__14446__auto____0 = (function (){
var statearr_15326 = [null,null,null,null,null,null,null,null];
(statearr_15326[(0)] = cljs$core$async$state_machine__14446__auto__);

(statearr_15326[(1)] = (1));

return statearr_15326;
});
var cljs$core$async$state_machine__14446__auto____1 = (function (state_15194){
while(true){
var ret_value__14447__auto__ = (function (){try{while(true){
var result__14448__auto__ = switch__14445__auto__(state_15194);
if(cljs.core.keyword_identical_QMARK_(result__14448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14448__auto__;
}
break;
}
}catch (e15327){var ex__14449__auto__ = e15327;
var statearr_15328_18133 = state_15194;
(statearr_15328_18133[(2)] = ex__14449__auto__);


if(cljs.core.seq((state_15194[(4)]))){
var statearr_15329_18134 = state_15194;
(statearr_15329_18134[(1)] = cljs.core.first((state_15194[(4)])));

} else {
throw ex__14449__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18135 = state_15194;
state_15194 = G__18135;
continue;
} else {
return ret_value__14447__auto__;
}
break;
}
});
cljs$core$async$state_machine__14446__auto__ = function(state_15194){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14446__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14446__auto____1.call(this,state_15194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14446__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14446__auto____0;
cljs$core$async$state_machine__14446__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14446__auto____1;
return cljs$core$async$state_machine__14446__auto__;
})()
})();
var state__14810__auto__ = (function (){var statearr_15330 = f__14809__auto__();
(statearr_15330[(6)] = c__14808__auto___18112);

return statearr_15330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14810__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__15331){
var vec__15332 = p__15331;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15332,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15332,(1),null);
var job = vec__15332;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14808__auto___18136 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14809__auto__ = (function (){var switch__14445__auto__ = (function (state_15339){
var state_val_15340 = (state_15339[(1)]);
if((state_val_15340 === (1))){
var state_15339__$1 = state_15339;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15339__$1,(2),res,v);
} else {
if((state_val_15340 === (2))){
var inst_15336 = (state_15339[(2)]);
var inst_15337 = cljs.core.async.close_BANG_(res);
var state_15339__$1 = (function (){var statearr_15342 = state_15339;
(statearr_15342[(7)] = inst_15336);

return statearr_15342;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15339__$1,inst_15337);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14446__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14446__auto____0 = (function (){
var statearr_15348 = [null,null,null,null,null,null,null,null];
(statearr_15348[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14446__auto__);

(statearr_15348[(1)] = (1));

return statearr_15348;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14446__auto____1 = (function (state_15339){
while(true){
var ret_value__14447__auto__ = (function (){try{while(true){
var result__14448__auto__ = switch__14445__auto__(state_15339);
if(cljs.core.keyword_identical_QMARK_(result__14448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14448__auto__;
}
break;
}
}catch (e15349){var ex__14449__auto__ = e15349;
var statearr_15350_18137 = state_15339;
(statearr_15350_18137[(2)] = ex__14449__auto__);


if(cljs.core.seq((state_15339[(4)]))){
var statearr_15355_18138 = state_15339;
(statearr_15355_18138[(1)] = cljs.core.first((state_15339[(4)])));

} else {
throw ex__14449__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18142 = state_15339;
state_15339 = G__18142;
continue;
} else {
return ret_value__14447__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14446__auto__ = function(state_15339){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14446__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14446__auto____1.call(this,state_15339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14446__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14446__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14446__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14446__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14446__auto__;
})()
})();
var state__14810__auto__ = (function (){var statearr_15361 = f__14809__auto__();
(statearr_15361[(6)] = c__14808__auto___18136);

return statearr_15361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14810__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__15366){
var vec__15367 = p__15366;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15367,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15367,(1),null);
var job = vec__15367;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null, v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___18143 = n;
var __18144 = (0);
while(true){
if((__18144 < n__5593__auto___18143)){
var G__15375_18145 = type;
var G__15375_18146__$1 = (((G__15375_18145 instanceof cljs.core.Keyword))?G__15375_18145.fqn:null);
switch (G__15375_18146__$1) {
case "compute":
var c__14808__auto___18152 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18144,c__14808__auto___18152,G__15375_18145,G__15375_18146__$1,n__5593__auto___18143,jobs,results,process__$1,async){
return (function (){
var f__14809__auto__ = (function (){var switch__14445__auto__ = ((function (__18144,c__14808__auto___18152,G__15375_18145,G__15375_18146__$1,n__5593__auto___18143,jobs,results,process__$1,async){
return (function (state_15395){
var state_val_15396 = (state_15395[(1)]);
if((state_val_15396 === (1))){
var state_15395__$1 = state_15395;
var statearr_15402_18161 = state_15395__$1;
(statearr_15402_18161[(2)] = null);

(statearr_15402_18161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15396 === (2))){
var state_15395__$1 = state_15395;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15395__$1,(4),jobs);
} else {
if((state_val_15396 === (3))){
var inst_15391 = (state_15395[(2)]);
var state_15395__$1 = state_15395;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15395__$1,inst_15391);
} else {
if((state_val_15396 === (4))){
var inst_15381 = (state_15395[(2)]);
var inst_15382 = process__$1(inst_15381);
var state_15395__$1 = state_15395;
if(cljs.core.truth_(inst_15382)){
var statearr_15416_18163 = state_15395__$1;
(statearr_15416_18163[(1)] = (5));

} else {
var statearr_15417_18164 = state_15395__$1;
(statearr_15417_18164[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15396 === (5))){
var state_15395__$1 = state_15395;
var statearr_15418_18165 = state_15395__$1;
(statearr_15418_18165[(2)] = null);

(statearr_15418_18165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15396 === (6))){
var state_15395__$1 = state_15395;
var statearr_15419_18166 = state_15395__$1;
(statearr_15419_18166[(2)] = null);

(statearr_15419_18166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15396 === (7))){
var inst_15389 = (state_15395[(2)]);
var state_15395__$1 = state_15395;
var statearr_15420_18167 = state_15395__$1;
(statearr_15420_18167[(2)] = inst_15389);

(statearr_15420_18167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18144,c__14808__auto___18152,G__15375_18145,G__15375_18146__$1,n__5593__auto___18143,jobs,results,process__$1,async))
;
return ((function (__18144,switch__14445__auto__,c__14808__auto___18152,G__15375_18145,G__15375_18146__$1,n__5593__auto___18143,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14446__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14446__auto____0 = (function (){
var statearr_15431 = [null,null,null,null,null,null,null];
(statearr_15431[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14446__auto__);

(statearr_15431[(1)] = (1));

return statearr_15431;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14446__auto____1 = (function (state_15395){
while(true){
var ret_value__14447__auto__ = (function (){try{while(true){
var result__14448__auto__ = switch__14445__auto__(state_15395);
if(cljs.core.keyword_identical_QMARK_(result__14448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14448__auto__;
}
break;
}
}catch (e15435){var ex__14449__auto__ = e15435;
var statearr_15436_18169 = state_15395;
(statearr_15436_18169[(2)] = ex__14449__auto__);


if(cljs.core.seq((state_15395[(4)]))){
var statearr_15437_18170 = state_15395;
(statearr_15437_18170[(1)] = cljs.core.first((state_15395[(4)])));

} else {
throw ex__14449__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18171 = state_15395;
state_15395 = G__18171;
continue;
} else {
return ret_value__14447__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14446__auto__ = function(state_15395){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14446__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14446__auto____1.call(this,state_15395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14446__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14446__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14446__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14446__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14446__auto__;
})()
;})(__18144,switch__14445__auto__,c__14808__auto___18152,G__15375_18145,G__15375_18146__$1,n__5593__auto___18143,jobs,results,process__$1,async))
})();
var state__14810__auto__ = (function (){var statearr_15438 = f__14809__auto__();
(statearr_15438[(6)] = c__14808__auto___18152);

return statearr_15438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14810__auto__);
});})(__18144,c__14808__auto___18152,G__15375_18145,G__15375_18146__$1,n__5593__auto___18143,jobs,results,process__$1,async))
);


break;
case "async":
var c__14808__auto___18172 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18144,c__14808__auto___18172,G__15375_18145,G__15375_18146__$1,n__5593__auto___18143,jobs,results,process__$1,async){
return (function (){
var f__14809__auto__ = (function (){var switch__14445__auto__ = ((function (__18144,c__14808__auto___18172,G__15375_18145,G__15375_18146__$1,n__5593__auto___18143,jobs,results,process__$1,async){
return (function (state_15457){
var state_val_15458 = (state_15457[(1)]);
if((state_val_15458 === (1))){
var state_15457__$1 = state_15457;
var statearr_15461_18177 = state_15457__$1;
(statearr_15461_18177[(2)] = null);

(statearr_15461_18177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15458 === (2))){
var state_15457__$1 = state_15457;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15457__$1,(4),jobs);
} else {
if((state_val_15458 === (3))){
var inst_15452 = (state_15457[(2)]);
var state_15457__$1 = state_15457;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15457__$1,inst_15452);
} else {
if((state_val_15458 === (4))){
var inst_15441 = (state_15457[(2)]);
var inst_15442 = async(inst_15441);
var state_15457__$1 = state_15457;
if(cljs.core.truth_(inst_15442)){
var statearr_15467_18186 = state_15457__$1;
(statearr_15467_18186[(1)] = (5));

} else {
var statearr_15469_18187 = state_15457__$1;
(statearr_15469_18187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15458 === (5))){
var state_15457__$1 = state_15457;
var statearr_15470_18188 = state_15457__$1;
(statearr_15470_18188[(2)] = null);

(statearr_15470_18188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15458 === (6))){
var state_15457__$1 = state_15457;
var statearr_15471_18192 = state_15457__$1;
(statearr_15471_18192[(2)] = null);

(statearr_15471_18192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15458 === (7))){
var inst_15447 = (state_15457[(2)]);
var state_15457__$1 = state_15457;
var statearr_15472_18194 = state_15457__$1;
(statearr_15472_18194[(2)] = inst_15447);

(statearr_15472_18194[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18144,c__14808__auto___18172,G__15375_18145,G__15375_18146__$1,n__5593__auto___18143,jobs,results,process__$1,async))
;
return ((function (__18144,switch__14445__auto__,c__14808__auto___18172,G__15375_18145,G__15375_18146__$1,n__5593__auto___18143,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14446__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14446__auto____0 = (function (){
var statearr_15473 = [null,null,null,null,null,null,null];
(statearr_15473[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14446__auto__);

(statearr_15473[(1)] = (1));

return statearr_15473;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14446__auto____1 = (function (state_15457){
while(true){
var ret_value__14447__auto__ = (function (){try{while(true){
var result__14448__auto__ = switch__14445__auto__(state_15457);
if(cljs.core.keyword_identical_QMARK_(result__14448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14448__auto__;
}
break;
}
}catch (e15474){var ex__14449__auto__ = e15474;
var statearr_15475_18197 = state_15457;
(statearr_15475_18197[(2)] = ex__14449__auto__);


if(cljs.core.seq((state_15457[(4)]))){
var statearr_15476_18198 = state_15457;
(statearr_15476_18198[(1)] = cljs.core.first((state_15457[(4)])));

} else {
throw ex__14449__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18199 = state_15457;
state_15457 = G__18199;
continue;
} else {
return ret_value__14447__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14446__auto__ = function(state_15457){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14446__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14446__auto____1.call(this,state_15457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14446__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14446__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14446__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14446__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14446__auto__;
})()
;})(__18144,switch__14445__auto__,c__14808__auto___18172,G__15375_18145,G__15375_18146__$1,n__5593__auto___18143,jobs,results,process__$1,async))
})();
var state__14810__auto__ = (function (){var statearr_15478 = f__14809__auto__();
(statearr_15478[(6)] = c__14808__auto___18172);

return statearr_15478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14810__auto__);
});})(__18144,c__14808__auto___18172,G__15375_18145,G__15375_18146__$1,n__5593__auto___18143,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15375_18146__$1)].join('')));

}

var G__18200 = (__18144 + (1));
__18144 = G__18200;
continue;
} else {
}
break;
}

var c__14808__auto___18201 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14809__auto__ = (function (){var switch__14445__auto__ = (function (state_15529){
var state_val_15530 = (state_15529[(1)]);
if((state_val_15530 === (7))){
var inst_15525 = (state_15529[(2)]);
var state_15529__$1 = state_15529;
var statearr_15533_18202 = state_15529__$1;
(statearr_15533_18202[(2)] = inst_15525);

(statearr_15533_18202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15530 === (1))){
var state_15529__$1 = state_15529;
var statearr_15534_18203 = state_15529__$1;
(statearr_15534_18203[(2)] = null);

(statearr_15534_18203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15530 === (4))){
var inst_15486 = (state_15529[(7)]);
var inst_15486__$1 = (state_15529[(2)]);
var inst_15488 = (inst_15486__$1 == null);
var state_15529__$1 = (function (){var statearr_15539 = state_15529;
(statearr_15539[(7)] = inst_15486__$1);

return statearr_15539;
})();
if(cljs.core.truth_(inst_15488)){
var statearr_15540_18204 = state_15529__$1;
(statearr_15540_18204[(1)] = (5));

} else {
var statearr_15541_18205 = state_15529__$1;
(statearr_15541_18205[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15530 === (6))){
var inst_15486 = (state_15529[(7)]);
var inst_15492 = (state_15529[(8)]);
var inst_15492__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15511 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15512 = [inst_15486,inst_15492__$1];
var inst_15513 = (new cljs.core.PersistentVector(null,2,(5),inst_15511,inst_15512,null));
var state_15529__$1 = (function (){var statearr_15543 = state_15529;
(statearr_15543[(8)] = inst_15492__$1);

return statearr_15543;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15529__$1,(8),jobs,inst_15513);
} else {
if((state_val_15530 === (3))){
var inst_15527 = (state_15529[(2)]);
var state_15529__$1 = state_15529;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15529__$1,inst_15527);
} else {
if((state_val_15530 === (2))){
var state_15529__$1 = state_15529;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15529__$1,(4),from);
} else {
if((state_val_15530 === (9))){
var inst_15522 = (state_15529[(2)]);
var state_15529__$1 = (function (){var statearr_15548 = state_15529;
(statearr_15548[(9)] = inst_15522);

return statearr_15548;
})();
var statearr_15550_18222 = state_15529__$1;
(statearr_15550_18222[(2)] = null);

(statearr_15550_18222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15530 === (5))){
var inst_15490 = cljs.core.async.close_BANG_(jobs);
var state_15529__$1 = state_15529;
var statearr_15555_18239 = state_15529__$1;
(statearr_15555_18239[(2)] = inst_15490);

(statearr_15555_18239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15530 === (8))){
var inst_15492 = (state_15529[(8)]);
var inst_15520 = (state_15529[(2)]);
var state_15529__$1 = (function (){var statearr_15556 = state_15529;
(statearr_15556[(10)] = inst_15520);

return statearr_15556;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15529__$1,(9),results,inst_15492);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14446__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14446__auto____0 = (function (){
var statearr_15558 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15558[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14446__auto__);

(statearr_15558[(1)] = (1));

return statearr_15558;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14446__auto____1 = (function (state_15529){
while(true){
var ret_value__14447__auto__ = (function (){try{while(true){
var result__14448__auto__ = switch__14445__auto__(state_15529);
if(cljs.core.keyword_identical_QMARK_(result__14448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14448__auto__;
}
break;
}
}catch (e15560){var ex__14449__auto__ = e15560;
var statearr_15561_18256 = state_15529;
(statearr_15561_18256[(2)] = ex__14449__auto__);


if(cljs.core.seq((state_15529[(4)]))){
var statearr_15562_18257 = state_15529;
(statearr_15562_18257[(1)] = cljs.core.first((state_15529[(4)])));

} else {
throw ex__14449__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18258 = state_15529;
state_15529 = G__18258;
continue;
} else {
return ret_value__14447__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14446__auto__ = function(state_15529){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14446__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14446__auto____1.call(this,state_15529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14446__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14446__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14446__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14446__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14446__auto__;
})()
})();
var state__14810__auto__ = (function (){var statearr_15571 = f__14809__auto__();
(statearr_15571[(6)] = c__14808__auto___18201);

return statearr_15571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14810__auto__);
}));


var c__14808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14809__auto__ = (function (){var switch__14445__auto__ = (function (state_15612){
var state_val_15613 = (state_15612[(1)]);
if((state_val_15613 === (7))){
var inst_15607 = (state_15612[(2)]);
var state_15612__$1 = state_15612;
var statearr_15624_18259 = state_15612__$1;
(statearr_15624_18259[(2)] = inst_15607);

(statearr_15624_18259[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15613 === (20))){
var state_15612__$1 = state_15612;
var statearr_15630_18260 = state_15612__$1;
(statearr_15630_18260[(2)] = null);

(statearr_15630_18260[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15613 === (1))){
var state_15612__$1 = state_15612;
var statearr_15637_18261 = state_15612__$1;
(statearr_15637_18261[(2)] = null);

(statearr_15637_18261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15613 === (4))){
var inst_15575 = (state_15612[(7)]);
var inst_15575__$1 = (state_15612[(2)]);
var inst_15576 = (inst_15575__$1 == null);
var state_15612__$1 = (function (){var statearr_15639 = state_15612;
(statearr_15639[(7)] = inst_15575__$1);

return statearr_15639;
})();
if(cljs.core.truth_(inst_15576)){
var statearr_15640_18262 = state_15612__$1;
(statearr_15640_18262[(1)] = (5));

} else {
var statearr_15641_18263 = state_15612__$1;
(statearr_15641_18263[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15613 === (15))){
var inst_15588 = (state_15612[(8)]);
var state_15612__$1 = state_15612;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15612__$1,(18),to,inst_15588);
} else {
if((state_val_15613 === (21))){
var inst_15602 = (state_15612[(2)]);
var state_15612__$1 = state_15612;
var statearr_15642_18267 = state_15612__$1;
(statearr_15642_18267[(2)] = inst_15602);

(statearr_15642_18267[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15613 === (13))){
var inst_15604 = (state_15612[(2)]);
var state_15612__$1 = (function (){var statearr_15644 = state_15612;
(statearr_15644[(9)] = inst_15604);

return statearr_15644;
})();
var statearr_15645_18268 = state_15612__$1;
(statearr_15645_18268[(2)] = null);

(statearr_15645_18268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15613 === (6))){
var inst_15575 = (state_15612[(7)]);
var state_15612__$1 = state_15612;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15612__$1,(11),inst_15575);
} else {
if((state_val_15613 === (17))){
var inst_15597 = (state_15612[(2)]);
var state_15612__$1 = state_15612;
if(cljs.core.truth_(inst_15597)){
var statearr_15646_18269 = state_15612__$1;
(statearr_15646_18269[(1)] = (19));

} else {
var statearr_15647_18270 = state_15612__$1;
(statearr_15647_18270[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15613 === (3))){
var inst_15609 = (state_15612[(2)]);
var state_15612__$1 = state_15612;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15612__$1,inst_15609);
} else {
if((state_val_15613 === (12))){
var inst_15585 = (state_15612[(10)]);
var state_15612__$1 = state_15612;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15612__$1,(14),inst_15585);
} else {
if((state_val_15613 === (2))){
var state_15612__$1 = state_15612;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15612__$1,(4),results);
} else {
if((state_val_15613 === (19))){
var state_15612__$1 = state_15612;
var statearr_15673_18271 = state_15612__$1;
(statearr_15673_18271[(2)] = null);

(statearr_15673_18271[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15613 === (11))){
var inst_15585 = (state_15612[(2)]);
var state_15612__$1 = (function (){var statearr_15674 = state_15612;
(statearr_15674[(10)] = inst_15585);

return statearr_15674;
})();
var statearr_15675_18272 = state_15612__$1;
(statearr_15675_18272[(2)] = null);

(statearr_15675_18272[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15613 === (9))){
var state_15612__$1 = state_15612;
var statearr_15676_18273 = state_15612__$1;
(statearr_15676_18273[(2)] = null);

(statearr_15676_18273[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15613 === (5))){
var state_15612__$1 = state_15612;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15677_18278 = state_15612__$1;
(statearr_15677_18278[(1)] = (8));

} else {
var statearr_15678_18279 = state_15612__$1;
(statearr_15678_18279[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15613 === (14))){
var inst_15588 = (state_15612[(8)]);
var inst_15591 = (state_15612[(11)]);
var inst_15588__$1 = (state_15612[(2)]);
var inst_15590 = (inst_15588__$1 == null);
var inst_15591__$1 = cljs.core.not(inst_15590);
var state_15612__$1 = (function (){var statearr_15679 = state_15612;
(statearr_15679[(8)] = inst_15588__$1);

(statearr_15679[(11)] = inst_15591__$1);

return statearr_15679;
})();
if(inst_15591__$1){
var statearr_15680_18280 = state_15612__$1;
(statearr_15680_18280[(1)] = (15));

} else {
var statearr_15681_18281 = state_15612__$1;
(statearr_15681_18281[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15613 === (16))){
var inst_15591 = (state_15612[(11)]);
var state_15612__$1 = state_15612;
var statearr_15682_18282 = state_15612__$1;
(statearr_15682_18282[(2)] = inst_15591);

(statearr_15682_18282[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15613 === (10))){
var inst_15582 = (state_15612[(2)]);
var state_15612__$1 = state_15612;
var statearr_15683_18283 = state_15612__$1;
(statearr_15683_18283[(2)] = inst_15582);

(statearr_15683_18283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15613 === (18))){
var inst_15594 = (state_15612[(2)]);
var state_15612__$1 = state_15612;
var statearr_15684_18284 = state_15612__$1;
(statearr_15684_18284[(2)] = inst_15594);

(statearr_15684_18284[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15613 === (8))){
var inst_15579 = cljs.core.async.close_BANG_(to);
var state_15612__$1 = state_15612;
var statearr_15685_18285 = state_15612__$1;
(statearr_15685_18285[(2)] = inst_15579);

(statearr_15685_18285[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14446__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14446__auto____0 = (function (){
var statearr_15687 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15687[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14446__auto__);

(statearr_15687[(1)] = (1));

return statearr_15687;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14446__auto____1 = (function (state_15612){
while(true){
var ret_value__14447__auto__ = (function (){try{while(true){
var result__14448__auto__ = switch__14445__auto__(state_15612);
if(cljs.core.keyword_identical_QMARK_(result__14448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14448__auto__;
}
break;
}
}catch (e15689){var ex__14449__auto__ = e15689;
var statearr_15690_18289 = state_15612;
(statearr_15690_18289[(2)] = ex__14449__auto__);


if(cljs.core.seq((state_15612[(4)]))){
var statearr_15691_18290 = state_15612;
(statearr_15691_18290[(1)] = cljs.core.first((state_15612[(4)])));

} else {
throw ex__14449__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18291 = state_15612;
state_15612 = G__18291;
continue;
} else {
return ret_value__14447__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14446__auto__ = function(state_15612){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14446__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14446__auto____1.call(this,state_15612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14446__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14446__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14446__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14446__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14446__auto__;
})()
})();
var state__14810__auto__ = (function (){var statearr_15693 = f__14809__auto__();
(statearr_15693[(6)] = c__14808__auto__);

return statearr_15693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14810__auto__);
}));

return c__14808__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15695 = arguments.length;
switch (G__15695) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__15715 = arguments.length;
switch (G__15715) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__15729 = arguments.length;
switch (G__15729) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14808__auto___18298 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14809__auto__ = (function (){var switch__14445__auto__ = (function (state_15781){
var state_val_15782 = (state_15781[(1)]);
if((state_val_15782 === (7))){
var inst_15777 = (state_15781[(2)]);
var state_15781__$1 = state_15781;
var statearr_15789_18299 = state_15781__$1;
(statearr_15789_18299[(2)] = inst_15777);

(statearr_15789_18299[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15782 === (1))){
var state_15781__$1 = state_15781;
var statearr_15790_18300 = state_15781__$1;
(statearr_15790_18300[(2)] = null);

(statearr_15790_18300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15782 === (4))){
var inst_15758 = (state_15781[(7)]);
var inst_15758__$1 = (state_15781[(2)]);
var inst_15759 = (inst_15758__$1 == null);
var state_15781__$1 = (function (){var statearr_15797 = state_15781;
(statearr_15797[(7)] = inst_15758__$1);

return statearr_15797;
})();
if(cljs.core.truth_(inst_15759)){
var statearr_15798_18319 = state_15781__$1;
(statearr_15798_18319[(1)] = (5));

} else {
var statearr_15799_18320 = state_15781__$1;
(statearr_15799_18320[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15782 === (13))){
var state_15781__$1 = state_15781;
var statearr_15800_18321 = state_15781__$1;
(statearr_15800_18321[(2)] = null);

(statearr_15800_18321[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15782 === (6))){
var inst_15758 = (state_15781[(7)]);
var inst_15764 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15758) : p.call(null, inst_15758));
var state_15781__$1 = state_15781;
if(cljs.core.truth_(inst_15764)){
var statearr_15801_18322 = state_15781__$1;
(statearr_15801_18322[(1)] = (9));

} else {
var statearr_15807_18323 = state_15781__$1;
(statearr_15807_18323[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15782 === (3))){
var inst_15779 = (state_15781[(2)]);
var state_15781__$1 = state_15781;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15781__$1,inst_15779);
} else {
if((state_val_15782 === (12))){
var state_15781__$1 = state_15781;
var statearr_15808_18324 = state_15781__$1;
(statearr_15808_18324[(2)] = null);

(statearr_15808_18324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15782 === (2))){
var state_15781__$1 = state_15781;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15781__$1,(4),ch);
} else {
if((state_val_15782 === (11))){
var inst_15758 = (state_15781[(7)]);
var inst_15768 = (state_15781[(2)]);
var state_15781__$1 = state_15781;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15781__$1,(8),inst_15768,inst_15758);
} else {
if((state_val_15782 === (9))){
var state_15781__$1 = state_15781;
var statearr_15812_18330 = state_15781__$1;
(statearr_15812_18330[(2)] = tc);

(statearr_15812_18330[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15782 === (5))){
var inst_15761 = cljs.core.async.close_BANG_(tc);
var inst_15762 = cljs.core.async.close_BANG_(fc);
var state_15781__$1 = (function (){var statearr_15813 = state_15781;
(statearr_15813[(8)] = inst_15761);

return statearr_15813;
})();
var statearr_15814_18332 = state_15781__$1;
(statearr_15814_18332[(2)] = inst_15762);

(statearr_15814_18332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15782 === (14))){
var inst_15775 = (state_15781[(2)]);
var state_15781__$1 = state_15781;
var statearr_15818_18333 = state_15781__$1;
(statearr_15818_18333[(2)] = inst_15775);

(statearr_15818_18333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15782 === (10))){
var state_15781__$1 = state_15781;
var statearr_15822_18334 = state_15781__$1;
(statearr_15822_18334[(2)] = fc);

(statearr_15822_18334[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15782 === (8))){
var inst_15770 = (state_15781[(2)]);
var state_15781__$1 = state_15781;
if(cljs.core.truth_(inst_15770)){
var statearr_15827_18335 = state_15781__$1;
(statearr_15827_18335[(1)] = (12));

} else {
var statearr_15829_18336 = state_15781__$1;
(statearr_15829_18336[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14446__auto__ = null;
var cljs$core$async$state_machine__14446__auto____0 = (function (){
var statearr_15836 = [null,null,null,null,null,null,null,null,null];
(statearr_15836[(0)] = cljs$core$async$state_machine__14446__auto__);

(statearr_15836[(1)] = (1));

return statearr_15836;
});
var cljs$core$async$state_machine__14446__auto____1 = (function (state_15781){
while(true){
var ret_value__14447__auto__ = (function (){try{while(true){
var result__14448__auto__ = switch__14445__auto__(state_15781);
if(cljs.core.keyword_identical_QMARK_(result__14448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14448__auto__;
}
break;
}
}catch (e15837){var ex__14449__auto__ = e15837;
var statearr_15838_18348 = state_15781;
(statearr_15838_18348[(2)] = ex__14449__auto__);


if(cljs.core.seq((state_15781[(4)]))){
var statearr_15839_18349 = state_15781;
(statearr_15839_18349[(1)] = cljs.core.first((state_15781[(4)])));

} else {
throw ex__14449__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18350 = state_15781;
state_15781 = G__18350;
continue;
} else {
return ret_value__14447__auto__;
}
break;
}
});
cljs$core$async$state_machine__14446__auto__ = function(state_15781){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14446__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14446__auto____1.call(this,state_15781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14446__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14446__auto____0;
cljs$core$async$state_machine__14446__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14446__auto____1;
return cljs$core$async$state_machine__14446__auto__;
})()
})();
var state__14810__auto__ = (function (){var statearr_15840 = f__14809__auto__();
(statearr_15840[(6)] = c__14808__auto___18298);

return statearr_15840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14810__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14809__auto__ = (function (){var switch__14445__auto__ = (function (state_15862){
var state_val_15863 = (state_15862[(1)]);
if((state_val_15863 === (7))){
var inst_15858 = (state_15862[(2)]);
var state_15862__$1 = state_15862;
var statearr_15873_18351 = state_15862__$1;
(statearr_15873_18351[(2)] = inst_15858);

(statearr_15873_18351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15863 === (1))){
var inst_15841 = init;
var inst_15842 = inst_15841;
var state_15862__$1 = (function (){var statearr_15874 = state_15862;
(statearr_15874[(7)] = inst_15842);

return statearr_15874;
})();
var statearr_15875_18352 = state_15862__$1;
(statearr_15875_18352[(2)] = null);

(statearr_15875_18352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15863 === (4))){
var inst_15845 = (state_15862[(8)]);
var inst_15845__$1 = (state_15862[(2)]);
var inst_15846 = (inst_15845__$1 == null);
var state_15862__$1 = (function (){var statearr_15884 = state_15862;
(statearr_15884[(8)] = inst_15845__$1);

return statearr_15884;
})();
if(cljs.core.truth_(inst_15846)){
var statearr_15885_18358 = state_15862__$1;
(statearr_15885_18358[(1)] = (5));

} else {
var statearr_15887_18359 = state_15862__$1;
(statearr_15887_18359[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15863 === (6))){
var inst_15849 = (state_15862[(9)]);
var inst_15842 = (state_15862[(7)]);
var inst_15845 = (state_15862[(8)]);
var inst_15849__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15842,inst_15845) : f.call(null, inst_15842,inst_15845));
var inst_15850 = cljs.core.reduced_QMARK_(inst_15849__$1);
var state_15862__$1 = (function (){var statearr_15888 = state_15862;
(statearr_15888[(9)] = inst_15849__$1);

return statearr_15888;
})();
if(inst_15850){
var statearr_15889_18363 = state_15862__$1;
(statearr_15889_18363[(1)] = (8));

} else {
var statearr_15890_18364 = state_15862__$1;
(statearr_15890_18364[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15863 === (3))){
var inst_15860 = (state_15862[(2)]);
var state_15862__$1 = state_15862;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15862__$1,inst_15860);
} else {
if((state_val_15863 === (2))){
var state_15862__$1 = state_15862;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15862__$1,(4),ch);
} else {
if((state_val_15863 === (9))){
var inst_15849 = (state_15862[(9)]);
var inst_15842 = inst_15849;
var state_15862__$1 = (function (){var statearr_15892 = state_15862;
(statearr_15892[(7)] = inst_15842);

return statearr_15892;
})();
var statearr_15893_18369 = state_15862__$1;
(statearr_15893_18369[(2)] = null);

(statearr_15893_18369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15863 === (5))){
var inst_15842 = (state_15862[(7)]);
var state_15862__$1 = state_15862;
var statearr_15894_18370 = state_15862__$1;
(statearr_15894_18370[(2)] = inst_15842);

(statearr_15894_18370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15863 === (10))){
var inst_15856 = (state_15862[(2)]);
var state_15862__$1 = state_15862;
var statearr_15903_18381 = state_15862__$1;
(statearr_15903_18381[(2)] = inst_15856);

(statearr_15903_18381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15863 === (8))){
var inst_15849 = (state_15862[(9)]);
var inst_15852 = cljs.core.deref(inst_15849);
var state_15862__$1 = state_15862;
var statearr_15904_18388 = state_15862__$1;
(statearr_15904_18388[(2)] = inst_15852);

(statearr_15904_18388[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__14446__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14446__auto____0 = (function (){
var statearr_15905 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15905[(0)] = cljs$core$async$reduce_$_state_machine__14446__auto__);

(statearr_15905[(1)] = (1));

return statearr_15905;
});
var cljs$core$async$reduce_$_state_machine__14446__auto____1 = (function (state_15862){
while(true){
var ret_value__14447__auto__ = (function (){try{while(true){
var result__14448__auto__ = switch__14445__auto__(state_15862);
if(cljs.core.keyword_identical_QMARK_(result__14448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14448__auto__;
}
break;
}
}catch (e15906){var ex__14449__auto__ = e15906;
var statearr_15907_18395 = state_15862;
(statearr_15907_18395[(2)] = ex__14449__auto__);


if(cljs.core.seq((state_15862[(4)]))){
var statearr_15908_18396 = state_15862;
(statearr_15908_18396[(1)] = cljs.core.first((state_15862[(4)])));

} else {
throw ex__14449__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18397 = state_15862;
state_15862 = G__18397;
continue;
} else {
return ret_value__14447__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14446__auto__ = function(state_15862){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14446__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14446__auto____1.call(this,state_15862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14446__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14446__auto____0;
cljs$core$async$reduce_$_state_machine__14446__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14446__auto____1;
return cljs$core$async$reduce_$_state_machine__14446__auto__;
})()
})();
var state__14810__auto__ = (function (){var statearr_15909 = f__14809__auto__();
(statearr_15909[(6)] = c__14808__auto__);

return statearr_15909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14810__auto__);
}));

return c__14808__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__14808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14809__auto__ = (function (){var switch__14445__auto__ = (function (state_15919){
var state_val_15920 = (state_15919[(1)]);
if((state_val_15920 === (1))){
var inst_15914 = cljs.core.async.reduce(f__$1,init,ch);
var state_15919__$1 = state_15919;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15919__$1,(2),inst_15914);
} else {
if((state_val_15920 === (2))){
var inst_15916 = (state_15919[(2)]);
var inst_15917 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15916) : f__$1.call(null, inst_15916));
var state_15919__$1 = state_15919;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15919__$1,inst_15917);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__14446__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14446__auto____0 = (function (){
var statearr_15922 = [null,null,null,null,null,null,null];
(statearr_15922[(0)] = cljs$core$async$transduce_$_state_machine__14446__auto__);

(statearr_15922[(1)] = (1));

return statearr_15922;
});
var cljs$core$async$transduce_$_state_machine__14446__auto____1 = (function (state_15919){
while(true){
var ret_value__14447__auto__ = (function (){try{while(true){
var result__14448__auto__ = switch__14445__auto__(state_15919);
if(cljs.core.keyword_identical_QMARK_(result__14448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14448__auto__;
}
break;
}
}catch (e15923){var ex__14449__auto__ = e15923;
var statearr_15924_18410 = state_15919;
(statearr_15924_18410[(2)] = ex__14449__auto__);


if(cljs.core.seq((state_15919[(4)]))){
var statearr_15925_18411 = state_15919;
(statearr_15925_18411[(1)] = cljs.core.first((state_15919[(4)])));

} else {
throw ex__14449__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18412 = state_15919;
state_15919 = G__18412;
continue;
} else {
return ret_value__14447__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14446__auto__ = function(state_15919){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14446__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14446__auto____1.call(this,state_15919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__14446__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14446__auto____0;
cljs$core$async$transduce_$_state_machine__14446__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14446__auto____1;
return cljs$core$async$transduce_$_state_machine__14446__auto__;
})()
})();
var state__14810__auto__ = (function (){var statearr_15927 = f__14809__auto__();
(statearr_15927[(6)] = c__14808__auto__);

return statearr_15927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14810__auto__);
}));

return c__14808__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__15930 = arguments.length;
switch (G__15930) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14809__auto__ = (function (){var switch__14445__auto__ = (function (state_15959){
var state_val_15960 = (state_15959[(1)]);
if((state_val_15960 === (7))){
var inst_15937 = (state_15959[(2)]);
var state_15959__$1 = state_15959;
var statearr_15965_18414 = state_15959__$1;
(statearr_15965_18414[(2)] = inst_15937);

(statearr_15965_18414[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15960 === (1))){
var inst_15931 = cljs.core.seq(coll);
var inst_15932 = inst_15931;
var state_15959__$1 = (function (){var statearr_15966 = state_15959;
(statearr_15966[(7)] = inst_15932);

return statearr_15966;
})();
var statearr_15967_18416 = state_15959__$1;
(statearr_15967_18416[(2)] = null);

(statearr_15967_18416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15960 === (4))){
var inst_15932 = (state_15959[(7)]);
var inst_15935 = cljs.core.first(inst_15932);
var state_15959__$1 = state_15959;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15959__$1,(7),ch,inst_15935);
} else {
if((state_val_15960 === (13))){
var inst_15953 = (state_15959[(2)]);
var state_15959__$1 = state_15959;
var statearr_15968_18417 = state_15959__$1;
(statearr_15968_18417[(2)] = inst_15953);

(statearr_15968_18417[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15960 === (6))){
var inst_15940 = (state_15959[(2)]);
var state_15959__$1 = state_15959;
if(cljs.core.truth_(inst_15940)){
var statearr_15969_18418 = state_15959__$1;
(statearr_15969_18418[(1)] = (8));

} else {
var statearr_15970_18419 = state_15959__$1;
(statearr_15970_18419[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15960 === (3))){
var inst_15957 = (state_15959[(2)]);
var state_15959__$1 = state_15959;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15959__$1,inst_15957);
} else {
if((state_val_15960 === (12))){
var state_15959__$1 = state_15959;
var statearr_15974_18424 = state_15959__$1;
(statearr_15974_18424[(2)] = null);

(statearr_15974_18424[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15960 === (2))){
var inst_15932 = (state_15959[(7)]);
var state_15959__$1 = state_15959;
if(cljs.core.truth_(inst_15932)){
var statearr_15976_18425 = state_15959__$1;
(statearr_15976_18425[(1)] = (4));

} else {
var statearr_15977_18426 = state_15959__$1;
(statearr_15977_18426[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15960 === (11))){
var inst_15950 = cljs.core.async.close_BANG_(ch);
var state_15959__$1 = state_15959;
var statearr_15978_18427 = state_15959__$1;
(statearr_15978_18427[(2)] = inst_15950);

(statearr_15978_18427[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15960 === (9))){
var state_15959__$1 = state_15959;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15979_18428 = state_15959__$1;
(statearr_15979_18428[(1)] = (11));

} else {
var statearr_15980_18429 = state_15959__$1;
(statearr_15980_18429[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15960 === (5))){
var inst_15932 = (state_15959[(7)]);
var state_15959__$1 = state_15959;
var statearr_15981_18430 = state_15959__$1;
(statearr_15981_18430[(2)] = inst_15932);

(statearr_15981_18430[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15960 === (10))){
var inst_15955 = (state_15959[(2)]);
var state_15959__$1 = state_15959;
var statearr_15982_18431 = state_15959__$1;
(statearr_15982_18431[(2)] = inst_15955);

(statearr_15982_18431[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15960 === (8))){
var inst_15932 = (state_15959[(7)]);
var inst_15942 = cljs.core.next(inst_15932);
var inst_15932__$1 = inst_15942;
var state_15959__$1 = (function (){var statearr_15983 = state_15959;
(statearr_15983[(7)] = inst_15932__$1);

return statearr_15983;
})();
var statearr_15984_18432 = state_15959__$1;
(statearr_15984_18432[(2)] = null);

(statearr_15984_18432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14446__auto__ = null;
var cljs$core$async$state_machine__14446__auto____0 = (function (){
var statearr_15993 = [null,null,null,null,null,null,null,null];
(statearr_15993[(0)] = cljs$core$async$state_machine__14446__auto__);

(statearr_15993[(1)] = (1));

return statearr_15993;
});
var cljs$core$async$state_machine__14446__auto____1 = (function (state_15959){
while(true){
var ret_value__14447__auto__ = (function (){try{while(true){
var result__14448__auto__ = switch__14445__auto__(state_15959);
if(cljs.core.keyword_identical_QMARK_(result__14448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14448__auto__;
}
break;
}
}catch (e15994){var ex__14449__auto__ = e15994;
var statearr_15995_18433 = state_15959;
(statearr_15995_18433[(2)] = ex__14449__auto__);


if(cljs.core.seq((state_15959[(4)]))){
var statearr_15996_18434 = state_15959;
(statearr_15996_18434[(1)] = cljs.core.first((state_15959[(4)])));

} else {
throw ex__14449__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18435 = state_15959;
state_15959 = G__18435;
continue;
} else {
return ret_value__14447__auto__;
}
break;
}
});
cljs$core$async$state_machine__14446__auto__ = function(state_15959){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14446__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14446__auto____1.call(this,state_15959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14446__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14446__auto____0;
cljs$core$async$state_machine__14446__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14446__auto____1;
return cljs$core$async$state_machine__14446__auto__;
})()
})();
var state__14810__auto__ = (function (){var statearr_16010 = f__14809__auto__();
(statearr_16010[(6)] = c__14808__auto__);

return statearr_16010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14810__auto__);
}));

return c__14808__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__16032 = arguments.length;
switch (G__16032) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_18437 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_18437(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18438 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null, m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null, m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_18438(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18445 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_18445(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18448 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_18448(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16052 = (function (ch,cs,meta16053){
this.ch = ch;
this.cs = cs;
this.meta16053 = meta16053;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16052.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16054,meta16053__$1){
var self__ = this;
var _16054__$1 = this;
return (new cljs.core.async.t_cljs$core$async16052(self__.ch,self__.cs,meta16053__$1));
}));

(cljs.core.async.t_cljs$core$async16052.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16054){
var self__ = this;
var _16054__$1 = this;
return self__.meta16053;
}));

(cljs.core.async.t_cljs$core$async16052.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16052.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16052.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16052.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async16052.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async16052.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async16052.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta16053","meta16053",-256698896,null)], null);
}));

(cljs.core.async.t_cljs$core$async16052.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16052.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16052");

(cljs.core.async.t_cljs$core$async16052.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16052");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16052.
 */
cljs.core.async.__GT_t_cljs$core$async16052 = (function cljs$core$async$__GT_t_cljs$core$async16052(ch,cs,meta16053){
return (new cljs.core.async.t_cljs$core$async16052(ch,cs,meta16053));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async16052(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14808__auto___18452 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14809__auto__ = (function (){var switch__14445__auto__ = (function (state_16213){
var state_val_16214 = (state_16213[(1)]);
if((state_val_16214 === (7))){
var inst_16209 = (state_16213[(2)]);
var state_16213__$1 = state_16213;
var statearr_16217_18453 = state_16213__$1;
(statearr_16217_18453[(2)] = inst_16209);

(statearr_16217_18453[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16214 === (20))){
var inst_16092 = (state_16213[(7)]);
var inst_16120 = cljs.core.first(inst_16092);
var inst_16121 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16120,(0),null);
var inst_16122 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16120,(1),null);
var state_16213__$1 = (function (){var statearr_16219 = state_16213;
(statearr_16219[(8)] = inst_16121);

return statearr_16219;
})();
if(cljs.core.truth_(inst_16122)){
var statearr_16220_18454 = state_16213__$1;
(statearr_16220_18454[(1)] = (22));

} else {
var statearr_16222_18455 = state_16213__$1;
(statearr_16222_18455[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16214 === (27))){
var inst_16153 = (state_16213[(9)]);
var inst_16061 = (state_16213[(10)]);
var inst_16151 = (state_16213[(11)]);
var inst_16158 = (state_16213[(12)]);
var inst_16158__$1 = cljs.core._nth(inst_16151,inst_16153);
var inst_16159 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16158__$1,inst_16061,done);
var state_16213__$1 = (function (){var statearr_16224 = state_16213;
(statearr_16224[(12)] = inst_16158__$1);

return statearr_16224;
})();
if(cljs.core.truth_(inst_16159)){
var statearr_16225_18466 = state_16213__$1;
(statearr_16225_18466[(1)] = (30));

} else {
var statearr_16226_18467 = state_16213__$1;
(statearr_16226_18467[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16214 === (1))){
var state_16213__$1 = state_16213;
var statearr_16228_18468 = state_16213__$1;
(statearr_16228_18468[(2)] = null);

(statearr_16228_18468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16214 === (24))){
var inst_16092 = (state_16213[(7)]);
var inst_16127 = (state_16213[(2)]);
var inst_16128 = cljs.core.next(inst_16092);
var inst_16070 = inst_16128;
var inst_16071 = null;
var inst_16072 = (0);
var inst_16073 = (0);
var state_16213__$1 = (function (){var statearr_16234 = state_16213;
(statearr_16234[(13)] = inst_16072);

(statearr_16234[(14)] = inst_16071);

(statearr_16234[(15)] = inst_16070);

(statearr_16234[(16)] = inst_16073);

(statearr_16234[(17)] = inst_16127);

return statearr_16234;
})();
var statearr_16237_18470 = state_16213__$1;
(statearr_16237_18470[(2)] = null);

(statearr_16237_18470[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16214 === (39))){
var state_16213__$1 = state_16213;
var statearr_16243_18471 = state_16213__$1;
(statearr_16243_18471[(2)] = null);

(statearr_16243_18471[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16214 === (4))){
var inst_16061 = (state_16213[(10)]);
var inst_16061__$1 = (state_16213[(2)]);
var inst_16062 = (inst_16061__$1 == null);
var state_16213__$1 = (function (){var statearr_16245 = state_16213;
(statearr_16245[(10)] = inst_16061__$1);

return statearr_16245;
})();
if(cljs.core.truth_(inst_16062)){
var statearr_16250_18474 = state_16213__$1;
(statearr_16250_18474[(1)] = (5));

} else {
var statearr_16251_18475 = state_16213__$1;
(statearr_16251_18475[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16214 === (15))){
var inst_16072 = (state_16213[(13)]);
var inst_16071 = (state_16213[(14)]);
var inst_16070 = (state_16213[(15)]);
var inst_16073 = (state_16213[(16)]);
var inst_16088 = (state_16213[(2)]);
var inst_16089 = (inst_16073 + (1));
var tmp16239 = inst_16072;
var tmp16240 = inst_16071;
var tmp16241 = inst_16070;
var inst_16070__$1 = tmp16241;
var inst_16071__$1 = tmp16240;
var inst_16072__$1 = tmp16239;
var inst_16073__$1 = inst_16089;
var state_16213__$1 = (function (){var statearr_16253 = state_16213;
(statearr_16253[(13)] = inst_16072__$1);

(statearr_16253[(14)] = inst_16071__$1);

(statearr_16253[(15)] = inst_16070__$1);

(statearr_16253[(18)] = inst_16088);

(statearr_16253[(16)] = inst_16073__$1);

return statearr_16253;
})();
var statearr_16254_18502 = state_16213__$1;
(statearr_16254_18502[(2)] = null);

(statearr_16254_18502[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16214 === (21))){
var inst_16131 = (state_16213[(2)]);
var state_16213__$1 = state_16213;
var statearr_16258_18506 = state_16213__$1;
(statearr_16258_18506[(2)] = inst_16131);

(statearr_16258_18506[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16214 === (31))){
var inst_16158 = (state_16213[(12)]);
var inst_16162 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_16158);
var state_16213__$1 = state_16213;
var statearr_16259_18507 = state_16213__$1;
(statearr_16259_18507[(2)] = inst_16162);

(statearr_16259_18507[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16214 === (32))){
var inst_16152 = (state_16213[(19)]);
var inst_16153 = (state_16213[(9)]);
var inst_16151 = (state_16213[(11)]);
var inst_16150 = (state_16213[(20)]);
var inst_16164 = (state_16213[(2)]);
var inst_16167 = (inst_16153 + (1));
var tmp16255 = inst_16152;
var tmp16256 = inst_16151;
var tmp16257 = inst_16150;
var inst_16150__$1 = tmp16257;
var inst_16151__$1 = tmp16256;
var inst_16152__$1 = tmp16255;
var inst_16153__$1 = inst_16167;
var state_16213__$1 = (function (){var statearr_16265 = state_16213;
(statearr_16265[(19)] = inst_16152__$1);

(statearr_16265[(9)] = inst_16153__$1);

(statearr_16265[(21)] = inst_16164);

(statearr_16265[(11)] = inst_16151__$1);

(statearr_16265[(20)] = inst_16150__$1);

return statearr_16265;
})();
var statearr_16276_18508 = state_16213__$1;
(statearr_16276_18508[(2)] = null);

(statearr_16276_18508[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16214 === (40))){
var inst_16179 = (state_16213[(22)]);
var inst_16183 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_16179);
var state_16213__$1 = state_16213;
var statearr_16277_18510 = state_16213__$1;
(statearr_16277_18510[(2)] = inst_16183);

(statearr_16277_18510[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16214 === (33))){
var inst_16170 = (state_16213[(23)]);
var inst_16172 = cljs.core.chunked_seq_QMARK_(inst_16170);
var state_16213__$1 = state_16213;
if(inst_16172){
var statearr_16280_18514 = state_16213__$1;
(statearr_16280_18514[(1)] = (36));

} else {
var statearr_16281_18516 = state_16213__$1;
(statearr_16281_18516[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16214 === (13))){
var inst_16082 = (state_16213[(24)]);
var inst_16085 = cljs.core.async.close_BANG_(inst_16082);
var state_16213__$1 = state_16213;
var statearr_16287_18517 = state_16213__$1;
(statearr_16287_18517[(2)] = inst_16085);

(statearr_16287_18517[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16214 === (22))){
var inst_16121 = (state_16213[(8)]);
var inst_16124 = cljs.core.async.close_BANG_(inst_16121);
var state_16213__$1 = state_16213;
var statearr_16290_18522 = state_16213__$1;
(statearr_16290_18522[(2)] = inst_16124);

(statearr_16290_18522[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16214 === (36))){
var inst_16170 = (state_16213[(23)]);
var inst_16174 = cljs.core.chunk_first(inst_16170);
var inst_16175 = cljs.core.chunk_rest(inst_16170);
var inst_16176 = cljs.core.count(inst_16174);
var inst_16150 = inst_16175;
var inst_16151 = inst_16174;
var inst_16152 = inst_16176;
var inst_16153 = (0);
var state_16213__$1 = (function (){var statearr_16295 = state_16213;
(statearr_16295[(19)] = inst_16152);

(statearr_16295[(9)] = inst_16153);

(statearr_16295[(11)] = inst_16151);

(statearr_16295[(20)] = inst_16150);

return statearr_16295;
})();
var statearr_16296_18530 = state_16213__$1;
(statearr_16296_18530[(2)] = null);

(statearr_16296_18530[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16214 === (41))){
var inst_16170 = (state_16213[(23)]);
var inst_16185 = (state_16213[(2)]);
var inst_16186 = cljs.core.next(inst_16170);
var inst_16150 = inst_16186;
var inst_16151 = null;
var inst_16152 = (0);
var inst_16153 = (0);
var state_16213__$1 = (function (){var statearr_16300 = state_16213;
(statearr_16300[(19)] = inst_16152);

(statearr_16300[(9)] = inst_16153);

(statearr_16300[(11)] = inst_16151);

(statearr_16300[(20)] = inst_16150);

(statearr_16300[(25)] = inst_16185);

return statearr_16300;
})();
var statearr_16302_18531 = state_16213__$1;
(statearr_16302_18531[(2)] = null);

(statearr_16302_18531[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16214 === (43))){
var state_16213__$1 = state_16213;
var statearr_16304_18532 = state_16213__$1;
(statearr_16304_18532[(2)] = null);

(statearr_16304_18532[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16214 === (29))){
var inst_16194 = (state_16213[(2)]);
var state_16213__$1 = state_16213;
var statearr_16306_18533 = state_16213__$1;
(statearr_16306_18533[(2)] = inst_16194);

(statearr_16306_18533[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16214 === (44))){
var inst_16206 = (state_16213[(2)]);
var state_16213__$1 = (function (){var statearr_16308 = state_16213;
(statearr_16308[(26)] = inst_16206);

return statearr_16308;
})();
var statearr_16309_18535 = state_16213__$1;
(statearr_16309_18535[(2)] = null);

(statearr_16309_18535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16214 === (6))){
var inst_16141 = (state_16213[(27)]);
var inst_16140 = cljs.core.deref(cs);
var inst_16141__$1 = cljs.core.keys(inst_16140);
var inst_16143 = cljs.core.count(inst_16141__$1);
var inst_16144 = cljs.core.reset_BANG_(dctr,inst_16143);
var inst_16149 = cljs.core.seq(inst_16141__$1);
var inst_16150 = inst_16149;
var inst_16151 = null;
var inst_16152 = (0);
var inst_16153 = (0);
var state_16213__$1 = (function (){var statearr_16314 = state_16213;
(statearr_16314[(19)] = inst_16152);

(statearr_16314[(9)] = inst_16153);

(statearr_16314[(11)] = inst_16151);

(statearr_16314[(20)] = inst_16150);

(statearr_16314[(27)] = inst_16141__$1);

(statearr_16314[(28)] = inst_16144);

return statearr_16314;
})();
var statearr_16330_18536 = state_16213__$1;
(statearr_16330_18536[(2)] = null);

(statearr_16330_18536[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16214 === (28))){
var inst_16170 = (state_16213[(23)]);
var inst_16150 = (state_16213[(20)]);
var inst_16170__$1 = cljs.core.seq(inst_16150);
var state_16213__$1 = (function (){var statearr_16331 = state_16213;
(statearr_16331[(23)] = inst_16170__$1);

return statearr_16331;
})();
if(inst_16170__$1){
var statearr_16332_18540 = state_16213__$1;
(statearr_16332_18540[(1)] = (33));

} else {
var statearr_16333_18541 = state_16213__$1;
(statearr_16333_18541[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16214 === (25))){
var inst_16152 = (state_16213[(19)]);
var inst_16153 = (state_16213[(9)]);
var inst_16155 = (inst_16153 < inst_16152);
var inst_16156 = inst_16155;
var state_16213__$1 = state_16213;
if(cljs.core.truth_(inst_16156)){
var statearr_16335_18542 = state_16213__$1;
(statearr_16335_18542[(1)] = (27));

} else {
var statearr_16336_18543 = state_16213__$1;
(statearr_16336_18543[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16214 === (34))){
var state_16213__$1 = state_16213;
var statearr_16337_18544 = state_16213__$1;
(statearr_16337_18544[(2)] = null);

(statearr_16337_18544[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16214 === (17))){
var state_16213__$1 = state_16213;
var statearr_16338_18547 = state_16213__$1;
(statearr_16338_18547[(2)] = null);

(statearr_16338_18547[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16214 === (3))){
var inst_16211 = (state_16213[(2)]);
var state_16213__$1 = state_16213;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16213__$1,inst_16211);
} else {
if((state_val_16214 === (12))){
var inst_16136 = (state_16213[(2)]);
var state_16213__$1 = state_16213;
var statearr_16340_18548 = state_16213__$1;
(statearr_16340_18548[(2)] = inst_16136);

(statearr_16340_18548[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16214 === (2))){
var state_16213__$1 = state_16213;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16213__$1,(4),ch);
} else {
if((state_val_16214 === (23))){
var state_16213__$1 = state_16213;
var statearr_16342_18552 = state_16213__$1;
(statearr_16342_18552[(2)] = null);

(statearr_16342_18552[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16214 === (35))){
var inst_16192 = (state_16213[(2)]);
var state_16213__$1 = state_16213;
var statearr_16343_18555 = state_16213__$1;
(statearr_16343_18555[(2)] = inst_16192);

(statearr_16343_18555[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16214 === (19))){
var inst_16092 = (state_16213[(7)]);
var inst_16112 = cljs.core.chunk_first(inst_16092);
var inst_16113 = cljs.core.chunk_rest(inst_16092);
var inst_16114 = cljs.core.count(inst_16112);
var inst_16070 = inst_16113;
var inst_16071 = inst_16112;
var inst_16072 = inst_16114;
var inst_16073 = (0);
var state_16213__$1 = (function (){var statearr_16345 = state_16213;
(statearr_16345[(13)] = inst_16072);

(statearr_16345[(14)] = inst_16071);

(statearr_16345[(15)] = inst_16070);

(statearr_16345[(16)] = inst_16073);

return statearr_16345;
})();
var statearr_16346_18556 = state_16213__$1;
(statearr_16346_18556[(2)] = null);

(statearr_16346_18556[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16214 === (11))){
var inst_16092 = (state_16213[(7)]);
var inst_16070 = (state_16213[(15)]);
var inst_16092__$1 = cljs.core.seq(inst_16070);
var state_16213__$1 = (function (){var statearr_16348 = state_16213;
(statearr_16348[(7)] = inst_16092__$1);

return statearr_16348;
})();
if(inst_16092__$1){
var statearr_16349_18557 = state_16213__$1;
(statearr_16349_18557[(1)] = (16));

} else {
var statearr_16350_18558 = state_16213__$1;
(statearr_16350_18558[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16214 === (9))){
var inst_16138 = (state_16213[(2)]);
var state_16213__$1 = state_16213;
var statearr_16351_18559 = state_16213__$1;
(statearr_16351_18559[(2)] = inst_16138);

(statearr_16351_18559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16214 === (5))){
var inst_16068 = cljs.core.deref(cs);
var inst_16069 = cljs.core.seq(inst_16068);
var inst_16070 = inst_16069;
var inst_16071 = null;
var inst_16072 = (0);
var inst_16073 = (0);
var state_16213__$1 = (function (){var statearr_16352 = state_16213;
(statearr_16352[(13)] = inst_16072);

(statearr_16352[(14)] = inst_16071);

(statearr_16352[(15)] = inst_16070);

(statearr_16352[(16)] = inst_16073);

return statearr_16352;
})();
var statearr_16355_18560 = state_16213__$1;
(statearr_16355_18560[(2)] = null);

(statearr_16355_18560[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16214 === (14))){
var state_16213__$1 = state_16213;
var statearr_16356_18562 = state_16213__$1;
(statearr_16356_18562[(2)] = null);

(statearr_16356_18562[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16214 === (45))){
var inst_16203 = (state_16213[(2)]);
var state_16213__$1 = state_16213;
var statearr_16357_18563 = state_16213__$1;
(statearr_16357_18563[(2)] = inst_16203);

(statearr_16357_18563[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16214 === (26))){
var inst_16141 = (state_16213[(27)]);
var inst_16196 = (state_16213[(2)]);
var inst_16197 = cljs.core.seq(inst_16141);
var state_16213__$1 = (function (){var statearr_16358 = state_16213;
(statearr_16358[(29)] = inst_16196);

return statearr_16358;
})();
if(inst_16197){
var statearr_16359_18566 = state_16213__$1;
(statearr_16359_18566[(1)] = (42));

} else {
var statearr_16360_18569 = state_16213__$1;
(statearr_16360_18569[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16214 === (16))){
var inst_16092 = (state_16213[(7)]);
var inst_16107 = cljs.core.chunked_seq_QMARK_(inst_16092);
var state_16213__$1 = state_16213;
if(inst_16107){
var statearr_16362_18570 = state_16213__$1;
(statearr_16362_18570[(1)] = (19));

} else {
var statearr_16364_18571 = state_16213__$1;
(statearr_16364_18571[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16214 === (38))){
var inst_16189 = (state_16213[(2)]);
var state_16213__$1 = state_16213;
var statearr_16365_18573 = state_16213__$1;
(statearr_16365_18573[(2)] = inst_16189);

(statearr_16365_18573[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16214 === (30))){
var state_16213__$1 = state_16213;
var statearr_16367_18577 = state_16213__$1;
(statearr_16367_18577[(2)] = null);

(statearr_16367_18577[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16214 === (10))){
var inst_16071 = (state_16213[(14)]);
var inst_16073 = (state_16213[(16)]);
var inst_16081 = cljs.core._nth(inst_16071,inst_16073);
var inst_16082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16081,(0),null);
var inst_16083 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16081,(1),null);
var state_16213__$1 = (function (){var statearr_16369 = state_16213;
(statearr_16369[(24)] = inst_16082);

return statearr_16369;
})();
if(cljs.core.truth_(inst_16083)){
var statearr_16370_18578 = state_16213__$1;
(statearr_16370_18578[(1)] = (13));

} else {
var statearr_16371_18579 = state_16213__$1;
(statearr_16371_18579[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16214 === (18))){
var inst_16134 = (state_16213[(2)]);
var state_16213__$1 = state_16213;
var statearr_16372_18580 = state_16213__$1;
(statearr_16372_18580[(2)] = inst_16134);

(statearr_16372_18580[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16214 === (42))){
var state_16213__$1 = state_16213;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16213__$1,(45),dchan);
} else {
if((state_val_16214 === (37))){
var inst_16061 = (state_16213[(10)]);
var inst_16170 = (state_16213[(23)]);
var inst_16179 = (state_16213[(22)]);
var inst_16179__$1 = cljs.core.first(inst_16170);
var inst_16180 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16179__$1,inst_16061,done);
var state_16213__$1 = (function (){var statearr_16378 = state_16213;
(statearr_16378[(22)] = inst_16179__$1);

return statearr_16378;
})();
if(cljs.core.truth_(inst_16180)){
var statearr_16379_18581 = state_16213__$1;
(statearr_16379_18581[(1)] = (39));

} else {
var statearr_16380_18582 = state_16213__$1;
(statearr_16380_18582[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16214 === (8))){
var inst_16072 = (state_16213[(13)]);
var inst_16073 = (state_16213[(16)]);
var inst_16075 = (inst_16073 < inst_16072);
var inst_16076 = inst_16075;
var state_16213__$1 = state_16213;
if(cljs.core.truth_(inst_16076)){
var statearr_16383_18583 = state_16213__$1;
(statearr_16383_18583[(1)] = (10));

} else {
var statearr_16384_18584 = state_16213__$1;
(statearr_16384_18584[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__14446__auto__ = null;
var cljs$core$async$mult_$_state_machine__14446__auto____0 = (function (){
var statearr_16386 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16386[(0)] = cljs$core$async$mult_$_state_machine__14446__auto__);

(statearr_16386[(1)] = (1));

return statearr_16386;
});
var cljs$core$async$mult_$_state_machine__14446__auto____1 = (function (state_16213){
while(true){
var ret_value__14447__auto__ = (function (){try{while(true){
var result__14448__auto__ = switch__14445__auto__(state_16213);
if(cljs.core.keyword_identical_QMARK_(result__14448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14448__auto__;
}
break;
}
}catch (e16388){var ex__14449__auto__ = e16388;
var statearr_16390_18585 = state_16213;
(statearr_16390_18585[(2)] = ex__14449__auto__);


if(cljs.core.seq((state_16213[(4)]))){
var statearr_16394_18586 = state_16213;
(statearr_16394_18586[(1)] = cljs.core.first((state_16213[(4)])));

} else {
throw ex__14449__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18587 = state_16213;
state_16213 = G__18587;
continue;
} else {
return ret_value__14447__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14446__auto__ = function(state_16213){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14446__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14446__auto____1.call(this,state_16213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14446__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14446__auto____0;
cljs$core$async$mult_$_state_machine__14446__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14446__auto____1;
return cljs$core$async$mult_$_state_machine__14446__auto__;
})()
})();
var state__14810__auto__ = (function (){var statearr_16396 = f__14809__auto__();
(statearr_16396[(6)] = c__14808__auto___18452);

return statearr_16396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14810__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__16398 = arguments.length;
switch (G__16398) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_18600 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_18600(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18604 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_18604(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18606 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18606(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18607 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null, m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null, m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_18607(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18608 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null, m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null, m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18608(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18610 = arguments.length;
var i__5727__auto___18611 = (0);
while(true){
if((i__5727__auto___18611 < len__5726__auto___18610)){
args__5732__auto__.push((arguments[i__5727__auto___18611]));

var G__18612 = (i__5727__auto___18611 + (1));
i__5727__auto___18611 = G__18612;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16466){
var map__16469 = p__16466;
var map__16469__$1 = cljs.core.__destructure_map(map__16469);
var opts = map__16469__$1;
var statearr_16471_18613 = state;
(statearr_16471_18613[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_16473_18614 = state;
(statearr_16473_18614[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_16475_18615 = state;
(statearr_16475_18615[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16458){
var G__16459 = cljs.core.first(seq16458);
var seq16458__$1 = cljs.core.next(seq16458);
var G__16460 = cljs.core.first(seq16458__$1);
var seq16458__$2 = cljs.core.next(seq16458__$1);
var G__16461 = cljs.core.first(seq16458__$2);
var seq16458__$3 = cljs.core.next(seq16458__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16459,G__16460,G__16461,seq16458__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16486 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16487){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16487 = meta16487;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16486.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16488,meta16487__$1){
var self__ = this;
var _16488__$1 = this;
return (new cljs.core.async.t_cljs$core$async16486(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16487__$1));
}));

(cljs.core.async.t_cljs$core$async16486.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16488){
var self__ = this;
var _16488__$1 = this;
return self__.meta16487;
}));

(cljs.core.async.t_cljs$core$async16486.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16486.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16486.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16486.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16486.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16486.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16486.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16486.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16486.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16487","meta16487",-89830971,null)], null);
}));

(cljs.core.async.t_cljs$core$async16486.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16486.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16486");

(cljs.core.async.t_cljs$core$async16486.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16486");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16486.
 */
cljs.core.async.__GT_t_cljs$core$async16486 = (function cljs$core$async$__GT_t_cljs$core$async16486(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16487){
return (new cljs.core.async.t_cljs$core$async16486(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16487));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null, v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async16486(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__14808__auto___18625 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14809__auto__ = (function (){var switch__14445__auto__ = (function (state_16584){
var state_val_16586 = (state_16584[(1)]);
if((state_val_16586 === (7))){
var inst_16541 = (state_16584[(2)]);
var state_16584__$1 = state_16584;
if(cljs.core.truth_(inst_16541)){
var statearr_16590_18626 = state_16584__$1;
(statearr_16590_18626[(1)] = (8));

} else {
var statearr_16591_18627 = state_16584__$1;
(statearr_16591_18627[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16586 === (20))){
var inst_16532 = (state_16584[(7)]);
var state_16584__$1 = state_16584;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16584__$1,(23),out,inst_16532);
} else {
if((state_val_16586 === (1))){
var inst_16515 = calc_state();
var inst_16516 = cljs.core.__destructure_map(inst_16515);
var inst_16517 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16516,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16518 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16516,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16519 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16516,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16520 = inst_16515;
var state_16584__$1 = (function (){var statearr_16596 = state_16584;
(statearr_16596[(8)] = inst_16519);

(statearr_16596[(9)] = inst_16517);

(statearr_16596[(10)] = inst_16518);

(statearr_16596[(11)] = inst_16520);

return statearr_16596;
})();
var statearr_16599_18630 = state_16584__$1;
(statearr_16599_18630[(2)] = null);

(statearr_16599_18630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16586 === (24))){
var inst_16523 = (state_16584[(12)]);
var inst_16520 = inst_16523;
var state_16584__$1 = (function (){var statearr_16600 = state_16584;
(statearr_16600[(11)] = inst_16520);

return statearr_16600;
})();
var statearr_16601_18631 = state_16584__$1;
(statearr_16601_18631[(2)] = null);

(statearr_16601_18631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16586 === (4))){
var inst_16532 = (state_16584[(7)]);
var inst_16534 = (state_16584[(13)]);
var inst_16531 = (state_16584[(2)]);
var inst_16532__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16531,(0),null);
var inst_16533 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16531,(1),null);
var inst_16534__$1 = (inst_16532__$1 == null);
var state_16584__$1 = (function (){var statearr_16625 = state_16584;
(statearr_16625[(14)] = inst_16533);

(statearr_16625[(7)] = inst_16532__$1);

(statearr_16625[(13)] = inst_16534__$1);

return statearr_16625;
})();
if(cljs.core.truth_(inst_16534__$1)){
var statearr_16629_18632 = state_16584__$1;
(statearr_16629_18632[(1)] = (5));

} else {
var statearr_16630_18633 = state_16584__$1;
(statearr_16630_18633[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16586 === (15))){
var inst_16558 = (state_16584[(15)]);
var inst_16524 = (state_16584[(16)]);
var inst_16558__$1 = cljs.core.empty_QMARK_(inst_16524);
var state_16584__$1 = (function (){var statearr_16631 = state_16584;
(statearr_16631[(15)] = inst_16558__$1);

return statearr_16631;
})();
if(inst_16558__$1){
var statearr_16632_18634 = state_16584__$1;
(statearr_16632_18634[(1)] = (17));

} else {
var statearr_16636_18635 = state_16584__$1;
(statearr_16636_18635[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16586 === (21))){
var inst_16523 = (state_16584[(12)]);
var inst_16520 = inst_16523;
var state_16584__$1 = (function (){var statearr_16637 = state_16584;
(statearr_16637[(11)] = inst_16520);

return statearr_16637;
})();
var statearr_16638_18636 = state_16584__$1;
(statearr_16638_18636[(2)] = null);

(statearr_16638_18636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16586 === (13))){
var inst_16549 = (state_16584[(2)]);
var inst_16550 = calc_state();
var inst_16520 = inst_16550;
var state_16584__$1 = (function (){var statearr_16640 = state_16584;
(statearr_16640[(17)] = inst_16549);

(statearr_16640[(11)] = inst_16520);

return statearr_16640;
})();
var statearr_16641_18637 = state_16584__$1;
(statearr_16641_18637[(2)] = null);

(statearr_16641_18637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16586 === (22))){
var inst_16578 = (state_16584[(2)]);
var state_16584__$1 = state_16584;
var statearr_16642_18639 = state_16584__$1;
(statearr_16642_18639[(2)] = inst_16578);

(statearr_16642_18639[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16586 === (6))){
var inst_16533 = (state_16584[(14)]);
var inst_16539 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16533,change);
var state_16584__$1 = state_16584;
var statearr_16643_18640 = state_16584__$1;
(statearr_16643_18640[(2)] = inst_16539);

(statearr_16643_18640[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16586 === (25))){
var state_16584__$1 = state_16584;
var statearr_16645_18641 = state_16584__$1;
(statearr_16645_18641[(2)] = null);

(statearr_16645_18641[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16586 === (17))){
var inst_16533 = (state_16584[(14)]);
var inst_16525 = (state_16584[(18)]);
var inst_16560 = (inst_16525.cljs$core$IFn$_invoke$arity$1 ? inst_16525.cljs$core$IFn$_invoke$arity$1(inst_16533) : inst_16525.call(null, inst_16533));
var inst_16561 = cljs.core.not(inst_16560);
var state_16584__$1 = state_16584;
var statearr_16648_18642 = state_16584__$1;
(statearr_16648_18642[(2)] = inst_16561);

(statearr_16648_18642[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16586 === (3))){
var inst_16582 = (state_16584[(2)]);
var state_16584__$1 = state_16584;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16584__$1,inst_16582);
} else {
if((state_val_16586 === (12))){
var state_16584__$1 = state_16584;
var statearr_16650_18644 = state_16584__$1;
(statearr_16650_18644[(2)] = null);

(statearr_16650_18644[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16586 === (2))){
var inst_16523 = (state_16584[(12)]);
var inst_16520 = (state_16584[(11)]);
var inst_16523__$1 = cljs.core.__destructure_map(inst_16520);
var inst_16524 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16523__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16525 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16523__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16526 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16523__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16584__$1 = (function (){var statearr_16655 = state_16584;
(statearr_16655[(16)] = inst_16524);

(statearr_16655[(12)] = inst_16523__$1);

(statearr_16655[(18)] = inst_16525);

return statearr_16655;
})();
return cljs.core.async.ioc_alts_BANG_(state_16584__$1,(4),inst_16526);
} else {
if((state_val_16586 === (23))){
var inst_16569 = (state_16584[(2)]);
var state_16584__$1 = state_16584;
if(cljs.core.truth_(inst_16569)){
var statearr_16664_18649 = state_16584__$1;
(statearr_16664_18649[(1)] = (24));

} else {
var statearr_16665_18650 = state_16584__$1;
(statearr_16665_18650[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16586 === (19))){
var inst_16564 = (state_16584[(2)]);
var state_16584__$1 = state_16584;
var statearr_16666_18652 = state_16584__$1;
(statearr_16666_18652[(2)] = inst_16564);

(statearr_16666_18652[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16586 === (11))){
var inst_16533 = (state_16584[(14)]);
var inst_16546 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16533);
var state_16584__$1 = state_16584;
var statearr_16668_18653 = state_16584__$1;
(statearr_16668_18653[(2)] = inst_16546);

(statearr_16668_18653[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16586 === (9))){
var inst_16553 = (state_16584[(19)]);
var inst_16533 = (state_16584[(14)]);
var inst_16524 = (state_16584[(16)]);
var inst_16553__$1 = (inst_16524.cljs$core$IFn$_invoke$arity$1 ? inst_16524.cljs$core$IFn$_invoke$arity$1(inst_16533) : inst_16524.call(null, inst_16533));
var state_16584__$1 = (function (){var statearr_16669 = state_16584;
(statearr_16669[(19)] = inst_16553__$1);

return statearr_16669;
})();
if(cljs.core.truth_(inst_16553__$1)){
var statearr_16670_18654 = state_16584__$1;
(statearr_16670_18654[(1)] = (14));

} else {
var statearr_16671_18655 = state_16584__$1;
(statearr_16671_18655[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16586 === (5))){
var inst_16534 = (state_16584[(13)]);
var state_16584__$1 = state_16584;
var statearr_16672_18656 = state_16584__$1;
(statearr_16672_18656[(2)] = inst_16534);

(statearr_16672_18656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16586 === (14))){
var inst_16553 = (state_16584[(19)]);
var state_16584__$1 = state_16584;
var statearr_16674_18657 = state_16584__$1;
(statearr_16674_18657[(2)] = inst_16553);

(statearr_16674_18657[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16586 === (26))){
var inst_16574 = (state_16584[(2)]);
var state_16584__$1 = state_16584;
var statearr_16677_18659 = state_16584__$1;
(statearr_16677_18659[(2)] = inst_16574);

(statearr_16677_18659[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16586 === (16))){
var inst_16566 = (state_16584[(2)]);
var state_16584__$1 = state_16584;
if(cljs.core.truth_(inst_16566)){
var statearr_16679_18660 = state_16584__$1;
(statearr_16679_18660[(1)] = (20));

} else {
var statearr_16680_18661 = state_16584__$1;
(statearr_16680_18661[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16586 === (10))){
var inst_16580 = (state_16584[(2)]);
var state_16584__$1 = state_16584;
var statearr_16681_18662 = state_16584__$1;
(statearr_16681_18662[(2)] = inst_16580);

(statearr_16681_18662[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16586 === (18))){
var inst_16558 = (state_16584[(15)]);
var state_16584__$1 = state_16584;
var statearr_16682_18663 = state_16584__$1;
(statearr_16682_18663[(2)] = inst_16558);

(statearr_16682_18663[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16586 === (8))){
var inst_16532 = (state_16584[(7)]);
var inst_16544 = (inst_16532 == null);
var state_16584__$1 = state_16584;
if(cljs.core.truth_(inst_16544)){
var statearr_16684_18665 = state_16584__$1;
(statearr_16684_18665[(1)] = (11));

} else {
var statearr_16685_18666 = state_16584__$1;
(statearr_16685_18666[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__14446__auto__ = null;
var cljs$core$async$mix_$_state_machine__14446__auto____0 = (function (){
var statearr_16691 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16691[(0)] = cljs$core$async$mix_$_state_machine__14446__auto__);

(statearr_16691[(1)] = (1));

return statearr_16691;
});
var cljs$core$async$mix_$_state_machine__14446__auto____1 = (function (state_16584){
while(true){
var ret_value__14447__auto__ = (function (){try{while(true){
var result__14448__auto__ = switch__14445__auto__(state_16584);
if(cljs.core.keyword_identical_QMARK_(result__14448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14448__auto__;
}
break;
}
}catch (e16694){var ex__14449__auto__ = e16694;
var statearr_16695_18667 = state_16584;
(statearr_16695_18667[(2)] = ex__14449__auto__);


if(cljs.core.seq((state_16584[(4)]))){
var statearr_16698_18669 = state_16584;
(statearr_16698_18669[(1)] = cljs.core.first((state_16584[(4)])));

} else {
throw ex__14449__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18670 = state_16584;
state_16584 = G__18670;
continue;
} else {
return ret_value__14447__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14446__auto__ = function(state_16584){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14446__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14446__auto____1.call(this,state_16584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14446__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14446__auto____0;
cljs$core$async$mix_$_state_machine__14446__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14446__auto____1;
return cljs$core$async$mix_$_state_machine__14446__auto__;
})()
})();
var state__14810__auto__ = (function (){var statearr_16702 = f__14809__auto__();
(statearr_16702[(6)] = c__14808__auto___18625);

return statearr_16702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14810__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_18675 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null, p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null, p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_18675(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18676 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null, p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null, p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_18676(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18681 = (function() {
var G__18682 = null;
var G__18682__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null, p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null, p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__18682__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null, p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null, p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__18682 = function(p,v){
switch(arguments.length){
case 1:
return G__18682__1.call(this,p);
case 2:
return G__18682__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18682.cljs$core$IFn$_invoke$arity$1 = G__18682__1;
G__18682.cljs$core$IFn$_invoke$arity$2 = G__18682__2;
return G__18682;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16763 = arguments.length;
switch (G__16763) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18681(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18681(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16793 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16794){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16794 = meta16794;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16793.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16795,meta16794__$1){
var self__ = this;
var _16795__$1 = this;
return (new cljs.core.async.t_cljs$core$async16793(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16794__$1));
}));

(cljs.core.async.t_cljs$core$async16793.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16795){
var self__ = this;
var _16795__$1 = this;
return self__.meta16794;
}));

(cljs.core.async.t_cljs$core$async16793.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16793.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16793.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16793.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16793.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16793.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16793.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16793.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16794","meta16794",-1335473197,null)], null);
}));

(cljs.core.async.t_cljs$core$async16793.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16793.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16793");

(cljs.core.async.t_cljs$core$async16793.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16793");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16793.
 */
cljs.core.async.__GT_t_cljs$core$async16793 = (function cljs$core$async$__GT_t_cljs$core$async16793(ch,topic_fn,buf_fn,mults,ensure_mult,meta16794){
return (new cljs.core.async.t_cljs$core$async16793(ch,topic_fn,buf_fn,mults,ensure_mult,meta16794));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__16783 = arguments.length;
switch (G__16783) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16777_SHARP_){
if(cljs.core.truth_((p1__16777_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16777_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16777_SHARP_.call(null, topic)))){
return p1__16777_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16777_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async16793(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__14808__auto___18688 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14809__auto__ = (function (){var switch__14445__auto__ = (function (state_16902){
var state_val_16904 = (state_16902[(1)]);
if((state_val_16904 === (7))){
var inst_16892 = (state_16902[(2)]);
var state_16902__$1 = state_16902;
var statearr_16917_18691 = state_16902__$1;
(statearr_16917_18691[(2)] = inst_16892);

(statearr_16917_18691[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16904 === (20))){
var state_16902__$1 = state_16902;
var statearr_16919_18692 = state_16902__$1;
(statearr_16919_18692[(2)] = null);

(statearr_16919_18692[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16904 === (1))){
var state_16902__$1 = state_16902;
var statearr_16924_18693 = state_16902__$1;
(statearr_16924_18693[(2)] = null);

(statearr_16924_18693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16904 === (24))){
var inst_16871 = (state_16902[(7)]);
var inst_16883 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16871);
var state_16902__$1 = state_16902;
var statearr_16944_18694 = state_16902__$1;
(statearr_16944_18694[(2)] = inst_16883);

(statearr_16944_18694[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16904 === (4))){
var inst_16817 = (state_16902[(8)]);
var inst_16817__$1 = (state_16902[(2)]);
var inst_16818 = (inst_16817__$1 == null);
var state_16902__$1 = (function (){var statearr_16967 = state_16902;
(statearr_16967[(8)] = inst_16817__$1);

return statearr_16967;
})();
if(cljs.core.truth_(inst_16818)){
var statearr_16972_18695 = state_16902__$1;
(statearr_16972_18695[(1)] = (5));

} else {
var statearr_16973_18696 = state_16902__$1;
(statearr_16973_18696[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16904 === (15))){
var inst_16865 = (state_16902[(2)]);
var state_16902__$1 = state_16902;
var statearr_16975_18697 = state_16902__$1;
(statearr_16975_18697[(2)] = inst_16865);

(statearr_16975_18697[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16904 === (21))){
var inst_16888 = (state_16902[(2)]);
var state_16902__$1 = (function (){var statearr_16979 = state_16902;
(statearr_16979[(9)] = inst_16888);

return statearr_16979;
})();
var statearr_16980_18698 = state_16902__$1;
(statearr_16980_18698[(2)] = null);

(statearr_16980_18698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16904 === (13))){
var inst_16843 = (state_16902[(10)]);
var inst_16848 = cljs.core.chunked_seq_QMARK_(inst_16843);
var state_16902__$1 = state_16902;
if(inst_16848){
var statearr_16982_18699 = state_16902__$1;
(statearr_16982_18699[(1)] = (16));

} else {
var statearr_16984_18700 = state_16902__$1;
(statearr_16984_18700[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16904 === (22))){
var inst_16879 = (state_16902[(2)]);
var state_16902__$1 = state_16902;
if(cljs.core.truth_(inst_16879)){
var statearr_16987_18701 = state_16902__$1;
(statearr_16987_18701[(1)] = (23));

} else {
var statearr_16988_18702 = state_16902__$1;
(statearr_16988_18702[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16904 === (6))){
var inst_16871 = (state_16902[(7)]);
var inst_16873 = (state_16902[(11)]);
var inst_16817 = (state_16902[(8)]);
var inst_16871__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16817) : topic_fn.call(null, inst_16817));
var inst_16872 = cljs.core.deref(mults);
var inst_16873__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16872,inst_16871__$1);
var state_16902__$1 = (function (){var statearr_16993 = state_16902;
(statearr_16993[(7)] = inst_16871__$1);

(statearr_16993[(11)] = inst_16873__$1);

return statearr_16993;
})();
if(cljs.core.truth_(inst_16873__$1)){
var statearr_16999_18726 = state_16902__$1;
(statearr_16999_18726[(1)] = (19));

} else {
var statearr_17000_18727 = state_16902__$1;
(statearr_17000_18727[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16904 === (25))){
var inst_16885 = (state_16902[(2)]);
var state_16902__$1 = state_16902;
var statearr_17002_18728 = state_16902__$1;
(statearr_17002_18728[(2)] = inst_16885);

(statearr_17002_18728[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16904 === (17))){
var inst_16843 = (state_16902[(10)]);
var inst_16855 = cljs.core.first(inst_16843);
var inst_16856 = cljs.core.async.muxch_STAR_(inst_16855);
var inst_16857 = cljs.core.async.close_BANG_(inst_16856);
var inst_16859 = cljs.core.next(inst_16843);
var inst_16828 = inst_16859;
var inst_16829 = null;
var inst_16830 = (0);
var inst_16831 = (0);
var state_16902__$1 = (function (){var statearr_17007 = state_16902;
(statearr_17007[(12)] = inst_16829);

(statearr_17007[(13)] = inst_16828);

(statearr_17007[(14)] = inst_16830);

(statearr_17007[(15)] = inst_16831);

(statearr_17007[(16)] = inst_16857);

return statearr_17007;
})();
var statearr_17011_18738 = state_16902__$1;
(statearr_17011_18738[(2)] = null);

(statearr_17011_18738[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16904 === (3))){
var inst_16894 = (state_16902[(2)]);
var state_16902__$1 = state_16902;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16902__$1,inst_16894);
} else {
if((state_val_16904 === (12))){
var inst_16867 = (state_16902[(2)]);
var state_16902__$1 = state_16902;
var statearr_17024_18742 = state_16902__$1;
(statearr_17024_18742[(2)] = inst_16867);

(statearr_17024_18742[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16904 === (2))){
var state_16902__$1 = state_16902;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16902__$1,(4),ch);
} else {
if((state_val_16904 === (23))){
var state_16902__$1 = state_16902;
var statearr_17025_18743 = state_16902__$1;
(statearr_17025_18743[(2)] = null);

(statearr_17025_18743[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16904 === (19))){
var inst_16873 = (state_16902[(11)]);
var inst_16817 = (state_16902[(8)]);
var inst_16876 = cljs.core.async.muxch_STAR_(inst_16873);
var state_16902__$1 = state_16902;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16902__$1,(22),inst_16876,inst_16817);
} else {
if((state_val_16904 === (11))){
var inst_16828 = (state_16902[(13)]);
var inst_16843 = (state_16902[(10)]);
var inst_16843__$1 = cljs.core.seq(inst_16828);
var state_16902__$1 = (function (){var statearr_17028 = state_16902;
(statearr_17028[(10)] = inst_16843__$1);

return statearr_17028;
})();
if(inst_16843__$1){
var statearr_17029_18744 = state_16902__$1;
(statearr_17029_18744[(1)] = (13));

} else {
var statearr_17030_18746 = state_16902__$1;
(statearr_17030_18746[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16904 === (9))){
var inst_16869 = (state_16902[(2)]);
var state_16902__$1 = state_16902;
var statearr_17033_18750 = state_16902__$1;
(statearr_17033_18750[(2)] = inst_16869);

(statearr_17033_18750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16904 === (5))){
var inst_16825 = cljs.core.deref(mults);
var inst_16826 = cljs.core.vals(inst_16825);
var inst_16827 = cljs.core.seq(inst_16826);
var inst_16828 = inst_16827;
var inst_16829 = null;
var inst_16830 = (0);
var inst_16831 = (0);
var state_16902__$1 = (function (){var statearr_17038 = state_16902;
(statearr_17038[(12)] = inst_16829);

(statearr_17038[(13)] = inst_16828);

(statearr_17038[(14)] = inst_16830);

(statearr_17038[(15)] = inst_16831);

return statearr_17038;
})();
var statearr_17039_18751 = state_16902__$1;
(statearr_17039_18751[(2)] = null);

(statearr_17039_18751[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16904 === (14))){
var state_16902__$1 = state_16902;
var statearr_17045_18753 = state_16902__$1;
(statearr_17045_18753[(2)] = null);

(statearr_17045_18753[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16904 === (16))){
var inst_16843 = (state_16902[(10)]);
var inst_16850 = cljs.core.chunk_first(inst_16843);
var inst_16851 = cljs.core.chunk_rest(inst_16843);
var inst_16852 = cljs.core.count(inst_16850);
var inst_16828 = inst_16851;
var inst_16829 = inst_16850;
var inst_16830 = inst_16852;
var inst_16831 = (0);
var state_16902__$1 = (function (){var statearr_17047 = state_16902;
(statearr_17047[(12)] = inst_16829);

(statearr_17047[(13)] = inst_16828);

(statearr_17047[(14)] = inst_16830);

(statearr_17047[(15)] = inst_16831);

return statearr_17047;
})();
var statearr_17051_18754 = state_16902__$1;
(statearr_17051_18754[(2)] = null);

(statearr_17051_18754[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16904 === (10))){
var inst_16829 = (state_16902[(12)]);
var inst_16828 = (state_16902[(13)]);
var inst_16830 = (state_16902[(14)]);
var inst_16831 = (state_16902[(15)]);
var inst_16837 = cljs.core._nth(inst_16829,inst_16831);
var inst_16838 = cljs.core.async.muxch_STAR_(inst_16837);
var inst_16839 = cljs.core.async.close_BANG_(inst_16838);
var inst_16840 = (inst_16831 + (1));
var tmp17041 = inst_16829;
var tmp17042 = inst_16828;
var tmp17043 = inst_16830;
var inst_16828__$1 = tmp17042;
var inst_16829__$1 = tmp17041;
var inst_16830__$1 = tmp17043;
var inst_16831__$1 = inst_16840;
var state_16902__$1 = (function (){var statearr_17054 = state_16902;
(statearr_17054[(17)] = inst_16839);

(statearr_17054[(12)] = inst_16829__$1);

(statearr_17054[(13)] = inst_16828__$1);

(statearr_17054[(14)] = inst_16830__$1);

(statearr_17054[(15)] = inst_16831__$1);

return statearr_17054;
})();
var statearr_17058_18755 = state_16902__$1;
(statearr_17058_18755[(2)] = null);

(statearr_17058_18755[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16904 === (18))){
var inst_16862 = (state_16902[(2)]);
var state_16902__$1 = state_16902;
var statearr_17062_18756 = state_16902__$1;
(statearr_17062_18756[(2)] = inst_16862);

(statearr_17062_18756[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16904 === (8))){
var inst_16830 = (state_16902[(14)]);
var inst_16831 = (state_16902[(15)]);
var inst_16833 = (inst_16831 < inst_16830);
var inst_16834 = inst_16833;
var state_16902__$1 = state_16902;
if(cljs.core.truth_(inst_16834)){
var statearr_17064_18757 = state_16902__$1;
(statearr_17064_18757[(1)] = (10));

} else {
var statearr_17065_18758 = state_16902__$1;
(statearr_17065_18758[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14446__auto__ = null;
var cljs$core$async$state_machine__14446__auto____0 = (function (){
var statearr_17081 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17081[(0)] = cljs$core$async$state_machine__14446__auto__);

(statearr_17081[(1)] = (1));

return statearr_17081;
});
var cljs$core$async$state_machine__14446__auto____1 = (function (state_16902){
while(true){
var ret_value__14447__auto__ = (function (){try{while(true){
var result__14448__auto__ = switch__14445__auto__(state_16902);
if(cljs.core.keyword_identical_QMARK_(result__14448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14448__auto__;
}
break;
}
}catch (e17093){var ex__14449__auto__ = e17093;
var statearr_17094_18764 = state_16902;
(statearr_17094_18764[(2)] = ex__14449__auto__);


if(cljs.core.seq((state_16902[(4)]))){
var statearr_17099_18765 = state_16902;
(statearr_17099_18765[(1)] = cljs.core.first((state_16902[(4)])));

} else {
throw ex__14449__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18771 = state_16902;
state_16902 = G__18771;
continue;
} else {
return ret_value__14447__auto__;
}
break;
}
});
cljs$core$async$state_machine__14446__auto__ = function(state_16902){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14446__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14446__auto____1.call(this,state_16902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14446__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14446__auto____0;
cljs$core$async$state_machine__14446__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14446__auto____1;
return cljs$core$async$state_machine__14446__auto__;
})()
})();
var state__14810__auto__ = (function (){var statearr_17118 = f__14809__auto__();
(statearr_17118[(6)] = c__14808__auto___18688);

return statearr_17118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14810__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__17133 = arguments.length;
switch (G__17133) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__17146 = arguments.length;
switch (G__17146) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__17153 = arguments.length;
switch (G__17153) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__14808__auto___18795 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14809__auto__ = (function (){var switch__14445__auto__ = (function (state_17208){
var state_val_17209 = (state_17208[(1)]);
if((state_val_17209 === (7))){
var state_17208__$1 = state_17208;
var statearr_17210_18796 = state_17208__$1;
(statearr_17210_18796[(2)] = null);

(statearr_17210_18796[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17209 === (1))){
var state_17208__$1 = state_17208;
var statearr_17211_18797 = state_17208__$1;
(statearr_17211_18797[(2)] = null);

(statearr_17211_18797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17209 === (4))){
var inst_17162 = (state_17208[(7)]);
var inst_17163 = (state_17208[(8)]);
var inst_17165 = (inst_17163 < inst_17162);
var state_17208__$1 = state_17208;
if(cljs.core.truth_(inst_17165)){
var statearr_17215_18798 = state_17208__$1;
(statearr_17215_18798[(1)] = (6));

} else {
var statearr_17216_18799 = state_17208__$1;
(statearr_17216_18799[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17209 === (15))){
var inst_17191 = (state_17208[(9)]);
var inst_17199 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_17191);
var state_17208__$1 = state_17208;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17208__$1,(17),out,inst_17199);
} else {
if((state_val_17209 === (13))){
var inst_17191 = (state_17208[(9)]);
var inst_17191__$1 = (state_17208[(2)]);
var inst_17192 = cljs.core.some(cljs.core.nil_QMARK_,inst_17191__$1);
var state_17208__$1 = (function (){var statearr_17217 = state_17208;
(statearr_17217[(9)] = inst_17191__$1);

return statearr_17217;
})();
if(cljs.core.truth_(inst_17192)){
var statearr_17219_18801 = state_17208__$1;
(statearr_17219_18801[(1)] = (14));

} else {
var statearr_17220_18805 = state_17208__$1;
(statearr_17220_18805[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17209 === (6))){
var state_17208__$1 = state_17208;
var statearr_17222_18806 = state_17208__$1;
(statearr_17222_18806[(2)] = null);

(statearr_17222_18806[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17209 === (17))){
var inst_17201 = (state_17208[(2)]);
var state_17208__$1 = (function (){var statearr_17228 = state_17208;
(statearr_17228[(10)] = inst_17201);

return statearr_17228;
})();
var statearr_17232_18807 = state_17208__$1;
(statearr_17232_18807[(2)] = null);

(statearr_17232_18807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17209 === (3))){
var inst_17206 = (state_17208[(2)]);
var state_17208__$1 = state_17208;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17208__$1,inst_17206);
} else {
if((state_val_17209 === (12))){
var _ = (function (){var statearr_17233 = state_17208;
(statearr_17233[(4)] = cljs.core.rest((state_17208[(4)])));

return statearr_17233;
})();
var state_17208__$1 = state_17208;
var ex17223 = (state_17208__$1[(2)]);
var statearr_17234_18820 = state_17208__$1;
(statearr_17234_18820[(5)] = ex17223);


if((ex17223 instanceof Object)){
var statearr_17235_18821 = state_17208__$1;
(statearr_17235_18821[(1)] = (11));

(statearr_17235_18821[(5)] = null);

} else {
throw ex17223;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17209 === (2))){
var inst_17161 = cljs.core.reset_BANG_(dctr,cnt);
var inst_17162 = cnt;
var inst_17163 = (0);
var state_17208__$1 = (function (){var statearr_17237 = state_17208;
(statearr_17237[(7)] = inst_17162);

(statearr_17237[(8)] = inst_17163);

(statearr_17237[(11)] = inst_17161);

return statearr_17237;
})();
var statearr_17238_18822 = state_17208__$1;
(statearr_17238_18822[(2)] = null);

(statearr_17238_18822[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17209 === (11))){
var inst_17167 = (state_17208[(2)]);
var inst_17168 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_17208__$1 = (function (){var statearr_17239 = state_17208;
(statearr_17239[(12)] = inst_17167);

return statearr_17239;
})();
var statearr_17240_18823 = state_17208__$1;
(statearr_17240_18823[(2)] = inst_17168);

(statearr_17240_18823[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17209 === (9))){
var inst_17163 = (state_17208[(8)]);
var _ = (function (){var statearr_17241 = state_17208;
(statearr_17241[(4)] = cljs.core.cons((12),(state_17208[(4)])));

return statearr_17241;
})();
var inst_17177 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_17163) : chs__$1.call(null, inst_17163));
var inst_17178 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_17163) : done.call(null, inst_17163));
var inst_17179 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_17177,inst_17178);
var ___$1 = (function (){var statearr_17242 = state_17208;
(statearr_17242[(4)] = cljs.core.rest((state_17208[(4)])));

return statearr_17242;
})();
var state_17208__$1 = state_17208;
var statearr_17243_18824 = state_17208__$1;
(statearr_17243_18824[(2)] = inst_17179);

(statearr_17243_18824[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17209 === (5))){
var inst_17189 = (state_17208[(2)]);
var state_17208__$1 = (function (){var statearr_17247 = state_17208;
(statearr_17247[(13)] = inst_17189);

return statearr_17247;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17208__$1,(13),dchan);
} else {
if((state_val_17209 === (14))){
var inst_17197 = cljs.core.async.close_BANG_(out);
var state_17208__$1 = state_17208;
var statearr_17249_18832 = state_17208__$1;
(statearr_17249_18832[(2)] = inst_17197);

(statearr_17249_18832[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17209 === (16))){
var inst_17204 = (state_17208[(2)]);
var state_17208__$1 = state_17208;
var statearr_17252_18833 = state_17208__$1;
(statearr_17252_18833[(2)] = inst_17204);

(statearr_17252_18833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17209 === (10))){
var inst_17163 = (state_17208[(8)]);
var inst_17182 = (state_17208[(2)]);
var inst_17183 = (inst_17163 + (1));
var inst_17163__$1 = inst_17183;
var state_17208__$1 = (function (){var statearr_17256 = state_17208;
(statearr_17256[(8)] = inst_17163__$1);

(statearr_17256[(14)] = inst_17182);

return statearr_17256;
})();
var statearr_17258_18837 = state_17208__$1;
(statearr_17258_18837[(2)] = null);

(statearr_17258_18837[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17209 === (8))){
var inst_17187 = (state_17208[(2)]);
var state_17208__$1 = state_17208;
var statearr_17259_18838 = state_17208__$1;
(statearr_17259_18838[(2)] = inst_17187);

(statearr_17259_18838[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14446__auto__ = null;
var cljs$core$async$state_machine__14446__auto____0 = (function (){
var statearr_17264 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17264[(0)] = cljs$core$async$state_machine__14446__auto__);

(statearr_17264[(1)] = (1));

return statearr_17264;
});
var cljs$core$async$state_machine__14446__auto____1 = (function (state_17208){
while(true){
var ret_value__14447__auto__ = (function (){try{while(true){
var result__14448__auto__ = switch__14445__auto__(state_17208);
if(cljs.core.keyword_identical_QMARK_(result__14448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14448__auto__;
}
break;
}
}catch (e17266){var ex__14449__auto__ = e17266;
var statearr_17267_18839 = state_17208;
(statearr_17267_18839[(2)] = ex__14449__auto__);


if(cljs.core.seq((state_17208[(4)]))){
var statearr_17269_18840 = state_17208;
(statearr_17269_18840[(1)] = cljs.core.first((state_17208[(4)])));

} else {
throw ex__14449__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18841 = state_17208;
state_17208 = G__18841;
continue;
} else {
return ret_value__14447__auto__;
}
break;
}
});
cljs$core$async$state_machine__14446__auto__ = function(state_17208){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14446__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14446__auto____1.call(this,state_17208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14446__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14446__auto____0;
cljs$core$async$state_machine__14446__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14446__auto____1;
return cljs$core$async$state_machine__14446__auto__;
})()
})();
var state__14810__auto__ = (function (){var statearr_17292 = f__14809__auto__();
(statearr_17292[(6)] = c__14808__auto___18795);

return statearr_17292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14810__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__17300 = arguments.length;
switch (G__17300) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14808__auto___18843 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14809__auto__ = (function (){var switch__14445__auto__ = (function (state_17339){
var state_val_17340 = (state_17339[(1)]);
if((state_val_17340 === (7))){
var inst_17312 = (state_17339[(7)]);
var inst_17313 = (state_17339[(8)]);
var inst_17312__$1 = (state_17339[(2)]);
var inst_17313__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17312__$1,(0),null);
var inst_17314 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17312__$1,(1),null);
var inst_17315 = (inst_17313__$1 == null);
var state_17339__$1 = (function (){var statearr_17343 = state_17339;
(statearr_17343[(7)] = inst_17312__$1);

(statearr_17343[(9)] = inst_17314);

(statearr_17343[(8)] = inst_17313__$1);

return statearr_17343;
})();
if(cljs.core.truth_(inst_17315)){
var statearr_17344_18844 = state_17339__$1;
(statearr_17344_18844[(1)] = (8));

} else {
var statearr_17345_18845 = state_17339__$1;
(statearr_17345_18845[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17340 === (1))){
var inst_17301 = cljs.core.vec(chs);
var inst_17302 = inst_17301;
var state_17339__$1 = (function (){var statearr_17346 = state_17339;
(statearr_17346[(10)] = inst_17302);

return statearr_17346;
})();
var statearr_17347_18846 = state_17339__$1;
(statearr_17347_18846[(2)] = null);

(statearr_17347_18846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17340 === (4))){
var inst_17302 = (state_17339[(10)]);
var state_17339__$1 = state_17339;
return cljs.core.async.ioc_alts_BANG_(state_17339__$1,(7),inst_17302);
} else {
if((state_val_17340 === (6))){
var inst_17329 = (state_17339[(2)]);
var state_17339__$1 = state_17339;
var statearr_17352_18847 = state_17339__$1;
(statearr_17352_18847[(2)] = inst_17329);

(statearr_17352_18847[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17340 === (3))){
var inst_17331 = (state_17339[(2)]);
var state_17339__$1 = state_17339;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17339__$1,inst_17331);
} else {
if((state_val_17340 === (2))){
var inst_17302 = (state_17339[(10)]);
var inst_17305 = cljs.core.count(inst_17302);
var inst_17306 = (inst_17305 > (0));
var state_17339__$1 = state_17339;
if(cljs.core.truth_(inst_17306)){
var statearr_17354_18848 = state_17339__$1;
(statearr_17354_18848[(1)] = (4));

} else {
var statearr_17355_18849 = state_17339__$1;
(statearr_17355_18849[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17340 === (11))){
var inst_17302 = (state_17339[(10)]);
var inst_17322 = (state_17339[(2)]);
var tmp17353 = inst_17302;
var inst_17302__$1 = tmp17353;
var state_17339__$1 = (function (){var statearr_17360 = state_17339;
(statearr_17360[(10)] = inst_17302__$1);

(statearr_17360[(11)] = inst_17322);

return statearr_17360;
})();
var statearr_17362_18850 = state_17339__$1;
(statearr_17362_18850[(2)] = null);

(statearr_17362_18850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17340 === (9))){
var inst_17313 = (state_17339[(8)]);
var state_17339__$1 = state_17339;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17339__$1,(11),out,inst_17313);
} else {
if((state_val_17340 === (5))){
var inst_17327 = cljs.core.async.close_BANG_(out);
var state_17339__$1 = state_17339;
var statearr_17364_18851 = state_17339__$1;
(statearr_17364_18851[(2)] = inst_17327);

(statearr_17364_18851[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17340 === (10))){
var inst_17325 = (state_17339[(2)]);
var state_17339__$1 = state_17339;
var statearr_17366_18852 = state_17339__$1;
(statearr_17366_18852[(2)] = inst_17325);

(statearr_17366_18852[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17340 === (8))){
var inst_17312 = (state_17339[(7)]);
var inst_17314 = (state_17339[(9)]);
var inst_17302 = (state_17339[(10)]);
var inst_17313 = (state_17339[(8)]);
var inst_17317 = (function (){var cs = inst_17302;
var vec__17308 = inst_17312;
var v = inst_17313;
var c = inst_17314;
return (function (p1__17296_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17296_SHARP_);
});
})();
var inst_17318 = cljs.core.filterv(inst_17317,inst_17302);
var inst_17302__$1 = inst_17318;
var state_17339__$1 = (function (){var statearr_17375 = state_17339;
(statearr_17375[(10)] = inst_17302__$1);

return statearr_17375;
})();
var statearr_17376_18853 = state_17339__$1;
(statearr_17376_18853[(2)] = null);

(statearr_17376_18853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14446__auto__ = null;
var cljs$core$async$state_machine__14446__auto____0 = (function (){
var statearr_17377 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17377[(0)] = cljs$core$async$state_machine__14446__auto__);

(statearr_17377[(1)] = (1));

return statearr_17377;
});
var cljs$core$async$state_machine__14446__auto____1 = (function (state_17339){
while(true){
var ret_value__14447__auto__ = (function (){try{while(true){
var result__14448__auto__ = switch__14445__auto__(state_17339);
if(cljs.core.keyword_identical_QMARK_(result__14448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14448__auto__;
}
break;
}
}catch (e17378){var ex__14449__auto__ = e17378;
var statearr_17379_18857 = state_17339;
(statearr_17379_18857[(2)] = ex__14449__auto__);


if(cljs.core.seq((state_17339[(4)]))){
var statearr_17380_18858 = state_17339;
(statearr_17380_18858[(1)] = cljs.core.first((state_17339[(4)])));

} else {
throw ex__14449__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18859 = state_17339;
state_17339 = G__18859;
continue;
} else {
return ret_value__14447__auto__;
}
break;
}
});
cljs$core$async$state_machine__14446__auto__ = function(state_17339){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14446__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14446__auto____1.call(this,state_17339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14446__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14446__auto____0;
cljs$core$async$state_machine__14446__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14446__auto____1;
return cljs$core$async$state_machine__14446__auto__;
})()
})();
var state__14810__auto__ = (function (){var statearr_17382 = f__14809__auto__();
(statearr_17382[(6)] = c__14808__auto___18843);

return statearr_17382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14810__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__17385 = arguments.length;
switch (G__17385) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14808__auto___18866 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14809__auto__ = (function (){var switch__14445__auto__ = (function (state_17412){
var state_val_17413 = (state_17412[(1)]);
if((state_val_17413 === (7))){
var inst_17394 = (state_17412[(7)]);
var inst_17394__$1 = (state_17412[(2)]);
var inst_17395 = (inst_17394__$1 == null);
var inst_17396 = cljs.core.not(inst_17395);
var state_17412__$1 = (function (){var statearr_17414 = state_17412;
(statearr_17414[(7)] = inst_17394__$1);

return statearr_17414;
})();
if(inst_17396){
var statearr_17415_18870 = state_17412__$1;
(statearr_17415_18870[(1)] = (8));

} else {
var statearr_17416_18871 = state_17412__$1;
(statearr_17416_18871[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17413 === (1))){
var inst_17389 = (0);
var state_17412__$1 = (function (){var statearr_17417 = state_17412;
(statearr_17417[(8)] = inst_17389);

return statearr_17417;
})();
var statearr_17418_18872 = state_17412__$1;
(statearr_17418_18872[(2)] = null);

(statearr_17418_18872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17413 === (4))){
var state_17412__$1 = state_17412;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17412__$1,(7),ch);
} else {
if((state_val_17413 === (6))){
var inst_17407 = (state_17412[(2)]);
var state_17412__$1 = state_17412;
var statearr_17419_18884 = state_17412__$1;
(statearr_17419_18884[(2)] = inst_17407);

(statearr_17419_18884[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17413 === (3))){
var inst_17409 = (state_17412[(2)]);
var inst_17410 = cljs.core.async.close_BANG_(out);
var state_17412__$1 = (function (){var statearr_17420 = state_17412;
(statearr_17420[(9)] = inst_17409);

return statearr_17420;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17412__$1,inst_17410);
} else {
if((state_val_17413 === (2))){
var inst_17389 = (state_17412[(8)]);
var inst_17391 = (inst_17389 < n);
var state_17412__$1 = state_17412;
if(cljs.core.truth_(inst_17391)){
var statearr_17421_18887 = state_17412__$1;
(statearr_17421_18887[(1)] = (4));

} else {
var statearr_17422_18892 = state_17412__$1;
(statearr_17422_18892[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17413 === (11))){
var inst_17389 = (state_17412[(8)]);
var inst_17399 = (state_17412[(2)]);
var inst_17400 = (inst_17389 + (1));
var inst_17389__$1 = inst_17400;
var state_17412__$1 = (function (){var statearr_17423 = state_17412;
(statearr_17423[(8)] = inst_17389__$1);

(statearr_17423[(10)] = inst_17399);

return statearr_17423;
})();
var statearr_17424_18896 = state_17412__$1;
(statearr_17424_18896[(2)] = null);

(statearr_17424_18896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17413 === (9))){
var state_17412__$1 = state_17412;
var statearr_17425_18900 = state_17412__$1;
(statearr_17425_18900[(2)] = null);

(statearr_17425_18900[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17413 === (5))){
var state_17412__$1 = state_17412;
var statearr_17426_18901 = state_17412__$1;
(statearr_17426_18901[(2)] = null);

(statearr_17426_18901[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17413 === (10))){
var inst_17404 = (state_17412[(2)]);
var state_17412__$1 = state_17412;
var statearr_17427_18906 = state_17412__$1;
(statearr_17427_18906[(2)] = inst_17404);

(statearr_17427_18906[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17413 === (8))){
var inst_17394 = (state_17412[(7)]);
var state_17412__$1 = state_17412;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17412__$1,(11),out,inst_17394);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14446__auto__ = null;
var cljs$core$async$state_machine__14446__auto____0 = (function (){
var statearr_17428 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17428[(0)] = cljs$core$async$state_machine__14446__auto__);

(statearr_17428[(1)] = (1));

return statearr_17428;
});
var cljs$core$async$state_machine__14446__auto____1 = (function (state_17412){
while(true){
var ret_value__14447__auto__ = (function (){try{while(true){
var result__14448__auto__ = switch__14445__auto__(state_17412);
if(cljs.core.keyword_identical_QMARK_(result__14448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14448__auto__;
}
break;
}
}catch (e17429){var ex__14449__auto__ = e17429;
var statearr_17430_18917 = state_17412;
(statearr_17430_18917[(2)] = ex__14449__auto__);


if(cljs.core.seq((state_17412[(4)]))){
var statearr_17431_18918 = state_17412;
(statearr_17431_18918[(1)] = cljs.core.first((state_17412[(4)])));

} else {
throw ex__14449__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18919 = state_17412;
state_17412 = G__18919;
continue;
} else {
return ret_value__14447__auto__;
}
break;
}
});
cljs$core$async$state_machine__14446__auto__ = function(state_17412){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14446__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14446__auto____1.call(this,state_17412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14446__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14446__auto____0;
cljs$core$async$state_machine__14446__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14446__auto____1;
return cljs$core$async$state_machine__14446__auto__;
})()
})();
var state__14810__auto__ = (function (){var statearr_17432 = f__14809__auto__();
(statearr_17432[(6)] = c__14808__auto___18866);

return statearr_17432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14810__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17440 = (function (f,ch,meta17437,_,fn1,meta17441){
this.f = f;
this.ch = ch;
this.meta17437 = meta17437;
this._ = _;
this.fn1 = fn1;
this.meta17441 = meta17441;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17440.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17442,meta17441__$1){
var self__ = this;
var _17442__$1 = this;
return (new cljs.core.async.t_cljs$core$async17440(self__.f,self__.ch,self__.meta17437,self__._,self__.fn1,meta17441__$1));
}));

(cljs.core.async.t_cljs$core$async17440.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17442){
var self__ = this;
var _17442__$1 = this;
return self__.meta17441;
}));

(cljs.core.async.t_cljs$core$async17440.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17440.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async17440.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17440.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__17435_SHARP_){
var G__17444 = (((p1__17435_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17435_SHARP_) : self__.f.call(null, p1__17435_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17444) : f1.call(null, G__17444));
});
}));

(cljs.core.async.t_cljs$core$async17440.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17437","meta17437",-163499061,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17436","cljs.core.async/t_cljs$core$async17436",63059196,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17441","meta17441",319828858,null)], null);
}));

(cljs.core.async.t_cljs$core$async17440.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17440.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17440");

(cljs.core.async.t_cljs$core$async17440.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17440");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17440.
 */
cljs.core.async.__GT_t_cljs$core$async17440 = (function cljs$core$async$__GT_t_cljs$core$async17440(f,ch,meta17437,_,fn1,meta17441){
return (new cljs.core.async.t_cljs$core$async17440(f,ch,meta17437,_,fn1,meta17441));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17436 = (function (f,ch,meta17437){
this.f = f;
this.ch = ch;
this.meta17437 = meta17437;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17436.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17438,meta17437__$1){
var self__ = this;
var _17438__$1 = this;
return (new cljs.core.async.t_cljs$core$async17436(self__.f,self__.ch,meta17437__$1));
}));

(cljs.core.async.t_cljs$core$async17436.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17438){
var self__ = this;
var _17438__$1 = this;
return self__.meta17437;
}));

(cljs.core.async.t_cljs$core$async17436.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17436.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17436.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17436.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17436.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async17440(self__.f,self__.ch,self__.meta17437,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17447 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17447) : self__.f.call(null, G__17447));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async17436.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17436.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async17436.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17437","meta17437",-163499061,null)], null);
}));

(cljs.core.async.t_cljs$core$async17436.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17436.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17436");

(cljs.core.async.t_cljs$core$async17436.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17436");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17436.
 */
cljs.core.async.__GT_t_cljs$core$async17436 = (function cljs$core$async$__GT_t_cljs$core$async17436(f,ch,meta17437){
return (new cljs.core.async.t_cljs$core$async17436(f,ch,meta17437));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17436(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17455 = (function (f,ch,meta17456){
this.f = f;
this.ch = ch;
this.meta17456 = meta17456;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17455.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17457,meta17456__$1){
var self__ = this;
var _17457__$1 = this;
return (new cljs.core.async.t_cljs$core$async17455(self__.f,self__.ch,meta17456__$1));
}));

(cljs.core.async.t_cljs$core$async17455.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17457){
var self__ = this;
var _17457__$1 = this;
return self__.meta17456;
}));

(cljs.core.async.t_cljs$core$async17455.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17455.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17455.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17455.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17455.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17455.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async17455.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17456","meta17456",1528833573,null)], null);
}));

(cljs.core.async.t_cljs$core$async17455.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17455.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17455");

(cljs.core.async.t_cljs$core$async17455.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17455");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17455.
 */
cljs.core.async.__GT_t_cljs$core$async17455 = (function cljs$core$async$__GT_t_cljs$core$async17455(f,ch,meta17456){
return (new cljs.core.async.t_cljs$core$async17455(f,ch,meta17456));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17455(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17489 = (function (p,ch,meta17490){
this.p = p;
this.ch = ch;
this.meta17490 = meta17490;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17489.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17491,meta17490__$1){
var self__ = this;
var _17491__$1 = this;
return (new cljs.core.async.t_cljs$core$async17489(self__.p,self__.ch,meta17490__$1));
}));

(cljs.core.async.t_cljs$core$async17489.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17491){
var self__ = this;
var _17491__$1 = this;
return self__.meta17490;
}));

(cljs.core.async.t_cljs$core$async17489.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17489.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17489.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17489.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17489.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17489.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17489.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async17489.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17490","meta17490",-936248899,null)], null);
}));

(cljs.core.async.t_cljs$core$async17489.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17489.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17489");

(cljs.core.async.t_cljs$core$async17489.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17489");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17489.
 */
cljs.core.async.__GT_t_cljs$core$async17489 = (function cljs$core$async$__GT_t_cljs$core$async17489(p,ch,meta17490){
return (new cljs.core.async.t_cljs$core$async17489(p,ch,meta17490));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async17489(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__17527 = arguments.length;
switch (G__17527) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14808__auto___18934 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14809__auto__ = (function (){var switch__14445__auto__ = (function (state_17556){
var state_val_17557 = (state_17556[(1)]);
if((state_val_17557 === (7))){
var inst_17552 = (state_17556[(2)]);
var state_17556__$1 = state_17556;
var statearr_17564_18939 = state_17556__$1;
(statearr_17564_18939[(2)] = inst_17552);

(statearr_17564_18939[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17557 === (1))){
var state_17556__$1 = state_17556;
var statearr_17565_18940 = state_17556__$1;
(statearr_17565_18940[(2)] = null);

(statearr_17565_18940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17557 === (4))){
var inst_17536 = (state_17556[(7)]);
var inst_17536__$1 = (state_17556[(2)]);
var inst_17537 = (inst_17536__$1 == null);
var state_17556__$1 = (function (){var statearr_17566 = state_17556;
(statearr_17566[(7)] = inst_17536__$1);

return statearr_17566;
})();
if(cljs.core.truth_(inst_17537)){
var statearr_17567_18945 = state_17556__$1;
(statearr_17567_18945[(1)] = (5));

} else {
var statearr_17568_18946 = state_17556__$1;
(statearr_17568_18946[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17557 === (6))){
var inst_17536 = (state_17556[(7)]);
var inst_17541 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17536) : p.call(null, inst_17536));
var state_17556__$1 = state_17556;
if(cljs.core.truth_(inst_17541)){
var statearr_17569_18947 = state_17556__$1;
(statearr_17569_18947[(1)] = (8));

} else {
var statearr_17570_18948 = state_17556__$1;
(statearr_17570_18948[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17557 === (3))){
var inst_17554 = (state_17556[(2)]);
var state_17556__$1 = state_17556;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17556__$1,inst_17554);
} else {
if((state_val_17557 === (2))){
var state_17556__$1 = state_17556;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17556__$1,(4),ch);
} else {
if((state_val_17557 === (11))){
var inst_17546 = (state_17556[(2)]);
var state_17556__$1 = state_17556;
var statearr_17572_18949 = state_17556__$1;
(statearr_17572_18949[(2)] = inst_17546);

(statearr_17572_18949[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17557 === (9))){
var state_17556__$1 = state_17556;
var statearr_17573_18950 = state_17556__$1;
(statearr_17573_18950[(2)] = null);

(statearr_17573_18950[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17557 === (5))){
var inst_17539 = cljs.core.async.close_BANG_(out);
var state_17556__$1 = state_17556;
var statearr_17574_18951 = state_17556__$1;
(statearr_17574_18951[(2)] = inst_17539);

(statearr_17574_18951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17557 === (10))){
var inst_17549 = (state_17556[(2)]);
var state_17556__$1 = (function (){var statearr_17575 = state_17556;
(statearr_17575[(8)] = inst_17549);

return statearr_17575;
})();
var statearr_17576_18952 = state_17556__$1;
(statearr_17576_18952[(2)] = null);

(statearr_17576_18952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17557 === (8))){
var inst_17536 = (state_17556[(7)]);
var state_17556__$1 = state_17556;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17556__$1,(11),out,inst_17536);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14446__auto__ = null;
var cljs$core$async$state_machine__14446__auto____0 = (function (){
var statearr_17582 = [null,null,null,null,null,null,null,null,null];
(statearr_17582[(0)] = cljs$core$async$state_machine__14446__auto__);

(statearr_17582[(1)] = (1));

return statearr_17582;
});
var cljs$core$async$state_machine__14446__auto____1 = (function (state_17556){
while(true){
var ret_value__14447__auto__ = (function (){try{while(true){
var result__14448__auto__ = switch__14445__auto__(state_17556);
if(cljs.core.keyword_identical_QMARK_(result__14448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14448__auto__;
}
break;
}
}catch (e17583){var ex__14449__auto__ = e17583;
var statearr_17587_18953 = state_17556;
(statearr_17587_18953[(2)] = ex__14449__auto__);


if(cljs.core.seq((state_17556[(4)]))){
var statearr_17588_18957 = state_17556;
(statearr_17588_18957[(1)] = cljs.core.first((state_17556[(4)])));

} else {
throw ex__14449__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18958 = state_17556;
state_17556 = G__18958;
continue;
} else {
return ret_value__14447__auto__;
}
break;
}
});
cljs$core$async$state_machine__14446__auto__ = function(state_17556){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14446__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14446__auto____1.call(this,state_17556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14446__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14446__auto____0;
cljs$core$async$state_machine__14446__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14446__auto____1;
return cljs$core$async$state_machine__14446__auto__;
})()
})();
var state__14810__auto__ = (function (){var statearr_17589 = f__14809__auto__();
(statearr_17589[(6)] = c__14808__auto___18934);

return statearr_17589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14810__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17593 = arguments.length;
switch (G__17593) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14809__auto__ = (function (){var switch__14445__auto__ = (function (state_17666){
var state_val_17667 = (state_17666[(1)]);
if((state_val_17667 === (7))){
var inst_17662 = (state_17666[(2)]);
var state_17666__$1 = state_17666;
var statearr_17684_18960 = state_17666__$1;
(statearr_17684_18960[(2)] = inst_17662);

(statearr_17684_18960[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17667 === (20))){
var inst_17631 = (state_17666[(7)]);
var inst_17643 = (state_17666[(2)]);
var inst_17644 = cljs.core.next(inst_17631);
var inst_17616 = inst_17644;
var inst_17617 = null;
var inst_17618 = (0);
var inst_17619 = (0);
var state_17666__$1 = (function (){var statearr_17688 = state_17666;
(statearr_17688[(8)] = inst_17643);

(statearr_17688[(9)] = inst_17619);

(statearr_17688[(10)] = inst_17616);

(statearr_17688[(11)] = inst_17618);

(statearr_17688[(12)] = inst_17617);

return statearr_17688;
})();
var statearr_17690_18964 = state_17666__$1;
(statearr_17690_18964[(2)] = null);

(statearr_17690_18964[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17667 === (1))){
var state_17666__$1 = state_17666;
var statearr_17704_18965 = state_17666__$1;
(statearr_17704_18965[(2)] = null);

(statearr_17704_18965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17667 === (4))){
var inst_17605 = (state_17666[(13)]);
var inst_17605__$1 = (state_17666[(2)]);
var inst_17606 = (inst_17605__$1 == null);
var state_17666__$1 = (function (){var statearr_17705 = state_17666;
(statearr_17705[(13)] = inst_17605__$1);

return statearr_17705;
})();
if(cljs.core.truth_(inst_17606)){
var statearr_17706_18969 = state_17666__$1;
(statearr_17706_18969[(1)] = (5));

} else {
var statearr_17707_18970 = state_17666__$1;
(statearr_17707_18970[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17667 === (15))){
var state_17666__$1 = state_17666;
var statearr_17711_18971 = state_17666__$1;
(statearr_17711_18971[(2)] = null);

(statearr_17711_18971[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17667 === (21))){
var state_17666__$1 = state_17666;
var statearr_17712_18972 = state_17666__$1;
(statearr_17712_18972[(2)] = null);

(statearr_17712_18972[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17667 === (13))){
var inst_17619 = (state_17666[(9)]);
var inst_17616 = (state_17666[(10)]);
var inst_17618 = (state_17666[(11)]);
var inst_17617 = (state_17666[(12)]);
var inst_17627 = (state_17666[(2)]);
var inst_17628 = (inst_17619 + (1));
var tmp17708 = inst_17616;
var tmp17709 = inst_17618;
var tmp17710 = inst_17617;
var inst_17616__$1 = tmp17708;
var inst_17617__$1 = tmp17710;
var inst_17618__$1 = tmp17709;
var inst_17619__$1 = inst_17628;
var state_17666__$1 = (function (){var statearr_17716 = state_17666;
(statearr_17716[(9)] = inst_17619__$1);

(statearr_17716[(10)] = inst_17616__$1);

(statearr_17716[(11)] = inst_17618__$1);

(statearr_17716[(12)] = inst_17617__$1);

(statearr_17716[(14)] = inst_17627);

return statearr_17716;
})();
var statearr_17717_18977 = state_17666__$1;
(statearr_17717_18977[(2)] = null);

(statearr_17717_18977[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17667 === (22))){
var state_17666__$1 = state_17666;
var statearr_17718_18978 = state_17666__$1;
(statearr_17718_18978[(2)] = null);

(statearr_17718_18978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17667 === (6))){
var inst_17605 = (state_17666[(13)]);
var inst_17614 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17605) : f.call(null, inst_17605));
var inst_17615 = cljs.core.seq(inst_17614);
var inst_17616 = inst_17615;
var inst_17617 = null;
var inst_17618 = (0);
var inst_17619 = (0);
var state_17666__$1 = (function (){var statearr_17719 = state_17666;
(statearr_17719[(9)] = inst_17619);

(statearr_17719[(10)] = inst_17616);

(statearr_17719[(11)] = inst_17618);

(statearr_17719[(12)] = inst_17617);

return statearr_17719;
})();
var statearr_17726_18979 = state_17666__$1;
(statearr_17726_18979[(2)] = null);

(statearr_17726_18979[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17667 === (17))){
var inst_17631 = (state_17666[(7)]);
var inst_17636 = cljs.core.chunk_first(inst_17631);
var inst_17637 = cljs.core.chunk_rest(inst_17631);
var inst_17638 = cljs.core.count(inst_17636);
var inst_17616 = inst_17637;
var inst_17617 = inst_17636;
var inst_17618 = inst_17638;
var inst_17619 = (0);
var state_17666__$1 = (function (){var statearr_17731 = state_17666;
(statearr_17731[(9)] = inst_17619);

(statearr_17731[(10)] = inst_17616);

(statearr_17731[(11)] = inst_17618);

(statearr_17731[(12)] = inst_17617);

return statearr_17731;
})();
var statearr_17732_18980 = state_17666__$1;
(statearr_17732_18980[(2)] = null);

(statearr_17732_18980[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17667 === (3))){
var inst_17664 = (state_17666[(2)]);
var state_17666__$1 = state_17666;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17666__$1,inst_17664);
} else {
if((state_val_17667 === (12))){
var inst_17652 = (state_17666[(2)]);
var state_17666__$1 = state_17666;
var statearr_17735_18982 = state_17666__$1;
(statearr_17735_18982[(2)] = inst_17652);

(statearr_17735_18982[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17667 === (2))){
var state_17666__$1 = state_17666;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17666__$1,(4),in$);
} else {
if((state_val_17667 === (23))){
var inst_17660 = (state_17666[(2)]);
var state_17666__$1 = state_17666;
var statearr_17737_18984 = state_17666__$1;
(statearr_17737_18984[(2)] = inst_17660);

(statearr_17737_18984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17667 === (19))){
var inst_17647 = (state_17666[(2)]);
var state_17666__$1 = state_17666;
var statearr_17738_18985 = state_17666__$1;
(statearr_17738_18985[(2)] = inst_17647);

(statearr_17738_18985[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17667 === (11))){
var inst_17631 = (state_17666[(7)]);
var inst_17616 = (state_17666[(10)]);
var inst_17631__$1 = cljs.core.seq(inst_17616);
var state_17666__$1 = (function (){var statearr_17739 = state_17666;
(statearr_17739[(7)] = inst_17631__$1);

return statearr_17739;
})();
if(inst_17631__$1){
var statearr_17740_18986 = state_17666__$1;
(statearr_17740_18986[(1)] = (14));

} else {
var statearr_17741_18987 = state_17666__$1;
(statearr_17741_18987[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17667 === (9))){
var inst_17654 = (state_17666[(2)]);
var inst_17655 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17666__$1 = (function (){var statearr_17742 = state_17666;
(statearr_17742[(15)] = inst_17654);

return statearr_17742;
})();
if(cljs.core.truth_(inst_17655)){
var statearr_17744_18988 = state_17666__$1;
(statearr_17744_18988[(1)] = (21));

} else {
var statearr_17745_18989 = state_17666__$1;
(statearr_17745_18989[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17667 === (5))){
var inst_17608 = cljs.core.async.close_BANG_(out);
var state_17666__$1 = state_17666;
var statearr_17746_18990 = state_17666__$1;
(statearr_17746_18990[(2)] = inst_17608);

(statearr_17746_18990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17667 === (14))){
var inst_17631 = (state_17666[(7)]);
var inst_17634 = cljs.core.chunked_seq_QMARK_(inst_17631);
var state_17666__$1 = state_17666;
if(inst_17634){
var statearr_17747_18994 = state_17666__$1;
(statearr_17747_18994[(1)] = (17));

} else {
var statearr_17748_18995 = state_17666__$1;
(statearr_17748_18995[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17667 === (16))){
var inst_17650 = (state_17666[(2)]);
var state_17666__$1 = state_17666;
var statearr_17749_18996 = state_17666__$1;
(statearr_17749_18996[(2)] = inst_17650);

(statearr_17749_18996[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17667 === (10))){
var inst_17619 = (state_17666[(9)]);
var inst_17617 = (state_17666[(12)]);
var inst_17625 = cljs.core._nth(inst_17617,inst_17619);
var state_17666__$1 = state_17666;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17666__$1,(13),out,inst_17625);
} else {
if((state_val_17667 === (18))){
var inst_17631 = (state_17666[(7)]);
var inst_17641 = cljs.core.first(inst_17631);
var state_17666__$1 = state_17666;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17666__$1,(20),out,inst_17641);
} else {
if((state_val_17667 === (8))){
var inst_17619 = (state_17666[(9)]);
var inst_17618 = (state_17666[(11)]);
var inst_17622 = (inst_17619 < inst_17618);
var inst_17623 = inst_17622;
var state_17666__$1 = state_17666;
if(cljs.core.truth_(inst_17623)){
var statearr_17750_18997 = state_17666__$1;
(statearr_17750_18997[(1)] = (10));

} else {
var statearr_17751_18998 = state_17666__$1;
(statearr_17751_18998[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14446__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14446__auto____0 = (function (){
var statearr_17754 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17754[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14446__auto__);

(statearr_17754[(1)] = (1));

return statearr_17754;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14446__auto____1 = (function (state_17666){
while(true){
var ret_value__14447__auto__ = (function (){try{while(true){
var result__14448__auto__ = switch__14445__auto__(state_17666);
if(cljs.core.keyword_identical_QMARK_(result__14448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14448__auto__;
}
break;
}
}catch (e17755){var ex__14449__auto__ = e17755;
var statearr_17762_19006 = state_17666;
(statearr_17762_19006[(2)] = ex__14449__auto__);


if(cljs.core.seq((state_17666[(4)]))){
var statearr_17763_19007 = state_17666;
(statearr_17763_19007[(1)] = cljs.core.first((state_17666[(4)])));

} else {
throw ex__14449__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19008 = state_17666;
state_17666 = G__19008;
continue;
} else {
return ret_value__14447__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14446__auto__ = function(state_17666){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14446__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14446__auto____1.call(this,state_17666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14446__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14446__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14446__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14446__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14446__auto__;
})()
})();
var state__14810__auto__ = (function (){var statearr_17764 = f__14809__auto__();
(statearr_17764[(6)] = c__14808__auto__);

return statearr_17764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14810__auto__);
}));

return c__14808__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17768 = arguments.length;
switch (G__17768) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17775 = arguments.length;
switch (G__17775) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17790 = arguments.length;
switch (G__17790) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14808__auto___19023 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14809__auto__ = (function (){var switch__14445__auto__ = (function (state_17818){
var state_val_17819 = (state_17818[(1)]);
if((state_val_17819 === (7))){
var inst_17813 = (state_17818[(2)]);
var state_17818__$1 = state_17818;
var statearr_17822_19024 = state_17818__$1;
(statearr_17822_19024[(2)] = inst_17813);

(statearr_17822_19024[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17819 === (1))){
var inst_17795 = null;
var state_17818__$1 = (function (){var statearr_17826 = state_17818;
(statearr_17826[(7)] = inst_17795);

return statearr_17826;
})();
var statearr_17827_19028 = state_17818__$1;
(statearr_17827_19028[(2)] = null);

(statearr_17827_19028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17819 === (4))){
var inst_17798 = (state_17818[(8)]);
var inst_17798__$1 = (state_17818[(2)]);
var inst_17799 = (inst_17798__$1 == null);
var inst_17800 = cljs.core.not(inst_17799);
var state_17818__$1 = (function (){var statearr_17829 = state_17818;
(statearr_17829[(8)] = inst_17798__$1);

return statearr_17829;
})();
if(inst_17800){
var statearr_17830_19033 = state_17818__$1;
(statearr_17830_19033[(1)] = (5));

} else {
var statearr_17831_19034 = state_17818__$1;
(statearr_17831_19034[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17819 === (6))){
var state_17818__$1 = state_17818;
var statearr_17832_19035 = state_17818__$1;
(statearr_17832_19035[(2)] = null);

(statearr_17832_19035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17819 === (3))){
var inst_17815 = (state_17818[(2)]);
var inst_17816 = cljs.core.async.close_BANG_(out);
var state_17818__$1 = (function (){var statearr_17833 = state_17818;
(statearr_17833[(9)] = inst_17815);

return statearr_17833;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17818__$1,inst_17816);
} else {
if((state_val_17819 === (2))){
var state_17818__$1 = state_17818;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17818__$1,(4),ch);
} else {
if((state_val_17819 === (11))){
var inst_17798 = (state_17818[(8)]);
var inst_17807 = (state_17818[(2)]);
var inst_17795 = inst_17798;
var state_17818__$1 = (function (){var statearr_17844 = state_17818;
(statearr_17844[(7)] = inst_17795);

(statearr_17844[(10)] = inst_17807);

return statearr_17844;
})();
var statearr_17845_19043 = state_17818__$1;
(statearr_17845_19043[(2)] = null);

(statearr_17845_19043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17819 === (9))){
var inst_17798 = (state_17818[(8)]);
var state_17818__$1 = state_17818;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17818__$1,(11),out,inst_17798);
} else {
if((state_val_17819 === (5))){
var inst_17798 = (state_17818[(8)]);
var inst_17795 = (state_17818[(7)]);
var inst_17802 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17798,inst_17795);
var state_17818__$1 = state_17818;
if(inst_17802){
var statearr_17847_19044 = state_17818__$1;
(statearr_17847_19044[(1)] = (8));

} else {
var statearr_17848_19045 = state_17818__$1;
(statearr_17848_19045[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17819 === (10))){
var inst_17810 = (state_17818[(2)]);
var state_17818__$1 = state_17818;
var statearr_17852_19048 = state_17818__$1;
(statearr_17852_19048[(2)] = inst_17810);

(statearr_17852_19048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17819 === (8))){
var inst_17795 = (state_17818[(7)]);
var tmp17846 = inst_17795;
var inst_17795__$1 = tmp17846;
var state_17818__$1 = (function (){var statearr_17853 = state_17818;
(statearr_17853[(7)] = inst_17795__$1);

return statearr_17853;
})();
var statearr_17854_19052 = state_17818__$1;
(statearr_17854_19052[(2)] = null);

(statearr_17854_19052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14446__auto__ = null;
var cljs$core$async$state_machine__14446__auto____0 = (function (){
var statearr_17855 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17855[(0)] = cljs$core$async$state_machine__14446__auto__);

(statearr_17855[(1)] = (1));

return statearr_17855;
});
var cljs$core$async$state_machine__14446__auto____1 = (function (state_17818){
while(true){
var ret_value__14447__auto__ = (function (){try{while(true){
var result__14448__auto__ = switch__14445__auto__(state_17818);
if(cljs.core.keyword_identical_QMARK_(result__14448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14448__auto__;
}
break;
}
}catch (e17856){var ex__14449__auto__ = e17856;
var statearr_17857_19057 = state_17818;
(statearr_17857_19057[(2)] = ex__14449__auto__);


if(cljs.core.seq((state_17818[(4)]))){
var statearr_17858_19058 = state_17818;
(statearr_17858_19058[(1)] = cljs.core.first((state_17818[(4)])));

} else {
throw ex__14449__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19059 = state_17818;
state_17818 = G__19059;
continue;
} else {
return ret_value__14447__auto__;
}
break;
}
});
cljs$core$async$state_machine__14446__auto__ = function(state_17818){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14446__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14446__auto____1.call(this,state_17818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14446__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14446__auto____0;
cljs$core$async$state_machine__14446__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14446__auto____1;
return cljs$core$async$state_machine__14446__auto__;
})()
})();
var state__14810__auto__ = (function (){var statearr_17859 = f__14809__auto__();
(statearr_17859[(6)] = c__14808__auto___19023);

return statearr_17859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14810__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17864 = arguments.length;
switch (G__17864) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14808__auto___19062 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14809__auto__ = (function (){var switch__14445__auto__ = (function (state_17903){
var state_val_17904 = (state_17903[(1)]);
if((state_val_17904 === (7))){
var inst_17898 = (state_17903[(2)]);
var state_17903__$1 = state_17903;
var statearr_17905_19063 = state_17903__$1;
(statearr_17905_19063[(2)] = inst_17898);

(statearr_17905_19063[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17904 === (1))){
var inst_17865 = (new Array(n));
var inst_17866 = inst_17865;
var inst_17867 = (0);
var state_17903__$1 = (function (){var statearr_17906 = state_17903;
(statearr_17906[(7)] = inst_17866);

(statearr_17906[(8)] = inst_17867);

return statearr_17906;
})();
var statearr_17908_19064 = state_17903__$1;
(statearr_17908_19064[(2)] = null);

(statearr_17908_19064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17904 === (4))){
var inst_17870 = (state_17903[(9)]);
var inst_17870__$1 = (state_17903[(2)]);
var inst_17871 = (inst_17870__$1 == null);
var inst_17872 = cljs.core.not(inst_17871);
var state_17903__$1 = (function (){var statearr_17909 = state_17903;
(statearr_17909[(9)] = inst_17870__$1);

return statearr_17909;
})();
if(inst_17872){
var statearr_17910_19065 = state_17903__$1;
(statearr_17910_19065[(1)] = (5));

} else {
var statearr_17911_19066 = state_17903__$1;
(statearr_17911_19066[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17904 === (15))){
var inst_17892 = (state_17903[(2)]);
var state_17903__$1 = state_17903;
var statearr_17913_19067 = state_17903__$1;
(statearr_17913_19067[(2)] = inst_17892);

(statearr_17913_19067[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17904 === (13))){
var state_17903__$1 = state_17903;
var statearr_17914_19068 = state_17903__$1;
(statearr_17914_19068[(2)] = null);

(statearr_17914_19068[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17904 === (6))){
var inst_17867 = (state_17903[(8)]);
var inst_17888 = (inst_17867 > (0));
var state_17903__$1 = state_17903;
if(cljs.core.truth_(inst_17888)){
var statearr_17915_19069 = state_17903__$1;
(statearr_17915_19069[(1)] = (12));

} else {
var statearr_17916_19070 = state_17903__$1;
(statearr_17916_19070[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17904 === (3))){
var inst_17900 = (state_17903[(2)]);
var state_17903__$1 = state_17903;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17903__$1,inst_17900);
} else {
if((state_val_17904 === (12))){
var inst_17866 = (state_17903[(7)]);
var inst_17890 = cljs.core.vec(inst_17866);
var state_17903__$1 = state_17903;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17903__$1,(15),out,inst_17890);
} else {
if((state_val_17904 === (2))){
var state_17903__$1 = state_17903;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17903__$1,(4),ch);
} else {
if((state_val_17904 === (11))){
var inst_17882 = (state_17903[(2)]);
var inst_17883 = (new Array(n));
var inst_17866 = inst_17883;
var inst_17867 = (0);
var state_17903__$1 = (function (){var statearr_17917 = state_17903;
(statearr_17917[(10)] = inst_17882);

(statearr_17917[(7)] = inst_17866);

(statearr_17917[(8)] = inst_17867);

return statearr_17917;
})();
var statearr_17918_19071 = state_17903__$1;
(statearr_17918_19071[(2)] = null);

(statearr_17918_19071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17904 === (9))){
var inst_17866 = (state_17903[(7)]);
var inst_17880 = cljs.core.vec(inst_17866);
var state_17903__$1 = state_17903;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17903__$1,(11),out,inst_17880);
} else {
if((state_val_17904 === (5))){
var inst_17870 = (state_17903[(9)]);
var inst_17866 = (state_17903[(7)]);
var inst_17875 = (state_17903[(11)]);
var inst_17867 = (state_17903[(8)]);
var inst_17874 = (inst_17866[inst_17867] = inst_17870);
var inst_17875__$1 = (inst_17867 + (1));
var inst_17876 = (inst_17875__$1 < n);
var state_17903__$1 = (function (){var statearr_17923 = state_17903;
(statearr_17923[(12)] = inst_17874);

(statearr_17923[(11)] = inst_17875__$1);

return statearr_17923;
})();
if(cljs.core.truth_(inst_17876)){
var statearr_17924_19072 = state_17903__$1;
(statearr_17924_19072[(1)] = (8));

} else {
var statearr_17925_19074 = state_17903__$1;
(statearr_17925_19074[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17904 === (14))){
var inst_17895 = (state_17903[(2)]);
var inst_17896 = cljs.core.async.close_BANG_(out);
var state_17903__$1 = (function (){var statearr_17930 = state_17903;
(statearr_17930[(13)] = inst_17895);

return statearr_17930;
})();
var statearr_17931_19078 = state_17903__$1;
(statearr_17931_19078[(2)] = inst_17896);

(statearr_17931_19078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17904 === (10))){
var inst_17886 = (state_17903[(2)]);
var state_17903__$1 = state_17903;
var statearr_17932_19079 = state_17903__$1;
(statearr_17932_19079[(2)] = inst_17886);

(statearr_17932_19079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17904 === (8))){
var inst_17866 = (state_17903[(7)]);
var inst_17875 = (state_17903[(11)]);
var tmp17929 = inst_17866;
var inst_17866__$1 = tmp17929;
var inst_17867 = inst_17875;
var state_17903__$1 = (function (){var statearr_17933 = state_17903;
(statearr_17933[(7)] = inst_17866__$1);

(statearr_17933[(8)] = inst_17867);

return statearr_17933;
})();
var statearr_17934_19080 = state_17903__$1;
(statearr_17934_19080[(2)] = null);

(statearr_17934_19080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14446__auto__ = null;
var cljs$core$async$state_machine__14446__auto____0 = (function (){
var statearr_17935 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17935[(0)] = cljs$core$async$state_machine__14446__auto__);

(statearr_17935[(1)] = (1));

return statearr_17935;
});
var cljs$core$async$state_machine__14446__auto____1 = (function (state_17903){
while(true){
var ret_value__14447__auto__ = (function (){try{while(true){
var result__14448__auto__ = switch__14445__auto__(state_17903);
if(cljs.core.keyword_identical_QMARK_(result__14448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14448__auto__;
}
break;
}
}catch (e17936){var ex__14449__auto__ = e17936;
var statearr_17937_19081 = state_17903;
(statearr_17937_19081[(2)] = ex__14449__auto__);


if(cljs.core.seq((state_17903[(4)]))){
var statearr_17938_19082 = state_17903;
(statearr_17938_19082[(1)] = cljs.core.first((state_17903[(4)])));

} else {
throw ex__14449__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19086 = state_17903;
state_17903 = G__19086;
continue;
} else {
return ret_value__14447__auto__;
}
break;
}
});
cljs$core$async$state_machine__14446__auto__ = function(state_17903){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14446__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14446__auto____1.call(this,state_17903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14446__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14446__auto____0;
cljs$core$async$state_machine__14446__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14446__auto____1;
return cljs$core$async$state_machine__14446__auto__;
})()
})();
var state__14810__auto__ = (function (){var statearr_17939 = f__14809__auto__();
(statearr_17939[(6)] = c__14808__auto___19062);

return statearr_17939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14810__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17945 = arguments.length;
switch (G__17945) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14808__auto___19091 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14809__auto__ = (function (){var switch__14445__auto__ = (function (state_17990){
var state_val_17991 = (state_17990[(1)]);
if((state_val_17991 === (7))){
var inst_17986 = (state_17990[(2)]);
var state_17990__$1 = state_17990;
var statearr_17992_19092 = state_17990__$1;
(statearr_17992_19092[(2)] = inst_17986);

(statearr_17992_19092[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17991 === (1))){
var inst_17946 = [];
var inst_17947 = inst_17946;
var inst_17948 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17990__$1 = (function (){var statearr_17993 = state_17990;
(statearr_17993[(7)] = inst_17947);

(statearr_17993[(8)] = inst_17948);

return statearr_17993;
})();
var statearr_17994_19094 = state_17990__$1;
(statearr_17994_19094[(2)] = null);

(statearr_17994_19094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17991 === (4))){
var inst_17951 = (state_17990[(9)]);
var inst_17951__$1 = (state_17990[(2)]);
var inst_17952 = (inst_17951__$1 == null);
var inst_17953 = cljs.core.not(inst_17952);
var state_17990__$1 = (function (){var statearr_18009 = state_17990;
(statearr_18009[(9)] = inst_17951__$1);

return statearr_18009;
})();
if(inst_17953){
var statearr_18010_19099 = state_17990__$1;
(statearr_18010_19099[(1)] = (5));

} else {
var statearr_18011_19101 = state_17990__$1;
(statearr_18011_19101[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17991 === (15))){
var inst_17947 = (state_17990[(7)]);
var inst_17978 = cljs.core.vec(inst_17947);
var state_17990__$1 = state_17990;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17990__$1,(18),out,inst_17978);
} else {
if((state_val_17991 === (13))){
var inst_17973 = (state_17990[(2)]);
var state_17990__$1 = state_17990;
var statearr_18026_19102 = state_17990__$1;
(statearr_18026_19102[(2)] = inst_17973);

(statearr_18026_19102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17991 === (6))){
var inst_17947 = (state_17990[(7)]);
var inst_17975 = inst_17947.length;
var inst_17976 = (inst_17975 > (0));
var state_17990__$1 = state_17990;
if(cljs.core.truth_(inst_17976)){
var statearr_18033_19104 = state_17990__$1;
(statearr_18033_19104[(1)] = (15));

} else {
var statearr_18034_19105 = state_17990__$1;
(statearr_18034_19105[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17991 === (17))){
var inst_17983 = (state_17990[(2)]);
var inst_17984 = cljs.core.async.close_BANG_(out);
var state_17990__$1 = (function (){var statearr_18041 = state_17990;
(statearr_18041[(10)] = inst_17983);

return statearr_18041;
})();
var statearr_18042_19106 = state_17990__$1;
(statearr_18042_19106[(2)] = inst_17984);

(statearr_18042_19106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17991 === (3))){
var inst_17988 = (state_17990[(2)]);
var state_17990__$1 = state_17990;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17990__$1,inst_17988);
} else {
if((state_val_17991 === (12))){
var inst_17947 = (state_17990[(7)]);
var inst_17966 = cljs.core.vec(inst_17947);
var state_17990__$1 = state_17990;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17990__$1,(14),out,inst_17966);
} else {
if((state_val_17991 === (2))){
var state_17990__$1 = state_17990;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17990__$1,(4),ch);
} else {
if((state_val_17991 === (11))){
var inst_17947 = (state_17990[(7)]);
var inst_17955 = (state_17990[(11)]);
var inst_17951 = (state_17990[(9)]);
var inst_17963 = inst_17947.push(inst_17951);
var tmp18043 = inst_17947;
var inst_17947__$1 = tmp18043;
var inst_17948 = inst_17955;
var state_17990__$1 = (function (){var statearr_18044 = state_17990;
(statearr_18044[(12)] = inst_17963);

(statearr_18044[(7)] = inst_17947__$1);

(statearr_18044[(8)] = inst_17948);

return statearr_18044;
})();
var statearr_18047_19111 = state_17990__$1;
(statearr_18047_19111[(2)] = null);

(statearr_18047_19111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17991 === (9))){
var inst_17948 = (state_17990[(8)]);
var inst_17959 = cljs.core.keyword_identical_QMARK_(inst_17948,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_17990__$1 = state_17990;
var statearr_18048_19124 = state_17990__$1;
(statearr_18048_19124[(2)] = inst_17959);

(statearr_18048_19124[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17991 === (5))){
var inst_17948 = (state_17990[(8)]);
var inst_17955 = (state_17990[(11)]);
var inst_17951 = (state_17990[(9)]);
var inst_17956 = (state_17990[(13)]);
var inst_17955__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17951) : f.call(null, inst_17951));
var inst_17956__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17955__$1,inst_17948);
var state_17990__$1 = (function (){var statearr_18049 = state_17990;
(statearr_18049[(11)] = inst_17955__$1);

(statearr_18049[(13)] = inst_17956__$1);

return statearr_18049;
})();
if(inst_17956__$1){
var statearr_18051_19145 = state_17990__$1;
(statearr_18051_19145[(1)] = (8));

} else {
var statearr_18052_19146 = state_17990__$1;
(statearr_18052_19146[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17991 === (14))){
var inst_17955 = (state_17990[(11)]);
var inst_17951 = (state_17990[(9)]);
var inst_17968 = (state_17990[(2)]);
var inst_17969 = [];
var inst_17970 = inst_17969.push(inst_17951);
var inst_17947 = inst_17969;
var inst_17948 = inst_17955;
var state_17990__$1 = (function (){var statearr_18053 = state_17990;
(statearr_18053[(7)] = inst_17947);

(statearr_18053[(14)] = inst_17968);

(statearr_18053[(8)] = inst_17948);

(statearr_18053[(15)] = inst_17970);

return statearr_18053;
})();
var statearr_18054_19149 = state_17990__$1;
(statearr_18054_19149[(2)] = null);

(statearr_18054_19149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17991 === (16))){
var state_17990__$1 = state_17990;
var statearr_18055_19150 = state_17990__$1;
(statearr_18055_19150[(2)] = null);

(statearr_18055_19150[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17991 === (10))){
var inst_17961 = (state_17990[(2)]);
var state_17990__$1 = state_17990;
if(cljs.core.truth_(inst_17961)){
var statearr_18056_19151 = state_17990__$1;
(statearr_18056_19151[(1)] = (11));

} else {
var statearr_18057_19153 = state_17990__$1;
(statearr_18057_19153[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17991 === (18))){
var inst_17980 = (state_17990[(2)]);
var state_17990__$1 = state_17990;
var statearr_18058_19155 = state_17990__$1;
(statearr_18058_19155[(2)] = inst_17980);

(statearr_18058_19155[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17991 === (8))){
var inst_17956 = (state_17990[(13)]);
var state_17990__$1 = state_17990;
var statearr_18062_19157 = state_17990__$1;
(statearr_18062_19157[(2)] = inst_17956);

(statearr_18062_19157[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14446__auto__ = null;
var cljs$core$async$state_machine__14446__auto____0 = (function (){
var statearr_18063 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18063[(0)] = cljs$core$async$state_machine__14446__auto__);

(statearr_18063[(1)] = (1));

return statearr_18063;
});
var cljs$core$async$state_machine__14446__auto____1 = (function (state_17990){
while(true){
var ret_value__14447__auto__ = (function (){try{while(true){
var result__14448__auto__ = switch__14445__auto__(state_17990);
if(cljs.core.keyword_identical_QMARK_(result__14448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14448__auto__;
}
break;
}
}catch (e18064){var ex__14449__auto__ = e18064;
var statearr_18065_19168 = state_17990;
(statearr_18065_19168[(2)] = ex__14449__auto__);


if(cljs.core.seq((state_17990[(4)]))){
var statearr_18066_19169 = state_17990;
(statearr_18066_19169[(1)] = cljs.core.first((state_17990[(4)])));

} else {
throw ex__14449__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19170 = state_17990;
state_17990 = G__19170;
continue;
} else {
return ret_value__14447__auto__;
}
break;
}
});
cljs$core$async$state_machine__14446__auto__ = function(state_17990){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14446__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14446__auto____1.call(this,state_17990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14446__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14446__auto____0;
cljs$core$async$state_machine__14446__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14446__auto____1;
return cljs$core$async$state_machine__14446__auto__;
})()
})();
var state__14810__auto__ = (function (){var statearr_18070 = f__14809__auto__();
(statearr_18070[(6)] = c__14808__auto___19091);

return statearr_18070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14810__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
