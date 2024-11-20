goog.provide('synchrono.client.popup');
synchrono.client.popup.show_copied_popup = (function synchrono$client$popup$show_copied_popup(event){
var popup = document.createElement("div");
var target = event.target;
var rect = target.getBoundingClientRect();
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"synchrono.client.popup","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/popup.cljs",8,5,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Showing copied popup",rect], null);
}),null)),null,(897),null);

(popup.className = "copied-popup");

(popup.textContent = "Copied to clipboard!");

(popup.style.position = "fixed");

(popup.style.left = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((rect.left + (10))),"px"].join(''));

(popup.style.top = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((rect.top + (10))),"px"].join(''));

document.body.appendChild(popup);

return setTimeout((function (){
return popup.remove();
}),(700));
});

//# sourceMappingURL=synchrono.client.popup.js.map
