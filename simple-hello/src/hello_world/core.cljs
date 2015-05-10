(ns hello-world.core
    (:require [cljs.nodejs :as nodejs]))
    
(nodejs/enable-console-print!)

(defn -main [& args]
    (println "Hello world!"))
    
(set! *main-cli-fn* -main)
