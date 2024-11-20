goog.provide('synchrono.client.plugin');
var module$node_modules$prosemirror_state$dist$index_cjs=shadow.js.require("module$node_modules$prosemirror_state$dist$index_cjs", {});
synchrono.client.plugin.create_text_node = (function synchrono$client$plugin$create_text_node(text,schema){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"synchrono.client.plugin","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/plugin.cljs",6,3,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Creating text node with text:",text], null);
}),null)),null,(5969),null);

return schema.text(text);
});
synchrono.client.plugin.find_node_regex_matches = (function synchrono$client$plugin$find_node_regex_matches(text,node_type__GT_regex){
var matches = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__42597){
var vec__42598 = p__42597;
var node_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42598,(0),null);
var regex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42598,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),node_type,new cljs.core.Keyword(null,"text","text",-1790561697),x,new cljs.core.Keyword(null,"index","index",-1531685915),text.indexOf(x)], null);
}),cljs.core.re_seq(regex,text)));
}),cljs.core.PersistentVector.EMPTY,node_type__GT_regex);
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"index","index",-1531685915),matches);
});
synchrono.client.plugin.create_node = (function synchrono$client$plugin$create_node(match,schema){
try{var text_node = synchrono.client.plugin.create_text_node(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(match),schema);
var schema_node_type = (function (){var G__42602 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(match);
switch (G__42602) {
case "option":
return schema.nodes.option;

break;
case "command":
return schema.nodes.command;

break;
case "tag":
return schema.nodes.tag;

break;
default:
return null;

}
})();
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"synchrono.client.plugin","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/plugin.cljs",28,13,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Creating node for match:",match,"with type"], null);
}),null)),null,(5971),null);
if(cljs.core.truth_(schema_node_type)){
var node = schema_node_type.create(({}),[text_node]);
return node;
} else {
return null;
}
}catch (e42601){var e = e42601;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"synchrono.client.plugin","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/plugin.cljs",33,7,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Error creating node for pattern:",cljs.core.clj__GT_js(match),e], null);
}),null)),null,(5970),null);

return null;
}});
synchrono.client.plugin.process_matches = (function synchrono$client$plugin$process_matches(tr,matches,start_pos,schema){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"synchrono.client.plugin","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/plugin.cljs",37,3,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Processing matches:",matches,"at position",start_pos], null);
}),null)),null,(5972),null);

var sorted_matches = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"index","index",-1531685915),matches);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (current_tr,match){
try{var from = (start_pos + new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(match));
var to = (from + cljs.core.count(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(match)));
var node = synchrono.client.plugin.create_node(match,schema);
if(cljs.core.truth_(node)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"synchrono.client.plugin","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/plugin.cljs",46,23,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Replacing text with node at positions",from,to,"text:",new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(match),"doc:",current_tr.doc.toString()], null);
}),null)),null,(5974),null);

return current_tr.replaceWith(from,to,node);
} else {
return current_tr;
}
}catch (e42603){var e = e42603;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"synchrono.client.plugin","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/plugin.cljs",52,19,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Error processing pattern:",cljs.core.clj__GT_js(match),e], null);
}),null)),null,(5973),null);

return current_tr;
}}),tr,sorted_matches);
});
synchrono.client.plugin.is_special_node_QMARK_ = (function synchrono$client$plugin$is_special_node_QMARK_(node_type){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["command",null,"option",null,"tag",null], null), null),node_type);
});
synchrono.client.plugin.create_pattern_plugin = (function synchrono$client$plugin$create_pattern_plugin(schema){
return (new module$node_modules$prosemirror_state$dist$index_cjs.Plugin(({"appendTransaction": (function (transactions,old_state,state){
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.some((function (p1__42604_SHARP_){
return p1__42604_SHARP_.docChanged;
}),transactions);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some((function (p1__42605_SHARP_){
return p1__42605_SHARP_.getMeta("pattern-transform");
}),transactions));
} else {
return and__5000__auto__;
}
})())){
var tr_0 = state.tr;
var doc = state.doc;
var node__GT_pos = [];
var _ = doc.descendants((function (node,pos){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node.type.name,"text")) && ((!(synchrono.client.plugin.is_special_node_QMARK_((function (){var G__42606 = node;
var G__42606__$1 = (((G__42606 == null))?null:G__42606.parent);
var G__42606__$2 = (((G__42606__$1 == null))?null:G__42606__$1.type);
if((G__42606__$2 == null)){
return null;
} else {
return G__42606__$2.name;
}
})())))))){
node__GT_pos.push([node,pos]);
} else {
}

return true;
}));
var tr_1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (current_tr,node__GT_pos__$1){
var node = (node__GT_pos__$1[(0)]);
var pos = (node__GT_pos__$1[(1)]);
var node_text = node.text;
var matches = synchrono.client.plugin.find_node_regex_matches(node_text,new cljs.core.PersistentArrayMap(null, 3, ["option",/\([^\(\)\[\]]+\)/,"command",/\(\([^\(\)\[\]]+\)\)/,"tag",/\[[^\(\)\[\]]+\]/], null));
if(cljs.core.not(cljs.core.seq(matches))){
return current_tr;
} else {
return synchrono.client.plugin.process_matches(current_tr,matches,pos,schema);
}
}),tr_0,node__GT_pos);
if(cljs.core.truth_((function (){var and__5000__auto__ = tr_1;
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = tr_1.steps;
if(cljs.core.truth_(and__5000__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tr_0.steps,tr_1.steps);
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())){
tr_1.setMeta("pattern-transform",true);

return tr_1;
} else {
return tr_0;
}
} else {
return null;
}
})})));
});

//# sourceMappingURL=synchrono.client.plugin.js.map
