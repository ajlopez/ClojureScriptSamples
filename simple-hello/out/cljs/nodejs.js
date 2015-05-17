// Compiled by ClojureScript 0.0-3264 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__986__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__986 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__987__i = 0, G__987__a = new Array(arguments.length -  0);
while (G__987__i < G__987__a.length) {G__987__a[G__987__i] = arguments[G__987__i + 0]; ++G__987__i;}
  args = new cljs.core.IndexedSeq(G__987__a,0);
} 
return G__986__delegate.call(this,args);};
G__986.cljs$lang$maxFixedArity = 0;
G__986.cljs$lang$applyTo = (function (arglist__988){
var args = cljs.core.seq(arglist__988);
return G__986__delegate(args);
});
G__986.cljs$core$IFn$_invoke$arity$variadic = G__986__delegate;
return G__986;
})()
;
});

//# sourceMappingURL=nodejs.js.map