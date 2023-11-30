const codigo_06 = '$ 100'; // Mínimo
const codigo_08 = '$ 130';
const codigo_10 = '140';
const codigo_11 = '160';
const codigo_12 = '170';
const codigo_13 = '190';
const codigo_14 = '200';
const codigo_15 = '210';
const codigo_16 = '$ 230'; // Florida - Terminal x Alderetes
const codigo_18 = '240';
const codigo_20 = '270';
const codigo_21 = '$ 300'; // Florida - Terminal x Posse
const codigo_22 = '340';
const codigo_23 = '360';
const codigo_24 = '370';
const codigo_26 = '440';
const codigo_27 = '460';
const codigo_30 = '460';
const codigo_34 = '630';
const codigo_37 = '730';
const codigo_41 = '830';
const codigo_44 = '920';

const definirPrecioBoleto = (inicio, final, recorrido)=> {

   

    if(inicio == alderetes){
         // DEFINIENDO CODIGO 06
        if(final == bandaRS || final == cochuchal || final == talar){return codigo_06}
        //DEFINICIENDO CODIGO 08
        if(final == florida || final == terminal){return codigo_08}
    }

    if(inicio == bandaRS){
        if(final == alderetes || final == cochuchal || final == cevilPozo || final == terminal){return codigo_06}
        else if(final == posse){return codigo_08}
    }

    if(inicio == cevilPozo){
        if(final == llona || final == posse || final == cruzAlta || final == filaMedio || final == filaOrilla || final == bandaRS){return codigo_06}
    }

    if(inicio == col4Luisiana){
        if(final == fincaMayo || final == alabama){return codigo_06}
    }

    if(inicio == filaOrilla || inicio == filaMedio){
        if(final == llona || final == cevilPozo || final == posse){return codigo_06}
    }

    if(inicio == fincaMayo){if(final == marta){return codigo_06}}
    
    if(inicio == florida){
        if(final == posse || final == paraiso || final == talar || final == cochuchal || final == fortin){return codigo_06}
        else if(final == alderetes || final == col4Luisiana){return codigo_08}
        else if(final == terminal) 
        if(recorrido.includes(posse))
        {return codigo_21} 
        else {return codigo_16}
    }
    }