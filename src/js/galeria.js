document.addEventListener('DOMContentLoaded', function () {
    crearGaleria();
});

function crearGaleria() {
    for (let i = 1; i <= 12; i++) {
        const galeria = document.querySelector('.galeria-imagenes');
        const lista = document.createElement('LI');
        image = document.createElement('IMG');
        image.src = `build/img/thumb/${i}.webp`;
        image.dataset.imageId = i;
        image.onclick = imageViewer;
        lista.appendChild(image);
        galeria.appendChild(lista);
    }
}

function imageViewer(e) {
    const id = parseInt(e.target.dataset.imageId);
    const body = document.querySelector('body');
    const overlay = document.createElement('DIV');
    const image = document.createElement('IMG');
    const close = document.createElement('P');
    overlay.classList.add('overlay');
    image.src = `build/img/grande/${id}.webp`;
    close.textContent = 'X';
    close.classList.add('close')
    close.onclick = closeImageViewer;
    overlay.onclick = closeImageViewer;
    overlay.appendChild(image);
    overlay.appendChild(close);
    body.appendChild(overlay);
    body.classList.add('fijar-body');
}

function closeImageViewer() {
    const body = document.querySelector('body');
    const overlay = document.querySelector('.overlay');
    overlay.remove();
    body.classList.remove('fijar-body');
}