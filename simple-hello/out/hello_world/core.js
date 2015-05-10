// Compiled by ClojureScript 0.0-3264 {}
goog.provide('hello_world.core');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
if(typeof hello_world.core.conn !== 'undefined'){
} else {
hello_world.core.conn = clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
}
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Hello World!");
hello_world.core.foo = (function hello_world$core$foo(a,b){
return (a * b);
});

//# sourceMappingURL=core.js.map