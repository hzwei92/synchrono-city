goog.provide('synchrono.client.relays');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"relays-list","relays-list",-1087282965),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"relays-list","relays-list",-1087282965)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"new-relay-url","new-relay-url",-491255517),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"new-relay-url","new-relay-url",-491255517)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"removing-relay-url","removing-relay-url",714387472),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"removing-relay-url","removing-relay-url",714387472)], null));
})], 0));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nostr-connect-to-relays","nostr-connect-to-relays",-923986997),(function (p__18030,_){
var map__18031 = p__18030;
var map__18031__$1 = cljs.core.__destructure_map(map__18031);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18031__$1,new cljs.core.Keyword(null,"db","db",993250759));
var relays_list = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"relays-list","relays-list",-1087282965)], null));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"synchrono.client.relays","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/relays.cljs",36,6,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Fetching relay metadata for",relays_list], null);
}),null)),null,(226),null);

var seq__18036_18128 = cljs.core.seq(relays_list);
var chunk__18037_18129 = null;
var count__18038_18130 = (0);
var i__18039_18131 = (0);
while(true){
if((i__18039_18131 < count__18038_18130)){
var relay_18132 = chunk__18037_18129.cljs$core$IIndexed$_nth$arity$2(null, i__18039_18131);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"synchrono.client.relays","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/relays.cljs",38,8,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__18036_18128,chunk__18037_18129,count__18038_18130,i__18039_18131,relay_18132,relays_list,map__18031,map__18031__$1,db){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Fetching relay metadata for",new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(relay_18132)], null);
});})(seq__18036_18128,chunk__18037_18129,count__18038_18130,i__18039_18131,relay_18132,relays_list,map__18031,map__18031__$1,db))
,null)),null,(229),null);

synchrono.client.nostr.fetch_relay_metadata(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(relay_18132));


var G__18133 = seq__18036_18128;
var G__18134 = chunk__18037_18129;
var G__18135 = count__18038_18130;
var G__18136 = (i__18039_18131 + (1));
seq__18036_18128 = G__18133;
chunk__18037_18129 = G__18134;
count__18038_18130 = G__18135;
i__18039_18131 = G__18136;
continue;
} else {
var temp__5804__auto___18137 = cljs.core.seq(seq__18036_18128);
if(temp__5804__auto___18137){
var seq__18036_18138__$1 = temp__5804__auto___18137;
if(cljs.core.chunked_seq_QMARK_(seq__18036_18138__$1)){
var c__5525__auto___18139 = cljs.core.chunk_first(seq__18036_18138__$1);
var G__18140 = cljs.core.chunk_rest(seq__18036_18138__$1);
var G__18141 = c__5525__auto___18139;
var G__18142 = cljs.core.count(c__5525__auto___18139);
var G__18143 = (0);
seq__18036_18128 = G__18140;
chunk__18037_18129 = G__18141;
count__18038_18130 = G__18142;
i__18039_18131 = G__18143;
continue;
} else {
var relay_18144 = cljs.core.first(seq__18036_18138__$1);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"synchrono.client.relays","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/relays.cljs",38,8,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__18036_18128,chunk__18037_18129,count__18038_18130,i__18039_18131,relay_18144,seq__18036_18138__$1,temp__5804__auto___18137,relays_list,map__18031,map__18031__$1,db){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Fetching relay metadata for",new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(relay_18144)], null);
});})(seq__18036_18128,chunk__18037_18129,count__18038_18130,i__18039_18131,relay_18144,seq__18036_18138__$1,temp__5804__auto___18137,relays_list,map__18031,map__18031__$1,db))
,null)),null,(231),null);

synchrono.client.nostr.fetch_relay_metadata(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(relay_18144));


