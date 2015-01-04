(ns mycljsprj.core)

(enable-console-print!)

(println "Hello world!")

(def add1 (fn [x] (+ x 1)))

(add1 5)

(let [inc (fn [x] (+ x 1))]
    (inc 4))
    
    