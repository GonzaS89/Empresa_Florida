
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
let fecha = momentoActual.getDate();
let mes = momentoActual.getMonth();
let dia = momentoActual.getDay();
let horaEnEnteros = (hora * 60) + minutos;
let diasDeLaSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
let diaSemana = diasDeLaSemana[dia];
let diaRango = [];
let ruta;
let tituloResultado = document.getElementById('tituloResultado')
let feriado = false;
let semiFeriado = false;
let feriadoPrevio = false;
let nombreServicio;
let recorridoServicio;
let recorridoServicio2;
let estadoServicio;
let rutaObtenida;
let tipoDeDia;

/* Funcion para determinar la localidad de posicion*/

const boton = document.querySelector('.boton');

let valorSeleccionado;
let valorSeleccionado2;
let valores = [];
let valores2 = [];
let posicion;
let posicion2;
let label1;
let label2;

const botonDeCambio = document.querySelector('.botonDeCambio');
const botonDeCambio2 = document.querySelector('.botonDeCambio2');
const mensaje2 = document.querySelector('.mensaje2');
const resultadoscontainer = document.querySelector('.resultados-container');
const indicacioncont = document.querySelector('.indicacion-cont');
const resultadoscont = document.querySelector('.resultados-cont');
const scrollcont = document.querySelector('.scroll-cont');
let titulo = document.getElementById('titulo');
let resolucion = document.documentElement.clientWidth;


// botonDeCambio.addEventListener('click',  ()=> {
//     $('.menu2').css('display', 'flex');
//     $('.origen').css('display', 'flex');
//     $('.botonDeCambio2').css('display', 'flex');
//     $('.destino').css('display', 'none');
//     $('.menu').css('display', 'none');
//     $('.botonDeCambio').css('display', 'none');
//     opcionbase.selected = true;
//     linea1.textContent = '';
//     linea2.textContent = '';
// })

// botonDeCambio2.addEventListener('click', ()=> {
//     $('.menu2').css('display', 'none');
//     $('.origen').css('display', 'none');
//     $('.botonDeCambio2').css('display', 'none');
//     $('.destino').css('display', 'flex');
//     $('.menu').css('display', 'flex');
//     $('.botonDeCambio').css('display', 'flex');
//     opcionbase2.selected = true;
//     linea1.textContent = '';
//     linea2.textContent = '';
// })

const botonCierraMensaje = document.querySelector('.botoncerrado');
const mensajecontenedor = document.querySelector('.mensaje-contenedor');
const mensaje = document.querySelector('.mensaje-cuadro')

// botonCierraMensaje.addEventListener('click', ()=>{
//     mensaje.classList.add('mensaje-out');
//     mensajecontenedor.classList.add('mensaje-contenedor-out')
// })

addEventListener('load', () => {
    scrollcont.children[0].classList.add('manito')
})

function borrarManito() {
    scrollcont.children[0].classList.remove('manito')
}

function borrarGlobos() {
    let arrayResultados = Array.prototype.slice.call(document.getElementsByClassName("resultados"), 0);
    for (element of arrayResultados) {
        element.remove();
    }
}

function obtenerPosicion1 (selector) {
    for (opcion of selector) {
        if (opcion.selected) valorSeleccionado = opcion;
        
    }
    for (i = 0; i < selector.length; i++) {
        valores.push(selector[i])
    }
    
    for (i = 0; i < valores.length; i++) {
        posicion = valores.indexOf(valorSeleccionado)
    }
    return posicion
}

function obtenerPosicion2 (selector) {
    for (opcion of selector2) {
        if (opcion.selected) valorSeleccionado2 = opcion;
    
    }
    for (i = 0; i < selector2.length; i++) {
        valores2.push(selector2[i])
    }
    
    for (i = 0; i < valores2.length; i++) {
        posicion2 = valores2.indexOf(valorSeleccionado2)
    }
    return posicion2
}

