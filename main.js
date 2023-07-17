

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

// var typed5 = new Typed('.portadaT', {
//     strings: ['Bienvenidos a nuestra web'],
//     typeSpeed: 50,
//     backSpeed: 100,
//     shuffle: false,
//     smartBackspace: true,
//     loop: true
// });


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
console.log(contImgs[posicion])

const moverFoto = ()=> {
    contenedorImagenes.animate ( [
        {
            transform: 'translateX(-33.3%)'
        }
    ],
        {
            duration : 1000,
            fill : 'forwards'
        }
    )
    posicion++ ;
}

contenedorImagenes.addEventListener('click', ()=> {
    if(posicion < contImgsLargo) {
        moverFoto()
    }
})







    



















