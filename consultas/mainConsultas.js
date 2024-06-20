
document.addEventListener('DOMContentLoaded', function () {
    iniciarApp();
})

function iniciarApp() {
    reloj();
    busquedaManual();
};

let momentoActual = new Date();
let hora = momentoActual.getHours();
let fecha = momentoActual.getDate();
let mes = momentoActual.getMonth();
let dia = momentoActual.getDay()

/* Funcion para determinar la localidad de posicion*/

const boton = document.querySelector('.boton');


const opcionbase = selector[0]
const opcionbase2 = selector2[0]
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




botonDeCambio.addEventListener('click',  ()=> {
    $('.menu2').css('display', 'flex');
    $('.origen').css('display', 'flex');
    $('.botonDeCambio2').css('display', 'flex');
    $('.destino').css('display', 'none');
    $('.menu').css('display', 'none');
    $('.botonDeCambio').css('display', 'none');
    opcionbase.selected = true;
    // linea1.textContent = '';
    linea2.textContent = '';
})

botonDeCambio2.addEventListener('click', ()=> {
    $('.menu2').css('display', 'none');
    $('.origen').css('display', 'none');
    $('.botonDeCambio2').css('display', 'none');
    $('.destino').css('display', 'flex');
    $('.menu').css('display', 'flex');
    $('.botonDeCambio').css('display', 'flex');
    opcionbase2.selected = true;
    linea1.textContent = '';
    linea2.textContent = '';
})

const botonCierraMensaje = document.querySelector('.botoncerrado');
const mensajecontenedor = document.querySelector('.mensaje-contenedor');
const mensaje = document.querySelector('.mensaje-cuadro')

botonCierraMensaje.addEventListener('click', ()=>{
    mensaje.classList.add('mensaje-out');
    mensajecontenedor.classList.add('mensaje-contenedor-out')
})

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

