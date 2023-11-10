const contenedorOpciones = document.querySelector('.contenedor-opciones');


const crearOpciones = ()=> {
    for (let i = 0; i < listaTodosDestino.length; i++) {
        const nombreParada = listaTodosDestino[i];
        const botonParada = document.createElement('BUTTON');
        botonParada.innerHTML = nombreParada;
        botonParada.classList.add('boton-parada')
        contenedorOpciones.appendChild(botonParada);
    }
}

crearOpciones();