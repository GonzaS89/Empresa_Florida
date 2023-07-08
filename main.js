

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


const fotos = document.querySelector('.fotos');
const foto = document.querySelector('.fotoC');
const cerrarFoto = document.querySelector('.cerrarFoto');
const mostrarFoto = document.querySelector('.mostrarFoto')



fotos.addEventListener('click', (e)=> {
    let dataImagen = e.target.attributes.src.nodeValue;
    $('.fotoC').css('backgroundImage',`url(${dataImagen})`);
    $('.mostrarFoto').css('position', 'fixed');
    $('.mostrarFoto').css('display','flex');
    $('.cerrarFoto').css('display', 'flex');
    if(!(foto.classList.contains('ingresaFoto'))) foto.classList.add('ingresaFoto');
    else if(foto.classList.contains('ingresaFoto')) foto.classList.replace('retiraFoto', 'ingresaFoto')
})

cerrarFoto.addEventListener('click',()=> {
    $('.mostrarFoto').css('display', 'none');
    $('.cerrarFoto').css('display', 'none');
})

const texto = document.querySelector('.textoPrueba')
const cadena = document.querySelector('.textoCadena');


let escritura = (string , seccion) => {
    let arr = string.split('');
    let i = 0;
    let escribir = setInterval( function() {
    seccion.textContent += arr[i];
        i++;
        if(i === arr.length) {
        clearInterval(escribir)
        };
    }, 75);
};

// escritura('Lorem ipsum, dolor sit amet consectetur adipisicing elit',texto)

const enlaces = document.querySelectorAll('.header__enlaces')

var typed5 = new Typed('.textoPrueba', {
    strings: ['Bienvenidos a nuestra web'],
    typeSpeed: 100,
    backSpeed: 35,
    shuffle: false,
    smartBackspace: false,
    loop: false
});


// const servicio = document.querySelectorAll('.servicio')

// for (let index = 0; index < servicio.length; index++) {
//     if(index == 0) {servicio[index].style.animation = 'aparece .5s linear forwards'}
//     // if(servicio.length / servicio.length) {servicio[index].style.animation = 'aparece2 1s linear 1s forwards'}
    
// }

const animacion2 = ()=> {
    servicio[1].animate ([ 
        {filter: 'opacity(1)'},
        // {box-shadow: '20px 5px 15px rgba(0, 0, 0, 0.469)'},
        {transform: 'translateY(-30px)'}
], {
  // opciones de sincronización
  duration: 500,
  delay: 750,
  fill: "forwards"
 })
 setTimeout(() => {
    servicio[1].style.boxShadow = '20px 5px 15px rgba(0, 0, 0, 0.469)'
    servicio[1].style.filter = 'opacity(1)'
 }, 750);
 
}

// animacion2()

const botonMenu = document.querySelector('.boton_menu-contenedor');
const navegacionSmall = document.querySelector('.navegacion_small-contenedor');

botonMenu.addEventListener('click', ()=> {
    navegacionSmall.animate ([
        {transform: 'translateY(0)'}
    ], 
    {duration : 200,
    fill: "forwards"}
    )

    
    
})









    



















