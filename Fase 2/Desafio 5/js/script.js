class GestorImagenes {

    constructor() {
        this.inputs = document.querySelectorAll('input[type="file"]');
        this.zonas = document.querySelectorAll('div');
    }

    start() {
        document.addEventListener('dragover', e => e.preventDefault());
        document.addEventListener('drop', e => e.preventDefault());

        this.zonas.forEach((zona, index) => {

            const input = this.inputs[index];

            input.addEventListener('change', async () => {
                const archivo = input.files[0];

                if (archivo && archivo.type.startsWith('image/')) {
                    await this.cargarImagenConDemora(archivo, zona);
                }
            });

            zona.addEventListener('dragover', e => {
                e.preventDefault();
            });

            zona.addEventListener('drop', async e => {
                e.preventDefault();

                const archivo = e.dataTransfer.files[0];

                if (archivo && archivo.type.startsWith('image/')) {
                    await this.cargarImagenConDemora(archivo, zona);
                }
            });
        });
    }

    esperar(ms) {
        return new Promise(resolve => {
            setTimeout(resolve, ms);
        });
    }

    async cargarImagenConDemora(archivo, zona) {

        const label = zona.querySelector('label');
        const mensajeOriginal = label.textContent;

        zona.style.backgroundImage = '';
        label.textContent = 'Cargando...';

        await this.esperar(2000);

        const lector = new FileReader();

        lector.onload = e => {
            zona.style.backgroundImage = `url('${e.target.result}')`;
            label.style.display = 'none';
            label.textContent = mensajeOriginal;
        };

        lector.readAsDataURL(archivo);
    }
}

const app = new GestorImagenes();
app.start();