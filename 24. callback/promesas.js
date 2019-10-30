new Promise((resolve, reject) => {
    var msg = "1. Soy el primer mensaje"
    setTimeout(() => {
        if (msg != undefined) {
            return resolve(msg)
        } else {
            return reject(new Error("no existe el primer mensaje"))
        }
    }, 10000)
}).then((msg) => {
    console.log(msg)
    var msg1 = "2. Soy el segundo mensaje"
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (msg != undefined) {
                return resolve(msg1)
            } else {
                return reject(new Error("no existe el segundo mensaje"))
            }
        }, 7500)
    })
}).then((msg) => {
    console.log(msg)
    var msg1 = "2. Soy el segundo mensaje"
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (msg != undefined) {
                return resolve(msg1)
            } else {
                return reject(new Error("no existe el segundo mensaje"))
            }
        }, 7500)
    })
}).then((msg1) => {
    console.log(msg1)
    var msg2 = "3. Soy el tercer mensaje"
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (msg2 != undefined) {
                return resolve(msg2)
            } else {
                return reject(new Error("no existe el tercer mensaje"))
            }
        }, 5000)
    })
}).then((msg2) => {
    console.log(msg2)
    var msg3 = "me aburri"
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (msg3 != undefined) {
                return resolve(msg3)
            } else {
                return reject(new Error("no molestar"))
            }
        }, 2500);
    })
}).then((msg3) => {
    console.log(msg3)
}).catch((err) => {
    console.log(err.message)
})