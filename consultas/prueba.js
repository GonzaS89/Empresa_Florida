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
contruirGlobos(listaDestino,resultadoscontainer,resultadoscont);

const determinarRuta = () => {
    todosLosHorarios.forEach(idaOVuelta => {
        idaOVuelta.forEach(diaRango => {
            diaRango[1].forEach(horario => {
                if(horario.recorrido.includes(bandaRS)){
                    if(horario.recorrido.includes(bCancha)){
                        if(horario.recorrido.indexOf(bandaRS) < horario.recorrido.indexOf(bCancha))
                        listaDestino.push(horario);
                        ordenarListaViajes();
                    }
                }
            });
        });
    });
    console.log(listaDestino)
};


determinarRuta();


