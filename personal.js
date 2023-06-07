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
        "fechaIngreso":{
                        "dia":01,
                        "mes":09,
                        "año":2002
                       },
        "licenciasMedicas": 5,
        "suspenciones":3         
    },
    {
        "legajo": "250",
        "apellido":"Rios",
        "nombre":"Hector",
        "fechaNac" :
                    {
                        "dia":30,
                        "mes":2,
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
        "fechaIngreso":{
                        "dia":15,
                        "mes":05,
                        "año":2010
                       },
        "licenciasMedicas": 2,
        "suspenciones":2         
    }
]

let fechaActual = new Date;
let mes = fechaActual.getMonth() + 1;
let año = fechaActual.getFullYear();

const input = document.querySelector('.input');
const boton = document.querySelector('.boton');

const completarRegistro = (emp)=> {

    idlegajo.innerHTML = `#${emp.legajo}`
    idapellido.innerHTML = emp.apellido;
    idnombres.innerHTML = emp.nombre;
    dni.innerHTML = emp.dni.toUpperCase()
    fechaNac.innerHTML = `${emp.fechaNac.dia}/${emp.fechaNac.mes}/${emp.fechaNac.año}`
    estadoCivil.innerHTML = emp.estadoCivil.toUpperCase();
    conyuge.innerHTML = `${emp.conyuge.apellido.toUpperCase()} , ${emp.conyuge.nombre.toLocaleUpperCase()}`
    hijos.innerHTML = `${emp.hijosNombres.apellido.toUpperCase()} , ${emp.hijosNombres.nombre.toLocaleUpperCase()}`
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
        antiguedad.innerHTML = antiguedads;    
    }
    if(antiguedads >= 20){
        vacaciones.innerHTML = 35;
    }
    else if(antiguedads < 20 && antiguedads >= 10){
        vacaciones.innerHTML = 28
    }
    else if(antiguedads < 10 && antiguedads >= 5){
        vacaciones.innerHTML = 21
    }
    else{
        vacaciones.innerHTML = 14
    }

    licenciasMed.innerHTML = emp.licenciasMedicas

    suspenciones.innerHTML = emp.suspenciones;
;

}

boton.addEventListener('click', ()=> {
    // personal.forEach(element => {
    //     if(input.value == element.legajo) {
    //         completarRegistro();
    //         
    //     }
    //     else{

    //     }
    // });
       for (i = 0; i < personal.length; i++){
        if(personal[i].legajo == input.value){
            let empleado = personal[i];
            completarRegistro(empleado);
            $('.empleado-contenedor').css('display', 'block')
            console.log(empleado.fechaIngreso)
            
        }
            }
       
})






