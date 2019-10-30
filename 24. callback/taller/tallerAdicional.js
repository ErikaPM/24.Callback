let datosObtenidos = [
    {
        nombre: "Kalet",
        edad: "23",
        ciudad: "Bogota"
    }, {
        nombre: "Danna",
        edad: "26",
        ciudad: "Cucuta"
    }, {
        nombre: "Gina",
        edad: "17",
        ciudad: "Leticia"
    }, {
        nombre: "Fredy",
        edad: "35",
        ciudad: "Medellin"
    }
    , {
        nombre: "Diana",
        edad: "30",
        ciudad: "Pasto"
    }
    , {
        nombre: "Andres",
        edad: "38",
        ciudad: "Bogota"
    }
]

// setTimeout(function () {
//     if (datosObtenidos != undefined) {
//         console.log("datos obtenidos")
//         setTimeout(function () {
//             if (datosObtenidos.length > 3) {
//                 console.log("filtrando datos...")
//                 var datosFiltrados = datosObtenidos.slice(1, 3);
//                 setTimeout(function () {
//                     console.log("validando datos...")
//                     var objetosCorrectos = true;
//                     for (i = 0; i < datosFiltrados.length; i++) {
//                         var objeto = datosFiltrados[i];
//                         if (!objeto.hasOwnProperty("nombre") || !objeto.hasOwnProperty("edad") || !objeto.hasOwnProperty("ciudad")) {
//                             objetosCorrectos = false;
//                         }
//                     }
//                     if (objetosCorrectos) {
//                         setTimeout(function () {
//                             console.log("mostrando datos...")
//                             console.log("-------------------------------------")
//                             console.log("|  nombre  |  edad  |  ciudad  |")
//                             for (i = 0; i < datosFiltrados.length; i++) {
//                                 console.log("-------------------------------------")
//                                 console.log("|  " + datosFiltrados[i].nombre + "  |  " + datosFiltrados[i].edad + "  |  " + datosFiltrados[i].ciudad + "  |")
//                                 console.log("-------------------------------------")
//                             }
//                         }, 2000)
//                     } else {
//                         console.log("los datos estan incompletos")
//                     }
//                 }, 2000)
//             } else {
//                 console.log("datos insuficientes para ser filtrados")
//             }
//         }, 2000)
//     } else {
//         console.log("ejecucion detenida, no se encontraron datos")
//     }
// }, 2000)

//----PROMISE
// let valor

new Promise((resolve, reject) => {
    setTimeout(() => {
        let mensajeObtenido = ("datos obtenidos")
        if (datosObtenidos != undefined) {
            return resolve(mensajeObtenido)
        } else {
            return reject(new Error("los datos estan incompletos"))
        }
    }, 1000)
}).then((mensajeObtenido) => {
    console.log(mensajeObtenido)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let anchoMensaje = ("filtrando datos...")
            if (datosObtenidos.length > 3) {
                return resolve(anchoMensaje)
            } else {
                return reject(new Error("datos insuficientes para ser filtrados"))
            }
        }, 2000);
    }).then((anchoMensaje) => {
        console.log(anchoMensaje)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let datosFiltrados = datosObtenidos.slice(1, 3)
                let objetosCorrectos = true;
                for (i = 0; i < datosFiltrados.length; i++) {
                    var objeto = datosFiltrados[i];
                    if (!objeto.hasOwnProperty("nombre") || !objeto.hasOwnProperty("edad") || !objeto.hasOwnProperty("ciudad")) {
                        objetosCorrectos = false;
                        let validarMensaje = ("validando datos...")
                        if (objetosCorrectos) {
                            setTimeout(function () {
                                console.log("mostrando datos...")
                                console.log("-------------------------------------")
                                console.log("|  nombre  |  edad  |  ciudad  |")
                                for (i = 0; i < datosFiltrados.length; i++) {
                                    console.log("-------------------------------------")
                                    console.log("|  " + datosFiltrados[i].nombre + "  |  " + datosFiltrados[i].edad + "  |  " + datosFiltrados[i].ciudad + "  |")
                                    console.log("-------------------------------------")

                                }, 2000)
                        })

        })
    })
})
