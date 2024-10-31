goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___13025 = arguments.length;
var i__5727__auto___13026 = (0);
while(true){
if((i__5727__auto___13026 < len__5726__auto___13025)){
args__5732__auto__.push((arguments[i__5727__auto___13026]));

var G__13027 = (i__5727__auto___13026 + (1));
i__5727__auto___13026 = G__13027;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq12737){
var G__12738 = cljs.core.first(seq12737);
var seq12737__$1 = cljs.core.next(seq12737);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12738,seq12737__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__12742 = cljs.core.seq(sources);
var chunk__12743 = null;
var count__12744 = (0);
var i__12745 = (0);
while(true){
if((i__12745 < count__12744)){
var map__12750 = chunk__12743.cljs$core$IIndexed$_nth$arity$2(null, i__12745);
var map__12750__$1 = cljs.core.__destructure_map(map__12750);
var src = map__12750__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12750__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12750__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12750__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12750__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e12751){var e_13028 = e12751;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_13028);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_13028.message)].join('')));
}

var G__13029 = seq__12742;
var G__13030 = chunk__12743;
var G__13031 = count__12744;
var G__13032 = (i__12745 + (1));
seq__12742 = G__13029;
chunk__12743 = G__13030;
count__12744 = G__13031;
i__12745 = G__13032;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12742);
if(temp__5804__auto__){
var seq__12742__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12742__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12742__$1);
var G__13033 = cljs.core.chunk_rest(seq__12742__$1);
var G__13034 = c__5525__auto__;
var G__13035 = cljs.core.count(c__5525__auto__);
var G__13036 = (0);
seq__12742 = G__13033;
chunk__12743 = G__13034;
count__12744 = G__13035;
i__12745 = G__13036;
continue;
} else {
var map__12752 = cljs.core.first(seq__12742__$1);
var map__12752__$1 = cljs.core.__destructure_map(map__12752);
var src = map__12752__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12752__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12752__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12752__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12752__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e12755){var e_13037 = e12755;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_13037);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_13037.message)].join('')));
}

var G__13038 = cljs.core.next(seq__12742__$1);
var G__13039 = null;
var G__13040 = (0);
var G__13041 = (0);
seq__12742 = G__13038;
chunk__12743 = G__13039;
count__12744 = G__13040;
i__12745 = G__13041;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__12757 = cljs.core.seq(js_requires);
var chunk__12758 = null;
var count__12759 = (0);
var i__12760 = (0);
while(true){
if((i__12760 < count__12759)){
var js_ns = chunk__12758.cljs$core$IIndexed$_nth$arity$2(null, i__12760);
var require_str_13042 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_13042);


var G__13043 = seq__12757;
var G__13044 = chunk__12758;
var G__13045 = count__12759;
var G__13046 = (i__12760 + (1));
seq__12757 = G__13043;
chunk__12758 = G__13044;
count__12759 = G__13045;
i__12760 = G__13046;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12757);
if(temp__5804__auto__){
var seq__12757__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12757__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12757__$1);
var G__13047 = cljs.core.chunk_rest(seq__12757__$1);
var G__13048 = c__5525__auto__;
var G__13049 = cljs.core.count(c__5525__auto__);
var G__13050 = (0);
seq__12757 = G__13047;
chunk__12758 = G__13048;
count__12759 = G__13049;
i__12760 = G__13050;
continue;
} else {
var js_ns = cljs.core.first(seq__12757__$1);
var require_str_13051 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_13051);


