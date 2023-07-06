const body = document.querySelector('body')
const html = document.querySelector('html')
const header = document.querySelector('.header');
const carousel = document.querySelector('.carousel-cont');
const tituloInfo = document.getElementById('titulo');
const servicio = document.querySelectorAll('.servicio');
const servicio2 = document.querySelectorAll('.servicio2')

window.addEventListener('scroll', ()=> {

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

const contacto1 = document.querySelector('.contacto')
const contacto2 = document.querySelector('.contacto2')
const nosotros = document.getElementById('nosotros')

window.addEventListener('scroll', ()=> {
    if(nosotros.getBoundingClientRect().bottom < 0){
        contacto1.classList.add('contacto1Animacion')
        contacto2.classList.add('contacto2Animacion')
    }
    
})

// 

const galeria = document.querySelector('.galeria');
const pantalla = document.querySelector('.pantalla_negra')
const retrato = document.querySelector('.retrato');


galeria.addEventListener('click', (e) => {
    let dataFoto = e.target.attributes.src.nodeValue;
    $(pantalla).css('position', 'fixed');
    $(pantalla).css('display','flex')
    $(retrato).css('backgroundImage', `url(${dataFoto})`);
    $('.boton_cerrador').css('display', 'flex');
    retrato.classList.add('animacionRetrato')
    console.log(1)
});

const botonCerrador = document.querySelector('.boton_cerrador')

botonCerrador.addEventListener('click', ()=> {
    $('.boton_cerrador').css('display', 'none');
    $(pantalla).css('display','none')
})

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

const infoCont = document.querySelector('.info-cont')
const barrita = document.querySelector('.barrita')


// window.addEventListener('scroll',(e)=> {
    
//     if(infoCont.getBoundingClientRect().top < 0 && infoCont.getBoundingClientRect().bottom > 0){
//     let a = infoCont.getBoundingClientRect().top
//     let b = infoCont.clientHeight 
//     let c = a / b *100;
//     barrita.style.width = `${Math.trunc(Math.abs(c))}%`
//     console.log(Math.trunc(Math.abs(c)))
//     }
// })

const definirAnchoCarousel = ()=> {
    const subGaleria = document.querySelector('.galeria-subcont ul')
    const cantidadDeFotos = subGaleria.children.length
    $('.galeria ul').css('width', `${cantidadDeFotos}00%`)
}

definirAnchoCarousel();






