new Promise((resolve, reject) => {
    var mensaje1 = "Se despierta"
    setTimeout(() => {
        if (mensaje1 != undefined) {
            return resolve(mensaje1)
        } else {
            return reject(new Error("llega tarde a sus compromisos"))
        }
    }, 1000)
}).then((mensaje1) => {
    console.log(mensaje1)
    var mensaje2 = "desayuna"
    setTimeout(() => {
        if (mensaje2 != undefined) {
            return resolve(mensaje2)
        } else {
            return reject(new Error("se muere de hambre"))
        }
    }, 1000)
}).then((mensaje2) => {
    console.log(mensaje2)
    var mensaje3 = "almuerza"
    setTimeout(() => {
        if (mensaje3 != undefined) {
            return resolve(mensaje3)
        } else {
            return reject(new Error("Funeral de Juanito"))
        }
    }, 1000)
}).then((mensaje3) => {
    console.log(mensaje3)
    var mensaje4 = "trabajar"
    setTimeout(() => {
        if (mensaje4 != undefined) {
            return resolve(mensaje4)
        } else {
            return reject(new Error("Lo despiden"))
        }
    }, 1000)
}).then((mensaje4) => {
    console.log(mensaje2)
    var mensaje3 = "almuerza"
    setTimeout(() => {
        if (mensaje3 != undefined) {
            return resolve(mensaje3)
        } else {
            return reject(new Error("Funeral de Juanito"))
        }
    }, 1000)