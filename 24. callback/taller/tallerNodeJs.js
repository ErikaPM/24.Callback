// // //PUNTO 1
// new Promise((resolve, reject) => {
//     var valor = 3
//     setTimeout(() => {
//         if (valor != undefined) {
//             return resolve(valor)
//         } else {
//             return reject(new Error("valor no definido"))
//         }
//     }, 1000)
// }).then((valor) => {
//     console.log(`Inicia ejecución: el valor es = ${valor}`)
//     console.log("Procesando...")
//     setTimeout(() => {
//         var resultado = valor * valor
//         console.log(`Finaliza con el valor =${valor} y el resultado=${resultado}`)
//     }, 4000);
// })



// //PUNTO 1.2

let contador = 0;
let max = 10;

for (let i = 0; i < max; i++) {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (i <= 10) {
                return resolve(i)
            } else {
                return reject(new Error("indefinido"))
            }
        }, Math.random())
    }).then((i) => {
        console.log(`Inicia ejecución: el Valor es = ${i}`)
        setTimeout(() => {
            var resultado = i * i;
            console.log(`Finaliza con el valor =${i} y el resultado=${resultado}`)
            if (++contador === max) {
                console.log("Exito")
            }
        })
    }, 0 | Math.random() * 100)
}

// //PUNTO 2
// new Promise((resolve, reject) => {
//     var despierta = "6:00 am - Se despierta"
//     setTimeout(() => {
//         if (despierta != undefined) {
//             return resolve(despierta)
//         } else {
//             return reject(new Error("No suena el despertador"))
//         }
//     }, 2000);
// }).then((despierta) => {
//     console.log(despierta)
//     var transmilenio = "07:00am se alista y sale a coger Transmilenio "
//     new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (transmilenio != undefined) {
//                 return resolve(transmilenio)
//             } else {
//                 return reject(new Error("paro en el portal y no puede coger transporte"))
//             }
//         }, 2000)
//     }).then((transmilenio) => {
//         console.log(transmilenio)
//         var estudiar = "08:15 am entra a estudiar"
//         new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 if (estudiar != undefined) {
//                     return resolve(estudiar)
//                 } else {
//                     return reject(new Error("llega tarde y no puede entrar a clases"))
//                 }
//             }, 2000)
//         }).then((estudiar) => {
//             console.log(estudiar)
//             var almuerza = "12:00 sale del estudio y almuerza"
//             new Promise((resolve, reject) => {
//                 setTimeout(() => {
//                     if (almuerza != undefined) {
//                         return resolve(almuerza)
//                     } else {
//                         return reject(new Error("no puede almorzar porque le sale un pelo en la sopa"))
//                     }
//                 }, 2000)
//             }).then((almuerza) => {
//                 console.log(almuerza)
//                 var trabajar = "01:00pm va a trabajar en Bellatrix "
//                 new Promise((resolve, reject) => {
//                     setTimeout(() => {
//                         if (trabajar != undefined) {
//                             return resolve(trabajar)
//                         } else {
//                             return reject(new Error("Se olvida del carnet y no lo dejan ingresar"))
//                         }
//                     }, 2000)
//                 }).then((trabajar) => {
//                     console.log(trabajar)
//                     var relajarse = "08:00pm sale del trabajo a relajarse con sus compañeros de trabajo"
//                     new Promise((resolve, reject) => {
//                         setTimeout(() => {
//                             if (relajarse != undefined) {
//                                 return resolve(relajarse)
//                             } else {
//                                 return reject(new Error("Lo roban"))
//                             }
//                         }, 2000)
//                     }).then((relajarse) => {
//                         console.log(relajarse)
//                         var volver = "11:00pm vuelve a casa"
//                         new Promise((resolve, reject) => {
//                             setTimeout(() => {
//                                 if (volver != undefined) {
//                                     return resolve(volver)
//                                 } else {
//                                     return reject(new Error("Ha perdido las llaves de su casa y le toca dormir en el parque"))
//                                 }
//                             }, 2000)
//                         }).then((volver) => {
//                             console.log(volver)
//                             var acuesta = "01:00am se acuesta para ver Netflix"
//                             return new Promise((resolve, reject) => {
//                                 setTimeout(() => {
//                                     if (acuesta != undefined) {
//                                         return resolve(acuesta)
//                                     } else {
//                                         return reject(new Error("Olvido pagar la mensualidad de Netflix… se desbarata la cama y no tiene donde dormir"))
//                                     }
//                                 }, 2000)
//                             })
//                         }).then((acuesta) => [
//                             console.log(acuesta)
//                         ])
//                     })
//                 })
//             })
//         })
//     })
// })
