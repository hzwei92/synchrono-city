goog.provide('synchrono.client.composer');
synchrono.client.composer.current_time = (function synchrono$client$composer$current_time(){
var time = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((new Date()).toLocaleString());
setInterval((function (){
return cljs.core.reset_BANG_(time,(new Date()).toLocaleString());
}),(1000));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.timestamp","div.timestamp",-685737838),["t ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(time))].join('')], null);
});
synchrono.client.composer.composer = (function synchrono$client$composer$composer(){
var geolocation = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geolocation","geolocation",232447107)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.composer","div.composer",-1627323508),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.composer-body","div.composer-body",843265055),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [synchrono.client.editor.editor], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.composer-controls","div.composer-controls",1298316362),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.nostr-event-button","button.nostr-event-button",1967092380),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"publish","publish",-1178026850)], null));
})], null),"Publish"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.kind","div.kind",1341564141),"k 1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.geolocation","div.geolocation",-48459856),(cljs.core.truth_(geolocation)?["s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"geohash","geohash",-76356472).cljs$core$IFn$_invoke$arity$1(geolocation))].join(''):null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [synchrono.client.composer.current_time], null)], null)], null);
});
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"geolocation","geolocation",232447107),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"geolocation","geolocation",232447107).cljs$core$IFn$_invoke$arity$1(db);
})], 0));

//# sourceMappingURL=synchrono.client.composer.js.map
