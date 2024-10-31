goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19324){
var map__19325 = p__19324;
var map__19325__$1 = cljs.core.__destructure_map(map__19325);
var m = map__19325__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19325__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19325__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19326_19819 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19327_19820 = null;
var count__19328_19821 = (0);
var i__19329_19822 = (0);
while(true){
if((i__19329_19822 < count__19328_19821)){
var f_19823 = chunk__19327_19820.cljs$core$IIndexed$_nth$arity$2(null, i__19329_19822);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19823], 0));


var G__19824 = seq__19326_19819;
var G__19825 = chunk__19327_19820;
var G__19826 = count__19328_19821;
var G__19827 = (i__19329_19822 + (1));
seq__19326_19819 = G__19824;
chunk__19327_19820 = G__19825;
count__19328_19821 = G__19826;
i__19329_19822 = G__19827;
continue;
} else {
var temp__5804__auto___19828 = cljs.core.seq(seq__19326_19819);
if(temp__5804__auto___19828){
var seq__19326_19829__$1 = temp__5804__auto___19828;
if(cljs.core.chunked_seq_QMARK_(seq__19326_19829__$1)){
var c__5525__auto___19830 = cljs.core.chunk_first(seq__19326_19829__$1);
var G__19831 = cljs.core.chunk_rest(seq__19326_19829__$1);
var G__19832 = c__5525__auto___19830;
var G__19833 = cljs.core.count(c__5525__auto___19830);
var G__19834 = (0);
seq__19326_19819 = G__19831;
chunk__19327_19820 = G__19832;
count__19328_19821 = G__19833;
i__19329_19822 = G__19834;
continue;
} else {
var f_19835 = cljs.core.first(seq__19326_19829__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19835], 0));


var G__19836 = cljs.core.next(seq__19326_19829__$1);
var G__19837 = null;
var G__19838 = (0);
var G__19839 = (0);
seq__19326_19819 = G__19836;
chunk__19327_19820 = G__19837;
count__19328_19821 = G__19838;
i__19329_19822 = G__19839;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19840 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19840], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19840)))?cljs.core.second(arglists_19840):arglists_19840)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19352_19844 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19353_19845 = null;
var count__19354_19846 = (0);
var i__19355_19847 = (0);
while(true){
if((i__19355_19847 < count__19354_19846)){
var vec__19366_19848 = chunk__19353_19845.cljs$core$IIndexed$_nth$arity$2(null, i__19355_19847);
var name_19849 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19366_19848,(0),null);
var map__19369_19850 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19366_19848,(1),null);
var map__19369_19851__$1 = cljs.core.__destructure_map(map__19369_19850);
var doc_19852 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19369_19851__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19853 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19369_19851__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19849], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19853], 0));

if(cljs.core.truth_(doc_19852)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19852], 0));
} else {
}


var G__19854 = seq__19352_19844;
var G__19855 = chunk__19353_19845;
var G__19856 = count__19354_19846;
var G__19857 = (i__19355_19847 + (1));
seq__19352_19844 = G__19854;
chunk__19353_19845 = G__19855;
count__19354_19846 = G__19856;
i__19355_19847 = G__19857;
continue;
} else {
var temp__5804__auto___19858 = cljs.core.seq(seq__19352_19844);
if(temp__5804__auto___19858){
var seq__19352_19859__$1 = temp__5804__auto___19858;
if(cljs.core.chunked_seq_QMARK_(seq__19352_19859__$1)){
var c__5525__auto___19860 = cljs.core.chunk_first(seq__19352_19859__$1);
var G__19861 = cljs.core.chunk_rest(seq__19352_19859__$1);
var G__19862 = c__5525__auto___19860;
var G__19863 = cljs.core.count(c__5525__auto___19860);
var G__19864 = (0);
seq__19352_19844 = G__19861;
chunk__19353_19845 = G__19862;
count__19354_19846 = G__19863;
i__19355_19847 = G__19864;
continue;
} else {
var vec__19370_19866 = cljs.core.first(seq__19352_19859__$1);
var name_19867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19370_19866,(0),null);
var map__19373_19868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19370_19866,(1),null);
var map__19373_19869__$1 = cljs.core.__destructure_map(map__19373_19868);
var doc_19870 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19373_19869__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19871 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19373_19869__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19867], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19871], 0));

if(cljs.core.truth_(doc_19870)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19870], 0));
} else {
}


var G__19872 = cljs.core.next(seq__19352_19859__$1);
var G__19873 = null;
var G__19874 = (0);
var G__19875 = (0);
seq__19352_19844 = G__19872;
chunk__19353_19845 = G__19873;
count__19354_19846 = G__19874;
i__19355_19847 = G__19875;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__19374 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19375 = null;
var count__19376 = (0);
var i__19377 = (0);
while(true){
if((i__19377 < count__19376)){
var role = chunk__19375.cljs$core$IIndexed$_nth$arity$2(null, i__19377);
var temp__5804__auto___19876__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19876__$1)){
var spec_19877 = temp__5804__auto___19876__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19877)], 0));
} else {
}


