let num1 = []
let num2 = []
let operador = ""

let cambioNum = false //Determina si se trata del primer o del segundo número
let signo = false //Determina si ya se esta utilizando un operador para el cálculo, permitiendo solo cálculos entre 2 números
let coma = false  //Evita que se ingrese más de un "." por número en el cálculo
let resuelto = false //Determina si ya se realizó un calculo y se requiere utilizar el resultado para continuar calculando
let evitarComa = false //Evita que se coloquen "." instantaneamente luego de obtener un resultado

let resultado
const numeros = [0,1,2,3,4,5,6,7,8,9]
const simbolos = ["+","-","x","/"]

document.getElementById("render").innerText = "0"

const agregarDisplay = item => {
    let mostrar = true
    if ((num1.length + num2.length + operador.length) <=12){ //13 caracteres maximo
        if (numeros.includes(item)){
            if (evitarComa) evitarComa = false
            if (!cambioNum){
                if (resuelto) reiniciar() //Si se ingresan numeros inmediatamente luego de tocar "0", permite hacer cuentas nuevassin tener que tocar el display para reiniciar el resultado
                num1.push(item)
            }
            else {
                if (!signo) signo = true //Si se ingresa un número luego de un operador, no se podrá poner otro más durante este cálculo
                num2.push(item)
            }  
        }
        else if (item === "." && !coma){
            if (!evitarComa){
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
            if (evitarComa) evitarComa = false
            if (resuelto && !signo) {
                limpiar()
                num1 = resultado.toString() //Establece el ultimo resultado como el primer número
            }
            if (!cambioNum) cambioNum = true //Cambio de número desp del operador
            if(!signo){ //Si ingreso varios operadores de forma inmediata, lo va modificando, pero solo toma el ultimo seleccionado
                if (coma) coma = false //Permite que se vuelva a usar el ".", ya que es otro número
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
}

const reiniciar = _ => {
    limpiar()
    operador = ""
    signo = false
    resuelto = false
    cambioNum = false
    document.getElementById("render").innerText = "0"
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
    evitarComa = true
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