var G__13052 = cljs.core.next(seq__12757__$1);
var G__13053 = null;
var G__13054 = (0);
var G__13055 = (0);
seq__12757 = G__13052;
chunk__12758 = G__13053;
count__12759 = G__13054;
i__12760 = G__13055;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__12763){
var map__12764 = p__12763;
var map__12764__$1 = cljs.core.__destructure_map(map__12764);
var msg = map__12764__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12764__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12764__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__12765(s__12766){
return (new cljs.core.LazySeq(null,(function (){
var s__12766__$1 = s__12766;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__12766__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__12772 = cljs.core.first(xs__6360__auto__);
var map__12772__$1 = cljs.core.__destructure_map(map__12772);
var src = map__12772__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12772__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12772__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__12766__$1,map__12772,map__12772__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__12764,map__12764__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__12765_$_iter__12767(s__12768){
return (new cljs.core.LazySeq(null,((function (s__12766__$1,map__12772,map__12772__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__12764,map__12764__$1,msg,info,reload_info){
return (function (){
var s__12768__$1 = s__12768;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__12768__$1);
if(temp__5804__auto____$1){
var s__12768__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__12768__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__12768__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__12770 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__12769 = (0);
while(true){
if((i__12769 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__12769);
cljs.core.chunk_append(b__12770,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__13056 = (i__12769 + (1));
i__12769 = G__13056;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12770),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__12765_$_iter__12767(cljs.core.chunk_rest(s__12768__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12770),null);
}
} else {
var warning = cljs.core.first(s__12768__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__12765_$_iter__12767(cljs.core.rest(s__12768__$2)));
}
} else {
return null;
}
break;
}
});})(s__12766__$1,map__12772,map__12772__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__12764,map__12764__$1,msg,info,reload_info))
,null,null));
});})(s__12766__$1,map__12772,map__12772__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__12764,map__12764__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__12765(cljs.core.rest(s__12766__$1)));
} else {
var G__13057 = cljs.core.rest(s__12766__$1);
s__12766__$1 = G__13057;
continue;
}
} else {
var G__13058 = cljs.core.rest(s__12766__$1);
s__12766__$1 = G__13058;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__12773_13059 = cljs.core.seq(warnings);
var chunk__12774_13060 = null;
var count__12775_13061 = (0);
var i__12776_13062 = (0);
while(true){
if((i__12776_13062 < count__12775_13061)){
var map__12779_13063 = chunk__12774_13060.cljs$core$IIndexed$_nth$arity$2(null, i__12776_13062);
var map__12779_13064__$1 = cljs.core.__destructure_map(map__12779_13063);
var w_13065 = map__12779_13064__$1;
var msg_13066__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12779_13064__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_13067 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12779_13064__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_13068 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12779_13064__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_13069 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12779_13064__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_13069)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_13067),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_13068),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_13066__$1)].join(''));


var G__13070 = seq__12773_13059;
var G__13071 = chunk__12774_13060;
var G__13072 = count__12775_13061;
var G__13073 = (i__12776_13062 + (1));
seq__12773_13059 = G__13070;
chunk__12774_13060 = G__13071;
count__12775_13061 = G__13072;
i__12776_13062 = G__13073;
continue;
} else {
var temp__5804__auto___13074 = cljs.core.seq(seq__12773_13059);
if(temp__5804__auto___13074){
var seq__12773_13075__$1 = temp__5804__auto___13074;
if(cljs.core.chunked_seq_QMARK_(seq__12773_13075__$1)){
var c__5525__auto___13076 = cljs.core.chunk_first(seq__12773_13075__$1);
var G__13077 = cljs.core.chunk_rest(seq__12773_13075__$1);
var G__13078 = c__5525__auto___13076;
var G__13079 = cljs.core.count(c__5525__auto___13076);
var G__13080 = (0);
seq__12773_13059 = G__13077;
chunk__12774_13060 = G__13078;
count__12775_13061 = G__13079;
i__12776_13062 = G__13080;
continue;
} else {
var map__12780_13081 = cljs.core.first(seq__12773_13075__$1);
var map__12780_13082__$1 = cljs.core.__destructure_map(map__12780_13081);
var w_13083 = map__12780_13082__$1;
var msg_13084__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12780_13082__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_13085 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12780_13082__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_13086 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12780_13082__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_13087 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12780_13082__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_13087)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_13085),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_13086),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_13084__$1)].join(''));