// function activarBoton ()  {
//     setInterval ( ()=> {
//     if(obtenerPosicion1(selectSalida) > 0 && obtenerPosicion2(selectLlegada) > 0) boton.classList.add('botonActivo');
//     else boton.classList.remove('botonActivo')
// })
// }

if (fecha == 9 || fecha == 10 && mes == 6) $('.mensaje3').css('display', 'flex')

// activarBoton()

//Defino funcion para obtener posicion

const definirPosicion = (sel, val, valorSel, pos) => { 
    for (opcion of sel) 
    if (opcion.selected) valorSel = opcion;
    for (i = 0; i < sel.length; i++) val.push(sel[i])
    for (i = 0; i < val.length; i++) pos = val.indexOf(valorSel)
    return pos
}

let displayMensaje = (fecha == 25 && mes == 8 & hora < 17) ? 'flex' : 'none';

onload = ()=> {
    $('.mensaje-contenedor').css('display' , `${displayMensaje}`);
}

// // Definimos la posicion del selector 1
// definirPosicion(selector,valores,valorSeleccionado,posicion);
// // Definimos la posicion del selector 2
// definirPosicion(selector2,valores2,valorSeleccionado2,posicion2);

// Funcion para definir ruta de viaje (IDA O VUELTA)

const obtenerRuta = ()=> {
    ruta = (opcionbase.selected == false) ? todosDestinoTucuman[posicion - 1] : todosTucumanDestino[posicion2 - 1];
    linea2.textContent = (opcionbase.selected == false) ? `Desde ${selector[posicion].label}` : `Hasta ${selector2[posicion2].label}`;

    return ruta;
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
    tipoDeDia = (fecha == 21 && mes == 7) ? 'feriado' : 'normal';
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
// Funcion que construye los globos de resultados
const construirGlobos = (rutas, contPadre, contHijo)=> {
    if (rutas.length == 1) {
        const resultado = document.createElement('DIV')
        resultado.classList.add('resultados')
        const fondo = document.createElement('SPAN');
        fondo.classList.add('fondo')
        let p1 = document.createElement('P');
        p1.classList.add('actual1')
        let p2 = document.createElement('P');
        p2.classList.add('actual2');
        let p3 = document.createElement('P');
        p3.classList.add('actual3');
        resultado.appendChild(fondo);
        resultado.appendChild(p1);
        resultado.appendChild(p2);
        resultado.appendChild(p3);
        if ((Object.keys(rutas[0])).length > 3) {
            let p4 = document.createElement('P');
            p4.classList.add('actual4');
            resultado.appendChild(p4);
        }
        contHijo.appendChild(resultado);
        contPadre.appendChild(contHijo)
    }
    else{
        for (i = 0; i < rutas.length; i++) {
            const resultado = document.createElement('DIV')
            resultado.classList.add('resultados')
            const fondo = document.createElement('SPAN');
            fondo.classList.add('fondo')
            let p1 = document.createElement('P');
            p1.classList.add('actual1')
            let p2 = document.createElement('P');
            p2.classList.add('actual2');
            let p3 = document.createElement('P');
            p3.classList.add('actual3');
            resultado.appendChild(fondo);
            resultado.appendChild(p1);
            resultado.appendChild(p2);
            resultado.appendChild(p3)
            if ((Object.keys(rutas[i])).length > 3) {
                let p4 = document.createElement('P');
                p4.classList.add('actual4');
                resultado.appendChild(p4);
            }
            contHijo.appendChild(resultado);
            contPadre.appendChild(contHijo)
        }
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
const contenidoDeResultados = (rutas,arrayDiferencias)=> {
    for (i = 0; i < (resultadoscont.children).length; i++) {
        nombreServicio = (resultadoscont.children[i]).children[1];
        estadoServicio = (resultadoscont.children[i]).children[2];
        recorridoServicio = (resultadoscont.children[i]).children[3];
        recorridoServicio2 = (resultadoscont.children[i]).children[4];

        if(rutas.length == 1 && i == 0) {
            nombreServicio.textContent = `Único servicio del día ${rutas[0].nombre} Hrs`;
        }
        else if (i == 0) {     
            nombreServicio.textContent = `Primer servicio del día ${rutas[i].nombre} Hrs`;
        }
        else if (i == (rutas.length) - 1) {
            nombreServicio.textContent = `Último servicio del día ${rutas[i].nombre} Hrs`;
        }
        else {
            nombreServicio.textContent = `Servicio de las ${rutas[i].nombre} Hrs`;
        }
        if (arrayDiferencias[i] > 0) {
                
                if (arrayDiferencias[i] > 60) {
                    estadoServicio.textContent = 'Finalizó su recorrido'
                }
                else if (arrayDiferencias[i] == 60) {
                    estadoServicio.textContent = 'Inició su recorrido hace 1 hora'
                }
                else if (arrayDiferencias[i] < 60 && arrayDiferencias[i] > 30) {
                    estadoServicio.textContent = `Inició su recorrido hace menos de 1 hora`
                }
                else if ((arrayDiferencias)[i] <= 30 && arrayDiferencias[i] > 15) {
                    estadoServicio.textContent = `Inició su recorrido hace menos de media hora`
                }
                else if ((arrayDiferencias)[i] <= 15 && arrayDiferencias[i] > 10) {
                    estadoServicio.textContent = `Inició su recorrido hace menos de 15 minutos`
                }
                else if ((arrayDiferencias)[i] <= 10 && arrayDiferencias[i] > 5) {
                    estadoServicio.textContent = `Inició su recorrido hace menos de 10 minutos`
                }
                if ((arrayDiferencias)[i] <= 5 && arrayDiferencias[i] > 2) {
                    estadoServicio.textContent = 'Inició su recorrido hace menos de 5 minutos'
                }
                if ((Math.abs(arrayDiferencias)[i]) <= 2){
                    estadoServicio.textContent = 'Está iniciando su recorrido'
                }
                recorridoServicio.textContent = `Recorrido: ${rutas[i].recorrido.join(' → ')}`;
            
        }
        else {
                if (Math.abs(arrayDiferencias[i]) >= 120) {
                    estadoServicio.textContent = 'Iniciará su recorrido en un par horas'
                }
                if (Math.abs(arrayDiferencias[i]) > 60 && Math.abs(arrayDiferencias[i]) < 120) {
                    estadoServicio.textContent = 'Iniciará su recorrido en poco mas de 1 hora'
                }
                if (Math.abs(arrayDiferencias[i]) == 60) {
                    estadoServicio.textContent = 'Iniciará su recorrido en 1 hora'
                }
                if (Math.abs(arrayDiferencias[i]) < 60 && Math.abs(arrayDiferencias[i]) > 30) {
                    estadoServicio.textContent = 'Iniciará su recorrido en menos de 1 hora'
                }
                if (Math.abs(arrayDiferencias[i]) <= 30 && Math.abs(arrayDiferencias[i]) > 15) {
                    estadoServicio.textContent = 'Iniciará su recorrido en menos de media hora'
                }
                if (Math.abs(arrayDiferencias[i]) <= 15 && Math.abs(arrayDiferencias[i]) > 10) {
                    estadoServicio.textContent = 'Iniciará su recorrido en menos de 15 minutos'
                }
                if (Math.abs(arrayDiferencias[i]) <= 10 && Math.abs(arrayDiferencias[i]) > 5) {
                    estadoServicio.textContent = 'Iniciará su recorrido en menos de 10 minutos'
                }
                if (Math.abs(arrayDiferencias[i]) <= 5 && Math.abs(arrayDiferencias[i]) >= 2) {
                    estadoServicio.textContent = 'Iniciará su recorrido en menos de 5 minutos'
                }
                recorridoServicio.textContent = `Recorrido: ${rutas[i].recorrido.join(' → ')}`;
        }
    } 
}




























