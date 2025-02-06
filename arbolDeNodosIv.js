document.addEventListener("DOMContentLoaded", function() {
    // Crear contenedor principal
    const body = document.body;

    // Crear el contenedor de la galería
    const galeria = document.createElement('div');
    galeria.id = 'galeria';

    // Crear la imagen grande
    const imagenGrande = document.createElement('img');
    imagenGrande.id = 'imagen-grande';
    imagenGrande.src = 'https://www.pixartprinting.it/blog/wp-content/uploads/2024/03/fr-1.jpg';
    imagenGrande.alt = 'Imagen grande';

    // Crear el contenedor de las miniaturas
    const miniaturas = document.createElement('div');
    miniaturas.id = 'miniaturas';

    // Lista de miniaturas y enlaces
    const imagenes = [
        "https://www.pixartprinting.it/blog/wp-content/uploads/2024/03/fr-1.jpg",
        "https://pictures.abebooks.com/inventory/31944506898.jpg",
        "https://media.vogue.es/photos/5ec3969662e90b6607c17625/master/w_1600%2Cc_limit/COVER%2520JUNE.jpg",
        "https://media.vogue.es/photos/60508a66638f4014592508e8/master/w_1600%2Cc_limit/Vogue_Abril_JodieComer_IG.jpg",
        "https://m.media-amazon.com/images/I/81XGTtU0+dL._UF1000,1000_QL80_.jpg",
        "https://i.pinimg.com/736x/c6/69/61/c669617f5aee74e4d20946dc3a56dd70.jpg"
    ];

    // Crear las miniaturas dinámicamente
    imagenes.forEach((src) => {
        const miniatura = document.createElement('img');
        miniatura.classList.add('miniatura');
        miniatura.src = src;
        miniatura.alt = 'Miniatura';

        // Añadir evento de clic para cambiar la imagen grande
        miniatura.addEventListener('click', function() {
            imagenGrande.src = src.replace("100x100", "600x400");
        });

        // Añadir la miniatura al contenedor de miniaturas
        miniaturas.appendChild(miniatura);
    });

    // Añadir imagen grande y miniaturas al contenedor de la galería
    galeria.appendChild(imagenGrande);
    galeria.appendChild(miniaturas);

    // Añadir el contenedor de la galería al body
    body.appendChild(galeria);
});