var G__13088 = cljs.core.next(seq__12773_13075__$1);
var G__13089 = null;
var G__13090 = (0);
var G__13091 = (0);
seq__12773_13059 = G__13088;
chunk__12774_13060 = G__13089;
count__12775_13061 = G__13090;
i__12776_13062 = G__13091;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__12762_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__12762_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return new$;
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__12783){
var map__12784 = p__12783;
var map__12784__$1 = cljs.core.__destructure_map(map__12784);
var msg = map__12784__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12784__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12784__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__12785 = cljs.core.seq(updates);
var chunk__12787 = null;
var count__12788 = (0);
var i__12789 = (0);
while(true){
if((i__12789 < count__12788)){
var path = chunk__12787.cljs$core$IIndexed$_nth$arity$2(null, i__12789);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__12899_13092 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__12903_13093 = null;
var count__12904_13094 = (0);
var i__12905_13095 = (0);
while(true){
if((i__12905_13095 < count__12904_13094)){
var node_13096 = chunk__12903_13093.cljs$core$IIndexed$_nth$arity$2(null, i__12905_13095);
if(cljs.core.not(node_13096.shadow$old)){
var path_match_13097 = shadow.cljs.devtools.client.browser.match_paths(node_13096.getAttribute("href"),path);
if(cljs.core.truth_(path_match_13097)){
var new_link_13098 = (function (){var G__12931 = node_13096.cloneNode(true);
G__12931.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_13097),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__12931;
})();
(node_13096.shadow$old = true);

(new_link_13098.onload = ((function (seq__12899_13092,chunk__12903_13093,count__12904_13094,i__12905_13095,seq__12785,chunk__12787,count__12788,i__12789,new_link_13098,path_match_13097,node_13096,path,map__12784,map__12784__$1,msg,updates,reload_info){
return (function (e){
var seq__12932_13099 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__12934_13100 = null;
var count__12935_13101 = (0);
var i__12936_13102 = (0);
while(true){
if((i__12936_13102 < count__12935_13101)){
var map__12940_13103 = chunk__12934_13100.cljs$core$IIndexed$_nth$arity$2(null, i__12936_13102);
var map__12940_13104__$1 = cljs.core.__destructure_map(map__12940_13103);
var task_13105 = map__12940_13104__$1;
var fn_str_13106 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12940_13104__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_13107 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12940_13104__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_13108 = goog.getObjectByName(fn_str_13106,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_13107)].join(''));

(fn_obj_13108.cljs$core$IFn$_invoke$arity$2 ? fn_obj_13108.cljs$core$IFn$_invoke$arity$2(path,new_link_13098) : fn_obj_13108.call(null, path,new_link_13098));


var G__13109 = seq__12932_13099;
var G__13110 = chunk__12934_13100;
var G__13111 = count__12935_13101;
var G__13112 = (i__12936_13102 + (1));
seq__12932_13099 = G__13109;
chunk__12934_13100 = G__13110;
count__12935_13101 = G__13111;
i__12936_13102 = G__13112;
continue;
} else {
var temp__5804__auto___13113 = cljs.core.seq(seq__12932_13099);
if(temp__5804__auto___13113){
var seq__12932_13114__$1 = temp__5804__auto___13113;
if(cljs.core.chunked_seq_QMARK_(seq__12932_13114__$1)){
var c__5525__auto___13115 = cljs.core.chunk_first(seq__12932_13114__$1);
var G__13116 = cljs.core.chunk_rest(seq__12932_13114__$1);
var G__13117 = c__5525__auto___13115;
var G__13118 = cljs.core.count(c__5525__auto___13115);
var G__13119 = (0);
seq__12932_13099 = G__13116;
chunk__12934_13100 = G__13117;
count__12935_13101 = G__13118;
i__12936_13102 = G__13119;
continue;
} else {
var map__12941_13120 = cljs.core.first(seq__12932_13114__$1);
var map__12941_13121__$1 = cljs.core.__destructure_map(map__12941_13120);
var task_13122 = map__12941_13121__$1;
var fn_str_13123 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12941_13121__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_13124 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12941_13121__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_13125 = goog.getObjectByName(fn_str_13123,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_13124)].join(''));

(fn_obj_13125.cljs$core$IFn$_invoke$arity$2 ? fn_obj_13125.cljs$core$IFn$_invoke$arity$2(path,new_link_13098) : fn_obj_13125.call(null, path,new_link_13098));


var G__13126 = cljs.core.next(seq__12932_13114__$1);
var G__13127 = null;
var G__13128 = (0);
var G__13129 = (0);
seq__12932_13099 = G__13126;
chunk__12934_13100 = G__13127;
count__12935_13101 = G__13128;
i__12936_13102 = G__13129;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_13096);
});})(seq__12899_13092,chunk__12903_13093,count__12904_13094,i__12905_13095,seq__12785,chunk__12787,count__12788,i__12789,new_link_13098,path_match_13097,node_13096,path,map__12784,map__12784__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_13097], 0));

goog.dom.insertSiblingAfter(new_link_13098,node_13096);


var G__13130 = seq__12899_13092;
var G__13131 = chunk__12903_13093;
var G__13132 = count__12904_13094;
var G__13133 = (i__12905_13095 + (1));
seq__12899_13092 = G__13130;
chunk__12903_13093 = G__13131;
count__12904_13094 = G__13132;
i__12905_13095 = G__13133;
continue;
} else {
var G__13134 = seq__12899_13092;
var G__13135 = chunk__12903_13093;
var G__13136 = count__12904_13094;
var G__13137 = (i__12905_13095 + (1));
seq__12899_13092 = G__13134;
chunk__12903_13093 = G__13135;
count__12904_13094 = G__13136;
i__12905_13095 = G__13137;
continue;
}
} else {
var G__13138 = seq__12899_13092;
var G__13139 = chunk__12903_13093;
var G__13140 = count__12904_13094;
var G__13141 = (i__12905_13095 + (1));
seq__12899_13092 = G__13138;
chunk__12903_13093 = G__13139;
count__12904_13094 = G__13140;
i__12905_13095 = G__13141;
continue;
}
} else {
var temp__5804__auto___13142 = cljs.core.seq(seq__12899_13092);
if(temp__5804__auto___13142){
var seq__12899_13143__$1 = temp__5804__auto___13142;
if(cljs.core.chunked_seq_QMARK_(seq__12899_13143__$1)){
var c__5525__auto___13144 = cljs.core.chunk_first(seq__12899_13143__$1);
var G__13145 = cljs.core.chunk_rest(seq__12899_13143__$1);
var G__13146 = c__5525__auto___13144;
var G__13147 = cljs.core.count(c__5525__auto___13144);
var G__13148 = (0);
seq__12899_13092 = G__13145;
chunk__12903_13093 = G__13146;
count__12904_13094 = G__13147;
i__12905_13095 = G__13148;
continue;
} else {
var node_13149 = cljs.core.first(seq__12899_13143__$1);
if(cljs.core.not(node_13149.shadow$old)){
var path_match_13150 = shadow.cljs.devtools.client.browser.match_paths(node_13149.getAttribute("href"),path);
if(cljs.core.truth_(path_match_13150)){
var new_link_13151 = (function (){var G__12942 = node_13149.cloneNode(true);
G__12942.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_13150),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__12942;
})();
(node_13149.shadow$old = true);

(new_link_13151.onload = ((function (seq__12899_13092,chunk__12903_13093,count__12904_13094,i__12905_13095,seq__12785,chunk__12787,count__12788,i__12789,new_link_13151,path_match_13150,node_13149,seq__12899_13143__$1,temp__5804__auto___13142,path,map__12784,map__12784__$1,msg,updates,reload_info){
return (function (e){
var seq__12943_13152 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__12945_13153 = null;
var count__12946_13154 = (0);
var i__12947_13155 = (0);
while(true){
if((i__12947_13155 < count__12946_13154)){
var map__12951_13156 = chunk__12945_13153.cljs$core$IIndexed$_nth$arity$2(null, i__12947_13155);
var map__12951_13157__$1 = cljs.core.__destructure_map(map__12951_13156);
var task_13158 = map__12951_13157__$1;
var fn_str_13159 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12951_13157__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_13160 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12951_13157__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_13161 = goog.getObjectByName(fn_str_13159,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_13160)].join(''));

(fn_obj_13161.cljs$core$IFn$_invoke$arity$2 ? fn_obj_13161.cljs$core$IFn$_invoke$arity$2(path,new_link_13151) : fn_obj_13161.call(null, path,new_link_13151));


var G__13162 = seq__12943_13152;
var G__13163 = chunk__12945_13153;
var G__13164 = count__12946_13154;
var G__13165 = (i__12947_13155 + (1));
seq__12943_13152 = G__13162;
chunk__12945_13153 = G__13163;
count__12946_13154 = G__13164;
i__12947_13155 = G__13165;
continue;
} else {
var temp__5804__auto___13166__$1 = cljs.core.seq(seq__12943_13152);
if(temp__5804__auto___13166__$1){
var seq__12943_13167__$1 = temp__5804__auto___13166__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12943_13167__$1)){
var c__5525__auto___13168 = cljs.core.chunk_first(seq__12943_13167__$1);
var G__13169 = cljs.core.chunk_rest(seq__12943_13167__$1);
var G__13170 = c__5525__auto___13168;
var G__13171 = cljs.core.count(c__5525__auto___13168);
var G__13172 = (0);
seq__12943_13152 = G__13169;
chunk__12945_13153 = G__13170;
count__12946_13154 = G__13171;
i__12947_13155 = G__13172;
continue;
} else {
var map__12952_13173 = cljs.core.first(seq__12943_13167__$1);
var map__12952_13174__$1 = cljs.core.__destructure_map(map__12952_13173);
var task_13175 = map__12952_13174__$1;
var fn_str_13176 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12952_13174__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_13177 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12952_13174__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_13178 = goog.getObjectByName(fn_str_13176,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_13177)].join(''));

(fn_obj_13178.cljs$core$IFn$_invoke$arity$2 ? fn_obj_13178.cljs$core$IFn$_invoke$arity$2(path,new_link_13151) : fn_obj_13178.call(null, path,new_link_13151));


var G__13179 = cljs.core.next(seq__12943_13167__$1);
var G__13180 = null;
var G__13181 = (0);
var G__13182 = (0);
seq__12943_13152 = G__13179;
chunk__12945_13153 = G__13180;
count__12946_13154 = G__13181;
i__12947_13155 = G__13182;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_13149);
});})(seq__12899_13092,chunk__12903_13093,count__12904_13094,i__12905_13095,seq__12785,chunk__12787,count__12788,i__12789,new_link_13151,path_match_13150,node_13149,seq__12899_13143__$1,temp__5804__auto___13142,path,map__12784,map__12784__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_13150], 0));

goog.dom.insertSiblingAfter(new_link_13151,node_13149);


var G__13183 = cljs.core.next(seq__12899_13143__$1);
var G__13184 = null;
var G__13185 = (0);
var G__13186 = (0);
seq__12899_13092 = G__13183;
chunk__12903_13093 = G__13184;
count__12904_13094 = G__13185;
i__12905_13095 = G__13186;
continue;
} else {
var G__13187 = cljs.core.next(seq__12899_13143__$1);
var G__13188 = null;
var G__13189 = (0);
var G__13190 = (0);
seq__12899_13092 = G__13187;
chunk__12903_13093 = G__13188;
count__12904_13094 = G__13189;
i__12905_13095 = G__13190;
continue;
}
} else {
var G__13191 = cljs.core.next(seq__12899_13143__$1);
var G__13192 = null;
var G__13193 = (0);
var G__13194 = (0);
seq__12899_13092 = G__13191;
chunk__12903_13093 = G__13192;
count__12904_13094 = G__13193;
i__12905_13095 = G__13194;
continue;
}
}
} else {
}
}
break;
}


