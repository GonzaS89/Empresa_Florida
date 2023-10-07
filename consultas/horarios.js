// Grilla horaria

// Destinos (FLORIDA / ALDERETES / ALTERNATIVA)

const terminal = 'Terminal';
const alderetes = 'Alderetes';
const bandaRS = 'Banda R.S.';
const autopista = 'Autopista';
const alternativa = 'Alternativa';
const talar = 'Talar';
const cochuchal = 'Cochuchal';
const bCancha = 'B° La Cancha';
const fortin = 'Fortín';
const esqLastra = 'Esquina Lastra';
const col3Luisiana = 'Colonia 3 (Luisiana)';
const col4Luisiana = 'Colonia 4 (Luisiana)';
const col10Luisiana = 'Colonia 10 (Luisiana)';
const fonda = 'Fonda'
const col5Florida = 'Colonia 5 (Florida)';
const col4Florida = 'Colonia 4 (Florida)';
const col3Florida = 'Colonia 3 (Florida)';
const col2Florida = 'Colonia 2 (Florida)';
const coloniasFloridaIda = 'Colonia 5/4/3/2 (Florida)'
const fincaMayo = 'Finca Mayo';
const perez = 'Los Perez';
const marta = 'La Marta';

// Destinos (FLORIDA / POSSE)

const paraiso = 'Paraíso';
const dispensario = 'Dispensario';
const llona = 'Llona';
const cevilPozo = 'Cevil Pozo';
const filaMedio = 'Fila del Medio';
const bosque = 'Bosque';
const filaOrilla = 'Fila de la orilla'
const plaza = 'Plaza'

// Destinos (TERMINAL / ALDERETES / ALTERNATIVA)

const catalinas = 'Catalinas Park';
const comisaria11 = 'Comisaria 11';
const todasColoniasVuelta = 'Colonia 5/4/3/2 (Florida)'

// Destino (RALOS / CEJAS / 7 de Abril)

const ralos = 'Ralos';
const villaTercera = 'Villa Tercera';
const cerco2 = 'Cerco 2';
const vias = 'Las Vias';
const lolitaS = 'Lolita Sur';
const lolitaN = 'Lolita Norte'
const bTrigal = 'B° Trigal';
const alabama = 'Alabama';
const cejas = 'Las Cejas';
const sieteAbril = '7 de Abril';
const infierno = 'El Infierno';
const parada6 = 'Parada 6 (Lujan)';
const piedrabuena = 'Piedrabuena';
const cruce = 'Cruce';
const cruzAlta = 'Cruz Alta';
const colonia9 = 'Colonia 9'

// Arreglos con recorridos (FLORIDA / ALDERETES / ALTERNATIVA)

const mayoColoniasTalarBanda = [fincaMayo,coloniasFloridaIda,fortin,esqLastra,talar,alderetes,bandaRS,terminal];
const fortinTalarBanda = [fortin, esqLastra, talar, alderetes, bandaRS ,terminal];
const fortinAlter = [fortin, esqLastra, talar, alternativa ,terminal];
const colonia10CochAutop = [col10Luisiana,col4Luisiana,bCancha,cochuchal,alderetes,autopista,terminal];
const col4CanchaAlter = [col4Luisiana,bCancha,talar,alternativa,terminal];
const col4CanchaTalarAutop = [col4Luisiana,bCancha,talar,alderetes,autopista,terminal];
const col4TalarBanda = [col4Luisiana,bCancha,talar,alderetes,bandaRS,terminal];
const canchaTalarBanda = [bCancha,talar,alderetes,bandaRS,terminal];

// Arreglos con recorridos (FLORIDA / POSSE)

const bCanchaFloridaPosse = [bCancha,paraiso,dispensario,llona,cevilPozo,bandaRS,terminal];
const fortinFloridaPosse = [fortin,esqLastra,paraiso,dispensario,llona,cevilPozo,bandaRS,terminal];
const col4FloridaPosse = [col4Luisiana,bCancha,paraiso,dispensario,llona,cevilPozo,bandaRS,terminal]
const col4fondaPosse = [col4Luisiana,fonda,paraiso,dispensario,llona,cevilPozo,bandaRS,terminal]
const lastraFloridaPosse = [esqLastra,paraiso,dispensario,llona,cevilPozo,bandaRS,terminal]

// Arreglos con recorridos (TERMINAL / ALDERETES / ALTERNATIVA)

const cataAutopTalarCancha = [terminal,catalinas,autopista,alderetes,talar,bCancha];
const bandaTalarMayo = [terminal,bandaRS,alderetes,talar,esqLastra,fortin,fincaMayo];
const cataAlterTalarCanchaCol4 = [terminal,catalinas,alternativa,talar,bCancha,col4Luisiana];
const bandaTalarFondaPerez = [terminal,bandaRS,alderetes,talar,fonda,col4Luisiana,perez];
const cataAutopCoch = [terminal,catalinas,autopista,cochuchal,col4Luisiana];
const bandaTalarFortin = [terminal,bandaRS,alderetes,talar,esqLastra,fortin];
const cataAlterTalarFortin = [terminal,catalinas,alternativa,talar,esqLastra,fortin];
const bandaTalarCancha = [terminal,bandaRS,alderetes,talar,bCancha];
const com11AlterFortin = [terminal,comisaria11,alternativa,talar,esqLastra,fortin];
const com11AlterCol4 = [terminal,comisaria11,alternativa,talar,bCancha,col4Luisiana];
const com11AutopCancha = [terminal,comisaria11,autopista,alderetes,talar,bCancha];
const bandaCochFortin = [terminal,bandaRS,alderetes,cochuchal,esqLastra,fortin];

// Arreglos con recorridos (TERMINAL / POSSE / FLORIDA)

const posseCancha = [terminal,bandaRS,cevilPozo,llona,dispensario,paraiso,bCancha];
const posseFortin = [terminal,bandaRS,cevilPozo,llona,dispensario,paraiso,esqLastra,fortin];
const posseLastra = [terminal,bandaRS,cevilPozo,llona,dispensario,paraiso,esqLastra];

// Arreglos con recorridos (POSSE / TERMINAL)

const dispenFilaM = [dispensario,filaMedio,cevilPozo,bandaRS,terminal];
const dispenFilaO = [dispensario,filaOrilla,llona,cevilPozo,bandaRS,terminal];
const bosqueFilaM = [bosque,filaMedio,cevilPozo,bandaRS,terminal];

// Arreglos con recorridos (TERMINAL / POSSE)

const filaMBosqueDispen = [terminal,bandaRS,cevilPozo,filaMedio,bosque,dispensario];
const filaOrillaDispen = [terminal,bandaRS,cevilPozo,llona,filaOrilla,dispensario];

// Arreglos con recorridos (RALOS / TERMINAL)

const ralosVillaT = [ralos,villaTercera,llona,cevilPozo,bandaRS,terminal];
const ralosTermi = [ralos,llona,cevilPozo,bandaRS,terminal];
const alabamaMayoRalos = [alabama,fincaMayo,ralos,llona,cevilPozo,bandaRS,terminal];
const cejasLolitaRalos = [cejas,lolitaS,ralos,llona,cevilPozo,bandaRS,terminal];
const ralosCruzA = [ralos,cruzAlta,llona,cevilPozo,bandaRS,terminal];

// Arreglos con recorridos (TERMINAL / RALOS)

const termiRalos = [terminal, bandaRS, cevilPozo, llona, ralos];
const termiRalosMayo = [terminal, bandaRS, cevilPozo, llona, ralos, fincaMayo];
const termiRalosVillaT = [termiRalos,villaTercera];
const termiRalosMayoAlabama = [termiRalosMayo,alabama];
const termiRalosCejas = [termiRalos,cejas];
const termiCruzARalos = [terminal,bandaRS, cevilPozo,llona,cruzAlta,ralos];
const cejasRalos = [cejas,ralos,llona,cevilPozo,bandaRS,terminal];
const sieteACejas = [sieteAbril,cejas,llona,cevilPozo,bandaRS,terminal];


// Arreglos con toda la grilla

