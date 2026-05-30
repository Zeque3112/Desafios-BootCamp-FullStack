const nombre = document.querySelector("#nombre");
const edad = document.querySelector("#edad");
const email = document.querySelector("#email");
const nombreError = document.querySelector("#nombreError");
const edadError = document.querySelector("#edadError");
const emailError = document.querySelector("#emailError");
const submitBtn = document.querySelector("#submitBtn");

const validarNombre = (valor) => {
    const nombreTrim = valor.trim();
    const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{3,20}$/;
    return regexNombre.test(nombreTrim);
};

const validarEdad = (valor) => {
    const numero = Number(valor);
    return Number.isInteger(numero) && numero >= 18 && numero <= 120;
};

const validarEmail = (valor) => {
    const emailTrim = valor.trim();
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(emailTrim);
};

const actualizarBoton = () => {
    const esNombreValido = validarNombre(nombre.value);
    const esEdadValida = validarEdad(edad.value);
    const esEmailValido = validarEmail(email.value);
    submitBtn.disabled = !(esNombreValido && esEdadValida && esEmailValido);
};

nombre.addEventListener("input", () => {
    if (nombre.value === "") {
        nombreError.textContent = "";
    } else if (validarNombre(nombre.value)) {
        nombreError.textContent = "";
    } else {
        nombreError.textContent = "El nombre debe tener entre 3 y 20 letras alfabeticas.";
    }
    actualizarBoton();
});

edad.addEventListener("input", () => {
    if (edad.value === "") {
        edadError.textContent = "";
    } else if (validarEdad(edad.value)) {
        edadError.textContent = "";
    } else {
        edadError.textContent = "La edad debe estar entre 18 y 120 años.";
    }
    actualizarBoton();
});

email.addEventListener("input", () => {
    if (email.value === "") {
        emailError.textContent = "";
    } else if (validarEmail(email.value)) {
        emailError.textContent = "";
    } else {
        emailError.textContent = "El email no tiene un formato válido.";
    }
    actualizarBoton();
});