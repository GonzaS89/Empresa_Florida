const header = document.querySelector('.header');
const carousel = document.querySelector('.carousel-cont');
const tituloInfo = document.getElementById('titulo');
const servicio = document.querySelectorAll('.servicio');
const servicio2 = document.querySelectorAll('.servicio2');

// addEventListener('scroll', ()=> {
//     if(header.getBoundingClientRect().bottom < 0) ;
//     servicio.classList.add('servicioAnimacion');
//     servicio2.classList.add('ser');
// })


const galeria = document.querySelector('.galeria');
const retratoCont = document.querySelector('.retratoCont')
const retrato = document.querySelector('.retrato');


galeria.addEventListener('click', (e)=> {
    let dataRetrato = e.target.attributes.src.nodeValue;
    console.log(dataRetrato)
    $('.retratoCont').css('position', 'fixed')
    $('.retrato').css('backgroundImage', `url(${dataRetrato})`)
})




