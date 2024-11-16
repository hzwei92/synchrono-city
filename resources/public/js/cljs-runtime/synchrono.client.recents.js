goog.provide('synchrono.client.recents');
synchrono.client.recents.event_view = (function synchrono$client$recents$event_view(event){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.event-item","div.event-item",653930779),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.event-id","div.event-id",-1035011918),["e ",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(event),(0),(8)),"...",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(event),(cljs.core.count(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(event)) - (8)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.event-pubkey","div.event-pubkey",-838072290),["p ",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"pubkey","pubkey",-927805510).cljs$core$IFn$_invoke$arity$1(event),(0),(8)),"...",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pubkey","pubkey",-927805510).cljs$core$IFn$_invoke$arity$1(event),(cljs.core.count(new cljs.core.Keyword(null,"pubkey","pubkey",-927805510).cljs$core$IFn$_invoke$arity$1(event)) - (8)))].join('')], null),(function (){var relays = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event-id->relays","event-id->relays",1431421128),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(event)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.event-relays","div.event-relays",-1238838511),["r ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",relays)].join('')], null);
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.event-kind","div.event-kind",-2067296400),["k ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(event))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.event-geohash","div.event-geohash",-570017151),(function (){var tags = new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(event);
if(cljs.core.truth_(cljs.core.some((function (p1__17809_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("s",cljs.core.first(p1__17809_SHARP_));
}),tags))){
return ["s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.first(tags)))].join('');
} else {
return "";
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.event-timestamp","div.event-timestamp",382933348),["t ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date((new cljs.core.Keyword(null,"created_at","created_at",1484050750).cljs$core$IFn$_invoke$arity$1(event) * (1000)))).toLocaleString())].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.event-content","div.event-content",-1245782241),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(event)], null)], null);
});
synchrono.client.recents.recents = (function synchrono$client$recents$recents(){
var recents = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recents","recents",1354038854)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.recents","div.recents",-1281091084),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.recents-list","div.recents-list",1765096392),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (event){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [synchrono.client.recents.event_view,event], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(event)], null));
}),cljs.core.deref(recents))], null)], null);
});
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"event-id->relays","event-id->relays",1431421128),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__17810){
var vec__17811 = p__17810;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17811,(0),null);
var event_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17811,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event-id->relays","event-id->relays",1431421128),event_id], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"recents","recents",1354038854),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
var event_id__GT_event = new cljs.core.Keyword(null,"event-id->event","event-id->event",-91447725).cljs$core$IFn$_invoke$arity$1(db);
var events = cljs.core.vals(event_id__GT_event);
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((50),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"created_at","created_at",1484050750),cljs.core._GT_,events));
})], 0));

//# sourceMappingURL=synchrono.client.recents.js.map
