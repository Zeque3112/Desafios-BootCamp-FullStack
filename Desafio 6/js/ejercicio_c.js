console.log("Ejercicio C")

var cantidadDeGatos = 10;
var cantidadDePasos= 5;

for(var i=0; i<cantidadDeGatos; i++){
    console.log(`Gato #${i+1}: ${i%2 == 0? "🐈" : "🐈⬛"}${"🐾".repeat(cantidadDePasos)}`)
}
console.log("")