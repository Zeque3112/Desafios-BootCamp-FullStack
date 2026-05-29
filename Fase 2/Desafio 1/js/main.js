const colores = ["red", "green", "blue", "black"];

let indice = 0;

const main = document.querySelector("main");
const botones = document.querySelectorAll("button");
const textoColor = document.querySelector("main h2");

const actualizarColor = () => {
    main.style.backgroundColor = colores[indice];
    textoColor.textContent = `Color seleccionado: ${colores[indice]}`;
};

botones[0].addEventListener("click", () => {
    indice--;

    if (indice < 0) {
        indice = colores.length - 1;
    }

    actualizarColor();
});

botones[1].addEventListener("click", () => {
    indice++;

    if (indice >= colores.length) {
        indice = 0;
    }

    actualizarColor();
});

actualizarColor();
