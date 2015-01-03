# mycljsprj

Created with

```
lein new mies mycljsprj
cd mycljsprj
```

Then, compile once:

```
lein trampoline run -m clojure.main -e "(compile 'cljs.repl.node) (compile 'cljs.core)"
```

Launch the node REPL:

```
lein trampoline run -m clojure.main scripts/repl.clj
```


## References

- [The Old Way, The New Way](http://swannodette.github.io/2014/12/31/the-old-way-the-new-way/)
- [The Essence of ClojureScript Redux](http://swannodette.github.io/2015/01/02/the-essence-of-clojurescript-redux/)

FIXME: Write a one-line description of your library/project.

## Overview

FIXME: Write a paragraph about the library/project and highlight its goals.

## Setup

First-time Clojurescript developers, add the following to your bash .profile:

    LEIN_FAST_TRAMPOLINE=y
    export LEIN_FAST_TRAMPOLINE
    alias cljsbuild="lein trampoline cljsbuild $@"

To avoid compiling ClojureScript for each build, AOT Clojurescript locally in your project with the following:

    ./scripts/compile_cljsc

Subsequent dev builds can use:

    lein cljsbuild auto dev

To start a Node REPL (requires rlwrap):

    ./scripts/repl

Clean project specific out:

    lein clean
     
Optimized builds:

    lein cljsbuild once release     

For more info on Cljs compilation, read [Waitin'](http://swannodette.github.io/2014/12/22/waitin/).

## License

Copyright © 2014 FIXME

Distributed under the Eclipse Public License either version 1.0 or (at your option) any later version.
