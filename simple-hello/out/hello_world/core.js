// Compiled by ClojureScript 0.0-3264 {:target :nodejs}
goog.provide('hello_world.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
cljs.nodejs.enable_util_print_BANG_.call(null);
hello_world.core._main = (function hello_world$core$_main(){
var argseq__3872__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return hello_world.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__3872__auto__);
});

hello_world.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.println.call(null,"Hello world!");
});

hello_world.core._main.cljs$lang$maxFixedArity = (0);

hello_world.core._main.cljs$lang$applyTo = (function (seq1243){
return hello_world.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1243));
});
cljs.core._STAR_main_cli_fn_STAR_ = hello_world.core._main;

//# sourceMappingURL=core.js.map