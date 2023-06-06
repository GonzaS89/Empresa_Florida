const personal = 
[
    {
        "legajo": "150",
        "apellido":"Acosta",
        "nombre":"Carlos",
        "estadoCivil":"casado",
        "pareja": 
                    {
                        "apellido":"Leal",
                        "nombre":"Leonela"
                    }
                  ,
        "hijos":    
                    {
                        "apellido":"Acosta",
                        "nombre":"Julio"
                    },
        "dni":"26874188",
        "fechaIngreso":2002,
        "sanciones":3,         
    }
]


personal.forEach(element => {
    nombre.innerHTML = element.nombre.toUpperCase()
    apellido.innerHTML = element.apellido.toUpperCase()
    estadoCivil.innerHTML = element.estadoCivil.toUpperCase()

});

