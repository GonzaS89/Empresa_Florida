const body = document.querySelector('body')
const header = document.querySelector('.header');
const carousel = document.querySelector('.carousel-cont');
const tituloInfo = document.getElementById('titulo');
const servicio = document.querySelectorAll('.servicio');
const servicio2 = document.querySelectorAll('.servicio2')

addEventListener('scroll', ()=> {

    if(carousel.getBoundingClientRect().top < 0){

    servicio.forEach(element => {
        element.classList.add('servicioAnimacion')
        element.classList.add('servicioAnimacion')
    });

    servicio2.forEach(element => {
        element.classList.add('servicio2Animacion');
        element.classList.add('servicio2Animacion');
    });
    
} 
})

const galeria = document.querySelector('.galeria');
const retratoCont = document.querySelector('.retratoCont')
const retrato = document.querySelector('.retrato');

galeria.addEventListener('click', (e)=> {
    let dataFoto = e.target.attributes.src.nodeValue;
    $(retratoCont).css('position', 'fixed');
    $(retrato).css('backgroundImage', `url(${dataFoto})`);
})


let escritura = string => {
    
}



