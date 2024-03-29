
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

boton.addEventListener('click', function () {

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
    let listaDiferencias = []
    let listaDiferencias2 = [];
    let actual1 = document.getElementById('actual1');
    let actual2 = document.getElementById('actual2');
    let actual3 = document.getElementById('actual3');
    let actual4 = document.getElementById('actual4');
    let futuro1 = document.getElementById('futuro1');
    let futuro2 = document.getElementById('futuro2');
    let futuro3 = document.getElementById('futuro3');
    let futuro4 = document.getElementById('futuro4');
    let tituloResultado = document.getElementById('tituloResultado')
    let linea1 = document.getElementById('linea1');
    const indicacion = document.querySelector('.indicacion-cont');
    let feriado = false;
    let semiFeriado = false;


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
    else if ((fecha == 1) && (mes == 4)) {
        tituloResultado.textContent = `Hoy, ${diasDeLaSemana[dia].toLowerCase()} (feriado): Circulación como día domingo `;
        rutaObtenida = obtenerDiaRuta(0);
        feriado = true;
    }

    else if ((fecha == 6) && (mes == 3)){
        semiFeriado = true;
        rutaObtenida = obtenerDiaRuta(6);
        tituloResultado.textContent = `Hoy, ${diasDeLaSemana[dia].toLowerCase()} santo: Circulación como día sábado `;
    }

    else if ((fecha == 7) && (mes == 3)){
        feriado = true;
        rutaObtenida = obtenerDiaRuta(0);
        tituloResultado.textContent = `Hoy, ${diasDeLaSemana[dia].toLowerCase()} santo: Circulación como día domingo`;
    }
    

    else {

        tituloResultado.textContent = `Hoy, ${diaSemana.toLowerCase()}, tenés éstos servicios`

        // Aqui definimos el array dependiendo el dia de la semana
        rutaObtenida = obtenerDiaRuta(dia)
    }



    // Aqui extraemos del array de arriba los salidaes de cada horario y lo agregamos a la lista del dia

    
    
    

    function obtenerLista(x) {
        for (i = 0; i < x.length; i++) {
                listaDelDia.push(x[i].salida);
        }
        // Aqui usamos la lista con los salidaes y las pasamos a numero enteros junto con los minutos

        return listaDelDia
    }
    
    let listaObtenida = obtenerLista(rutaObtenida);
    
    
    function convertirHorarioAMinutos(x){
        a = (Math.trunc(x)) * 60;
        b = ((x) - (Math.trunc(x))) * 100;
        c = a + b; 

        return c
    } 

    function pasarHoraAMinutos(x,y){
        a = x * 60;
        b = a + y;
        return b
    }
    
    let conversionHorario;
    let conversionHora;
    
    // if(dia == 1 && feriado ==){
    //     for (let i = 1; i < listaObtenida.length; i++) {
    //         let horasEnEnteros = (Math.trunc(listaObtenida[i])) * 60;
    //         let minutosEnEnteros = (listaDelDia[i] - (Math.trunc(listaObtenida[i]))) * 100;
    //         let horaMinutosEnEnteros = horasEnEnteros + minutosEnEnteros;
    //         horariosEnEnteros.push(horaMinutosEnEnteros);
    //     } 
    // }
    
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

    // Aqui definimos los mensajes a mostrar en el primer campo       

    if (anteriorPasado < 3000) {
        if (Object.keys(rutaObtenida[listaDiferencias.indexOf(anteriorPasado)]).length > 3) {
            if (listaDiferencias.indexOf(anteriorPasado) == 0) {
                actual1.textContent = `Primeros servicios del día ${rutaObtenida[listaDiferencias.indexOf(anteriorPasado)].nombre} Hrs`
            }
            if (listaDiferencias.indexOf(anteriorPasado) == (listaDiferencias.length) - 1) {
                actual1.textContent = `Últimos servicio del día ${rutaObtenida[listaDiferencias.indexOf(anteriorPasado)].nombre} Hrs`
            }
            if ((listaDiferencias.indexOf(anteriorPasado) == 0) && (listaDiferencias.indexOf(anteriorPasado) == (listaDiferencias.length) - 1)) {
                actual1.textContent = `Únicos servicios del día ${rutaObtenida[listaDiferencias.indexOf(anteriorPasado)].nombre} Hrs`
            }
            if ((listaDiferencias.indexOf(anteriorPasado)) > 0 && ((listaDiferencias.indexOf(anteriorPasado) < (listaDiferencias.length) - 1))) {
                actual1.textContent = `Servicios de las ${rutaObtenida[listaDiferencias.indexOf(anteriorPasado)].nombre} Hrs`
            }
            if (anteriorPasado >= 120) {
                actual2.textContent = 'Iniciaron sus recorridos hace un par horas'
            }
            if (anteriorPasado > 60 && anteriorPasado < 120) {
                actual2.textContent = 'Iniciaron sus recorridos hace mas de 1 hora'
            }
            if (anteriorPasado == 60) {
                actual2.textContent = 'Iniciaron sus recorridos hace 1 hora'
            }
            if (anteriorPasado < 60 && anteriorPasado >= 30) {
                actual2.textContent = 'Iniciaron sus recorridos hace menos de una hora'
            }
            if (anteriorPasado < 30 && anteriorPasado >= 15) {
                actual2.textContent = 'Iniciaron sus recorridos hace menos de media hora'
            }
            if (anteriorPasado < 15 && anteriorPasado >= 10) {
                actual2.textContent = 'Iniciaron sus recorridos hace menos de 15 minutos'
            }
            if (anteriorPasado < 10 && anteriorPasado >= 5) {
                actual2.textContent = 'Iniciaron sus recorridos hace menos de 10 minutos'
            }
            if (anteriorPasado < 5 && Math.trunc(anteriorPasado) > 0) {
                actual2.textContent = 'Iniciaron sus recorridos hace menos de 5 minutos'
            }
            if (Math.trunc(anteriorPasado) == 0) {
                actual2.textContent = 'Están iniciando sus recorridos'
            }

            actual4.textContent = `2° Servicio : ${rutaObtenida[listaDiferencias.indexOf(anteriorPasado)].recorrido2
                }`
            actual3.textContent = `1° Servicio : ${rutaObtenida[listaDiferencias.indexOf(anteriorPasado)].recorrido}`
        }
        else {

            if (listaDiferencias.indexOf(anteriorPasado) == 0) {
                actual1.textContent = `Primer servicio del día ${rutaObtenida[listaDiferencias.indexOf(anteriorPasado)].nombre} Hrs`
            }
            if (listaDiferencias.indexOf(anteriorPasado) == (listaDiferencias.length) - 1) {
                actual1.textContent = `Último servicio del día ${rutaObtenida[listaDiferencias.indexOf(anteriorPasado)].nombre} Hrs`
            }
            if ((listaDiferencias.indexOf(anteriorPasado) == 0) && (listaDiferencias.indexOf(anteriorPasado) == (listaDiferencias.length) - 1)) {
                actual1.textContent = `Único servicio del día ${rutaObtenida[listaDiferencias.indexOf(anteriorPasado)].nombre} Hrs`
            }
            if ((listaDiferencias.indexOf(anteriorPasado)) > 0 && ((listaDiferencias.indexOf(anteriorPasado) < (listaDiferencias.length) - 1))) {
                actual1.textContent = `Servicio de las ${rutaObtenida[listaDiferencias.indexOf(anteriorPasado)].nombre} Hrs`
            }


            // actual1.textContent = `Servicio de las ${rutaObtenida[listaDiferencias.indexOf(anteriorPasado)].nombre} Hrs`

            if (anteriorPasado >= 120) {
                actual2.textContent = 'Inició su recorrido hace un par horas'
            }
            if (anteriorPasado > 60 && anteriorPasado < 120) {
                actual2.textContent = 'Inició su recorrido hace más de 1 hora'
            }
            if (anteriorPasado == 60) {
                actual2.textContent = 'Inició su recorrido hace 1 hora'
            }
            if (anteriorPasado < 60 && anteriorPasado >= 30) {
                actual2.textContent = 'Inició su recorrido hace menos de una hora'
            }
            if (anteriorPasado < 30 && anteriorPasado >= 15) {
                actual2.textContent = 'Inició su recorrido hace menos media hora'
            }
            if (anteriorPasado < 15 && anteriorPasado >= 10) {
                actual2.textContent = 'Inició su recorrido hace menos 15 minutos'
            }
            if (anteriorPasado < 10 && anteriorPasado >= 5) {
                actual2.textContent = 'Inició su recorrido hace menos 10 minutos'
            }
            if (anteriorPasado < 5 && anteriorPasado > 0) {
                actual2.textContent = 'Inició su recorrido hace menos de 5 minutos'
            }
            if (Math.trunc(anteriorPasado) == 0) {
                actual2.textContent = 'Está iniciando su recorrido'
            }
            actual3.textContent = `Recorrido : ${rutaObtenida[listaDiferencias.indexOf(anteriorPasado)].recorrido}`
        }
    }

    else{

        if(((dia >= 2 && dia <= 5) && (semiFeriado == true)) && (opcionbase.selected == true && posicion2 == 2)){
            rutaObtenida = obtenerDiaRuta(1)
            conversionHorario = convertirHorarioAMinutos(rutaObtenida[(rutaObtenida.length) - 2].salida)
            conversionHora = pasarHoraAMinutos(hora,minutos)
            let variableUnica = conversionHorario - 1440;
            let variableDoble = conversionHora - variableUnica;
            actual1.textContent = `Último servicio de ayer ${rutaObtenida[(rutaObtenida.length) - 2].nombre} Hrs`;
            if (variableDoble >= 120) {
                actual2.textContent = 'Inició su recorrido hace un par horas'
            }
            if (variableDoble > 60 && anteriorPasado < 120) {
                actual2.textContent = 'Inició su recorrido hace más de 1 hora'
            }
            if (variableDoble == 60) {
                actual2.textContent = 'Inició su recorrido hace 1 hora'
            }
            if (variableDoble < 60) {
                actual2.textContent = `Inició su recorrido hace ${Math.floor(variableDoble)} minutos`
            }
            actual3.textContent = `Recorrido: ${rutaObtenida[(rutaObtenida.length) - 2].recorrido}`;
        }
        else if((dia >= 2 && dia <= 5) && (opcionbase.selected == true && posicion2 == 2) && feriado){
            actual1.textContent = '';
            actual2.textContent = 'Ninguna unidad inició su recorrido aún'
            actual3.textContent = '';
        }
        else if((dia >= 2 && dia <= 6) && (opcionbase.selected == true && posicion2 == 2)){
            rutaObtenida = obtenerDiaRuta(1)
            conversionHorario = convertirHorarioAMinutos(rutaObtenida[(rutaObtenida.length) - 2].salida)
            conversionHora = pasarHoraAMinutos(hora,minutos)
            let variableUnica = conversionHorario - 1440;
            let variableDoble = conversionHora - variableUnica;
            actual1.textContent = `Último servicio de ayer ${rutaObtenida[(rutaObtenida.length) - 2].nombre} Hrs`;
            if (variableDoble >= 120) {
                actual2.textContent = 'Inició su recorrido hace un par horas'
            }
            if (variableDoble > 60 && anteriorPasado < 120) {
                actual2.textContent = 'Inició su recorrido hace más de 1 hora'
            }
            if (Math.trunc(variableDoble) == 60) {
                actual2.textContent = 'Inició su recorrido hace 1 hora'
            }
            if (variableDoble < 60) {
                actual2.textContent = 'Inició su recorrido hace menos de 1 hora'
            }
            actual3.textContent = `Recorrido: ${rutaObtenida[(rutaObtenida.length) - 2].recorrido}`
        }
        else {
            actual1.textContent = '';
            actual2.textContent = 'Ninguna unidad inició su recorrido aún'
            actual3.textContent = ''
        }
    }


    //   Aqui en el segundo campo  

    
        for (i = 0; i < horariosEnEnteros.length; i++) {
            let difHorariosHora = horariosEnEnteros[i] - horaEnEnteros;
            listaDiferencias2.push(difHorariosHora);
        }

        
    
        for (i = 0; i < listaDiferencias2.length; i++) {
            if (listaDiferencias2[i] > 0) {
                elMasCercano = Math.min(elMasCercano, listaDiferencias2[i]);
            }
        }


    if (elMasCercano < 3000) {
        if (Object.keys(rutaObtenida[listaDiferencias2.indexOf(elMasCercano)]).length > 3) {
            if (listaDiferencias2.indexOf(elMasCercano) == 0) {
                futuro1.textContent = `Primeros servicios del día a las ${rutaObtenida[listaDiferencias2.indexOf(elMasCercano)].nombre} Hrs`
            }
            if (listaDiferencias2.indexOf(elMasCercano) == (listaDiferencias2.length) - 1) {
                futuro1.textContent = `Últimos servicios del día a las ${rutaObtenida[listaDiferencias2.indexOf(elMasCercano)].nombre} Hrs`
            }
            if ((listaDiferencias2.indexOf(elMasCercano) == 0) && (listaDiferencias2.indexOf(elMasCercano) == (listaDiferencias2.length) - 1)) {
                futuro1.textContent = `Únicos servicios del día ${rutaObtenida[listaDiferencias2.indexOf(elMasCercano)].nombre} Hrs`
            }
            if ((listaDiferencias2.indexOf(elMasCercano)) > 0 && ((listaDiferencias2.indexOf(elMasCercano) < (listaDiferencias2.length) - 1))) {
                futuro1.textContent = `Servicios de las ${rutaObtenida[listaDiferencias2.indexOf(elMasCercano)].nombre} Hrs`
            }
            if (elMasCercano >= 120) {
                futuro2.textContent = 'Iniciarán sus recorridos en un par horas'
            }
            if (elMasCercano > 60 && elMasCercano < 120) {
                futuro2.textContent = 'Iniciarán sus recorridos en poco más de 1 hora'
            }
            if (Math.trunc(elMasCercano) == 60) {
                futuro2.textContent = 'Iniciarán sus recorridos dentro 1 hora'
            }
            if (elMasCercano < 60 && elMasCercano >= 30) {
                futuro2.textContent = 'Iniciarán sus recorridos en menos de 1 hora'
            }
            if (elMasCercano < 30 && elMasCercano >= 15) {
                futuro2.textContent = 'Iniciarán sus recorridos en menos de media hora'
            }
            if (elMasCercano < 15 && elMasCercano >= 10) {
                futuro2.textContent = 'Iniciarán sus recorridos en menos de 15 minutos'
            }
            if (elMasCercano < 10 && elMasCercano >= 5) {
                futuro2.textContent = 'Iniciarán sus recorridos en menos de 10 minutos'
            }
            if (elMasCercano < 5) {
                futuro2.textContent = 'Iniciarán sus recorridos en menos de 5 minutos'
            }

            futuro3.textContent = `1° Servicio : ${rutaObtenida[listaDiferencias2.indexOf(elMasCercano)].recorrido}`
            futuro4.textContent = `2° Servicio : ${rutaObtenida[listaDiferencias2.indexOf(elMasCercano)].recorrido2}`
        }

        else {

            if(dia == 1 && feriado == false){
                    futuro1.textContent = `Primer servicio del día a las ${rutaObtenida[1].nombre} Hrs`
            }
            else if(feriado == true){
                futuro1.textContent = `Primer servicio del día a las ${rutaObtenida[0].nombre} Hrs`
            }
            else{
                if ((listaDiferencias2.indexOf(elMasCercano)) == 0) {
                    futuro1.textContent = `Primer servicio del día a las ${rutaObtenida[listaDiferencias2.indexOf(elMasCercano)].nombre} Hrs`
                }
            }
            if (listaDiferencias2.indexOf(elMasCercano) == (listaDiferencias2.length) - 1) {
                futuro1.textContent = `Último servicio del día a las ${rutaObtenida[listaDiferencias2.indexOf(elMasCercano)].nombre} Hrs`
            }
            if ((listaDiferencias2.indexOf(elMasCercano) == 0) && (listaDiferencias2.indexOf(elMasCercano) == (listaDiferencias2.length) - 1)) {
                futuro1.textContent = `Único servicio del día a las ${rutaObtenida[listaDiferencias2.indexOf(elMasCercano)].nombre} Hrs`
            }
            if ((listaDiferencias2.indexOf(elMasCercano)) > 0 && ((listaDiferencias2.indexOf(elMasCercano) < (listaDiferencias2.length) - 1))) {
                futuro1.textContent = `Servicio de las ${rutaObtenida[listaDiferencias2.indexOf(elMasCercano)].nombre} Hrs`
            }

            if (elMasCercano >= 120) {
                futuro2.textContent = 'Inicia su recorrido en un par horas'
            }
            if (elMasCercano > 60 && elMasCercano < 120) {
                futuro2.textContent = 'Inicia su recorrido en poco más de 1 hora'
            }
            if (Math.trunc(elMasCercano) == 60) {
                futuro2.textContent = 'Inicia su recorrido dentro 1 hora'
            }
            if (elMasCercano < 60 && elMasCercano >= 30) {
                futuro2.textContent = 'Inicia su recorrido en menos de 1 hora'
            }
            if (elMasCercano < 30 && elMasCercano >= 15) {
                futuro2.textContent = 'Inicia su recorrido en menos de media hora'
            }
            if (elMasCercano < 15 && elMasCercano >= 10) {
                futuro2.textContent = 'Inicia su recorrido en menos de 15 minutos'
            }
            if (elMasCercano < 10 && elMasCercano >= 5) {
                futuro2.textContent = 'Inicia su recorrido en menos de 10 minutos'
            }
            if (elMasCercano < 5) {
                futuro2.textContent = 'Iniciará su recorrido en menos de 5 minutos'
            }
            futuro3.textContent = `Recorrido : ${rutaObtenida[listaDiferencias2.indexOf(elMasCercano)].recorrido}`
        }
    }
    

        else{
            if(opcionbase.selected == true && posicion2 == 3){
                futuro1.textContent = "";
                futuro2.textContent = "No hay más unidades por hoy, por ésta ruta. Busca en HASTA FLORIDA ( X POSSE )"
                futuro3.textContent = "";
            }
            else if(opcionbase2.selected == true && posicion == 3){
                futuro1.textContent = "";
                futuro2.textContent = "No hay más unidades por hoy, por ésta ruta. Busca en DESDE FLORIDA ( X POSSE )"
                futuro3.textContent = "";
            }
            else{
                futuro1.textContent = "";
                futuro2.textContent = "No hay más unidades por hoy, por ésta ruta."
                futuro3.textContent = "";
            }
        }   
        

    $('.resultados').css('display', 'flex')
    $('.resultados2').css('display', 'flex')
    $('.mensaje2').css('display', 'flex')

})
indicacion.addEventListener('click', function () {
    actual4.textContent = '';
    futuro4.textContent = '';
    $('.mensaje2').css('display', 'none')
    $('.resultados').css('display', 'none')
    $('.resultados2').css('display', 'none')
    opcionbase.selected = true;
    opcionbase2.selected = true;
    linea1.textContent = '';
    linea2.textContent = '';

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
    let mostrar1 = document.getElementById('mostrar1')
    let mostrar2 = document.getElementById('mostrar2')
    let mostrar3 = document.getElementById('mostrar3')
    let mostrar4 = document.getElementById('mostrar4')
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
    const mensaje2 = document.querySelector('.mensaje2');
    let mensajeError = document.getElementById('mensajeError')
    let linea2 = document.getElementById('linea2');
    let linea3 = document.getElementById('linea3');
    let linea4 = document.getElementById('linea4')
    let tituloResultado = document.getElementById('tituloResultado')
    

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

        function obtenerRuta2 (x) {
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

        

        if((posicion5 - 1) == 0){
            linea3.textContent = `De ${selector5[posicion5].label}`;
        }
        else{
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
            if(ingHora.value < 10){
                tituloResultado.textContent = `Servicios cercanos a las 0${ingHora.value}:00 Hrs`;
            }
            else{
                tituloResultado.textContent = `Servicios cercanos a las ${ingHora.value}:00 Hrs`;
            }
    
            horaInputAMinutos = (ingHora.value) * 60

            for (let i = 0; i < horariosEnEnteros2.length; i++) {
                listaDiferencias3.push(horariosEnEnteros2[i] - horaInputAMinutos)
            }


            for (let i = 0; i < listaDiferencias3.length; i++) {
                if (listaDiferencias3[i] >= 0) {
                    proximo = Math.min(proximo, listaDiferencias3[i])
                }

                if (proximo < 3000) {
                    if(listaDiferencias3.indexOf(proximo) == 0){
                        mostrar1.textContent = 'No hay unidades activas anteriores al horario indicado'
                        mostrar2.textContent = '';
                        mostrar3.textContent = `El servicio más cercano al horario indicado es de las ${diaRango2[listaDiferencias3.indexOf(proximo)].nombre} Hrs (Primer servicio del día)`;
                        mostrar4.textContent = `Recorrido: ${diaRango2[listaDiferencias3.indexOf(proximo)].recorrido}`
                    }
                    else{
                        mostrar1.textContent = `Anteriormente al horario que indicaste tenés el servicio de las ${diaRango2[listaDiferencias3.indexOf(proximo) - 1].nombre} Hrs`;
                        mostrar2.textContent = `Recorrido: ${diaRango2[listaDiferencias3.indexOf(proximo) - 1].recorrido}`;
                        if(listaDiferencias3.indexOf(proximo) == diaRango2.length - 1){
                            mostrar3.textContent = `El servicio más cercano al horario indicado es de las ${diaRango2[listaDiferencias3.indexOf(proximo)].nombre} Hrs (Último servicio del día)`;
                            mostrar4.textContent = `Recorrido: ${diaRango2[listaDiferencias3.indexOf(proximo)].recorrido}`;
                        }
                        else{
                            mostrar3.textContent = `Y el servicio más cercano a partir del horario que indicaste, es él de las ${diaRango2[listaDiferencias3.indexOf(proximo)].nombre} Hrs`;
                        mostrar4.textContent = `Recorrido: ${diaRango2[listaDiferencias3.indexOf(proximo)].recorrido}`;
                        }
                        
                    }

                    
                    
                }
                else {
                    mostrar1.textContent = `El servicio más cercano al horario indicado es de las ${diaRango2[diaRango2.length - 1].nombre} Hrs (Último servicio del día)`;
                    mostrar2.textContent = `Recorrido: ${diaRango2[diaRango2.length - 1].recorrido}`
                    mostrar3.textContent = 'No hay más servicios en éste horario ni en lo que resta del día. Probá con otra ruta';
                    mostrar4.textContent = '';
                }
                

                if(diaRango2.length == 1){
                    mostrar1.textContent = `El servicio más cercano al horario indicado es de las ${diaRango2[diaRango2.length - 1].nombre} Hrs (Único servicio del día)`;
                    mostrar2.textContent = `Recorrido: ${diaRango2[diaRango2.length - 1].recorrido}`;
                }
                // if(diaRango2.length == ''){
                //     $('.resultados3').css('display', 'flex');
                //     mostrar1.textContent = 'No hay unidades activas en el dia seleccionado'
                //     mostrar2.textContent = ''
                // }
            }

            if(posicion3 == 0 && posicion4 == 0 && posicion5 == 0){
                $('.mensaje2').css('display', 'none')
            }
            else{
                $('.resultados3').css('display', 'flex')
                $('.resultados4').css('display', 'flex')
                $('.mensaje2').css('display', 'flex')
            }
            
        }
    })

    indicacion.addEventListener('click', function () {
        $('.mensaje2').css('display', 'none');
        $('.resultados3').css('display', 'none');
        $('.resultados4').css('display', 'none');
        linea2.textContent = '';
        linea3.textContent = '';
        mostrar1.textContent = '';
        mostrar2.textContent = '';
        mostrar3.textContent = '';
        mostrar4.textContent = '';

        $('#selector3').css('display','none')      
        // $('#selector4').css('display','none') 
        // $('#selector5').css('display','none') 
        // $('#ingHora').css('display','none')
        // $('#capitalDestino').css('background-color', 'var(--blanco');
        // $('#capitalDestino').css('color', 'var(--black');
        // $('#origenCapital').css('background-color', 'var(--blanco');
        // $('#origenCapital').css('color', 'var(--black'); 
        // opcionbase3.selected = true;
        // opcionbase4.selected = true;
        // opcionbase5.selected = true;
        // ingHora.value = '';
        // botonOrigenCapital.selected = false;
        // botonCapitalDestino.selected = false;
    })
}


















