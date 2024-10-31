goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_12629 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_12629(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_12631 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_12631(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__11711 = coll;
var G__11712 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__11711,G__11712) : shadow.dom.lazy_native_coll_seq.call(null, G__11711,G__11712));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null, );
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__11721 = arguments.length;
switch (G__11721) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__11733 = arguments.length;
switch (G__11733) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__11735 = arguments.length;
switch (G__11735) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__11746 = arguments.length;
switch (G__11746) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__11753 = arguments.length;
switch (G__11753) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__11757 = arguments.length;
switch (G__11757) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
}));
}catch (e11773){if((e11773 instanceof Object)){
var e = e11773;
return console.log("didnt support attachEvent",el,e);
} else {
throw e11773;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__11775 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__11776 = null;
var count__11777 = (0);
var i__11778 = (0);
while(true){
if((i__11778 < count__11777)){
var el = chunk__11776.cljs$core$IIndexed$_nth$arity$2(null, i__11778);
var handler_12653__$1 = ((function (seq__11775,chunk__11776,count__11777,i__11778,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__11775,chunk__11776,count__11777,i__11778,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12653__$1);


var G__12654 = seq__11775;
var G__12655 = chunk__11776;
var G__12656 = count__11777;
var G__12657 = (i__11778 + (1));
seq__11775 = G__12654;
chunk__11776 = G__12655;
count__11777 = G__12656;
i__11778 = G__12657;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11775);
if(temp__5804__auto__){
var seq__11775__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11775__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11775__$1);
var G__12658 = cljs.core.chunk_rest(seq__11775__$1);
var G__12659 = c__5525__auto__;
var G__12660 = cljs.core.count(c__5525__auto__);
var G__12661 = (0);
seq__11775 = G__12658;
chunk__11776 = G__12659;
count__11777 = G__12660;
i__11778 = G__12661;
continue;
} else {
var el = cljs.core.first(seq__11775__$1);
var handler_12665__$1 = ((function (seq__11775,chunk__11776,count__11777,i__11778,el,seq__11775__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__11775,chunk__11776,count__11777,i__11778,el,seq__11775__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12665__$1);


var G__12666 = cljs.core.next(seq__11775__$1);
var G__12667 = null;
var G__12668 = (0);
var G__12669 = (0);
seq__11775 = G__12666;
chunk__11776 = G__12667;
count__11777 = G__12668;
i__11778 = G__12669;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__11806 = arguments.length;
switch (G__11806) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__11815 = cljs.core.seq(events);
var chunk__11816 = null;
var count__11817 = (0);
var i__11818 = (0);
while(true){
if((i__11818 < count__11817)){
var vec__11830 = chunk__11816.cljs$core$IIndexed$_nth$arity$2(null, i__11818);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11830,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11830,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12672 = seq__11815;
var G__12673 = chunk__11816;
var G__12674 = count__11817;
var G__12675 = (i__11818 + (1));
seq__11815 = G__12672;
chunk__11816 = G__12673;
count__11817 = G__12674;
i__11818 = G__12675;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11815);
if(temp__5804__auto__){
var seq__11815__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11815__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11815__$1);
var G__12676 = cljs.core.chunk_rest(seq__11815__$1);
var G__12677 = c__5525__auto__;
var G__12678 = cljs.core.count(c__5525__auto__);
var G__12679 = (0);
seq__11815 = G__12676;
chunk__11816 = G__12677;
count__11817 = G__12678;
i__11818 = G__12679;
continue;
} else {
var vec__11835 = cljs.core.first(seq__11815__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11835,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11835,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12681 = cljs.core.next(seq__11815__$1);
var G__12682 = null;
var G__12683 = (0);
var G__12684 = (0);
seq__11815 = G__12681;
chunk__11816 = G__12682;
count__11817 = G__12683;
i__11818 = G__12684;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__11849 = cljs.core.seq(styles);
var chunk__11851 = null;
var count__11852 = (0);
var i__11853 = (0);
while(true){
if((i__11853 < count__11852)){
var vec__11876 = chunk__11851.cljs$core$IIndexed$_nth$arity$2(null, i__11853);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11876,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11876,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12688 = seq__11849;
var G__12689 = chunk__11851;
var G__12690 = count__11852;
var G__12691 = (i__11853 + (1));
seq__11849 = G__12688;
chunk__11851 = G__12689;
count__11852 = G__12690;
i__11853 = G__12691;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11849);
if(temp__5804__auto__){
var seq__11849__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11849__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11849__$1);
var G__12694 = cljs.core.chunk_rest(seq__11849__$1);
var G__12695 = c__5525__auto__;
var G__12696 = cljs.core.count(c__5525__auto__);
var G__12697 = (0);
seq__11849 = G__12694;
chunk__11851 = G__12695;
count__11852 = G__12696;
i__11853 = G__12697;
continue;
} else {
var vec__11884 = cljs.core.first(seq__11849__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11884,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11884,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12700 = cljs.core.next(seq__11849__$1);
var G__12701 = null;
var G__12702 = (0);
var G__12703 = (0);
seq__11849 = G__12700;
chunk__11851 = G__12701;
count__11852 = G__12702;
i__11853 = G__12703;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__11904_12706 = key;
var G__11904_12707__$1 = (((G__11904_12706 instanceof cljs.core.Keyword))?G__11904_12706.fqn:null);
switch (G__11904_12707__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_12712 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_12712,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_12712,"aria-");
}
})())){
el.setAttribute(ks_12712,value);
} else {
(el[ks_12712] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__11912){
var map__11913 = p__11912;
var map__11913__$1 = cljs.core.__destructure_map(map__11913);
var props = map__11913__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11913__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__11914 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11914,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11914,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11914,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__11917 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__11917,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__11917;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__11919 = arguments.length;
switch (G__11919) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__11923){
var vec__11924 = p__11923;
var seq__11925 = cljs.core.seq(vec__11924);
var first__11926 = cljs.core.first(seq__11925);
var seq__11925__$1 = cljs.core.next(seq__11925);
var nn = first__11926;
var first__11926__$1 = cljs.core.first(seq__11925__$1);
var seq__11925__$2 = cljs.core.next(seq__11925__$1);
var np = first__11926__$1;
var nc = seq__11925__$2;
var node = vec__11924;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__11927 = nn;
var G__11928 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__11927,G__11928) : create_fn.call(null, G__11927,G__11928));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__11929 = nn;
var G__11930 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__11929,G__11930) : create_fn.call(null, G__11929,G__11930));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__11936 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11936,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11936,(1),null);
var seq__11939_12730 = cljs.core.seq(node_children);
var chunk__11940_12731 = null;
var count__11941_12732 = (0);
var i__11942_12733 = (0);
while(true){
if((i__11942_12733 < count__11941_12732)){
var child_struct_12735 = chunk__11940_12731.cljs$core$IIndexed$_nth$arity$2(null, i__11942_12733);
var children_12737 = shadow.dom.dom_node(child_struct_12735);
if(cljs.core.seq_QMARK_(children_12737)){
var seq__11980_12738 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12737));
var chunk__11982_12739 = null;
var count__11983_12740 = (0);
var i__11984_12741 = (0);
while(true){
if((i__11984_12741 < count__11983_12740)){
var child_12742 = chunk__11982_12739.cljs$core$IIndexed$_nth$arity$2(null, i__11984_12741);
if(cljs.core.truth_(child_12742)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12742);


var G__12743 = seq__11980_12738;
var G__12744 = chunk__11982_12739;
var G__12745 = count__11983_12740;
var G__12746 = (i__11984_12741 + (1));
seq__11980_12738 = G__12743;
chunk__11982_12739 = G__12744;
count__11983_12740 = G__12745;
i__11984_12741 = G__12746;
continue;
} else {
var G__12747 = seq__11980_12738;
var G__12748 = chunk__11982_12739;
var G__12749 = count__11983_12740;
var G__12750 = (i__11984_12741 + (1));
seq__11980_12738 = G__12747;
chunk__11982_12739 = G__12748;
count__11983_12740 = G__12749;
i__11984_12741 = G__12750;
continue;
}
} else {
var temp__5804__auto___12751 = cljs.core.seq(seq__11980_12738);
if(temp__5804__auto___12751){
var seq__11980_12752__$1 = temp__5804__auto___12751;
if(cljs.core.chunked_seq_QMARK_(seq__11980_12752__$1)){
var c__5525__auto___12753 = cljs.core.chunk_first(seq__11980_12752__$1);
var G__12754 = cljs.core.chunk_rest(seq__11980_12752__$1);
var G__12755 = c__5525__auto___12753;
var G__12756 = cljs.core.count(c__5525__auto___12753);
var G__12757 = (0);
seq__11980_12738 = G__12754;
chunk__11982_12739 = G__12755;
count__11983_12740 = G__12756;
i__11984_12741 = G__12757;
continue;
} else {
var child_12758 = cljs.core.first(seq__11980_12752__$1);
if(cljs.core.truth_(child_12758)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12758);


var G__12759 = cljs.core.next(seq__11980_12752__$1);
var G__12760 = null;
var G__12761 = (0);
var G__12762 = (0);
seq__11980_12738 = G__12759;
chunk__11982_12739 = G__12760;
count__11983_12740 = G__12761;
i__11984_12741 = G__12762;
continue;
} else {
var G__12763 = cljs.core.next(seq__11980_12752__$1);
var G__12764 = null;
var G__12765 = (0);
var G__12766 = (0);
seq__11980_12738 = G__12763;
chunk__11982_12739 = G__12764;
count__11983_12740 = G__12765;
i__11984_12741 = G__12766;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12737);
}


var G__12767 = seq__11939_12730;
var G__12768 = chunk__11940_12731;
var G__12769 = count__11941_12732;
var G__12770 = (i__11942_12733 + (1));
seq__11939_12730 = G__12767;
chunk__11940_12731 = G__12768;
count__11941_12732 = G__12769;
i__11942_12733 = G__12770;
continue;
} else {
var temp__5804__auto___12771 = cljs.core.seq(seq__11939_12730);
if(temp__5804__auto___12771){
var seq__11939_12772__$1 = temp__5804__auto___12771;
if(cljs.core.chunked_seq_QMARK_(seq__11939_12772__$1)){
var c__5525__auto___12773 = cljs.core.chunk_first(seq__11939_12772__$1);
var G__12774 = cljs.core.chunk_rest(seq__11939_12772__$1);
var G__12775 = c__5525__auto___12773;
var G__12776 = cljs.core.count(c__5525__auto___12773);
var G__12777 = (0);
seq__11939_12730 = G__12774;
chunk__11940_12731 = G__12775;
count__11941_12732 = G__12776;
i__11942_12733 = G__12777;
continue;
} else {
var child_struct_12778 = cljs.core.first(seq__11939_12772__$1);
var children_12779 = shadow.dom.dom_node(child_struct_12778);
if(cljs.core.seq_QMARK_(children_12779)){
var seq__11996_12780 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12779));
var chunk__11998_12781 = null;
var count__11999_12782 = (0);
var i__12000_12783 = (0);
while(true){
if((i__12000_12783 < count__11999_12782)){
var child_12784 = chunk__11998_12781.cljs$core$IIndexed$_nth$arity$2(null, i__12000_12783);
if(cljs.core.truth_(child_12784)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12784);


var G__12785 = seq__11996_12780;
var G__12786 = chunk__11998_12781;
var G__12787 = count__11999_12782;
var G__12788 = (i__12000_12783 + (1));
seq__11996_12780 = G__12785;
chunk__11998_12781 = G__12786;
count__11999_12782 = G__12787;
i__12000_12783 = G__12788;
continue;
} else {
var G__12789 = seq__11996_12780;
var G__12790 = chunk__11998_12781;
var G__12791 = count__11999_12782;
var G__12792 = (i__12000_12783 + (1));
seq__11996_12780 = G__12789;
chunk__11998_12781 = G__12790;
count__11999_12782 = G__12791;
i__12000_12783 = G__12792;
continue;
}
} else {
var temp__5804__auto___12793__$1 = cljs.core.seq(seq__11996_12780);
if(temp__5804__auto___12793__$1){
var seq__11996_12794__$1 = temp__5804__auto___12793__$1;
if(cljs.core.chunked_seq_QMARK_(seq__11996_12794__$1)){
var c__5525__auto___12795 = cljs.core.chunk_first(seq__11996_12794__$1);
var G__12796 = cljs.core.chunk_rest(seq__11996_12794__$1);
var G__12797 = c__5525__auto___12795;
var G__12798 = cljs.core.count(c__5525__auto___12795);
var G__12799 = (0);
seq__11996_12780 = G__12796;
chunk__11998_12781 = G__12797;
count__11999_12782 = G__12798;
i__12000_12783 = G__12799;
continue;
} else {
var child_12800 = cljs.core.first(seq__11996_12794__$1);
if(cljs.core.truth_(child_12800)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12800);


var G__12801 = cljs.core.next(seq__11996_12794__$1);
var G__12802 = null;
var G__12803 = (0);
var G__12804 = (0);
seq__11996_12780 = G__12801;
chunk__11998_12781 = G__12802;
count__11999_12782 = G__12803;
i__12000_12783 = G__12804;
continue;
} else {
var G__12805 = cljs.core.next(seq__11996_12794__$1);
var G__12806 = null;
var G__12807 = (0);
var G__12808 = (0);
seq__11996_12780 = G__12805;
chunk__11998_12781 = G__12806;
count__11999_12782 = G__12807;
i__12000_12783 = G__12808;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12779);
}


var G__12809 = cljs.core.next(seq__11939_12772__$1);
var G__12810 = null;
var G__12811 = (0);
var G__12812 = (0);
seq__11939_12730 = G__12809;
chunk__11940_12731 = G__12810;
count__11941_12732 = G__12811;
i__11942_12733 = G__12812;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__12017 = cljs.core.seq(node);
var chunk__12018 = null;
var count__12019 = (0);
var i__12020 = (0);
while(true){
if((i__12020 < count__12019)){
var n = chunk__12018.cljs$core$IIndexed$_nth$arity$2(null, i__12020);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__12815 = seq__12017;
var G__12816 = chunk__12018;
var G__12817 = count__12019;
var G__12818 = (i__12020 + (1));
seq__12017 = G__12815;
chunk__12018 = G__12816;
count__12019 = G__12817;
i__12020 = G__12818;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12017);
if(temp__5804__auto__){
var seq__12017__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12017__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12017__$1);
var G__12824 = cljs.core.chunk_rest(seq__12017__$1);
var G__12825 = c__5525__auto__;
var G__12826 = cljs.core.count(c__5525__auto__);
var G__12827 = (0);
seq__12017 = G__12824;
chunk__12018 = G__12825;
count__12019 = G__12826;
i__12020 = G__12827;
continue;
} else {
var n = cljs.core.first(seq__12017__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__12831 = cljs.core.next(seq__12017__$1);
var G__12832 = null;
var G__12833 = (0);
var G__12834 = (0);
seq__12017 = G__12831;
chunk__12018 = G__12832;
count__12019 = G__12833;
i__12020 = G__12834;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__12029 = arguments.length;
switch (G__12029) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__12033 = arguments.length;
switch (G__12033) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__12041 = arguments.length;
switch (G__12041) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12853 = arguments.length;
var i__5727__auto___12854 = (0);
while(true){
if((i__5727__auto___12854 < len__5726__auto___12853)){
args__5732__auto__.push((arguments[i__5727__auto___12854]));

var G__12855 = (i__5727__auto___12854 + (1));
i__5727__auto___12854 = G__12855;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__12049_12859 = cljs.core.seq(nodes);
var chunk__12050_12860 = null;
var count__12051_12861 = (0);
var i__12052_12862 = (0);
while(true){
if((i__12052_12862 < count__12051_12861)){
var node_12864 = chunk__12050_12860.cljs$core$IIndexed$_nth$arity$2(null, i__12052_12862);
fragment.appendChild(shadow.dom._to_dom(node_12864));


var G__12865 = seq__12049_12859;
var G__12866 = chunk__12050_12860;
var G__12867 = count__12051_12861;
var G__12868 = (i__12052_12862 + (1));
seq__12049_12859 = G__12865;
chunk__12050_12860 = G__12866;
count__12051_12861 = G__12867;
i__12052_12862 = G__12868;
continue;
} else {
var temp__5804__auto___12869 = cljs.core.seq(seq__12049_12859);
if(temp__5804__auto___12869){
var seq__12049_12870__$1 = temp__5804__auto___12869;
if(cljs.core.chunked_seq_QMARK_(seq__12049_12870__$1)){
var c__5525__auto___12871 = cljs.core.chunk_first(seq__12049_12870__$1);
var G__12872 = cljs.core.chunk_rest(seq__12049_12870__$1);
var G__12873 = c__5525__auto___12871;
var G__12874 = cljs.core.count(c__5525__auto___12871);
var G__12875 = (0);
seq__12049_12859 = G__12872;
chunk__12050_12860 = G__12873;
count__12051_12861 = G__12874;
i__12052_12862 = G__12875;
continue;
} else {
var node_12876 = cljs.core.first(seq__12049_12870__$1);
fragment.appendChild(shadow.dom._to_dom(node_12876));


var G__12877 = cljs.core.next(seq__12049_12870__$1);
var G__12878 = null;
var G__12879 = (0);
var G__12880 = (0);
seq__12049_12859 = G__12877;
chunk__12050_12860 = G__12878;
count__12051_12861 = G__12879;
i__12052_12862 = G__12880;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq12042){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12042));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__12078_12884 = cljs.core.seq(scripts);
var chunk__12079_12885 = null;
var count__12080_12886 = (0);
var i__12081_12887 = (0);
while(true){
if((i__12081_12887 < count__12080_12886)){
var vec__12089_12888 = chunk__12079_12885.cljs$core$IIndexed$_nth$arity$2(null, i__12081_12887);
var script_tag_12889 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12089_12888,(0),null);
var script_body_12890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12089_12888,(1),null);
eval(script_body_12890);


var G__12891 = seq__12078_12884;
var G__12892 = chunk__12079_12885;
var G__12893 = count__12080_12886;
var G__12894 = (i__12081_12887 + (1));
seq__12078_12884 = G__12891;
chunk__12079_12885 = G__12892;
count__12080_12886 = G__12893;
i__12081_12887 = G__12894;
continue;
} else {
var temp__5804__auto___12895 = cljs.core.seq(seq__12078_12884);
if(temp__5804__auto___12895){
var seq__12078_12896__$1 = temp__5804__auto___12895;
if(cljs.core.chunked_seq_QMARK_(seq__12078_12896__$1)){
var c__5525__auto___12897 = cljs.core.chunk_first(seq__12078_12896__$1);
var G__12898 = cljs.core.chunk_rest(seq__12078_12896__$1);
var G__12899 = c__5525__auto___12897;
var G__12900 = cljs.core.count(c__5525__auto___12897);
var G__12901 = (0);
seq__12078_12884 = G__12898;
chunk__12079_12885 = G__12899;
count__12080_12886 = G__12900;
i__12081_12887 = G__12901;
continue;
} else {
var vec__12092_12902 = cljs.core.first(seq__12078_12896__$1);
var script_tag_12903 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12092_12902,(0),null);
var script_body_12904 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12092_12902,(1),null);
eval(script_body_12904);


var G__12906 = cljs.core.next(seq__12078_12896__$1);
var G__12907 = null;
var G__12908 = (0);
var G__12909 = (0);
seq__12078_12884 = G__12906;
chunk__12079_12885 = G__12907;
count__12080_12886 = G__12908;
i__12081_12887 = G__12909;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__12097){
var vec__12099 = p__12097;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12099,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12099,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__12123 = arguments.length;
switch (G__12123) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__12133 = cljs.core.seq(style_keys);
var chunk__12134 = null;
var count__12135 = (0);
var i__12136 = (0);
while(true){
if((i__12136 < count__12135)){
var it = chunk__12134.cljs$core$IIndexed$_nth$arity$2(null, i__12136);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12939 = seq__12133;
var G__12940 = chunk__12134;
var G__12941 = count__12135;
var G__12942 = (i__12136 + (1));
seq__12133 = G__12939;
chunk__12134 = G__12940;
count__12135 = G__12941;
i__12136 = G__12942;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12133);
if(temp__5804__auto__){
var seq__12133__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12133__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12133__$1);
var G__12943 = cljs.core.chunk_rest(seq__12133__$1);
var G__12944 = c__5525__auto__;
var G__12945 = cljs.core.count(c__5525__auto__);
var G__12946 = (0);
seq__12133 = G__12943;
chunk__12134 = G__12944;
count__12135 = G__12945;
i__12136 = G__12946;
continue;
} else {
var it = cljs.core.first(seq__12133__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12947 = cljs.core.next(seq__12133__$1);
var G__12948 = null;
var G__12949 = (0);
var G__12950 = (0);
seq__12133 = G__12947;
chunk__12134 = G__12948;
count__12135 = G__12949;
i__12136 = G__12950;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12152,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12183 = k12152;
var G__12183__$1 = (((G__12183 instanceof cljs.core.Keyword))?G__12183.fqn:null);
switch (G__12183__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12152,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12188){
var vec__12191 = p__12188;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12191,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12191,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12151){
var self__ = this;
var G__12151__$1 = this;
return (new cljs.core.RecordIter((0),G__12151__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12153,other12154){
var self__ = this;
var this12153__$1 = this;
return (((!((other12154 == null)))) && ((((this12153__$1.constructor === other12154.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12153__$1.x,other12154.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12153__$1.y,other12154.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12153__$1.__extmap,other12154.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12152){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12269 = k12152;
var G__12269__$1 = (((G__12269 instanceof cljs.core.Keyword))?G__12269.fqn:null);
switch (G__12269__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12152);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12151){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12272 = cljs.core.keyword_identical_QMARK_;
var expr__12273 = k__5309__auto__;
if(cljs.core.truth_((pred__12272.cljs$core$IFn$_invoke$arity$2 ? pred__12272.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__12273) : pred__12272.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__12273)))){
return (new shadow.dom.Coordinate(G__12151,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12272.cljs$core$IFn$_invoke$arity$2 ? pred__12272.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__12273) : pred__12272.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__12273)))){
return (new shadow.dom.Coordinate(self__.x,G__12151,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12151),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12151){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__12151,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__12169){
var extmap__5342__auto__ = (function (){var G__12293 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12169,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__12169)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12293);
} else {
return G__12293;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__12169),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__12169),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12321,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12331 = k12321;
var G__12331__$1 = (((G__12331 instanceof cljs.core.Keyword))?G__12331.fqn:null);
switch (G__12331__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12321,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12333){
var vec__12334 = p__12333;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12334,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12334,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12320){
var self__ = this;
var G__12320__$1 = this;
return (new cljs.core.RecordIter((0),G__12320__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12322,other12323){
var self__ = this;
var this12322__$1 = this;
return (((!((other12323 == null)))) && ((((this12322__$1.constructor === other12323.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12322__$1.w,other12323.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12322__$1.h,other12323.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12322__$1.__extmap,other12323.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12321){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12364 = k12321;
var G__12364__$1 = (((G__12364 instanceof cljs.core.Keyword))?G__12364.fqn:null);
switch (G__12364__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12321);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12320){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12369 = cljs.core.keyword_identical_QMARK_;
var expr__12370 = k__5309__auto__;
if(cljs.core.truth_((pred__12369.cljs$core$IFn$_invoke$arity$2 ? pred__12369.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__12370) : pred__12369.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__12370)))){
return (new shadow.dom.Size(G__12320,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12369.cljs$core$IFn$_invoke$arity$2 ? pred__12369.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__12370) : pred__12369.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__12370)))){
return (new shadow.dom.Size(self__.w,G__12320,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12320),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12320){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__12320,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__12328){
var extmap__5342__auto__ = (function (){var G__12390 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12328,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__12328)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12390);
} else {
return G__12390;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__12328),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__12328),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__13036 = (i + (1));
var G__13037 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__13036;
ret = G__13037;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12423){
var vec__12424 = p__12423;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12424,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12424,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__12428 = arguments.length;
switch (G__12428) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__13061 = ps;
var G__13062 = (i + (1));
el__$1 = G__13061;
i = G__13062;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null, parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__12458 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12458,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12458,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12458,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__12464_13069 = cljs.core.seq(props);
var chunk__12465_13070 = null;
var count__12466_13071 = (0);
var i__12467_13072 = (0);
while(true){
if((i__12467_13072 < count__12466_13071)){
var vec__12478_13074 = chunk__12465_13070.cljs$core$IIndexed$_nth$arity$2(null, i__12467_13072);
var k_13075 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12478_13074,(0),null);
var v_13076 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12478_13074,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_13075);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_13075),v_13076);


var G__13079 = seq__12464_13069;
var G__13080 = chunk__12465_13070;
var G__13081 = count__12466_13071;
var G__13082 = (i__12467_13072 + (1));
seq__12464_13069 = G__13079;
chunk__12465_13070 = G__13080;
count__12466_13071 = G__13081;
i__12467_13072 = G__13082;
continue;
} else {
var temp__5804__auto___13083 = cljs.core.seq(seq__12464_13069);
if(temp__5804__auto___13083){
var seq__12464_13084__$1 = temp__5804__auto___13083;
if(cljs.core.chunked_seq_QMARK_(seq__12464_13084__$1)){
var c__5525__auto___13085 = cljs.core.chunk_first(seq__12464_13084__$1);
var G__13086 = cljs.core.chunk_rest(seq__12464_13084__$1);
var G__13087 = c__5525__auto___13085;
var G__13088 = cljs.core.count(c__5525__auto___13085);
var G__13089 = (0);
seq__12464_13069 = G__13086;
chunk__12465_13070 = G__13087;
count__12466_13071 = G__13088;
i__12467_13072 = G__13089;
continue;
} else {
var vec__12482_13093 = cljs.core.first(seq__12464_13084__$1);
var k_13094 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12482_13093,(0),null);
var v_13095 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12482_13093,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_13094);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_13094),v_13095);


var G__13098 = cljs.core.next(seq__12464_13084__$1);
var G__13099 = null;
var G__13100 = (0);
var G__13101 = (0);
seq__12464_13069 = G__13098;
chunk__12465_13070 = G__13099;
count__12466_13071 = G__13100;
i__12467_13072 = G__13101;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null, );
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__12494 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12494,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12494,(1),null);
var seq__12497_13102 = cljs.core.seq(node_children);
var chunk__12499_13103 = null;
var count__12500_13104 = (0);
var i__12501_13105 = (0);
while(true){
if((i__12501_13105 < count__12500_13104)){
var child_struct_13107 = chunk__12499_13103.cljs$core$IIndexed$_nth$arity$2(null, i__12501_13105);
if((!((child_struct_13107 == null)))){
if(typeof child_struct_13107 === 'string'){
var text_13108 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13108),child_struct_13107].join(''));
} else {
var children_13110 = shadow.dom.svg_node(child_struct_13107);
if(cljs.core.seq_QMARK_(children_13110)){
var seq__12556_13111 = cljs.core.seq(children_13110);
var chunk__12558_13112 = null;
var count__12559_13113 = (0);
var i__12560_13114 = (0);
while(true){
if((i__12560_13114 < count__12559_13113)){
var child_13115 = chunk__12558_13112.cljs$core$IIndexed$_nth$arity$2(null, i__12560_13114);
if(cljs.core.truth_(child_13115)){
node.appendChild(child_13115);


var G__13116 = seq__12556_13111;
var G__13117 = chunk__12558_13112;
var G__13118 = count__12559_13113;
var G__13119 = (i__12560_13114 + (1));
seq__12556_13111 = G__13116;
chunk__12558_13112 = G__13117;
count__12559_13113 = G__13118;
i__12560_13114 = G__13119;
continue;
} else {
var G__13120 = seq__12556_13111;
var G__13121 = chunk__12558_13112;
var G__13122 = count__12559_13113;
var G__13123 = (i__12560_13114 + (1));
seq__12556_13111 = G__13120;
chunk__12558_13112 = G__13121;
count__12559_13113 = G__13122;
i__12560_13114 = G__13123;
continue;
}
} else {
var temp__5804__auto___13124 = cljs.core.seq(seq__12556_13111);
if(temp__5804__auto___13124){
var seq__12556_13125__$1 = temp__5804__auto___13124;
if(cljs.core.chunked_seq_QMARK_(seq__12556_13125__$1)){
var c__5525__auto___13126 = cljs.core.chunk_first(seq__12556_13125__$1);
var G__13127 = cljs.core.chunk_rest(seq__12556_13125__$1);
var G__13128 = c__5525__auto___13126;
var G__13129 = cljs.core.count(c__5525__auto___13126);
var G__13130 = (0);
seq__12556_13111 = G__13127;
chunk__12558_13112 = G__13128;
count__12559_13113 = G__13129;
i__12560_13114 = G__13130;
continue;
} else {
var child_13131 = cljs.core.first(seq__12556_13125__$1);
if(cljs.core.truth_(child_13131)){
node.appendChild(child_13131);


var G__13132 = cljs.core.next(seq__12556_13125__$1);
var G__13133 = null;
var G__13134 = (0);
var G__13135 = (0);
seq__12556_13111 = G__13132;
chunk__12558_13112 = G__13133;
count__12559_13113 = G__13134;
i__12560_13114 = G__13135;
continue;
} else {
var G__13138 = cljs.core.next(seq__12556_13125__$1);
var G__13139 = null;
var G__13140 = (0);
var G__13141 = (0);
seq__12556_13111 = G__13138;
chunk__12558_13112 = G__13139;
count__12559_13113 = G__13140;
i__12560_13114 = G__13141;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13110);
}
}


var G__13142 = seq__12497_13102;
var G__13143 = chunk__12499_13103;
var G__13144 = count__12500_13104;
var G__13145 = (i__12501_13105 + (1));
seq__12497_13102 = G__13142;
chunk__12499_13103 = G__13143;
count__12500_13104 = G__13144;
i__12501_13105 = G__13145;
continue;
} else {
var G__13146 = seq__12497_13102;
var G__13147 = chunk__12499_13103;
var G__13148 = count__12500_13104;
var G__13149 = (i__12501_13105 + (1));
seq__12497_13102 = G__13146;
chunk__12499_13103 = G__13147;
count__12500_13104 = G__13148;
i__12501_13105 = G__13149;
continue;
}
} else {
var temp__5804__auto___13150 = cljs.core.seq(seq__12497_13102);
if(temp__5804__auto___13150){
var seq__12497_13151__$1 = temp__5804__auto___13150;
if(cljs.core.chunked_seq_QMARK_(seq__12497_13151__$1)){
var c__5525__auto___13152 = cljs.core.chunk_first(seq__12497_13151__$1);
var G__13153 = cljs.core.chunk_rest(seq__12497_13151__$1);
var G__13154 = c__5525__auto___13152;
var G__13155 = cljs.core.count(c__5525__auto___13152);
var G__13156 = (0);
seq__12497_13102 = G__13153;
chunk__12499_13103 = G__13154;
count__12500_13104 = G__13155;
i__12501_13105 = G__13156;
continue;
} else {
var child_struct_13157 = cljs.core.first(seq__12497_13151__$1);
if((!((child_struct_13157 == null)))){
if(typeof child_struct_13157 === 'string'){
var text_13158 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13158),child_struct_13157].join(''));
} else {
var children_13159 = shadow.dom.svg_node(child_struct_13157);
if(cljs.core.seq_QMARK_(children_13159)){
var seq__12572_13163 = cljs.core.seq(children_13159);
var chunk__12574_13164 = null;
var count__12575_13165 = (0);
var i__12576_13166 = (0);
while(true){
if((i__12576_13166 < count__12575_13165)){
var child_13167 = chunk__12574_13164.cljs$core$IIndexed$_nth$arity$2(null, i__12576_13166);
if(cljs.core.truth_(child_13167)){
node.appendChild(child_13167);


var G__13170 = seq__12572_13163;
var G__13171 = chunk__12574_13164;
var G__13172 = count__12575_13165;
var G__13173 = (i__12576_13166 + (1));
seq__12572_13163 = G__13170;
chunk__12574_13164 = G__13171;
count__12575_13165 = G__13172;
i__12576_13166 = G__13173;
continue;
} else {
var G__13175 = seq__12572_13163;
var G__13176 = chunk__12574_13164;
var G__13177 = count__12575_13165;
var G__13178 = (i__12576_13166 + (1));
seq__12572_13163 = G__13175;
chunk__12574_13164 = G__13176;
count__12575_13165 = G__13177;
i__12576_13166 = G__13178;
continue;
}
} else {
var temp__5804__auto___13179__$1 = cljs.core.seq(seq__12572_13163);
if(temp__5804__auto___13179__$1){
var seq__12572_13180__$1 = temp__5804__auto___13179__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12572_13180__$1)){
var c__5525__auto___13182 = cljs.core.chunk_first(seq__12572_13180__$1);
var G__13183 = cljs.core.chunk_rest(seq__12572_13180__$1);
var G__13184 = c__5525__auto___13182;
var G__13185 = cljs.core.count(c__5525__auto___13182);
var G__13186 = (0);
seq__12572_13163 = G__13183;
chunk__12574_13164 = G__13184;
count__12575_13165 = G__13185;
i__12576_13166 = G__13186;
continue;
} else {
var child_13188 = cljs.core.first(seq__12572_13180__$1);
if(cljs.core.truth_(child_13188)){
node.appendChild(child_13188);


var G__13190 = cljs.core.next(seq__12572_13180__$1);
var G__13191 = null;
var G__13192 = (0);
var G__13193 = (0);
seq__12572_13163 = G__13190;
chunk__12574_13164 = G__13191;
count__12575_13165 = G__13192;
i__12576_13166 = G__13193;
continue;
} else {
var G__13195 = cljs.core.next(seq__12572_13180__$1);
var G__13196 = null;
var G__13197 = (0);
var G__13198 = (0);
seq__12572_13163 = G__13195;
chunk__12574_13164 = G__13196;
count__12575_13165 = G__13197;
i__12576_13166 = G__13198;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13159);
}
}


var G__13200 = cljs.core.next(seq__12497_13151__$1);
var G__13201 = null;
var G__13202 = (0);
var G__13203 = (0);
seq__12497_13102 = G__13200;
chunk__12499_13103 = G__13201;
count__12500_13104 = G__13202;
i__12501_13105 = G__13203;
continue;
} else {
var G__13204 = cljs.core.next(seq__12497_13151__$1);
var G__13205 = null;
var G__13206 = (0);
var G__13207 = (0);
seq__12497_13102 = G__13204;
chunk__12499_13103 = G__13205;
count__12500_13104 = G__13206;
i__12501_13105 = G__13207;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___13221 = arguments.length;
var i__5727__auto___13223 = (0);
while(true){
if((i__5727__auto___13223 < len__5726__auto___13221)){
args__5732__auto__.push((arguments[i__5727__auto___13223]));

var G__13224 = (i__5727__auto___13223 + (1));
i__5727__auto___13223 = G__13224;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq12605){
var G__12606 = cljs.core.first(seq12605);
var seq12605__$1 = cljs.core.next(seq12605);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12606,seq12605__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
