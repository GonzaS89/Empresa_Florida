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

// galeria.addEventListener('click', (e)=> {
//     let dataFoto = e.target.attributes.src.nodeValue;
//     $(retratoCont).css('position', 'fixed');
//     $(retrato).css('backgroundImage', `url(${dataFoto})`);
// })

const textoCar = document.querySelector('.textoCar')

let escritura = string => {
    let array = string.split('');
    let i = 0;
    let escribir = setInterval( function() {
        textoCar.textContent += array[i];
        i++;
        if(i === array.length){
        clearInterval(escribir);
        }
    },150)
    console.log(array)
}

// escritura('Somos Empresa Florida');


var typed = new Typed('.textoCar', {
    strings: ['Bienvenido a nuestra web'],
    typeSpeed: 50,
    backSpeed: 25,
    cursorChar: '.',
    shuffle: false,
    smartBackspace: true,
    loop: false
  });




 
    
    
    





