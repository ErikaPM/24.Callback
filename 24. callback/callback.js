function uno(primero) {
    primero(segundo)
}
//funcion se representa de la siguiente forma: nombreFuncion(parametro)
//setTimeout es un metodo de tiempo en mili segundos ej 1000 milisegundos = 1 segundo

function primero(segundo) {
    //Arrow function se puede expresar de esta forma: function(){sentencia a ejecutar}
    //()=>{sentencia a ejecutar}


    setTimeout(() => {
        console.log('1.Soy el primer mensaje')
        segundo(tercero)
    }, 2000)
}


function segundo(tercero) {
    setTimeout(() => {
        console.log('2.Soy el segundo mensaje')
        tercero(cuarto)

    }, 2000)
}

function tercero(cuarto) {
    setTimeout(() => {
        console.log('3.Soy el tercer mensaje')
        cuarto()

    }, 2000)
}

function cuarto() {
    setTimeout(() => {
        console.log('4.Soy el ultimo mensaje')
    }, 2000)
}

uno(primero)

console.log('Será que soy el último?')
