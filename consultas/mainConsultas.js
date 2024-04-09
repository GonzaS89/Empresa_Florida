
document.addEventListener('DOMContentLoaded', function () {
    iniciarApp();
})

function iniciarApp() {
    // reloj();
    // busquedaManual();
};

let momentoActual = new Date();
let hora = momentoActual.getHours();
let minutos = momentoActual.getMinutes();
let dia = momentoActual.getDay();
let fecha = momentoActual.getDate();
let mes = momentoActual.getMonth()
let horaEnEnteros = (hora * 60) + minutos;
let diaRango = [];
let ruta;
let tituloResultado = document.getElementById('tituloResultado')
let feriado = false;
let semiFeriado = false;
let feriadoPrevio = false;
let rutaObtenida;
let tipoDeDia;

/* Funcion para determinar la localidad de posicion*/

const mensaje2 = document.querySelector('.mensaje2');
const resultadoscontainer = document.querySelector('.resultados-container');
const indicacioncont = document.querySelector('.indicacion-cont');
const resultadoscont = document.querySelector('.resultados-cont');
let resolucion = document.documentElement.clientWidth;

const botonCierraMensaje = document.querySelector('.botoncerrado');
const mensajecontenedor = document.querySelector('.mensaje-contenedor');
const mensaje = document.querySelector('.mensaje-cuadro')

// addEventListener('load', () => {
//     scrollcont.children[0].classList.add('manito')
// })

const cuerpoHorarios = document.querySelector('.cuerpo');
const botonConsultaHorarios = document.querySelector('.cajahorarios')

botonConsultaHorarios.addEventListener('click' , ()=> {

    botonConsultaHorarios.classList.add('efectoBotonPresionado')
    setTimeout(() => {
        $(cuerpoHorarios).css('display' , 'flex');
    }, 250);
})


function borrarGlobos() {
    let arrayResultados = Array.prototype.slice.call(document.getElementsByClassName("contenedor-vista"), 0);
    for (element of arrayResultados) {
        element.remove();
    }
}

// Funcion para saber que dia de la semana es

const obtenerDiaRuta = (x)=> {
    
    if (x == 0) diaRango = ruta[0].slice(0, ruta[0].length);
    else if (dia == 1 || semiFeriado || feriadoPrevio && posicion2 == 2)
    {diaRango = ruta[1].slice(1, ruta[1].length)}
    else if(fecha == 6 && mes == 6 && posicion2 == 2) {diaRango = ruta[1].slice(0, ruta[1].length - 1)}
    else if (x >= 1 && x <= 5) {diaRango = ruta[1].slice(0, ruta[1].length);}
    else if (x == 6) {diaRango = ruta[2].slice(0, ruta[2].length);}

    return diaRango
}

// Funcion para saber si es normal o feriado

const definirDia = ()=> {
    tipoDeDia = (fecha == 8 && mes == 11) ? 'feriado' : 'normal';
    switch (tipoDeDia) {
        case 'feriado':
            tituloResultado.textContent = `Hoy, ${diasDeLaSemana[dia].toLowerCase()} (feriado): Circulación como día domingo `;
            rutaObtenida = obtenerDiaRuta(0);
            break;
        case 'normal':
            tituloResultado.textContent = `Hoy, ${diaSemana.toLowerCase()}, tenés éstos servicios`;
            rutaObtenida = obtenerDiaRuta(dia);
            break;  
    }
    return rutaObtenida;
}

// Funcion para saber para saber si dias hay feriado previo, semi-feriado
const definirNormalidad = ()=> {
    if((fecha == 22) && (mes == 7)) {
        feriadoPrevio = true; 
        rutaObtenida = obtenerDiaRuta(dia);
        tituloResultado.textContent = `Hoy, ${diaSemana.toLowerCase()}, tenés éstos servicios`
    }

    else if ((fecha == 26) && (mes == 4)) {
        semiFeriado = true;
        rutaObtenida = obtenerDiaRuta(6);
        tituloResultado.textContent = `Hoy, ${diasDeLaSemana[dia].toLowerCase()} (feriado): Circulación como día sábado `;
    }

    else if ((fecha == 25) && (mes == 8)){
        let semiParoGrilla;
        semiParoGrilla = obtenerDiaRuta(1);
        let posicion = 0;
        let posiciones = [];
        for (const horario of semiParoGrilla) {
            if(horario.salida >= 8.30 && horario.salida < 11){
                posicion = (semiParoGrilla.indexOf(horario))
                posiciones.push(posicion);
            }
        }
        semiParoGrilla.splice(posiciones[0], posiciones.length)
        posicion = 0;
        posiciones = [];
        for (const horario of semiParoGrilla) {
            if(horario.salida >= 14.3 && horario.salida < 17){
                posicion = (semiParoGrilla.indexOf(horario))
                posiciones.push(posicion);
            }
        }
        semiParoGrilla.splice(posiciones[0], posiciones.length)
        rutaObtenida = semiParoGrilla;
    }
    else{
        definirDia();
    }
}

