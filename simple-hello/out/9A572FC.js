goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__981__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__981 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__982__i = 0, G__982__a = new Array(arguments.length -  0);
while (G__982__i < G__982__a.length) {G__982__a[G__982__i] = arguments[G__982__i + 0]; ++G__982__i;}
  args = new cljs.core.IndexedSeq(G__982__a,0);
} 
return G__981__delegate.call(this,args);};
G__981.cljs$lang$maxFixedArity = 0;
G__981.cljs$lang$applyTo = (function (arglist__983){
var args = cljs.core.seq(arglist__983);
return G__981__delegate(args);
});
G__981.cljs$core$IFn$_invoke$arity$variadic = G__981__delegate;
return G__981;
})()
;
});
