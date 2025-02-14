/*
Para lograr que los botones interactuen con la pagina
y cambien el contenido dinamicamente, usamos JavaScript
para agregar "event listeners" a los botones y manipular el
Documento Modelo Objeto (Document Object Model).
*/

document.addEventListener('DOMContentLoaded', (event) => {
    const boton1 = document.getElementById('btn-positive');
    const boton2 = document.getElementById('btn-negative');
    const contenido = document.getElementById('container');

    if (boton1 && boton2 && contenido) {
        boton1.addEventListener('click', () => {
            window.location.href = 'answerYes.html';
        });

        boton2.addEventListener('click', () => {
            window.location.href = 'answerNo.html';
        });
    } else {
        console.error('No se encontraron los elementos necesarios en el DOM.');
    }
});