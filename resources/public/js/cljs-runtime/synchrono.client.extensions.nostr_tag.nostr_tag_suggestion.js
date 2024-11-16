goog.provide('synchrono.client.extensions.nostr_tag.nostr_tag_suggestion');
synchrono.client.extensions.nostr_tag.nostr_tag_suggestion.nostr_tag_suggestion = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"char","char",-641587586),"[[",new cljs.core.Keyword(null,"allowSpaces","allowSpaces",-1427534690),true,new cljs.core.Keyword(null,"decorationTag","decorationTag",-119506234),"span",new cljs.core.Keyword(null,"decorationClass","decorationClass",1878063989),"nostr-tag-suggestion",new cljs.core.Keyword(null,"items","items",1031954938),(function (p__16689){
var map__16690 = p__16689;
var map__16690__$1 = cljs.core.__destructure_map(map__16690);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16690__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var parts = query.split(" ").filter((function (p1__16688_SHARP_){
return (!(cljs.core.empty_QMARK_(p1__16688_SHARP_)));
}));
var vec__16691 = parts;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16691,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16691,(1),null);
var marker = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16691,(2),null);
return [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"npub1...",new cljs.core.Keyword(null,"type","type",1174270348),"e",new cljs.core.Keyword(null,"marker","marker",865118313),"root"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"npub2...",new cljs.core.Keyword(null,"type","type",1174270348),"e",new cljs.core.Keyword(null,"marker","marker",865118313),"reply"], null)];
}),new cljs.core.Keyword(null,"findSuggestionMatch","findSuggestionMatch",-832425641),(function (p__16694){
var map__16695 = p__16694;
var map__16695__$1 = cljs.core.__destructure_map(map__16695);
var $position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16695__$1,new cljs.core.Keyword(null,"$position","$position",-528932239));
return synchrono.client.extensions.nostr_tag.find_nostr_tag_match.find_nostr_tag_match($position);
}),new cljs.core.Keyword(null,"command","command",-894540724),(function (p__16696){
var map__16697 = p__16696;
var map__16697__$1 = cljs.core.__destructure_map(map__16697);
var editor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16697__$1,new cljs.core.Keyword(null,"editor","editor",-989377770));
var range = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16697__$1,new cljs.core.Keyword(null,"range","range",1639692286));
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16697__$1,new cljs.core.Keyword(null,"props","props",453281727));
var map__16698 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var map__16698__$1 = cljs.core.__destructure_map(map__16698);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16698__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16698__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16698__$1,new cljs.core.Keyword(null,"marker","marker",865118313));
var nostr_tag = ["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)," \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(marker),"\"]"].join('');
return editor.chain().focus().insertContentAt(range,nostr_tag).run();
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function (){
var popup_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return ({"onStart": (function (props){
var popup = document.createElement("div");
(popup.className = "nostr-tag-popup");

document.body.appendChild(popup);

return cljs.core.reset_BANG_(popup_atom,popup);
}), "onUpdate": (function (props){
return null;
}), "onKeyDown": (function (p__16699){
var map__16700 = p__16699;
var map__16700__$1 = cljs.core.__destructure_map(map__16700);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16700__$1,new cljs.core.Keyword(null,"event","event",301435442));
return false;
}), "onExit": (function (){
var temp__5804__auto__ = cljs.core.deref(popup_atom);
if(cljs.core.truth_(temp__5804__auto__)){
var popup = temp__5804__auto__;
popup.remove();

return cljs.core.reset_BANG_(popup_atom,null);
} else {
return null;
}
})});
})], null));

//# sourceMappingURL=synchrono.client.extensions.nostr_tag.nostr_tag_suggestion.js.map
