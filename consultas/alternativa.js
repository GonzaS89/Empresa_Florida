const contenedorOpciones = document.querySelector('.contenedor-opciones');

let paradaSeleccionada;



const botonesParadas = ()=> {

    for (let i = 0; i < listaTodosDestino.length; i++) {
        const botonParada = document.createElement('DIV');
        const imagenBoton = document.createElement('SPAN');
        const textoBoton = document.createElement('P'); 
        textoBoton.innerHTML = listaTodosDestino[i];
        botonParada.classList.add('boton-parada');
        imagenBoton.classList.add('imagen-boton')
        botonParada.appendChild(imagenBoton)
        botonParada.appendChild(textoBoton)
        contenedorOpciones.appendChild(botonParada);
        botonParada.animate ( [
        {transform:'scale(0)'},
        {transform: 'scale(1)'}
        ],
            {duration: 200,
            delay: i * 100,
            fill: 'forwards'   
            }
            )
        botonParada.addEventListener('click', ()=> {
            paradaSeleccionada = botonParada.innerHTML
            console.log(paradaSeleccionada);
        })    
    }
}

botonesParadas();





