const codigo_06 = '$ 100'; // Mínimo
const codigo_08 = '130';
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
    if(inicio == florida && (final == posse || final == paraiso) || (inicio == paraiso || inicio == posse) && final == florida){return codigo_06}
    if(inicio == florida && final == terminal || inicio == terminal && final == florida){
        if(recorrido.includes(posse)){return codigo_21}
        else return codigo_16
    }    
}