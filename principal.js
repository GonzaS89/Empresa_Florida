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


const infoCont = document.querySelector('.info-cont')
const barrita = document.querySelector('.barrita')

const definirAnchoCarousel = ()=> {
    const subGaleria = document.querySelector('.galeria-subcont ul')
    const cantidadDeFotos = subGaleria.children.length
    $('.galeria ul').css('width', `${cantidadDeFotos}00%`)
}

definirAnchoCarousel();

const fotoAmpliada =  document.querySelector('.fotoAmpliada');
const fotoAmpliadaCont = document.querySelector('.fotoAmpliada_cont')
const fotoAmpliadaFondo = document.querySelector('.fotoAmpliadaFondo')


const subGaleria = document.querySelector('.galeria-subcont ul')
subGaleria.addEventListener('click', (e)=> {
    const foto = e.target.attributes.src.value
    $('.fotoAmpliada').css('backgroundImage', `url(${foto})`)
    fotoAmpliada.classList.add('animacionFotoAmpliada')
    setTimeout(() => {
        fotoAmpliada.classList.remove('animacionFotoAmpliada')
    }, 700);
    $(fotoAmpliadaFondo).css('backgroundImage', `url(${foto})`)
    // $(fotoAmpliadaCont).css('filter', 'blur(1px)')

})


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
            duration:400,
            fill : 'forwards'
        }
    )
    linea1.animate ([
        {
            transform:'rotate(45deg)'
        }
    ],
        {
            duration: 400,
            fill:'forwards'
        }
    )
    linea2.animate ([
        {
            filter:'opacity(0)'
        }
    ],
        {
            duration: 400,
            fill:'forwards'
        }
    )
    linea3.animate ([
        {
            transform:'rotate(-45deg)'
        }
    ],
        {
            duration: 400,
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

let ancho = innerWidth;
const portadaCont = document.querySelector('.portada-cont')
const headerSmall = document.querySelector('.header_small')
const headerLarge = document.querySelector('.header_large')

    window.addEventListener('scroll', ()=> {
        navSmall.classList.add('filtroNavSmall1')
       if (header.getBoundingClientRect().bottom < 0) {
            $(headerSmall).css('transform', 'translateY(-100%)')
            $(headerSmall).css('position', 'fixed')
            headerSmall.classList.add('bajarHeader')
            $(navSmall).css('transform', 'translateY(-100%)')
            $(navSmall).css('position', 'fixed')
            $(navSmall).css('marginTop', '100px')
            setTimeout(() => {
               navSmall.classList.add('filtroNavSmall2')
            }, 350);
            if(ancho > 600){
                // $(header).css('position', 'fixed')
                $(headerLarge).css('position', 'fixed')
            }
        }
        else {
            $(headerSmall).css('position', 'unset')
            $(headerSmall).css('transform', 'translateY(0%)')
            headerSmall.classList.remove('bajarHeader')
            $(navSmall).css('position', 'unset')
            $(navSmall).css('marginTop', '0px')
            navSmall.classList.remove('filtroNavSmall1')
            navSmall.classList.remove('filtroNavSmall2')
        }
    })

const botonBack = document.querySelector('.botonBack')  

botonBack.addEventListener('click', ()=> {
    $(header).css('position', 'relative')
})

const footerContacto = document.querySelectorAll('.footer_der-item_small img')

const animacionItems = (delay, i, items)=> {
    items[i].animate ([
        {transform:'scale(1.5)'},
        {transform:'traslateX(-10px)'}
    ],
        {duration: 1000,
            delay: delay,
       iterations: '1'}
    )
}

const boom = (time,delay,i)=> {
    footerContacto[i].animate ([
        {outline:'0px solid white'},
        {outline:'15px solid transparent'}
    ],
        {duration: time,
        delay: delay,
        iterations : 1}
    )
}

 setInterval(() => {
            animacionItems(0,0,footerContacto)
            animacionItems(250,1,footerContacto)
            animacionItems(500,2,footerContacto)
            animacionItems(750,3,footerContacto)
            boom(500,0,0)
            boom(500,250,1)
            boom(500,500,2)
            boom(500,750,3)
            }, 3000);


// window.addEventListener('scroll', ()=> {
//     console.log(infoCont.getBoundingClientRect().top / infoCont.getBoundingClientRect().height * 100)
// })

function estaEnElViewport(elem) {
    let distancia = elem.getBoundingClientRect();
    return (
        distancia.top < (window.innerHeight || document.documentElement.clientHeight) && distancia.bottom > 0
    );
}

const nosotrosTexto = document.querySelector('.nosotros-texto');
const nosotrosTexto2 = document.querySelector('.nosotros-texto2');
const nosotrosTexto3 = document.querySelector('.nosotros-texto3');
const nosotrosLista = document.querySelector('.nosotros-cont ul');
const nosotrosCont = document.querySelector('.nosotros-cont')
const subtitulo = document.getElementById('nosotros-subtitulo')
const listaHijos = nosotrosLista.children;

const entrarTexto = (elemento,delay)=> {
    elemento.animate ([
        {transform :'scale(1)'}
    ],
        {duration : 1000,
        delay : delay,
        fill : "forwards"}
    )
}

const entrarLista = (indice, delay)=> {
    listaHijos[indice].animate ([
        {transform :'scale(1)'}
    ],
        {duration : 1000,
        delay : delay,
        fill : "forwards"}
    )
}

window.addEventListener('scroll', ()=> {
    if(infoCont.getBoundingClientRect().height / infoCont.getBoundingClientRect().top * 100 >= 70){
        entrarLista(0,1000)
        entrarLista(1,1500)
        entrarLista(2,2000)
        entrarTexto(nosotrosTexto2,0)
        entrarTexto(nosotrosTexto,500)
        entrarTexto(nosotrosTexto3,2500)
        entrarTexto(subtitulo,3000)
    }
})



















