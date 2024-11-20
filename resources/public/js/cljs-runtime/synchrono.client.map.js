goog.provide('synchrono.client.map');
var module$node_modules$mapbox_gl$dist$mapbox_gl=shadow.js.require("module$node_modules$mapbox_gl$dist$mapbox_gl", {});
var module$node_modules$ngeohash$main=shadow.js.require("module$node_modules$ngeohash$main", {});
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"event-id->event","event-id->event",-91447725),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"event-id->event","event-id->event",-91447725).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"geolocation","geolocation",232447107),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"geolocation","geolocation",232447107).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-geolocation","set-geolocation",215139938),(function (p__16198,p__16199){
var map__16200 = p__16198;
var map__16200__$1 = cljs.core.__destructure_map(map__16200);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16200__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__16202 = p__16199;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16202,(0),null);
var geolocation = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16202,(1),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"synchrono.client.map","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/map.cljs",22,4,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["set-geolocation",geolocation], null);
}),null)),null,(3),null);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"geolocation","geolocation",232447107),geolocation),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"save-geolocation-to-local-storage","save-geolocation-to-local-storage",1106090665),geolocation], null)], null);
}));
synchrono.client.map.access_token = "pk.eyJ1Ijoid2VpaHoiLCJhIjoiY2xlNjVuaWI1MDJjcjNybXJsbGo4bXgyMiJ9.w_9vD530_V81gcdS-yZOLw";
synchrono.client.map.events_source_id = "events-source";
synchrono.client.map.events_layer_id = "events-layer";
synchrono.client.map.events_text_layer_id = "events-text-layer";
synchrono.client.map.decode_geohash = (function synchrono$client$map$decode_geohash(gh){
var decoded = module$node_modules$ngeohash$main.decode(gh);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lng","lng",1667213918),decoded.longitude,new cljs.core.Keyword(null,"lat","lat",-580793929),decoded.latitude], null);
});
synchrono.client.map.create_events_geojson = (function synchrono$client$map$create_events_geojson(events){
if(cljs.core.seq(events)){
return cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection",new cljs.core.Keyword(null,"features","features",-1146962336),cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (event){
if(cljs.core.truth_((function (){var and__5000__auto__ = event;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.map_QMARK_(event);
} else {
return and__5000__auto__;
}
})())){
var temp__5804__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__16207_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("s",cljs.core.first(p1__16207_SHARP_));
}),new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(event)));
if(cljs.core.truth_(temp__5804__auto__)){
var geohash_tag = temp__5804__auto__;
var temp__5804__auto____$1 = cljs.core.second(geohash_tag);
if(cljs.core.truth_(temp__5804__auto____$1)){
var gh = temp__5804__auto____$1;
var map__16208 = synchrono.client.map.decode_geohash(gh);
var map__16208__$1 = cljs.core.__destructure_map(map__16208);
var lat = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16208__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lng = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16208__$1,new cljs.core.Keyword(null,"lng","lng",1667213918));
if(cljs.core.truth_((function (){var and__5000__auto__ = lat;
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = lng;
if(cljs.core.truth_(and__5000__auto____$1)){
return (((lat > (-90))) && ((((lat < (90))) && ((((lng > (-180))) && ((lng < (180))))))));
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(event),new cljs.core.Keyword(null,"geohash","geohash",-76356472),gh,new cljs.core.Keyword(null,"lng","lng",1667213918),lng,new cljs.core.Keyword(null,"lat","lat",-580793929),lat], null),new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Point",new cljs.core.Keyword(null,"coordinates","coordinates",-1225332668),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lng,lat], null)], null)], null);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}),events)], null));
} else {
return null;
}
});
synchrono.client.map.update_event_circles = (function synchrono$client$map$update_event_circles(map,events){
var source = map.getSource(synchrono.client.map.events_source_id);
if(cljs.core.truth_(source)){
return source.setData(synchrono.client.map.create_events_geojson(events));
} else {
map.addSource(synchrono.client.map.events_source_id,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"geojson",new cljs.core.Keyword(null,"data","data",-232669377),synchrono.client.map.create_events_geojson(events)], null)));

map.addLayer(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),synchrono.client.map.events_layer_id,new cljs.core.Keyword(null,"type","type",1174270348),"circle",new cljs.core.Keyword(null,"source","source",-433931539),synchrono.client.map.events_source_id,new cljs.core.Keyword(null,"paint","paint",1531901299),new cljs.core.PersistentArrayMap(null, 6, ["circle-radius",(8),"circle-color","#FFA500","circle-opacity",0.6,"circle-stroke-width",(2),"circle-stroke-color","#FFA500","circle-stroke-opacity",(0)], null)], null)));

