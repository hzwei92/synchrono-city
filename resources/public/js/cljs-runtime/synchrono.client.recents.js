goog.provide('synchrono.client.recents');
var module$node_modules$ngeohash$main=shadow.js.require("module$node_modules$ngeohash$main", {});
synchrono.client.recents.event_view = (function synchrono$client$recents$event_view(event){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.event-item","div.event-item",653930779),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.event-relays","div.event-relays",-1238838511),(function (){var relays = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event-id->relays","event-id->relays",1431421128),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(event)], null)));
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,relay){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.event-relay","div.event-relay",-1812888411),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
var text = ["[r ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(relay),"]"].join('');
navigator.clipboard.writeText(text);

return synchrono.client.popup.show_copied_popup(e);
})], null),["[r ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(relay),"]"].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(relay),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('')], null));
}),relays));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.event-pubkey","div.event-pubkey",-838072290),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
var text = ["[p ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pubkey","pubkey",-927805510).cljs$core$IFn$_invoke$arity$1(event)),"]"].join('');
navigator.clipboard.writeText(text);

return synchrono.client.popup.show_copied_popup(e);
})], null),["[p ",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"pubkey","pubkey",-927805510).cljs$core$IFn$_invoke$arity$1(event),(0),(8)),"...",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pubkey","pubkey",-927805510).cljs$core$IFn$_invoke$arity$1(event),(cljs.core.count(new cljs.core.Keyword(null,"pubkey","pubkey",-927805510).cljs$core$IFn$_invoke$arity$1(event)) - (8))),"]"].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.event","div.event",-839277689),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
var text = ["[e ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(event)),"]"].join('');
navigator.clipboard.writeText(text);

return synchrono.client.popup.show_copied_popup(e);
})], null),["[e ",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(event),(0),(8)),"...",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(event),(cljs.core.count(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(event)) - (8))),"]"].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.event-timestamp","div.event-timestamp",382933348),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
var timestamp = (new Date((new cljs.core.Keyword(null,"created_at","created_at",1484050750).cljs$core$IFn$_invoke$arity$1(event) * (1000)))).toLocaleString();
var text = ["[t ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(timestamp),"]"].join('');
navigator.clipboard.writeText(text);

return synchrono.client.popup.show_copied_popup(e);
})], null),["[t ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date((new cljs.core.Keyword(null,"created_at","created_at",1484050750).cljs$core$IFn$_invoke$arity$1(event) * (1000)))).toLocaleString()),"]"].join('')], null),(function (){var tags = new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(event);
var gh_tag = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__17635_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("s",cljs.core.first(p1__17635_SHARP_));
}),tags));
var gh = cljs.core.second(gh_tag);
var decoded = (cljs.core.truth_(gh)?(function (){try{return module$node_modules$ngeohash$main.decode(gh);
}catch (e17636){var _ = e17636;
return null;
}})():null);
if(cljs.core.truth_(decoded)){
var lng = decoded.longitude;
var lat = decoded.latitude;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.event-geohash","div.event-geohash",-570017151),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
var text_17641 = ["[s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(gh),"]"].join('');
navigator.clipboard.writeText(text_17641);

synchrono.client.popup.show_copied_popup(e);

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"synchrono.client.recents","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/recents.cljs",62,24,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["geohash clicked",gh], null);
}),null)),null,(8),null);

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-geolocation","set-geolocation",215139938),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lng","lng",1667213918),lng,new cljs.core.Keyword(null,"lat","lat",-580793929),lat,new cljs.core.Keyword(null,"geohash","geohash",-76356472),gh,new cljs.core.Keyword(null,"fly-to?","fly-to?",1006279988),true], null)], null));
})], null),["[s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(gh),"]"].join('')], null);
} else {
return null;
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.event-content","div.event-content",-1245782241),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(event)], null)], null);
});
synchrono.client.recents.recents = (function synchrono$client$recents$recents(){
var recents = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recents","recents",1354038854)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.recents","div.recents",-1281091084),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.recents-list","div.recents-list",1765096392),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (event){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [synchrono.client.recents.event_view,event], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(event)], null));
}),cljs.core.deref(recents)))], null)], null);
});
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"event-id->relays","event-id->relays",1431421128),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__17637){
var vec__17638 = p__17637;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17638,(0),null);
var event_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17638,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event-id->relays","event-id->relays",1431421128),event_id], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"recents","recents",1354038854),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
var event_id__GT_event = new cljs.core.Keyword(null,"event-id->event","event-id->event",-91447725).cljs$core$IFn$_invoke$arity$1(db);
var events = cljs.core.vals(event_id__GT_event);
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((50),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"created_at","created_at",1484050750),cljs.core._GT_,events));
})], 0));

//# sourceMappingURL=synchrono.client.recents.js.map
