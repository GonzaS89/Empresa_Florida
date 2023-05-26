
document.addEventListener('DOMContentLoaded', function () {
    iniciarApp();
})

function iniciarApp() {
    reloj();
    busquedaManual();
};

/* Funcion para determinar la localidad de posicion*/

const selector = document.menu.selector;
const selector2 = document.menu2.selector2;

const boton = document.querySelector('.boton');

const opcionbase = selector[0]
const opcionbase2 = selector2[0]
const florida = selector[1];
const xposse = selector[2]
const sanM = selector[3];
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



botonDeCambio.addEventListener('click', function () {
    $('.menu2').css('display', 'flex');
    $('.origen').css('display', 'flex');
    $('.botonDeCambio2').css('display', 'flex');
    $('.destino').css('display', 'none');
    $('.menu').css('display', 'none');
    $('.botonDeCambio').css('display', 'none');
    opcionbase.selected = true;
    linea1.textContent = '';
    linea2.textContent = '';
})

botonDeCambio2.addEventListener('click', function () {
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

activarBoton()


let indiceDeBusqueda;

boton.addEventListener('click', () => {


    // Definimos la posicion del selector 1

    for (opcion of selector) 
    if (opcion.selected) valorSeleccionado = opcion;
    for (i = 0; i < selector.length; i++) valores.push(selector[i])
    for (i = 0; i < valores.length; i++) posicion = valores.indexOf(valorSeleccionado)
    


    // Definimos la posicion del selector 2

    for (opcion of selector2) 
    if (opcion.selected) valorSeleccionado2 = opcion;
    for (i = 0; i < selector2.length; i++) valores2.push(selector2[i])
    for (i = 0; i < valores2.length; i++) posicion2 = valores2.indexOf(valorSeleccionado2)
    


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
    let nombreServicio;
    let recorridoServicio;
    let recorridoServicio2;
    let estadoServicio;



    if (opcionbase2.selected == false) 
    ruta = todosTucumanDestino[posicion2 - 1]
    // linea2.textContent = selector2[posicion2].label;
    
    if (opcionbase.selected == false) 
    ruta = todosDestinoTucuman[posicion - 1];
        // linea2.textContent = selector[posicion].label;
        console.log(selector[posicion].label)
        // linea2.textContent = destino.textContent;   
    

    function obtenerDiaRuta(x) {

        if (x == 0) diaRango = ruta[0].slice(0, ruta[0].length);
        
        else if (dia == 1 && posicion2 == 2) diaRango = ruta[1].slice(1, ruta[1].length)
        
        else if(semiFeriado && posicion2 == 2) diaRango = ruta[1].slice(1, ruta[1].length)
    
        else if (x >= 1 && x <= 5) diaRango = ruta[1].slice(0, ruta[1].length);
        
        else if (x == 6) diaRango = ruta[2].slice(0, ruta[2].length);
    

        return diaRango
    }

    let rutaObtenida

    if ((fecha == 25) && (mes == 4)) {
        feriado = true;
        if(feriado){
            tituloResultado.textContent = `Hoy, ${diasDeLaSemana[dia].toLowerCase()} (feriado): Circulación como día domingo `;
            rutaObtenida = obtenerDiaRuta(0);
        }
    }
    

    else if ((fecha == 26) && (mes == 4)) {
        semiFeriado = true;
        rutaObtenida = obtenerDiaRuta(6);
        tituloResultado.textContent = `Hoy, ${diasDeLaSemana[dia].toLowerCase()} (feriado): Circulación como día sábado `;
    }

    else if ((fecha == 7) && (mes == 3)) {
        feriado = true;
        rutaObtenida = obtenerDiaRuta(0);
        tituloResultado.textContent = `Hoy, ${diasDeLaSemana[dia].toLowerCase()} santo: Circulación como día domingo`;

    }


    else 
    {tituloResultado.textContent = `Hoy, ${diaSemana.toLowerCase()}, tenés éstos servicios`
        // Aqui definimos el array dependiendo el dia de la semana
    rutaObtenida = obtenerDiaRuta(dia)
    } 
    
    //funcion para crear los globos de resultados

    // Aqui extraemos del array de arriba los salidaes de cada horario y lo agregamos a la lista del dia

    
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

    if ((rutaObtenida.length) > 1) {
        if (indiceDeBusqueda == (rutaObtenida.length) - 1) scrollcont.children[0].classList.add('manitoAnimacionAbajo');
        else if (indiceDeBusqueda == 0) scrollcont.children[0].classList.add('manitoAnimacionArriba');
        else scrollcont.children[0].classList.add('manitoAnimacionCentro');
        
    }


    function contruirGlobos(ruta, contPadre, contHijo) {
        if (ruta.length == 1) {
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
                if ((Object.keys(ruta[i])).length > 3) {
                    let p4 = document.createElement('P');
                    p4.classList.add('actual4');
                    resultado.appendChild(p4);
                }
                contHijo.appendChild(resultado);
                contPadre.appendChild(contHijo)
            }
        }
    }

    contruirGlobos(rutaObtenida,resultadoscontainer,resultadoscont);

    function irAlObjeto() {
        let a = resultadoscont.children[indiceDeBusqueda];
        a.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    resultadoscont.children[indiceDeBusqueda].classList.add('resaltado');
    // resultadoscont.children[indiceDeBusqueda].classList.add('manito');
    if (resultadoscont.classList.contains('normalizarFondo')) resultadoscont.classList.replace('normalizarFondo', 'opacarFondo')
    else resultadoscont.classList.add('opacarFondo');
    

    mensaje2.appendChild(indicacioncont);
    
    if(resolucion < 600)
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
                    estadoServicio.textContent = `Iniciaron sus recorrido hace menos de 1 hora`
                }
                else if (listaDiferencias[i] < 30 && listaDiferencias[i] > 15) {
                    estadoServicio.textContent = `Iniciaron sus recorrido hace menos de media hora`
                }
                else if (listaDiferencias[i] < 15 && listaDiferencias[i] > 10) {
                    estadoServicio.textContent = `Iniciaron sus recorrido hace menos de 15 minutos`
                }
                else if (listaDiferencias[i] < 10 && listaDiferencias[i] > 5) {
                    estadoServicio.textContent = `Iniciaron sus recorrido hace menos de 10 minutos`
                }
                else if (listaDiferencias[i] < 5 && listaDiferencias[i] > 0) {
                    estadoServicio.textContent = 'Iniciaron sus recorridos hace menos de 5 minutos'
                }
                else if (Math.trunc(listaDiferencias[i]) == 0) {
                    estadoServicio.textContent = 'Están iniciando sus recorridos'
                }
                recorridoServicio.textContent = `1° Recorrido: ${rutaObtenida[i].recorrido}`
                recorridoServicio2.textContent = `2° Recorrido: ${rutaObtenida[i].recorrido2}`;
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
                else if (listaDiferencias[i] < 30 && listaDiferencias[i] > 15) {
                    estadoServicio.textContent = `Inició su recorrido hace menos de media hora`
                }
                else if (listaDiferencias[i] < 15 && listaDiferencias[i] > 10) {
                    estadoServicio.textContent = `Inició su recorrido hace menos de 15 minutos`
                }
                else if (listaDiferencias[i] < 10 && listaDiferencias[i] > 5) {
                    estadoServicio.textContent = `Inició su recorrido hace menos de 10 minutos`
                }
                if (listaDiferencias[i] < 5 && listaDiferencias[i] > 2) {
                    estadoServicio.textContent = 'Inició su recorrido hace menos de 5 minutos'
                }
                if (Math.abs(listaDiferencias[i]) >= 0 && listaDiferencias[i] <= 2) {
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
                if (Math.abs(listaDiferencias[i]) < 30 && Math.abs(listaDiferencias[i]) > 15) {
                    estadoServicio.textContent = 'Iniciarán sus recorridos en menos de media hora';
                }
                if (Math.abs(listaDiferencias[i]) < 15 && Math.abs(listaDiferencias[i]) > 10) {
                    estadoServicio.textContent = 'Iniciarán sus recorridos en menos de 15 minutos';
                }
                if (Math.abs(listaDiferencias[i]) < 10 && Math.abs(listaDiferencias[i]) > 5) {
                    estadoServicio.textContent = 'Iniciarán sus recorridos en menos de 10 minutos';
                }
                if (Math.abs(listaDiferencias[i]) < 5 && Math.abs(listaDiferencias[i]) > 0) {
                    estadoServicio.textContent = 'Iniciarán sus recorridos en menos de 5 minutos'
                }
                recorridoServicio.textContent = `1° Recorrido: ${rutaObtenida[i].recorrido}`
                recorridoServicio2.textContent = `2° Recorrido: ${rutaObtenida[i].recorrido2}`;
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
                if (Math.abs(listaDiferencias[i]) < 30 && Math.abs(listaDiferencias[i]) > 15) {
                    estadoServicio.textContent = 'Iniciará su recorrido en menos de media hora'
                }
                if (Math.abs(listaDiferencias[i]) < 15 && Math.abs(listaDiferencias[i]) > 10) {
                    estadoServicio.textContent = 'Iniciará su recorrido en menos de 15 minutos'
                }
                if (Math.abs(listaDiferencias[i]) < 10 && Math.abs(listaDiferencias[i]) < 5) {
                    estadoServicio.textContent = 'Iniciará su recorrido en menos de 10 minutos'
                }
                if (Math.abs(listaDiferencias[i]) < 5 && Math.abs(listaDiferencias[i]) > 0) {
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
    
    setTimeout(() => {
        irAlObjeto()
    }, 750);
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
    // actual4.textContent = '';
    // futuro4.textContent = '';
    // $('.mensaje2').css('display', 'none')
    // $('.resultados').css('display', 'none')
    // $('.resultados2').css('display', 'none')
    opcionbase.selected = true;
    opcionbase2.selected = true;
    linea1.textContent = '';
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





















