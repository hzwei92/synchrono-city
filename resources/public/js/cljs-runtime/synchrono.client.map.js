goog.provide('synchrono.client.map');
var module$node_modules$mapbox_gl$dist$mapbox_gl=shadow.js.require("module$node_modules$mapbox_gl$dist$mapbox_gl", {});
var module$node_modules$ngeohash$main=shadow.js.require("module$node_modules$ngeohash$main", {});
synchrono.client.map.access_token = "pk.eyJ1Ijoid2VpaHoiLCJhIjoiY2xlNjVuaWI1MDJjcjNybXJsbGo4bXgyMiJ9.w_9vD530_V81gcdS-yZOLw";
synchrono.client.map.add_marker = (function synchrono$client$map$add_marker(map,lngLat,marker_atom){
if(cljs.core.truth_(cljs.core.deref(marker_atom))){
cljs.core.deref(marker_atom).remove();
} else {
}

var marker = (new module$node_modules$mapbox_gl$dist$mapbox_gl.Marker(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"dimgray"], null))));
var lat = lngLat.lat;
var lng = lngLat.lng;
var gh = module$node_modules$ngeohash$main.encode(lat,lng);
var geolocation = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lng","lng",1667213918),lng,new cljs.core.Keyword(null,"lat","lat",-580793929),lat,new cljs.core.Keyword(null,"geohash","geohash",-76356472),gh], null);
marker.setLngLat(lngLat);

marker.addTo(map);

cljs.core.reset_BANG_(marker_atom,marker);

console.log("Dispatching geolocation update:",cljs.core.clj__GT_js(geolocation));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-geolocation","set-geolocation",215139938),geolocation], null));
});
synchrono.client.map.init_map = (function synchrono$client$map$init_map(container,saved_geolocation){
if(cljs.core.truth_(container)){
(module$node_modules$mapbox_gl$dist$mapbox_gl.accessToken = synchrono.client.map.access_token);

var initial_lng = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(saved_geolocation);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return ((cljs.core.rand.cljs$core$IFn$_invoke$arity$0() * (360)) - (180));
}
})();
var initial_lat = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(saved_geolocation);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return ((cljs.core.rand.cljs$core$IFn$_invoke$arity$0() * (170)) - (85));
}
})();
var map = (new module$node_modules$mapbox_gl$dist$mapbox_gl.Map(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"container","container",-1736937707),container,new cljs.core.Keyword(null,"style","style",-496642736),"mapbox://styles/mapbox/dark-v11",new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [initial_lng,initial_lat], null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),0.8,new cljs.core.Keyword(null,"pitch","pitch",1495126700),(0),new cljs.core.Keyword(null,"bearing","bearing",-1189702101),(0)], null))));
var marker_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
map.on("click",(function (e){
return synchrono.client.map.add_marker(map,e.lngLat,marker_atom);
}));

synchrono.client.map.add_marker(map,(new module$node_modules$mapbox_gl$dist$mapbox_gl.LngLat(initial_lng,initial_lat)),marker_atom);

return map;
} else {
return null;
}
});
synchrono.client.map.map = (function synchrono$client$map$map(){
var map_instance = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var map_container = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var saved_geolocation = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geolocation","geolocation",232447107)], null)));
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
if(cljs.core.truth_(cljs.core.deref(map_container))){
return cljs.core.reset_BANG_(map_instance,synchrono.client.map.init_map(cljs.core.deref(map_container),saved_geolocation));
} else {
return null;
}
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (){
if(cljs.core.truth_(cljs.core.deref(map_instance))){
return cljs.core.deref(map_instance).remove();
} else {
return null;
}
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.map","div.map",-288957849),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__17778_SHARP_){
return cljs.core.reset_BANG_(map_container,p1__17778_SHARP_);
})], null)], null);
})], null));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-geolocation","set-geolocation",215139938),(function (p__17779,p__17780){
var map__17781 = p__17779;
var map__17781__$1 = cljs.core.__destructure_map(map__17781);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17781__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__17782 = p__17780;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17782,(0),null);
var geolocation = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17782,(1),null);
console.log("Setting geolocation in db:",cljs.core.clj__GT_js(geolocation));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"geolocation","geolocation",232447107),geolocation),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"save-geolocation-to-local-storage","save-geolocation-to-local-storage",1106090665),geolocation], null)], null);
}));

//# sourceMappingURL=synchrono.client.map.js.map
