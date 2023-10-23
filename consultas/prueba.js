let estanEnElMismoRecorrido;

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


// const crearListaDestino = (idaOVuelta,ciudad1,ciudad2)=> {
//     idaOVuelta.forEach(viajes => {    
//         viajes[1].forEach(viaje => {
//             if(viaje.recorrido.includes(ciudad1)){
//                 if(viaje.recorrido.includes(ciudad2)){
//                     estanEnElMismoRecorrido = true;
//                     listaDestino.push(viaje.recorrido);
//                     ordenarListaViajes();
//                 }
//             }
//         });
//     });
//     let mostrar = estanEnElMismoRecorrido ? listaDestino : 'No están en el mismo recorrido';
//     console.log(mostrar);
// };

// crearListaDestino(todosDestinoTucuman,fortin,ralos);
// contruirGlobos(listaDestino,resultadoscontainer,resultadoscont);


// const determinarRuta = (dia,punto1,punto2) => {
//     let listaDestino = [];
//     todosLosHorarios.forEach(idaOVuelta => {
//         idaOVuelta.forEach(diaR => {
//             diaR[dia].forEach(horario => {
//                 if(horario.recorrido.includes(punto1)){
//                     if(horario.recorrido.includes(punto2)){
//                         if(horario.recorrido.indexOf(punto1) < horario.recorrido.indexOf(punto2))
//                         listaDestino.push(horario);
//                         ordenarListaViajes(listaDestino);
//                     }
//                 }
//             });
//         });
//     });
//     return listaDestino;
// };

const selectSalida = document.getElementById('selector');
const selectLlegada = document.getElementById('selector2');

const obtenerDia = (dia)=> {
    if(dia == 0) return 0
    else if(dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5) return 1
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

// boton.addEventListener('click', ()=> {
    let diaObtenido = obtenerDia(dia);
    
    // listaDeSalidas = obtenerListaDeSalidas(listaViajesObtenida);
    // let listaDeDiferenciasObtenidas = obtenerListaDeDiferencias(listaDeSalidas);
    // contruirGlobos(listaViajesObtenida,resultadoscontainer,resultadoscont);
    // indiceObtenido = obtenerIndiceBusqueda(listaDeDiferenciasObtenidas);
    // contenidoDeResultados(listaViajesObtenida,listaDeDiferenciasObtenidas)
    // agregarEfectoResultados(indiceObtenido);  
    // console.log(listaViajesObtenida)

    // mensaje2.appendChild(indicacioncont);
    // $('.resultados').css('display', 'flex');
    //     $('.mensaje2').css('display', 'flex');
    //     if(mensaje2.classList.contains('mensajeIrse')){
    //         mensaje2.classList.replace('mensajeIrse', 'mensajeAparece')
    //     }else{
    //         mensaje2.classList.add('mensajeAparece')
    //     }
    //     irAlObjeto(indiceObtenido);
// })
// indicacioncont.addEventListener('click', () => {
//     mensaje2.classList.replace('mensajeAparece', 'mensajeIrse')
//     scrollcont.children[0].classList.remove('manitoAnimacionAbajo');
//     scrollcont.children[0].classList.remove('manitoAnimacionArriba');
//     scrollcont.children[0].classList.remove('manitoAnimacionCentro');
//     resultadoscont.children[0].classList.remove('resultadosOpcion2');
//     resultadoscont.classList.replace('opacarFondo','normalizarFondo');
        
//     setTimeout( ()=> {
//         $('.mensaje2').css('display', 'none'),borrarGlobos(),
//         resultadoscont.classList.remove('normalizarFondo'),
//         borrarManito();
//     },1000)
// })
    

    


// boton.addEventListener('click', ()=> {

// })

// determinarRuta(1,talar,bandaRS);
// listaObtenida = obtenerLista(listaDestino);
// obtenerListaDeDiferencias();
// contenidoDeResultados(listaDestino,listaDiferencias);
// obtenerIndiceBusqueda();
// contruirGlobos()



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


let listaPosiblesDestino = [];

// const filtrarDestinosPosibles = ()=> {
//     listaViajesObtenida.forEach(viaje => {
//         viaje.recorrido.forEach(localidad => {
//             if(!listaPosiblesDestino.includes(localidad) && localidad !== nombreOpcionIdaObtenida){
//                 listaPosiblesDestino.push(localidad)
//                 ordenarLista(listaPosiblesDestino)
//             }
//         });
//     });
// }

const posiblesDestinos = (opcion)=> {
    let listaLocalidades = [];
    todosLosHorarios.forEach(idaOVuelta => {
        idaOVuelta.forEach(diaR => {
            diaR[2].forEach(servicio => {
                if(servicio.recorrido.includes(opcion)){
                    servicio.recorrido.forEach(localidades => {
                        if(localidades !== opcion && !(listaLocalidades.includes(localidades))){
                            listaLocalidades.push(localidades);
                        }
                    });
                }
            })
        })
    })
    return listaLocalidades;
}

let nombreOpcionIdaObtenida;
let nombreOpcionLlegadaObtenida;

const aaaa = ()=> {
    nombreOpcionIdaObtenida = comprobarOpcionSeleccionada(selectSalida);
    listaPosiblesDestino =  posiblesDestinos(nombreOpcionIdaObtenida)
    // listaViajesObtenida = determinarRuta(diaObtenido,nombreOpcionIdaObtenida,nombreOpcionLlegadaObtenida);
    // console.log(nombreOpcionIdaObtenida);
    // console.log(listaPosiblesDestino);
}

selectSalida.addEventListener('click', ()=> {
    if(nombreOpcionIdaObtenida !== undefined){
        nombreOpcionIdaObtenida == comprobarOpcionSeleccionada(selectSalida);
        listaPosiblesDestino = posiblesDestinos(nombreOpcionLlegadaObtenida);
    }
})

let estaLlenoSelectLlegada = false;

const bbbb = ()=> {
    // if(listaViajesObtenida !== undefined){
    //     filtrarDestinosPosibles();
    // }
    if(listaPosiblesDestino !== undefined){
        estaLlenoSelectLlegada = true;
        crearSelectOptions(selectLlegada,listaPosiblesDestino,'opcion2')
        if(listaPosiblesDestino.length > 0 && listaPosiblesDestino.length + 1 == selectLlegada.length){
            clearInterval(actualizar2)
        }
    }
}

selectSalida.addEventListener('click', ()=> {
    if(estaLlenoSelectLlegada){
        borrarOpcionesSelect();
    }else{
        bbbb();
    }
})

function borrarOpcionesSelect() {
    let arrayResultados = Array.prototype.slice.call(document.getElementsByClassName("opcion2"), 0);
    for (element of arrayResultados) {
        element.remove();
    }
}

const actualizar = setInterval(aaaa,2200);
const actualizar2 = setInterval(bbbb, 1500);

crearSelectOptions(selectSalida,listaTodosDestino,'opcion1');


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