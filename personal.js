const personal = 
[
    {
        "legajo": "150",
        "apellido":"Acosta",
        "nombre":"Carlos",
        "fechaNac" :
                    {
                        "dia":28,
                        "mes":10,
                        "año":1983
                    },
        "estadoCivil":"casado",
        "conyuge": 
                    {
                        "apellido":"Leal",
                        "nombre":"Leonela"
                    }
                  ,
        "hijos":true,        
        "hijosNombres":    
                    {
                        "apellido":"Acosta",
                        "nombre":"Julio"
                    },
        "dni":"26.874.188",
        "cuil":"20-26874188-9",
        "fechaIngreso":{
                        "dia":01,
                        "mes":09,
                        "año":2002
                       },
        "licenciasMedicas": 5,
        "suspenciones":3,
        "activo":true         
    },
    {
        "legajo": "250",
        "apellido":"Rios",
        "nombre":"Hector",
        "fechaNac" :
                    {
                        "dia":30,
                        "mes":5,
                        "año":1990
                    },
        "estadoCivil":"casado",
        "conyuge": 
                    {
                        "apellido":"Diaz",
                        "nombre":"Noelia"
                    }
                  ,
        "hijos":true,        
        "hijosNombres":    
                    {
                        "apellido":"Rios",
                        "nombre":"Carla"
                    },
        "dni":"35.846.178",
        "cuil":"20-35846178-9",
        "fechaIngreso":{
                        "dia":15,
                        "mes":05,
                        "año":2010
                       },
        "licenciasMedicas": 2,
        "suspenciones":2,
        "activo":false,
        "inactividad":"Parte médico",
        "tiempoInactivo":90         
    }
]

let fechaActual = new Date;
let mes = fechaActual.getMonth() + 1;
let año = fechaActual.getFullYear();
let dia = fechaActual.getDate();

const input = document.querySelector('.input');
const boton = document.querySelector('.boton');

function crearCuadricula (nombre, id) {
    const cuadriculaContenedor = document.querySelectorAll('.cuadricula-contenedor')
    const cuadricula = document.createElement('DIV');
    const H3Cuadricula = document.createElement('H3');
    const spanCuadricula = document.createElement('SPAN');
    cuadricula.classList.add('cuadricula');
    H3Cuadricula.classList.add('rotulo');
    H3Cuadricula.innerHTML = nombre
    spanCuadricula.classList.add('rotulo-contenido');
    spanCuadricula.setAttribute('id', `${id}`)
    cuadricula.appendChild(H3Cuadricula)
    cuadricula.appendChild(spanCuadricula)
    cuadriculaContenedor[1].appendChild(cuadricula);
}

function borrarCuadricula (id) {
    const cuadriculaContenedor = document.querySelectorAll('.cuadricula-contenedor')
    const cuadricula = document.querySelectorAll('.cuadricula')
    for (i = 0; i < cuadricula.length; i++){
        if((cuadricula[i].children[1].id) == `${id}`)
        cuadriculaContenedor[1].removeChild(cuadricula[i])
    }
}


const completarRegistro = (emp)=> {

    idlegajo.innerHTML = `#${emp.legajo}`
    idapellido.innerHTML = emp.apellido.toLocaleUpperCase();
    idnombres.innerHTML = emp.nombre.toLocaleUpperCase();
    dni.innerHTML = emp.dni.toUpperCase()
    cuil.innerHTML = emp.cuil.toLocaleUpperCase()
    fechaNac.innerHTML = `${emp.fechaNac.dia}/${emp.fechaNac.mes}/${emp.fechaNac.año}`
    estadoCivil.innerHTML = emp.estadoCivil.toUpperCase();
    conyuge.innerHTML = `${emp.conyuge.apellido.toUpperCase()} , ${emp.conyuge.nombre.toLocaleUpperCase()}`
    hijos.innerHTML = `${emp.hijosNombres.apellido.toUpperCase()} , ${emp.hijosNombres.nombre.toLocaleUpperCase()}`
    let añosEdad = año - emp.fechaNac.año
    if((mes + 1) > emp.fechaNac.mes){
        edad.innerHTML = `${añosEdad} AÑOS`
    }
    else if((mes + 1) == emp.fechaNac.mes){
        if(dia >= emp.fechaNac.dia){
            edad.innerHTML = `${añosEdad} AÑOS`
        }
                
    }
    else{
        edad.innerHTML = `${(añosEdad) - 1} AÑOS`
    }

    if(emp.fechaIngreso.dia < 10 && emp.fechaIngreso.mes < 10){
        fechaIng.innerHTML = `0${emp.fechaIngreso.dia}/0${emp.fechaIngreso.mes}/${emp.fechaIngreso.año}`
    }
    else if(emp.fechaIngreso.dia < 10){
        fechaIng.innerHTML = `0${emp.fechaIngreso.dia}/${emp.fechaIngreso.mes}/${emp.fechaIngreso.año}`
    }
    else if(emp.fechaIngreso.mes < 10){
        fechaIng.innerHTML = `${emp.fechaIngreso.dia}/0${emp.fechaIngreso.mes}/${emp.fechaIngreso.año}`
    }
    else{
        fechaIng.innerHTML = `${emp.fechaIngreso.dia}/${emp.fechaIngreso.mes}/${emp.fechaIngreso.año}`
    }

    let antiguedads = año - emp.fechaIngreso.año;

    if(emp.fechaIngreso.mes >= mes){
        antiguedad.innerHTML = antiguedads - 1 + '' + ' AÑOS';
    }
    else{
        antiguedad.innerHTML = `${antiguedads} AÑOS`;    
    }
    if(antiguedads >= 20){
        vacaciones.innerHTML = '35 DÍAS';
    }
    else if(antiguedads < 20 && antiguedads >= 10){
        vacaciones.innerHTML = '28 DÍAS'
    }
    else if(antiguedads < 10 && antiguedads >= 5){
        vacaciones.innerHTML = '21 DÍAS'
    }
    else{
        vacaciones.innerHTML = '14 DÍAS'
    }
    licenciasMed.innerHTML = emp.licenciasMedicas

    suspenciones.innerHTML = emp.suspenciones;

    if(emp.activo) {
        situacion.innerHTML = 'EN ACTIVIDAD';
        borrarCuadricula('inactividad');
        borrarCuadricula('tiempoInactivo')
    }

    else {situacion.innerHTML = 'INACTIVO'; 
    crearCuadricula('Inactividad', 'inactividad');
    inactividad.innerHTML = emp.inactividad.toUpperCase();
    crearCuadricula('Tiempo inactivo', 'tiempoInactivo');
    tiempoInactivo.innerHTML = `${emp.tiempoInactivo} DÍAS`.toUpperCase();
    };

   
}

boton.addEventListener('click', ()=> {
    for (i = 0; i < personal.length; i++){
        if(personal[i].legajo == input.value){
            let empleado = personal[i];
            completarRegistro(empleado);
            $('.empleado-contenedor').css('display', 'block')
        }
    }
    const cuadro = document.querySelector('.cuadro')
    cuadro.classList.add('cuadro2')
    const inputCont = document.querySelector('.input-contenedor')
    inputCont.classList.add('input-contenedor2');
    setTimeout(() => {
        $(inputCont).css('height', '100%'), $(inputCont).css('flexDirection', 'row'),input.value = '';
    }, 300);
    
});            






