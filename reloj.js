function reloj() {

    let momentoActual = new Date();
    let hora = momentoActual.getHours();
    let minuto = momentoActual.getMinutes();
    let segundo = momentoActual.getSeconds();
    let fecha = momentoActual.getDate();
    let dia = momentoActual.getDay()
    let mes = momentoActual.getMonth()

    if (minuto <= 9) {
        minuto = "0" + minuto
    }
    if (segundo <= 9) {
        segundo = "0" + segundo;
    }
    if (hora <= 9) {
        hora = "0" + hora;
    }
    if (fecha <= 9) {
        fecha = "0" + fecha;
    }

    let diaFecha = document.getElementById('dia')
    let numeroFecha = document.getElementById('fecha')
    let mesFecha = document.getElementById('mes')
    let horita = document.getElementById('horas')
    let minutitos = document.getElementById('minutos')
    let segunditos = document.getElementById('segundos')
    let diasDeLaSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    let mesesDelAño = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    diaFecha.textContent = `${diasDeLaSemana[dia]}`
    numeroFecha.textContent = `${fecha}`;
    mesFecha.textContent = `${mesesDelAño[mes]}`;
    horita.textContent = hora;
    minutitos.textContent = minuto;
    segunditos.textContent = segundo;

    /*MOVER RELOJ A TIEMPO ACTUAL*/
    setTimeout("reloj()", 1000)
    /*                          */
}