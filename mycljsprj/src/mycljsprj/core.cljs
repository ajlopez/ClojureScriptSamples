(ns mycljsprj.core)

(enable-console-print!)

(println "Hello world!")

(let [inc (fn [x] (+ x 1))]
    (inc 4))
    
    