// Funcion para filtrar los valores de salidas de los servicios
const obtenerListaDeSalidas = (x)=> {
    let listaDelDia = []
    for (i = 0; i < x.length; i++) listaDelDia.push(x[i].salida);
    // Aqui usamos la lista con los salidaes y las pasamos a numero enteros junto con los minutos
    return listaDelDia
}
const obtenerListaDeDiferencias = (arrayDeSalidas)=> {
    let horariosEnEnteros = [];
    let listaDiferencias = [];

    for (let i = 0; i < arrayDeSalidas.length; i++) {
        let horasSalidaEnEnteros = Math.trunc(arrayDeSalidas[i]) * 60;
        let minutosSalidaEnEnteros = ((arrayDeSalidas[i]) - (Math.trunc(arrayDeSalidas[i]))) * 100;
        let horaMinutosSalidasEnEnteros = horasSalidaEnEnteros + minutosSalidaEnEnteros;
        horariosEnEnteros.push(horaMinutosSalidasEnEnteros);
    }
    /*Recorremos el array y buscamos coincidencias con el horario actual*/
    for (i = 0; i < horariosEnEnteros.length; i++) {
        
        let difHoraHorarios = horaEnEnteros - horariosEnEnteros[i];
        listaDiferencias.push(Math.round(difHoraHorarios));
    }
    
    return listaDiferencias
}

const esPar = (numero) => {
    if(numero % 2 == 0) true;
    else false;
}

// Funcion que construye los globos de resultados

