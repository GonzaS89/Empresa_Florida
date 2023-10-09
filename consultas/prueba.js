let listaDestino = [];

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
const crearListaDestino = (idaOVuelta,ciudad)=> {
    idaOVuelta.forEach(viajes => {    
        viajes[1].forEach(viaje => {
            if(viaje.recorrido.includes(ciudad)){
                listaDestino.push(viaje);
                ordenarListaViajes();
            }
        });
    });
}

crearListaDestino(todosDestinoTucuman,alternativa);
console.log(listaDestino)
contruirGlobos(listaDestino,resultadoscontainer,resultadoscont);

