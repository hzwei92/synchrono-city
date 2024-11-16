goog.provide('synchrono.client.write');
var module$node_modules$prosemirror_state$dist$index_cjs=shadow.js.require("module$node_modules$prosemirror_state$dist$index_cjs", {});
var module$node_modules$prosemirror_view$dist$index_cjs=shadow.js.require("module$node_modules$prosemirror_view$dist$index_cjs", {});
var module$node_modules$prosemirror_model$dist$index_cjs=shadow.js.require("module$node_modules$prosemirror_model$dist$index_cjs", {});
var module$node_modules$prosemirror_schema_basic$dist$index_cjs=shadow.js.require("module$node_modules$prosemirror_schema_basic$dist$index_cjs", {});
var module$node_modules$prosemirror_commands$dist$index_cjs=shadow.js.require("module$node_modules$prosemirror_commands$dist$index_cjs", {});
var module$node_modules$prosemirror_history$dist$index_cjs=shadow.js.require("module$node_modules$prosemirror_history$dist$index_cjs", {});
var module$node_modules$prosemirror_keymap$dist$index_cjs=shadow.js.require("module$node_modules$prosemirror_keymap$dist$index_cjs", {});
synchrono.client.write.unpack_json = (function synchrono$client$write$unpack_json(m){
var seq__17382 = cljs.core.seq(m);
var chunk__17383 = null;
var count__17384 = (0);
var i__17385 = (0);
while(true){
if((i__17385 < count__17384)){
var vec__17400 = chunk__17383.cljs$core$IIndexed$_nth$arity$2(null, i__17385);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17400,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17400,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Key:",k], 0));

if(cljs.core.map_QMARK_(v)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Value is a nested map:"], 0));

(synchrono.client.write.unpack_json.cljs$core$IFn$_invoke$arity$1 ? synchrono.client.write.unpack_json.cljs$core$IFn$_invoke$arity$1(v) : synchrono.client.write.unpack_json.call(null, v));
} else {
if(cljs.core.vector_QMARK_(v)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Value is a list:"], 0));

var seq__17403_17416 = cljs.core.seq(v);
var chunk__17404_17417 = null;
var count__17405_17418 = (0);
var i__17406_17419 = (0);
while(true){
if((i__17406_17419 < count__17405_17418)){
var item_17420 = chunk__17404_17417.cljs$core$IIndexed$_nth$arity$2(null, i__17406_17419);
if(cljs.core.map_QMARK_(item_17420)){
(synchrono.client.write.unpack_json.cljs$core$IFn$_invoke$arity$1 ? synchrono.client.write.unpack_json.cljs$core$IFn$_invoke$arity$1(item_17420) : synchrono.client.write.unpack_json.call(null, item_17420));
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["List Item:",item_17420], 0));
}


var G__17421 = seq__17403_17416;
var G__17422 = chunk__17404_17417;
var G__17423 = count__17405_17418;
var G__17424 = (i__17406_17419 + (1));
seq__17403_17416 = G__17421;
chunk__17404_17417 = G__17422;
count__17405_17418 = G__17423;
i__17406_17419 = G__17424;
continue;
} else {
var temp__5804__auto___17425 = cljs.core.seq(seq__17403_17416);
if(temp__5804__auto___17425){
var seq__17403_17426__$1 = temp__5804__auto___17425;
if(cljs.core.chunked_seq_QMARK_(seq__17403_17426__$1)){
var c__5525__auto___17427 = cljs.core.chunk_first(seq__17403_17426__$1);
var G__17428 = cljs.core.chunk_rest(seq__17403_17426__$1);
var G__17429 = c__5525__auto___17427;
var G__17430 = cljs.core.count(c__5525__auto___17427);
var G__17431 = (0);
seq__17403_17416 = G__17428;
chunk__17404_17417 = G__17429;
count__17405_17418 = G__17430;
i__17406_17419 = G__17431;
continue;
} else {
var item_17432 = cljs.core.first(seq__17403_17426__$1);
if(cljs.core.map_QMARK_(item_17432)){
(synchrono.client.write.unpack_json.cljs$core$IFn$_invoke$arity$1 ? synchrono.client.write.unpack_json.cljs$core$IFn$_invoke$arity$1(item_17432) : synchrono.client.write.unpack_json.call(null, item_17432));
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["List Item:",item_17432], 0));
}


var G__17433 = cljs.core.next(seq__17403_17426__$1);
var G__17434 = null;
var G__17435 = (0);
var G__17436 = (0);
seq__17403_17416 = G__17433;
chunk__17404_17417 = G__17434;
count__17405_17418 = G__17435;
i__17406_17419 = G__17436;
continue;
}
} else {
}
}
break;
}
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Value:",v], 0));

}
}


