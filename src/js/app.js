//intersectionOvserver

document.addEventListener('DOMContentLoaded', function () {
    scrollView();
    navFija();
})

function navFija() {
    const nav = document.querySelector('.header');
    const observer = new IntersectionObserver(function(entries){
        if(entries[0].isIntersecting) {
            nav.classList.remove('fijo')
        } else {
            nav.classList.add('fijo')
        }
    })
    observer.observe(document.querySelector('.sobre-festival'))
}

//scrollView

function scrollView() {
    const enlaces = document.querySelectorAll('.navegacion-principal a');
    enlaces.forEach(function(enlace){
        enlace.addEventListener('click', function (e) {
            e.preventDefault();
            const seccion = document.querySelector(e.target.attributes.href.value);
            seccion.scrollIntoView({
                behavior: 'smooth',
            })
        })
    })
}