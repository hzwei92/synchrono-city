goog.provide('synchrono.client.write');
synchrono.client.write.write = (function synchrono$client$write$write(){
var post_content = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"post-content","post-content",1823558267)], null));
var private_key = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"private-key","private-key",426483388)], null));
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.write","div.write",-317135040),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.title","div.title",-1929547732),"write"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.editor","div.editor",-1423342585),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.editor-textarea","textarea.editor-textarea",772024502),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(post_content),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__14070_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-post-content","set-post-content",1713259310),p1__14070_SHARP_.target.value], null));
}),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),["Write one good sentence.\n","Then write another.\n","Don't spend time re-explaining to yourself.\n","You are your first audience.\n","What is useful to you in this very moment?\n","What do you feel?"].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.controls","div.controls",1658515593),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.action-button","button.action-button",-642678460),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"save-post","save-post",-280247555),cljs.core.deref(post_content)], null));
}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.empty_QMARK_(cljs.core.deref(private_key)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"10px"], null)], null),"Save"], null)], null)], null)], null);
});
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-post-content","set-post-content",1713259310),(function (p__14071,p__14072){
var map__14073 = p__14071;
var map__14073__$1 = cljs.core.__destructure_map(map__14073);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14073__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__14074 = p__14072;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14074,(0),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14074,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"posts","posts",760043164),new cljs.core.Keyword(null,"post-content","post-content",1823558267)], null),content)], null);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"post-content","post-content",1823558267),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"posts","posts",760043164),new cljs.core.Keyword(null,"post-content","post-content",1823558267)], null));
})], 0));

//# sourceMappingURL=synchrono.client.write.js.map
