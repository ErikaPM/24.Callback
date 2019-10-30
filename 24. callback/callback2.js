//A las 6:00 am me despierto. A las 9:00 am estoy en clase. A las 12:00 
//del medio día tengo hambre. A las 4:00pm tengo más hambre. A las 8:00 pm me compre una empanada,
//y a las 10:00om alguien encendio la luz de mi casa y vivo solo.

function actividad(despierto) {
    despierto(clase)
}

function despierto(clase) {
    setTimeout(() => {
        console.log('me desperté')
        clase(hambre)
    }, 2000
    )
}

function clase(hambre) {
    setTimeout(() => {
        console.log('estoy en clase')
        hambre(masHambre)
    }, 2000
    )
}

function hambre(masHambre) {
    setTimeout(() => {
        console.log('Tengo hambre')
        masHambre(empanada)
    }, 2000
    )
}
function masHambre(empanada) {
    setTimeout(() => {
        console.log('tengo más hambre')
        empanada(luz)
    }, 2000
    )
}
function empanada(luz) {
    setTimeout(() => {
        console.log('me comi una empanada')
        luz()
    }, 2000
    )
}

function luz() {
    setTimeout(() => {
        console.log('prendieron la luz')
    }, 2000
    )
}

actividad(despierto)
