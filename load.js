'use strict'
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js")
                        .then(
                            response => console.log("Registro Exitoso")

                        ).catch(
                            err=> console.log(err)
                        )
}