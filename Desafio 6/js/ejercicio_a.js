console.log("Ejercicio A")

var cantidadDeGatos = 10;

var emojis = ["😺", "😸", "😹"];

for(var i=0; i<cantidadDeGatos; i++){
    console.log(`Gato #${i+1}: ${emojis[i%3]}`)
}

console.log("")
