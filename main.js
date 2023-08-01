const cajas = document.querySelector('.cajas');
const cajasHijas = cajas.children



const moverCajas = (indice, pxsY, pxsX)=> {

    cajasHijas[indice].animate([
        {transform :`translate(${pxsX}, ${pxsY})`},
    ],
        {duration : 2000,
        fill : "forwards"})
}

$(cajasHijas[2]).css('zIndex', '8')
$(cajasHijas[1]).css('zIndex', '9')
$(cajasHijas[0]).css('zIndex', '10')

// moverCajas(0, 0,0, 10)
moverCajas(1, -10, 7.5, 9)
moverCajas(2, -20,20)


// moverCajas(1, -10,10)

const desplazarCajas = (indice, pxsX,delay)=> {
    cajasHijas[indice].animate([
        {transform :`translate(${pxsX}%)`}
    ],
        {duration : 1000,
            delay : delay,
        fill : "forwards"})
}

desplazarCajas(0, -150, 500 )
desplazarCajas(0, 0, 2000 )
// $(cajasHijas[0]).css('zIndex', '8')
$(cajasHijas[1]).css('zIndex', '9')

// desplazarCajas(1, 500, 250)
// desplazarCajas(2, -750, 750)
