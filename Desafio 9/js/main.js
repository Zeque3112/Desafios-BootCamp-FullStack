let display = []
let signo = false
let coma = false
const numeros = [0,1,2,3,4,5,6,7,8,9]
const simbolos = ["+","-","x","/"]

document.getElementById("render").innerText = "0"

const agregarDisplay = item => {
    if (display.length <=12){
        if (numeros.includes(item)){
            display.push(item)
            if (simbolos.includes(display.at(-2)))
                signo = true
        }
        else if (simbolos.includes(item)){
            coma = false
            if (!signo){
                if (simbolos.includes(display.at(-1)))
                    display.pop()
                display.push(item)
            }
        }
        else if (item === "." && !coma) {
            coma = true
            display.push(item)
        }

    }   
    document.getElementById("render").innerText = display.join("")
}

const limpiar = _ => {
    display = []
    signo = false
    coma = false
    document.getElementById("render").innerText = "0"
}

const resolver = _ => {

}

//TODO agregar funcion "resolver"
//TODO si la resolucion da error mostrar mensaje de "error"

document.getElementById("boton0").addEventListener("click", () => agregarDisplay(0))
document.getElementById("boton1").addEventListener("click", () => agregarDisplay(1))
document.getElementById("boton2").addEventListener("click", () => agregarDisplay(2))
document.getElementById("boton3").addEventListener("click", () => agregarDisplay(3))
document.getElementById("boton4").addEventListener("click", () => agregarDisplay(4))
document.getElementById("boton5").addEventListener("click", () => agregarDisplay(5))
document.getElementById("boton6").addEventListener("click", () => agregarDisplay(6))
document.getElementById("boton7").addEventListener("click", () => agregarDisplay(7))
document.getElementById("boton8").addEventListener("click", () => agregarDisplay(8))
document.getElementById("boton9").addEventListener("click", () => agregarDisplay(9))
document.getElementById("boton+").addEventListener("click", () => agregarDisplay("+"))
document.getElementById("boton-").addEventListener("click", () => agregarDisplay("-"))
document.getElementById("botonx").addEventListener("click", () => agregarDisplay("x"))
document.getElementById("boton/").addEventListener("click", () => agregarDisplay("/"))
document.getElementById("boton.").addEventListener("click", () => agregarDisplay("."))
document.getElementById("boton=").addEventListener("click", () => resolver())
document.getElementById("display").addEventListener("click", () => limpiar())