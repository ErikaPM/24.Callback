new Promise((resolve, reject) => {
    var valor = 3
    setTimeout(() => {
        if (valor != undefined) {
            return resolve(valor)
        } else {
            return reject(new Error("valor no definido"))
        }
    }, 1000)
}).then((valor) => {
    console.log(`Inicia ejecución: el valor es = ${valor}`)
    console.log("Procesando...")
    setTimeout(() => {
        var resultado = valor * valor
        console.log(`Finaliza con el valor =${valor} y el resultado=${resultado}`)
    }, 4000);
})