var G__17437 = seq__17382;
var G__17438 = chunk__17383;
var G__17439 = count__17384;
var G__17440 = (i__17385 + (1));
seq__17382 = G__17437;
chunk__17383 = G__17438;
count__17384 = G__17439;
i__17385 = G__17440;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17382);
if(temp__5804__auto__){
var seq__17382__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17382__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__17382__$1);
var G__17441 = cljs.core.chunk_rest(seq__17382__$1);
var G__17442 = c__5525__auto__;
var G__17443 = cljs.core.count(c__5525__auto__);
var G__17444 = (0);
seq__17382 = G__17441;
chunk__17383 = G__17442;
count__17384 = G__17443;
i__17385 = G__17444;
continue;
} else {
var vec__17407 = cljs.core.first(seq__17382__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17407,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17407,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Key:",k], 0));

if(cljs.core.map_QMARK_(v)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Value is a nested map:"], 0));

(synchrono.client.write.unpack_json.cljs$core$IFn$_invoke$arity$1 ? synchrono.client.write.unpack_json.cljs$core$IFn$_invoke$arity$1(v) : synchrono.client.write.unpack_json.call(null, v));
} else {
if(cljs.core.vector_QMARK_(v)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Value is a list:"], 0));

var seq__17410_17445 = cljs.core.seq(v);
var chunk__17411_17446 = null;
var count__17412_17447 = (0);
var i__17413_17448 = (0);
while(true){
if((i__17413_17448 < count__17412_17447)){
var item_17449 = chunk__17411_17446.cljs$core$IIndexed$_nth$arity$2(null, i__17413_17448);
if(cljs.core.map_QMARK_(item_17449)){
(synchrono.client.write.unpack_json.cljs$core$IFn$_invoke$arity$1 ? synchrono.client.write.unpack_json.cljs$core$IFn$_invoke$arity$1(item_17449) : synchrono.client.write.unpack_json.call(null, item_17449));
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["List Item:",item_17449], 0));
}


var G__17450 = seq__17410_17445;
var G__17451 = chunk__17411_17446;
var G__17452 = count__17412_17447;
var G__17453 = (i__17413_17448 + (1));
seq__17410_17445 = G__17450;
chunk__17411_17446 = G__17451;
count__17412_17447 = G__17452;
i__17413_17448 = G__17453;
continue;
} else {
var temp__5804__auto___17454__$1 = cljs.core.seq(seq__17410_17445);
if(temp__5804__auto___17454__$1){
var seq__17410_17455__$1 = temp__5804__auto___17454__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17410_17455__$1)){
var c__5525__auto___17456 = cljs.core.chunk_first(seq__17410_17455__$1);
var G__17457 = cljs.core.chunk_rest(seq__17410_17455__$1);
var G__17458 = c__5525__auto___17456;
var G__17459 = cljs.core.count(c__5525__auto___17456);
var G__17460 = (0);
seq__17410_17445 = G__17457;
chunk__17411_17446 = G__17458;
count__17412_17447 = G__17459;
i__17413_17448 = G__17460;
continue;
} else {
var item_17461 = cljs.core.first(seq__17410_17455__$1);
if(cljs.core.map_QMARK_(item_17461)){
(synchrono.client.write.unpack_json.cljs$core$IFn$_invoke$arity$1 ? synchrono.client.write.unpack_json.cljs$core$IFn$_invoke$arity$1(item_17461) : synchrono.client.write.unpack_json.call(null, item_17461));
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["List Item:",item_17461], 0));
}


var G__17462 = cljs.core.next(seq__17410_17455__$1);
var G__17463 = null;
var G__17464 = (0);
var G__17465 = (0);
seq__17410_17445 = G__17462;
chunk__17411_17446 = G__17463;
count__17412_17447 = G__17464;
i__17413_17448 = G__17465;
continue;
}
} else {
}
}
break;
}
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Value:",v], 0));

}
}


