goog.provide('synchrono.client.prosemirror_plugin');
var module$node_modules$prosemirror_state$dist$index_cjs=shadow.js.require("module$node_modules$prosemirror_state$dist$index_cjs", {});
var module$node_modules$prosemirror_view$dist$index_cjs=shadow.js.require("module$node_modules$prosemirror_view$dist$index_cjs", {});

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
synchrono.client.prosemirror_plugin.t_synchrono$client$prosemirror_plugin16987 = (function (editor_view,autosuggest_container,meta16988){
this.editor_view = editor_view;
this.autosuggest_container = autosuggest_container;
this.meta16988 = meta16988;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(synchrono.client.prosemirror_plugin.t_synchrono$client$prosemirror_plugin16987.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16989,meta16988__$1){
var self__ = this;
var _16989__$1 = this;
return (new synchrono.client.prosemirror_plugin.t_synchrono$client$prosemirror_plugin16987(self__.editor_view,self__.autosuggest_container,meta16988__$1));
}));

(synchrono.client.prosemirror_plugin.t_synchrono$client$prosemirror_plugin16987.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16989){
var self__ = this;
var _16989__$1 = this;
return self__.meta16988;
}));

(synchrono.client.prosemirror_plugin.t_synchrono$client$prosemirror_plugin16987.prototype.update = (function (view,last_state){
var self__ = this;
var _ = this;
var map__16990 = view.state.selection;
var map__16990__$1 = cljs.core.__destructure_map(map__16990);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16990__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16990__$1,new cljs.core.Keyword(null,"to","to",192099007));
var doc = view.state.doc;
return doc.nodesBetween(from,to,(function (node,pos){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node.type.name,"query")){
var dom_node = view.nodeDOM(pos);
if(cljs.core.truth_((function (){var and__5000__auto__ = dom_node;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.deref(self__.autosuggest_container));
} else {
return and__5000__auto__;
}
})())){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-autosuggest-dropdown","show-autosuggest-dropdown",854951869),dom_node], null));
} else {
return null;
}
} else {
return null;
}
}));
}));

(synchrono.client.prosemirror_plugin.t_synchrono$client$prosemirror_plugin16987.prototype.destroy = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(cljs.core.deref(self__.autosuggest_container))){
var G__16991_17002 = cljs.core.deref(self__.autosuggest_container);
(reagent.core.unmount_component_at_node.cljs$core$IFn$_invoke$arity$1 ? reagent.core.unmount_component_at_node.cljs$core$IFn$_invoke$arity$1(G__16991_17002) : reagent.core.unmount_component_at_node.call(null, G__16991_17002));

return cljs.core.reset_BANG_(self__.autosuggest_container,null);
} else {
return null;
}
}));

(synchrono.client.prosemirror_plugin.t_synchrono$client$prosemirror_plugin16987.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"editor-view","editor-view",-137737078,null),new cljs.core.Symbol(null,"autosuggest-container","autosuggest-container",1719512800,null),new cljs.core.Symbol(null,"meta16988","meta16988",1905632198,null)], null);
}));

(synchrono.client.prosemirror_plugin.t_synchrono$client$prosemirror_plugin16987.cljs$lang$type = true);

(synchrono.client.prosemirror_plugin.t_synchrono$client$prosemirror_plugin16987.cljs$lang$ctorStr = "synchrono.client.prosemirror-plugin/t_synchrono$client$prosemirror_plugin16987");

(synchrono.client.prosemirror_plugin.t_synchrono$client$prosemirror_plugin16987.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"synchrono.client.prosemirror-plugin/t_synchrono$client$prosemirror_plugin16987");
}));

/**
 * Positional factory function for synchrono.client.prosemirror-plugin/t_synchrono$client$prosemirror_plugin16987.
 */
synchrono.client.prosemirror_plugin.__GT_t_synchrono$client$prosemirror_plugin16987 = (function synchrono$client$prosemirror_plugin$__GT_t_synchrono$client$prosemirror_plugin16987(editor_view,autosuggest_container,meta16988){
return (new synchrono.client.prosemirror_plugin.t_synchrono$client$prosemirror_plugin16987(editor_view,autosuggest_container,meta16988));
});


synchrono.client.prosemirror_plugin.make_prosemirror_plugin = (function synchrono$client$prosemirror_plugin$make_prosemirror_plugin(){
return (new module$node_modules$prosemirror_state$dist$index_cjs.Plugin(({"view": (function (editor_view){
var autosuggest_container = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (new synchrono.client.prosemirror_plugin.t_synchrono$client$prosemirror_plugin16987(editor_view,autosuggest_container,cljs.core.PersistentArrayMap.EMPTY));
})})));
});
synchrono.client.prosemirror_plugin.autosuggest_dropdown = (function synchrono$client$prosemirror_plugin$autosuggest_dropdown(){
var suggestions = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e","p","s","t"], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.autosuggest-dropdown","div.autosuggest-dropdown",-132558455),(function (){var iter__5480__auto__ = (function synchrono$client$prosemirror_plugin$autosuggest_dropdown_$_iter__16992(s__16993){
return (new cljs.core.LazySeq(null,(function (){
var s__16993__$1 = s__16993;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__16993__$1);
if(temp__5804__auto__){
var s__16993__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16993__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__16993__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__16995 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__16994 = (0);
while(true){
if((i__16994 < size__5479__auto__)){
var option = cljs.core._nth(c__5478__auto__,i__16994);
cljs.core.chunk_append(b__16995,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.autosuggest-item","div.autosuggest-item",-212293352),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__16994,option,c__5478__auto__,size__5479__auto__,b__16995,s__16993__$2,temp__5804__auto__,suggestions){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-prefix","select-prefix",-2125298112),option], null));
});})(i__16994,option,c__5478__auto__,size__5479__auto__,b__16995,s__16993__$2,temp__5804__auto__,suggestions))
], null),option], null));

var G__17003 = (i__16994 + (1));
i__16994 = G__17003;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16995),synchrono$client$prosemirror_plugin$autosuggest_dropdown_$_iter__16992(cljs.core.chunk_rest(s__16993__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16995),null);
}
} else {
var option = cljs.core.first(s__16993__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.autosuggest-item","div.autosuggest-item",-212293352),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (option,s__16993__$2,temp__5804__auto__,suggestions){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-prefix","select-prefix",-2125298112),option], null));
});})(option,s__16993__$2,temp__5804__auto__,suggestions))
], null),option], null),synchrono$client$prosemirror_plugin$autosuggest_dropdown_$_iter__16992(cljs.core.rest(s__16993__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(suggestions);
})()], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"show-autosuggest-dropdown","show-autosuggest-dropdown",854951869),(function (p__16996,p__16997){
var map__16998 = p__16996;
var map__16998__$1 = cljs.core.__destructure_map(map__16998);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16998__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__16999 = p__16997;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16999,(0),null);
var dom_node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16999,(1),null);
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [synchrono.client.prosemirror_plugin.autosuggest_dropdown], null),dom_node);
}));

//# sourceMappingURL=synchrono.client.prosemirror_plugin.js.map
