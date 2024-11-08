goog.provide('synchrono.client.relays');
/**
 * Main relay management component. Shows list of relays and allows adding/removing.
 */
synchrono.client.relays.relays = (function synchrono$client$relays$relays(){
var relays_list = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays-list","relays-list",-1087282965)], null));
var message = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002)], null));
var error = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null));
var new_relay_url = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-relay-url","new-relay-url",-491255517)], null));
var removing_relay_url = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"removing-relay-url","removing-relay-url",714387472)], null));
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relays","div.relays",642823625),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.title","div.title",-1929547732),"relays"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Publish and subscribe to multiple relays. ","If some fail, the data may still be accessible via the others."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"See ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://nostr.com"], null),"https://nostr.com"], null)," for more information."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Host your own relay to secure your copy of the data. "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(new_relay_url),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"wss://relay.example.com",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__18025_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-new-relay-url","set-new-relay-url",-562626802),p1__18025_SHARP_.target.value], null));
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.action-button","button.action-button",-642678460),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-relay","add-relay",1846216631)], null));
})], null),"Add Relay"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),(cljs.core.truth_(cljs.core.deref(error))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.error","div.error",314336058),cljs.core.deref(error)], null):null),(cljs.core.truth_(cljs.core.deref(message))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.message","div.message",197515312),cljs.core.deref(message)], null):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function synchrono$client$relays$relays_$_iter__18033(s__18034){
return (new cljs.core.LazySeq(null,(function (){
var s__18034__$1 = s__18034;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__18034__$1);
if(temp__5804__auto__){
var s__18034__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18034__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__18034__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__18036 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__18035 = (0);
while(true){
if((i__18035 < size__5479__auto__)){
var relay = cljs.core._nth(c__5478__auto__,i__18035);
cljs.core.chunk_append(b__18036,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(relay)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"connected?","connected?",-1197551387).cljs$core$IFn$_invoke$arity$1(relay))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.success","div.row.success",-1059754495),"connected"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.faint","div.row.faint",1723537436),"disconnected"], null)),(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.deref(removing_relay_url);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(removing_relay_url),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(relay));
} else {
return and__5000__auto__;
}
})())?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),"Are you sure you want to remove this relay?"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.danger-button","button.danger-button",-574814999),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__18035,relay,c__5478__auto__,size__5479__auto__,b__18036,s__18034__$2,temp__5804__auto__,relays_list,message,error,new_relay_url,removing_relay_url){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-relay","remove-relay",-1419368035),relay], null));
});})(i__18035,relay,c__5478__auto__,size__5479__auto__,b__18036,s__18034__$2,temp__5804__auto__,relays_list,message,error,new_relay_url,removing_relay_url))
], null),"Remove"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.content-button","button.content-button",-1537050635),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__18035,relay,c__5478__auto__,size__5479__auto__,b__18036,s__18034__$2,temp__5804__auto__,relays_list,message,error,new_relay_url,removing_relay_url){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-removing-relay-url","set-removing-relay-url",-640351145),null], null));
});})(i__18035,relay,c__5478__auto__,size__5479__auto__,b__18036,s__18034__$2,temp__5804__auto__,relays_list,message,error,new_relay_url,removing_relay_url))
], null),"Cancel"], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.danger-button","button.danger-button",-574814999),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__18035,relay,c__5478__auto__,size__5479__auto__,b__18036,s__18034__$2,temp__5804__auto__,relays_list,message,error,new_relay_url,removing_relay_url){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-removing-relay-url","set-removing-relay-url",-640351145),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(relay)], null));
});})(i__18035,relay,c__5478__auto__,size__5479__auto__,b__18036,s__18034__$2,temp__5804__auto__,relays_list,message,error,new_relay_url,removing_relay_url))
], null),"Remove"], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),relay], null)));

