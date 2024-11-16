goog.provide('synchrono.client.surveyor');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("draft","query","draft/query",-1327864999),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drafts","drafts",1523624562),new cljs.core.Keyword(null,"query","query",-1288509510)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"events-by-id","events-by-id",-359530454),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"events-by-id","events-by-id",-359530454)], null));
})], 0));
synchrono.client.surveyor.query = (function synchrono$client$surveyor$query(){
var query = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("draft","query","draft/query",-1327864999)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.deref(query)], null);
});
synchrono.client.surveyor.event_view = (function synchrono$client$surveyor$event_view(event){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.event","div.event",-839277689),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.event-id","div.event-id",-1035011918),["e ",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(event),(0),(4)),"...",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(event),(cljs.core.count(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(event)) - (4)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.event-pubkey","div.event-pubkey",-838072290),["p ",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"pubkey","pubkey",-927805510).cljs$core$IFn$_invoke$arity$1(event),(0),(4)),"...",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pubkey","pubkey",-927805510).cljs$core$IFn$_invoke$arity$1(event),(cljs.core.count(new cljs.core.Keyword(null,"pubkey","pubkey",-927805510).cljs$core$IFn$_invoke$arity$1(event)) - (4)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.event-timestamp","div.event-timestamp",382933348),(new Date((new cljs.core.Keyword(null,"created_at","created_at",1484050750).cljs$core$IFn$_invoke$arity$1(event) * (1000)))).toLocaleString()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.event-kind","div.event-kind",-2067296400),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(event)], null),(function (){var content_lines = clojure.string.split.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(event),"\n");
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,line){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.event-content","div.event-content",-1245782241),line,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null));
}),content_lines);
})(),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,tag){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.event-tag","div.event-tag",23264451),["[",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",tag),"]"].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null));
}),new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(event))], null);
});
synchrono.client.surveyor.events = (function synchrono$client$surveyor$events(){
var events_by_id = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"events-by-id","events-by-id",-359530454)], null));
var events_list = cljs.core.vals(cljs.core.deref(events_by_id));
var sorted_events = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3((function (p1__19295_SHARP_){
return new cljs.core.Keyword(null,"created_at","created_at",1484050750).cljs$core$IFn$_invoke$arity$1(p1__19295_SHARP_);
}),cljs.core._GT_,events_list);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (event){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [synchrono.client.surveyor.event_view,event], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(event)], null));
}),sorted_events);
});
synchrono.client.surveyor.surveyor = (function synchrono$client$surveyor$surveyor(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.surveyor","div.surveyor",423432053),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.surveyor-events","div.surveyor-events",393877645),synchrono.client.surveyor.events()], null)], null);
});

//# sourceMappingURL=synchrono.client.surveyor.js.map
