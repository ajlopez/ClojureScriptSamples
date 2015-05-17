// Compiled by ClojureScript 0.0-3264 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4422__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4422__auto__)){
var ns = temp__4422__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__1195_1207 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1196_1208 = null;
var count__1197_1209 = (0);
var i__1198_1210 = (0);
while(true){
if((i__1198_1210 < count__1197_1209)){
var f_1211 = cljs.core._nth.call(null,chunk__1196_1208,i__1198_1210);
cljs.core.println.call(null,"  ",f_1211);

var G__1212 = seq__1195_1207;
var G__1213 = chunk__1196_1208;
var G__1214 = count__1197_1209;
var G__1215 = (i__1198_1210 + (1));
seq__1195_1207 = G__1212;
chunk__1196_1208 = G__1213;
count__1197_1209 = G__1214;
i__1198_1210 = G__1215;
continue;
} else {
var temp__4422__auto___1216 = cljs.core.seq.call(null,seq__1195_1207);
if(temp__4422__auto___1216){
var seq__1195_1217__$1 = temp__4422__auto___1216;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1195_1217__$1)){
var c__3729__auto___1218 = cljs.core.chunk_first.call(null,seq__1195_1217__$1);
var G__1219 = cljs.core.chunk_rest.call(null,seq__1195_1217__$1);
var G__1220 = c__3729__auto___1218;
var G__1221 = cljs.core.count.call(null,c__3729__auto___1218);
var G__1222 = (0);
seq__1195_1207 = G__1219;
chunk__1196_1208 = G__1220;
count__1197_1209 = G__1221;
i__1198_1210 = G__1222;
continue;
} else {
var f_1223 = cljs.core.first.call(null,seq__1195_1217__$1);
cljs.core.println.call(null,"  ",f_1223);

var G__1224 = cljs.core.next.call(null,seq__1195_1217__$1);
var G__1225 = null;
var G__1226 = (0);
var G__1227 = (0);
seq__1195_1207 = G__1224;
chunk__1196_1208 = G__1225;
count__1197_1209 = G__1226;
i__1198_1210 = G__1227;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_1228 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3360__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3360__auto__)){
return or__3360__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_1228);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_1228)))?cljs.core.second.call(null,arglists_1228):arglists_1228));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__1199 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1200 = null;
var count__1201 = (0);
var i__1202 = (0);
while(true){
if((i__1202 < count__1201)){
var vec__1203 = cljs.core._nth.call(null,chunk__1200,i__1202);
var name = cljs.core.nth.call(null,vec__1203,(0),null);
var map__1204 = cljs.core.nth.call(null,vec__1203,(1),null);
var map__1204__$1 = ((cljs.core.seq_QMARK_.call(null,map__1204))?cljs.core.apply.call(null,cljs.core.hash_map,map__1204):map__1204);
var doc = cljs.core.get.call(null,map__1204__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__1204__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__1229 = seq__1199;
var G__1230 = chunk__1200;
var G__1231 = count__1201;
var G__1232 = (i__1202 + (1));
seq__1199 = G__1229;
chunk__1200 = G__1230;
count__1201 = G__1231;
i__1202 = G__1232;
continue;
} else {
var temp__4422__auto__ = cljs.core.seq.call(null,seq__1199);
if(temp__4422__auto__){
var seq__1199__$1 = temp__4422__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1199__$1)){
var c__3729__auto__ = cljs.core.chunk_first.call(null,seq__1199__$1);
var G__1233 = cljs.core.chunk_rest.call(null,seq__1199__$1);
var G__1234 = c__3729__auto__;
var G__1235 = cljs.core.count.call(null,c__3729__auto__);
var G__1236 = (0);
seq__1199 = G__1233;
chunk__1200 = G__1234;
count__1201 = G__1235;
i__1202 = G__1236;
continue;
} else {
var vec__1205 = cljs.core.first.call(null,seq__1199__$1);
var name = cljs.core.nth.call(null,vec__1205,(0),null);
var map__1206 = cljs.core.nth.call(null,vec__1205,(1),null);
var map__1206__$1 = ((cljs.core.seq_QMARK_.call(null,map__1206))?cljs.core.apply.call(null,cljs.core.hash_map,map__1206):map__1206);
var doc = cljs.core.get.call(null,map__1206__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__1206__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__1237 = cljs.core.next.call(null,seq__1199__$1);
var G__1238 = null;
var G__1239 = (0);
var G__1240 = (0);
seq__1199 = G__1237;
chunk__1200 = G__1238;
count__1201 = G__1239;
i__1202 = G__1240;
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
}
});

//# sourceMappingURL=repl.js.map