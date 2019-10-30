function uno() {
    setTimeout(function () {
        console.log('1. Soy el primer mensaje')
        setTimeout(function () {
            console.log('2. Soy el segundo mensaje')
            setTimeout(function () {
                console.log('3. Soy el tercer mensaje')
                setTimeout(function () {
                    console.log('4. Me aburrí')
                }, 1000)
            }, 2000)
        }, 3000)
    }, 4000)
}
uno()