var G__18071 = (i__18035 + (1));
i__18035 = G__18071;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18036),synchrono$client$relays$relays_$_iter__18033(cljs.core.chunk_rest(s__18034__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18036),null);
}
} else {
var relay = cljs.core.first(s__18034__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(relay)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"connected?","connected?",-1197551387).cljs$core$IFn$_invoke$arity$1(relay))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.success","div.row.success",-1059754495),"connected"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.faint","div.row.faint",1723537436),"disconnected"], null)),(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.deref(removing_relay_url);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(removing_relay_url),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(relay));
} else {
return and__5000__auto__;
}
})())?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),"Are you sure you want to remove this relay?"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.danger-button","button.danger-button",-574814999),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (relay,s__18034__$2,temp__5804__auto__,relays_list,message,error,new_relay_url,removing_relay_url){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-relay","remove-relay",-1419368035),relay], null));
});})(relay,s__18034__$2,temp__5804__auto__,relays_list,message,error,new_relay_url,removing_relay_url))
], null),"Remove"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.content-button","button.content-button",-1537050635),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (relay,s__18034__$2,temp__5804__auto__,relays_list,message,error,new_relay_url,removing_relay_url){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-removing-relay-url","set-removing-relay-url",-640351145),null], null));
});})(relay,s__18034__$2,temp__5804__auto__,relays_list,message,error,new_relay_url,removing_relay_url))
], null),"Cancel"], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.danger-button","button.danger-button",-574814999),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (relay,s__18034__$2,temp__5804__auto__,relays_list,message,error,new_relay_url,removing_relay_url){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-removing-relay-url","set-removing-relay-url",-640351145),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(relay)], null));
});})(relay,s__18034__$2,temp__5804__auto__,relays_list,message,error,new_relay_url,removing_relay_url))
], null),"Remove"], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),relay], null)),synchrono$client$relays$relays_$_iter__18033(cljs.core.rest(s__18034__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.deref(relays_list));
})())], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nostr-connect-to-relays","nostr-connect-to-relays",-923986997),(function (p__18041,_){
var map__18042 = p__18041;
var map__18042__$1 = cljs.core.__destructure_map(map__18042);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18042__$1,new cljs.core.Keyword(null,"db","db",993250759));
var relays_list = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"relays-list","relays-list",-1087282965)], null));
synchrono.client.nostr.subscribe_many(relays_list,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kinds","kinds",-294501889),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4444)], null),new cljs.core.Keyword(null,"#s","#s",1676198948),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["synchrono"], null)], null)], null));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-removing-relay-url","set-removing-relay-url",-640351145),(function (db,p__18043){
var vec__18044 = p__18043;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18044,(0),null);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18044,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"removing-relay-url","removing-relay-url",714387472)], null),url);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-relay","add-relay",1846216631),(function (p__18048,_){
var map__18049 = p__18048;
var map__18049__$1 = cljs.core.__destructure_map(map__18049);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18049__$1,new cljs.core.Keyword(null,"db","db",993250759));
var new_relay_url = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"new-relay-url","new-relay-url",-491255517)], null));
if(cljs.core.empty_QMARK_(new_relay_url)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"error","error",-978969032)], null),"Please enter a relay URL")], null);
} else {
var relays_list = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"relays-list","relays-list",-1087282965)], null));
var filtered_relays_list = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__18047_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(p1__18047_SHARP_),new_relay_url);
}),relays_list);
var final_relays_list = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(filtered_relays_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),new_relay_url], null));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"relays-list","relays-list",-1087282965)], null),final_relays_list),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"new-relay-url","new-relay-url",-491255517)], null),""),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"message","message",-406056002)], null),"Relay added successfully"),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"save-relays-to-local-storage","save-relays-to-local-storage",66626631)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nostr-connect-to-relays","nostr-connect-to-relays",-923986997)], null)], null)], null);
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remove-relay","remove-relay",-1419368035),(function (p__18051,p__18052){
var map__18053 = p__18051;
var map__18053__$1 = cljs.core.__destructure_map(map__18053);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18053__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__18054 = p__18052;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18054,(0),null);
var relay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18054,(1),null);
var relays_list = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"relays-list","relays-list",-1087282965)], null));
var filtered_relays_list = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__18050_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(p1__18050_SHARP_),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(relay));
}),relays_list);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"relays-list","relays-list",-1087282965)], null),filtered_relays_list),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"removing-relay-url","removing-relay-url",714387472)], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"message","message",-406056002)], null),"Relay removed successfully"),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"save-relays-to-local-storage","save-relays-to-local-storage",66626631)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nostr-connect-to-relays","nostr-connect-to-relays",-923986997)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-new-relay-url","set-new-relay-url",-562626802),(function (db,p__18057){
var vec__18058 = p__18057;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18058,(0),null);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18058,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"new-relay-url","new-relay-url",-491255517)], null),url);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"relays-list","relays-list",-1087282965),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"relays-list","relays-list",-1087282965)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"new-relay-url","new-relay-url",-491255517),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"new-relay-url","new-relay-url",-491255517)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"removing-relay-url","removing-relay-url",714387472),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"removing-relay-url","removing-relay-url",714387472)], null));
})], 0));

//# sourceMappingURL=synchrono.client.relays.js.map
