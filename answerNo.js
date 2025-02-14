document.addEventListener('DOMContentLoaded', (event) => {
    const boton1 = document.getElementById('btn-positive');
    const boton2 = document.getElementById('btn-negative');
    const contenido = document.getElementById('container');
    const image = document.getElementById('image');

    if (boton1 && boton2 && contenido && image) {
        boton1.addEventListener('click', () => {
            window.location.href = 'answerYes.html';
        });

        boton2.addEventListener('click', () => {
            // Aumento del tamaño del boton "Yes"
            boton1.style.width = (boton1.offsetWidth + 150) + 'px';
            boton1.style.height = (boton1.offsetHeight + 150) + 'px';

            // Cambio de la imagen por cada vez que se selecciona 'No'
            image.src = 'images/image-answerNo2.gif';
        });
    } else {
        console.error('No se encontraron los elementos necesarios en el DOM.');
    }
});