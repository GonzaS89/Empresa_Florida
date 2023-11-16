const contenedorOpciones = document.querySelector('.contenedor-opciones');

let paradaSeleccionada;
let destinoSeleccionado;
let posiblesDestinos;
let diaObtenido;
let indiceObtenido;

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

const determinarRuta = (dia,punto1,punto2) => {
    let listaDestino = [];
    todosLosHorarios.forEach(idaOVuelta => {
        idaOVuelta.forEach(diaR => {
            diaR[dia].forEach(horario => {
                if(horario.recorrido.includes(punto1)){
                    if(horario.recorrido.includes(punto2)){
                        if(horario.recorrido.indexOf(punto1) < horario.recorrido.indexOf(punto2))
                        listaDestino.push(horario);
                        ordenarListaViajes(listaDestino);
                    }
                }
            });
        });
    });
    return listaDestino;
};

const ordenarListaViajes = (listaAOrdenar) => {
    listaAOrdenar.sort((salida1,salida2) => {
        if(salida1.salida < salida2.salida){
            return -1
        }
        if(salida1.salida > salida2.salida){
            return 1
        }
        else{
            return 0
        }
    })
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
const efectoPulsado = (elemento)=> {
    elemento.animate ( [
        {transform: 'scale(0.8)'},
        {transform: 'scale(1)'}
    ],
        {fill: 'forwards',
        duration: 400}
    )
}

const todosBotonesParadas = document.querySelectorAll('.boton-parada P');

const botonvolver = document.querySelector('.botonvolver-contenedor');

botonvolver.addEventListener('click', ()=> {
    location.reload()
})

todosBotonesParadas.forEach(elemento => {
   elemento.addEventListener('click', ()=> {
        
        
        referencia.innerHTML = 'Elegí el destino donde quieras ir'
        paradaSeleccionada = elemento.innerHTML;
        efectoPulsado(elemento.parentNode);
        posiblesDestinos = destinosCompartidos(paradaSeleccionada,diaObtenido);

        setTimeout(() => {
            const referencia = document.querySelector('.contenedor-titulo H1');
            botonvolver.classList.add('visible');
            borrarBotones()
            crearBotones(posiblesDestinos);
       
            contenedorOpciones.scrollTo(0, 0);
        
            const todosBotonesDestino = document.querySelectorAll('.boton-parada P');

            todosBotonesDestino.forEach(elemento => {
            elemento.addEventListener('click', ()=> {
                destinoSeleccionado = elemento.innerHTML;
                efectoPulsado(elemento.parentNode);

                setTimeout(() => {
                    listaViajesObtenida = determinarRuta(diaObtenido,paradaSeleccionada,destinoSeleccionado);
                listaDeSalidas = obtenerListaDeSalidas(listaViajesObtenida);
                listaDeDiferencias = obtenerListaDeDiferencias(listaDeSalidas);construirGlobos(listaViajesObtenida,resultadoscontainer,resultadoscont);
                indiceObtenido = obtenerIndiceBusqueda(listaDeDiferencias);
                contenidoDeResultados(listaViajesObtenida,listaDeDiferencias);
                agregarEfectoResultados(indiceObtenido);
                $('.resultados').css('display', 'flex');
                $('.mensaje2').css('display', 'flex');
                if(mensaje2.classList.contains('mensajeIrse')){
                    mensaje2.classList.replace('mensajeIrse', 'mensajeAparece')
                }else{
                    mensaje2.classList.add('mensajeAparece')
                }
                irAlObjeto(indiceObtenido);
            })
                }, 600);
                
            
        });
        }, 500);
        



   })
});

resultadoscont.addEventListener('touchmove', () => {

    for (i = 0; i < resultadoscont.children.length; i++) {
        if (i < indiceObtenido || i > indiceObtenido) 
            resultadoscont.children[i].classList.replace('opacar', 'normalizar');
            resultadoscont.children[indiceObtenido].classList.replace('resaltado', 'normalizarResaltado');
            scrollcont.children[0].classList.remove('manitoAnimacionAbajo');
            scrollcont.children[0].classList.remove('manitoAnimacionArriba');
            scrollcont.children[0].classList.remove('manitoAnimacionCentro');
            resultadoscont.classList.replace('opacarFondo', 'normalizarFondo');
    }
})

indicacioncont.addEventListener('click', () => {
    mensaje2.classList.replace('mensajeAparece', 'mensajeIrse')
    scrollcont.children[0].classList.remove('manitoAnimacionAbajo');
    scrollcont.children[0].classList.remove('manitoAnimacionArriba');
    scrollcont.children[0].classList.remove('manitoAnimacionCentro');
    resultadoscont.children[0].classList.remove('resultadosOpcion2');
    resultadoscont.classList.replace('opacarFondo','normalizarFondo');
        
    setTimeout( ()=> {
        $('.mensaje2').css('display', 'none'),borrarGlobos(),
        resultadoscont.classList.remove('normalizarFondo'),
        borrarManito();
    },1000)
})










// botonParada.addEventListener('click', ()=> {
//     borrarBotones();
//     paradaSeleccionada = textoBoton.innerHTML
//     posiblesDestinos = destinosCompartidos(paradaSeleccionada,diaObtenido)
//     return posiblesDestinos
// })











