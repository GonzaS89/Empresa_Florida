
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

const selectSalida = document.getElementById('selector');
const selectLlegada = document.getElementById('selector2');

const obtenerDia = ()=> {
    if(dia == 0) return 0
    else if(dia >= 1 & dia <= 5) return 1
    else if(dia == 6) return 2
};

const comprobarOpcionSeleccionada = (array)=> {
    let nombreOpcion
    for (let i = 0; i < array.length; i++) {
        const opcion = array[i];
        {if(opcion.selected) nombreOpcion = opcion.innerHTML};
    }
    return nombreOpcion
}

let listaViajesObtenida


// let diaObtenido = obtenerDia();

const crearLabelOptions = (select,option,arrayViajes)=> {
    for (let i = 0; i < select.length - 1; i++) {
        let nombreOption
        nombreOption = arrayViajes[i];
        option.innerHTML = nombreOption;
    }
}


const crearSelectOptions = (select,arrayViajes,clase)=> {
    for (let index = 0; index < arrayViajes.length; index++) {
        const opcionSelect = document.createElement('OPTION');
        select.appendChild(opcionSelect);
        opcionSelect.classList.add(clase)
        crearLabelOptions(select,opcionSelect,arrayViajes)
    }
}

function borrarOpcionesSelect() {
    let arrayResultados = Array.prototype.slice.call(document.getElementsByClassName("opcion2"), 0);
    for (element of arrayResultados) {
        element.remove();
    }
}

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

let listaDestinos;
let nombreOpcionIdaObtenida;
let nombreOpcionLlegadaObtenida;
let estaVacioSelectLlegada = true;

crearSelectOptions(selectSalida,listaTodosDestino,'opcion1');

let opcionSeleccionada;
let opcionSeleccionada2;

const actualiza = ()=> {
    for (let i = 0; i < selectSalida.length; i++) {
        const opcion = selectSalida[i];
        if(opcion.selected && opcion && i > 0 && opcion !== undefined) {
            opcionSeleccionada = opcion.innerHTML;
            console.log(opcionSeleccionada)
            listaDestinos = destinosCompartidos(opcionSeleccionada,diaObtenido);
            crearSelectOptions(selectLlegada,listaDestinos,'opcion2');
            if(selectLlegada.length == listaDestinos.length + 1){
                clearInterval(timerActualiza)
            }else{
                console.log('esta vacio')
            }
        }
    }
}

const actualiza2 = ()=> {
    for (let i = 0; i < selectLlegada.length; i++) {
        const opcion = selectLlegada[i];
        if(opcion.selected){
            opcionSeleccionada2 = opcion.innerHTML
            console.log(opcionSeleccionada2)
        }
    }
}



const timerActualiza = setInterval(actualiza, 500);
const timerActualiza2 = setInterval(actualiza2,500);



boton.addEventListener('click', ()=> {
    listaViajesObtenida = determinarRuta(diaObtenido,opcionSeleccionada,opcionSeleccionada2);
    listaDeSalidas = obtenerListaDeSalidas(listaViajesObtenida);
    listaDeDiferencias = obtenerListaDeDiferencias(listaDeSalidas);construirGlobos(listaViajesObtenida,resultadoscontainer,resultadoscont);
    indiceObtenido = obtenerIndiceBusqueda(listaDeDiferencias);
    contenidoDeResultados(listaViajesObtenida,listaDeDiferencias);
    agregarEfectoResultados(indiceObtenido)
    $('.resultados').css('display', 'flex');
    $('.mensaje2').css('display', 'flex');
    if(mensaje2.classList.contains('mensajeIrse')){
        mensaje2.classList.replace('mensajeIrse', 'mensajeAparece')
    }else{
        mensaje2.classList.add('mensajeAparece')
    }
    irAlObjeto(indiceObtenido);
})

indicacioncont.addEventListener('click', ()=> {
    
    borrarOpcionesSelect();
    selectSalida[0].selected = true;
    selectLlegada[0].selected = true;
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
}); 





// let promesa = new Promise (
//     function (resolve, reject){
//         if(estaLlenoSelectLlegada){resolve('esta lleno')
//         }else{
//             reject('esta vacio')
//         }
//     });

// setInterval(() => {
//     promesa.then(
//         function (resul) {console.log(resul)},
//          function (error){console.log(error)}
//      )
//      console.log(estaLlenoSelectLlegada)
// }, 1000);   