const horariosLvFloAl = [

 {
 "nombre": "04:40",
 "salida": 4.4,
 "recorrido": fortinTalarBanda
 },
 {
 "nombre": "05:35",
 "salida": 5.35,
 "recorrido": fortinAlter
 },
 {
 "nombre": "06:10",
 "salida": 6.1,
 "recorrido": fortinTalarBanda,
 "recorrido2": colonia10CochAutop
 },
 {
 "nombre": "06:20",
 "salida": 6.2,
 "recorrido": [col5Florida,fortin,esqLastra,fonda,bCancha,talar,alternativa,terminal]
 },
 {
 "nombre": "06:50",
 "salida": 6.5,
 "recorrido": [col4Luisiana,fonda,talar,alternativa,terminal]
 },
 {
 "nombre": "07:20",
 "salida": 7.2,
 "recorrido": col4CanchaAlter,
 "recorrido2": fortinTalarBanda
 },
 {
 "nombre": "07:40",
 "salida": 7.4,
 "recorrido": [fincaMayo,fortin,esqLastra,cochuchal,alderetes,bandaRS,terminal]
 },
 {
 "nombre": "07:50",
 "salida": 7.5,
 "recorrido": [col4Luisiana,fonda,talar,alternativa,terminal],
 "recorrido2": col4CanchaTalarAutop
 },
 {
 "nombre": "08:45",
 "salida": 8.45,
 "recorrido": [col4Luisiana,bCancha,cochuchal,alderetes,bandaRS,terminal],
 "recorrido2": col4CanchaAlter
 },
 {
 "nombre": "09:20",
 "salida": 9.2,
 "recorrido": fortinTalarBanda
 },
 {
 "nombre": "09:50",
 "salida": 9.5,
 "recorrido": col4CanchaTalarAutop
 },
 {
 "nombre": "10:30",
 "salida": 10.3,
 "recorrido": fortinTalarBanda
 },
 {
 "nombre": "11:40",
 "salida": 11.40,
 "recorrido": fortinTalarBanda
 },
 {
 "nombre": "12:20",
 "salida": 12.2,
 "recorrido": fortin,col4Luisiana,bCancha,talar,alderetes,autopista,terminal
 },
 {
 "nombre": "12:30",
 "salida": 12.3,
 "recorrido": [perez,col4Luisiana,bCancha,talar,alderetes,alternativa,terminal]
 },
 {
 "nombre": "13:15",
 "salida": 13.15,
 "recorrido": col4TalarBanda
 },
 {
 "nombre": "13:50",
 "salida": 13.5,
 "recorrido": [bCancha,cochuchal,alderetes,bandaRS,terminal]
 },
 {
 "nombre": "14:45",
 "salida": 14.45,
 "recorrido": col4CanchaAlter,
 "recorrido2": col4TalarBanda
 },
 {
 "nombre": "15:50",
 "salida": 15.5,
 "recorrido": [fortin,esqLastra,talar,alternativa,terminal],
 "recorrido2" : col4CanchaTalarAutop
 },
 {
 "nombre": "16:20",
 "salida": 16.2,
 "recorrido": [marta,`${col4Luisiana} (16:50)`,bCancha,talar,alternativa,terminal]
 },
 {
 "nombre": "16:45",
 "salida": 16.45,
 "recorrido": [fonda,talar,alternativa,terminal]
 },
 {
 "nombre": "16:50",
 "salida": 16.5,
 "recorrido": [col3Florida,fortin,esqLastra,talar,alderetes,bandaRS,terminal],
 "recorrido2": col4CanchaAlter
 },
 {
 "nombre": "17:35",
 "salida": 17.35,
 "recorrido": col4CanchaAlter
 },
 {
 "nombre": "17:50",
 "salida": 17.5,
 "recorrido": fortinTalarBanda
 },
 {
 "nombre": "18:10",
 "salida": 18.1,
 "recorrido": col4CanchaAlter
 },
 {
 "nombre": "18:30",
 "salida": 18.3,
 "recorrido": fortinTalarBanda
 },
 {
 "nombre": "19:00",
 "salida": 19,
 "recorrido": [marta,col3Florida,`${bCancha} (19:15)`,talar,alderetes,bandaRS,terminal]
 },
 {
 "nombre": "21:05",
 "salida": 21.05,
 "recorrido": col4CanchaTalarAutop
 }

]
const horariosSFloAl = [
 {
 "nombre": "04:40",
 "salida": 4.4,
 "recorrido": [fortin,esqLastra,fonda,bCancha,talar,alderetes,bandaRS,terminal]
 },
 {
 "nombre": "05:45",
 "salida": 5.45,
 "recorrido": [fortin,esqLastra,fonda,bCancha,talar,alderetes,autopista,terminal]
 },
 {
 "nombre": "06:10",
 "salida": 6.10,
 "recorrido": colonia10CochAutop
 },
 {
 "nombre": "06:25",
 "salida": 6.25,
 "recorrido": [col5Florida,`${fortin} (Trasbordo)`]
 },
 {
 "nombre": "06:50",
 "salida": 6.5,
 "recorrido": col4CanchaAlter
 },
 {
 "nombre": "07:18",
 "salida": 7.18,
 "recorrido": col4CanchaTalarAutop
 },
 {
 "nombre": "07:40",
 "salida": 7.4,
 "recorrido": mayoColoniasTalarBanda
 },
 {
 "nombre": "07:50",
 "salida": 7.5,
 "recorrido": col4CanchaAlter
 },
 {
 "nombre": "08:45",
 "salida": 8.45,
 "recorrido": col4TalarBanda
 },
 {
 "nombre": "09:20",
 "salida": 9.2,
 "recorrido": fortinTalarBanda
 },
 {
 "nombre": "10:30",
 "salida": 10.30,
 "recorrido": fortinTalarBanda
 },
 {
 "nombre": "11:40",
 "salida": 11.40,
 "recorrido": fortinTalarBanda

 },
 {
 "nombre": "12:40",
 "salida": 12.4,
 "recorrido": mayoColoniasTalarBanda
 },
 {
 "nombre": "13:15",
 "salida": 13.15,
 "recorrido": col4CanchaTalarAutop
 },
 {
 "nombre": "14:50",
 "salida": 14.5,
 "recorrido": canchaTalarBanda
 },
 {
 "nombre": "15:50",
 "salida": 15.5,
 "recorrido": col4CanchaTalarAutop
 },
 {
 "nombre": "16:50",
 "salida": 16.5,
 "recorrido": col4CanchaAlter,
 "recorrido2": [col3Florida,talar,alderetes,bandaRS,terminal]
 },
 {
 "nombre": "17:50",
 "salida": 17.5,
 "recorrido": fortinTalarBanda
 },
 {
 "nombre": "19:00",
 "salida": 19,
 "recorrido": [marta,col3Luisiana,bCancha,talar,alderetes,bandaRS,terminal]
 },
 {
 "nombre": "20:50",
 "salida": 20.5,
 "recorrido": [fincaMayo,col10Luisiana,col4Luisiana,bCancha,talar,alderetes,autopista,terminal]
 }

]
const horariosDFloAl = [

 {
 "nombre": "07:40",
 "salida": 7.4,
 "recorrido": mayoColoniasTalarBanda
 },
 {
 "nombre": "10:30",
 "salida": 10.30,
 "recorrido": [col2Florida,fortin,esqLastra,talar,alderetes,bandaRS,terminal]
 },
 {
 "nombre": "12:40",
 "salida": 12.4,
 "recorrido": mayoColoniasTalarBanda
 },
 {
 "nombre": "14:45",
 "salida": 14.45,
 "recorrido": col4TalarBanda
 },
 {
 "nombre": "15:50",
 "salida": 15.5,
 "recorrido": col4TalarBanda
 },
 {
 "nombre": "16:50",
 "salida": 16.5,
 "recorrido": [col3Florida,fortin,esqLastra,talar,alderetes,bandaRS,terminal]
 },
 {
 "nombre": "17:50",
 "salida": 17.5,
 "recorrido": canchaTalarBanda
 },
 {
 "nombre": "19:00",
 "salida": 19,
 "recorrido": [fincaMayo,col3Luisiana,bCancha,talar, alderetes,bandaRS,terminal]
 },
 {
 "nombre": "20:55",
 "salida": 19,
 "recorrido": [fincaMayo,col10Luisiana,col4Luisiana,bCancha,talar, alderetes,bandaRS,terminal]
 }
]
const horariosLvFloPo = [

 {
 "nombre": "04:50",
 "salida": 4.5,
 "recorrido": bCanchaFloridaPosse
 },
 {
 "nombre": "05:50",
 "salida": 5.5,
 "recorrido": bCanchaFloridaPosse
 },
 {
 "nombre": "06:20",
 "salida": 6.2,
 "recorrido": bCanchaFloridaPosse
 },

 {
 "nombre": "06:50",
 "salida": 6.5,
 "recorrido": bCanchaFloridaPosse
 },
 {
 "nombre": "07:20",
 "salida": 7.2,
 "recorrido": bCanchaFloridaPosse
 },

 {
 "nombre": "07:55",
 "salida": 7.55,
 "recorrido": fortinFloridaPosse
 },

 {
 "nombre": "08:20",
 "salida": 8.2,
 "recorrido": bCanchaFloridaPosse
 },

 {
 "nombre": "09:05",
 "salida": 9.05,
 "recorrido": bCanchaFloridaPosse
 },

 {
 "nombre": "09:50",
 "salida": 9.5,
 "recorrido": bCanchaFloridaPosse
 },

 {
 "nombre": "10:20",
 "salida": 10.2,
 "recorrido": bCanchaFloridaPosse
 },
 {
 "nombre": "10:50",
 "salida": 10.5,
 "recorrido": bCanchaFloridaPosse
 },
 {
 "nombre": "11:20",
 "salida": 11.2,
 "recorrido": bCanchaFloridaPosse
 },
 {
 "nombre": "11:50",
 "salida": 11.5,
 "recorrido": bCanchaFloridaPosse
 },
 {
 "nombre": "12:40",
 "salida": 12.40,
 "recorrido": bCanchaFloridaPosse
 },
 {
 "nombre": "13:20",
 "salida": 13.2,
 "recorrido": bCanchaFloridaPosse,
 "recorrido2": fortinFloridaPosse
 },
 {
 "nombre": "13:50",
 "salida": 13.5,
 "recorrido": bCanchaFloridaPosse
 },
 {
 "nombre": "14:50",
 "salida": 14.5,
 "recorrido": bCanchaFloridaPosse
 },
 {
 "nombre": "15:55",
 "salida": 15.55,
 "recorrido": fortinFloridaPosse
 },
 {
 "nombre": "16:50",
 "salida": 16.5,
 "recorrido": bCanchaFloridaPosse
 },
 {
 "nombre": "17:50",
 "salida": 17.5,
 "recorrido": bCanchaFloridaPosse,
 "recorrido2": col4fondaPosse
 },
 {
 "nombre": "18:50",
 "salida": 18.5,
 "recorrido": bCanchaFloridaPosse
 },
 {
 "nombre": "19:20",
 "salida": 19.2,
 "recorrido": bCanchaFloridaPosse
 },
 {
 "nombre": "19:50",
 "salida": 19.5,
 "recorrido": col4FloridaPosse
 },
 {
 "nombre": "20:50",
 "salida": 20.5,
 "recorrido": bCanchaFloridaPosse
 },
 {
 "nombre": "21:20",
 "salida": 21.2,
 "recorrido": bCanchaFloridaPosse
 },
 {
 "nombre": "22:20",
 "salida": 22.20,
 "recorrido": bCanchaFloridaPosse
 },
 {
 "nombre": "23:20",
 "salida": 23.2,
 "recorrido": bCanchaFloridaPosse
 }
]
const horariosSFloPo = [
 {
 "nombre": "04:50",
 "salida": 4.5,
 "recorrido": bCanchaFloridaPosse
 },

 {
 "nombre": "05:50",
 "salida": 5.5,
 "recorrido": bCanchaFloridaPosse
 },
 {
 "nombre": "06:20",
 "salida": 6.2,
 "recorrido": bCanchaFloridaPosse
 },

 {
 "nombre": "06:50",
 "salida": 6.5,
 "recorrido": bCanchaFloridaPosse
 },

 {
 "nombre": "07:20",
 "salida": 7.2,
 "recorrido": bCanchaFloridaPosse
 },

 {
 "nombre": "07:55",
 "salida": 7.55,
 "recorrido": fortinFloridaPosse
 },

 {
 "nombre": "08:20",
 "salida": 8.2,
 "recorrido": bCanchaFloridaPosse
 },

 {
 "nombre": "09:05",
 "salida": 9.05,
 "recorrido": bCanchaFloridaPosse
 },

 {
 "nombre": "09:55",
 "salida": 9.55,
 "recorrido": bCanchaFloridaPosse
 },

 {
 "nombre": "10:20",
 "salida": 10.2,
 "recorrido": bCanchaFloridaPosse
 },
 {
 "nombre": "10:50",
 "salida": 10.5,
 "recorrido": bCanchaFloridaPosse
 },
 {
 "nombre": "11:20",
 "salida": 11.2,
 "recorrido": bCanchaFloridaPosse
 },
 {
 "nombre": "11:50",
 "salida": 11.5,
 "recorrido": bCanchaFloridaPosse
 },
 {
 "nombre": "12:40",
 "salida": 12.40,
 "recorrido": bCanchaFloridaPosse
 },
 // {
 // "nombre":"12:25",
 // "salida":12.25,
 // "recorrido":"Fortín hasta Llona"
 // },
 {
 "nombre": "13:25",
 "salida": 13.25,
 "recorrido": bCanchaFloridaPosse
 },
 {
 "nombre": "13:50",
 "salida": 13.5,
 "recorrido": bCanchaFloridaPosse
 },
 {
 "nombre": "15:00",
 "salida": 15,
 "recorrido": lastraFloridaPosse
 },
 {
 "nombre": "15:55",
 "salida": 15.55,
 "recorrido": fortinFloridaPosse
 },
 {
 "nombre": "16:50",
 "salida": 16.5,
 "recorrido": bCanchaFloridaPosse
 },
 {
 "nombre": "17:50",
 "salida": 17.5,
 "recorrido": bCanchaFloridaPosse
 },
 {
 "nombre": "18:50",
 "salida": 18.5,
 "recorrido": bCanchaFloridaPosse
 },
 {
 "nombre": "19:25",
 "salida": 19.25,
 "recorrido": fortinFloridaPosse
 },
 {
 "nombre": "20:20",
 "salida": 20.2,
 "recorrido": bCanchaFloridaPosse
 },
 {
 "nombre": "20:50",
 "salida": 20.5,
 "recorrido": bCanchaFloridaPosse
 },
 {
 "nombre": "21:20",
 "salida": 21.2,
 "recorrido": bCanchaFloridaPosse
 },
 {
 "nombre": "22:20",
 "salida": 22.20,
 "recorrido": bCanchaFloridaPosse
 },
]
const horariosDFloPo = [
 {
 "nombre": "04:50",
 "salida": 4.5,
 "recorrido": bCanchaFloridaPosse
 },
 {
 "nombre": "05:50",
 "salida": 5.5,
 "recorrido": bCanchaFloridaPosse
 },
 {
 "nombre": "06:50",
 "salida": 6.5,
 "recorrido": fortinFloridaPosse
 },
 {
 "nombre": "07:50",
 "salida": 7.5,
 "recorrido": fortinFloridaPosse
 },
 {
 "nombre": "08:50",
 "salida": 8.5,
 "recorrido": fortinFloridaPosse
 },
 {
 "nombre": "09:50",
 "salida": 9.5,
 "recorrido": bCanchaFloridaPosse
 },
 {
 "nombre": "10:50",
 "salida": 10.50,
 "recorrido": bCanchaFloridaPosse
 },
 {
 "nombre": "11:50",
 "salida": 11.5,
 "recorrido": bCanchaFloridaPosse
 },
 {
 "nombre": "13:00",
 "salida": 13,
 "recorrido": lastraFloridaPosse
 },
 {
 "nombre": "13:50",
 "salida": 13.5,
 "recorrido": bCanchaFloridaPosse
 },
 {
 "nombre": "15:00",
 "salida": 15,
 "recorrido": lastraFloridaPosse
 },
 {
 "nombre": "15:50",
 "salida": 15.5,
 "recorrido": fortinFloridaPosse
 },
 {
 "nombre": "16:50",
 "salida": 16.5,
 "recorrido": bCanchaFloridaPosse
 },
 {
 "nombre": "17:50",
 "salida": 17.5,
 "recorrido": bCanchaFloridaPosse
 },
 {
 "nombre": "18:50",
 "salida": 18.5,
 "recorrido": bCanchaFloridaPosse
 },
 {
 "nombre": "19:25",
 "salida": 19.25,
 "recorrido": fortinFloridaPosse
 },
 {
 "nombre": "20:00",
 "salida": 20.00,
 "recorrido": bCanchaFloridaPosse
 },
 {
 "nombre": "21:00",
 "salida": 21,
 "recorrido": bCanchaFloridaPosse
 },
 {
 "nombre": "22:20",
 "salida": 22.20,
 "recorrido": bCanchaFloridaPosse
 },

]
const horariosLvSMAl = [

 {
 "nombre": "05:20",
 "salida": 5.2,
 "recorrido": cataAutopTalarCancha
 },
 {
 "nombre": "06:25",
 "salida": 6.25,
 "recorrido": `${bandaTalarMayo} (por abajo)`
 },
 {
 "nombre": "07:00",
 "salida": 7,
 "recorrido": [terminal,catalinas,alderetes,talar,bCancha,col4Luisiana,marta]
 },
 {
 "nombre": "07:15",
 "salida": 7.15,
 "recorrido": bandaTalarFondaPerez
 },
 {
 "nombre": "08:00",
 "salida": 8,
 "recorrido": [terminal,catalinas,alderetes,cochuchal,col4Luisiana]
 },
 {
 "nombre": "08:35",
 "salida": 8.35,
 "recorrido": bandaTalarFortin
 },
 {
 "nombre": "09:00",
 "salida": 9,
 "recorrido": [terminal,catalinas,alderetes,talar,bCancha,col4Luisiana]
 },
 {
 "nombre": "09:45",
 "salida": 9.45,
 "recorrido": bandaTalarFortin
 },
 {
 "nombre": "10:45",
 "salida": 10.45,
 "recorrido": cataAlterTalarFortin
 },
 {
 "nombre": "10:55",
 "salida": 10.55,
 "recorrido": bandaTalarFortin
 },
 {
 "nombre": "11:15",
 "salida": 11.15,
 "recorrido": [terminal,catalinas,alderetes,talar,bCancha,col4Luisiana,marta]
 },
 // {
 // "nombre": "11:40",
 // "salida": 11.4,
 // "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → Esquina Lastra → Mayo"
 // },
 {
 "nombre": "12:15",
 "salida": 12.15,
 "recorrido": cataAlterTalarCanchaCol4
 },
 {
 "nombre": "12:20",
 "salida": 12.2,
 "recorrido": [terminal,catalinas,alderetes,talar,bCancha,col4Luisiana]
 },
 {
 "nombre": "12:45",
 "salida": 12.45,
 "recorrido": [terminal,bandaRS,alderetes,talar,esqLastra,fortin,col3Florida],
 "recorrido2": cataAlterTalarCanchaCol4
 },
 {
 "nombre": "13:15",
 "salida": 13.15,
 "recorrido": [terminal,bandaRS,alderetes,cochuchal,bCancha,col4Luisiana]
 },
 {
 "nombre": "13:30",
 "salida": 13.3,
 "recorrido": [terminal,catalinas,alderetes,talar,bCancha,col4Luisiana,fincaMayo,marta]
 },
 {
 "nombre": "14:00",
 "salida": 14,
 "recorrido": bandaTalarCancha
 },
 {
 "nombre": "14:50",
 "salida": 14.5,
 "recorrido": bandaTalarCancha,
 "recorrido2": com11AlterFortin
 },
 {
 "nombre": "15:50",
 "salida": 15.5,
 "recorrido": [terminal,bandaRS,alderetes,talar,bCancha,fincaMayo],
 "recorrido2": com11AlterCol4
 },
 {
 "nombre": "16:50",
 "salida": 16.5,
 "recorrido": bandaCochFortin,
 "recorrido2": com11AlterCol4
 },
 {
 "nombre": "17:40",
 "salida": 17.4,
 "recorrido": com11AlterCol4
 },
 {
 "nombre": "17:45",
 "salida": 17.45,
 "recorrido": [terminal, bandaRS,alderetes,talar,bCancha,fincaMayo,marta]
 },
 {
 "nombre": "18:20",
 "salida": 18.2,
 "recorrido": com11AlterCol4
 },
 {
 "nombre": "18:30",
 "salida": 18.3,
 "recorrido": [terminal, bandaRS,alderetes,talar,bCancha,col4Luisiana]
 },
 {
 "nombre": "19:00",
 "salida": 19,
 "recorrido": [terminal, bandaRS,alderetes,talar,bCancha,col4Luisiana]
 },
 {
 "nombre": "19:40",
 "salida": 19.4,
 "recorrido": com11AlterCol4
 },
 {
 "nombre": "19:45",
 "salida": 19.45,
 "recorrido": [bandaTalarFortin,fincaMayo]
 },
 {
 "nombre": "20:20",
 "salida": 20.2,
 "recorrido": com11AlterCol4
 },
 {
 "nombre": "20:30",
 "salida": 20.3,
 "recorrido": bandaTalarFortin
 },
 {
 "nombre": "21:00",
 "salida": 21,
 "recorrido": com11AutopCancha
 },
 {
 "nombre": "21:30",
 "salida": 21.30,
 "recorrido": [terminal,comisaria11,autopista,alderetes,talar,bCancha,col4Luisiana]
 },
 {
 "nombre": "22:00",
 "salida": 22,
 "recorrido": com11AlterCol4
 },
 {
 "nombre": "22:20",
 "salida": 22.20,
 "recorrido": bandaTalarCancha
 },
 {
 "nombre": "22:30",
 "salida": 22.30,
 "recorrido": [terminal,comisaria11,autopista,alderetes,talar,bCancha,col4Luisiana]
 },
 {
 "nombre": "23:30",
 "salida": 23.30,
 "recorrido": [terminal,comisaria11,autopista,alderetes,talar,bCancha,col4Luisiana]
 }
]
const horariosSSMAl = [
 {
 "nombre": "05:20",
 "salida": 5.2,
 "recorrido": cataAutopTalarCancha
 },
 {
 "nombre": "06:25",
 "salida": 6.25,
 "recorrido": bandaTalarMayo
 },
 {
 "nombre": "07:15",
 "salida": 7.15,
 "recorrido": bandaTalarCancha
 },
 {
 "nombre": "08:00",
 "salida": 8,
 "recorrido": cataAutopCoch
 },
 {
 "nombre": "08:35",
 "salida": 8.35,
 "recorrido": bandaTalarFortin
 },
 {
 "nombre": "09:45",
 "salida": 9.45,
 "recorrido": bandaTalarFortin
 },
 {
 "nombre": "10:45",
 "salida": 10.45,
 "recorrido": bandaTalarFortin
 },
 {
 "nombre": "11:40",
 "salida": 11.4,
 "recorrido": [bandaCochFortin,todasColoniasVuelta]
 },
 {
 "nombre": "12:20",
 "salida": 12.2,
 "recorrido": [terminal,catalinas,alderetes,talar,bCancha,col4Luisiana]
 },
 {
 "nombre": "13:15",
 "salida": 13.15,
 "recorrido": cataAlterTalarCanchaCol4
 },
 {
 "nombre": "13:30",
 "salida": 13.3,
 "recorrido": [terminal,catalinas,autopista,alderetes,talar,bCancha,col4Luisiana,fincaMayo]
 },
 {
 "nombre": "14:00",
 "salida": 14,
 "recorrido": bandaTalarCancha
 },
 {
 "nombre": "14:50",
 "salida": 14.5,
 "recorrido": [terminal,bandaRS,alderetes,talar,bCancha,col4Luisiana]
 },
 {
 "nombre": "15:50",
 "salida": 15.5,
 "recorrido": com11AlterCol4
 },
 {
 "nombre": "16:00",
 "salida": 16,
 "recorrido": [terminal,bandaRS,alderetes,talar,esqLastra,fortin,col3Florida]
 },
 {
 "nombre": "16:50",
 "salida": 16.5,
 "recorrido": bandaCochFortin
 },
 {
 "nombre": "17:40",
 "salida": 17.4,
 "recorrido": [terminal,comisaria11,autopista,alderetes,talar,bCancha,col4Luisiana]
 },
 {
 "nombre": "17:45",
 "salida": 17.45,
 "recorrido": [terminal,bandaRS,alderetes,talar,bCancha,col3Luisiana,fincaMayo,marta]
 },
 {
 "nombre": "18:30",
 "salida": 18.3,
 "recorrido": [terminal, bandaRS,alderetes,talar,bCancha,col4Luisiana]
 },
 {
 "nombre": "19:00",
 "salida": 19,
 "recorrido": [terminal, bandaRS,alderetes,talar,bCancha,col4Luisiana]
 },
 {
 "nombre": "19:45",
 "salida": 19.45,
 "recorrido": com11AlterCol4
 },
 {
 "nombre": "20:20",
 "salida": 20.2,
 "recorrido": com11AlterCol4
 },
 {
 "nombre": "20:30",
 "salida": 20.3,
 "recorrido": bandaTalarFortin
 },
 {
 "nombre": "21:30",
 "salida": 21.30,
 "recorrido": [terminal,comisaria11,autopista,alderetes,talar,bCancha,col4Luisiana]
 },
 {
 "nombre": "22:00",
 "salida": 22,
 "recorrido": [com11AlterCol4]
 },
 {
 "nombre": "22:30",
 "salida": 22.30,
 "recorrido": [terminal,comisaria11,autopista,alderetes,talar,esqLastra,fortin,col4Florida]
 }
]
const horariosDSMAl = [

 {
 "nombre": "06:40",
 "salida": 6.40,
 "recorrido": bandaTalarMayo
 },
 {
 "nombre": "09:45",
 "salida": 9.45,
 "recorrido": [terminal,bandaRS,alderetes,talar,esqLastra,fortin,col2Florida]
 },
 {
 "nombre": "11:40",
 "salida": 11.40,
 "recorrido": [terminal,bandaRS,alderetes,cochuchal,esqLastra,fortin,fincaMayo]
 },
 {
 "nombre": "14:00",
 "salida": 14,
 "recorrido": [terminal, bandaRS,alderetes,talar,bCancha,col4Luisiana]
 },
 {
 "nombre": "14:50",
 "salida": 14.5,
 "recorrido": [terminal, bandaRS,alderetes,talar,bCancha,col4Luisiana]
 },
 {
 "nombre": "16:00",
 "salida": 16,
 "recorrido": [terminal,bandaRS,alderetes,talar,esqLastra,fortin,col3Florida]
 },
 {
 "nombre": "16:50",
 "salida": 16.5,
 "recorrido": [terminal, bandaRS,alderetes,talar,bCancha,col4Luisiana]
 },
 {
 "nombre": "17:45",
 "salida": 17.45,
 "recorrido": [terminal,bandaRS,alderetes,talar,esqLastra,fortin,col3Florida,fincaMayo]
 },
 {
 "nombre": "18:30",
 "salida": 18.3,
 "recorrido": [terminal, bandaRS,alderetes,talar,bCancha,col4Luisiana]
 },
 {
 "nombre": "19:45",
 "salida": 19.45,
 "recorrido": bandaTalarMayo
 },
 {
 "nombre": "21:00",
 "salida": 21,
 "recorrido": bandaTalarFortin
 },
 {
 "nombre": "22:30",
 "salida": 22.3,
 "recorrido": [terminal,comisaria11,autopista,alderetes,talar,fortin,bCancha,col4Luisiana]
 },

]
const horariosLvSMPo = [
 {
 "nombre": "00:30",
 "salida": 0.3,
 "recorrido": posseCancha
 },
 {
 "nombre": "06:00",
 "salida": 6,
 "recorrido": [terminal,bandaRS,cevilPozo,llona,dispensario,paraiso,bCancha,col4Luisiana]
 },
 {
 "nombre": "06:30",
 "salida": 6.3,
 "recorrido": posseCancha
 },
 {
 "nombre": "07:00",
 "salida": 7,
 "recorrido": posseFortin
 },
 {
 "nombre": "07:30",
 "salida": 7.3,
 "recorrido": posseCancha
 },
 {
 "nombre": "08:15",
 "salida": 8.15,
 "recorrido": posseLastra
 },
 {
 "nombre": "09:00",
 "salida": 9,
 "recorrido": posseCancha
 },
 {
 "nombre": "09:30",
 "salida": 9.30,
 "recorrido": posseCancha
 },
 {
 "nombre": "10:00",
 "salida": 10,
 "recorrido": [terminal,bandaRS,cevilPozo,llona,dispensario,paraiso,bCancha,col4Luisiana]
 },
 {
 "nombre": "10:30",
 "salida": 10.3,
 "recorrido": posseCancha
 },
 {
 "nombre": "11:00",
 "salida": 11,
 "recorrido": posseCancha
 },
 {
 "nombre": "11:20",
 "salida": 11.2,
 "recorrido": posseFortin
 },
 {
 "nombre": "11:45",
 "salida": 11.45,
 "recorrido": posseCancha
 },
 {
 "nombre": "12:25",
 "salida": 12.25,
 "recorrido": posseFortin
 },
 {
 "nombre": "12:30",
 "salida": 12.3,
 "recorrido": posseCancha
 },
 {
 "nombre": "13:00",
 "salida": 13,
 "recorrido": posseCancha
 },
 {
 "nombre": "13:30",
 "salida": 13.3,
 "recorrido": posseLastra
 },
 {
 "nombre": "14:05",
 "salida": 14.05,
 "recorrido": posseCancha
 },
 {
 "nombre": "14:30",
 "salida": 14.3,
 "recorrido": posseLastra
 },
 {
 "nombre": "15:00",
 "salida": 15,
 "recorrido": posseFortin
 },
 {
 "nombre": "16:00",
 "salida": 16,
 "recorrido": posseCancha
 },
 {
 "nombre": "17:00",
 "salida": 17,
 "recorrido": posseCancha
 },
 {
 "nombre": "17:30",
 "salida": 17.3,
 "recorrido": posseFortin
 },
 {
 "nombre": "18:00",
 "salida": 18,
 "recorrido": posseCancha
 },
 {
 "nombre": "18:30",
 "salida": 18.3,
 "recorrido": posseFortin
 },
 {
 "nombre": "19:10",
 "salida": 19.1,
 "recorrido": [terminal,bandaRS,cevilPozo,llona,dispensario,paraiso,bCancha,col4Luisiana]
 },
 {
 "nombre": "19:30",
 "salida": 19.3,
 "recorrido": posseCancha
 },
 {
 "nombre": "20:00",
 "salida": 20,
 "recorrido": posseCancha
 },
 {
 "nombre": "20:30",
 "salida": 20.3,
 "recorrido": posseCancha
 },
 {
 "nombre": "20:45",
 "salida": 20.45,
 "recorrido": posseCancha
 },
 {
 "nombre": "21:00",
 "salida": 21,
 "recorrido":[terminal,bandaRS,cevilPozo,filaMedio,dispensario,paraiso,bCancha]
 },
 {
 "nombre": "21:30",
 "salida": 21.3,
 "recorrido": posseCancha
 },
 {
 "nombre": "22:00",
 "salida": 22,
 "recorrido": posseCancha
 },
 {
 "nombre": "22:30",
 "salida": 22.3,
 "recorrido": posseCancha
 },
 {
 "nombre": "23:30",
 "salida": 23.3,
 "recorrido": [terminal,bandaRS,cevilPozo,llona,dispensario,paraiso,esqLastra,fortin,bCancha,col4Luisiana]
 },
 {
 "nombre": "00:30",
 "salida": 24.3,
 "recorrido": posseCancha
 }
]
const horariosSSMPo = [
 {
 "nombre":"00:30",
 "salida":0.3,
 "recorrido":posseCancha
 },
 {
 "nombre": "06:00",
 "salida": 6,
 "recorrido": [terminal,bandaRS,cevilPozo,llona,dispensario,paraiso,bCancha,col4Luisiana]
 },
 {
 "nombre": "06:40",
 "salida": 6.1,
 "recorrido": posseCancha
 },
 {
 "nombre": "07:00",
 "salida": 7,
 "recorrido": posseFortin
 },
 {
 "nombre": "07:30",
 "salida": 7.3,
 "recorrido": posseCancha
 },
 {
 "nombre": "08:15",
 "salida": 8.15,
 "recorrido": posseLastra
 },
 {
 "nombre": "09:00",
 "salida": 9,
 "recorrido": posseCancha
 },
 {
 "nombre": "09:30",
 "salida": 9.30,
 "recorrido": posseCancha
 },
 {
 "nombre": "10:00",
 "salida": 10,
 "recorrido": [terminal,bandaRS,cevilPozo,llona,dispensario,paraiso,bCancha,col4Luisiana]
 },
 {
 "nombre": "10:30",
 "salida": 10.3,
 "recorrido": posseCancha
 },
 {
 "nombre": "11:00",
 "salida": 11,
 "recorrido": posseCancha
 },
 {
 "nombre": "11:45",
 "salida": 11.45,
 "recorrido": posseCancha
 },
 {
 "nombre": "12:30",
 "salida": 12.3,
 "recorrido": posseCancha
 },
 {
 "nombre": "13:00",
 "salida": 13,
 "recorrido": posseCancha
 },
 {
 "nombre": "13:45",
 "salida": 13.45,
 "recorrido": posseFortin
 },
 {
 "nombre": "14:15",
 "salida": 14.15,
 "recorrido": posseLastra
 },
 {
 "nombre": "15:00",
 "salida": 15,
 "recorrido": posseFortin
 },
 {
 "nombre": "16:00",
 "salida": 16,
 "recorrido": posseCancha
 },
 {
 "nombre": "17:00",
 "salida": 17,
 "recorrido": posseCancha
 },
 {
 "nombre": "17:30",
 "salida": 17.3,
 "recorrido": posseFortin
 },
 {
 "nombre": "18:00",
 "salida": 18,
 "recorrido": posseCancha
 },
 {
 "nombre": "18:30",
 "salida": 18.3,
 "recorrido": posseFortin
 },
 {
 "nombre": "19:15",
 "salida": 19.15,
 "recorrido": [terminal,bandaRS,cevilPozo,llona,dispensario,paraiso,bCancha,col4Luisiana]
 },
 {
 "nombre": "19:30",
 "salida": 19.3,
 "recorrido": posseCancha
 },
 {
 "nombre": "20:00",
 "salida": 20,
 "recorrido": posseCancha
 },
 {
 "nombre": "20:30",
 "salida": 20.3,
 "recorrido": posseCancha
 },
 {
 "nombre": "21:00",
 "salida": 21,
 "recorrido": [terminal,bandaRS,cevilPozo,filaMedio,bosque,dispensario,paraiso,bCancha,col4Luisiana]
 },
 {
 "nombre": "21:30",
 "salida": 21.3,
 "recorrido": posseCancha
 },
 {
 "nombre": "22:00",
 "salida": 22,
 "recorrido": [terminal,bandaRS,cevilPozo,llona,dispensario,paraiso,bCancha,col4Luisiana]
 },
 {
 "nombre": "22:30",
 "salida": 22.3,
 "recorrido": posseCancha
 },
 {
 "nombre": "23:30",
 "salida": 23.3,
 "recorrido": posseCancha
 },
]
const horariosDSMPo = [
 {
 "nombre": "06:00",
 "salida": 6,
 "recorrido": posseFortin
 },
 {
 "nombre": "07:00",
 "salida": 7,
 "recorrido": posseFortin
 },
 {
 "nombre": "08:00",
 "salida": 8,
 "recorrido": posseFortin
 },
 {
 "nombre": "09:00",
 "salida": 9,
 "recorrido": posseCancha
 },
 {
 "nombre": "10:00",
 "salida": 10,
 "recorrido": posseCancha
 },
 {
 "nombre": "11:00",
 "salida": 11,
 "recorrido": posseCancha
 },
 {
 "nombre": "12:00",
 "salida": 12,
 "recorrido": posseLastra
 },
 // {
 // "nombre": "12:30",
 // "salida": 12.3,
 // "recorrido": posseLastra
 // },
 {
 "nombre": "13:00",
 "salida": 13,
 "recorrido": posseCancha
 },
 {
 "nombre": "14:15",
 "salida": 14.15,
 "recorrido": posseLastra
 },
 {
 "nombre": "15:00",
 "salida": 15,
 "recorrido": posseFortin
 },
 {
 "nombre": "16:00",
 "salida": 16,
 "recorrido": posseCancha
 },
 {
 "nombre": "17:00",
 "salida": 17,
 "recorrido": posseCancha
 },
 {
 "nombre": "18:00",
 "salida": 18,
 "recorrido": posseCancha
 },
 {
 "nombre": "18:30",
 "salida": 18.3,
 "recorrido": posseFortin
 },
 {
 "nombre": "19:10",
 "salida": 19.1,
 "recorrido": posseCancha
 },
 {
 "nombre": "20:00",
 "salida": 20,
 "recorrido": posseCancha
 },
 {
 "nombre": "20:45",
 "salida": 20.45,
 "recorrido": posseCancha
 },
 // {
 // "nombre": "21:00",
 // "salida": 21,
 // "recorrido": posseCancha
 // },
 {
 "nombre": "21:30",
 "salida": 21.3,
 "recorrido": posseCancha
 },
 {
 "nombre": "22:30",
 "salida": 22.3,
 "recorrido": posseCancha
 },
 {
 "nombre": "23:30",
 "salida": 23.3,
 "recorrido": posseCancha
 }
]
const posseTerminalLaV = [
 // {
 // "nombre": "05:00",
 // "salida": 5,
 // "recorrido": dispenFilaO
 // },
 {
 "nombre": "05:55",
 "salida": 5.55,
 "recorrido": dispenFilaM
 },
 {
 "nombre": "06:00",
 "salida": 6,
 "recorrido": dispenFilaM
 },
 {
 "nombre": "06:08",
 "salida": 6.08,
 "recorrido": dispenFilaO
 },
 {
 "nombre": "06:25",
 "salida": 6.25,
 "recorrido": dispenFilaM
 },
 {
 "nombre": "06:35",
 "salida": 6.35,
 "recorrido": bosqueFilaM,
 "recorrido2": dispenFilaO
 },
 {
 "nombre": "07:08",
 "salida": 7.08,
 "recorrido": [dispensario,bosque,filaMedio,cevilPozo,bandaRS,terminal],
 "recorrido2": bosqueFilaM
 },
 {
 "nombre": "07:40",
 "salida": 7.4,
 "recorrido": bosqueFilaM,
 "recorrido2": dispenFilaO
 },
 {
 "nombre": "08:10",
 "salida": 8.1,
 "recorrido": bosqueFilaM,
 "recorrido2": dispenFilaO
 },
 {
 "nombre": "09:10",
 "salida": 9.1,
 "recorrido": bosqueFilaM,
 "recorrido2": dispenFilaO
 },
 {
 "nombre": "10:10",
 "salida": 10.1,
 "recorrido": dispenFilaM
 },
 {
 "nombre": "11:10",
 "salida": 11.1,
 "recorrido": dispenFilaO
 },
 {
 "nombre": "12:50",
 "salida": 12.5,
 "recorrido": dispenFilaO
 },
 {
 "nombre": "13:00",
 "salida": 13,
 "recorrido": dispenFilaM
 },
 {
 "nombre": "14:10",
 "salida": 14.1,
 "recorrido": dispenFilaO
 },
 {
 "nombre": "14:40",
 "salida": 14.4,
 "recorrido": [dispensario,bosque,filaMedio,cevilPozo,bandaRS,terminal]
 },
 {
 "nombre": "15:10",
 "salida": 15.1,
 "recorrido": [bosque,filaOrilla,llona,cevilPozo,bandaRS,terminal]
 },
 {
 "nombre": "16:00",
 "salida": 16,
 "recorrido": dispenFilaO
 },
 {
 "nombre": "16:10",
 "salida": 16.1,
 "recorrido": dispenFilaM
 },
 {
 "nombre": "17:00",
 "salida": 17,
 "recorrido": dispenFilaO
 },
 {
 "nombre": "17:10",
 "salida": 17.1,
 "recorrido": dispenFilaO
 },
 {
 "nombre": "17:45",
 "salida": 17.45,
 "recorrido": dispenFilaM
 }
]
const posseTerminalS = [
 {
 "nombre": "06:05",
 "salida": 6.05,
 "recorrido": dispenFilaM
 },
 {
 "nombre": "07:05",
 "salida": 7.05,
 "recorrido": bosqueFilaM
 },
 {
 "nombre": "08:10",
 "salida": 8.1,
 "recorrido": bosqueFilaM
 },
 {
 "nombre": "09:10",
 "salida": 9.1,
 "recorrido": dispenFilaM
 },
 {
 "nombre": "10:10",
 "salida": 10.1,
 "recorrido": dispenFilaM
 },
 {
 "nombre": "13:00",
 "salida": 13,
 "recorrido": dispenFilaM
 },
 {
 "nombre": "15:05",
 "salida": 13,
 "recorrido": dispenFilaO
 },
 {
 "nombre": "16:10",
 "salida": 16.1,
 "recorrido": dispenFilaM
 },
 {
 "nombre": "17:05",
 "salida": 13,
 "recorrido": dispenFilaO
 },
 {
 "nombre": "17:10",
 "salida": 17.1,
 "recorrido": dispenFilaM
 },
 {
 "nombre": "18:05",
 "salida": 18.05,
 "recorrido": dispenFilaO
 },
 {
 "nombre": "19:05",
 "salida": 19.05,
 "recorrido": dispenFilaO
 }
]
const posseTerminalD = [
 {
 "nombre": "09:05",
 "salida": 9.05,
 "recorrido": dispenFilaO
 },
 {
 "nombre": "10:10",
 "salida": 10.1,
 "recorrido": dispenFilaO
 },
 {
 "nombre": "11:10",
 "salida": 11.1,
 "recorrido": dispenFilaO
 },
 {
 "nombre": "12:10",
 "salida": 12.1,
 "recorrido": dispenFilaO
 },
 {
 "nombre": "15:05",
 "salida": 15.05,
 "recorrido": dispenFilaO
 },
 {
 "nombre": "16:10",
 "salida": 16.1,
 "recorrido": [plaza,filaOrilla,llona,cevilPozo,bandaRS,terminal]
 },
 {
 "nombre": "17:10",
 "salida": 17.1,
 "recorrido": dispenFilaO
 },
 {
 "nombre": "18:05",
 "salida": 18.05,
 "recorrido": dispenFilaO
 }
];
const terminalPosseLaV = [
 {
 "nombre": "05:25",
 "salida": 5.25,
 "recorrido": filaMBosqueDispen
 },
 {
 "nombre": "08:30",
 "salida": 8.3,
 "recorrido": [terminal,bandaRS,cevilPozo,filaMedio,dispensario]
 },
 {
 "nombre": "13:00",
 "salida": 13,
 "recorrido": [terminal,bandaRS,cevilPozo,filaMedio,bosque]
 },
 {
 "nombre": "13:30",
 "salida": 13.3,
 "recorrido": filaMBosqueDispen
 },
 {
 "nombre": "15:00",
 "salida": 15,
 "recorrido": filaMBosqueDispen
 },
 {
 "nombre": "15:30",
 "salida": 15.3,
 "recorrido": filaMBosqueDispen
 },
 {
 "nombre": "16:30",
 "salida": 16.3,
 "recorrido": filaMBosqueDispen
 },
 {
 "nombre": "17:25",
 "salida": 17.25,
 "recorrido": filaMBosqueDispen
 },
 {
 "nombre": "19:00",
 "salida": 19,
 "recorrido": filaMBosqueDispen
 },
 {
 "nombre": "21:00",
 "salida": 21,
 "recorrido": [terminal,bandaRS,cevilPozo,filaMedio,bosque]
 },
]
const terminalPosseS = [
 {
 "nombre": "05:25",
 "salida": 5.25,
 "recorrido": [terminal,bandaRS,cevilPozo,llona,filaOrilla,bosque,dispensario]
 },
 {
 "nombre": "08:30",
 "salida": 8.3,
 "recorrido": filaMBosqueDispen
 },
 {
 "nombre": "11:35",
 "salida": 11.35,
 "recorrido": filaOrillaDispen
 },
 {
 "nombre": "12:15",
 "salida": 12.15,
 "recorrido": filaMBosqueDispen
 },
 {
 "nombre": "13:30",
 "salida": 13.3,
 "recorrido": filaMBosqueDispen
 },
 {
 "nombre": "14:05",
 "salida": 14.05,
 "recorrido": filaOrillaDispen
 },
 {
 "nombre": "15:00",
 "salida": 15,
 "recorrido": filaOrillaDispen
 },
 {
 "nombre": "15:30",
 "salida": 15.3,
 "recorrido": filaMBosqueDispen
 },
 {
 "nombre": "16:30",
 "salida": 16.3,
 "recorrido": filaMBosqueDispen
 },
 {
 "nombre": "17:00",
 "salida": 17,
 "recorrido": filaOrillaDispen
 },
 {
 "nombre": "19:00",
 "salida": 19,
 "recorrido": filaOrillaDispen
 },
 {
 "nombre": "21:00",
 "salida": 21,
 "recorrido": filaMBosqueDispen
 },
]
const terminalPosseD = [
 {
 "nombre": "19:50",
 "salida": 19.5,
 "recorrido": filaOrillaDispen
 },
 {
 "nombre": "21:20",
 "salida": 21.2,
 "recorrido": filaOrillaDispen
 },
 {
 "nombre": "22:00",
 "salida": 22,
 "recorrido": filaOrillaDispen
 },
 {
 "nombre": "22:20",
 "salida": 22.2,
 "recorrido": filaOrillaDispen
 }
];
const ralosTerminalLaV = [
 {
 "nombre": "04:40",
 "salida": 4.4,
 "recorrido": ralosVillaT,
 "recorrido2": ralosTermi
 },
 {
 "nombre": "05:25",
 "salida": 5.25,
 "recorrido": [fincaMayo,ralos,llona,cevilPozo,bandaRS,terminal],
 "recorrido2": [cejas,lolitaS,cerco2,ralos,llona,cevilPozo,bandaRS,terminal]
 },
 {
 "nombre": "05:30",
 "salida": 5.3,
 "recorrido": [villaTercera,ralos,llona,cevilPozo,bandaRS,terminal],
 "recorrido2": ralosTermi
 },
 {
 "nombre": "06:05",
 "salida": 6.05,
 "recorrido": ralosTermi
 },
 {
 "nombre": "06:10",
 "salida": 6.1,
 "recorrido": [villaTercera,llona,cevilPozo,bandaRS,terminal]
 },
 {
 "nombre": "06:15",
 "salida": 6.15,
 "recorrido": ralosTermi
 },
 {
 "nombre": "06:25",
 "salida": 6.25,
 "recorrido": alabamaMayoRalos
 },
 {
 "nombre": "06:40",
 "salida": 6.4,
 "recorrido": [villaTercera,llona,cevilPozo,bandaRS,terminal],
 "recorrido2": [lolitaS,cerco2,ralosTermi]
 },
 {
 "nombre": "06:50",
 "salida": 6.5,
 "recorrido": [vias,bTrigal,llona,cevilPozo,bandaRS,terminal],
 "recorrido2": ralosTermi
 },
 {
 "nombre": "07:25",
 "salida": 7.25,
 "recorrido": [lolitaS,lolitaN,ralosTermi]
 },
 {
 "nombre": "07:30",
 "salida": 7.3,
 "recorrido": ralosTermi,
 "recorrido2": ralosTermi
 },
 {
 "nombre": "08:15",
 "salida": 8.15,
 "recorrido": [marta,fincaMayo,ralosTermi]
 },
 {
 "nombre": "08:20",
 "salida": 8.2,
 "recorrido": [ralos,bTrigal,llona,cevilPozo,bandaRS,terminal]
 },
 {
 "nombre": "08:25",
 "salida": 8.25,
 "recorrido": ralosTermi
 },
 {
 "nombre": "09;25",
 "salida": 9.25,
 "recorrido": ralosTermi,
 "recorrido2": ralosTermi
 },
 {
 "nombre": "10:20",
 "salida": 10.2,
 "recorrido": ralosTermi,
 "recorrido2": ralosVillaT
 },
 {
 "nombre": "11:10",
 "salida": 11.1,
 "recorrido": alabamaMayoRalos
 },
 {
 "nombre": "12:15",
 "salida": 12.15,
 "recorrido": [fincaMayo,ralosTermi]
 },
 {
 "nombre": "12:50",
 "salida": 12.5,
 "recorrido": [lolitaS,ralosVillaT]
 },
 {
 "nombre": "13:10",
 "salida": 13.1,
 "recorrido": [fincaMayo,ralosTermi],
 "recorrido2":alabamaMayoRalos
 },
 {
 "nombre": "14:05",
 "salida": 14.05,
 "recorrido": ralosTermi
 },
 {
 "nombre": "14:10",
 "salida": 14.1,
 "recorrido": ralosVillaT
 },
 {
 "nombre": "15:00",
 "salida": 15,
 "recorrido": [lolitaS,ralos,bTrigal,llona,cevilPozo,bandaRS,terminal],
 "recorrido2": ralosTermi
 },
 {
 "nombre": "15:30",
 "salida": 15.3,
 "recorrido": ralosVillaT
 },
 {
 "nombre": "16:10",
 "salida": 16.1,
 "recorrido": [ralos,bTrigal,llona,cevilPozo,bandaRS,terminal]
 },
 {
 "nombre": "16:25",
 "salida": 16.25,
 "recorrido": ralosVillaT
 },
 {
 "nombre": "16:30",
 "salida": 16.3,
 "recorrido": [fincaMayo,ralosTermi]
 },
 {
 "nombre": "17:15",
 "salida": 17.15,
 "recorrido": alabamaMayoRalos
 },
 {
 "nombre": "17:20",
 "salida": 17.2,
 "recorrido": ralosTermi
 },
 {
 "nombre": "18:10",
 "salida": 18.1,
 "recorrido": ralosTermi
 },
 {
 "nombre": "18:20",
 "salida": 18.2,
 "recorrido": ralosVillaT
 },
 {
 "nombre": "19:00",
 "salida": 19,
 "recorrido": alabamaMayoRalos
 },
 {
 "nombre": "19:10",
 "salida": 19.1,
 "recorrido": ralosTermi
 },
 {
 "nombre": "20:00",
 "salida": 20,
 "recorrido": [lolitaS,ralosTermi]
 },
 {
 "nombre": "20:20",
 "salida": 20.2,
 "recorrido": ralosTermi
 },
 {
 "nombre": "21:10",
 "salida": 21.1,
 "recorrido": ralosTermi
 },
 {
 "nombre": "22:20",
 "salida": 22.2,
 "recorrido": ralosTermi
 }
]
const ralosTerminalS = [
 {
 "nombre": "04:40",
 "salida": 4.4,
 "recorrido": ralosVillaT
 },
 {
 "nombre": "05:30",
 "salida": 5.3,
 "recorrido": [villaTercera,infierno,ralosTermi],
 "recorrido2": [fincaMayo, `${ralos} (trasbordo)`]
 },
 {
 "nombre": "05:55",
 "salida": 5.55,
 "recorrido": [villaTercera,infierno,ralosTermi]
 },
 {
 "nombre": "06:25",
 "salida": 6.25,
 "recorrido": alabamaMayoRalos
 },
 {
 "nombre": "06:50",
 "salida": 6.5,
 "recorrido": ralosVillaT
 },
 {
 "nombre": "07:30",
 "salida": 7.3,
 "recorrido": [lolitaS,ralosTermi],
 "recorrido2": ralosTermi
 },
 {
 "nombre": "08:10",
 "salida": 8.1,
 "recorrido": [fincaMayo,ralosTermi]
 },
 {
 "nombre": "08:25",
 "salida": 8.25,
 "recorrido": ralosTermi
 },
 {
 "nombre": "09;25",
 "salida": 9.25,
 "recorrido": ralosTermi,
 "recorrido2": ralosTermi
 },
 {
 "nombre": "10:20",
 "salida": 10.2,
 "recorrido": ralosTermi,
 "recorrido2": ralosVillaT
 },
 {
 "nombre": "11:10",
 "salida": 11.1,
 "recorrido": [alabama,ralosTermi]
 },
 {
 "nombre": "12:00",
 "salida": 12,
 "recorrido": cejasLolitaRalos
 },
 {
 "nombre": "12:15",
 "salida": 12.15,
 "recorrido": [fincaMayo,ralosTermi]
 },
 {
 "nombre": "13:10",
 "salida": 13.1,
 "recorrido": [alabama,ralosTermi]
 },
 {
 "nombre": "14:10",
 "salida": 14.1,
 "recorrido": ralosVillaT
 },
 {
 "nombre": "15:00",
 "salida": 15,
 "recorrido": [lolitaS,ralosTermi]
 },
 {
 "nombre": "15:25",
 "salida": 15.25,
 "recorrido": ralosVillaT
 },
 {
 "nombre": "16:25",
 "salida": 16.25,
 "recorrido": ralosVillaT
 },
 {
 "nombre": "16:30",
 "salida": 16.3,
 "recorrido": [fincaMayo,ralosTermi]
 },
 {
 "nombre": "17:15",
 "salida": 17.15,
 "recorrido": [fincaMayo,ralosTermi]
 },
 {
 "nombre": "17:20",
 "salida": 17.2,
 "recorrido": ralosTermi
 },
 {
 "nombre": "18:10",
 "salida": 18.1,
 "recorrido": ralosVillaT
 },
 {
 "nombre": "19:00",
 "salida": 19,
 "recorrido": alabamaMayoRalos
 },
 // {
 // "nombre": "19:05",
 // "salida": 19.05,
 // "recorrido": ralosTermi
 // },
 {
 "nombre": "20:00",
 "salida": 20,
 "recorrido": [lolitaS,ralosTermi]
 },
 {
 "nombre": "21:10",
 "salida": 21.1,
 "recorrido": ralosTermi
 },
 {
 "nombre": "21:30",
 "salida": 21.3,
 "recorrido": [fincaMayo,ralosTermi]
 },
 {
 "nombre": "22:20",
 "salida": 22.2,
 "recorrido": ralosTermi
 },
]
const ralosTerminalD = [
 {
 "nombre": "05:00",
 "salida": 5,
 "recorrido": ralosTermi
 },
 {
 "nombre": "05:30",
 "salida": 5.3,
 "recorrido": [villaTercera,ralos,llona,cevilPozo,bandaRS,terminal]
 },
 {
 "nombre": "07:00",
 "salida": 7,
 "recorrido": ralosTermi
 },
 {
 "nombre": "08:10",
 "salida": 8.1,
 "recorrido": alabamaMayoRalos
 },
 // {
 // "nombre":"08:30",
 // "salida":8.3,
 // "recorrido":ralosTermi
 // },
 {
 "nombre": "09;30",
 "salida": 9.3,
 "recorrido": ralosTermi
 },
 {
 "nombre": "10:30",
 "salida": 10.3,
 "recorrido": ralosTermi,
 },
 {
 "nombre": "11:10",
 "salida": 11.1,
 "recorrido": alabamaMayoRalos
 },
 {
 "nombre": "12:10",
 "salida": 12.1,
 "recorrido": [fincaMayo,ralosTermi]
 },
 {
 "nombre": "13:10",
 "salida": 13.1,
 "recorrido": alabamaMayoRalos
 },
 {
 "nombre": "13:20",
 "salida": 13.2,
 "recorrido": [ralos, llona, parada6]
 },
 {
 "nombre": "14:10",
 "salida": 14.1,
 "recorrido": ralosVillaT,
 "recorrido2": ralosTermi
 },
 {
 "nombre": "15:10",
 "salida": 15.1,
 "recorrido": ralosTermi
 },
 {
 "nombre": "15:25",
 "salida": 15.25,
 "recorrido": ralosVillaT
 },
 {
 "nombre": "16:20",
 "salida": 16.2,
 "recorrido": ralosVillaT
 },
 {
 "nombre": "17:15",
 "salida": 17.15,
 "recorrido": alabamaMayoRalos,
 "recorrido2": ralosTermi
 },
 {
 "nombre": "18:10",
 "salida": 18.1,
 "recorrido": ralosVillaT
 },
 {
 "nombre": "19:00",
 "salida": 19,
 "recorrido": alabamaMayoRalos
 },
 {
 "nombre": "19:15",
 "salida": 19.15,
 "recorrido": ralosTermi
 },
 {
 "nombre": "20:00",
 "salida": 20,
 "recorrido": [lolitaS,ralosTermi]
 },
 {
 "nombre": "21:10",
 "salida": 21.1,
 "recorrido": ralosTermi
 },
 {
 "nombre": "21:30",
 "salida": 21.3,
 "recorrido": [fincaMayo,ralosTermi]
 },
 {
 "nombre": "21:10",
 "salida": 21.1,
 "recorrido": ralosTermi
 },
 {
 "nombre": "22:20",
 "salida": 22.2,
 "recorrido": ralosTermi
 },

]
const terminalRalosLaV = [
 {
 "nombre": "06.00",
 "salida": 6,
 "recorrido": termiRalos
 },
 {
 "nombre": "06.30",
 "salida": 6.3,
 "recorrido": [termiRalos, lolitaN, lolitaS]
 },
 {
 "nombre": "07:00",
 "salida": 7,
 "recorrido": [termiRalos,fincaMayo, marta]
 },
 {
 "nombre": "08:00",
 "salida": 8,
 "recorrido": termiRalosMayo
 },
 {
 "nombre": "08:30",
 "salida": 8.3,
 "recorrido": termiRalos
 },
 {
 "nombre": "09:15",
 "salida": 9.15,
 "recorrido": termiRalosVillaT
 },
 {
 "nombre": "09:30",
 "salida": 9.3,
 "recorrido": termiRalos
 },
 {
 "nombre": "10:00",
 "salida": 10,
 "recorrido": termiRalosMayoAlabama
 },
 {
 "nombre": "10:30",
 "salida": 10.3,
 "recorrido": termiRalosCejas
 },
 {
 "nombre": "10:40",
 "salida": 10.4,
 "recorrido": [termiRalos,lolitaS]
 },
 {
 "nombre": "11:00",
 "salida": 11,
 "recorrido": [termiRalosCejas,piedrabuena]
 },
 {
 "nombre": "11:15",
 "salida": 11.15,
 "recorrido": termiRalosMayo
 },
 {
 "nombre": "11:30",
 "salida": 11.3,
 "recorrido": termiRalosMayo
 },
 {
 "nombre": "11:45",
 "salida": 11.45,
 "recorrido": [termiRalosVillaT,lolitaS]
 },
 // {
 // "nombre":"11:50",
 // "salida":11.5,
 // "recorrido":termiRalosVillaT
 // },
 {
 "nombre": "12:10",
 "salida": 12.1,
 "recorrido": termiRalosMayoAlabama,
 "recorrido2": termiRalosMayo
 },
 {
 "nombre": "12:30",
 "salida": 12.3,
 "recorrido": [termiRalos,bTrigal]
 },
 {
 "nombre": "13:00",
 "salida": 13,
 "recorrido": termiRalos,
 "recorrido2": termiRalosVillaT
 },
 {
 "nombre": "13:30",
 "salida": 13.3,
 "recorrido": [termiRalosVillaT,lolitaS],
 "recorrido2": termiRalos
 },
 {
 "nombre": "14:00",
 "salida": 14,
 "recorrido": [termiRalos,bTrigal]
 },
 // {
 // "nombre":"14:00",
 // "salida":14,
 // "recorrido":[termiRalos,lolitaS]
 // },
 {
 "nombre": "14:30",
 "salida": 14.3,
 "recorrido": termiRalosVillaT,
 "recorrido2": termiRalosCejas
 },
 {
 "nombre": "15:00",
 "salida": 15,
 "recorrido": termiRalos
 },
 {
 "nombre": "15:15",
 "salida": 15.15,
 "recorrido": termiRalosVillaT
 },
 {
 "nombre": "15:30",
 "salida": 15.3,
 "recorrido": [termiRalosMayo,cruce]
 },
 {
 "nombre": "16:00",
 "salida": 16,
 "recorrido": termiRalos
 },
 {
 "nombre": "16:15",
 "salida": 16.15,
 "recorrido": termiRalosMayoAlabama
 },
 {
 "nombre": "16:30",
 "salida": 16.3,
 "recorrido": termiRalos
 },
 {
 "nombre": "16:50",
 "salida": 16.5,
 "recorrido": termiRalos
 },
 {
 "nombre": "17:10",
 "salida": 17.1,
 "recorrido": termiRalosVillaT
 },
 {
 "nombre": "17:30",
 "salida": 17.3,
 "recorrido": termiRalos
 },
 {
 "nombre": "17:50",
 "salida": 17.5,
 "recorrido": termiRalosVillaT
 },
 {
 "nombre": "18:00",
 "salida": 18,
 "recorrido": termiRalosMayoAlabama
 },
 {
 "nombre": "18:30",
 "salida": 18.3,
 "recorrido": termiRalosVillaT,
 "recorrido2": termiRalosCejas
 },
 {
 "nombre": "19:00",
 "salida": 19,
 "recorrido": [termiRalos,lolitaS],
 "recorrido2": termiRalos
 },
 {
 "nombre": "19:30",
 "salida": 19.3,
 "recorrido": [termiRalos,bTrigal]
 },
 {
 "nombre": "20:00",
 "salida": 20,
 "recorrido": termiRalosCejas,
 "recorrido2": termiRalos
 },
 {
 "nombre": "20:20",
 "salida": 20.2,
 "recorrido": termiRalosVillaT
 },
 {
 "nombre": "20:30",
 "salida": 20.3,
 "recorrido": termiRalosMayoAlabama
 },
 {
 "nombre": "21:00",
 "salida": 21,
 "recorrido": [termiRalos,bTrigal]
 },
 {
 "nombre": "21:20",
 "salida": 21.2,
 "recorrido": termiRalos
 },
 {
 "nombre": "21:30",
 "salida": 21.3,
 "recorrido": termiRalosVillaT
 },
 {
 "nombre": "22:00",
 "salida": 22,
 "recorrido": termiRalos
 },
 {
 "nombre": "22:30",
 "salida": 22.3,
 "recorrido": [termiRalosVillaT,bTrigal]
 },
 {
 "nombre": "23:30",
 "salida": 23.3,
 "recorrido": [termiRalosVillaT,bTrigal]
 }
]
const terminalRalosS = [
 {
 "nombre": "06.00",
 "salida": 6,
 "recorrido": termiRalos
 },
 {
 "nombre": "06.30",
 "salida": 6.3,
 "recorrido": [termiRalos,lolitaS,cejas]
 },
 {
 "nombre": "07:00",
 "salida": 7,
 "recorrido": termiRalosMayoAlabama
 },
 {
 "nombre": "07:45",
 "salida": 7.45,
 "recorrido": termiRalos
 },
 {
 "nombre": "08:30",
 "salida": 8.3,
 "recorrido": termiRalos
 },
 {
 "nombre": "09:30",
 "salida": 9.3,
 "recorrido": termiRalos
 },
 {
 "nombre": "10:00",
 "salida": 10,
 "recorrido": termiRalosMayoAlabama
 },
 {
 "nombre": "10:40",
 "salida": 10.4,
 "recorrido": [termiRalos,lolitaS,cejas]
 },
 {
 "nombre": "11:00",
 "salida": 11,
 "recorrido": [termiRalosMayo,cruce]

 },
 {
 "nombre": "11:50",
 "salida": 11.5,
 "recorrido": termiRalosVillaT
 },
 {
 "nombre": "12:10",
 "salida": 12.1,
 "recorrido": termiRalosMayoAlabama
 },
 {
 "nombre": "12:30",
 "salida": 12.3,
 "recorrido": termiRalosVillaT
 },
 {
 "nombre": "13:00",
 "salida": 13,
 "recorrido": termiRalosVillaT
 },
 {
 "nombre": "13:20",
 "salida": 13.2,
 "recorrido": termiRalos
 },
 {
 "nombre": "13:30",
 "salida": 13.3,
 "recorrido": [termiRalosVillaT,lolitaS]
 },
 {
 "nombre": "14:00",
 "salida": 14,
 "recorrido": [termiRalos,lolitaS]
 },
 {
 "nombre": "14:30",
 "salida": 14.3,
 "recorrido": termiRalosVillaT,
 "recorrido2": termiRalosCejas
 },
 {
 "nombre": "15:15",
 "salida": 15.15,
 "recorrido": termiRalosVillaT,
 },
 {
 "nombre": "15:30",
 "salida": 15.3,
 "recorrido": termiRalosMayo,
 },
 {
 "nombre": "16:00",
 "salida": 16,
 "recorrido": termiRalos,
 },
 {
 "nombre": "16:15",
 "salida": 16.15,
 "recorrido": termiRalosMayoAlabama,
 },
 {
 "nombre": "17:00",
 "salida": 17,
 "recorrido": termiRalos
 },
 {
 "nombre": "17:10",
 "salida": 17.1,
 "recorrido": termiRalosVillaT,
 },
 {
 "nombre": "18:00",
 "salida": 18,
 "recorrido": termiRalosMayoAlabama,
 "recorrido2": termiRalos
 },
 {
 "nombre": "18:30",
 "salida": 18.3,
 "recorrido": termiRalosCejas
 },
 {
 "nombre": "19:00",
 "salida": 19,
 "recorrido": [termiRalos,lolitaS],
 "recorrido2": termiRalos
 },
 {
 "nombre": "19:30",
 "salida": 19.3,
 "recorrido": termiRalosVillaT,
 },
 {
 "nombre": "20:00",
 "salida": 20,
 "recorrido": termiRalosCejas,
 "recorrido2": termiRalos
 },
 {
 "nombre": "20:30",
 "salida": 20.3,
 "recorrido": termiRalosMayoAlabama,
 "recorrido": termiRalos
 },
 {
 "nombre": "21:00",
 "salida": 21,
 "recorrido": termiRalos,
 },
 {
 "nombre": "21:30",
 "salida": 21.3,
 "recorrido": termiRalosVillaT,
 },
 {
 "nombre": "22:00",
 "salida": 22,
 "recorrido": termiRalos,
 },
 {
 "nombre": "22:30",
 "salida": 22.3,
 "recorrido": termiRalosVillaT,
 },
 {
 "nombre": "23:30",
 "salida": 23.3,
 "recorrido": termiRalosVillaT,
 }
]
const terminalRalosD = [
 {
 "nombre": "06.00",
 "salida": 6,
 "recorrido": termiRalos
 },
 {
 "nombre": "06.30",
 "salida": 6.3,
 "recorrido": termiRalosCejas
 },
 {
 "nombre": "07:00",
 "salida": 7,
 "recorrido": termiRalosMayoAlabama
 },
 {
 "nombre": "08:30",
 "salida": 8.3,
 "recorrido": termiRalos
 },
 {
 "nombre": "09:30",
 "salida": 9.3,
 "recorrido": termiRalos
 },
 {
 "nombre": "10:00",
 "salida": 10,
 "recorrido": termiRalosMayoAlabama
 },
 {
 "nombre": "10:30",
 "salida": 10.3,
 "recorrido": [termiRalos,lolitaS,cejas]
 },
 {
 "nombre": "11:00",
 "salida": 11,
 "recorrido": termiRalosMayo
 },
 {
 "nombre": "12:10",
 "salida": 12.1,
 "recorrido": termiRalosMayoAlabama
 },
 {
 "nombre": "13:00",
 "salida": 13,
 "recorrido": termiRalosVillaT
 },
 {
 "nombre": "14:05",
 "salida": 14.05,
 "recorrido": termiRalos
 },
 {
 "nombre": "14:30",
 "salida": 14.3,
 "recorrido": termiRalosVillaT
 },
 {
 "nombre": "15:00",
 "salida": 15,
 "recorrido": [termiRalosCejas,sieteAbril]
 },
 {
 "nombre": "15:30",
 "salida": 15.3,
 "recorrido": termiRalos
 },
 {
 "nombre": "16:15",
 "salida": 16.15,
 "recorrido": termiRalosMayoAlabama,
 },
 {
 "nombre": "17:10",
 "salida": 17.1,
 "recorrido": termiRalosVillaT
 },
 {
 "nombre": "18:00",
 "salida": 18,
 "recorrido": termiRalosMayoAlabama,
 "recorrido2": termiRalos
 },
 {
 "nombre": "18:25",
 "salida": 18.25,
 "recorrido": termiRalos
 },
 {
 "nombre": "18:30",
 "salida": 18.3,
 "recorrido": termiRalosCejas,
 "recorrido2": termiRalos
 },
 {
 "nombre": "19:00",
 "salida": 19,
 "recorrido": [termiRalos,lolitaS]
 },
 {
 "nombre": "19:30",
 "salida": 19.3,
 "recorrido": [termiRalos,cruzAlta],
 "recorrido2": termiRalos
 
 },
 {
 "nombre": "20:00",
 "salida": 20,
 "recorrido": termiRalos,
 },
 {
 "nombre": "20:30",
 "salida": 20.3,
 "recorrido": [termiRalos,fincaMayo,cejas]
 },
 {
 "nombre": "21:00",
 "salida": 21,
 "recorrido": termiRalos
 },
 {
 "nombre": "21:30",
 "salida": 21.3,
 "recorrido": termiRalosVillaT
 },
 {
 "nombre": "22:00",
 "salida": 22,
 "recorrido": termiRalos
 },
 {
 "nombre": "22:30",
 "salida": 22.3,
 "recorrido": termiRalosVillaT
 },
 {
 "nombre": "23:30",
 "salida": 23.3,
 "recorrido": termiRalosVillaT,
 }
]
const ralosCruzAltaTerminalLaV = [
 {
 "nombre": "05:30",
 "salida": 5.3,
 "recorrido": ralosCruzA
 },
 {
 "nombre": "07:20",
 "salida": 7.2,
 "recorrido": ralosCruzA
 },
 // {
 // "nombre":"07:45",
 // "salida":7.45,
 // "recorrido":"Britos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 // },
 {
 "nombre": "08:10",
 "salida": 8.1,
 "recorrido": ralosCruzA
 },
 {
 "nombre": "12:10",
 "salida": 12.1,
 "recorrido": ralosCruzA
 },
 {
 "nombre": "14:15",
 "salida": 14.15,
 "recorrido": ralosCruzA
 },
 {
 "nombre": "18:30",
 "salida": 18.3,
 "recorrido": [colonia9, ralosCruzA]
 },

]
const ralosCruzAltaTerminalS = [
 {
 "nombre": "05:30",
 "salida": 5.3,
 "recorrido": ralosCruzA
 },
 {
 "nombre": "07:15",
 "salida": 7.15,
 "recorrido": ralosCruzA
 },
 {
 "nombre": "08:40",
 "salida": 8.4,
 "recorrido": [colonia9,ralosCruzA]
 },
 {
 "nombre": "11:50",
 "salida": 11.5,
 "recorrido": ralosCruzA
 },
 {
 "nombre": "14:15",
 "salida": 14.15,
 "recorrido": ralosCruzA
 }
]
const ralosCruzAltaTerminalD = []

