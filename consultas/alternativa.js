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

const crearBotonesDeSalida = (listadelocalidades)=> {

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
        // {boxShadow: 'none'}
        ],
            {duration: 200,
            delay: i * 100,
            fill: 'forwards'   
            }
            )
            
    } return contenedorOpciones
}

const crearBotonesConDestinos = (listadelocalidades)=> {
    for (let i = 0; i < listadelocalidades.length; i++) {
        const botonDestino = document.createElement('DIV');
        const paradaSalida = document.createElement('H4'); 
        const imagenBoton = document.createElement('SPAN');
        const paradaDestino = document.createElement('P');
        botonDestino.classList.add('boton-destino');
        paradaSalida.innerHTML = paradaSeleccionada;
        paradaSalida.classList.add('sobre')
        paradaDestino.classList.add('sobre')
        imagenBoton.classList.add('imagen-boton-destino');
        paradaDestino.innerHTML = listadelocalidades[i];
        botonDestino.appendChild(paradaSalida);
        botonDestino.appendChild(imagenBoton);
        botonDestino.appendChild(paradaDestino); 
        contenedorOpciones.appendChild(botonDestino);
        botonDestino.animate ( [
            {transform:'scale(0)'},
            {transform: 'scale(1)'}
            // {boxShadow: 'none'}
            ],
                {duration: 200,
                delay: i * 100,
                fill: 'forwards'   
                }
                )
    }
    

}

crearBotonesDeSalida(listaTodosDestino);
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

const paradasContenedor = document.querySelectorAll('.parada-contenedor');
const lineasRecorrido = document.querySelectorAll('.linearecorrido2');

for (let i = 0; i < paradasContenedor.length; i++) {
    const element = paradasContenedor[i];
    if(i > 0 && i < paradasContenedor.length - 1) 
    $(element).css('transform', 'translateX(-40px)');
    if(i > 0 && i % 2 == 0) 
    $(element).css('transform', 'translateX(40px)');
}

for (let i = 0; i < lineasRecorrido.length; i++) {
    const element = lineasRecorrido[i];
    if(i % 2 == 0) $(element).css('transform', 'rotate(145deg)');
    else $(element).css('transform', 'rotate(35deg)');
    
}

todosBotonesParadas.forEach(elemento => {
   elemento.addEventListener('click', ()=> {

            efectoPulsado(elemento.parentNode);
            setTimeout(() => {
                const referencia = document.querySelector('.contenedor-titulo H1');
            referencia.innerHTML = 'Elegí el destino donde quieras ir'
            paradaSeleccionada = elemento.innerHTML;
            console.log(paradaSeleccionada)
            posiblesDestinos = destinosCompartidos(paradaSeleccionada,diaObtenido);
            botonvolver.classList.add('visible');
            borrarBotones()
            crearBotonesConDestinos(posiblesDestinos);
       
            contenedorOpciones.scrollTo(0, 0);
        
            const todosBotonesDestino = document.querySelectorAll('.boton-destino');

            

            todosBotonesDestino.forEach(elemento => {
                elemento.addEventListener('click', ()=> {
                    destinoSeleccionado = elemento.querySelector('P').innerHTML;
                    console.log(destinoSeleccionado)    
                
                efectoPulsado(elemento);
                listaViajesObtenida = determinarRuta(diaObtenido,paradaSeleccionada,destinoSeleccionado);
                
                // listaViajesObtenida.forEach(element => {
                //     console.log(element.recorrido)
                // });
                listaDeSalidas = obtenerListaDeSalidas(listaViajesObtenida);
                listaDeDiferencias = obtenerListaDeDiferencias(listaDeSalidas);
                // construirGlobos(listaViajesObtenida,resultadoscontainer,resultadoscont);
                construirNuevosGlobos(listaViajesObtenida);
                indiceObtenido = obtenerIndiceBusqueda(listaDeDiferencias);
                // contenidoDeResultados(listaViajesObtenida,listaDeDiferencias);
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
    destinoSeleccionado = undefined
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











