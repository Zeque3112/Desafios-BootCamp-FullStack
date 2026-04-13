let num1 = []
let num2 = []
let operador = ""
let cambioNum = false //flag para determinar si es el primer número o el segundo
let signo = false //flag para determinar si ya se ingreso un operador
let coma = false //flag para determinar si ya se ingreso una coma
let resuelto = false //flag para determinar si ya se hizo un calculo y se debe usar el resultado para los siguientes calculos
let puedoComa = false 
let resultado
const numeros = [0,1,2,3,4,5,6,7,8,9]
const simbolos = ["+","-","x","/"]

document.getElementById("render").innerText = "0"

const agregarDisplay = item => {
    let mostrar = true
    if ((num1.length + num2.length + operador.length) <=12){ //13 caracteres maximo
        if (numeros.includes(item)){
            puedoComa = false
            if (!cambioNum){
                if (resuelto) reiniciar()
                num1.push(item)
            }
            else {
                if (!signo) signo = true
                num2.push(item)
            }  
        }
        else if (item === "." && !coma){
            if (!puedoComa){
                coma = true
                if (!cambioNum){
                    num1.push(item)
                }
                else {
                    num2.push(item)
                }  
            }
            else {
                mostrar = false
            }
        }
        else if (simbolos.includes(item)){
            puedoComa = false
            if (resuelto && !signo) {
                limpiar()
                num1 = resultado.toString()
            }
            if (!cambioNum) cambioNum = true
            if(!signo){
                if (coma) coma = false
                operador = item
            }
        }
    }
    if (mostrar) document.getElementById("render").innerText = (resuelto == true? num1 : num1.join("")) + operador + num2.join("")
}

const limpiar = _ => {
    num1 = []
    num2 = []
    coma = false
    document.getElementById("render").innerText = "0"
}

const reiniciar = _ => {
    limpiar()
    operador = ""
    signo = false
    resuelto = false
    cambioNum = false
}

const resolver = _ => {
    let a
    if (resuelto) {
        a = num1
    }
    else {
        a = num1.join("")
    }
    let b = num2.join("")
    switch(operador){
        case ("+"):
            resultado = Number(a) + Number(b)
            break
        case ("-"):
            resultado = Number(a) - Number(b)
            break
        case ("x"):
            resultado = Number(a) * Number(b)
            break
        case ("/"):
            resultado = Number(a) / Number(b)
            break
        case (""):
            resultado = Number(a)
            break
    }
    if (!resuelto) resuelto = true
    puedoComa = true
    signo = false
    cambioNum = false
    document.getElementById("render").innerText = resultado.toString().slice(0,13)
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
document.getElementById("display").addEventListener("click", () => reiniciar())