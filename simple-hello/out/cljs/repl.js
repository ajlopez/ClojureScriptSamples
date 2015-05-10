// Compiled by ClojureScript 0.0-3264 {}
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
var seq__152_164 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__153_165 = null;
var count__154_166 = (0);
var i__155_167 = (0);
while(true){
if((i__155_167 < count__154_166)){
var f_168 = cljs.core._nth.call(null,chunk__153_165,i__155_167);
cljs.core.println.call(null,"  ",f_168);

var G__169 = seq__152_164;
var G__170 = chunk__153_165;
var G__171 = count__154_166;
var G__172 = (i__155_167 + (1));
seq__152_164 = G__169;
chunk__153_165 = G__170;
count__154_166 = G__171;
i__155_167 = G__172;
continue;
} else {
var temp__4422__auto___173 = cljs.core.seq.call(null,seq__152_164);
if(temp__4422__auto___173){
var seq__152_174__$1 = temp__4422__auto___173;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__152_174__$1)){
var c__3729__auto___175 = cljs.core.chunk_first.call(null,seq__152_174__$1);
var G__176 = cljs.core.chunk_rest.call(null,seq__152_174__$1);
var G__177 = c__3729__auto___175;
var G__178 = cljs.core.count.call(null,c__3729__auto___175);
var G__179 = (0);
seq__152_164 = G__176;
chunk__153_165 = G__177;
count__154_166 = G__178;
i__155_167 = G__179;
continue;
} else {
var f_180 = cljs.core.first.call(null,seq__152_174__$1);
cljs.core.println.call(null,"  ",f_180);

var G__181 = cljs.core.next.call(null,seq__152_174__$1);
var G__182 = null;
var G__183 = (0);
var G__184 = (0);
seq__152_164 = G__181;
chunk__153_165 = G__182;
count__154_166 = G__183;
i__155_167 = G__184;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_185 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3360__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3360__auto__)){
return or__3360__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_185);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_185)))?cljs.core.second.call(null,arglists_185):arglists_185));
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
var seq__156 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__157 = null;
var count__158 = (0);
var i__159 = (0);
while(true){
if((i__159 < count__158)){
var vec__160 = cljs.core._nth.call(null,chunk__157,i__159);
var name = cljs.core.nth.call(null,vec__160,(0),null);
var map__161 = cljs.core.nth.call(null,vec__160,(1),null);
var map__161__$1 = ((cljs.core.seq_QMARK_.call(null,map__161))?cljs.core.apply.call(null,cljs.core.hash_map,map__161):map__161);
var doc = cljs.core.get.call(null,map__161__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__161__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__186 = seq__156;
var G__187 = chunk__157;
var G__188 = count__158;
var G__189 = (i__159 + (1));
seq__156 = G__186;
chunk__157 = G__187;
count__158 = G__188;
i__159 = G__189;
continue;
} else {
var temp__4422__auto__ = cljs.core.seq.call(null,seq__156);
if(temp__4422__auto__){
var seq__156__$1 = temp__4422__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__156__$1)){
var c__3729__auto__ = cljs.core.chunk_first.call(null,seq__156__$1);
var G__190 = cljs.core.chunk_rest.call(null,seq__156__$1);
var G__191 = c__3729__auto__;
var G__192 = cljs.core.count.call(null,c__3729__auto__);
var G__193 = (0);
seq__156 = G__190;
chunk__157 = G__191;
count__158 = G__192;
i__159 = G__193;
continue;
} else {
var vec__162 = cljs.core.first.call(null,seq__156__$1);
var name = cljs.core.nth.call(null,vec__162,(0),null);
var map__163 = cljs.core.nth.call(null,vec__162,(1),null);
var map__163__$1 = ((cljs.core.seq_QMARK_.call(null,map__163))?cljs.core.apply.call(null,cljs.core.hash_map,map__163):map__163);
var doc = cljs.core.get.call(null,map__163__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__163__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__194 = cljs.core.next.call(null,seq__156__$1);
var G__195 = null;
var G__196 = (0);
var G__197 = (0);
seq__156 = G__194;
chunk__157 = G__195;
count__158 = G__196;
i__159 = G__197;
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