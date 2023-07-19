

const servicios = document.querySelector('.servicios')

// servicio.forEach(element => {
//     element.addEventListener('mouseover', ()=>{
//         servicioIMG.forEach(element => {
//             if(!(element.classList.contains('servicioImg'))) 
//             element.classList.add('servicioImg')
//             else if (element.classList.contains('servicioImg2')) 
//             console.log()
//             element.classList.replace('servicioImg2','servicioImg')
//         });
        
//     })
//     element.addEventListener('mouseout', ()=>{
//         servicioIMG.forEach(element => {
//             if(element.classList.contains('servicioImg'))
//         element.classList.replace('servicioImg','servicioImg2')
//         });
//     })
// });

// const servicio2 = document.querySelectorAll('.servicio2');
// const servicioIMG2 = document.querySelectorAll('.servicio-imagen2');

// servicio.addEventListener('mouseover', (e)=> {
//     console.log((e))
// })

// servicio.addEventListener('mouseover', ()=>{
//     if(!(servicioIMG.classList.contains('servicioImg'))) 
//         servicioIMG.classList.add('servicioImg')
//         else if (servicioIMG.classList.contains('servicioImg2')) 
//         console.log()
//         servicioIMG.classList.replace('servicioImg2','servicioImg')      
// })
// servicio.addEventListener('mouseout', ()=>{
//     if(servicioIMG.classList.contains('servicioImg'))
//     servicioIMG.classList.replace('servicioImg','servicioImg2')
// })







const texto = document.querySelector('.textoPrueba')
const cadena = document.querySelector('.textoCadena');



// escritura('Lorem ipsum, dolor sit amet consectetur adipisicing elit',texto)

const enlaces = document.querySelectorAll('.header__enlaces')

var typed5 = new Typed('.textoImgCont span', {
    strings: ['Bienvenidos a nuestra web'],
    typeSpeed: 50,
    backSpeed: 100,
    shuffle: false,
    smartBackspace: true,
    loop: false
});


// const servicio = document.querySelectorAll('.servicio')

// for (let index = 0; index < servicio.length; index++) {
//     if(index == 0) {servicio[index].style.animation = 'aparece .5s linear forwards'}
//     // if(servicio.length / servicio.length) {servicio[index].style.animation = 'aparece2 1s linear 1s forwards'}
    
// }


 

// animacion2()

const botonMenu = document.querySelector('.boton_menu-contenedor');
const navegacionSmall = document.querySelector('.navegacion_small-contenedor');

const contenedorImagenes = document.querySelector('.portada_imagenes');

let contImgsLargo = contenedorImagenes.children.length;
let contImgs = contenedorImagenes.children;
let posicion = 0;
const posiciones = document.querySelector('.portada_posicion');

posiciones.children[posicion].style.backgroundColor = 'white'
posiciones.children[posicion].style.transform = 'scale(1.3)';

const adelantarFoto = ()=> {

    let porcentaje;

    switch (posicion) {
        case 0 :
            porcentaje = -33.3;
            break;
        case 1 :
            porcentaje = -66.6;    
            break;   
    }
    contenedorImagenes.animate ( [
        {
            transform: `translateX(${porcentaje}%)`

        }
    ],
        {
            duration : 1000,
            fill : 'forwards'
            
        }
    )
    if(posicion < contImgsLargo - 1) posicion++;
}

const retrocederFoto = ()=> {

    let porcentaje;

    switch (posicion) {
        case 1 :
            porcentaje = 0;
            break;
        case 2 :
            porcentaje = -33.3;    
            break;   
    }
    contenedorImagenes.animate ( [
        {
            transform: `translateX(${porcentaje}%)`

        }
    ],
        {
            duration : 1000,
            fill : 'forwards'
        }
    )
    if(posicion > 0) posicion--;	
}

const botonRetroceder = document.querySelector('.portada_botonRetroceder');
const botonAvanzar = document.querySelector('.portada_botonAvanzar');




botonRetroceder.addEventListener('click', ()=> {
    retrocederFoto();
    posiciones.children[posicion].style.backgroundColor = 'white';
    posiciones.children[posicion].style.transform = 'scale(1.3)'
    posiciones.children[posicion].style.width = '15px';
    posiciones.children[posicion].style.borderRadius = '5px'
    posiciones.children[posicion+1].style.backgroundColor = 'var(--vacio)';
    posiciones.children[posicion+1].style.transform = 'scale(1)'
    posiciones.children[posicion].style.width = '10px';
    posiciones.children[posicion].style.borderRadius = '5'

})

botonAvanzar.addEventListener('click', ()=> {
    adelantarFoto();
    posiciones.children[posicion].style.backgroundColor = 'white';
    posiciones.children[posicion].style.transform = 'scale(1.3)'
    posiciones.children[posicion-1].style.backgroundColor = 'var(--vacio)';
    posiciones.children[posicion-1].style.transform = 'scale(1)'
    
})











    



















