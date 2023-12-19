const codigo_06 = '$ 190'; // Mínimo
const codigo_07 = '$ 220';
const codigo_08 = '$ 250';
const codigo_10 = '$ 270';
const codigo_11 = '$ 300';
const codigo_12 = '$ 330';
const codigo_13 = '$ 360';
const codigo_14 = '$ 380';
const codigo_15 = '$ 410';
const codigo_16 = '$ 440'; // Florida - Terminal x Alderetes
const codigo_18 = '$ 470';
const codigo_20 = '$ 520';
const codigo_21 = '$ 580'; // Florida - Terminal x Posse
const codigo_22 = '$ 660';
const codigo_23 = '$ 690';
const codigo_24 = '$ 710';
const codigo_26 = '$ 850';
const codigo_27 = '$ 880';
const codigo_30 = '$ 1070';
const codigo_34 = '$ 1210';
const codigo_37 = '$ 1400';
const codigo_41 = '$ 1590';
const codigo_44 = '$ 1760';

const definirPrecioBoleto = (inicio, final, recorrido)=> {

        if(inicio == alabama){
            if(final == fincaMayo) {return codigo_06};
            if(final == ralos) {return codigo_15};
            if(final == llona || final == cevilPozo) {return codigo_24}
            if(final == bandaRS) {return codigo_26}
            if(final == terminal) {return codigo_27}
        }
        if(inicio == alderetes){
            if(final == bandaRS || final == cochuchal || final == talar) {return codigo_06};
            if(final == florida || final == terminal || final == col4Luisiana || final == fortin) {return codigo_08};
            if(final == fincaMayo) {return codigo_18};
            if(final == marta || final == alabama) {return codigo_21};
        }

        if(inicio == bandaRS){
            if(final == alderetes || final == talar || final == cochuchal || final == cevilPozo || final == terminal){return codigo_06};
            if(final == llona || final == filaOrilla || final == filaMedio || final == posse || final == cruzAlta) {return codigo_08};
            if(final == paraiso) {return codigo_11};
            if(final == col4Luisiana || final == fortin) {return codigo_11};
            if(final == florida) {if(recorrido.includes(posse)){return codigo_14} else {return codigo_11}};
            if(final == ralos) {return codigo_18}
            if(final == fincaMayo) {return codigo_21};
            if(final == alabama) {return codigo_22};
            if(final == cejas) {return codigo_30};
            if(final == sieteAbril) {return codigo_44};
        }

        if(inicio == cejas){
            if(final == ralos) {return codigo_24};
            if(final == llona || final == cevilPozo) {return codigo_27};
            if(final == bandaRS) {return codigo_30};
            if(final == terminal) {return codigo_34};
            if(final == sieteAbril) {return codigo_41};
        }

        if(inicio == cevilPozo){
            if(final == llona || final == posse || final == cruzAlta || final == filaMedio || final == filaOrilla || final == bandaRS){return codigo_06};
            if(final == paraiso || final == terminal) {return codigo_08};
            if(final == florida || final == fortin) {return codigo_13};
            if(final == ralos || final == col4Luisiana) {return codigo_14};
            if(final == fincaMayo) {return codigo_21}
            if(final == cejas) {return codigo_30};
            if(final == sieteAbril) {return codigo_44};
        }

        if(inicio == col4Luisiana){
            if(final == fincaMayo || final == talar){return codigo_06}
            if(final == florida || final == paraiso || final == posse || final == cochuchal || final == talar || final == alderetes || final == llona || final == filaOrilla){return codigo_08};
            if(final == bandaRS || final == marta) {return codigo_11}
            if(final == cevilPozo) {return codigo_13}
            if(final == terminal) {return codigo_16};
        }

        if(inicio == cochuchal || inicio == talar){
            if(final == alderetes || final == bandaRS || final == florida || final == fortin || final == col4Luisiana){return codigo_06};
            if(final == fincaMayo || final == terminal) {return codigo_13};
            if(final == marta) {return codigo_14}
        }

        if(inicio == cruzAlta){
            if(final == llona || final == cevilPozo) {return codigo_06};
            if(final == bandaRS) {return codigo_08};
            if(final == ralos) {return codigo_10};
            if(final == terminal) {return codigo_15};
        }

        if(inicio == llona){
            if(final == filaOrilla || final == cevilPozo || final == bandaRS || final == cruzAlta || final == posse) {return codigo_06};
            if(final == paraiso || final == florida || final == col4Luisiana || final == fortin) {return codigo_08};
            if(final == ralos) {return codigo_11};
            if(final == terminal) {return codigo_12};
            if(final == martar) {return codigo_21}
            if(final == sieteAbril) {return codigo_44};
        }

        if(inicio == marta){
            if(final == fincaMayo) {return codigo_06};
            if(final == ralos) {return codigo_08}
            if(final == florida || final == col4Luisiana) {return codigo_11};
            if(final == talar) {return codigo_14};
            if(final == fincaMayo) {return codigo_18};
            if(final == alderetes || final == cevilPozo || final == llona) {return codigo_21};
            if(final == bandaRS) {return codigo_22};
            if(final == terminal) {return codigo_27};

        }

        if(inicio == paraiso){
            if(final == florida || final == fortin || final == posse || final == col4Luisiana) {return codigo_06};
            if(final == cevilPozo || final == llona || final == filaOrilla) {return codigo_08}
            if(final == bandaRS) {return codigo_11};
            if(final == terminal) {return codigo_18};
        }

        if(inicio == filaOrilla || inicio == filaMedio){
            if(final == llona || final == cevilPozo || final == posse){return codigo_06}
            if(final == florida || final == paraiso || final == fortin || final == col4Luisiana || final == bandaRS) {return codigo_08}
            if(final == terminal)  {return codigo_12}
        }

        if(inicio == fincaMayo){
            if(final == marta || final == col4Luisiana){return codigo_06}
            if(final == florida || final == fortin || final == ralos) {return codigo_11}
            if(final == talar || final == cochuchal) {return codigo_13}
            if(final == llona) {return codigo_16}
            if(final == alderetes) {return codigo_18}
            if(final == bandaRS || final == cevilPozo) {return codigo_21}
            if(final == terminal) {return codigo_24}
        }
    
        if(inicio == florida || inicio == fortin){
            if(final == posse || final == paraiso || final == talar || final == cochuchal || final == fortin){return codigo_06}
            if(final == alderetes || final == col4Luisiana || final == llona || final == cevilPozo || final == filaOrilla){return codigo_08}
            if(final == fincaMayo || final == marta) {return codigo_11}
            if(final == bandaRS) if(recorrido.includes(posse)) {return codigo_14} else {return codigo_11};
            if(final == terminal) if(recorrido.includes(posse)){return codigo_21} else {return codigo_16};
        }

        if(inicio == fortin){
            if(final == florida || final == cochuchal || final == talar || final == paraiso || final == posse){return codigo_06}
            else if(final == alderetes || final == col4Luisiana || final == llona || final == cevilPozo){return codigo_08};
        }

        if(inicio == posse){
            if(final == florida || final == fortin || final == paraiso || final == filaMedio || final == filaOrilla || final == llona || final == cevilPozo || final == col4Luisiana) {return codigo_06};
            if(final == bandaRS) {return codigo_08};
            if(final == terminal) {return codigo_18};
        }

        if(inicio == ralos){
            if(final == cruzAlta) {return codigo_10};
            if(final == fincaMayo) {return codigo_11}
            if(final == llona) {return codigo_12};
            if(final == cevilPozo) {return codigo_16}
            if(final == bandaRS) {return codigo_18};
            if(final == terminal) {return codigo_21};
            if(final == cejas) {return codigo_24};
            if(final == sieteAbril) {return codigo_44};
        }

        if(inicio == sieteAbril){
            if(final ==  cejas) {return codigo_41};
            if(final == bandaRS || final == cevilPozo || final == llona || final == ralos || final == terminal) {return codigo_44}
        }

        if(inicio == terminal){
            if(final == bandaRS) {return codigo_06};
            if(final == cevilPozo || final == alderetes) {return codigo_08};
            if(final == llona || final == filaMedio || final == filaOrilla) {return codigo_12};
            if(final == cochuchal || final == talar) {return codigo_13};
            if(final == cruzAlta) {return codigo_15};
            if(final == posse || final == paraiso) {return codigo_18}
            if(final == ralos) {return codigo_21};
            if(final == florida || final == fortin || final == col4Luisiana){
                if(recorrido.includes(posse)){return codigo_21} else {return codigo_16}
            }
            if(final == fincaMayo) {return codigo_24};
            if(final == marta || final == alabama) {return codigo_27};
            if(final == cejas) {return codigo_34};
            if(final == sieteAbril) {return codigo_44};
        }
        
        if(final == perez) {return '-'}
    }