let persona = {}
persona.nombre = "fabian mendoza";
persona.edad = 26;
persona.ciudad = "Duitama";
persona.profesion = "ingeniero";
console.log(persona)

function presentacion (persona){
  return `Mi nombre es ${persona.nombre}, tengo ${persona.edad} años y soy de la ciudad de ${persona.ciudad}`
}
let mensaje = presentacion(persona);
console.log(mensaje);
persona.hobbies = ["jugar", "caminar", "hablar"];
console.log(persona.hobbies);

let gustos = ""
for(let i = 0; i<persona.hobbies.length;i++){
  gustos += persona.hobbies[i] + ","
}
console.log(gustos)