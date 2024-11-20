goog.provide('synchrono.client.menu');
synchrono.client.menu.menu = (function synchrono$client$menu$menu(){
var menu_open_QMARK_ = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"menu-open?","menu-open?",-1909849203)], null));
var relays = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162)], null));
var relay__GT_metadata = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relay->metadata","relay->metadata",1398253521)], null));
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"synchrono.client.menu","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/menu.cljs",10,11,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["relay->metadata",cljs.core.deref(relay__GT_metadata)], null);
}),null)),null,(998),null);
var new_relay = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-relay","new-relay",1766740126)], null));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.menu","div.menu",-175336694),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.deref(menu_open_QMARK_))?null:"closed")], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [synchrono.client.map.mini_map], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relays","div.relays",642823625),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function synchrono$client$menu$menu_$_iter__21968(s__21969){
return (new cljs.core.LazySeq(null,(function (){
var s__21969__$1 = s__21969;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__21969__$1);
if(temp__5804__auto__){
var s__21969__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21969__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__21969__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__21971 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__21970 = (0);
while(true){
if((i__21970 < size__5479__auto__)){
var relay = cljs.core._nth(c__5478__auto__,i__21970);
cljs.core.chunk_append(b__21971,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relay-item","div.relay-item",1335800495),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relay-url","div.relay-url",1339723027),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__21970,relay,c__5478__auto__,size__5479__auto__,b__21971,s__21969__$2,temp__5804__auto__,menu_open_QMARK_,relays,relay__GT_metadata,_,new_relay){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nostr","get-relay-metadata","nostr/get-relay-metadata",-1174537541),relay], null));
});})(i__21970,relay,c__5478__auto__,size__5479__auto__,b__21971,s__21969__$2,temp__5804__auto__,menu_open_QMARK_,relays,relay__GT_metadata,_,new_relay))
], null),["[r ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(relay),"]"].join('')], null),(function (){var temp__5804__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(relay__GT_metadata),relay);
if(cljs.core.truth_(temp__5804__auto____$1)){
var metadata = temp__5804__auto____$1;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relay-metadata","div.relay-metadata",32998522),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relay-name","div.relay-name",-1059669028),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(metadata)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relay-description","div.relay-description",1344151178),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(metadata)], null)], null);
} else {
return null;
}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),relay], null)));

var G__21984 = (i__21970 + (1));
i__21970 = G__21984;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21971),synchrono$client$menu$menu_$_iter__21968(cljs.core.chunk_rest(s__21969__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21971),null);
}
} else {
var relay = cljs.core.first(s__21969__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relay-item","div.relay-item",1335800495),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relay-url","div.relay-url",1339723027),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (relay,s__21969__$2,temp__5804__auto__,menu_open_QMARK_,relays,relay__GT_metadata,_,new_relay){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nostr","get-relay-metadata","nostr/get-relay-metadata",-1174537541),relay], null));
});})(relay,s__21969__$2,temp__5804__auto__,menu_open_QMARK_,relays,relay__GT_metadata,_,new_relay))
], null),["[r ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(relay),"]"].join('')], null),(function (){var temp__5804__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(relay__GT_metadata),relay);
if(cljs.core.truth_(temp__5804__auto____$1)){
var metadata = temp__5804__auto____$1;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relay-metadata","div.relay-metadata",32998522),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relay-name","div.relay-name",-1059669028),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(metadata)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relay-description","div.relay-description",1344151178),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(metadata)], null)], null);
} else {
return null;
}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),relay], null)),synchrono$client$menu$menu_$_iter__21968(cljs.core.rest(s__21969__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.deref(relays));
})())], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.add-relays-form","div.add-relays-form",-993026904),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(new_relay),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"another relay",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__21967_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-new-relay","set-new-relay",478463253),p1__21967_SHARP_.target.value], null));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.nostr-relay-button","button.nostr-relay-button",-1614048200),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-relay","add-relay",1846216631)], null));
})], null),"Add"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.prompt","div.prompt",1806740021)," "], null)], null);
});
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"menu-open?","menu-open?",-1909849203),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"menu-open?","menu-open?",-1909849203)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"relays","relays",390472162),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"relays","relays",390472162).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"relay->metadata","relay->metadata",1398253521),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"relay->metadata","relay->metadata",1398253521).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"new-relay","new-relay",1766740126),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"new-relay","new-relay",1766740126).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-menu","toggle-menu",-1127424735),(function (db,p__21972){
var vec__21973 = p__21972;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21973,(0),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"menu-open?","menu-open?",-1909849203)], null),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-new-relay","set-new-relay",478463253),(function (db,p__21976){
var vec__21977 = p__21976;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21977,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21977,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"new-relay","new-relay",1766740126),value);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-relay","add-relay",1846216631),(function (db,p__21980){
var vec__21981 = p__21980;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21981,(0),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"relays","relays",390472162),cljs.core.conj,new cljs.core.Keyword(null,"new-relay","new-relay",1766740126).cljs$core$IFn$_invoke$arity$1(db)),new cljs.core.Keyword(null,"new-relay","new-relay",1766740126),"");
}));

//# sourceMappingURL=synchrono.client.menu.js.map