map.addLayer(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),synchrono.client.map.events_text_layer_id,new cljs.core.Keyword(null,"type","type",1174270348),"symbol",new cljs.core.Keyword(null,"source","source",-433931539),synchrono.client.map.events_source_id,new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.PersistentArrayMap(null, 4, ["text-field",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["get","geohash"], null),"text-offset",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),1.5], null),"text-anchor","top","text-size",(11)], null),new cljs.core.Keyword(null,"paint","paint",1531901299),new cljs.core.PersistentArrayMap(null, 3, ["text-color","#ffffff","text-halo-color","#000000","text-halo-width",(2)], null)], null)));

map.on("mouseenter",synchrono.client.map.events_layer_id,(function (){
return (map.getCanvas().style.cursor = "pointer");
}));

return map.on("mouseleave",synchrono.client.map.events_layer_id,(function (){
return (map.getCanvas().style.cursor = "");
}));
}
});
synchrono.client.map.add_marker = (function synchrono$client$map$add_marker(map,lngLat,marker_atom){
if(cljs.core.truth_(cljs.core.deref(marker_atom))){
cljs.core.deref(marker_atom).remove();
} else {
}

var marker = (new module$node_modules$mapbox_gl$dist$mapbox_gl.Marker(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"dimgray"], null))));
marker.setLngLat(lngLat);

marker.addTo(map);

return cljs.core.reset_BANG_(marker_atom,marker);
});
synchrono.client.map.init_map = (function synchrono$client$map$init_map(container,saved_geolocation,marker_atom,events){
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
var map = (new module$node_modules$mapbox_gl$dist$mapbox_gl.Map(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"container","container",-1736937707),container,new cljs.core.Keyword(null,"style","style",-496642736),"mapbox://styles/mapbox/dark-v11",new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [initial_lng,initial_lat], null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),1.2,new cljs.core.Keyword(null,"pitch","pitch",1495126700),(0),new cljs.core.Keyword(null,"bearing","bearing",-1189702101),(0)], null))));
map.on("style.load",(function (){
synchrono.client.map.update_event_circles(map,events);

return synchrono.client.map.add_marker(map,(new module$node_modules$mapbox_gl$dist$mapbox_gl.LngLat(initial_lng,initial_lat)),marker_atom);
}));

map.on("click",(function (e){
var features = map.queryRenderedFeatures(e.point,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layers","layers",1944875032),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [synchrono.client.map.events_layer_id], null)], null)));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"synchrono.client.map","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/map.cljs",141,16,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clicked features",features], null);
}),null)),null,(4),null);

if(cljs.core.empty_QMARK_(features)){
var lngLat = e.lngLat;
var lng = lngLat.lng;
var lat = lngLat.lat;
var gh = module$node_modules$ngeohash$main.encode(lat,lng,(5));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"synchrono.client.map","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/map.cljs",147,20,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["no-feature clicked",gh,lng,lat], null);
}),null)),null,(5),null);

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-geolocation","set-geolocation",215139938),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lng","lng",1667213918),lng,new cljs.core.Keyword(null,"lat","lat",-580793929),lat,new cljs.core.Keyword(null,"geohash","geohash",-76356472),gh,new cljs.core.Keyword(null,"fly-to?","fly-to?",1006279988),false], null)], null));
} else {
var feature = cljs.core.first(features);
var properties = feature.properties;
var gh = properties.geohash;
var lng = properties.lng;
var lat = properties.lat;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"synchrono.client.map","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/map.cljs",158,20,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["feature clicked",cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(feature,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(properties,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)),gh,lng,lat], null);
}),null)),null,(6),null);

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-geolocation","set-geolocation",215139938),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lng","lng",1667213918),lng,new cljs.core.Keyword(null,"lat","lat",-580793929),lat,new cljs.core.Keyword(null,"geohash","geohash",-76356472),gh,new cljs.core.Keyword(null,"fly-to?","fly-to?",1006279988),true], null)], null));
}
}));

