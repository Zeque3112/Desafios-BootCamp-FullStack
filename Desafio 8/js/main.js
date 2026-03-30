document.addEventListener("DOMContentLoaded", () => {
    
    let origen = document.getElementById("origen")
    let destino = document.getElementById("destino")

    origen.value = "<p>Este contenido <strong>está listo</strong><br>para ser editado y pasarlo abajo.</p>"

    origen.addEventListener("input", () => {
        document.querySelector("button").disabled = false
        let inputs = document.getElementsByTagName("input")
        for (let i = 0; i< inputs.length; i++) {
            inputs[i].disabled = false
        }
    })
    
    const reemplazar = _ => {
        destino.innerHTML = origen.value
    }
    
    const agregar = veces => {
        let texto = destino.innerHTML
        for (let i = 0; i < veces ; i++ ) {
            texto += origen.value
        }
        destino.innerHTML = texto
    }
    
    const vaciar = _ => {
        destino.innerHTML = ""
    }

    const convertirMayus = _ => {
        destino.innerHTML = destino.innerHTML.toUpperCase()
    }

    const convertirMinus = _ => {
        destino.innerHTML = destino.innerHTML.toLowerCase()
    }
    
    document.querySelector("input[value='Reemplazar']").addEventListener("click", () => reemplazar())
    document.querySelector("input[value='Agregar']").addEventListener("click", () => agregar(1))
    document.querySelector("input[value='Agregar 5 veces']").addEventListener("click", () => agregar(5))
    document.querySelector("input[value='Agregar 10 veces']").addEventListener("click", () => agregar(10))
    document.querySelector("input[value='Agregar n veces']").addEventListener("click", () => agregar(prompt()))

    document.querySelector("input[value='Vaciar']").addEventListener("click", () => vaciar())
    document.querySelector("input[value='Convertir a mayúsculas']").addEventListener("click", () => convertirMayus())
    document.querySelector("button").addEventListener("click", () => convertirMinus())

    let li = document.querySelectorAll("li")
    for (let i = 0; i < li.length ; i++) {
        li[i].insertAdjacentText("afterbegin", "[OK] ")
    }
    
})

window.onload = console.log("Contenido del DOM cargado")


