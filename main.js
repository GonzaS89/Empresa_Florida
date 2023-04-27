
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

const boton = document.getElementById('boton');

const opcionbase = selector[0]
const opcionbase2 = selector2[0]
const florida = selector[1];
const xposse = selector[2]
const sanM = selector[3];
let valorSelecionado;
let valorSelecionado2;
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



let indiceDeBusqueda;

boton.addEventListener('click', () => {


    // Definimos la posicion del selector 1

    for (opcion of selector) {
        if (opcion.selected) {
            valorSelecionado = opcion;
        }
    }
    for (i = 0; i < selector.length; i++) {
        valores.push(selector[i])
    }

    for (i = 0; i < valores.length; i++) {
        posicion = valores.indexOf(valorSelecionado)
    }


    // Definimos la posicion del selector 2

    for (opcion of selector2) {
        if (opcion.selected) {
            valorSelecionado2 = opcion;
        }
    }
    for (i = 0; i < selector2.length; i++) {
        valores2.push(selector2[i])
    }

    for (i = 0; i < valores2.length; i++) {
        posicion2 = valores2.indexOf(valorSelecionado2)
    }


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
    let elMasCercano = 3000;
    let anteriorPasado = 3000;
    let diaRango = []
    let ruta = [];
    let listaDelDia = [];
    let horariosEnEnteros = [];
    let listaDiferencias = [];
    let tituloResultado = document.getElementById('tituloResultado')
    let linea1 = document.getElementById('linea1');
    let feriado = false;
    let semiFeriado = false;
    let nombreServicio;
    let recorridoServicio;
    let recorridoServicio2;
    let estadoServicio;



    if (opcionbase.selected == true && opcionbase2.selected == false) {
        ruta = todosTucumanDestino[posicion2 - 1]
        // linea1.textContent = origen.textContent

        linea2.textContent = selector2[posicion2].label;
    }
    if (opcionbase2.selected == true && opcionbase.selected == false) {
        ruta = todosDestinoTucuman[posicion - 1];
        linea2.textContent = selector[posicion].label;
        // linea2.textContent = destino.textContent;   
    }

    function obtenerDiaRuta(x) {

        if (x == 0) {
            diaRango = ruta[0].slice(0, ruta[0].length);
        }
        if (x >= 1 && x <= 5) {
            diaRango = ruta[1].slice(0, ruta[1].length);
        }
        if (x == 6) {
            diaRango = ruta[2].slice(0, ruta[2].length);
        }

        return diaRango
    }

    let rutaObtenida

    if ((fecha == 24) && (mes == 2)) {
        tituloResultado.textContent = `Hoy, ${diasDeLaSemana[dia].toLowerCase()} (feriado): Circulación como día domingo `;
        rutaObtenida = obtenerDiaRuta(0);
        feriado = true;
    }

    else if ((fecha == 6) && (mes == 3)) {
        semiFeriado = true;
        rutaObtenida = obtenerDiaRuta(6);
        tituloResultado.textContent = `Hoy, ${diasDeLaSemana[dia].toLowerCase()} santo: Circulación como día sábado `;
    }

    else if ((fecha == 7) && (mes == 3)) {
        feriado = true;
        rutaObtenida = obtenerDiaRuta(0);
        tituloResultado.textContent = `Hoy, ${diasDeLaSemana[dia].toLowerCase()} santo: Circulación como día domingo`;

    }


    else {

        tituloResultado.textContent = `Hoy, ${diaSemana.toLowerCase()}, tenés éstos servicios`

        // Aqui definimos el array dependiendo el dia de la semana
        rutaObtenida = obtenerDiaRuta(dia)
    }

    //funcion para crear los globos de resultados

    // Aqui extraemos del array de arriba los salidaes de cada horario y lo agregamos a la lista del dia


    function obtenerLista(x) {
        for (i = 0; i < x.length; i++) {
            listaDelDia.push(x[i].salida);
        }
        // Aqui usamos la lista con los salidaes y las pasamos a numero enteros junto con los minutos

        return listaDelDia
    }

    let listaObtenida = obtenerLista(rutaObtenida)


    function convertirHorarioAMinutos(x) {
        a = (Math.trunc(x)) * 60;
        b = ((x) - (Math.trunc(x))) * 100;
        c = a + b;

        return c
    }

    function pasarHoraAMinutos(x, y) {
        a = x * 60;
        b = a + y;
        return b
    }

    let conversionHorario;
    let conversionHora;


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
        if (listaDiferencias[i] >= 0) {
            anteriorPasado = Math.min(anteriorPasado, listaDiferencias[i]);
        }
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
        if (indiceDeBusqueda == (rutaObtenida.length) - 1) {
            scrollcont.children[0].classList.add('manitoAnimacionAbajo');
        }
        else if (indiceDeBusqueda == 0) {
            scrollcont.children[0].classList.add('manitoAnimacionArriba');
        }
        else {
            scrollcont.children[0].classList.add('manitoAnimacionCentro');
        }
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
    if (resultadoscont.classList.contains('normalizarFondo')) {
        resultadoscont.classList.replace('normalizarFondo', 'opacarFondo')
    }
    else {
        resultadoscont.classList.add('opacarFondo');
    }

    mensaje2.appendChild(indicacioncont);

    for (i = 0; i < resultadoscont.children.length; i++) {
        if (i < indiceDeBusqueda || i > indiceDeBusqueda) {
            resultadoscont.children[i].classList.add('opacar')
        }
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
                if (listaDiferencias[i] >= 120) {
                    estadoServicio.textContent = 'Iniciaron sus recorridos hace un par horas'
                }
                if (listaDiferencias[i] > 60 && listaDiferencias[i] < 120) {
                    estadoServicio.textContent = 'Iniciaron sus recorridos hace mas de 1 hora'
                }
                if (listaDiferencias[i] == 60) {
                    estadoServicio.textContent = 'Iniciaron sus recorridos hace 1 hora'
                }
                if (listaDiferencias[i] < 60) {
                    estadoServicio.textContent = `Iniciaron sus recorrido hace menos de 1 hora`
                }
                if (listaDiferencias[i] < 30) {
                    estadoServicio.textContent = `Iniciaron sus recorrido hace menos de media hora`
                }
                if (listaDiferencias[i] < 10) {
                    estadoServicio.textContent = `Iniciaron sus recorrido hace menos de 10 minutos`
                }
                if (listaDiferencias[i] < 5 && listaDiferencias[i] > 0) {
                    estadoServicio.textContent = 'Iniciaron sus recorridos hace menos de 5 minutos'
                }
                if (Math.trunc(listaDiferencias[i]) == 0) {
                    estadoServicio.textContent = 'Están iniciando sus recorridos'
                }
                recorridoServicio.textContent = `1° Recorrido: ${rutaObtenida[i].recorrido}`
                recorridoServicio2.textContent = `2° Recorrido: ${rutaObtenida[i].recorrido2}`;
            }
            else {
                if(rutaObtenida.length == 1 && i == 0) {
                    `Único servicio del día ${rutaObtenida[i].nombre} Hrs`;
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
                if (listaDiferencias[i] >= 120) {
                    estadoServicio.textContent = 'Inició su recorrido hace un par horas'
                }
                if (listaDiferencias[i] > 60 && listaDiferencias[i] < 120) {
                    estadoServicio.textContent = 'Inició su recorrido hace mas de 1 hora'
                }
                if (listaDiferencias[i] == 60) {
                    estadoServicio.textContent = 'Inició su recorrido hace 1 hora'
                }
                if (listaDiferencias[i] < 60) {
                    estadoServicio.textContent = `Inició su recorrido hace menos de 1 hora`
                }
                if (listaDiferencias[i] < 30) {
                    estadoServicio.textContent = `Inició su recorrido hace menos de media hora`
                }
                if (listaDiferencias[i] < 15) {
                    estadoServicio.textContent = `Inició su recorrido hace menos de 15 minutos`
                }
                if (listaDiferencias[i] < 10) {
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
                if (Math.abs(listaDiferencias[i]) < 60) {
                    estadoServicio.textContent = 'Iniciarán sus recorridos en menos de 1 hora';
                }
                if (Math.abs(listaDiferencias[i]) < 30) {
                    estadoServicio.textContent = 'Iniciarán sus recorridos en menos de media hora';
                }
                if (Math.abs(listaDiferencias[i]) < 10) {
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
                    nombreServicio.textContent = `Primer servicio del día ${rutaObtenida[i].nombre} Hrs`;
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
                if (Math.abs(listaDiferencias[i]) < 60) {
                    estadoServicio.textContent = 'Iniciará su recorrido en menos de 1 hora'
                }
                if (Math.abs(listaDiferencias[i]) < 30) {
                    estadoServicio.textContent = 'Iniciará su recorrido en menos de media hora'
                }
                if (Math.abs(listaDiferencias[i]) < 10) {
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
        if (i < indiceDeBusqueda || i > indiceDeBusqueda) {
            resultadoscont.children[i].classList.replace('opacar', 'normalizar');
            resultadoscont.children[indiceDeBusqueda].classList.replace('resaltado', 'normalizarResaltado');
            scrollcont.children[0].classList.remove('manitoAnimacionAbajo');
            scrollcont.children[0].classList.remove('manitoAnimacionArriba');
            scrollcont.children[0].classList.remove('manitoAnimacionCentro');
        }
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
    mensaje2.classList.replace('mensajeAparece', 'mensajeIrse')
    scrollcont.children[0].classList.remove('manitoAnimacionAbajo');
    scrollcont.children[0].classList.remove('manitoAnimacionArriba');
    scrollcont.children[0].classList.remove('manitoAnimacionCentro');
    resultadoscont.children[0].classList.remove('resultadosOpcion2');
    if(resultadoscont.classList.contains('opacaFondo')){
            resultadoscont.classList.replace('opacarFondo', 'normalizarFondo');
        }
        else{
            resultadoscont.classList.add('normalizarFondo')
        }
    
    setTimeout( ()=> {
        $('.mensaje2').css('display', 'none'),borrarGlobos(),
        borrarManito();
    },1000)
})


function busquedaManual() {

    const botonOrigenCapital = document.getElementById('origenCapital');
    const botonCapitalDestino = document.getElementById('capitalDestino')
    const botonManual = document.getElementById('busquedaManual')
    const botonAuto = document.getElementById('busquedaAuto')
    const selector3 = document.menu3.selector3;
    const selector4 = document.menu4.selector4;
    const selector5 = document.menu5.selector5;
    const ingHora = document.getElementById('ingHora')
    const boton2 = document.getElementById('boton2')
    const opcionbase3 = selector3[0];
    const opcionbase4 = selector4[0];
    const opcionbase5 = selector5[0];
    let posicion3;
    let posicion4;
    let posicion5;
    let ruta2 = []
    let valorSelecionado3;
    let valorSelecionado4;
    let valorSelecionado5;
    let valores3 = []
    let valores4 = []
    let valores5 = []
    let diaRango2 = []
    let horaInputAMinutos
    let mensajeError = document.getElementById('mensajeError')
    let linea2 = document.getElementById('linea2');
    let linea3 = document.getElementById('linea3');
    let linea4 = document.getElementById('linea4')
    let tituloResultado = document.getElementById('tituloResultado');
    let nombreServicioManual;
    let recorridoServicioManual;
    let recorridoServicio2Manual;
    const resultadoscont = document.querySelector('.resultados-cont');
    const mensaje2 = document.querySelector('.mensaje2');


    botonManual.addEventListener('click', function () {
        $('.botonesBusquedaCont2').css('display', 'flex');
        $('.botonesBusquedaCont').css('display', 'none');
        $('.topside2').css('display', 'flex');
        $('.busquedaAuto').css('display', 'none')
        $('.boton-cont').css('display', 'none');
        $('.boton-cont2').css('display', 'flex');
        $('.aclaracion').css('display', 'flex');
    })

    botonAuto.addEventListener('click', function () {
        $('.botonesBusquedaCont2').css('display', 'none');
        $('.botonesBusquedaCont').css('display', 'flex');
        $('.busquedaAuto').css('display', 'flex')
        $('.topside2').css('display', 'none');
        $('.boton-cont').css('display', 'flex');
        $('.boton-cont2').css('display', 'none');
        botonCapitalDestino.selected = false;
        botonOrigenCapital.selected = false;
        $('#origenCapital').css('background-color', 'var(--blanco');
        $('#origenCapital').css('color', 'var(--black');
        $('#capitalDestino').css('background-color', 'var(--blanco');
        $('#capitalDestino').css('color', 'var(--black');
        $('#selector3').css('display', 'none');
        $('#selector4').css('display', 'none');
        $('#selector5').css('display', 'none');
        $('#ingHora').css('display', 'none');
        $('.aclaracion').css('display', 'none');
        opcionbase3.selected = true;
        opcionbase4.selected = true;
        opcionbase5.selected = true;
    })


    botonOrigenCapital.addEventListener('click', function () {
        $('#selector3').css('display', 'flex');
        $('#selector5').css('display', 'flex');
        $('#ingHora').css('display', 'flex');
        $('#selector4').css('display', 'none');
        $('#origenCapital').css('background-color', 'black');
        $('#origenCapital').css('color', 'var(--rojo2');
        $('#capitalDestino').css('background-color', 'var(--blanco');
        $('#capitalDestino').css('color', 'var(--black');
        opcionbase4.selected = true;
        opcionbase5.selected = true;
        ingHora.value = ''
    })

    botonCapitalDestino.addEventListener('click', function () {
        $('#selector4').css('display', 'flex');
        $('#selector5').css('display', 'flex');
        $('#ingHora').css('display', 'flex');
        $('#selector3').css('display', 'none');
        $('#capitalDestino').css('background-color', 'black');
        $('#capitalDestino').css('color', 'var(--rojo2');
        $('#origenCapital').css('background-color', 'var(--blanco');
        $('#origenCapital').css('color', 'var(--black');
        opcionbase3.selected = true;
        opcionbase5.selected = true;
        ingHora.value = ''
    })

    boton2.addEventListener('click', function () {

        let listaDelDia2 = []
        let listaDiferencias3 = [];
        let horariosEnEnteros2 = [];
        let proximo = 3000;

        // Definimos la posicion del selector 3
        if (opcionbase3.selected == true) {
            posicion3 = 0
        }

        for (opcion of selector3) {
            if (opcion.selected) {
                valorSelecionado3 = opcion
            }
        }

        for (i = 0; i < selector3.length; i++) {
            valores3.push(selector3[i])
        }

        for (i = 0; i < valores3.length; i++) {
            posicion3 = valores3.indexOf(valorSelecionado3)
        }

        // Definimos la posicion del selector 4

        if (opcionbase4.selected == true) {
            posicion4 = 0;
        }

        for (opcion of selector4) {
            if (opcion.selected) {
                valorSelecionado4 = opcion;
            }
        }

        for (i = 0; i < selector4.length; i++) {
            valores4.push(selector4[i])
        }

        for (i = 0; i < valores4.length; i++) {
            posicion4 = valores4.indexOf(valorSelecionado4)
        }

        // Definimos la posicion del selector 5

        if (opcionbase5.selected == true) {
            posicion5 = 0;
        }

        for (opcion of selector5) {
            if (opcion.selected) {
                valorSelecionado5 = opcion;
            }
        }

        for (i = 0; i < selector5.length; i++) {
            valores5.push(selector5[i])
        }

        for (i = 0; i < valores5.length; i++) {
            posicion5 = valores5.indexOf(valorSelecionado5)
        }

        // Aqui definimos donde localidad de salida y camino

        if (opcionbase4.selected == true && opcionbase3.selected == false) {
            ruta2 = todosDestinoTucuman[posicion3 - 1];
            linea2.textContent = selector3[posicion3].label;
        }

        if (opcionbase3.selected == true && opcionbase4.selected == false) {
            ruta2 = todosTucumanDestino[posicion4 - 1];
            linea2.textContent = selector4[posicion4].label;
        }


        //    Aqui definimos el array dependiendo el dia de la semana

        function obtenerRuta2(x) {
            if ((posicion5 - 1) == 0) {
                diaRango2 = x[1].slice(0, x[1].length);
            }
            if ((posicion5 - 1) == 1) {
                diaRango2 = x[2].slice(0, x[2].length);
            }
            if ((posicion5 - 1) == 2) {
                diaRango2 = x[0].slice(0, x[0].length);
            }

            return diaRango2;
        }

        let rutaObtenidaManual = obtenerRuta2(ruta2)


        if ((posicion5 - 1) == 0) {
            linea3.textContent = `De ${selector5[posicion5].label}`;
        }
        else {
            linea3.textContent = `Días ${selector5[posicion5].label}`;
        }



        // / Aqui extraemos del array de arriba los salidaes de cada horario y lo agregamos a la lista del dia

        for (i = 0; i < rutaObtenidaManual.length; i++) {
            listaDelDia2.push(rutaObtenidaManual[i].salida);
        }

        // Aqui usamos la lista con los salidaes y las pasamos a numero enteros junto con los minutos

        for (let i = 0; i < listaDelDia2.length; i++) {
            let horasEnEnteros = (Math.trunc(listaDelDia2[i])) * 60;
            let minutosEnEnteros = (listaDelDia2[i] - (Math.trunc(listaDelDia2[i]))) * 100;
            let horaMinutosEnEnteros = horasEnEnteros + minutosEnEnteros;
            horariosEnEnteros2.push(horaMinutosEnEnteros);
        }

        if (ingHora.value == '' || ingHora.value > 23) {
            mensajeError.textContent = 'Ingresa un número entre 0 y 23'
            $('#mensajeError').css('display', 'flex')
            setTimeout(() => {
                mensajeError.remove(), ingHora.value = '';
            }, 2000)

        }
        else {
            if (ingHora.value < 10) {
                tituloResultado.textContent = `Servicios a partir de las 0${ingHora.value}:00 Hrs`;
            }
            else {
                tituloResultado.textContent = `Servicios a partir de las ${ingHora.value}:00 Hrs`;
            }

            horaInputAMinutos = (ingHora.value) * 60

            for (let i = 0; i < horariosEnEnteros2.length; i++) {
                listaDiferencias3.push(horariosEnEnteros2[i] - horaInputAMinutos)
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
                    p2.classList.add('actual2')
                    resultado.appendChild(fondo);
                    resultado.appendChild(p1);
                    resultado.appendChild(p2);
                    if ((Object.keys(ruta[0])).length > 3) {
                        let p3 = document.createElement('P');
                        p3.classList.add('actual3');
                        resultado.appendChild(p3);
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
                        p2.classList.add('actual2')
                        resultado.appendChild(fondo);
                        resultado.appendChild(p1);
                        resultado.appendChild(p2);
                        if ((Object.keys(ruta[i])).length > 3) {
                            let p3 = document.createElement('P');
                            p3.classList.add('actual3');
                            resultado.appendChild(p3);
                        }
                        contHijo.appendChild(resultado);
                        contPadre.appendChild(contHijo)
                    }
                }
            }

            contruirGlobos(rutaObtenidaManual,resultadoscontainer,resultadoscont);

            



            function irAlObjeto() {
                let a = resultadoscont.children[indiceDeBusqueda];
                a.scrollIntoView({ behavior: 'smooth', block: 'center' });
            };

            for (let i = 0; i < listaDiferencias3.length; i++) {
                if (listaDiferencias3[i] >= 0) {
                    proximo = Math.min(proximo, listaDiferencias3[i]);
                    indiceDeBusqueda = listaDiferencias3.indexOf(proximo);
                }
                else {
                    indiceDeBusqueda = (rutaObtenidaManual.length) - 1;
                }
            }

            if ((rutaObtenidaManual.length) > 1) {
                if (indiceDeBusqueda == (rutaObtenidaManual.length) - 1) {
                    scrollcont.children[0].classList.add('manitoAnimacionAbajo');
                }
                else if (indiceDeBusqueda == 0) {
                    scrollcont.children[0].classList.add('manitoAnimacionArriba');
                }
                else {
                    scrollcont.children[0].classList.add('manitoAnimacionCentro');
                }
            }
            resultadoscont.children[indiceDeBusqueda].classList.add('resaltado');
            resultadoscont.classList.add('opacarFondo');
            mensaje2.appendChild(indicacioncont);

            for (i = 0; i < resultadoscont.children.length; i++) {
                if (i < indiceDeBusqueda || i > indiceDeBusqueda) {
                    resultadoscont.children[i].classList.add('opacar')
                }
            }

            

            for (i = 0; i < (resultadoscont.children).length; i++) {
                nombreServicioManual = (resultadoscont.children[i]).children[1];
                recorridoServicioManual = (resultadoscont.children[i]).children[2];
                recorridoServicio2Manual = (resultadoscont.children[i]).children[3];
                if ((Object.keys(rutaObtenidaManual[i])).length > 3) {
                    if (rutaObtenidaManual.length == 1 && i == 0) {
                        nombreServicioManual.textContent = `Únicos servicios del día ${rutaObtenidaManual[i].nombre} Hrs`;
                    }
                    else if (i == 0) {
                        nombreServicioManual.textContent = `Primeros servicios del día ${rutaObtenidaManual[i].nombre} Hrs`;
                    }
                    else if (i == (rutaObtenidaManual.length) - 1) {
                        nombreServicioManual.textContent = `Últimos servicios del día ${rutaObtenidaManual[i].nombre} Hrs`;
                    }
                    else {
                        nombreServicioManual.textContent = `Servicios de las ${rutaObtenidaManual[i].nombre} Hrs`
                    }
                    recorridoServicioManual.textContent = `1° Recorrido: ${rutaObtenidaManual[i].recorrido}`;
                    recorridoServicio2Manual.textContent = `2° Recorrido: ${rutaObtenidaManual[i].recorrido2}`;
                }
                else {
                    if (rutaObtenidaManual.length == 1 && i == 0) {
                        nombreServicioManual.textContent = `Único servicio del día ${rutaObtenidaManual[i].nombre} Hrs`;
                    }
                    else if (i == 0) {
                        nombreServicioManual.textContent = `Primer servicio del día ${rutaObtenidaManual[i].nombre} Hrs`
                    }
                    else if (i == (rutaObtenidaManual.length) - 1) {
                        nombreServicioManual.textContent = `Último servicio del día ${rutaObtenidaManual[i].nombre} Hrs`;
                    }
                    else {
                        nombreServicioManual.textContent = `Servicio de las ${rutaObtenidaManual[i].nombre} Hrs`
                    }
                    recorridoServicioManual.textContent = `Recorrido: ${rutaObtenidaManual[i].recorrido}`;

                }
                //     else if (i > 0 && i < (rutaObtenidaManual.length) - 1){
                //         nombreServicioManual.textContent = `Servicio de las ${rutaObtenidaManual[i].nombre} Hrs`;
                //     }

                //    
            }





            //     if (proximo < 3000) {
            //         if (listaDiferencias3.indexOf(proximo) == 0) {
            //             mostrar1.textContent = 'No hay unidades activas anteriores al horario indicado'
            //             mostrar2.textContent = '';
            //             mostrar3.textContent = `El servicio más cercano al horario indicado es de las ${diaRango2[listaDiferencias3.indexOf(proximo)].nombre} Hrs (Primer servicio del día)`;
            //             mostrar4.textContent = `Recorrido: ${diaRango2[listaDiferencias3.indexOf(proximo)].recorrido}`
            //         }
            //         else {
            //             mostrar1.textContent = `Anteriormente al horario que indicaste tenés el servicio de las ${diaRango2[listaDiferencias3.indexOf(proximo) - 1].nombre} Hrs`;
            //             mostrar2.textContent = `Recorrido: ${diaRango2[listaDiferencias3.indexOf(proximo) - 1].recorrido}`;
            //             if (listaDiferencias3.indexOf(proximo) == diaRango2.length - 1) {
            //                 mostrar3.textContent = `El servicio más cercano al horario indicado es de las ${diaRango2[listaDiferencias3.indexOf(proximo)].nombre} Hrs (Último servicio del día)`;
            //                 mostrar4.textContent = `Recorrido: ${diaRango2[listaDiferencias3.indexOf(proximo)].recorrido}`;
            //             }
            //             else {
            //                 mostrar3.textContent = `Y el servicio más cercano a partir del horario que indicaste, es él de las ${diaRango2[listaDiferencias3.indexOf(proximo)].nombre} Hrs`;
            //                 mostrar4.textContent = `Recorrido: ${diaRango2[listaDiferencias3.indexOf(proximo)].recorrido}`;
            //             }

            //         }



            //     }




            // }

            // if (posicion3 == 0 && posicion4 == 0 && posicion5 == 0) {
            //     $('.mensaje2').css('display', 'none')
            // }

            $('.resultados').css('display', 'flex');
            $('.resultadosOpcion2').css('display', 'flex');
            $('.mensaje2').css('display', 'flex');
            if(mensaje2.classList.contains('mensajeIrse')){
                mensaje2.classList.replace('mensajeIrse', 'mensajeAparece')
            }else{
                mensaje2.classList.add('mensajeAparece')
            }
            setTimeout(() => {
                irAlObjeto()
            }, 750);


        }
    })

    indicacioncont.addEventListener('click', function () {
        $('.resultadosOpcion2').css('display', 'none');
        resultadoscont.children[0].classList.remove('resultadosOpcion2')
        linea2.textContent = '';
        linea3.textContent = '';
        if(resultadoscont.classList.contains('opacaFondo')){
            resultadoscont.classList.replace('opacarFondo', 'normalizarFondo');
        }
        else{
            resultadoscont.classList.add('normalizarFondo')
        }
        setTimeout( ()=> {
            $('.mensaje2').css('display', 'none'),borrarGlobos(),
            borrarManito();
        },1000)
    })
}


















