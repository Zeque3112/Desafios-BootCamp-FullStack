const errores = []

function clearErrors() {
    errores.length = 0

    document
        .querySelectorAll('.invalid')
        .forEach(el => el.classList.remove('invalid'))

    document.querySelector('#errores-validacion').innerHTML = ''
}

function showError(input, message) {
    errores.push(message)

    input.classList.add('invalid')
}

function renderErrores() {
    const contenedor = document.querySelector('#errores-validacion')

    if (!errores.length) {
        contenedor.innerHTML = ''
        return
    }

    let html = `
        <div class="error-box">
            <h3>Se encontraron errores:</h3>
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

function validarTexto(input, campo) {
    const valor = input.value.trim()
    if (valor.length === 0) {
        showError(input, `${campo} es obligatorio`)
        return false
    }
    if (valor.length < 3) {
        showError(input, `${campo} debe tener al menos 3 letras`)
        return false
    }
    return true
}

function validarEnteroPositivo(input, campo) {
    const valor = input.value.trim()
    const numero = Number(valor)
    if (valor.length === 0) {
        showError(input, `${campo} es obligatorio`)
        return false
    }
    if (!Number.isInteger(numero) || numero <= 0) {
        showError(input, `${campo} debe ser un número entero positivo`)
        return false
    }
    return true
}

function validarPrecio(input) {
    const valor = input.value.trim()  
    const numero = Number(valor)
    if (valor.length === 0) {
        showError(input, 'Precio es obligatorio')
        return false
    }
    if (numero <= 0) {
        showError(input, 'Precio debe ser un número positivo (puede usar punto)')
        return false
    }
    return true
}

function validarUrl(input) {
    const valor = input.value.trim()
    if (valor.length === 0) {
        showError(input, 'Foto es obligatoria')
        return false
    }
    try {
        new URL(valor)
        return true
    } catch {
        showError(input, 'Ingrese una URL válida')
        return false
    }
}

function agregar(e) {
    e.preventDefault()
    
    console.log('agregar()')

    const refNombre = document.querySelector('#nombre')
    const refPrecio = document.querySelector('#precio')
    const refStock = document.querySelector('#stock')
    const refMarca = document.querySelector('#marca')
    const refCategoria = document.querySelector('#categoria')
    const refDescripcionCorta = document.querySelector('#descripcion-corta')
    const refDescripcionLarga = document.querySelector('#descripcion-larga')
    const refEdadDesde = document.querySelector('#edad-desde')
    const refEdadHasta = document.querySelector('#edad-hasta')
    const refFoto = document.querySelector('#foto')
    const refEnvio = document.querySelector('#envio')

    clearErrors()

    const nombre = refNombre.value.trim()
    const precio = refPrecio.value.trim()
    const stock = refStock.value.trim()
    const marca = refMarca.value.trim()
    const categoria = refCategoria.value.trim()
    const descripcionCorta = refDescripcionCorta.value.trim()
    const descripcionLarga = refDescripcionLarga.value.trim()
    const edadDesde = refEdadDesde.value.trim()
    const edadHasta = refEdadHasta.value.trim()
    const foto = refFoto.value.trim()
    const envio = refEnvio.checked

    let isValid = true

    if (!validarTexto(refNombre, 'Nombre')) isValid = false
    if (!validarTexto(refMarca, 'Marca')) isValid = false
    if (!validarTexto(refCategoria, 'Categoría')) isValid = false
    if (!validarTexto(refDescripcionCorta, 'Descripción corta')) isValid = false
    if (!validarTexto(refDescripcionLarga, 'Descripción larga')) isValid = false
    if (!validarPrecio(refPrecio)) isValid = false
    if (!validarEnteroPositivo(refStock, 'Stock')) isValid = false
    if (!validarEnteroPositivo(refEdadDesde, 'Edad desde')) isValid = false
    if (!validarEnteroPositivo(refEdadHasta, 'Edad hasta')) isValid = false
    if (!validarUrl(refFoto)) isValid = false

    const precioValor = Number(precio)
    const stockValor = Number(stock)
    const edadDesdeValor = Number(edadDesde)
    const edadHastaValor = Number(edadHasta)

    if (isValid && edadDesdeValor > edadHastaValor) {
        showError(refEdadHasta, 'Edad hasta debe ser mayor o igual a edad desde')
        isValid = false
    }

    renderErrores()

    if (!isValid) {
        return
    }

    const producto = {
        nombre,
        precio: precioValor,
        stock: stockValor,
        marca,
        categoria,
        descripcionCorta,
        descripcionLarga,
        edadDesde: edadDesdeValor,
        edadHasta: edadHastaValor,
        foto,
        envio
    }

    console.log(producto)
    productos.push(producto)

    representarTablaProductos()

    document.querySelector('.alta-form').reset()
    clearErrors()
}


function representarTablaProductos() {
    let filasTabla = ''

    if(productos.length) {
        filasTabla += `
            <thead>
                <tr>
                    <th>nombre</th>
                    <th>precio</th>
                    <th>stock</th>
                    <th>marca</th>
                    <th>categoría</th>
                    <th>descripción corta</th>
                    <th>descripción larga</th>
                    <th>edad desde</th>
                    <th>edad hasta</th>
                    <th>foto</th>
                    <th>envío</th>
                </tr>
            </thead>
        `

        filasTabla += '<tbody>'

        for(let producto of productos) {
            filasTabla += `
                <tr>
                    <td>${producto.nombre}</td>
                    <td class="centrar">$${producto.precio}</td>
                    <td class="centrar">${producto.stock}</td>
                    <td>${producto.marca}</td>
                    <td>${producto.categoria}</td>
                    <td>${producto.descripcionCorta}</td>
                    <td>${producto.descripcionLarga}</td>
                    <td class="centrar">${producto.edadDesde}</td>
                    <td class="centrar">${producto.edadHasta}</td>
                    <td><img width="75" src="${producto.foto}" alt="${producto.nombre}"></td>
                    <td class="centrar">${producto.envio?'Si':'No'}</td>
                </tr>
            `
        }

        filasTabla += '</tbody>'
    }
    else filasTabla += '<h2>No se encontraron productos para mostrar</h2>'

    document.querySelector('table').innerHTML = filasTabla
}

function start() {
    console.warn( document.querySelector('title').innerText )

    document.querySelector('button').onclick = agregar

    representarTablaProductos()
}