var G__18145 = cljs.core.next(seq__18036_18138__$1);
var G__18146 = null;
var G__18147 = (0);
var G__18148 = (0);
seq__18036_18128 = G__18145;
chunk__18037_18129 = G__18146;
count__18038_18130 = G__18147;
i__18039_18131 = G__18148;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-removing-relay-url","set-removing-relay-url",-640351145),(function (db,p__18045){
var vec__18046 = p__18045;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18046,(0),null);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18046,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"removing-relay-url","removing-relay-url",714387472)], null),url);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-relay","add-relay",1846216631),(function (p__18059,_){
var map__18060 = p__18059;
var map__18060__$1 = cljs.core.__destructure_map(map__18060);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18060__$1,new cljs.core.Keyword(null,"db","db",993250759));
var new_relay_url = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"new-relay-url","new-relay-url",-491255517)], null));
if(cljs.core.empty_QMARK_(new_relay_url)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"error","error",-978969032)], null),"Please enter a relay URL")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_relay_url,"/")){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"error","error",-978969032)], null),"Cannot add default relay '/' - it's already included")], null);
} else {
var relays_list = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"relays-list","relays-list",-1087282965)], null));
var filtered_relays_list = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__18049_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(p1__18049_SHARP_),new_relay_url);
}),relays_list);
var final_relays_list = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(filtered_relays_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),new_relay_url], null));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"relays-list","relays-list",-1087282965)], null),final_relays_list),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"new-relay-url","new-relay-url",-491255517)], null),""),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"message","message",-406056002)], null),"Relay added successfully"),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"save-relays-to-local-storage","save-relays-to-local-storage",66626631)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nostr-connect-to-relays","nostr-connect-to-relays",-923986997)], null)], null),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fetch-relay-info","fetch-relay-info",-875014705),new_relay_url], null)], null)], null)], null);

}
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remove-relay","remove-relay",-1419368035),(function (p__18068,p__18069){
var map__18070 = p__18068;
var map__18070__$1 = cljs.core.__destructure_map(map__18070);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18070__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__18071 = p__18069;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18071,(0),null);
var relay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18071,(1),null);
var relays_list = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"relays-list","relays-list",-1087282965)], null));
var filtered_relays_list = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__18064_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(p1__18064_SHARP_),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(relay));
}),relays_list);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"relays-list","relays-list",-1087282965)], null),filtered_relays_list),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"removing-relay-url","removing-relay-url",714387472)], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"message","message",-406056002)], null),"Relay removed successfully"),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"save-relays-to-local-storage","save-relays-to-local-storage",66626631)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nostr-connect-to-relays","nostr-connect-to-relays",-923986997)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-new-relay-url","set-new-relay-url",-562626802),(function (db,p__18079){
var vec__18080 = p__18079;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18080,(0),null);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18080,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"new-relay-url","new-relay-url",-491255517)], null),url);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"relay-info-success","relay-info-success",-1973109464),(function (db,p__18087){
var vec__18088 = p__18087;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18088,(0),null);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18088,(1),null);
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18088,(2),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"synchrono.client.relays","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/relays.cljs",90,4,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Received relay info:",info], null);
}),null)),null,(234),null);

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"relays-list","relays-list",-1087282965)], null),(function (relays){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18086_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(p1__18086_SHARP_),url)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18086_SHARP_,new cljs.core.Keyword(null,"info","info",-317069002),info);
} else {
return p1__18086_SHARP_;
}
}),relays);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"relay-info-error","relay-info-error",943651205),(function (db,p__18092){
var vec__18093 = p__18092;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18093,(0),null);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18093,(1),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18093,(2),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"synchrono.client.relays","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/relays.cljs",101,4,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to fetch relay info:",error], null);
}),null)),null,(235),null);

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"relays-list","relays-list",-1087282965)], null),(function (relays){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18091_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(p1__18091_SHARP_),url)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18091_SHARP_,new cljs.core.Keyword(null,"info-error","info-error",-91500151),cljs.core.str.cljs$core$IFn$_invoke$arity$1(error));
} else {
return p1__18091_SHARP_;
}
}),relays);
}));
}));
/**
 * Displays NIP-11 metadata for a relay
 */
