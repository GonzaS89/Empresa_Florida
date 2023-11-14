const contenedorOpciones = document.querySelector('.contenedor-opciones');

let paradaSeleccionada;
let posiblesDestinos;
let diaObtenido;

function borrarBotones() {
    let arrayResultados = Array.prototype.slice.call(document.getElementsByClassName("boton-parada"), 0);
    for (element of arrayResultados) {
        element.remove();
    }
}

const obtenerDia = ()=> {
    if(dia == 0) return 0
    else if(dia >= 1 & dia <= 5) return 1
    else if(dia == 6) return 2
};

diaObtenido = obtenerDia();

const destinosCompartidos = (opcion,dia)=> {
    let listaDestinos = [];
    todosLosHorarios.forEach(idaOVuelta => {idaOVuelta.forEach(diaR => {
            diaR[dia].forEach(servicio => {
                if(servicio.recorrido.includes(opcion)){
                    servicio.recorrido.forEach(localidades => {
                        if(localidades !== opcion && !(listaDestinos.includes(localidades)) && listaTodosDestino.includes(localidades)){
                            listaDestinos.push(localidades);
                            ordenarLista(listaDestinos)
                        }
                    });
                }
            })
        })
    })
    return listaDestinos;
}

const crearBotones = (listadelocalidades)=> {

    for (let i = 0; i < listadelocalidades.length; i++) {
        const botonParada = document.createElement('DIV');
        const imagenBoton = document.createElement('SPAN');
        const textoBoton = document.createElement('P'); 
        textoBoton.innerHTML = listadelocalidades[i];
        botonParada.classList.add('boton-parada');
        imagenBoton.classList.add('imagen-boton')
        botonParada.appendChild(imagenBoton)
        botonParada.appendChild(textoBoton)
        contenedorOpciones.appendChild(botonParada);
        botonParada.animate ( [
        {transform:'scale(0)'},
        {transform: 'scale(1)'}
        ],
            {duration: 200,
            delay: i * 100,
            fill: 'forwards'   
            }
            )
            
    } return contenedorOpciones
}

crearBotones(listaTodosDestino);

const todosBotonesParadas = document.querySelectorAll('.boton-parada P');

todosBotonesParadas.forEach(elemento => {
   elemento.addEventListener('click', ()=> {
        paradaSeleccionada = elemento.innerHTML;
        posiblesDestinos = destinosCompartidos(paradaSeleccionada,diaObtenido);
        borrarBotones()
        crearBotones(posiblesDestinos);
        contenedorOpciones.scrollTo(0, 0);
   })
});










// botonParada.addEventListener('click', ()=> {
//     borrarBotones();
//     paradaSeleccionada = textoBoton.innerHTML
//     posiblesDestinos = destinosCompartidos(paradaSeleccionada,diaObtenido)
//     return posiblesDestinos
// })











