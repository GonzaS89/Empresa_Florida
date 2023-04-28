function busquedaManual() {

    const botonOrigenCapital = document.getElementById('origenCapital');
    const botonCapitalDestino = document.getElementById('capitalDestino')
    const botonManual = document.getElementById('busquedaManual')
    const botonAuto = document.getElementById('busquedaAuto')
    const selector3 = document.menu3.selector3;
    const selector4 = document.menu4.selector4;
    const selector5 = document.menu5.selector5;
    const selector6 = document.menu6.selector6;
    const boton2 = document.getElementById('boton2')
    const opcionbase3 = selector3[0];
    const opcionbase4 = selector4[0];
    const opcionbase5 = selector5[0];
    const opcionbase6 = selector6[0];
    let posicion3;
    let posicion4;
    let posicion5;
    let posicion6;
    let ruta2 = []
    let valorSeleccionado3;
    let valorSeleccionado4;
    let valorSeleccionado5;
    let valorSeleccionado6;
    let valores3 = [];
    let valores4 = [];
    let valores5 = [];
    let valores6 = [];
    let diaRango2 = [];
    let horaInputAMinutos
    let mensajeError = document.getElementById('mensajeError')
    let linea2 = document.getElementById('linea2');
    let linea3 = document.getElementById('linea3');
    let linea4 = document.getElementById('linea4');
    let tituloResultado = document.getElementById;('tituloResultado');
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
        // $('#ingHora').css('display', 'none');
        $('.aclaracion').css('display', 'none');
        opcionbase3.selected = true;
        opcionbase4.selected = true;
        opcionbase5.selected = true;
    })


    botonOrigenCapital.addEventListener('click', function () {
        $('#selector3').css('display', 'flex');
        $('#selector5').css('display', 'flex');
        $('#selector6').css('display', 'flex');
        $('#ingHora').css('display', 'flex');
        $('#selector4').css('display', 'none');
        $('#origenCapital').css('background-color', 'black');
        $('#origenCapital').css('color', 'var(--rojo2');
        $('#capitalDestino').css('background-color', 'var(--blanco');
        $('#capitalDestino').css('color', 'var(--black');
        opcionbase4.selected = true;
        opcionbase5.selected = true;
    })

    botonCapitalDestino.addEventListener('click', function () {
        $('#selector4').css('display', 'flex');
        $('#selector5').css('display', 'flex');
        $('#selector6').css('display', 'flex');
        $('#ingHora').css('display', 'flex');
        $('#selector3').css('display', 'none');
        $('#capitalDestino').css('background-color', 'black');
        $('#capitalDestino').css('color', 'var(--rojo2');
        $('#origenCapital').css('background-color', 'var(--blanco');
        $('#origenCapital').css('color', 'var(--black');
        opcionbase3.selected = true;
        opcionbase5.selected = true;
    })

    function obtenerPosicion3 () {
        for (opcion of selector) {
            if (opcion.selected) {
                valorSeleccionado3 = opcion;
            }
        }

        for (i = 0; i < selector3.length; i++) {
            valores3.push(selector3[i])
        }

        for (i = 0; i < valores3.length; i++) {
            posicion3 = valores3.indexOf(valorSeleccionado3)
        }
    }
    function obtenerPosicion() {
        selector3.addEventListener('click', (e) => {
            console.log(e)
        })
    }    
    
    obtenerPosicion()
    

    // if(opcionbase5.selected == true) {
    //     posicion5 = 0;
    // }

    
    function obtenerPosicion4 () {
        for (opcion of selector) {
            if (opcion.selected) {
                valorSeleccionado4 = opcion;
            }
        }

        for (i = 0; i < selector4.length; i++) {
            valores4.push(selector4[i])
        }

        for (i = 0; i < valores4.length; i++) {
            posicion4 = valores4.indexOf(valorSeleccionado4)
        }
    }
    function obtenerPosicion5 () {
        for (opcion of selector) {
            if (opcion.selected) {
                valorSeleccionado5 = opcion;
            }
        }

        for (i = 0; i < selector5.length; i++) {
            valores5.push(selector5[i])
        }

        for (i = 0; i < valores5.length; i++) {
            posicion5 = valores5.indexOf(valorSeleccionado5)
        }
    }
    function obtenerPosicion6 () {
        for (opcion of selector) {
            if (opcion.selected) {
                valorSeleccionado6 = opcion;
            }
        }

        for (i = 0; i < selector6.length; i++) {
            valores6.push(selector6[i])
        }

        for (i = 0; i < valores6.length; i++) {
            posicion6 = valores6.indexOf(valorSeleccionado6)
        }
    }
    function generarRuta () {
        if (opcionbase4.selected == true && opcionbase3.selected == false) {
            ruta2 = todosDestinoTucuman[posicion3 - 1];
        }

        if (opcionbase3.selected == true && opcionbase4.selected == false) {
            ruta2 = todosTucumanDestino[posicion4 - 1];
        }
    }


    function generarTitulos (){
        if (opcionbase4.selected == true && opcionbase3.selected == false) {
            linea2.textContent = selector3[posicion3].label;
        }
        if (opcionbase3.selected == true && opcionbase4.selected == false) {
            
            linea2.textContent = selector4[posicion4].label;
        }
        if ((posicion5 - 1) == 0) {
            linea3.textContent = `De ${selector5[posicion5].label}`;
        }
        else {
            linea3.textContent = `Días ${selector5[posicion5].label}`;
        }
    }
    
    obtenerPosicion3();
    obtenerPosicion4();


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
    

    


    boton2.addEventListener('click', function () {

        let listaDelDia2 = []
        let listaDiferencias3 = [];
        let horariosEnEnteros2 = [];
        let proximo = 3000;    

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

        // if (ingHora.value == '' || ingHora.value > 23) {
        //     mensajeError.textContent = 'Ingresa un número entre 0 y 23'
        //     $('#mensajeError').css('display', 'flex')
        //     setTimeout(() => {
        //         mensajeError.remove(), ingHora.value = '';
        //     }, 2000)

        // }
        
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

            
            for (i = 0; i = rutaObtenidaManual.length; i++){
                const opcion = document.createElement('OPTION')
                selector6.appendChild(opcion);
            }


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