synchrono.client.relays.relay_info_view = (function synchrono$client$relays$relay_info_view(relay){
var temp__5804__auto__ = new cljs.core.Keyword(null,"metadata","metadata",1799301597).cljs$core$IFn$_invoke$arity$1(relay);
if(cljs.core.truth_(temp__5804__auto__)){
var metadata = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relay-info","div.relay-info",963573423),(cljs.core.truth_(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(metadata))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.label","span.label",-1921107865),"Name: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.value","span.value",1986660361),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(metadata)], null)], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(metadata))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.label","span.label",-1921107865),"Description: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.value","span.value",1986660361),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(metadata)], null)], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"supported_nips","supported_nips",-206901664).cljs$core$IFn$_invoke$arity$1(metadata))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.label","span.label",-1921107865),"NIPs: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.value","span.value",1986660361),clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",new cljs.core.Keyword(null,"supported_nips","supported_nips",-206901664).cljs$core$IFn$_invoke$arity$1(metadata))], null)], null):null),(function (){var temp__5804__auto____$1 = new cljs.core.Keyword(null,"limitation","limitation",-1224244823).cljs$core$IFn$_invoke$arity$1(metadata);
if(cljs.core.truth_(temp__5804__auto____$1)){
var limits = temp__5804__auto____$1;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.label","span.label",-1921107865),"Limits: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.limits","div.limits",959563918),(function (){var iter__5480__auto__ = (function synchrono$client$relays$relay_info_view_$_iter__18113(s__18114){
return (new cljs.core.LazySeq(null,(function (){
var s__18114__$1 = s__18114;
while(true){
var temp__5804__auto____$2 = cljs.core.seq(s__18114__$1);
if(temp__5804__auto____$2){
var s__18114__$2 = temp__5804__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__18114__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__18114__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__18116 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__18115 = (0);
while(true){
if((i__18115 < size__5479__auto__)){
var vec__18117 = cljs.core._nth(c__5478__auto__,i__18115);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18117,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18117,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append(b__18116,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.limit","div.limit",205755745),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.limit-label","span.limit-label",-389877020),clojure.string.replace(cljs.core.name(k),/_/," "),": "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.limit-value","span.limit-value",-329929699),v], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)));

var G__18150 = (i__18115 + (1));
i__18115 = G__18150;
continue;
} else {
var G__18151 = (i__18115 + (1));
i__18115 = G__18151;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18116),synchrono$client$relays$relay_info_view_$_iter__18113(cljs.core.chunk_rest(s__18114__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18116),null);
}
} else {
var vec__18120 = cljs.core.first(s__18114__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18120,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18120,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.limit","div.limit",205755745),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.limit-label","span.limit-label",-389877020),clojure.string.replace(cljs.core.name(k),/_/," "),": "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.limit-value","span.limit-value",-329929699),v], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)),synchrono$client$relays$relay_info_view_$_iter__18113(cljs.core.rest(s__18114__$2)));
} else {
var G__18152 = cljs.core.rest(s__18114__$2);
s__18114__$1 = G__18152;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(limits);
})()], null)], null);
} else {
return null;
}
})(),(cljs.core.truth_(new cljs.core.Keyword(null,"software","software",1095158234).cljs$core$IFn$_invoke$arity$1(metadata))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.label","span.label",-1921107865),"Software: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.value","span.value",1986660361),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"software","software",1095158234).cljs$core$IFn$_invoke$arity$1(metadata),new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),new cljs.core.Keyword(null,"software","software",1095158234).cljs$core$IFn$_invoke$arity$1(metadata)], null)], null)], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(metadata))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.label","span.label",-1921107865),"Version: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.value","span.value",1986660361),new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(metadata)], null)], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"contact","contact",609093372).cljs$core$IFn$_invoke$arity$1(metadata))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.label","span.label",-1921107865),"Contact: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.value","span.value",1986660361),new cljs.core.Keyword(null,"contact","contact",609093372).cljs$core$IFn$_invoke$arity$1(metadata)], null)], null):null),(function (){var temp__5804__auto____$1 = new cljs.core.Keyword(null,"metadata-error","metadata-error",-758214751).cljs$core$IFn$_invoke$arity$1(relay);
if(cljs.core.truth_(temp__5804__auto____$1)){
var error = temp__5804__auto____$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.error","div.row.error",-2141043204),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Error: ",error], null)], null);
} else {
return null;
}
})()], null);
} else {
return null;
}
});
/**
 * Main relay management component. Shows list of relays and allows adding/removing.
 */