var G__13195 = seq__12785;
var G__13196 = chunk__12787;
var G__13197 = count__12788;
var G__13198 = (i__12789 + (1));
seq__12785 = G__13195;
chunk__12787 = G__13196;
count__12788 = G__13197;
i__12789 = G__13198;
continue;
} else {
var G__13199 = seq__12785;
var G__13200 = chunk__12787;
var G__13201 = count__12788;
var G__13202 = (i__12789 + (1));
seq__12785 = G__13199;
chunk__12787 = G__13200;
count__12788 = G__13201;
i__12789 = G__13202;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12785);
if(temp__5804__auto__){
var seq__12785__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12785__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12785__$1);
var G__13203 = cljs.core.chunk_rest(seq__12785__$1);
var G__13204 = c__5525__auto__;
var G__13205 = cljs.core.count(c__5525__auto__);
var G__13206 = (0);
seq__12785 = G__13203;
chunk__12787 = G__13204;
count__12788 = G__13205;
i__12789 = G__13206;
continue;
} else {
var path = cljs.core.first(seq__12785__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__12953_13207 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__12957_13208 = null;
var count__12958_13209 = (0);
var i__12959_13210 = (0);
while(true){
if((i__12959_13210 < count__12958_13209)){
var node_13211 = chunk__12957_13208.cljs$core$IIndexed$_nth$arity$2(null, i__12959_13210);
if(cljs.core.not(node_13211.shadow$old)){
var path_match_13212 = shadow.cljs.devtools.client.browser.match_paths(node_13211.getAttribute("href"),path);
if(cljs.core.truth_(path_match_13212)){
var new_link_13213 = (function (){var G__12985 = node_13211.cloneNode(true);
G__12985.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_13212),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__12985;
})();
(node_13211.shadow$old = true);

(new_link_13213.onload = ((function (seq__12953_13207,chunk__12957_13208,count__12958_13209,i__12959_13210,seq__12785,chunk__12787,count__12788,i__12789,new_link_13213,path_match_13212,node_13211,path,seq__12785__$1,temp__5804__auto__,map__12784,map__12784__$1,msg,updates,reload_info){
return (function (e){
var seq__12986_13214 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__12988_13215 = null;
var count__12989_13216 = (0);
var i__12990_13217 = (0);
while(true){
if((i__12990_13217 < count__12989_13216)){
var map__12994_13218 = chunk__12988_13215.cljs$core$IIndexed$_nth$arity$2(null, i__12990_13217);
var map__12994_13219__$1 = cljs.core.__destructure_map(map__12994_13218);
var task_13220 = map__12994_13219__$1;
var fn_str_13221 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12994_13219__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_13222 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12994_13219__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_13223 = goog.getObjectByName(fn_str_13221,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_13222)].join(''));

(fn_obj_13223.cljs$core$IFn$_invoke$arity$2 ? fn_obj_13223.cljs$core$IFn$_invoke$arity$2(path,new_link_13213) : fn_obj_13223.call(null, path,new_link_13213));


var G__13224 = seq__12986_13214;
var G__13225 = chunk__12988_13215;
var G__13226 = count__12989_13216;
var G__13227 = (i__12990_13217 + (1));
seq__12986_13214 = G__13224;
chunk__12988_13215 = G__13225;
count__12989_13216 = G__13226;
i__12990_13217 = G__13227;
continue;
} else {
var temp__5804__auto___13228__$1 = cljs.core.seq(seq__12986_13214);
if(temp__5804__auto___13228__$1){
var seq__12986_13229__$1 = temp__5804__auto___13228__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12986_13229__$1)){
var c__5525__auto___13230 = cljs.core.chunk_first(seq__12986_13229__$1);
var G__13231 = cljs.core.chunk_rest(seq__12986_13229__$1);
var G__13232 = c__5525__auto___13230;
var G__13233 = cljs.core.count(c__5525__auto___13230);
var G__13234 = (0);
seq__12986_13214 = G__13231;
chunk__12988_13215 = G__13232;
count__12989_13216 = G__13233;
i__12990_13217 = G__13234;
continue;
} else {
var map__12995_13235 = cljs.core.first(seq__12986_13229__$1);
var map__12995_13236__$1 = cljs.core.__destructure_map(map__12995_13235);
var task_13237 = map__12995_13236__$1;
var fn_str_13238 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12995_13236__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_13239 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12995_13236__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_13240 = goog.getObjectByName(fn_str_13238,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_13239)].join(''));

(fn_obj_13240.cljs$core$IFn$_invoke$arity$2 ? fn_obj_13240.cljs$core$IFn$_invoke$arity$2(path,new_link_13213) : fn_obj_13240.call(null, path,new_link_13213));


var G__13241 = cljs.core.next(seq__12986_13229__$1);
var G__13242 = null;
var G__13243 = (0);
var G__13244 = (0);
seq__12986_13214 = G__13241;
chunk__12988_13215 = G__13242;
count__12989_13216 = G__13243;
i__12990_13217 = G__13244;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_13211);
});})(seq__12953_13207,chunk__12957_13208,count__12958_13209,i__12959_13210,seq__12785,chunk__12787,count__12788,i__12789,new_link_13213,path_match_13212,node_13211,path,seq__12785__$1,temp__5804__auto__,map__12784,map__12784__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_13212], 0));

goog.dom.insertSiblingAfter(new_link_13213,node_13211);


var G__13245 = seq__12953_13207;
var G__13246 = chunk__12957_13208;
var G__13247 = count__12958_13209;
var G__13248 = (i__12959_13210 + (1));
seq__12953_13207 = G__13245;
chunk__12957_13208 = G__13246;
count__12958_13209 = G__13247;
i__12959_13210 = G__13248;
continue;
} else {
var G__13249 = seq__12953_13207;
var G__13250 = chunk__12957_13208;
var G__13251 = count__12958_13209;
var G__13252 = (i__12959_13210 + (1));
seq__12953_13207 = G__13249;
chunk__12957_13208 = G__13250;
count__12958_13209 = G__13251;
i__12959_13210 = G__13252;
continue;
}
} else {
var G__13253 = seq__12953_13207;
var G__13254 = chunk__12957_13208;
var G__13255 = count__12958_13209;
var G__13256 = (i__12959_13210 + (1));
seq__12953_13207 = G__13253;
chunk__12957_13208 = G__13254;
count__12958_13209 = G__13255;
i__12959_13210 = G__13256;
continue;
}
} else {
var temp__5804__auto___13257__$1 = cljs.core.seq(seq__12953_13207);
if(temp__5804__auto___13257__$1){
var seq__12953_13258__$1 = temp__5804__auto___13257__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12953_13258__$1)){
var c__5525__auto___13259 = cljs.core.chunk_first(seq__12953_13258__$1);
var G__13260 = cljs.core.chunk_rest(seq__12953_13258__$1);
var G__13261 = c__5525__auto___13259;
var G__13262 = cljs.core.count(c__5525__auto___13259);
var G__13263 = (0);
seq__12953_13207 = G__13260;
chunk__12957_13208 = G__13261;
count__12958_13209 = G__13262;
i__12959_13210 = G__13263;
continue;
} else {
var node_13264 = cljs.core.first(seq__12953_13258__$1);
if(cljs.core.not(node_13264.shadow$old)){
var path_match_13265 = shadow.cljs.devtools.client.browser.match_paths(node_13264.getAttribute("href"),path);
if(cljs.core.truth_(path_match_13265)){
var new_link_13266 = (function (){var G__12996 = node_13264.cloneNode(true);
G__12996.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_13265),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__12996;
})();
(node_13264.shadow$old = true);

(new_link_13266.onload = ((function (seq__12953_13207,chunk__12957_13208,count__12958_13209,i__12959_13210,seq__12785,chunk__12787,count__12788,i__12789,new_link_13266,path_match_13265,node_13264,seq__12953_13258__$1,temp__5804__auto___13257__$1,path,seq__12785__$1,temp__5804__auto__,map__12784,map__12784__$1,msg,updates,reload_info){
return (function (e){
var seq__12997_13267 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__12999_13268 = null;
var count__13000_13269 = (0);
var i__13001_13270 = (0);
while(true){
if((i__13001_13270 < count__13000_13269)){
var map__13005_13271 = chunk__12999_13268.cljs$core$IIndexed$_nth$arity$2(null, i__13001_13270);
var map__13005_13272__$1 = cljs.core.__destructure_map(map__13005_13271);
var task_13273 = map__13005_13272__$1;
var fn_str_13274 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13005_13272__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_13275 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13005_13272__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_13276 = goog.getObjectByName(fn_str_13274,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_13275)].join(''));

(fn_obj_13276.cljs$core$IFn$_invoke$arity$2 ? fn_obj_13276.cljs$core$IFn$_invoke$arity$2(path,new_link_13266) : fn_obj_13276.call(null, path,new_link_13266));


var G__13277 = seq__12997_13267;
var G__13278 = chunk__12999_13268;
var G__13279 = count__13000_13269;
var G__13280 = (i__13001_13270 + (1));
seq__12997_13267 = G__13277;
chunk__12999_13268 = G__13278;
count__13000_13269 = G__13279;
i__13001_13270 = G__13280;
continue;
} else {
var temp__5804__auto___13281__$2 = cljs.core.seq(seq__12997_13267);
if(temp__5804__auto___13281__$2){
var seq__12997_13282__$1 = temp__5804__auto___13281__$2;
if(cljs.core.chunked_seq_QMARK_(seq__12997_13282__$1)){
var c__5525__auto___13283 = cljs.core.chunk_first(seq__12997_13282__$1);
var G__13284 = cljs.core.chunk_rest(seq__12997_13282__$1);
var G__13285 = c__5525__auto___13283;
var G__13286 = cljs.core.count(c__5525__auto___13283);
var G__13287 = (0);
seq__12997_13267 = G__13284;
chunk__12999_13268 = G__13285;
count__13000_13269 = G__13286;
i__13001_13270 = G__13287;
continue;
} else {
var map__13006_13288 = cljs.core.first(seq__12997_13282__$1);
var map__13006_13289__$1 = cljs.core.__destructure_map(map__13006_13288);
var task_13290 = map__13006_13289__$1;
var fn_str_13291 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13006_13289__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_13292 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13006_13289__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_13293 = goog.getObjectByName(fn_str_13291,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_13292)].join(''));

(fn_obj_13293.cljs$core$IFn$_invoke$arity$2 ? fn_obj_13293.cljs$core$IFn$_invoke$arity$2(path,new_link_13266) : fn_obj_13293.call(null, path,new_link_13266));


var G__13294 = cljs.core.next(seq__12997_13282__$1);
var G__13295 = null;
var G__13296 = (0);
var G__13297 = (0);
seq__12997_13267 = G__13294;
chunk__12999_13268 = G__13295;
count__13000_13269 = G__13296;
i__13001_13270 = G__13297;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_13264);
});})(seq__12953_13207,chunk__12957_13208,count__12958_13209,i__12959_13210,seq__12785,chunk__12787,count__12788,i__12789,new_link_13266,path_match_13265,node_13264,seq__12953_13258__$1,temp__5804__auto___13257__$1,path,seq__12785__$1,temp__5804__auto__,map__12784,map__12784__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_13265], 0));

goog.dom.insertSiblingAfter(new_link_13266,node_13264);


var G__13298 = cljs.core.next(seq__12953_13258__$1);
var G__13299 = null;
var G__13300 = (0);
var G__13301 = (0);
seq__12953_13207 = G__13298;
chunk__12957_13208 = G__13299;
count__12958_13209 = G__13300;
i__12959_13210 = G__13301;
continue;
} else {
var G__13302 = cljs.core.next(seq__12953_13258__$1);
var G__13303 = null;
var G__13304 = (0);
var G__13305 = (0);
seq__12953_13207 = G__13302;
chunk__12957_13208 = G__13303;
count__12958_13209 = G__13304;
i__12959_13210 = G__13305;
continue;
}
} else {
var G__13306 = cljs.core.next(seq__12953_13258__$1);
var G__13307 = null;
var G__13308 = (0);
var G__13309 = (0);
seq__12953_13207 = G__13306;
chunk__12957_13208 = G__13307;
count__12958_13209 = G__13308;
i__12959_13210 = G__13309;
continue;
}
}
} else {
}
}
break;
}