function obtenerPosicion1 () {
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

function obtenerPosicion2 () {
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

function activarBoton ()  {
    setInterval ( ()=> {
    if(obtenerPosicion1() > 0 || obtenerPosicion2() > 0) boton.classList.add('botonActivo');
    else boton.classList.remove('botonActivo')
})
}

// if (fecha == 9 && mes == 4) $('.mensaje3').css('display', 'flex')

activarBoton();


let indiceDeBusqueda;

//Defino funcion para obtener posicion

const definirPosicion = (sel, val, valorSel, pos) => { 
    for (opcion of sel) 
    if (opcion.selected) valorSel = opcion;
    for (i = 0; i < sel.length; i++) val.push(sel[i])
    for (i = 0; i < val.length; i++) pos = val.indexOf(valorSel)
    return pos
}


let displayMensaje = ((fecha >= 1 && fecha <= 14) && (mes) && (dia <= 5 && dia >= 1)) ? 'flex' : 'none';

onload = ()=> {
    $('.mensaje-contenedor').css('display' , `${displayMensaje}`);
}

    boton.addEventListener('click', () => {

        // Definimos la posicion del selector 1
        definirPosicion(selector,valores,valorSeleccionado,posicion)
        // Definimos la posicion del selector 2
        definirPosicion(selector2,valores2,valorSeleccionado2,posicion2)
    
        // Definimos las variables globales
    
        let momentoActual = new Date();
        let hora = momentoActual.getHours();
        let minutos = momentoActual.getMinutes();
        let horaEnEnteros = (hora * 60) + minutos;
        let dia = momentoActual.getDay();
        let fecha = momentoActual.getDate();
        let mes = momentoActual.getMonth();
        let diasDeLaSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        let diaSemana = diasDeLaSemana[dia]
        let anteriorPasado = 3000;
        let diaRango = []
        let ruta = [];
        let listaDelDia = [];
        let horariosEnEnteros = [];
        let listaDiferencias = [];
        let tituloResultado = document.getElementById('tituloResultado')
        let feriado = false;
        let semiFeriado = false;
        let feriadoPrevio = false;
        let nombreServicio;
        let recorridoServicio;
        let recorridoServicio2;
        let estadoServicio;
    
    
        if (opcionbase2.selected == false) {
        ruta = todosTucumanDestino[posicion2 - 1]
        linea2.textContent = `Hasta ${selector2[posicion2].label}`;
        }
        
        if (opcionbase.selected == false) {
        ruta = todosDestinoTucuman[posicion - 1];
        linea2.textContent = `Desde ${selector[posicion].label}`
        }

        function obtenerDiaRuta(x) {
    
            if (x == 0) diaRango = ruta[0].slice(0, ruta[0].length);
            else if ((dia == 1 || semiFeriado || feriadoPrevio) && posicion2 == 2)
            diaRango = ruta[1].slice(1, ruta[1].length)
            else if(fecha == 6 && mes == 6 && posicion2 == 2) diaRango = ruta[1].slice(0, ruta[1].length - 1)
            else if (x >= 2 && x <= 6) diaRango = ruta[1].slice(0, ruta[1].length);
            else if (x == 6) diaRango = ruta[2].slice(0, ruta[2].length);
            else diaRango = ruta[1]
            
            return diaRango

        }


    
        let rutaObtenida;
        let tipoDeDia;


        

        const definirDia = (fecha, mes)=> {
            tipoDeDia = (fecha == 1 || fecha == 2 && mes == 3) ? 'feriado' : 'normal';
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

            return tipoDeDia;
            
        }



        definirDia (fecha, mes)

        if(fecha == 28 && mes == 2) {
            rutaObtenida = obtenerDiaRuta(6);
            tituloResultado.textContent = `Hoy, ${diasDeLaSemana[dia].toLowerCase()} santo :    Circulación como dia sábado`};

        if(fecha == 29 && mes == 2) {
            rutaObtenida = obtenerDiaRuta(0);
            tituloResultado.textContent = `Hoy, ${diasDeLaSemana[dia].toLowerCase()} santo : Circulación como día domingo`
        }

        // if((fecha == 10) && (mes == 4)) { //Definir feriado previo
        //     feriadoPrevio = true; 
        //     rutaObtenida = obtenerDiaRuta(dia);
        //     tituloResultado.textContent = `Hoy, ${diaSemana.toLowerCase()}, tenés éstos servicios`
        // }
    
        else if ((fecha == 2) && (mes == 10)) {
            semiFeriado = true;
            rutaObtenida = obtenerDiaRuta(6);
            tituloResultado.textContent = `Hoy, ${diasDeLaSemana[dia].toLowerCase()} (feriado): Circulación como día sábado `;
        }

        else if ((fecha == 24) && (mes == 10)){
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
        
        else if((fecha == 8 && mes == 4)){
            let grillaOcasional;
            let grillaOcasionalVacia = [];
            grillaOcasional = obtenerDiaRuta(0);
            grillaOcasional.forEach(element => {
                if(element.salida <= 23.3){
                    grillaOcasionalVacia.push(element)
                }
            });
                rutaObtenida = grillaOcasionalVacia;
                // tituloResultado.textContent = `Hoy, ${diasDeLaSemana[dia].toLowerCase()} (feriado): Circulación como día domingo`;
        }


            function obtenerLista(x) {
                for (i = 0; i < x.length; i++) listaDelDia.push(x[i].salida);
                // Aqui usamos la lista con los salidaes y las pasamos a numero enteros junto con los minutos
                return listaDelDia
            }

        
        
        let listaObtenida = obtenerLista(rutaObtenida)
        
    
        for (let i = 0; i < listaObtenida.length; i++) {
            let horasEnEnteros = (Math.trunc(listaObtenida[i])) * 60;
            let minutosEnEnteros = (listaDelDia[i] - (Math.trunc(listaObtenida[i]))) * 100;
            let horaMinutosEnEnteros = horasEnEnteros + minutosEnEnteros;
            horariosEnEnteros.push(horaMinutosEnEnteros);
        }
    
        /*Recorremos el array y buscamos coincidencias con el horario actual*/
    
        for (i = 0; i < horariosEnEnteros.length; i++) {
            let difHoraHorarios = horaEnEnteros - horariosEnEnteros[i];
            listaDiferencias.push(difHoraHorarios);
        }
    
    
        for (i = 0; i < listaDiferencias.length; i++) {
            if (listaDiferencias[i] >= 0) anteriorPasado = Math.min(anteriorPasado, listaDiferencias[i]);
            
        }
    
        if (anteriorPasado <= 15 && (listaDiferencias.indexOf(anteriorPasado) < listaDiferencias.length - 1)) {
            indiceDeBusqueda = listaDiferencias.indexOf(anteriorPasado);
        }
        else if (listaDiferencias.indexOf(anteriorPasado) < listaDiferencias.length - 1) {
            indiceDeBusqueda = (listaDiferencias.indexOf(anteriorPasado)) + 1;
    
        }
        else if ((listaDiferencias.indexOf(anteriorPasado)) == (listaDiferencias.length - 1)) {
            indiceDeBusqueda = listaDiferencias.indexOf(anteriorPasado);
        }
    
        function contruirGlobos(ruta, contPadre, contHijo) {
            if (ruta.length == 1) {
                const resultado = document.createElement('DIV')
                resultado.classList.add('resultados')
                const fondo = document.createElement('SPAN');
                fondo.classList.add('fondo')
                const sobreTodo = document.createElement('SPAN');
                sobreTodo.classList.add('sobretodo');
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
                // resultado.appendChild(sobreTodo);
                if ((Object.keys(ruta[0])).length > 3) {
                    let p4 = document.createElement('P');
                    p4.classList.add('actual4');
                    resultado.appendChild(p4);
                }
                contHijo.appendChild(resultado);
                contPadre.appendChild(contHijo)
            }
            else{
                for (i = 0; i < ruta.length; i++) {
                    const resultado = document.createElement('DIV')
                    resultado.classList.add('resultados')
                    const fondo = document.createElement('SPAN');
                    fondo.classList.add('fondo')
                    const sobreTodo = document.createElement('SPAN');
                    sobreTodo.classList.add('sobretodo');
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
               
                    if ((Object.keys(ruta[i])).length > 3) {
                        let p4 = document.createElement('P');
                        p4.classList.add('actual4');
                        resultado.appendChild(p4);
                    }
                    contHijo.appendChild(resultado);
                    contPadre.appendChild(contHijo)
                    // resultado.appendChild(sobreTodo);
                }
            }
        }
      
        contruirGlobos(rutaObtenida,resultadoscontainer,resultadoscont);
    
        function irAlObjeto() {
            let a = resultadoscont.children[indiceDeBusqueda];
            a.scrollIntoView({ behavior: 'auto', block: 'center' });
        };
    
        resultadoscont.children[indiceDeBusqueda].classList.add('resaltado');
        // resultadoscont.children[indiceDeBusqueda].classList.add('manito');
        if (resultadoscont.classList.contains('normalizarFondo')) resultadoscont.classList.replace('normalizarFondo', 'opacarFondo')
        else resultadoscont.classList.add('opacarFondo');
        
    
        mensaje2.appendChild(indicacioncont);
        
        if(resolucion < 600)
        if ((rutaObtenida.length) > 1) {
            if (indiceDeBusqueda == (rutaObtenida.length) - 1) scrollcont.children[0].classList.add('manitoAnimacionAbajo');
            else if (indiceDeBusqueda == 0) scrollcont.children[0].classList.add('manitoAnimacionArriba');
            else scrollcont.children[0].classList.add('manitoAnimacionCentro');
            
        }
        for (i = 0; i < resultadoscont.children.length; i++) {
                if (i < indiceDeBusqueda || i > indiceDeBusqueda) resultadoscont.children[i].classList.add('opacar')
        }
        
    
        for (i = 0; i < (resultadoscont.children).length; i++) {
            nombreServicio = (resultadoscont.children[i]).children[1];
            estadoServicio = (resultadoscont.children[i]).children[2];
            recorridoServicio = (resultadoscont.children[i]).children[3];
            recorridoServicio2 = (resultadoscont.children[i]).children[4];
    
            if (listaDiferencias[i] > 0) {
                if ((Object.keys(rutaObtenida[i])).length > 3) {
                    if(rutaObtenida.length == 1 && i == 0){
                        nombreServicio.textContent = `Únicos servicios del día ${rutaObtenida[i].nombre} Hrs`;
                    }
                    else if (i == 0) {
                        nombreServicio.textContent = `Primeros servicios del día ${rutaObtenida[i].nombre} Hrs`;
                    }
                    else if (i == (rutaObtenida.length) - 1) {
                        nombreServicio.textContent = `Últimos servicios del día ${rutaObtenida[i].nombre} Hrs`;
                    }
                    else {
                        nombreServicio.textContent = `Servicios de las ${rutaObtenida[i].nombre} Hrs`;
                    }
                    if (listaDiferencias[i] > 60) {
                        estadoServicio.textContent = 'Finalizaron sus recorridos'
                    }
                    else if (listaDiferencias[i] == 60) {
                        estadoServicio.textContent = 'Iniciaron sus recorridos hace 1 hora'
                    }
                    else if (listaDiferencias[i] < 60 && listaDiferencias[i] > 30) {
                        estadoServicio.textContent = `Iniciaron sus recorridos hace menos de 1 hora`
                    }
                    else if (listaDiferencias[i] <= 30 && listaDiferencias[i] > 15) {
                        estadoServicio.textContent = `Iniciaron sus recorridos hace menos de media hora`
                    }
                    else if (listaDiferencias[i] <= 15 && listaDiferencias[i] > 10) {
                        estadoServicio.textContent = `Iniciaron sus recorridos hace menos de 15 minutos`
                    }
                    else if (listaDiferencias[i] <= 10 && listaDiferencias[i] > 5) {
                        estadoServicio.textContent = `Iniciaron sus recorridos hace menos de 10 minutos`
                    }
                    else if (listaDiferencias[i] <= 5 && listaDiferencias[i] > 0) {
                        estadoServicio.textContent = 'Iniciaron sus recorridos hace menos de 5 minutos'
                    }
                    else if ((Math.trunc(listaDiferencias[i])) == 0) {
                        estadoServicio.textContent = 'Están iniciando sus recorridos'
                    }
                    recorridoServicio.textContent = `1° Servicio: ${rutaObtenida[i].recorrido}`
                    recorridoServicio2.textContent = `2° Servicio: ${rutaObtenida[i].recorrido2}`;
                }
                else {
                    if(rutaObtenida.length == 1 && i == 0) {
                        nombreServicio.textContent = `Único servicio del día ${rutaObtenida[0].nombre} Hrs`;
                    }
                    else if (i == 0) {     
                        nombreServicio.textContent = `Primer servicio del día ${rutaObtenida[i].nombre} Hrs`;
                    }
                    else if (i == (rutaObtenida.length) - 1) {
                        nombreServicio.textContent = `Último servicio del día ${rutaObtenida[i].nombre} Hrs`;
                    }
                    else {
                        nombreServicio.textContent = `Servicio de las ${rutaObtenida[i].nombre} Hrs`;
                    }
                    if (listaDiferencias[i] > 60) {
                        estadoServicio.textContent = 'Finalizó su recorrido'
                    }
                    else if (listaDiferencias[i] == 60) {
                        estadoServicio.textContent = 'Inició su recorrido hace 1 hora'
                    }
                    else if (listaDiferencias[i] < 60 && listaDiferencias[i] > 30) {
                        estadoServicio.textContent = `Inició su recorrido hace menos de 1 hora`
                    }
                    else if (listaDiferencias[i] <= 30 && listaDiferencias[i] > 15) {
                        estadoServicio.textContent = `Inició su recorrido hace menos de media hora`
                    }
                    else if (listaDiferencias[i] <= 15 && listaDiferencias[i] > 10) {
                        estadoServicio.textContent = `Inició su recorrido hace menos de 15 minutos`
                    }
                    else if (listaDiferencias[i] <= 10 && listaDiferencias[i] > 5) {
                        estadoServicio.textContent = `Inició su recorrido hace menos de 10 minutos`
                    }
                    if (listaDiferencias[i] <= 5 && listaDiferencias[i] > 2) {
                        estadoServicio.textContent = 'Inició su recorrido hace menos de 5 minutos'
                    }
                    if (Math.abs(Math.round(listaDiferencias[i]) <= 2)){
                        estadoServicio.textContent = 'Está iniciando su recorrido'
                    }

                    recorridoServicio.textContent = `Recorrido: ${rutaObtenida[i].recorrido}`;
                }
                
            }
            else {
                if ((Object.keys(rutaObtenida[i])).length > 3) {
                    if (i == 0) {
                        nombreServicio.textContent = `Primeros servicios del día ${rutaObtenida[i].nombre} Hrs`;
                    }
                    else if (i == (rutaObtenida.length)) {
                        nombreServicio.textContent = `Últimos servicio del día ${rutaObtenida[i].nombre} Hrs`;
                    }
                    else {
                        nombreServicio.textContent = `Servicios de las ${rutaObtenida[i].nombre} Hrs`;
                    }
                    if (Math.abs(listaDiferencias[i]) >= 120) {
                        estadoServicio.textContent = 'Iniciarán sus recorridos en un par horas'
                    }
                    if (Math.abs(listaDiferencias[i]) > 60 && Math.abs(listaDiferencias[i]) < 120) {
                        estadoServicio.textContent = 'Iniciarán sus recorridos en poco más de 1 hora'
                    }
                    if (Math.abs(listaDiferencias[i]) == 60) {
                        estadoServicio.textContent = 'Iniciarán sus recorridos en 1 hora'
                    }
                    if (Math.abs(listaDiferencias[i]) < 60 && Math.abs(listaDiferencias[i]) > 30) {
                        estadoServicio.textContent = 'Iniciarán sus recorridos en menos de 1 hora';
                    }    
                    if (Math.abs(listaDiferencias[i]) <= 30 && Math.abs(listaDiferencias[i]) > 15) {
                        estadoServicio.textContent = 'Iniciarán sus recorridos en menos de media hora';
                    }
                    if (Math.abs(listaDiferencias[i]) <= 15 && Math.abs(listaDiferencias[i]) > 10) {
                        estadoServicio.textContent = 'Iniciarán sus recorridos en menos de 15 minutos';
                    }
                    if (Math.abs(listaDiferencias[i]) <= 10 && Math.abs(listaDiferencias[i]) > 5) {
                        estadoServicio.textContent = 'Iniciarán sus recorridos en menos de 10 minutos';
                    }
                    if (Math.abs(listaDiferencias[i]) <= 5 && Math.abs(listaDiferencias[i]) > 0) {
                        estadoServicio.textContent = 'Iniciarán sus recorridos en menos de 5 minutos'
                    }
                    recorridoServicio.textContent = `1° Servicio: ${rutaObtenida[i].recorrido}`
                    recorridoServicio2.textContent = `2° Servicio: ${rutaObtenida[i].recorrido2}`;
                }
                else {
                    if (i == 0) {
                        nombreServicio.textContent = `Primer servicio del día ${rutaObtenida[0].nombre} Hrs`;
                    }
                    else if (i == (rutaObtenida.length) - 1) {
                        nombreServicio.textContent = `Último servicio del día ${rutaObtenida[i].nombre} Hrs`;
                    }
                    else {
                        nombreServicio.textContent = `Servicio de las ${rutaObtenida[i].nombre} Hrs`;
                    }
                    if (Math.abs(listaDiferencias[i]) >= 120) {
                        estadoServicio.textContent = 'Iniciará su recorrido en un par horas'
                    }
                    if (Math.abs(listaDiferencias[i]) > 60 && Math.abs(listaDiferencias[i]) < 120) {
                        estadoServicio.textContent = 'Iniciará su recorrido en poco mas de 1 hora'
                    }
                    if (Math.abs(listaDiferencias[i]) == 60) {
                        estadoServicio.textContent = 'Iniciaá su recorrido en 1 hora'
                    }
                    if (Math.abs(listaDiferencias[i]) < 60 && Math.abs(listaDiferencias[i]) > 30) {
                        estadoServicio.textContent = 'Iniciará su recorrido en menos de 1 hora'
                    }
                    if (Math.abs(listaDiferencias[i]) <= 30 && Math.abs(listaDiferencias[i]) > 15) {
                        estadoServicio.textContent = 'Iniciará su recorrido en menos de media hora'
                    }
                    if (Math.abs(listaDiferencias[i]) <= 15 && Math.abs(listaDiferencias[i]) > 10) {
                        estadoServicio.textContent = 'Iniciará su recorrido en menos de 15 minutos'
                    }
                    if (Math.abs(listaDiferencias[i]) <= 10 && Math.abs(listaDiferencias[i]) > 5) {
                        estadoServicio.textContent = 'Iniciará su recorrido en menos de 10 minutos'
                    }
                    if (Math.abs(listaDiferencias[i]) <= 5 && Math.abs(listaDiferencias[i]) >= 2) {
                        estadoServicio.textContent = 'Iniciará su recorrido en menos de 5 minutos'
                    }
                    recorridoServicio.textContent = `Recorrido: ${rutaObtenida[i].recorrido}`;
                }
            }
        }
        $('.resultados').css('display', 'flex');
        $('.mensaje2').css('display', 'flex');
        if(mensaje2.classList.contains('mensajeIrse')){
            mensaje2.classList.replace('mensajeIrse', 'mensajeAparece')
        }else{
            mensaje2.classList.add('mensajeAparece')
        }
        irAlObjeto()
        // setTimeout(() => {
            
        // }, 1);
    })


resultadoscont.addEventListener('touchmove', () => {
    for (i = 0; i < resultadoscont.children.length; i++) {
        if (i < indiceDeBusqueda || i > indiceDeBusqueda) 
            resultadoscont.children[i].classList.replace('opacar', 'normalizar');
            resultadoscont.children[indiceDeBusqueda].classList.replace('resaltado', 'normalizarResaltado');

            scrollcont.children[0].classList.remove('manitoAnimacionAbajo');
            scrollcont.children[0].classList.remove('manitoAnimacionArriba');
            scrollcont.children[0].classList.remove('manitoAnimacionCentro');
            resultadoscont.classList.replace('opacarFondo', 'normalizarFondo');
    }
})



indicacioncont.addEventListener('click', () => {
    opcionbase.selected = true;
    opcionbase2.selected = true;
    // linea1.textContent = '';
    linea2.textContent = '';
    tituloResultado.textContent = '';
    mensaje2.classList.replace('mensajeAparece', 'mensajeIrse')
    scrollcont.children[0].classList.remove('manitoAnimacionAbajo');
    scrollcont.children[0].classList.remove('manitoAnimacionArriba');
    scrollcont.children[0].classList.remove('manitoAnimacionCentro');
    resultadoscont.children[0].classList.remove('resultadosOpcion2');
    resultadoscont.classList.replace('opacarFondo','normalizarFondo')
        
    
    setTimeout( ()=> {
        $('.mensaje2').css('display', 'none'),borrarGlobos(),resultadoscont.classList.remove('normalizarFondo'),
        borrarManito();
    },1000)
})





















