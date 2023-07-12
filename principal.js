const body = document.querySelector('body')
const html = document.querySelector('html')
const header = document.querySelector('.header');
const carousel = document.querySelector('.carousel-cont');
const tituloInfo = document.getElementById('titulo');
const servicio = document.querySelectorAll('.servicio');
const servicio2 = document.querySelectorAll('.servicio2')

// window.addEventListener('scroll', ()=> {

//     if(carousel.getBoundingClientRect().top < 0){

//         servicio.forEach(element => {
//             element.classList.add('servicioAnimacion')
//             element.classList.add('servicioAnimacion')
//         });

//         servicio2.forEach(element => {
//             element.classList.add('servicio2Animacion');
//             element.classList.add('servicio2Animacion');
//         });
    
//     } 
// })

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

const definirAnchoCarousel = ()=> {
    const subGaleria = document.querySelector('.galeria-subcont ul')
    const cantidadDeFotos = subGaleria.children.length
    $('.galeria ul').css('width', `${cantidadDeFotos}00%`)
}

definirAnchoCarousel();

const botonMenuCont = document.querySelector('.boton-menu_contenedor');
const botonMenu = document.querySelector('.boton-menu');
const navSmall = document.querySelector('.navegacion-small_contenedor');
const linea1 = document.querySelector('.linea1');
const linea2 = document.querySelector('.linea2');
const linea3 = document.querySelector('.linea3');

let estaVisible = false;

const bajarMenu = ()=> {

    navSmall.animate ([
        {
            transform: 'translateY(0)'
        }
    ],
        {
            duration:500,
            fill : 'forwards'
        }
    )   
    linea1.animate ([
        {
            transform:'rotate(45deg)'
        }
    ],
        {
            duration: 500,
            fill:'forwards'
        }
    )
    linea2.animate ([
        {
            filter:'opacity(0)'
        }
    ],
        {
            duration: 500,
            fill:'forwards'
        }
    )
    linea3.animate ([
        {
            transform:'rotate(-45deg)'
        }
    ],
        {
            duration: 500,
            fill:'forwards'
        }
    )
    $(linea2).css('height', '0');
    $(botonMenu).css('gap', '0')
    estaVisible = true;
}

const subirMenu = ()=> {
    navSmall.animate ([
        {
            transform: 'translateY(-100%)'
        }
    ],
        {
            duration:250,
            fill : 'forwards'
        }
    );
    linea1.animate ([
        {
            transform: 'rotate(0)'
        },
    ],  
        {
            duration:250,
            fill:'forwards'
        }
    );
    linea2.animate ([
        {
            filter:'opacity(100%)'
        }
    ],
        {
            duration: 250,
            fill:'forwards'
        }
    )
    linea3.animate ([
        {
            transform: 'rotate(0)'
        },
    ],  
        {
            duration:250,
            fill:'forwards'
        }
    );
    $(linea2).css('height', '1px');
    $(botonMenu).css('gap', '10px')
    estaVisible = false;
}

botonMenuCont.addEventListener('click', ()=> {
    if(estaVisible) subirMenu()
    else bajarMenu(); 
})

navSmall.addEventListener('click', ()=> {
    subirMenu();
})

const nosotrosCont = document.querySelector('.nosotros-cont')

    window.addEventListener('scroll', ()=> {
        if(header.getBoundingClientRect().top < 0) {
            $(header).css('filter', 'opacity(95%)');
        }
        else if (nosotrosCont.getBoundingClientRect().top >= 0) {
            $(header).css('position', 'relative');
            $(header).css('filter', 'opacity(100%)')
        }
    })




