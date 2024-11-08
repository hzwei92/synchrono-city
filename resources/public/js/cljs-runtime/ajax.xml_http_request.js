goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__12521 = e.target.readyState;
var fexpr__12520 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__12520.cljs$core$IFn$_invoke$arity$1 ? fexpr__12520.cljs$core$IFn$_invoke$arity$1(G__12521) : fexpr__12520.call(null, G__12521));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = (((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.XMLHttpRequest !== 'undefined'))?goog.global.XMLHttpRequest:(((typeof require !== 'undefined'))?(function (){var req = require;
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1("xmlhttprequest") : req.call(null, "xmlhttprequest")).XMLHttpRequest;
})():null));
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__12527,handler){
var map__12528 = p__12527;
var map__12528__$1 = cljs.core.__destructure_map(map__12528);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12528__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12528__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12528__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12528__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12528__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12528__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12528__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__12522_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__12522_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null, this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5804__auto___12559 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5804__auto___12559)){
var response_type_12560 = temp__5804__auto___12559;
(this$__$1.responseType = cljs.core.name(response_type_12560));
} else {
}

var seq__12529_12561 = cljs.core.seq(headers);
var chunk__12530_12562 = null;
var count__12531_12563 = (0);
var i__12532_12564 = (0);
while(true){
if((i__12532_12564 < count__12531_12563)){
var vec__12540_12565 = chunk__12530_12562.cljs$core$IIndexed$_nth$arity$2(null, i__12532_12564);
var k_12566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12540_12565,(0),null);
var v_12567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12540_12565,(1),null);
this$__$1.setRequestHeader(k_12566,v_12567);


var G__12568 = seq__12529_12561;
var G__12569 = chunk__12530_12562;
var G__12570 = count__12531_12563;
var G__12571 = (i__12532_12564 + (1));
seq__12529_12561 = G__12568;
chunk__12530_12562 = G__12569;
count__12531_12563 = G__12570;
i__12532_12564 = G__12571;
continue;
} else {
var temp__5804__auto___12572 = cljs.core.seq(seq__12529_12561);
if(temp__5804__auto___12572){
var seq__12529_12573__$1 = temp__5804__auto___12572;
if(cljs.core.chunked_seq_QMARK_(seq__12529_12573__$1)){
var c__5525__auto___12574 = cljs.core.chunk_first(seq__12529_12573__$1);
var G__12575 = cljs.core.chunk_rest(seq__12529_12573__$1);
var G__12576 = c__5525__auto___12574;
var G__12577 = cljs.core.count(c__5525__auto___12574);
var G__12578 = (0);
seq__12529_12561 = G__12575;
chunk__12530_12562 = G__12576;
count__12531_12563 = G__12577;
i__12532_12564 = G__12578;
continue;
} else {
var vec__12543_12579 = cljs.core.first(seq__12529_12573__$1);
var k_12580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12543_12579,(0),null);
var v_12581 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12543_12579,(1),null);
this$__$1.setRequestHeader(k_12580,v_12581);


var G__12582 = cljs.core.next(seq__12529_12573__$1);
var G__12583 = null;
var G__12584 = (0);
var G__12585 = (0);
seq__12529_12561 = G__12582;
chunk__12530_12562 = G__12583;
count__12531_12563 = G__12584;
i__12532_12564 = G__12585;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__5002__auto__ = body;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
