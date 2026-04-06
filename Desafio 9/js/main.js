let num1 = []
let num2 = []
let operador = ""
let cambioNum = false //flag
let signo = false //flag
let coma = false //flag
var resultado
const numeros = [0,1,2,3,4,5,6,7,8,9]
const simbolos = ["+","-","x","/"]

document.getElementById("render").innerText = "0"

const agregarDisplay = item => {
    if ((num1.length + num2.length + operador.length) <=12){ //13 caracteres maximo
        if (numeros.includes(item)){
            if (!cambioNum){
                num1.push(item)
            }
            else {
                if (!signo) signo = true
                num2.push(item)
            }  
        }
        else if (item === "." && !coma){
            coma = true
            if (!cambioNum){
                num1.push(item)
            }
            else {
                num2.push(item)
            }  
        }
        else if (simbolos.includes(item)){
            if (!cambioNum) cambioNum = true
            if(!signo){
                if (coma) coma = false
                operador = item
            }
        }
    }
    document.getElementById("render").innerText = num1.join("") + operador + num2.join("")
}

const limpiar = _ => {
    num1 = []
    num2 = []
    operador = ""
    cambioNum = false
    signo = false
    coma = false
    document.getElementById("render").innerText = "0"
}

const resolver = _ => {
    let a = num1.join("")
    let b = num2.join("")
    switch(operador){
        case ("+"):
            resultado = Number(a) + Number(b)
        case ("-"):
            resultado = Number(a) - Number(b)
        case ("x"):
            resultado = Number(a) * Number(b)
        case ("/"):
            resultado = Number(a) / Number(b)
    }
    document.getElementById("render").innerText = resultado
}

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