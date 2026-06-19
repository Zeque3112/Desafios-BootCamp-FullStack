const pesosInput = document.getElementById("pesos");
const cotizacionInput = document.getElementById("cotizacion");
const resultado = document.getElementById("resultado");
const checkbox = document.getElementById("autoUpdate");
const fechaHora = document.getElementById("fechaHora");

let intervalo = null;

function convertir() {
    const pesos = parseFloat(pesosInput.value) || 0;
    const cotizacion = parseFloat(cotizacionInput.value) || 0;

    if (cotizacion > 0) {
        const dolares = pesos / cotizacion;
        resultado.textContent = `USD ${dolares.toFixed(2)}`;
    } else {
        resultado.textContent = "USD 0.00";
    }
}

function actualizarCotizacion() {
    const xhr = new XMLHttpRequest();

    xhr.open(
        "GET",
        "https://api.bluelytics.com.ar/v2/latest",
        true
    );

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {

            const data = JSON.parse(xhr.responseText);

            cotizacionInput.value = data.blue.value_sell;

            convertir();

            const ahora = new Date();

            fechaHora.textContent =
                "Última actualización: " +
                ahora.toLocaleDateString() +
                " " +
                ahora.toLocaleTimeString();
        }
    };

    xhr.send();
}

pesosInput.addEventListener("input", convertir);
cotizacionInput.addEventListener("input", convertir);

checkbox.addEventListener("change", function () {

    if (checkbox.checked) {

        actualizarCotizacion();

        intervalo = setInterval(
            actualizarCotizacion,
            2000
        );

    } else {

        clearInterval(intervalo);

        fechaHora.textContent =
            "Actualización automática deshabilitada";
    }
});