(require 'cljs.build.api)

(cljs.build.api/build "src"
    {:output-to "out/main.js"
     :optimization :advanced})

(System/exit 0)
