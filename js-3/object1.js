let pedro = {
    nombre : "Pedro Perez",
    edad : 30,
    activo : true,
    hobbies : ["programar", "squash", "piano"]}
    console.log(pedro.edad)
    pedro.estatura = 1.8
    delete pedro.activo
    let llaves = Object.keys(pedro)
    let valores = Object.values(pedro)
    
    let recorrido = ""
    for(let i = 0;i<valores.length;i++){
      recorrido += llaves[i]+" : "+valores[i] +"\n"
    }
    console.log(recorrido)
    
    pedro.saluda = function (){
      return "Hola, me llamo "+ this.nombre
    }
    console.log(pedro.saluda())
    