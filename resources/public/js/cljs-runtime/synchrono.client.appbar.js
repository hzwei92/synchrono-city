goog.provide('synchrono.client.appbar');
var module$node_modules$nostr_tools$lib$cjs$index=shadow.js.require("module$node_modules$nostr_tools$lib$cjs$index", {});
synchrono.client.appbar.keypair_menu = (function synchrono$client$appbar$keypair_menu(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.keypair-menu","div.keypair-menu",1720601617),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.outline-button","button.outline-button",1134336777),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"copy-public-key","copy-public-key",-687122009)], null));
})], null),"Copy public key"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.outline-button","button.outline-button",1134336777),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"copy-private-key","copy-private-key",889586188)], null));
})], null),"Copy private key"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.outline-button","button.outline-button",1134336777),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"discard-keypair","discard-keypair",1818026546)], null));
})], null),"Discard"], null)], null);
});
synchrono.client.appbar.appbar = (function synchrono$client$appbar$appbar(){
var public_key = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"public-key","public-key",-2106850051)], null));
var private_key = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"private-key","private-key",426483388)], null));
var generating_key_QMARK_ = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"generating-key?","generating-key?",356381343)], null));
var password = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password","password",417022471)], null));
var confirm_password = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"confirm-password","confirm-password",1576165176)], null));
var keypair_menu_open_QMARK_ = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keypair-menu-open?","keypair-menu-open?",1608882701)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.appbar","div.appbar",1356361810),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.appbar-left","div.appbar-left",-1434422111),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.appbar-button","button.appbar-button",-1666795768),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-menu","toggle-menu",-1127424735)], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"/JAMN.png",new cljs.core.Keyword(null,"width","width",-384071477),(36),new cljs.core.Keyword(null,"height","height",1025178622),(36)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.appbar-title","span.appbar-title",1467216995),"synchrono.city"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.appbar-right","div.appbar-right",1956029830),(cljs.core.truth_(cljs.core.deref(public_key))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.appbar-public-key","div.appbar-public-key",662654767),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(cljs.core.deref(private_key))?(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-keypair-menu","toggle-keypair-menu",-1758550691)], null));
}):null)], null),["[p ",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(public_key),(0),(8)),"...",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(public_key),(cljs.core.count(cljs.core.deref(public_key)) - (8))),"]"].join('')], null):(cljs.core.truth_(cljs.core.deref(generating_key_QMARK_))?" ":new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.generate-keypair-button","button.generate-keypair-button",-1595937337),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-key-generation","start-key-generation",2124087837)], null));
})], null),"Generate keypair"], null))),(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.deref(public_key);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.deref(private_key));
} else {
return and__5000__auto__;
}
})())?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.login","div.login",1729923461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(password),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"password",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__16201_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-password","set-password",-982671831),p1__16201_SHARP_.target.value], null));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.public-key-button","button.public-key-button",-1522540946),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unlock-keypair","unlock-keypair",323849372)], null));
})], null),"Unlock"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.outline-button","button.outline-button",1134336777),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"discard-keypair","discard-keypair",1818026546)], null));
})], null),"Discard"], null)], null):null),(cljs.core.truth_(cljs.core.deref(generating_key_QMARK_))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.login","div.login",1729923461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(password),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"password",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__16205_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-password","set-password",-982671831),p1__16205_SHARP_.target.value], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(confirm_password),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"confirm password",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__16206_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-confirm-password","set-confirm-password",1006513142),p1__16206_SHARP_.target.value], null));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.public-key-button","button.public-key-button",-1522540946),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"finish-key-generation","finish-key-generation",-1031432990)], null));
})], null),"Generate keypair"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.outline-button","button.outline-button",1134336777),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cancel-key-generation","cancel-key-generation",467613977)], null));
})], null),"Cancel"], null)], null):null),(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.deref(public_key);
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = cljs.core.deref(private_key);
if(cljs.core.truth_(and__5000__auto____$1)){
return cljs.core.deref(keypair_menu_open_QMARK_);
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [synchrono.client.appbar.keypair_menu], null):null)], null)], null);
});
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"public-key","public-key",-2106850051),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"public-key","public-key",-2106850051).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"private-key","private-key",426483388),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"private-key","private-key",426483388).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"generating-key?","generating-key?",356381343),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"generating-key?","generating-key?",356381343).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"password","password",417022471),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"confirm-password","confirm-password",1576165176),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"confirm-password","confirm-password",1576165176).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"keypair-menu-open?","keypair-menu-open?",1608882701),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"keypair-menu-open?","keypair-menu-open?",1608882701).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-keypair-menu","toggle-keypair-menu",-1758550691),(function (db,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"keypair-menu-open?","keypair-menu-open?",1608882701),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-password","set-password",-982671831),(function (db,p__16209){
var vec__16210 = p__16209;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16210,(0),null);
var password = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16210,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"password","password",417022471),password);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-confirm-password","set-confirm-password",1006513142),(function (db,p__16213){
var vec__16214 = p__16213;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16214,(0),null);
var confirm_password = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16214,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"confirm-password","confirm-password",1576165176),confirm_password);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start-key-generation","start-key-generation",2124087837),(function (db,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"generating-key?","generating-key?",356381343),true)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cancel-key-generation","cancel-key-generation",467613977),(function (db,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"password","password",417022471),""),new cljs.core.Keyword(null,"confirm-password","confirm-password",1576165176),""),new cljs.core.Keyword(null,"generating-key?","generating-key?",356381343),false)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"finish-key-generation","finish-key-generation",-1031432990),(function (p__16217,_){
var map__16218 = p__16217;
var map__16218__$1 = cljs.core.__destructure_map(map__16218);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16218__$1,new cljs.core.Keyword(null,"db","db",993250759));
var keypair = synchrono.client.crypto.generate_keypair();
var password = new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(db);
var encrypted_private_key = synchrono.client.crypto.encrypt(new cljs.core.Keyword(null,"private-key-bytes","private-key-bytes",381285272).cljs$core$IFn$_invoke$arity$1(keypair),password);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"password","password",417022471),""),new cljs.core.Keyword(null,"confirm-password","confirm-password",1576165176),""),new cljs.core.Keyword(null,"generating-key?","generating-key?",356381343),false),new cljs.core.Keyword(null,"public-key","public-key",-2106850051),new cljs.core.Keyword(null,"public-key","public-key",-2106850051).cljs$core$IFn$_invoke$arity$1(keypair)),new cljs.core.Keyword(null,"encrypted-private-key","encrypted-private-key",1069899594),encrypted_private_key),new cljs.core.Keyword(null,"private-key","private-key",426483388),new cljs.core.Keyword(null,"private-key","private-key",426483388).cljs$core$IFn$_invoke$arity$1(keypair)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"save-keypair-to-local-storage","save-keypair-to-local-storage",1078916815)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unlock-keypair","unlock-keypair",323849372),(function (p__16219,_){
var map__16220 = p__16219;
var map__16220__$1 = cljs.core.__destructure_map(map__16220);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16220__$1,new cljs.core.Keyword(null,"db","db",993250759));
var password = new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(db);
var encrypted_private_key = new cljs.core.Keyword(null,"encrypted-private-key","encrypted-private-key",1069899594).cljs$core$IFn$_invoke$arity$1(db);
var private_key_bytes = synchrono.client.crypto.decrypt(encrypted_private_key,password);
if(cljs.core.truth_(private_key_bytes)){
var private_key = synchrono.client.crypto.bytes_to_hex(private_key_bytes);
var public_key = new cljs.core.Keyword(null,"public-key","public-key",-2106850051).cljs$core$IFn$_invoke$arity$1(db);
var derived_public_key = module$node_modules$nostr_tools$lib$cjs$index.getPublicKey(private_key_bytes);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(public_key,derived_public_key)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"private-key","private-key",426483388),private_key),new cljs.core.Keyword(null,"password","password",417022471),"")], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"password","password",417022471),"")], null);
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"password","password",417022471),"")], null);
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"discard-keypair","discard-keypair",1818026546),(function (p__16221,_){
var map__16222 = p__16221;
var map__16222__$1 = cljs.core.__destructure_map(map__16222);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16222__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"public-key","public-key",-2106850051),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"private-key","private-key",426483388),null,new cljs.core.Keyword(null,"encrypted-private-key","encrypted-private-key",1069899594),null], 0)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-keypair-from-local-storage","clear-keypair-from-local-storage",-1093988865)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"copy-public-key","copy-public-key",-687122009),(function (p__16223,_){
var map__16224 = p__16223;
var map__16224__$1 = cljs.core.__destructure_map(map__16224);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16224__$1,new cljs.core.Keyword(null,"db","db",993250759));
var public_key = new cljs.core.Keyword(null,"public-key","public-key",-2106850051).cljs$core$IFn$_invoke$arity$1(db);
navigator.clipboard.writeText(public_key);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"copy-private-key","copy-private-key",889586188),(function (p__16225,_){
var map__16226 = p__16225;
var map__16226__$1 = cljs.core.__destructure_map(map__16226);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16226__$1,new cljs.core.Keyword(null,"db","db",993250759));
var private_key = new cljs.core.Keyword(null,"private-key","private-key",426483388).cljs$core$IFn$_invoke$arity$1(db);
navigator.clipboard.writeText(private_key);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null);
}));

//# sourceMappingURL=synchrono.client.appbar.js.map
