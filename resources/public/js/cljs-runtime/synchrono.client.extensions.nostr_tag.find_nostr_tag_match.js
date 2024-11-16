goog.provide('synchrono.client.extensions.nostr_tag.find_nostr_tag_match');
synchrono.client.extensions.nostr_tag.find_nostr_tag_match.find_nostr_tag_match = (function synchrono$client$extensions$nostr_tag$find_nostr_tag_match$find_nostr_tag_match($position){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($position.parent.type.name,"paragraph")){
var text = $position.parent.textContent;
var trigger = "[[";
var current_position = $position.parentOffset;
var trigger_index = text.lastIndexOf(trigger,(current_position - (1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(trigger_index,(-1))){
return null;
} else {
var text_after_trigger = text.slice((trigger_index + ((trigger).length)),current_position);
var parts = text_after_trigger.split(" ").filter((function (p1__15405_SHARP_){
return (!(cljs.core.empty_QMARK_(p1__15405_SHARP_)));
}));
if((cljs.core.count(parts) <= (3))){
return cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),trigger_index,new cljs.core.Keyword(null,"to","to",192099007),current_position], null),new cljs.core.Keyword(null,"query","query",-1288509510),text_after_trigger,new cljs.core.Keyword(null,"text","text",-1790561697),text.slice(trigger_index,current_position)], null));
} else {
return null;
}
}
} else {
return null;
}
});
synchrono.client.extensions.nostr_tag.find_nostr_tag_match.NostrTagSuggestion = synchrono.client.extensions.nostr_tag.find_nostr_tag_match.Extension.create(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"nostrTagSuggestion",new cljs.core.Keyword(null,"addOptions","addOptions",1505815287),(function (){
return ({"suggestion": ({"char": "[[", "allowSpaces": true, "decorationTag": "span", "decorationClass": "nostr-tag-suggestion", "items": (function (props){
var query = props.query;
var parts = query.split(" ").filter((function (p1__15457_SHARP_){
return (!(cljs.core.empty_QMARK_(p1__15457_SHARP_)));
}));
var vec__15474 = parts;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15474,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15474,(1),null);
var marker = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15474,(2),null);
if(cljs.core.empty_QMARK_(parts)){
return [];
} else {
return [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"note1...",new cljs.core.Keyword(null,"type","type",1174270348),"e",new cljs.core.Keyword(null,"marker","marker",865118313),"root"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"note2...",new cljs.core.Keyword(null,"type","type",1174270348),"e",new cljs.core.Keyword(null,"marker","marker",865118313),"reply"], null)];
}
}), "findSuggestionMatch": synchrono.client.extensions.nostr_tag.find_nostr_tag_match.find_nostr_tag_match, "command": (function (props){
try{var editor = props.editor;
if(cljs.core.truth_(editor)){
var item = props.item;
return editor.chain().insertContent(({"type": "nostrTagNode", "attrs": ({"id": item.id, "type": item.type, "marker": item.marker})})).run();
} else {
return null;
}
}catch (e15487){var e = e15487;
return log.error("Error in nostr tag command:",e);
}}), "render": (function (props){
var popup_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return ({"onStart": (function (props__$1){
try{var popup = document.createElement("div");
(popup.className = "nostr-tag-popup");

document.body.appendChild(popup);

return cljs.core.reset_BANG_(popup_atom,popup);
}catch (e15497){var e = e15497;
return log.error("Error in nostr tag popup creation:",e);
}}), "onUpdate": (function (props__$1){
try{var temp__5804__auto__ = cljs.core.deref(popup_atom);
if(cljs.core.truth_(temp__5804__auto__)){
var popup = temp__5804__auto__;
var items = props__$1.items;
var command = props__$1.command;
(popup.innerHTML = "");

var seq__15511 = cljs.core.seq(items);
var chunk__15512 = null;
var count__15513 = (0);
var i__15514 = (0);
while(true){
if((i__15514 < count__15513)){
var item = chunk__15512.cljs$core$IIndexed$_nth$arity$2(null, i__15514);
var button_15627 = document.createElement("button");
(button_15627.className = "nostr-tag-item");

(button_15627.textContent = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(item.type),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item.id)].join(''));

button_15627.addEventListener("click",((function (seq__15511,chunk__15512,count__15513,i__15514,button_15627,item,items,command,popup,temp__5804__auto__,popup_atom){
return (function (){
return (command.cljs$core$IFn$_invoke$arity$1 ? command.cljs$core$IFn$_invoke$arity$1(item) : command.call(null, item));
});})(seq__15511,chunk__15512,count__15513,i__15514,button_15627,item,items,command,popup,temp__5804__auto__,popup_atom))
);

popup.appendChild(button_15627);


var G__15632 = seq__15511;
var G__15633 = chunk__15512;
var G__15634 = count__15513;
var G__15635 = (i__15514 + (1));
seq__15511 = G__15632;
chunk__15512 = G__15633;
count__15513 = G__15634;
i__15514 = G__15635;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__15511);
if(temp__5804__auto____$1){
var seq__15511__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__15511__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__15511__$1);
var G__15638 = cljs.core.chunk_rest(seq__15511__$1);
var G__15639 = c__5525__auto__;
var G__15640 = cljs.core.count(c__5525__auto__);
var G__15641 = (0);
seq__15511 = G__15638;
chunk__15512 = G__15639;
count__15513 = G__15640;
i__15514 = G__15641;
continue;
} else {
var item = cljs.core.first(seq__15511__$1);
var button_15642 = document.createElement("button");
(button_15642.className = "nostr-tag-item");

(button_15642.textContent = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(item.type),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item.id)].join(''));

button_15642.addEventListener("click",((function (seq__15511,chunk__15512,count__15513,i__15514,button_15642,item,seq__15511__$1,temp__5804__auto____$1,items,command,popup,temp__5804__auto__,popup_atom){
return (function (){
return (command.cljs$core$IFn$_invoke$arity$1 ? command.cljs$core$IFn$_invoke$arity$1(item) : command.call(null, item));
});})(seq__15511,chunk__15512,count__15513,i__15514,button_15642,item,seq__15511__$1,temp__5804__auto____$1,items,command,popup,temp__5804__auto__,popup_atom))
);

popup.appendChild(button_15642);


var G__15645 = cljs.core.next(seq__15511__$1);
var G__15646 = null;
var G__15647 = (0);
var G__15648 = (0);
seq__15511 = G__15645;
chunk__15512 = G__15646;
count__15513 = G__15647;
i__15514 = G__15648;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}catch (e15502){var e = e15502;
return log.error("Error in nostr tag popup update:",e);
}}), "onKeyDown": (function (props__$1){
var event = props__$1.event;
var G__15543 = event.key;
switch (G__15543) {
case "ArrowUp":
event.preventDefault();

return true;

break;
case "ArrowDown":
event.preventDefault();

return true;

break;
case "Enter":
event.preventDefault();

return true;

break;
default:
return false;

}
}), "onExit": (function (_props){
var temp__5804__auto__ = cljs.core.deref(popup_atom);
if(cljs.core.truth_(temp__5804__auto__)){
var popup = temp__5804__auto__;
popup.remove();

return cljs.core.reset_BANG_(popup_atom,null);
} else {
return null;
}
})});
})})});
}),new cljs.core.Keyword(null,"addProseMirrorPlugins","addProseMirrorPlugins",391633342),(function (){
var this$ = this;
return [(new synchrono.client.extensions.nostr_tag.find_nostr_tag_match.Suggestion(this$.options.suggestion))];
})], null)));

//# sourceMappingURL=synchrono.client.extensions.nostr_tag.find_nostr_tag_match.js.map
