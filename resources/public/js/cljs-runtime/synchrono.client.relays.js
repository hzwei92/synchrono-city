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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-removing-relay-url","set-removing-relay-url",-640351145),(function (db,p__21998){
var vec__22006 = p__21998;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22006,(0),null);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22006,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"removing-relay-url","removing-relay-url",714387472)], null),url);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-relay","add-relay",1846216631),(function (p__22014,_){
var map__22015 = p__22014;
var map__22015__$1 = cljs.core.__destructure_map(map__22015);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22015__$1,new cljs.core.Keyword(null,"db","db",993250759));
var new_relay_url = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"new-relay-url","new-relay-url",-491255517)], null));
if(cljs.core.empty_QMARK_(new_relay_url)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"error","error",-978969032)], null),"Please enter a relay URL")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_relay_url,"/")){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"error","error",-978969032)], null),"Cannot add default relay '/' - it's already included")], null);
} else {
var relays_list = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"relays-list","relays-list",-1087282965)], null));
var filtered_relays_list = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__22010_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(p1__22010_SHARP_),new_relay_url);
}),relays_list);
var final_relays_list = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(filtered_relays_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),new_relay_url], null));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"relays-list","relays-list",-1087282965)], null),final_relays_list),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"new-relay-url","new-relay-url",-491255517)], null),""),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"message","message",-406056002)], null),"Relay added successfully"),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"save-relays-to-local-storage","save-relays-to-local-storage",66626631)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nostr-connect-to-relays","nostr-connect-to-relays",-923986997)], null)], null),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fetch-relay-info","fetch-relay-info",-875014705),new_relay_url], null)], null)], null)], null);

}
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remove-relay","remove-relay",-1419368035),(function (p__22025,p__22026){
var map__22027 = p__22025;
var map__22027__$1 = cljs.core.__destructure_map(map__22027);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22027__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__22028 = p__22026;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22028,(0),null);
var relay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22028,(1),null);
var relays_list = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"relays-list","relays-list",-1087282965)], null));
var filtered_relays_list = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__22024_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(p1__22024_SHARP_),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(relay));
}),relays_list);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"relays-list","relays-list",-1087282965)], null),filtered_relays_list),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"removing-relay-url","removing-relay-url",714387472)], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"message","message",-406056002)], null),"Relay removed successfully"),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"save-relays-to-local-storage","save-relays-to-local-storage",66626631)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nostr-connect-to-relays","nostr-connect-to-relays",-923986997)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-new-relay-url","set-new-relay-url",-562626802),(function (db,p__22031){
var vec__22032 = p__22031;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22032,(0),null);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22032,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"new-relay-url","new-relay-url",-491255517)], null),url);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"relay-info-success","relay-info-success",-1973109464),(function (db,p__22036){
var vec__22037 = p__22036;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22037,(0),null);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22037,(1),null);
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22037,(2),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"synchrono.client.relays","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/relays.cljs",79,4,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Received relay info:",info], null);
}),null)),null,(412),null);

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"relays-list","relays-list",-1087282965)], null),(function (relays){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22035_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(p1__22035_SHARP_),url)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__22035_SHARP_,new cljs.core.Keyword(null,"info","info",-317069002),info);
} else {
return p1__22035_SHARP_;
}
}),relays);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"relay-info-error","relay-info-error",943651205),(function (db,p__22041){
var vec__22042 = p__22041;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22042,(0),null);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22042,(1),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22042,(2),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"synchrono.client.relays","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/relays.cljs",90,4,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to fetch relay info:",error], null);
}),null)),null,(413),null);

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"relays-list","relays-list",-1087282965)], null),(function (relays){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22040_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(p1__22040_SHARP_),url)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__22040_SHARP_,new cljs.core.Keyword(null,"info-error","info-error",-91500151),cljs.core.str.cljs$core$IFn$_invoke$arity$1(error));
} else {
return p1__22040_SHARP_;
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.label","span.label",-1921107865),"Limits: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.limits","div.limits",959563918),(function (){var iter__5480__auto__ = (function synchrono$client$relays$relay_info_view_$_iter__22045(s__22046){
return (new cljs.core.LazySeq(null,(function (){
var s__22046__$1 = s__22046;
while(true){
var temp__5804__auto____$2 = cljs.core.seq(s__22046__$1);
if(temp__5804__auto____$2){
var s__22046__$2 = temp__5804__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__22046__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22046__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22048 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22047 = (0);
while(true){
if((i__22047 < size__5479__auto__)){
var vec__22049 = cljs.core._nth(c__5478__auto__,i__22047);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22049,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22049,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append(b__22048,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.limit","div.limit",205755745),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.limit-label","span.limit-label",-389877020),clojure.string.replace(cljs.core.name(k),/_/," "),": "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.limit-value","span.limit-value",-329929699),v], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)));

var G__22060 = (i__22047 + (1));
i__22047 = G__22060;
continue;
} else {
var G__22061 = (i__22047 + (1));
i__22047 = G__22061;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22048),synchrono$client$relays$relay_info_view_$_iter__22045(cljs.core.chunk_rest(s__22046__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22048),null);
}
} else {
var vec__22052 = cljs.core.first(s__22046__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22052,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22052,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.limit","div.limit",205755745),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.limit-label","span.limit-label",-389877020),clojure.string.replace(cljs.core.name(k),/_/," "),": "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.limit-value","span.limit-value",-329929699),v], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)),synchrono$client$relays$relay_info_view_$_iter__22045(cljs.core.rest(s__22046__$2)));
} else {
var G__22062 = cljs.core.rest(s__22046__$2);
s__22046__$1 = G__22062;
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
synchrono.client.relays.relays_view = (function synchrono$client$relays$relays_view(){
var relays_list = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays-list","relays-list",-1087282965)], null));
var message = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002)], null));
var error = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null));
var new_relay_url = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-relay-url","new-relay-url",-491255517)], null));
var removing_relay_url = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"removing-relay-url","removing-relay-url",714387472)], null));
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relays","div.relays",642823625),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.title","div.title",-1929547732),"relays"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Publish and subscribe to multiple relays. ","If some fail, the data may still be accessible via the others."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"See ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://nostr.com"], null),"https://nostr.com"], null)," for more information."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Host your own relay to secure your copy of the data. "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function synchrono$client$relays$relays_view_$_iter__22056(s__22057){
return (new cljs.core.LazySeq(null,(function (){
var s__22057__$1 = s__22057;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22057__$1);
if(temp__5804__auto__){
var s__22057__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22057__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22057__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22059 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22058 = (0);
while(true){
if((i__22058 < size__5479__auto__)){
var relay = cljs.core._nth(c__5478__auto__,i__22058);
cljs.core.chunk_append(b__22059,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(relay)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [synchrono.client.relays.relay_info_view,relay], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(relay),"/"))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.faint","div.faint",-1084338071),"This is the default relay and cannot be removed"], null):(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.deref(removing_relay_url);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(removing_relay_url),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(relay));
} else {
return and__5000__auto__;
}
})())?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),"Are you sure you want to remove this relay?"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.danger-button","button.danger-button",-574814999),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__22058,relay,c__5478__auto__,size__5479__auto__,b__22059,s__22057__$2,temp__5804__auto__,relays_list,message,error,new_relay_url,removing_relay_url){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-relay","remove-relay",-1419368035),relay], null));
});})(i__22058,relay,c__5478__auto__,size__5479__auto__,b__22059,s__22057__$2,temp__5804__auto__,relays_list,message,error,new_relay_url,removing_relay_url))
], null),"Remove"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.content-button","button.content-button",-1537050635),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__22058,relay,c__5478__auto__,size__5479__auto__,b__22059,s__22057__$2,temp__5804__auto__,relays_list,message,error,new_relay_url,removing_relay_url){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-removing-relay-url","set-removing-relay-url",-640351145),null], null));
});})(i__22058,relay,c__5478__auto__,size__5479__auto__,b__22059,s__22057__$2,temp__5804__auto__,relays_list,message,error,new_relay_url,removing_relay_url))
], null),"Cancel"], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.danger-button","button.danger-button",-574814999),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__22058,relay,c__5478__auto__,size__5479__auto__,b__22059,s__22057__$2,temp__5804__auto__,relays_list,message,error,new_relay_url,removing_relay_url){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-removing-relay-url","set-removing-relay-url",-640351145),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(relay)], null));
});})(i__22058,relay,c__5478__auto__,size__5479__auto__,b__22059,s__22057__$2,temp__5804__auto__,relays_list,message,error,new_relay_url,removing_relay_url))
], null),"Remove"], null)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),relay], null)));

