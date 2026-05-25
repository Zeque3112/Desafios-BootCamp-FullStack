function clearErrors() {
    document
        .querySelectorAll('.invalid')
        .forEach(el => el.classList.remove('invalid'))

    document.querySelector('#errores').innerHTML = ''
}

function showErrors(errores) {

    const contenedor = document.querySelector('#errores')

    let html = `
        <div class="error-box">
            <ul>
    `

    for (let error of errores) {
        html += `<li>${error}</li>`
    }

    html += `
            </ul>
        </div>
    `

    contenedor.innerHTML = html
}

function showSuccess() {

    document.querySelector('#errores').innerHTML = `
        <div class="success">
            Mensaje enviado correctamente
        </div>
    `
}

function validarNombre(input, errores) {

    const valor = input.value.trim()

    if (valor.length === 0) {
        errores.push('El nombre es obligatorio')
        input.classList.add('invalid')
        return
    }

    if (valor.length < 3) {
        errores.push('El nombre debe tener al menos 3 caracteres')
        input.classList.add('invalid')
    }
}

function validarEmail(input, errores) {

    const valor = input.value.trim()

    if (valor.length === 0) {
        errores.push('El email es obligatorio')
        input.classList.add('invalid')
        return
    }

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!regex.test(valor)) {
        errores.push('Ingrese un email válido')
        input.classList.add('invalid')
    }
}

function validarComentarios(input, errores) {

    const valor = input.value.trim()

    if (valor.length === 0) {
        errores.push('Los comentarios son obligatorios')
        input.classList.add('invalid')
        return
    }

    if (valor.length < 10) {
        errores.push('Los comentarios deben tener al menos 10 caracteres')
        input.classList.add('invalid')
    }
}

function enviarFormulario(e) {

    e.preventDefault()

    clearErrors()

    const errores = []

    const refNombre = document.querySelector('#nombre')
    const refEmail = document.querySelector('#email')
    const refComentarios = document.querySelector('#comentarios')

    validarNombre(refNombre, errores)
    validarEmail(refEmail, errores)
    validarComentarios(refComentarios, errores)

    if (errores.length) {
        showErrors(errores)
        return
    }

    console.log({
        nombre: refNombre.value.trim(),
        email: refEmail.value.trim(),
        comentarios: refComentarios.value.trim()
    })

    showSuccess()

    document.querySelector('#contacto-form').reset()
}

function start() {

    document
        .querySelector('#contacto-form')
        .addEventListener('submit', enviarFormulario)
}

window.onload = start