var G__19878 = seq__19374;
var G__19879 = chunk__19375;
var G__19880 = count__19376;
var G__19881 = (i__19377 + (1));
seq__19374 = G__19878;
chunk__19375 = G__19879;
count__19376 = G__19880;
i__19377 = G__19881;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__19374);
if(temp__5804__auto____$1){
var seq__19374__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__19374__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__19374__$1);
var G__19882 = cljs.core.chunk_rest(seq__19374__$1);
var G__19883 = c__5525__auto__;
var G__19884 = cljs.core.count(c__5525__auto__);
var G__19885 = (0);
seq__19374 = G__19882;
chunk__19375 = G__19883;
count__19376 = G__19884;
i__19377 = G__19885;
continue;
} else {
var role = cljs.core.first(seq__19374__$1);
var temp__5804__auto___19886__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19886__$2)){
var spec_19887 = temp__5804__auto___19886__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19887)], 0));
} else {
}


var G__19888 = cljs.core.next(seq__19374__$1);
var G__19889 = null;
var G__19890 = (0);
var G__19891 = (0);
seq__19374 = G__19888;
chunk__19375 = G__19889;
count__19376 = G__19890;
i__19377 = G__19891;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__19447 = datafied_throwable;
var map__19447__$1 = cljs.core.__destructure_map(map__19447);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19447__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19447__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19447__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19448 = cljs.core.last(via);
var map__19448__$1 = cljs.core.__destructure_map(map__19448);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19448__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19448__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19448__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19449 = data;
var map__19449__$1 = cljs.core.__destructure_map(map__19449);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19449__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19449__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19449__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19450 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__19450__$1 = cljs.core.__destructure_map(map__19450);
var top_data = map__19450__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19450__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__19539 = phase;
var G__19539__$1 = (((G__19539 instanceof cljs.core.Keyword))?G__19539.fqn:null);
switch (G__19539__$1) {
case "read-source":
var map__19568 = data;
var map__19568__$1 = cljs.core.__destructure_map(map__19568);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19568__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19568__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19633 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__19633__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19633,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19633);
var G__19633__$2 = (cljs.core.truth_((function (){var fexpr__19650 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19650.cljs$core$IFn$_invoke$arity$1 ? fexpr__19650.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19650.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19633__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19633__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19633__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19633__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19669 = top_data;
var G__19669__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19669,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19669);
var G__19669__$2 = (cljs.core.truth_((function (){var fexpr__19679 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19679.cljs$core$IFn$_invoke$arity$1 ? fexpr__19679.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19679.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19669__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19669__$1);
var G__19669__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19669__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19669__$2);
var G__19669__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19669__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19669__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19669__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19669__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19701 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19701,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19701,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19701,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19701,(3),null);
var G__19704 = top_data;
var G__19704__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19704,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19704);
var G__19704__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19704__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19704__$1);
var G__19704__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19704__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19704__$2);
var G__19704__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19704__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19704__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19704__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19704__$4;
}

break;
case "execution":
var vec__19717 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19717,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19717,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19717,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19717,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__19421_SHARP_){
var or__5002__auto__ = (p1__19421_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__19720 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19720.cljs$core$IFn$_invoke$arity$1 ? fexpr__19720.cljs$core$IFn$_invoke$arity$1(p1__19421_SHARP_) : fexpr__19720.call(null, p1__19421_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__19733 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19733__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19733,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19733);
var G__19733__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19733__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19733__$1);
var G__19733__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19733__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19733__$2);
var G__19733__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19733__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19733__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19733__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19733__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19539__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19751){
var map__19752 = p__19751;
var map__19752__$1 = cljs.core.__destructure_map(map__19752);
var triage_data = map__19752__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19752__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19752__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19752__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19752__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19752__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19752__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19752__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19752__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__19758 = phase;
var G__19758__$1 = (((G__19758 instanceof cljs.core.Keyword))?G__19758.fqn:null);
switch (G__19758__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__19759 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__19760 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19761 = loc;
var G__19762 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19763_19914 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19764_19915 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19765_19916 = true;
var _STAR_print_fn_STAR__temp_val__19766_19917 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19765_19916);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19766_19917);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19745_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19745_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19764_19915);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19763_19914);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19759,G__19760,G__19761,G__19762) : format.call(null, G__19759,G__19760,G__19761,G__19762));

break;
case "macroexpansion":
var G__19768 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__19769 = cause_type;
var G__19770 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19771 = loc;
var G__19772 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19768,G__19769,G__19770,G__19771,G__19772) : format.call(null, G__19768,G__19769,G__19770,G__19771,G__19772));

break;
case "compile-syntax-check":
var G__19773 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19774 = cause_type;
var G__19775 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19776 = loc;
var G__19777 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19773,G__19774,G__19775,G__19776,G__19777) : format.call(null, G__19773,G__19774,G__19775,G__19776,G__19777));

break;
case "compilation":
var G__19778 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19779 = cause_type;
var G__19780 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19781 = loc;
var G__19782 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19778,G__19779,G__19780,G__19781,G__19782) : format.call(null, G__19778,G__19779,G__19780,G__19781,G__19782));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19783 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19784 = symbol;
var G__19785 = loc;
var G__19786 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19787_19922 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19788_19923 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19789_19924 = true;
var _STAR_print_fn_STAR__temp_val__19790_19925 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19789_19924);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19790_19925);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19749_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19749_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19788_19923);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19787_19922);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19783,G__19784,G__19785,G__19786) : format.call(null, G__19783,G__19784,G__19785,G__19786));
} else {
var G__19795 = "Execution error%s at %s(%s).\n%s\n";
var G__19796 = cause_type;
var G__19797 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19798 = loc;
var G__19799 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19795,G__19796,G__19797,G__19798,G__19799) : format.call(null, G__19795,G__19796,G__19797,G__19798,G__19799));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19758__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
