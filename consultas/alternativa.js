const contenedorOpciones = document.querySelector('.contenedor-opciones');

let paradaSeleccionada;
let destinoSeleccionado;
let posiblesDestinos;
let diaObtenido;
let indiceObtenido;
let valorDelDiaSelect;

function borrarBotones() {
    let arrayResultados = Array.prototype.slice.call(document.getElementsByClassName("boton-parada"), 0);
    for (element of arrayResultados) {
        element.remove();
    }
}

const contenedorFiltros = document.querySelector('.contenedornuevo')
const textoFiltroDia = document.querySelector('.contenedor-filtro p');
const arregloSelectorDeDias = document.querySelector('.selector')


let diaSeleccionado;


const obtenerDia = ()=> {
    if(dia == 0) return 0
    else if(dia >= 1 & dia <= 5) return 1
    else if(dia == 6) return 2
};

diaObtenido = obtenerDia();

const tiposDeDias = 
[
    {   'valor' : 0,
        'nombre' : 'Domingos / Feriados'    
    },
    {   'valor' : 1,
        'nombre' : 'Lunes a viernes'    
    },
    {   'valor' : 2,
        'nombre' : 'Sábados'    
    },
];

let diaPorDefecto;
let contenedorElementoactivo;

const opcionesDeDias = document.querySelectorAll('.contenedor-filtro p');
const contenedorPadreOpcionesDias = document.querySelector('.contenedornuevo')
const contenedorFiltrosIconos = document.querySelectorAll('.contenedor-filtros-iconos');
let diasGrilla;

tiposDeDias.forEach(element => {
    if(diaObtenido == element.valor){ 
        diaPorDefecto = element.nombre;
        valorDelDiaSelect = element.valor;
    }   
});


opcionesDeDias.forEach(elemento => {
    if(elemento.innerHTML !== diaPorDefecto) {
        elemento.parentElement.parentElement.classList.add('opcionDiaOculta')}
        else {contenedorElementoactivo = elemento.parentElement.parentElement;
        contenedorElementoactivo.classList.add('opcionActiva')}

});

for (let i = 0; i < contenedorFiltrosIconos.length; i++) {
    const elemento = contenedorFiltrosIconos[i];
    elemento.addEventListener('click', (e)=> {
        let foco = e.target;
        if(foco.classList.contains('opcionDiaOculta')){
            foco.classList.replace('opcionDiaOculta', 'opcionActiva');
            contenedorElementoactivo.classList.replace('opcionActiva', 'opcionDiaOculta');
            contenedorElementoactivo = elemento;
        };
        
        tiposDeDias.forEach(element => {
            if(element.nombre.toUpperCase() == elemento.innerText){ 
                valorDelDiaSelect = element.valor;
            }
        });
    })
}

const destinosCompartidos = (opcion,dia)=> {
    let listaDestinos = [];
    todosLosHorarios.forEach(idaOVuelta => {idaOVuelta.forEach(diaR => {
            diaR[dia].forEach(servicio => {
                if(servicio.recorrido.includes(opcion)){
                    servicio.recorrido.forEach(localidades => {
                        if(localidades !== opcion && !(listaDestinos.includes(localidades)) && 
                        servicio.recorrido.indexOf(localidades) > servicio.recorrido.indexOf(opcion) && listaTodosDestino.includes(localidades)){
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
        const imagenBoton = document.createElement('IMG');
        const textoBoton = document.createElement('P'); 
        textoBoton.innerHTML = listadelocalidades[i];
        botonParada.classList.add('boton-parada');
        imagenBoton.classList.add('imagen-boton')
        imagenBoton.src = `../Imagenes/${textoBoton.innerHTML}.jpg`;
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
        const imagenBoton = document.createElement('IMG');
        const paradaDestino = document.createElement('P');
        botonDestino.classList.add('boton-destino');
        imagenBoton.src = `../Imagenes/${listadelocalidades[i]}.jpg`
        paradaDestino.innerHTML = listadelocalidades[i];
        botonDestino.appendChild(imagenBoton);
        botonDestino.appendChild(paradaDestino); 
        // botonDestino.appendChild(fondoBoton)
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

const todosBotonesParadas = document.querySelectorAll('.boton-parada');

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

let todosBotonesDestino;
todosBotonesParadas.forEach(elemento => {
    elemento.addEventListener('click', (e)=> {


            contenedorFiltros.classList.add('contenedor-filtro-animacionOUT')
            contenedorFiltros

            efectoPulsado(elemento);
    
                const referencia = document.querySelector('.contenedor-titulo H1');
                paradaSeleccionada = e.target.nextSibling.innerHTML;
                referencia.innerHTML = `¿Hacia dónde querés ir desde ${paradaSeleccionada}?`
                posiblesDestinos = destinosCompartidos(paradaSeleccionada,valorDelDiaSelect);
                botonvolver.classList.add('visible');
                borrarBotones()
                crearBotonesConDestinos(posiblesDestinos);

            contenedorOpciones.scrollTo(0, 0);
        
            todosBotonesDestino = document.querySelectorAll('.boton-destino');

            todosBotonesDestino.forEach(elemento => {
                elemento.addEventListener('click', ()=> {
                    $('.indicacion-cont').css('display', 'flex');
                    destinoSeleccionado = elemento.querySelector('P').innerHTML; 
                
                efectoPulsado(elemento);
                listaViajesObtenida = determinarRuta(valorDelDiaSelect,paradaSeleccionada,destinoSeleccionado);
                listaDeSalidas = obtenerListaDeSalidas(listaViajesObtenida);
                listaDeDiferencias = obtenerListaDeDiferencias(listaDeSalidas);
                construirNuevosGlobos(listaViajesObtenida);
                indiceObtenido = obtenerIndiceBusqueda(listaDeDiferencias);
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
   })
});



resultadoscont.addEventListener('touchmove', () => {

    for (i = 0; i < resultadoscont.children.length; i++) {
        if (i < indiceObtenido || i > indiceObtenido) 
            resultadoscont.children[i].classList.replace('opacar', 'normalizar');
            resultadoscont.children[indiceObtenido].classList.replace('resaltado', 'normalizarResaltado');
            // scrollcont.children[0].classList.remove('manitoAnimacionAbajo');
            // scrollcont.children[0].classList.remove('manitoAnimacionArriba');
            // scrollcont.children[0].classList.remove('manitoAnimacionCentro');
            resultadoscont.classList.replace('opacarFondo', 'normalizarFondo');
    }
})

indicacioncont.addEventListener('click', () => {
    $('.indicacion-cont').css('display', 'none');
    mensaje2.classList.replace('mensajeAparece', 'mensajeIrse')
    resultadoscont.children[0].classList.remove('resultadosOpcion2');
    resultadoscont.classList.replace('opacarFondo','normalizarFondo');
    borrarGlobos()

        
    setTimeout( ()=> {
        $('.mensaje2').css('display', 'none'),
        resultadoscont.classList.remove('normalizarFondo')
    },1000)
})