var G__17466 = cljs.core.next(seq__17382__$1);
var G__17467 = null;
var G__17468 = (0);
var G__17469 = (0);
seq__17382 = G__17466;
chunk__17383 = G__17467;
count__17384 = G__17468;
i__17385 = G__17469;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Defines the custom 'Autocomplete' node specification with 'value' as a string.
 */
synchrono.client.write.autocomplete_node = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"inline","inline",1399884222),true,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),""], null)], null),new cljs.core.Keyword(null,"group","group",582596132),"inline",new cljs.core.Keyword(null,"atom","atom",-397043653),false,new cljs.core.Keyword(null,"toDOM","toDOM",1080829318),(function (node){
var attrs = node.attrs;
var value = attrs.value;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["span",new cljs.core.PersistentArrayMap(null, 2, ["class","autocomplete","data-value",value], null),["[[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"]]"].join('')], null);
}),new cljs.core.Keyword(null,"parseDOM","parseDOM",248634622),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"span.autocomplete",new cljs.core.Keyword(null,"getAttrs","getAttrs",1576852908),(function (dom){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),dom.dataset.value], null);
})], null)], null)], null));
/**
 * Defines the custom 'Tag' node specification with 'value' as a string.
 */
synchrono.client.write.tag_node = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"inline","inline",1399884222),true,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),""], null)], null),new cljs.core.Keyword(null,"group","group",582596132),"inline",new cljs.core.Keyword(null,"atom","atom",-397043653),true,new cljs.core.Keyword(null,"toDOM","toDOM",1080829318),(function (node){
var attrs = node.attrs;
var value = attrs.value;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["span",new cljs.core.PersistentArrayMap(null, 2, ["class","tag","data-value",value], null),["[[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"]]"].join('')], null);
}),new cljs.core.Keyword(null,"parseDOM","parseDOM",248634622),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"span.tag",new cljs.core.Keyword(null,"getAttrs","getAttrs",1576852908),(function (dom){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),dom.dataset.value], null);
})], null)], null)], null));
synchrono.client.write.base_schema = (new module$node_modules$prosemirror_model$dist$index_cjs.Schema(({"nodes": module$node_modules$prosemirror_schema_basic$dist$index_cjs.schema.spec.nodes, "marks": module$node_modules$prosemirror_schema_basic$dist$index_cjs.schema.spec.marks})));
/**
 * Defines a schema with a top-level 'doc' node and custom nodes.
 */
synchrono.client.write.extended_nodes = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, ["doc",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),"block+"], null),"paragraph",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"content","content",15833224),"inline*",new cljs.core.Keyword(null,"group","group",582596132),"block",new cljs.core.Keyword(null,"parseDOM","parseDOM",248634622),[({"tag": "p"})],new cljs.core.Keyword(null,"toDOM","toDOM",1080829318),(function (){
return ["p"];
})], null),"text",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"group","group",582596132),"inline"], null),"autocomplete",synchrono.client.write.autocomplete_node,"tag",synchrono.client.write.tag_node], null));
/**
 * Final schema including 'doc', custom nodes, and base marks.
 */