var G__22063 = (i__22058 + (1));
i__22058 = G__22063;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22059),synchrono$client$relays$relays_view_$_iter__22056(cljs.core.chunk_rest(s__22057__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22059),null);
}
} else {
var relay = cljs.core.first(s__22057__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(relay)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [synchrono.client.relays.relay_info_view,relay], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(relay),"/"))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.faint","div.faint",-1084338071),"This is the default relay and cannot be removed"], null):(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.deref(removing_relay_url);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(removing_relay_url),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(relay));
} else {
return and__5000__auto__;
}
})())?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),"Are you sure you want to remove this relay?"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.danger-button","button.danger-button",-574814999),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (relay,s__22057__$2,temp__5804__auto__,relays_list,message,error,new_relay_url,removing_relay_url){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-relay","remove-relay",-1419368035),relay], null));
});})(relay,s__22057__$2,temp__5804__auto__,relays_list,message,error,new_relay_url,removing_relay_url))
], null),"Remove"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.content-button","button.content-button",-1537050635),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (relay,s__22057__$2,temp__5804__auto__,relays_list,message,error,new_relay_url,removing_relay_url){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-removing-relay-url","set-removing-relay-url",-640351145),null], null));
});})(relay,s__22057__$2,temp__5804__auto__,relays_list,message,error,new_relay_url,removing_relay_url))
], null),"Cancel"], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.danger-button","button.danger-button",-574814999),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (relay,s__22057__$2,temp__5804__auto__,relays_list,message,error,new_relay_url,removing_relay_url){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-removing-relay-url","set-removing-relay-url",-640351145),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(relay)], null));
});})(relay,s__22057__$2,temp__5804__auto__,relays_list,message,error,new_relay_url,removing_relay_url))
], null),"Remove"], null)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),relay], null)),synchrono$client$relays$relays_view_$_iter__22056(cljs.core.rest(s__22057__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.deref(relays_list));
})())], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(new_relay_url),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"wss://relay.example.com",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__22055_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-new-relay-url","set-new-relay-url",-562626802),p1__22055_SHARP_.target.value], null));
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),(cljs.core.truth_(cljs.core.deref(error))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.error","div.error",314336058),cljs.core.deref(error)], null):null),(cljs.core.truth_(cljs.core.deref(message))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.message","div.message",197515312),cljs.core.deref(message)], null):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.action-button","button.action-button",-642678460),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-relay","add-relay",1846216631)], null));
})], null),"Add Relay"], null)], null)], null);
});

//# sourceMappingURL=synchrono.client.relays.js.map