synchrono.client.relays.relays = (function synchrono$client$relays$relays(){
var relays_list = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays-list","relays-list",-1087282965)], null));
var message = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002)], null));
var error = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null));
var new_relay_url = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-relay-url","new-relay-url",-491255517)], null));
var removing_relay_url = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"removing-relay-url","removing-relay-url",714387472)], null));
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relays","div.relays",642823625),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.title","div.title",-1929547732),"relays"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Publish and subscribe to multiple relays. ","If some fail, the data may still be accessible via the others."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"See ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://nostr.com"], null),"https://nostr.com"], null)," for more information."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Host your own relay to secure your copy of the data. "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function synchrono$client$relays$relays_$_iter__18124(s__18125){
return (new cljs.core.LazySeq(null,(function (){
var s__18125__$1 = s__18125;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__18125__$1);
if(temp__5804__auto__){
var s__18125__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18125__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__18125__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__18127 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__18126 = (0);
while(true){
if((i__18126 < size__5479__auto__)){
var relay = cljs.core._nth(c__5478__auto__,i__18126);
cljs.core.chunk_append(b__18127,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(relay)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [synchrono.client.relays.relay_info_view,relay], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(relay),"/"))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.faint","div.faint",-1084338071),"This is the default relay and cannot be removed"], null):(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.deref(removing_relay_url);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(removing_relay_url),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(relay));
} else {
return and__5000__auto__;
}
})())?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),"Are you sure you want to remove this relay?"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.danger-button","button.danger-button",-574814999),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__18126,relay,c__5478__auto__,size__5479__auto__,b__18127,s__18125__$2,temp__5804__auto__,relays_list,message,error,new_relay_url,removing_relay_url){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-relay","remove-relay",-1419368035),relay], null));
});})(i__18126,relay,c__5478__auto__,size__5479__auto__,b__18127,s__18125__$2,temp__5804__auto__,relays_list,message,error,new_relay_url,removing_relay_url))
], null),"Remove"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.content-button","button.content-button",-1537050635),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__18126,relay,c__5478__auto__,size__5479__auto__,b__18127,s__18125__$2,temp__5804__auto__,relays_list,message,error,new_relay_url,removing_relay_url){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-removing-relay-url","set-removing-relay-url",-640351145),null], null));
});})(i__18126,relay,c__5478__auto__,size__5479__auto__,b__18127,s__18125__$2,temp__5804__auto__,relays_list,message,error,new_relay_url,removing_relay_url))
], null),"Cancel"], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.danger-button","button.danger-button",-574814999),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__18126,relay,c__5478__auto__,size__5479__auto__,b__18127,s__18125__$2,temp__5804__auto__,relays_list,message,error,new_relay_url,removing_relay_url){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-removing-relay-url","set-removing-relay-url",-640351145),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(relay)], null));
});})(i__18126,relay,c__5478__auto__,size__5479__auto__,b__18127,s__18125__$2,temp__5804__auto__,relays_list,message,error,new_relay_url,removing_relay_url))
], null),"Remove"], null)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),relay], null)));

var G__18158 = (i__18126 + (1));
i__18126 = G__18158;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18127),synchrono$client$relays$relays_$_iter__18124(cljs.core.chunk_rest(s__18125__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18127),null);
}
} else {
var relay = cljs.core.first(s__18125__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(relay)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [synchrono.client.relays.relay_info_view,relay], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(relay),"/"))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.faint","div.faint",-1084338071),"This is the default relay and cannot be removed"], null):(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.deref(removing_relay_url);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(removing_relay_url),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(relay));
} else {
return and__5000__auto__;
}
})())?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),"Are you sure you want to remove this relay?"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.danger-button","button.danger-button",-574814999),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (relay,s__18125__$2,temp__5804__auto__,relays_list,message,error,new_relay_url,removing_relay_url){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-relay","remove-relay",-1419368035),relay], null));
});})(relay,s__18125__$2,temp__5804__auto__,relays_list,message,error,new_relay_url,removing_relay_url))
], null),"Remove"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.content-button","button.content-button",-1537050635),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (relay,s__18125__$2,temp__5804__auto__,relays_list,message,error,new_relay_url,removing_relay_url){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-removing-relay-url","set-removing-relay-url",-640351145),null], null));
});})(relay,s__18125__$2,temp__5804__auto__,relays_list,message,error,new_relay_url,removing_relay_url))
], null),"Cancel"], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.danger-button","button.danger-button",-574814999),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (relay,s__18125__$2,temp__5804__auto__,relays_list,message,error,new_relay_url,removing_relay_url){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-removing-relay-url","set-removing-relay-url",-640351145),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(relay)], null));
});})(relay,s__18125__$2,temp__5804__auto__,relays_list,message,error,new_relay_url,removing_relay_url))
], null),"Remove"], null)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),relay], null)),synchrono$client$relays$relays_$_iter__18124(cljs.core.rest(s__18125__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.deref(relays_list));
})())], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(new_relay_url),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"wss://relay.example.com",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__18123_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-new-relay-url","set-new-relay-url",-562626802),p1__18123_SHARP_.target.value], null));
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),(cljs.core.truth_(cljs.core.deref(error))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.error","div.error",314336058),cljs.core.deref(error)], null):null),(cljs.core.truth_(cljs.core.deref(message))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.message","div.message",197515312),cljs.core.deref(message)], null):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.action-button","button.action-button",-642678460),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-relay","add-relay",1846216631)], null));
})], null),"Add Relay"], null)], null)], null);
});

//# sourceMappingURL=synchrono.client.relays.js.map
