goog.provide('synchrono.client.logging');
synchrono.client.logging.init_logging_BANG_ = (function synchrono$client$logging$init_logging_BANG_(){
return taoensso.timbre.merge_config_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"ns-whitelist","ns-whitelist",-1717299774),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["synchrono.*"], null),new cljs.core.Keyword(null,"ns-blacklist","ns-blacklist",1957763142),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.*","reagent.*","re-frame.*"], null),new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),(function (p__21165){
var map__21166 = p__21165;
var map__21166__$1 = cljs.core.__destructure_map(map__21166);
var data = map__21166__$1;
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21166__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var _QMARK_ns_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21166__$1,new cljs.core.Keyword(null,"?ns-str","?ns-str",2012733966));
var vargs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21166__$1,new cljs.core.Keyword(null,"vargs","vargs",-966597273));
var timestamp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21166__$1,new cljs.core.Keyword(null,"timestamp","timestamp",579478971));
try{var ts = (function (){var or__5002__auto__ = timestamp;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new Date());
}
})();
var pst_options = ({"timeZone": "America/Los_Angeles", "hour12": false});
var pst_time = (new Date(ts)).toLocaleString("en-US",pst_options);
var level_str = (function (){var or__5002__auto__ = (function (){var G__21168 = level;
var G__21168__$1 = (((G__21168 == null))?null:cljs.core.name(G__21168));
if((G__21168__$1 == null)){
return null;
} else {
return clojure.string.upper_case(G__21168__$1);
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "UNKNOWN";
}
})();
var emoji = (function (){var G__21169 = level;
var G__21169__$1 = (((G__21169 instanceof cljs.core.Keyword))?G__21169.fqn:null);
switch (G__21169__$1) {
case "error":
return "\uD83D\uDD34";

break;
case "warn":
return "\uD83D\uDFE1";

break;
case "info":
return "\uD83D\uDFE2";

break;
case "debug":
return "\uD83D\uDD35";

break;
case "trace":
return "\u26AA";

break;
default:
return "\u2753";

}
})();
var msg = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (arg){
if((arg == null)){
return "nil";
} else {
if(((cljs.core.map_QMARK_(arg)) || (((cljs.core.vector_QMARK_(arg)) || (cljs.core.seq_QMARK_(arg)))))){
var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__21170_21175 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__21171_21176 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__21172_21177 = true;
var _STAR_print_fn_STAR__temp_val__21173_21178 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__21172_21177);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21173_21178);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(arg);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21171_21176);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__21170_21175);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg);

}
}
}),(function (){var or__5002__auto__ = vargs;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})()));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pst_time)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(emoji)," ",level_str," ","[",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = _QMARK_ns_str;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "unknown";
}
})()),"] - ",((clojure.string.blank_QMARK_(msg))?"Empty message":msg)].join('');
}catch (e21167){var e = e21167;
return ["Logging error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.message)].join('');
}}),new cljs.core.Keyword(null,"appenders","appenders",1245583998),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"console","console",1228072057),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),true], null)], null)], null));
});

//# sourceMappingURL=synchrono.client.logging.js.map
