const inputs = document.querySelectorAll('input[type="file"]');
const zonas = document.querySelectorAll('div');

document.addEventListener('dragover', e => {
e.preventDefault();
});

document.addEventListener('drop', e => {
e.preventDefault();
});

zonas.forEach((zona, index) => {
const input = inputs[index];

input.addEventListener('change', () => {
    const archivo = input.files[0];

    if (archivo && archivo.type.startsWith('image/')) {
        mostrarImagen(archivo, zona);
    }
});

zona.addEventListener('dragover', e => {
    e.preventDefault();
});

zona.addEventListener('drop', e => {
    e.preventDefault();

    const archivo = e.dataTransfer.files[0];

    if (archivo && archivo.type.startsWith('image/')) {
        mostrarImagen(archivo, zona);
    }
});
});

function mostrarImagen(archivo, zona) {
const lector = new FileReader();

lector.onload = e => {
    zona.style.backgroundImage = `url('${e.target.result}')`;
    zona.querySelector('label').style.display = 'none';
};

lector.readAsDataURL(archivo);
}