synchrono.client.write.extended_schema = (function (){var my_schema = (new module$node_modules$prosemirror_model$dist$index_cjs.Schema(({"nodes": synchrono.client.write.extended_nodes, "marks": module$node_modules$prosemirror_schema_basic$dist$index_cjs.schema.spec.marks})));
return my_schema;
})();
/**
 * Handles the '[' key press. Checks for '[[' to insert a Tag node.
 */
synchrono.client.write.handle_open_bracket = (function synchrono$client$write$handle_open_bracket(state,dispatch){
if((dispatch == null)){
return false;
} else {
var selection = state.selection;
var from = selection.from;
var doc = state.doc;
var char_before = (((from > (0)))?doc.textBetween((from - (1)),from,""):null);
var tr = state.tr;
if(cljs.core.truth_((function (){var and__5000__auto__ = char_before;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(char_before,"[");
} else {
return and__5000__auto__;
}
})())){
var tr2_17470 = tr.delete((from - (1)),from);
var tag_node_type_17471 = synchrono.client.write.extended_schema.nodes.tag;
var tag_node_17472 = tag_node_type_17471.create(({"value": "tag"}));
var tr3_17473 = tr2_17470.insert(from,tag_node_17472);
(dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(tr3_17473) : dispatch.call(null, tr3_17473));
} else {
var tr2_17474 = tr.insertText("[",from);
(dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(tr2_17474) : dispatch.call(null, tr2_17474));
}

return true;
}
});
/**
 * Creates the editor state with the extended schema and necessary plugins.
 */
synchrono.client.write.create_editor_state = (function synchrono$client$write$create_editor_state(doc){
var plugins = [module$node_modules$prosemirror_history$dist$index_cjs.history(),module$node_modules$prosemirror_keymap$dist$index_cjs.keymap(module$node_modules$prosemirror_commands$dist$index_cjs.baseKeymap),module$node_modules$prosemirror_keymap$dist$index_cjs.keymap(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, ["[",synchrono.client.write.handle_open_bracket], null)))];
var doc_node = (cljs.core.truth_(doc)?synchrono.client.write.extended_schema.parser.parse(doc):synchrono.client.write.extended_schema.topNodeType.createAndFill());
var state_config = ({"schema": synchrono.client.write.extended_schema, "doc": doc_node, "plugins": plugins});
return module$node_modules$prosemirror_state$dist$index_cjs.EditorState.create(state_config);
});
/**
 * ProseMirror editor component with custom Tag node support.
 */
synchrono.client.write.prosemirror_editor = (function synchrono$client$write$prosemirror_editor(){
var editor_view = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var editor_container = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
var dom_node = cljs.core.deref(editor_container);
var initial_state = synchrono.client.write.create_editor_state(null);
var view = (new module$node_modules$prosemirror_view$dist$index_cjs.EditorView(dom_node,({"state": initial_state, "dispatchTransaction": (function (tr){

var new_state = cljs.core.deref(editor_view).state.apply(tr);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"synchrono.client.write","file:/Users/peterwei/this-wokspace/synchrono/src/cljs/synchrono/client/write.cljs",149,30,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New state:",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17414_SHARP_){
return p1__17414_SHARP_.type;
}),new_state.doc)], null);
}),null)),null,(235),null);

return cljs.core.deref(editor_view).updateState(new_state);
})})));
return cljs.core.reset_BANG_(editor_view,view);
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (){
var temp__5804__auto__ = cljs.core.deref(editor_view);
if(cljs.core.truth_(temp__5804__auto__)){
var view = temp__5804__auto__;
return view.destroy();
} else {
return null;
}
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#editor","div#editor",-1877510501),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__17415_SHARP_){
return cljs.core.reset_BANG_(editor_container,p1__17415_SHARP_);
})], null)], null);
})], null));
});
/**
 * Main write component containing the ProseMirror editor.
 */
synchrono.client.write.write = (function synchrono$client$write$write(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.write","div.write",-317135040),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [synchrono.client.write.prosemirror_editor], null)], null);
});

//# sourceMappingURL=synchrono.client.write.js.map
