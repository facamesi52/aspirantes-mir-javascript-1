//Crear una función join que reciba un arreglo y retorne un string con todos los 
//elementos separados por espacio sin usar el método join de los arreglos.

function join (arreglo){
    let imprimir = ""
    for(let i = 0; i<arreglo.length; i++){
      imprimir += arreglo[i] + " "
    }
    return imprimir
    }
    
    console.log(join(["pan", "queso", "mantequilla", "cafe"])) //pan queso mantequilla cafe 
    console.log(join(["leon", "elefante", "jirafa", "oso"]))   //leon elefante jirafa oso
    console.log(join(["bailar", "cantar", "pintar"]))          //bailar cantar pintar