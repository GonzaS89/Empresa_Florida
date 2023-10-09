const resultadoscont = document.querySelector('.resultados-cont');
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
const crearListaDestino = ()=> {
    todosDestinoTucuman.forEach(viajes => {    
        viajes[1].forEach(viaje => {
            if(viaje.recorrido.includes(posse)){
                listaDestino.push(viaje);
                ordenarListaViajes();
            }
        });
    });
}

crearListaDestino();
contruirGlobos(listaDestino,resultadoscontainer,resultadoscont);