const construirNuevosGlobos = (rutas)=> {

    // GENERACION DE LOS DIVS PRINCIPALES

    for (let i = 0; i < rutas.length; i++) {

        const servicio = rutas[i]
        
        const contenedorVista = document.createElement('DIV');
        contenedorVista.classList.add('contenedor-vista')
        const vistaIzquierda = document.createElement('DIV');
        vistaIzquierda.classList.add('vista-izquierda')
        const vistaDerecha = document.createElement('DIV');
        vistaDerecha.classList.add('vista-derecha');

        // CONSTRUCCION DEL LADO IZQUIERDO

        const panelIzquierdoLogo = document.createElement('SPAN');
        const panelIzquierdoHora = document.createElement('P');
        const panelIzquierdoMinutos = document.createElement('P');
        const panelIzquierdoTexto = document.createElement('P');
        if(i == rutas.length - 1){
        const panelIzquierdoAviso = document.createElement('P');
        panelIzquierdoAviso.classList.add('panel-izquierdo-aviso');
        panelIzquierdoAviso.innerHTML = 'Último servicio'
        vistaIzquierda.appendChild(panelIzquierdoAviso);
        }
        
        const horaEnString = servicio.nombre.split('');
        panelIzquierdoHora.innerHTML = horaEnString[0] + horaEnString[1];
        panelIzquierdoMinutos.innerHTML = horaEnString[3] + horaEnString[4];

        panelIzquierdoTexto.innerHTML = 'HRS'
        panelIzquierdoLogo.classList.add('panel-izquierdo-logo')
        panelIzquierdoHora.classList.add('panel-izquierdo-hora')
        panelIzquierdoMinutos.classList.add('panel-izquierdo-minutos')
        panelIzquierdoTexto.classList.add('panel-izquierdo-texto')
        vistaIzquierda.appendChild(panelIzquierdoLogo);
        vistaIzquierda.appendChild(panelIzquierdoHora);
        vistaIzquierda.appendChild(panelIzquierdoMinutos);
        vistaIzquierda.appendChild(panelIzquierdoTexto);

        // CONSTRUCCION DEL LADO DERECHO

        const vistaDerechaEstado = document.createElement('DIV');
        vistaDerechaEstado.classList.add('vista-derecha-estado');
        const vistaDerechaEstadoTexto = document.createElement('P')
        vistaDerechaEstadoTexto.innerHTML = `Grilla de ${tiposDeDias[valorDelDiaSelect].nombre}`
        vistaDerechaEstado.appendChild(vistaDerechaEstadoTexto);
        vistaDerecha.appendChild(vistaDerechaEstado);
    
        const vistaDerechaRecorrido = document.createElement('DIV');
        vistaDerechaRecorrido.classList.add('vista-derecha-recorrido');
        const paradasContenedor = document.createElement('DIV');
        paradasContenedor.classList.add('paradas-contenedor');
        vistaDerecha.appendChild(paradasContenedor);

        

        for (let i = 0; i < servicio.recorrido.length; i++) {
            const localidad = servicio.recorrido[i];

            const paradaContenedor = document.createElement('DIV');
            paradaContenedor.classList.add('parada-contenedor');
            if(localidad == paradaSeleccionada || localidad == destinoSeleccionado){
                paradaContenedor.classList.add('parada-seleccionada')
            }
            if(i % 2 == 0) 
            $(paradaContenedor).css('transform', 'translateX(25px)');
            else 
            $(paradaContenedor).css('transform', 'translateX(-25px)');
            paradasContenedor.appendChild(paradaContenedor);
            const paradaImagen = document.createElement('SPAN')
            paradaImagen.classList.add('parada-imagen')
            paradaContenedor.appendChild(paradaImagen);
            const paradaTexto = document.createElement('P');
            paradaContenedor.appendChild(paradaTexto);
            paradaTexto.innerHTML = localidad;
            if(i >= 0 && i < servicio.recorrido.length - 1){
                const lineaRecorrido2 = document.createElement('SPAN');
                lineaRecorrido2.classList.add('linearecorrido2');
                if(i % 2 == 0) $(lineaRecorrido2).css('transform', 'rotate(145deg)');
                else $(lineaRecorrido2).css('transform', 'rotate(35deg)');
                paradasContenedor.appendChild(lineaRecorrido2)
            }
        }

        const vistaDerechaBoleto = document.createElement('DIV');
        vistaDerechaBoleto.classList.add('vista-derecha-boleto');
        const boletoImagen = document.createElement('SPAN');
        boletoImagen.classList.add('boleto-imagen');
        const boletoTexto = document.createElement('P');
        boletoTexto.innerHTML = definirPrecioBoleto(paradaSeleccionada,destinoSeleccionado,servicio.recorrido);
        vistaDerechaBoleto.appendChild(boletoImagen);
        vistaDerechaBoleto.appendChild(boletoTexto);
        vistaDerecha.appendChild(vistaDerechaBoleto);

        // AGREGANDO TODO AL CONTENEDOR PRINCIPAL

        contenedorVista.appendChild(vistaIzquierda);
        contenedorVista.appendChild(vistaDerecha);

        resultadoscont.appendChild(contenedorVista);
        resultadoscontainer.appendChild(resultadoscont);
    }
}

const obtenerIndiceBusqueda = (arrayDiferencias)=> {
    let indiceDeBusqueda;
    let anteriorPasado = 3000;
    for (i = 0; i < arrayDiferencias.length; i++) {
        if (arrayDiferencias[i] >= 0) anteriorPasado = Math.min(anteriorPasado, arrayDiferencias[i]);
    }
    if (anteriorPasado <= 15 && (arrayDiferencias.indexOf(anteriorPasado) < arrayDiferencias.length - 1)) {
        indiceDeBusqueda = arrayDiferencias.indexOf(anteriorPasado);
    }
    else if (arrayDiferencias.indexOf(anteriorPasado) < arrayDiferencias.length - 1) {
        indiceDeBusqueda = (arrayDiferencias.indexOf(anteriorPasado)) + 1;

    }
    else if ((arrayDiferencias.indexOf(anteriorPasado)) == (arrayDiferencias.length - 1)) {
        indiceDeBusqueda = arrayDiferencias.indexOf(anteriorPasado);
    } 
    return indiceDeBusqueda;   
};

const irAlObjeto = (indice)=> {
    let resultadoAMostrar = resultadoscont.children[indice];
    resultadoAMostrar.scrollIntoView({ behavior: 'auto', block: 'center' });
    // console.log(indice)
};

const agregarEfectoResultados = (indice)=> {
    resultadoscont.children[indice].classList.add('resaltado');
    // resultadoscont.children[indiceDeBusqueda].classList.add('manito');
    if (resultadoscont.classList.contains('normalizarFondo')) resultadoscont.classList.replace('normalizarFondo', 'opacarFondo')
    else resultadoscont.classList.add('opacarFondo');
    for (i = 0; i < resultadoscont.children.length; i++) {
        if (i < indice || i > indice) resultadoscont.children[i].classList.add('opacar')
}
};





























