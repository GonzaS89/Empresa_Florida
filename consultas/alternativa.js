const contenedorOpciones = document.querySelector('.contenedor-opciones');



const crearOpciones = ()=> {
    for (let i = 0; i < listaTodosDestino.length; i++) {
        const nombreParada = listaTodosDestino[i];
        const botonParada = document.createElement('BUTTON');
        botonParada.innerHTML = nombreParada;
        botonParada.classList.add('boton-parada')
        contenedorOpciones.appendChild(botonParada);
        botonParada.animate ( [
            {transform:'scale(0)'},
            {transform: 'scale(1)'}
        ],
            {duration:250 ,
             delay: i * 100,
             fill: 'forwards'   
            }
        )
    }
}

crearOpciones();


