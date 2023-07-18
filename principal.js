const body = document.querySelector('body')
const html = document.querySelector('html')
const header = document.querySelector('.header');
const carousel = document.querySelector('.carousel-cont');
const tituloInfo = document.getElementById('titulo');
const servicio = document.querySelectorAll('.servicio');
const servicio2 = document.querySelectorAll('.servicio2')

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

const subGaleria = document.querySelector('.galeria-subcont ul')
subGaleria.addEventListener('click', (e)=> {
    const foto = e.target.attributes.src.value
    $('.fotoAmpliada').css('backgroundImage', `url(${foto})`)
})

const tiradefotos = document.querySelector('.galeria ul')
const botonGaleria = document.querySelector('.botones span')


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
            transform: 'translateY(0%)'
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

const portadaCont = document.querySelector('.portada-cont')
const headerSmall = document.querySelector('.header_small')

    window.addEventListener('scroll', ()=> {
       if (headerSmall.getBoundingClientRect().bottom > 0) {
            // $(header).css('position', 'fixed')
        }
            else {
            $(header).css('position', 'relative')
        }
    })

const botonBack = document.querySelector('.botonBack')  

botonBack.addEventListener('click', ()=> {
    $(header).css('position', 'relative')
})