return map;
} else {
return null;
}
});
synchrono.client.map.minimap_component = (function synchrono$client$map$minimap_component(event_id__GT_event,geolocation){
var map_container = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var map_instance = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var marker_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
if(cljs.core.truth_(cljs.core.deref(map_container))){
var map1 = synchrono.client.map.init_map(cljs.core.deref(map_container),geolocation,marker_atom,cljs.core.vals(event_id__GT_event));
return cljs.core.reset_BANG_(map_instance,map1);
} else {
return null;
}
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$,old_argv){
var vec__16228 = reagent.core.argv(this$);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16228,(0),null);
var current_event_id__GT_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16228,(1),null);
var current_geolocation = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16228,(2),null);
var vec__16231 = old_argv;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16231,(0),null);
var old_event_id__GT_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16231,(1),null);
var old_geolocation = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16231,(2),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_event_id__GT_event,current_event_id__GT_event)){
try{synchrono.client.map.update_event_circles(cljs.core.deref(map_instance),cljs.core.vals(current_event_id__GT_event));
}catch (e16234){var e_16250 = e16234;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"synchrono.client.map","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/map.cljs",187,17,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to update event circles",e_16250], null);
}),null)),null,(7),null);
}} else {
}

if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_geolocation,current_geolocation);
if(and__5000__auto__){
return current_geolocation;
} else {
return and__5000__auto__;
}
})())){
if(cljs.core.truth_((function (){var and__5000__auto__ = new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(current_geolocation);
if(cljs.core.truth_(and__5000__auto__)){
return new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(current_geolocation);
} else {
return and__5000__auto__;
}
})())){
synchrono.client.map.add_marker(cljs.core.deref(map_instance),(new module$node_modules$mapbox_gl$dist$mapbox_gl.LngLat(new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(current_geolocation),new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(current_geolocation))),marker_atom);
} else {
}
} else {
}

if(cljs.core.truth_((function (){var and__5000__auto__ = new cljs.core.Keyword(null,"fly-to?","fly-to?",1006279988).cljs$core$IFn$_invoke$arity$1(current_geolocation);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.deref(map_instance);
} else {
return and__5000__auto__;
}
})())){
cljs.core.deref(map_instance).flyTo(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(current_geolocation),new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(current_geolocation)], null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),(2)], null)));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-geolocation","set-geolocation",215139938),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(current_geolocation,new cljs.core.Keyword(null,"fly-to?","fly-to?",1006279988),false)], null));
} else {
return null;
}
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (){
if(cljs.core.truth_(cljs.core.deref(map_instance))){
return cljs.core.deref(map_instance).remove();
} else {
return null;
}
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (event_id__GT_event__$1,geolocation__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.map","div.map",-288957849),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__16227_SHARP_){
return cljs.core.reset_BANG_(map_container,p1__16227_SHARP_);
})], null)], null);
})], null));
});
synchrono.client.map.mini_map = (function synchrono$client$map$mini_map(){
var event_id__GT_event = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event-id->event","event-id->event",-91447725)], null)));
var geolocation = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geolocation","geolocation",232447107)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.map-container","div.map-container",424235644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [synchrono.client.map.minimap_component,event_id__GT_event,geolocation], null)], null);
});

//# sourceMappingURL=synchrono.client.map.js.map
