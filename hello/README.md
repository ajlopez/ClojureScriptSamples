# hello-clojure

A simple `Hello, world` in the browser.

## Usage

Compile
```
lein cljsbuild once
```

Clean and Compile
```
lein cljsbuild clean
lein cljsbuild once
```

Run: open `resources/public/index.html` in your browser.

Run interactive REPL based on Rhino (JavaScript engine in Java)
```
lein cljsbuild repl-rhino
```

## License

Copyright © 2014 Angel J Lopez

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
