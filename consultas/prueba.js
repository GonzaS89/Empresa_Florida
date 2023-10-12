let listaDestino = [];
let estanEnElMismoRecorrido;

const ordenarListaViajes = () => {
    listaDestino.sort((salida1,salida2) => {
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
const crearListaDestino = (idaOVuelta,ciudad1,ciudad2)=> {
    idaOVuelta.forEach(viajes => {    
        viajes[1].forEach(viaje => {
            if(viaje.recorrido.includes(ciudad1)){
                if(viaje.recorrido.includes(ciudad2)){
                    estanEnElMismoRecorrido = true;
                    listaDestino.push(viaje.recorrido);
                    ordenarListaViajes();
                }
            }
        });
    });
    let mostrar = estanEnElMismoRecorrido ? listaDestino : 'No están en el mismo recorrido';
    console.log(mostrar);
};

// crearListaDestino(todosDestinoTucuman,fortin,ralos);
// contruirGlobos(listaDestino,resultadoscontainer,resultadoscont);

const determinarRuta = (dia,punto1,punto2) => {
    todosLosHorarios.forEach(idaOVuelta => {
        idaOVuelta.forEach(diaR => {
            diaR[dia].forEach(horario => {
                if(horario.recorrido.includes(punto1)){
                    if(horario.recorrido.includes(punto2)){
                        if(horario.recorrido.indexOf(punto1) < horario.recorrido.indexOf(punto2))
                        listaDestino.push(horario);
                        ordenarListaViajes();
                    }
                }
            });
        });
    });
    
};


// determinarRuta(1,talar,bandaRS);
// listaObtenida = obtenerLista(listaDestino);
// obtenerListaDeDiferencias();
// contenidoDeResultados(listaDestino,listaDiferencias);
// obtenerIndiceBusqueda();
// contruirGlobos()




