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

const obtenerDia = (dia)=> {
    if(dia == 0) return 0
    else if(dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5) return 1
    else if(dia == 6) return 2
};

boton.addEventListener('click', ()=> {
    let diaObtenido = obtenerDia(dia);
    let listaViajesObtenida = determinarRuta(diaObtenido,bandaRS,florida);
    listaDeSalidas = obtenerListaDeSalidas(listaViajesObtenida);
    let listaDeDiferenciasObtenidas = obtenerListaDeDiferencias(listaDeSalidas);
    contruirGlobos(listaViajesObtenida,resultadoscontainer,resultadoscont);
    indiceObtenido = obtenerIndiceBusqueda(listaDeDiferenciasObtenidas);
    contenidoDeResultados(listaViajesObtenida,listaDeDiferenciasObtenidas)
    agregarEfectoResultados(indiceObtenido);  
    console.log(listaViajesObtenida)

    mensaje2.appendChild(indicacioncont);
    $('.resultados').css('display', 'flex');
        $('.mensaje2').css('display', 'flex');
        if(mensaje2.classList.contains('mensajeIrse')){
            mensaje2.classList.replace('mensajeIrse', 'mensajeAparece')
        }else{
            mensaje2.classList.add('mensajeAparece')
        }
        irAlObjeto(indiceObtenido);
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
    

    


// boton.addEventListener('click', ()=> {

// })

// determinarRuta(1,talar,bandaRS);
// listaObtenida = obtenerLista(listaDestino);
// obtenerListaDeDiferencias();
// contenidoDeResultados(listaDestino,listaDiferencias);
// obtenerIndiceBusqueda();
// contruirGlobos()




