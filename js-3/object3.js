let receta = {};
receta.nombre = "Sandwich";
receta.ingredientes = [];
receta.ingredientes.push({nombre : "Pan", cantidad : 2});
receta.ingredientes.push({nombre : "Queso", cantidad : 1});
console.log(receta)
console.log(receta.ingredientes[0].nombre)

function cantidades (receta){
let cantidades = 0
for(let i = 0; i<receta.ingredientes.length;i++){
  cantidades = cantidades + receta.ingredientes[i].cantidad
}
return `La cantidad de ingredientes son ${cantidades}`}
console.log( cantidades(receta))