var G__13310 = cljs.core.next(seq__12785__$1);
var G__13311 = null;
var G__13312 = (0);
var G__13313 = (0);
seq__12785 = G__13310;
chunk__12787 = G__13311;
count__12788 = G__13312;
i__12789 = G__13313;
continue;
} else {
var G__13314 = cljs.core.next(seq__12785__$1);
var G__13315 = null;
var G__13316 = (0);
var G__13317 = (0);
seq__12785 = G__13314;
chunk__12787 = G__13315;
count__12788 = G__13316;
i__12789 = G__13317;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__13007){
var map__13008 = p__13007;
var map__13008__$1 = cljs.core.__destructure_map(map__13008);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13008__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__13009,done,error){
var map__13010 = p__13009;
var map__13010__$1 = cljs.core.__destructure_map(map__13010);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13010__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__13011,done,error){
var map__13012 = p__13011;
var map__13012__$1 = cljs.core.__destructure_map(map__13012);
var msg = map__13012__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13012__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13012__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13012__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__13013){
var map__13014 = p__13013;
var map__13014__$1 = cljs.core.__destructure_map(map__13014);
var src = map__13014__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13014__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__13015 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__13015) : done.call(null, G__13015));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__13016){
var map__13017 = p__13016;
var map__13017__$1 = cljs.core.__destructure_map(map__13017);
var msg__$1 = map__13017__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13017__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null, sources_to_load));
}catch (e13018){var ex = e13018;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null, ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__13019){
var map__13020 = p__13019;
var map__13020__$1 = cljs.core.__destructure_map(map__13020);
var env = map__13020__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13020__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__13021){
var map__13022 = p__13021;
var map__13022__$1 = cljs.core.__destructure_map(map__13022);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13022__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13022__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__13023){
var map__13024 = p__13023;
var map__13024__$1 = cljs.core.__destructure_map(map__13024);
var svc = map__13024__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13024__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
