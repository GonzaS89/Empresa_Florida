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

servicio.addEventListener('mouseover', (e)=> {
    console.log((e))
})

servicio.addEventListener('mouseover', ()=>{
    if(!(servicioIMG.classList.contains('servicioImg'))) 
        servicioIMG.classList.add('servicioImg')
        else if (servicioIMG.classList.contains('servicioImg2')) 
        console.log()
        servicioIMG.classList.replace('servicioImg2','servicioImg')      
})
servicio.addEventListener('mouseout', ()=>{
    if(servicioIMG.classList.contains('servicioImg'))
    servicioIMG.classList.replace('servicioImg','servicioImg2')
})


const fotos = document.querySelector('.fotos');

let dataImagen = '';

fotos.addEventListener('click', (e)=> {
    console.log(e.target)

    dataImagen = `${e.target}`

    console.log(dataImagen)
})
