const terminalCruzAltaRalosLaV = [
 {
 "nombre": "06:50",
 "salida": 6.5,
 "recorrido": termiCruzARalos
 },
 {
 "nombre": "10:45",
 "salida": 10.45,
 "recorrido": termiCruzARalos
 },
 {
 "nombre": "12:00",
 "salida": 12,
 "recorrido": termiCruzARalos
 },
 {
 "nombre": "13:15",
 "salida": 13.15,
 "recorrido": termiCruzARalos
 },
 {
 "nombre": "17:30",
 "salida": 17.3,
 "recorrido": [termiCruzARalos,colonia9]
 },
 {
 "nombre": "20:00",
 "salida": 20,
 "recorrido": termiCruzARalos
 }
]
const terminalCruzAltaRalosS = [
 {
 "nombre": "10:45",
 "salida": 10.45,
 "recorrido": termiCruzARalos
 },
 {
 "nombre": "13:15",
 "salida": 13.15,
 "recorrido": termiCruzARalos
 },
 {
 "nombre": "19:30",
 "salida": 19.30,
 "recorrido": termiCruzARalos
 }
];
const terminalCruzAltaRalosD = [
 {
 "nombre": "19:30",
 "valor": 19.3,
 "recorrido": termiCruzARalos
 }
]
const sieteDeAbrilTerminalLaV = [
 {
 "nombre": "04:30",
 "salida": 4.3,
 "recorrido": sieteACejas
 },
 {
 "nombre": "11:30",
 "salida": 11.3,
 "recorrido": sieteACejas
 },
 {
 "nombre": "16:20",
 "salida": 16.2,
 "recorrido": [sieteAbril, cejasRalos]
 }
]
const sieteDeAbrilTerminalS = [
 {
 "nombre": "05:30",
 "salida": 5.3,
 "recorrido": sieteACejas
 }
]
const sieteDeAbrilTerminalD = [
 {
 "nombre": "18:00",
 "salida": 18,
 "recorrido": sieteACejas
 }
]
const terminalSieteDeAbrilLaV = [
 {
 "nombre": "06:15",
 "salida": 6.15,
 "recorrido": [termiRalosCejas,sieteAbril]
 },
 {
 "nombre": "12:30",
 "salida": 12.3,
 "recorrido": [termiRalosCejas,sieteAbril]
 },
 {
 "nombre": "15:45",
 "salida": 15.45,
 "recorrido": [termiRalosCejas,sieteAbril]
 }
]
const terminalSieteDeAbrilS = [
 {
 "nombre": "15:45",
 "salida": 15.45,
 "recorrido": [termiRalosCejas,sieteAbril]
 }
]
const terminalSieteDeAbrilD = [
 {
 "nombre": "15:00",
 "salida": 15,
 "recorrido": [termiRalosCejas,sieteAbril]
 }
 // {
 // "nombre": "18:30",
 // "salida": 18.3,
 // "recorrido": [termiRalosCejas,sieteAbril]
 // },
 // {
 // "nombre": "20:30",
 // "salida": 20.3,
 // "recorrido": [termiRalosCejas,sieteAbril]
 // }
]
const lasCejasTerminalLaV = [
 {
 "nombre": "05:30",
 "salida": 5.3,
 "recorrido": [cejas,lolitaS,cerco2,ralos,llona,cevilPozo,bandaRS,terminal]
 },
 {
 "nombre": "06:25",
 "salida": 6.25,
 "recorrido": cejasRalos
 },
 {
 "nombre": "07:50",
 "salida": 7.5,
 "recorrido": cejasRalos
 },
 {
 "nombre": "12:10",
 "salida": 12.1,
 "recorrido": cejasLolitaRalos
 },
 {
 "nombre": "13:20",
 "salida": 13.2,
 "recorrido":  [cejas,llona,cevilPozo,bandaRS,terminal]
 },
 {
 "nombre": "15:40",
 "salida": 15.4,
 "recorrido": cejasRalos
 },
 {
 "nombre": "18:20",
 "salida": 18.2,
 "recorrido": cejasRalos
 },
 {
 "nombre": "19:50",
 "salida": 19.5,
 "recorrido": cejasRalos
 }
]
const lasCejasTerminalS = [
 {
 "nombre": "06:25",
 "salida": 6.25,
 "recorrido": [cejas, `${ralos} (trasbordo)`]
 },
 {
 "nombre": "07:50",
 "salida": 7.5,
 "recorrido": [cejas,llona,cevilPozo,bandaRS,terminal]
 },
 {
 "nombre": "12:00",
 "salida": 12,
 "recorrido": cejasLolitaRalos
 },
 {
 "nombre": "15:40",
 "salida": 15.4,
 "recorrido": cejasRalos
 },
 {
 "nombre": "19:50",
 "salida": 19.5,
 "recorrido": cejasRalos
 },
]
const lasCejasTerminalD = [
 {
 "nombre": "07:50",
 "salida": 7.5,
 "recorrido": cejasRalos
 },
 {
 "nombre": "12:00",
 "salida": 12,
 "recorrido": cejasRalos
 },
 {
 "nombre": "15:40",
 "salida": 15.4,
 "recorrido": cejasRalos
 },
 {
 "nombre": "18:00",
 "salida": 18,
 "recorrido": sieteACejas
 },
 {
 "nombre": "19:50",
 "salida": 19.5,
 "recorrido": cejasRalos
 },
]
const terminalLasCejasLaV = [
 {
 "nombre": "06:15",
 "salida": 6.15,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Lolita → Las Cejas → 7 de Abril"
 },
 {
 "nombre": "10:30",
 "salida": 10.3,
 "recorrido": termiRalosCejas
 },
 {
 "nombre": "11:00",
 "salida": 11,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Las Cejas → Piedrabuena"
 },
 {
 "nombre": "12:30",
 "salida": 12.3,
 "recorrido": termiRalosCejas,
 "recorrido2": [termiRalosCejas,sieteAbril]
 },
 {
 "nombre": "14:30",
 "salida": 14.3,
 "recorrido": termiRalosCejas
 },
 {
 "nombre": "15:45",
 "salida": 15.45,
 "recorrido": [termiRalosCejas,sieteAbril]
 },
 {
 "nombre": "18:30",
 "salida": 18.3,
 "recorrido": termiRalosCejas
 },
 {
 "nombre": "20:00",
 "salida": 20,
 "recorrido": termiRalosCejas
 },
 {
 "nombre": "22:00",
 "salida": 22,
 "recorrido": termiRalosCejas
 },
]
const terminalLasCejasS = [
 {
 "nombre": "10:40",
 "salida": 10.4,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Lolita → Las Cejas"
 },
 {
 "nombre": "14:30",
 "salida": 14.3,
 "recorrido": termiRalosCejas
 },
 {
 "nombre": "15:45",
 "salida": 15.45,
 "recorrido": [termiRalosCejas,sieteAbril]
 },
 {
 "nombre": "18:30",
 "salida": 18.3,
 "recorrido": termiRalosCejas
 },
 {
 "nombre": "20:00",
 "salida": 20,
 "recorrido": termiRalosCejas
 },
]
const terminalLasCejasD = [
 {
 "nombre": "06:30",
 "salida": 6.3,
 "recorrido": termiRalosCejas
 },
 {
 "nombre": "10:30",
 "salida": 10.3,
 "recorrido": termiRalosCejas
 },
 {
 "nombre": "15:00",
 "salida": 15,
 "recorrido": [termiRalosCejas,sieteAbril]
 },
 {
 "nombre": "18:30",
 "salida": 18.3,
 "recorrido": termiRalosCejas
 },
 {
 "nombre": "20:30",
 "salida": 20.3,
 "recorrido": termiRalosCejas
 },
]
const floridaAldTucuman = [horariosDFloAl, horariosLvFloAl, horariosSFloAl];
const terminalAldFlorida = [horariosDSMAl, horariosLvSMAl, horariosSSMAl];
const floridaPosseTucuman = [horariosDFloPo, horariosLvFloPo, horariosSFloPo];
const terminalPosseFlorida = [horariosDSMPo, horariosLvSMPo, horariosSSMPo];
const posseLTerminal = [posseTerminalD, posseTerminalLaV, posseTerminalS];
const terminalPosseL = [terminalPosseD, terminalPosseLaV, terminalPosseS];
const ralosTerminal = [ralosTerminalD, ralosTerminalLaV, ralosTerminalS];
const terminalRalos = [terminalRalosD, terminalRalosLaV, terminalRalosS];
const ralosCruzAltaTerminal = [ralosCruzAltaTerminalD, ralosCruzAltaTerminalLaV, ralosCruzAltaTerminalS];
const terminalCruzAltaRalos = [terminalCruzAltaRalosD, terminalCruzAltaRalosLaV, terminalCruzAltaRalosS];
const sieteDeAbrilTerminal = [sieteDeAbrilTerminalD, sieteDeAbrilTerminalLaV, sieteDeAbrilTerminalS]
const terminalSieteDeAbril = [terminalSieteDeAbrilD, terminalSieteDeAbrilLaV, terminalSieteDeAbrilS]
const lasCejasTerminal = [lasCejasTerminalD, lasCejasTerminalLaV, lasCejasTerminalS]
const terminalLasCejas = [terminalLasCejasD, terminalLasCejasLaV, terminalLasCejasS]
const todosDestinoTucuman = [floridaAldTucuman, floridaPosseTucuman, posseLTerminal, ralosTerminal, ralosCruzAltaTerminal, sieteDeAbrilTerminal, lasCejasTerminal];
const todosTucumanDestino = [terminalAldFlorida, terminalPosseFlorida, terminalPosseL, terminalRalos, terminalCruzAltaRalos, terminalSieteDeAbril, terminalLasCejas];
