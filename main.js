const servicio = document.querySelector('.servicio');
const servicioIMG = document.querySelector('.servicio-imagen');

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
    strings: ['Bienvenidos a nuestra web','Aquí podras ver todos nuestros servicios','Conocer nuestras instalaciones'],
    typeSpeed: 100,
    backSpeed: 35,
    cursorChar: '_',
    shuffle: false,
    smartBackspace: false,
    loop: true
});








    



















