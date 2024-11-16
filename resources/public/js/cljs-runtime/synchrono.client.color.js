goog.provide('synchrono.client.color');
/**
 * Ensure color value is within visible range
 */
synchrono.client.color.adjust_color = (function synchrono$client$color$adjust_color(c){
var min_brightness = (60);
var max_brightness = (220);
var x__5090__auto__ = (function (){var x__5087__auto__ = c;
var y__5088__auto__ = min_brightness;
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
var y__5091__auto__ = max_brightness;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
});
/**
 * Convert two hex chars to integer
 */
synchrono.client.color.hex__GT_int = (function synchrono$client$color$hex__GT_int(hex_str){
return parseInt(hex_str,(16));
});
/**
 * Convert integer to two-char hex string
 */
synchrono.client.color.int__GT_hex_str = (function synchrono$client$color$int__GT_hex_str(n){
return n.toString((16)).padStart((2),"0");
});
/**
 * Convert a Nostr pubkey to consistent color formats
 */
synchrono.client.color.pubkey__GT_color = (function synchrono$client$color$pubkey__GT_color(pubkey){
var clean_key = clojure.string.replace(pubkey,"npub","");
var r = synchrono.client.color.adjust_color(synchrono.client.color.hex__GT_int(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(clean_key,(0),(2))));
var g = synchrono.client.color.adjust_color(synchrono.client.color.hex__GT_int(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(clean_key,(2),(4))));
var b = synchrono.client.color.adjust_color(synchrono.client.color.hex__GT_int(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(clean_key,(4),(6))));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rgb","rgb",1432123467),["rgb(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(g),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b),")"].join(''),new cljs.core.Keyword(null,"hex","hex",41691346),["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(synchrono.client.color.int__GT_hex_str(r)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(synchrono.client.color.int__GT_hex_str(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(synchrono.client.color.int__GT_hex_str(b))].join(''),new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null)], null);
});

//# sourceMappingURL=synchrono.client.color.js.map
