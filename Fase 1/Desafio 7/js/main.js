const listaGatos = ["😺","😸","😹"]
let textoGatos = []
let cantCajas = 0

let agregarGato = gato => {
    textoGatos.push(listaGatos[gato])

    let cont = 0
    let i = textoGatos.length-1

    if (textoGatos.length >= 6){
        while (cont <= 4 && i > 0 && textoGatos[i] == textoGatos[i-1]){
            cont++
            i--
        }
        if (cont >= 5) {
            cantCajas++
            textoGatos = ["⬛".repeat(cantCajas)]
        }
    }
    document.getElementById("gatos").innerText = textoGatos.join("")
}

document.getElementById("boton1").addEventListener("click", () => agregarGato(0))
document.getElementById("boton2").addEventListener("click", () => agregarGato(1))
document.getElementById("boton3").addEventListener("click", () => agregarGato(2))

