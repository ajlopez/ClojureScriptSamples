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
var seq__5649_5661 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__5650_5662 = null;
var count__5651_5663 = (0);
var i__5652_5664 = (0);
while(true){
if((i__5652_5664 < count__5651_5663)){
var f_5665 = cljs.core._nth.call(null,chunk__5650_5662,i__5652_5664);
cljs.core.println.call(null,"  ",f_5665);

var G__5666 = seq__5649_5661;
var G__5667 = chunk__5650_5662;
var G__5668 = count__5651_5663;
var G__5669 = (i__5652_5664 + (1));
seq__5649_5661 = G__5666;
chunk__5650_5662 = G__5667;
count__5651_5663 = G__5668;
i__5652_5664 = G__5669;
continue;
} else {
var temp__4422__auto___5670 = cljs.core.seq.call(null,seq__5649_5661);
if(temp__4422__auto___5670){
var seq__5649_5671__$1 = temp__4422__auto___5670;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5649_5671__$1)){
var c__3729__auto___5672 = cljs.core.chunk_first.call(null,seq__5649_5671__$1);
var G__5673 = cljs.core.chunk_rest.call(null,seq__5649_5671__$1);
var G__5674 = c__3729__auto___5672;
var G__5675 = cljs.core.count.call(null,c__3729__auto___5672);
var G__5676 = (0);
seq__5649_5661 = G__5673;
chunk__5650_5662 = G__5674;
count__5651_5663 = G__5675;
i__5652_5664 = G__5676;
continue;
} else {
var f_5677 = cljs.core.first.call(null,seq__5649_5671__$1);
cljs.core.println.call(null,"  ",f_5677);

var G__5678 = cljs.core.next.call(null,seq__5649_5671__$1);
var G__5679 = null;
var G__5680 = (0);
var G__5681 = (0);
seq__5649_5661 = G__5678;
chunk__5650_5662 = G__5679;
count__5651_5663 = G__5680;
i__5652_5664 = G__5681;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_5682 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3360__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3360__auto__)){
return or__3360__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_5682);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_5682)))?cljs.core.second.call(null,arglists_5682):arglists_5682));
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
var seq__5653 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__5654 = null;
var count__5655 = (0);
var i__5656 = (0);
while(true){
if((i__5656 < count__5655)){
var vec__5657 = cljs.core._nth.call(null,chunk__5654,i__5656);
var name = cljs.core.nth.call(null,vec__5657,(0),null);
var map__5658 = cljs.core.nth.call(null,vec__5657,(1),null);
var map__5658__$1 = ((cljs.core.seq_QMARK_.call(null,map__5658))?cljs.core.apply.call(null,cljs.core.hash_map,map__5658):map__5658);
var doc = cljs.core.get.call(null,map__5658__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__5658__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__5683 = seq__5653;
var G__5684 = chunk__5654;
var G__5685 = count__5655;
var G__5686 = (i__5656 + (1));
seq__5653 = G__5683;
chunk__5654 = G__5684;
count__5655 = G__5685;
i__5656 = G__5686;
continue;
} else {
var temp__4422__auto__ = cljs.core.seq.call(null,seq__5653);
if(temp__4422__auto__){
var seq__5653__$1 = temp__4422__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5653__$1)){
var c__3729__auto__ = cljs.core.chunk_first.call(null,seq__5653__$1);
var G__5687 = cljs.core.chunk_rest.call(null,seq__5653__$1);
var G__5688 = c__3729__auto__;
var G__5689 = cljs.core.count.call(null,c__3729__auto__);
var G__5690 = (0);
seq__5653 = G__5687;
chunk__5654 = G__5688;
count__5655 = G__5689;
i__5656 = G__5690;
continue;
} else {
var vec__5659 = cljs.core.first.call(null,seq__5653__$1);
var name = cljs.core.nth.call(null,vec__5659,(0),null);
var map__5660 = cljs.core.nth.call(null,vec__5659,(1),null);
var map__5660__$1 = ((cljs.core.seq_QMARK_.call(null,map__5660))?cljs.core.apply.call(null,cljs.core.hash_map,map__5660):map__5660);
var doc = cljs.core.get.call(null,map__5660__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__5660__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__5691 = cljs.core.next.call(null,seq__5653__$1);
var G__5692 = null;
var G__5693 = (0);
var G__5694 = (0);
seq__5653 = G__5691;
chunk__5654 = G__5692;
count__5655 = G__5693;
i__5656 = G__5694;
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
