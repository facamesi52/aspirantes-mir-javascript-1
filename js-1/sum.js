function suma(numero){
    let contador = 0
    for (let i = 0; i <= numero; i++) {
      contador = contador + i
    }
    return contador
    }
    // código de prueba
    console.log(suma(4)) // 1 + 2 + 3 + 4 = 10
    console.log(suma(10)) // 55
    console.log(suma(15)) // 120