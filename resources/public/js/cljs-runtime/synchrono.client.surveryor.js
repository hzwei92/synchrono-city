goog.provide('synchrono.client.surveryor');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("draft","query","draft/query",-1327864999),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drafts","drafts",1523624562),new cljs.core.Keyword(null,"query","query",-1288509510)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"events-by-id","events-by-id",-359530454),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"events-by-id","events-by-id",-359530454)], null));
})], 0));
synchrono.client.surveryor.query = (function synchrono$client$surveryor$query(){
var query = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("draft","query","draft/query",-1327864999)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.deref(query)], null);
});
synchrono.client.surveryor.event_view = (function synchrono$client$surveryor$event_view(event){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"synchrono.client.surveryor","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/surveryor.cljs",22,3,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [event], null);
}),null)),null,(47),null);

return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.event","div.event",-839277689),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.event-id","div.event-id",-1035011918),["e ",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(event),(0),(4)),"...",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(event),(cljs.core.count(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(event)) - (4)))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(event)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.event-pubkey","div.event-pubkey",-838072290),["p ",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"pubkey","pubkey",-927805510).cljs$core$IFn$_invoke$arity$1(event),(0),(4)),"...",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pubkey","pubkey",-927805510).cljs$core$IFn$_invoke$arity$1(event),(cljs.core.count(new cljs.core.Keyword(null,"pubkey","pubkey",-927805510).cljs$core$IFn$_invoke$arity$1(event)) - (4)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.event-timestamp","div.event-timestamp",382933348),(new Date((new cljs.core.Keyword(null,"created_at","created_at",1484050750).cljs$core$IFn$_invoke$arity$1(event) * (1000)))).toLocaleString()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.event-kind","div.event-kind",-2067296400),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(event)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.event-content","div.event-content",-1245782241),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(event)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (tag){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.event-tag","div.event-tag",23264451),["[",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",tag),"]"].join('')], null);
}),new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(event))], null);
});
synchrono.client.surveryor.events = (function synchrono$client$surveryor$events(){
var events_by_id = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"events-by-id","events-by-id",-359530454)], null));
var events_list = cljs.core.vals(cljs.core.deref(events_by_id));
var sorted_events = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3((function (p1__17173_SHARP_){
return new cljs.core.Keyword(null,"created_at","created_at",1484050750).cljs$core$IFn$_invoke$arity$1(p1__17173_SHARP_);
}),cljs.core._GT_,events_list);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (event){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [synchrono.client.surveryor.event_view,event], null);
}),sorted_events);
});
synchrono.client.surveryor.surveryor = (function synchrono$client$surveryor$surveryor(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.surveryor","div.surveryor",-1566034270),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.surveryor-header","div.surveryor-header",-808699007)," recent "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.surveyor-events","div.surveyor-events",393877645),synchrono.client.surveryor.events()], null)], null);
});

//# sourceMappingURL=synchrono.client.surveryor.js.map
