goog.provide('synchrono.client.core');
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
synchrono.client.core.init_logging_BANG_ = (function synchrono$client$core$init_logging_BANG_(){
taoensso.timbre.set_min_level_BANG_(new cljs.core.Keyword(null,"trace","trace",-1082747415));

return taoensso.timbre.merge_config_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns-blacklist","ns-blacklist",1957763142),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.*","reagent.*","re-frame.*"], null),new cljs.core.Keyword(null,"ns-filter","ns-filter",108598448),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["synchrono.*",null], null), null)], null),new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),(function (p__17178){
var map__17179 = p__17178;
var map__17179__$1 = cljs.core.__destructure_map(map__17179);
var data = map__17179__$1;
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17179__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var _QMARK_ns_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17179__$1,new cljs.core.Keyword(null,"?ns-str","?ns-str",2012733966));
var vargs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17179__$1,new cljs.core.Keyword(null,"vargs","vargs",-966597273));
var ts = (new Date());
var pst_options = ({"timeZone": "America/Los_Angeles", "day": "2-digit", "hour": "2-digit", "second": "2-digit", "month": "2-digit", "year": "numeric", "fractionalSecondDigits": (3), "hour12": false, "minute": "2-digit"});
var pst_time = ts.toLocaleString("en-US",pst_options);
var emoji = (function (){var G__17180 = level;
var G__17180__$1 = (((G__17180 instanceof cljs.core.Keyword))?G__17180.fqn:null);
switch (G__17180__$1) {
case "error":
return "\uD83D\uDD34";

break;
case "warn":
return "\uD83D\uDFE1";

break;
case "info":
return "\uD83D\uDFE2";

break;
case "trace":
return "\u26AA";

break;
default:
return "";

}
})();
var msg_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (arg){
if(cljs.core.map_QMARK_(arg)){
var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__17181_17190 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__17182_17191 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__17183_17192 = true;
var _STAR_print_fn_STAR__temp_val__17184_17193 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__17183_17192);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__17184_17193);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(arg);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__17182_17191);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__17181_17190);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
} else {
if(cljs.core.sequential_QMARK_(arg)){
var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__17185_17194 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__17186_17195 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__17187_17196 = true;
var _STAR_print_fn_STAR__temp_val__17188_17197 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__17187_17196);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__17188_17197);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(arg);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__17186_17195);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__17185_17194);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
} else {
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg], 0));

}
}
}),vargs);
var msg = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",msg_args);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pst_time)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(emoji)," ",clojure.string.upper_case(cljs.core.name(level))," ","[",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = _QMARK_ns_str;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "?";
}
})()),"] - ",msg].join('');
}),new cljs.core.Keyword(null,"appenders","appenders",1245583998),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"console","console",1228072057),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),true,new cljs.core.Keyword(null,"async?","async?",1523057758),false], null)], null)], null));
});
synchrono.client.core.app_view = (function synchrono$client$core$app_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.app-view","div.app-view",1640356272),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [synchrono.client.header.header], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel","div.panel",-1677992199),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [synchrono.client.menu.menu], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [synchrono.client.body.body], null)], null)], null);
});
synchrono.client.core.mount_root = (function synchrono$client$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

var container = document.getElementById("app");
var root = module$node_modules$react_dom$client.createRoot(container);
return root.render(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [synchrono.client.core.app_view], null)));
});
synchrono.client.core.init = (function synchrono$client$core$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

synchrono.client.core.init_logging_BANG_();

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"synchrono.client.core","file:/Users/peterwei/this_wokspace/synchrono/src/cljs/synchrono/client/core.cljs",75,3,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Trace test message",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),(42)], null)], null);
}),null)),null,(219),null);

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"synchrono.client.core","file:/Users/peterwei/this_wokspace/synchrono/src/cljs/synchrono/client/core.cljs",76,3,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Debug test message",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"debug","debug",-1608172596),true], null)], null);
}),null)),null,(220),null);

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"synchrono.client.core","file:/Users/peterwei/this_wokspace/synchrono/src/cljs/synchrono/client/core.cljs",77,3,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Info test message",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),(1),new cljs.core.Keyword(null,"b","b",1482224470),(2)], null)], null);
}),null)),null,(221),null);

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"synchrono.client.core","file:/Users/peterwei/this_wokspace/synchrono/src/cljs/synchrono/client/core.cljs",78,3,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Warning test message",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"warning","warning",-1685650671),"careful!"], null)], null);
}),null)),null,(222),null);

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"synchrono.client.core","file:/Users/peterwei/this_wokspace/synchrono/src/cljs/synchrono/client/core.cljs",79,3,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Error test message",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),"oops!"], null)], null);
}),null)),null,(223),null);

return synchrono.client.core.mount_root();
});

//# sourceMappingURL=synchrono.client.core.js.map
