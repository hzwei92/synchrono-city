goog.provide('synchrono.client.write');
var module$node_modules$$noble$hashes$sha256=shadow.js.require("module$node_modules$$noble$hashes$sha256", {});
var module$node_modules$nostr_tools$lib$cjs$pure=shadow.js.require("module$node_modules$nostr_tools$lib$cjs$pure", {});
synchrono.client.write.create_nostr_event = (function synchrono$client$write$create_nostr_event(content,public_key,private_key){
var now = Math.floor((Date.now() / (1000)));
var event = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"kind","kind",-717265803),(1),new cljs.core.Keyword(null,"created_at","created_at",1484050750),now,new cljs.core.Keyword(null,"content","content",15833224),content,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"pubkey","pubkey",-927805510),public_key], null);
var serialized = JSON.stringify(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),new cljs.core.Keyword(null,"pubkey","pubkey",-927805510).cljs$core$IFn$_invoke$arity$1(event),new cljs.core.Keyword(null,"created_at","created_at",1484050750).cljs$core$IFn$_invoke$arity$1(event),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(event),new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(event),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(event)], null));
var id = module$node_modules$$noble$hashes$sha256.sha256(serialized);
var sig = module$node_modules$nostr_tools$lib$cjs$pure.signEvent(event,private_key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(event,new cljs.core.Keyword(null,"id","id",-1388402092),id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"sig","sig",-1920417200),sig], 0));
});
synchrono.client.write.write = (function synchrono$client$write$write(){
var current_draft_content = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-draft-content","current-draft-content",-45912878)], null));
var current_keypair_private_key = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-keypair-private-key","current-keypair-private-key",-609513652)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.write","div.write",-317135040),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.title","div.title",-1929547732),"write"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.editor","div.editor",-1423342585),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.editor-textarea","textarea.editor-textarea",772024502),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(current_draft_content),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__12494_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-current-draft-content","set-current-draft-content",55143718),p1__12494_SHARP_.target.value], null));
}),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),["Write one good sentence.\n","Then write another.\n","Don't spend time re-explaining what you already know.\n","You are your first audience.\n","What is useful to you in this very moment?\n","What do you feel?"].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.controls","div.controls",1658515593),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.action-button","button.action-button",-642678460),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"save-post","save-post",-280247555),cljs.core.deref(current_draft_content),cljs.core.deref(current_keypair_private_key)], null));
}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.empty_QMARK_(cljs.core.deref(current_keypair_private_key)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"10px"], null)], null),"Save"], null)], null)], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-current-draft-content","set-current-draft-content",55143718),(function (p__12495,p__12496){
var map__12497 = p__12495;
var map__12497__$1 = cljs.core.__destructure_map(map__12497);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12497__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12498 = p__12496;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12498,(0),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12498,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drafts","drafts",1523624562),new cljs.core.Keyword(null,"current-draft-content","current-draft-content",-45912878)], null),content)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"save-post","save-post",-280247555),(function (p__12501,p__12502){
var map__12503 = p__12501;
var map__12503__$1 = cljs.core.__destructure_map(map__12503);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12503__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12504 = p__12502;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12504,(0),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12504,(1),null);
var public_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12504,(2),null);
var private_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12504,(3),null);
var event = synchrono.client.write.create_nostr_event(content,public_key,private_key);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws-send","ws-send",-1223872562),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drafts","drafts",1523624562),new cljs.core.Keyword(null,"current-draft-content","current-draft-content",-45912878)], null),"")], null);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"current-draft-content","current-draft-content",-45912878),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drafts","drafts",1523624562),new cljs.core.Keyword(null,"current-draft-content","current-draft-content",-45912878)], null));
})], 0));

//# sourceMappingURL=synchrono.client.write.js.map
