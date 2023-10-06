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
const coloniasFlorida = 'Colonia 5/4/3/2 (Florida)'
const fincaMayo = 'Finca Mayo';
const perez = 'Los Perez';
const marta = 'La Marta';

// Destinos (FLORIDA / POSSE)

const paraiso = 'Paraíso';
const dispensario = 'Dispensario';
const llona = 'Llona';
const cevilPozo = 'Cevil Pozo';


// Arreglos con recorridos (FLORIDA / ALDERETES / ALTERNATIVA)

const mayoColoniasTalarBanda = [fincaMayo,coloniasFlorida,fortin,esqLastra,talar,alderetes,bandaRS,terminal];
const fortinTalarBanda = [fortin, esqLastra, talar, alderetes, bandaRS ,terminal];
const fortinAlter = [fortin, esqLastra, talar, alternativa ,terminal];
const colonia10CochAutop = [col10Luisiana,col4Luisiana,bCancha,cochuchal,alderetes,autopista,terminal];
const col4CanchaAlter = [col4Luisiana,bCancha,talar,alternativa,terminal];
const col4CanchaTalarAutop = [col4Luisiana,bCancha,talar,alderetes,autopista,terminal];
const col4TalarBanda = [col4Luisiana,bCancha,talar,alderetes,bandaRS,terminal];
const canchaTalarBanda = [bCancha,talar,alderetes,bandaRS,terminal];

// Arreglos con recorridos (FLORIDA / POSSE)

const bCanchaFloridaPosse = [bCancha,paraiso,dispensario,llona,cevilPozo,bandaRS,terminal];
const fortinFloridaPosse = [fortin,esqLastra,paraiso,dispensario,llona,cevilPBLIC,bandaRS,terminal];
const col4FloridaPosse = [col4Luisiana,bCancha,paraiso,dispensario,llona,cevilPozo,bandaRS,terminal]
const col4fondaPosse = [col4Luisiana,fonda,paraiso,dispensario,llona,cevilPozo,bandaRS,terminal]
const lastraFloridaPosse = [esqLastra,paraiso,dispensario,llona,cevilPozo,bandaRS,terminal]



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
 "recorrido": [fortin,col4Luisiana,bCancha,talar,alderetes,autopista,terminal]
 },
 {
 "nombre": "12:30",
 "salida": 12.3,
 "recorrido": ['Los Perez',col4Luisiana,bCancha,talar,alderetes,alternativa,terminal]
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
 "recorrido": [col2Florida,fortin,esqLastra,talar,alderetesa,bandaRS,terminal]
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
 "recorrido": "Terminal → Catalinas Park → Autopista → Alderetes → Talar → B° La Cancha"
 },
 {
 "nombre": "06:25",
 "salida": 6.25,
 "recorrido": "Terminal → Banda R.S. → Talar → Esquina Lastra → Fortín → Mayo(por abajo)"
 },
 {
 "nombre": "07:00",
 "salida": 7,
 "recorrido": "Terminal → Alternativa → Talar → B° La Cancha → Colonia 4 → La Marta"
 },
 {
 "nombre": "07:15",
 "salida": 7.15,
 "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → Fonda → Colonia 4 → Los Perez"
 },
 {
 "nombre": "08:00",
 "salida": 8,
 "recorrido": "Terminal → Catalinas Park → Autopista → Alderetes → Cochuchal → Colonia 4"
 },
 {
 "nombre": "08:35",
 "salida": 8.35,
 "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → Esquina Lastra → Fortín"
 },
 {
 "nombre": "09:00",
 "salida": 9,
 "recorrido": "Terminal → Catalinas Park → Autopista → Talar → B° La Cancha → Colonia 4 "
 },
 {
 "nombre": "09:45",
 "salida": 9.45,
 "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → Esquina Lastra → Fortín"
 },
 {
 "nombre": "10:45",
 "salida": 10.45,
 "recorrido": "Terminal → Alternativa → Talar → Esquina Lastra → Fortín"
 },
 {
 "nombre": "10:55",
 "salida": 10.55,
 "recorrido": "Banda R.S. → Alderetes → Talar → Esquina Lastra → Fortín"
 },
 {
 "nombre": "11:15",
 "salida": 11.15,
 "recorrido": "Terminal → Catalinas Park → Autopista → Talar → B° La Cancha → La Marta"
 },
 // {
 // "nombre": "11:40",
 // "salida": 11.4,
 // "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → Esquina Lastra → Mayo"
 // },
 {
 "nombre": "12:15",
 "salida": 12.15,
 "recorrido": "Terminal → Catalinas Park → Alternativa → Talar → B° La Cancha → Colonia 4"
 },
 {
 "nombre": "12:20",
 "salida": 12.2,
 "recorrido": "Terminal → Catalinas Park → Autopista → Talar → B° La Cancha → Colonia 4"
 },
 {
 "nombre": "12:45",
 "salida": 12.45,
 "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → Esquina Lastra → Fortin → Colonia 3",
 "recorrido2": "Terminal → Catalinas Park → Alternativa → Talar → B° La Cancha → Colonia 4"
 },
 {
 "nombre": "13:15",
 "salida": 13.15,
 "recorrido": "Terminal → Banda R.S. → Alderetes → Cochuchal → B° La Cancha → Colonia 4"
 },
 {
 "nombre": "13:30",
 "salida": 13.3,
 "recorrido": "Terminal → Catalinas Park → Autopista → Alderetes → Talar → B° La Cancha → Mayo → La Marta"
 },
 {
 "nombre": "14:00",
 "salida": 14,
 "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → B° La Cancha"
 },
 {
 "nombre": "14:50",
 "salida": 14.5,
 "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → B° La Cancha",
 "recorrido2": "Terminal → Comisaria 11 → Alternativa → Talar → Esquina Lastra → Fortín"
 },
 {
 "nombre": "15:50",
 "salida": 15.5,
 "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → B° La Cancha → Colonia 4",
 "recorrido2": "Terminal → Comisaria 11 → Alternativa → Talar → B° La Cancha → Colonia 4"
 },
 {
 "nombre": "16:50",
 "salida": 16.5,
 "recorrido": "Terminal → Banda R.S. → Alderetes → Cochuchal → Esquina Lastra → Fortín",
 "recorrido2": "Terminal → Comisaria 11 → Alternativa → Talar → B° La Cancha → Colonia 4"
 },
 {
 "nombre": "17:40",
 "salida": 17.4,
 "recorrido": "Terminal → Comisaria 11 → Alternativa → Talar → B° La Cancha → Colonia 4"
 },
 {
 "nombre": "17:45",
 "salida": 17.45,
 "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → B° La Cancha → Mayo → La Marta"
 },
 {
 "nombre": "18:20",
 "salida": 18.2,
 "recorrido": "Terminal → Comisaria 11 → Alternativa → Talar → B° La Cancha → Colonia 4"
 },
 {
 "nombre": "18:30",
 "salida": 18.3,
 "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → B° La Cancha → Colonia 4"
 },
 {
 "nombre": "19:00",
 "salida": 19,
 "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → B° La Cancha → Colonia 4"
 },
 {
 "nombre": "19:40",
 "salida": 19.4,
 "recorrido": "Terminal → Comisaria 11 → Alternativa → Talar → B° La Cancha → Colonia 4"
 },
 {
 "nombre": "19:45",
 "salida": 19.45,
 "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → Esquina Lastra → Fortín → Mayo(por abajo)"
 },
 {
 "nombre": "20:20",
 "salida": 20.2,
 "recorrido": "Terminal → Comisaria 11 → Alternativa → Talar → B° La Cancha"
 },
 {
 "nombre": "20:30",
 "salida": 20.3,
 "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → Esquina Lastra → Fortín"
 },
 {
 "nombre": "21:00",
 "salida": 21,
 "recorrido": "Terminal → Comisaria 11 → Autopista → Alderetes → Talar → B° La Cancha"
 },
 {
 "nombre": "21:30",
 "salida": 21.30,
 "recorrido": "Terminal → Comisaria 11 → Autopista → Alderetes → Talar → B° La Cancha → Colonia 4"
 },
 {
 "nombre": "22:00",
 "salida": 22,
 "recorrido": "Terminal → Comisaria 11 → Alternativa → Talar → B° La Cancha → Colonia 4"
 },
 {
 "nombre": "22:20",
 "salida": 22.20,
 "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → B° La Cancha"
 },
 {
 "nombre": "22:30",
 "salida": 22.30,
 "recorrido": "Terminal → Comisaria 11 → Autopista → Alderetes → Talar → B° La Cancha → Colonia 4"
 },
 {
 "nombre": "23:30",
 "salida": 23.30,
 "recorrido": "Terminal → Comisaria 11 → Autopista → Alderetes → Talar → B° La Cancha → Colonia 4"
 }
]
const horariosSSMAl = [
 {
 "nombre": "05:20",
 "salida": 5.2,
 "recorrido": "Terminal → Catalinas Park → Autopista → Alderetes → Talar → B° La Cancha"
 },
 {
 "nombre": "06:25",
 "salida": 6.25,
 "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → Esquina Lastra → Fortín → Mayo"
 },
 {
 "nombre": "07:15",
 "salida": 7.15,
 "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → B° La Cancha"
 },
 {
 "nombre": "08:00",
 "salida": 8,
 "recorrido": "Terminal → Catalinas Park → Autopista → Alderetes → Cochuchal "
 },
 {
 "nombre": "08:35",
 "salida": 8.35,
 "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → Esquina Lastra → Fortín"
 },
 {
 "nombre": "09:45",
 "salida": 9.45,
 "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → Esquina Lastra → Fortín"
 },
 {
 "nombre": "10:45",
 "salida": 10.45,
 "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → Esquina Lastra → Fortín"
 },
 {
 "nombre": "11:40",
 "salida": 11.4,
 "recorrido": "Terminal → Banda R.S. → Alderetes → Cochuchal → Esquina Lastra → Fortín → Colonias 2/3/4/5 → Mayo"
 },
 {
 "nombre": "12:20",
 "salida": 12.2,
 "recorrido": "Terminal → Catalinas Park → Autopista → Alderetes → Talar → B° La Cancha → Colonia 4"
 },
 {
 "nombre": "13:15",
 "salida": 13.15,
 "recorrido": "Terminal → Catalinas Park → Alternativa → Talar → B° La Cancha → Colonia 4"
 },
 {
 "nombre": "13:30",
 "salida": 13.3,
 "recorrido": "Terminal → Catalinas Park → Autopista → Alderetes → Talar → B° La Cancha → Colonia 4 → Mayo"
 },
 {
 "nombre": "14:00",
 "salida": 14,
 "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → B° La Cancha"
 },
 {
 "nombre": "14:50",
 "salida": 14.5,
 "recorrido": "Terminal → Banda R.S. → Alderetes → B° La Cancha → Colonia 4"
 },
 {
 "nombre": "15:50",
 "salida": 15.5,
 "recorrido": "Terminal → Comisaria 11 → Alternativa → Talar → B° La Cancha → Colonia 4"
 },
 {
 "nombre": "16:00",
 "salida": 16,
 "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → Esquina Lastra → Fortín → Colonia 3 (Florida)"
 },
 {
 "nombre": "16:50",
 "salida": 16.5,
 "recorrido": "Terminal → Banda R.S. → Alderetes → Cochuchal → Esquina Lastra → Fortín"
 },
 {
 "nombre": "17:40",
 "salida": 17.4,
 "recorrido": "Terminal → Comisaria 11 → Autopista → Alderetes → Talar → B° La Ca → Colonia 4 (Luisiana)"
 },
 {
 "nombre": "17:45",
 "salida": 17.45,
 "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → B° La Cancha → Colonia 3 (Luisiana) → Mayo → La Marta"
 },
 {
 "nombre": "18:30",
 "salida": 18.3,
 "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → B° La Cancha → Colonia 4"
 },
 {
 "nombre": "19:00",
 "salida": 19,
 "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → Colonia 4"
 },
 {
 "nombre": "19:45",
 "salida": 19.45,
 "recorrido": "Terminal → Comisaria 11 → Alternativa → Talar → B° La Cancha → Colonia 4 (Luisiana)"
 },
 {
 "nombre": "20:20",
 "salida": 20.2,
 "recorrido": "Terminal → Comisaria 11 → Alternativa → Talar → B° La Cancha → Colonia 4 (Luisiana)"
 },
 {
 "nombre": "20:30",
 "salida": 20.3,
 "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → Esquina Lastra → Fortín"
 },
 {
 "nombre": "21:30",
 "salida": 21.30,
 "recorrido": "Terminal → Comisaria 11 → Autopista → Alderetes → Talar → Esquina Lastra → Fortín → Colonia 4 (Luisiana)"
 },
 {
 "nombre": "22:00",
 "salida": 22,
 "recorrido": "Terminal → Comisaria 11 → Alternativa → Talar → B° La Cancha → Colonia 4 (Luisiana)"
 },
 {
 "nombre": "22:30",
 "salida": 22.30,
 "recorrido": "Terminal → Comisaria 11 → Autopista → Alderetes → Talar → Esquina Lastra → Fortín → Colonia 4"
 }
]
const horariosDSMAl = [

 {
 "nombre": "06:40",
 "salida": 6.40,
 "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → Esquina Lastra → Fortín → Mayo"
 },
 {
 "nombre": "09:45",
 "salida": 9.45,
 "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → Esquina Lastra → Fortín → Colonia 2"
 },
 {
 "nombre": "11:40",
 "salida": 11.40,
 "recorrido": "Terminal → Banda R.S. → Alderetes → Cochuchal → Esquina Lastra → Fortín → Mayo"
 },
 {
 "nombre": "14:00",
 "salida": 14,
 "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → B° La Cancha → Colonia 4"
 },
 {
 "nombre": "14:50",
 "salida": 14.5,
 "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → B° La Cancha → Colonia 4"
 },
 {
 "nombre": "16:00",
 "salida": 16,
 "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → Esquina Lastra → Fortín → Colonia 3 (Florida)"
 },
 {
 "nombre": "16:50",
 "salida": 16.5,
 "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → B° La Cancha → Colonia 4"
 },
 {
 "nombre": "17:45",
 "salida": 17.45,
 "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → Esquina Lastra → Fortín → Colonia 3 → Mayo"
 },
 {
 "nombre": "18:30",
 "salida": 18.3,
 "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → B° La Cancha → Colonia 4"
 },
 {
 "nombre": "19:45",
 "salida": 19.45,
 "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → Esquina Lastra → Fortín → Mayo"
 },
 {
 "nombre": "21:00",
 "salida": 21,
 "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → Esquina Lastra → Fortín"
 },
 {
 "nombre": "22:30",
 "salida": 22.3,
 "recorrido": "Terminal → Comisaria 11 → Autopista → Alderetes → Talar → Esquina Lastra → Fortin → B° La Cancha → Colonia 4"
 },

]
const horariosLvSMPo = [
 {
 "nombre": "00:30",
 "salida": 0.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → B° La Cancha"
 },
 {
 "nombre": "06:00",
 "salida": 6,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → B° La Cancha → Colonia 4"
 },
 {
 "nombre": "06:30",
 "salida": 6.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → B° La Cancha"
 },
 {
 "nombre": "07:00",
 "salida": 7,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Esquina Lastra → Fortín"
 },
 {
 "nombre": "07:30",
 "salida": 7.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → B° La Cancha"
 },
 {
 "nombre": "08:15",
 "salida": 8.15,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Esquina Lastra"
 },
 {
 "nombre": "09:00",
 "salida": 9,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → B° La Cancha"
 },
 {
 "nombre": "09:30",
 "salida": 9.30,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → B° La Cancha"
 },
 {
 "nombre": "10:00",
 "salida": 10,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → B° La Cancha → Colonia 4"
 },
 {
 "nombre": "10:30",
 "salida": 10.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → B° La Cancha"
 },
 {
 "nombre": "11:00",
 "salida": 11,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → B° La Cancha"
 },
 {
 "nombre": "11:20",
 "salida": 11.2,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Esquina Lastra → Fortín"
 },
 {
 "nombre": "11:45",
 "salida": 11.45,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → B° La Cancha"
 },
 {
 "nombre": "12:25",
 "salida": 12.25,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Esquina Lastra → Fortín"
 },
 {
 "nombre": "12:30",
 "salida": 12.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → B° La Cancha"
 },
 {
 "nombre": "13:00",
 "salida": 13,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → B° La Cancha"
 },
 {
 "nombre": "13:30",
 "salida": 13.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Esquina Lastra"
 },
 {
 "nombre": "14:05",
 "salida": 14.05,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → B° La Cancha"
 },
 {
 "nombre": "14:30",
 "salida": 14.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Esquina Lastra"
 },
 {
 "nombre": "15:00",
 "salida": 15,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Esquina Lastra → Fortín"
 },
 {
 "nombre": "16:00",
 "salida": 16,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → B° La Cancha"
 },
 {
 "nombre": "17:00",
 "salida": 17,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → B° La Cancha"
 },
 {
 "nombre": "17:30",
 "salida": 17.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Esquina Lastra → Fortín"
 },
 {
 "nombre": "18:00",
 "salida": 18,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → B° La Cancha"
 },
 {
 "nombre": "18:30",
 "salida": 18.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Esquina Lastra → Fortín"
 },
 {
 "nombre": "19:10",
 "salida": 19.1,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → B° La Cancha → Colonia 4"
 },
 {
 "nombre": "19:30",
 "salida": 19.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → B° La Cancha"
 },
 {
 "nombre": "20:00",
 "salida": 20,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → B° La Cancha"
 },
 {
 "nombre": "20:30",
 "salida": 20.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → B° La Cancha"
 },
 {
 "nombre": "20:45",
 "salida": 20.45,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → B° La Cancha"
 },
 {
 "nombre": "21:00",
 "salida": 21,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Fila del Medio → Bosque → Posse → Paraíso → B° La Cancha"
 },
 {
 "nombre": "21:30",
 "salida": 21.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → B° La Cancha"
 },
 {
 "nombre": "22:00",
 "salida": 22,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → B° La Cancha"
 },
 {
 "nombre": "22:30",
 "salida": 22.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → B° La Cancha"
 },
 {
 "nombre": "23:30",
 "salida": 23.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → B° La Cancha → Fortín → Colonia 4"
 },
 {
 "nombre": "00:30",
 "salida": 24.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → B° La Cancha"
 }
]
const horariosSSMPo = [
 {
 "nombre":"00:30",
 "salida":0.3,
 "recorrido":"Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → B° La Cancha"
 },
 {
 "nombre": "06:00",
 "salida": 6,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → B° La Cancha → Colonia 4"
 },
 {
 "nombre": "06:40",
 "salida": 6.1,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → B° La Cancha"
 },
 {
 "nombre": "07:00",
 "salida": 7,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Esquina Lastra → Fortín"
 },
 {
 "nombre": "07:30",
 "salida": 7.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → B° La Cancha"
 },
 {
 "nombre": "08:15",
 "salida": 8.15,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Esquina Lastra"
 },
 {
 "nombre": "09:00",
 "salida": 9,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → B° La Cancha"
 },
 {
 "nombre": "09:30",
 "salida": 9.30,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → B° La Cancha"
 },
 {
 "nombre": "10:00",
 "salida": 10,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → B° La Cancha → Colonia 4"
 },
 {
 "nombre": "10:30",
 "salida": 10.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → B° La Cancha"
 },
 {
 "nombre": "11:00",
 "salida": 11,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → B° La Cancha"
 },
 {
 "nombre": "11:45",
 "salida": 11.45,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → B° La Cancha"
 },
 {
 "nombre": "12:30",
 "salida": 12.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → B° La Cancha"
 },
 {
 "nombre": "13:00",
 "salida": 13,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → B° La Cancha"
 },
 {
 "nombre": "13:45",
 "salida": 13.45,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Esquina Lastra → Fortín"
 },
 {
 "nombre": "14:15",
 "salida": 14.15,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Esquina Lastra"
 },
 {
 "nombre": "15:00",
 "salida": 15,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Esquina Lastra → Fortín"
 },
 {
 "nombre": "16:00",
 "salida": 16,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → B° La Cancha"
 },
 {
 "nombre": "17:00",
 "salida": 17,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → B° La Cancha"
 },
 {
 "nombre": "17:30",
 "salida": 17.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Esquina Lastra → Fortín"
 },
 {
 "nombre": "18:00",
 "salida": 18,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → B° La Cancha"
 },
 {
 "nombre": "18:30",
 "salida": 18.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Esquina Lastra → Fortín"
 },
 {
 "nombre": "19:15",
 "salida": 19.15,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → B° La Cancha → Colonia 4"
 },
 {
 "nombre": "19:30",
 "salida": 19.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → B° La Cancha"
 },
 {
 "nombre": "20:00",
 "salida": 20,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → B° La Cancha"
 },
 {
 "nombre": "20:30",
 "salida": 20.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → B° La Cancha"
 },
 {
 "nombre": "21:00",
 "salida": 21,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Fila del medio → Bosque → Paraíso → B° La Cancha → Colonia 4"
 },
 {
 "nombre": "21:30",
 "salida": 21.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → B° La Cancha"
 },
 {
 "nombre": "22:00",
 "salida": 22,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → B° La Cancha → Colonia 4"
 },
 {
 "nombre": "22:30",
 "salida": 22.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → B° La Cancha"
 },
 {
 "nombre": "23:30",
 "salida": 23.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → B° La Cancha"
 },
]
const horariosDSMPo = [
 {
 "nombre": "06:00",
 "salida": 6,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Esquina Lastra → Fortín"
 },
 {
 "nombre": "07:00",
 "salida": 7,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Esquina Lastra → Fortín"
 },
 {
 "nombre": "08:00",
 "salida": 8,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Esquina Lastra → Fortín"
 },
 {
 "nombre": "09:00",
 "salida": 9,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → B° La Cancha"
 },
 {
 "nombre": "10:00",
 "salida": 10,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → B° La Cancha"
 },
 {
 "nombre": "11:00",
 "salida": 11,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → B° La Cancha"
 },
 {
 "nombre": "12:00",
 "salida": 12,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Esquina Lastra"
 },
 // {
 // "nombre": "12:30",
 // "salida": 12.3,
 // "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Esquina Lastra"
 // },
 {
 "nombre": "13:00",
 "salida": 13,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → B° La Cancha"
 },
 {
 "nombre": "14:15",
 "salida": 14.15,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Esquina Lastra"
 },
 {
 "nombre": "15:00",
 "salida": 15,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Esquina Lastra → Fortín"
 },
 {
 "nombre": "16:00",
 "salida": 16,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → B° La Cancha"
 },
 {
 "nombre": "17:00",
 "salida": 17,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → B° La Cancha"
 },
 {
 "nombre": "18:00",
 "salida": 18,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → B° La Cancha"
 },
 {
 "nombre": "18:30",
 "salida": 18.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Esquina Lastra → Fortín"
 },
 {
 "nombre": "19:10",
 "salida": 19.1,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → B° La Cancha"
 },
 {
 "nombre": "20:00",
 "salida": 20,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → B° La Cancha"
 },
 {
 "nombre": "20:45",
 "salida": 20.45,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → B° La Cancha"
 },
 // {
 // "nombre": "21:00",
 // "salida": 21,
 // "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → B° La Cancha"
 // },
 {
 "nombre": "21:30",
 "salida": 21.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → B° La Cancha"
 },
 {
 "nombre": "22:30",
 "salida": 22.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → B° La Cancha"
 },
 {
 "nombre": "23:30",
 "salida": 23.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → B° La Cancha"
 }
]
const posseTerminalLaV = [
 // {
 // "nombre": "05:00",
 // "salida": 5,
 // "recorrido": "Dispensario → Fila de la orilla → Llona → Cevil Pozo → Banda R.S. → Terminal"
 // },
 {
 "nombre": "05:55",
 "salida": 5.55,
 "recorrido": "Dispensario → Fila del medio → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "06:00",
 "salida": 6,
 "recorrido": "Dispensario → Fila del Medio → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "06:08",
 "salida": 6.08,
 "recorrido": "Dispensario → Fila de la orilla → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "06:25",
 "salida": 6.25,
 "recorrido": "Dispensario → Fila del Medio → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "06:35",
 "salida": 6.35,
 "recorrido": "Bosque → Fila del Medio → Cevil Pozo → Banda R.S. → Terminal",
 "recorrido2": "Dispensario → Fila de la orilla → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "07:08",
 "salida": 7.08,
 "recorrido": "Dispensario → Bosque → Fila del Medio → Cevil Pozo → Banda R.S. → Terminal",
 "recorrido2": "Bosque → Fila del Medio → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "07:40",
 "salida": 7.4,
 "recorrido": "Bosque → Fila del Medio → Cevil Pozo → Banda R.S. → Terminal",
 "recorrido2": "Dispensario → Fila de la orilla → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "08:10",
 "salida": 8.1,
 "recorrido": "Bosque → Fila del Medio → Cevil Pozo → Banda R.S. → Terminal",
 "recorrido2": "Dispensario → Fila de la orilla → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "09:10",
 "salida": 9.1,
 "recorrido": "Bosque → Fila del Medio → Cevil Pozo → Banda R.S. → Terminal",
 "recorrido2": "Dispensario → Fila de la orilla → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "10:10",
 "salida": 10.1,
 "recorrido": "Dispensario → Fila del Medio → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "11:10",
 "salida": 11.1,
 "recorrido": "Dispensario → Fila de la orilla → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "12:50",
 "salida": 12.5,
 "recorrido": "Dispensario → Fila de la orilla → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "13:00",
 "salida": 13,
 "recorrido": "Dispensario → Fila del Medio → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "14:10",
 "salida": 14.1,
 "recorrido": "Dispensario → Fila de la orilla → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "14:40",
 "salida": 14.4,
 "recorrido": "Dispensario → Bosque → Fila del medio → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "15:10",
 "salida": 15.1,
 "recorrido": "Bosque → Fila de la orilla → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "16:00",
 "salida": 16,
 "recorrido": "Dispensario → Fila de la orilla → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "16:10",
 "salida": 16.1,
 "recorrido": "Dispensario → Fila del Medio → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "17:00",
 "salida": 17,
 "recorrido": "Dispensario → Fila de la orilla → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "17:10",
 "salida": 17.1,
 "recorrido": "Dispensario → Fila de la orilla → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "17:45",
 "salida": 17.45,
 "recorrido": "Dispensario → Fila del medio → Cevil Pozo → Banda R.S. → Terminal"
 }
]
const posseTerminalS = [
 {
 "nombre": "06:05",
 "salida": 6.05,
 "recorrido": "Dispensario → Fila del Medio → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "07:05",
 "salida": 7.05,
 "recorrido": "Bosque → Fila del Medio → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "08:10",
 "salida": 8.1,
 "recorrido": "Bosque → Fila del Medio → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "09:10",
 "salida": 9.1,
 "recorrido": "Dispensario → Fila del Medio → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "10:10",
 "salida": 10.1,
 "recorrido": "Dispensario → Fila del Medio → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "13:00",
 "salida": 13,
 "recorrido": "Dispensario → Fila del Medio → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "15:05",
 "salida": 13,
 "recorrido": "Dispensario → Fila de la orilla → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "16:10",
 "salida": 16.1,
 "recorrido": "Dispensario → Fila del Medio → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "17:05",
 "salida": 13,
 "recorrido": "Dispensario → Fila de la orilla → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "17:10",
 "salida": 17.1,
 "recorrido": "Dispensario → Fila del Medio → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "18:05",
 "salida": 18.05,
 "recorrido": "Dispensario → Fila dela orilla → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "19:05",
 "salida": 19.05,
 "recorrido": "Dispensario → Fila dela orilla → Llona → Cevil Pozo → Banda R.S. → Terminal"
 }
]
const posseTerminalD = [
 {
 "nombre": "09:05",
 "salida": 9.05,
 "recorrido": "Dispensario → Fila de la orilla → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "10:10",
 "salida": 10.1,
 "recorrido": "Dispensario → Fila de la orilla → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "11:10",
 "salida": 11.1,
 "recorrido": "Dispensario → Fila de la orilla → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "12:10",
 "salida": 12.1,
 "recorrido": "Dispensario → Fila de la orilla → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "15:05",
 "salida": 15.05,
 "recorrido": "Dispensario → Fila de la orilla → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "16:10",
 "salida": 16.1,
 "recorrido": "Plaza → Fila de la orilla → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "17:10",
 "salida": 17.1,
 "recorrido": "Dispensario → Fila de la orilla → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "18:05",
 "salida": 18.05,
 "recorrido": "Dispensario → Fila de la orilla → Llona → Cevil Pozo → Banda R.S. → Terminal"
 }
];
const terminalPosseLaV = [
 {
 "nombre": "05:25",
 "salida": 5.25,
 "recorrido": "Terminal → Banda R.S. → Terminal → Cevil Pozo → Fila del medio → Bosque → Dispensario"
 },
 {
 "nombre": "08:30",
 "salida": 8.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Fila del medio → Dispensario"
 },
 {
 "nombre": "13:00",
 "salida": 13,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Fila del medio → Bosque"
 },
 {
 "nombre": "13:30",
 "salida": 13.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Fila del medio → Bosque → Dispensario"
 },
 {
 "nombre": "15:00",
 "salida": 15,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Fila del medio → Bosque → Dispensario"
 },
 {
 "nombre": "15:30",
 "salida": 15.3,
 "recorrido": " Terminal → Banda R.S. → Cevil Pozo → Fila del medio → Bosque → Dispensario"
 },
 {
 "nombre": "16:30",
 "salida": 16.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Fila del medio → Bosque → Dispensario"
 },
 {
 "nombre": "17:25",
 "salida": 17.25,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Fila del medio → Bosque → Dispensario"
 },
 {
 "nombre": "19:00",
 "salida": 19,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Fila del medio → Bosque → Dispensario"
 },
 {
 "nombre": "21:00",
 "salida": 21,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Fila del medio → Bosque "
 },
]
const terminalPosseS = [
 {
 "nombre": "05:25",
 "salida": 5.25,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Fila de la orilla → Bosque → Dispensario"
 },
 {
 "nombre": "08:30",
 "salida": 8.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Fila del medio → Bosque → Dispensario"
 },
 {
 "nombre": "11:35",
 "salida": 11.35,
 "recorrido": "Terminal → Banda del Río Sali → Cevil Pozo → Llona → Fila de la orilla → Dispensario"
 },
 {
 "nombre": "12:15",
 "salida": 12.15,
 "recorrido": "Terminal → Banda del Río Sali → Cevil Pozo → Fila del medio → Bosque → Dispensario"
 },
 {
 "nombre": "13:30",
 "salida": 13.3,
 "recorrido": "Terminal → Banda del Río Sali → Cevil Pozo → Fila del medio → Bosque → Dispensario"
 },
 {
 "nombre": "14:05",
 "salida": 14.05,
 "recorrido": "Terminal → Banda del Río Sali → Cevil Pozo → Llona → Fila de la orilla → Dispensario"
 },
 {
 "nombre": "15:00",
 "salida": 15,
 "recorrido": "Terminal → Banda del Río Sali → Cevil Pozo → Llona → Fila de la orilla → Dispensario"
 },
 {
 "nombre": "15:30",
 "salida": 15.3,
 "recorrido": "Terminal → Banda del Río Sali → Cevil Pozo → Fila del medio → Bosque → Dispensario"
 },
 {
 "nombre": "16:30",
 "salida": 16.3,
 "recorrido": "Terminal → Banda del Río Sali → Cevil Pozo → Fila del medio → Bosque → Dispensario"
 },
 {
 "nombre": "17:00",
 "salida": 17,
 "recorrido": "Terminal → Banda del Río Sali → Cevil Pozo → Llona → Fila de la orilla → Dispensario"
 },
 {
 "nombre": "19:00",
 "salida": 19,
 "recorrido": "Terminal → Banda del Río Sali → Cevil Pozo → Llona → Fila de la orilla → Dispensario"
 },
 {
 "nombre": "21:00",
 "salida": 21,
 "recorrido": "Terminal → Banda del Río Sali → Cevil Pozo → Fila del medio → Bosque → Dispensario"
 },
]
const terminalPosseD = [
 {
 "nombre": "19:50",
 "salida": 19.5,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Fila de la orilla → Llona → Dispensario"
 },
 {
 "nombre": "21:20",
 "salida": 21.2,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Fila de la orilla → Llona → Dispensario"
 },
 {
 "nombre": "22:00",
 "salida": 22,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Fila de la orilla → Llona → Dispensario"
 },
 {
 "nombre": "22:20",
 "salida": 22.2,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Fila de la orilla → Llona → Dispensario"
 }
];
const ralosTerminalLaV = [
 {
 "nombre": "04:40",
 "salida": 4.4,
 "recorrido": "Los Ralos → Villa Tercera → Llona → Cevil Pozo → Banda R.S. → Terminal",
 "recorrido2": "Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "05:25",
 "salida": 5.25,
 "recorrido": "Mayo → Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal",
 "recorrido2": "Las Cejas → Lolita Sur → Cerco 2 → Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "05:30",
 "salida": 5.3,
 "recorrido": "Villa Tercera → Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal",
 "recorrido2": "Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "06:05",
 "salida": 6.05,
 "recorrido": "Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "06:10",
 "salida": 6.1,
 "recorrido": "Villa Tercera → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "06:15",
 "salida": 6.15,
 "recorrido": "Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "06:25",
 "salida": 6.25,
 "recorrido": "Alabama → Mayo → Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "06:40",
 "salida": 6.4,
 "recorrido": "Villa Tercera → Llona → Cevil Pozo → Banda R.S. → Terminal",
 "recorrido2": "Lolita Sur → Cerco 2 → Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "06:50",
 "salida": 6.5,
 "recorrido": "Las Vias → B° Trigal → Llona → Cevil Pozo → Banda R.S. → Terminal",
 "recorrido2": "Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "07:25",
 "salida": 7.25,
 "recorrido": "Lolita Sur → Lolita Norte → Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "07:30",
 "salida": 7.3,
 "recorrido": "Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal",
 "recorrido2": "Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "08:15",
 "salida": 8.15,
 "recorrido": "La Marta → Mayo → Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "08:20",
 "salida": 8.2,
 "recorrido": "Los Ralos → B° Trigal → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "08:25",
 "salida": 8.25,
 "recorrido": "Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "09;25",
 "salida": 9.25,
 "recorrido": "Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal",
 "recorrido2": "Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "10:20",
 "salida": 10.2,
 "recorrido": "Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal",
 "recorrido2": "Los Ralos → Villa Tercera → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "11:10",
 "salida": 11.1,
 "recorrido": "Alabama → Mayo → Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "12:15",
 "salida": 12.15,
 "recorrido": "Mayo → Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "12:50",
 "salida": 12.5,
 "recorrido": "Lolita Sur → Los Ralos → Villa Tercera → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "13:10",
 "salida": 13.1,
 "recorrido": "Mayo → Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal",
 "recorrido2":"Alabama → Mayo → Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "14:05",
 "salida": 14.05,
 "recorrido": "Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "14:10",
 "salida": 14.1,
 "recorrido": "Los Ralos → Villa Tercera → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "15:00",
 "salida": 15,
 "recorrido": "Lolita Sur → Los Ralos → B° Trigal → Cevil Pozo → Banda R.S. → Terminal",
 "recorrido2": "Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "15:30",
 "salida": 15.3,
 "recorrido": "Los Ralos → Villa Tercera → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "16:10",
 "salida": 16.1,
 "recorrido": "Los Ralos → B° Trigal → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "16:25",
 "salida": 16.25,
 "recorrido": "Los Ralos → Villa Tercera → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "16:30",
 "salida": 16.3,
 "recorrido": "Mayo → Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "17:15",
 "salida": 17.15,
 "recorrido": "Alabama → Mayo → Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "17:20",
 "salida": 17.2,
 "recorrido": "Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "18:10",
 "salida": 18.1,
 "recorrido": "Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "18:20",
 "salida": 18.2,
 "recorrido": "Los Ralos → Villa Tercera → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "19:00",
 "salida": 19,
 "recorrido": "Alabama → Mayo → Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "19:10",
 "salida": 19.1,
 "recorrido": "Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "20:00",
 "salida": 20,
 "recorrido": "Lolita Sur → Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "20:20",
 "salida": 20.2,
 "recorrido": "Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "21:10",
 "salida": 21.1,
 "recorrido": "Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "22:20",
 "salida": 22.2,
 "recorrido": "Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 }
]
const ralosTerminalS = [
 {
 "nombre": "04:40",
 "salida": 4.4,
 "recorrido": "Los Ralos → Villa Tercera → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "05:30",
 "salida": 5.3,
 "recorrido": "Villa Tercera → El Infierno → Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal",
 "recorrido2": "Mayo → Los Ralos → (trasbordo)"
 },
 {
 "nombre": "05:55",
 "salida": 5.55,
 "recorrido": "Villa Tercera → El Infierno → Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "06:25",
 "salida": 6.25,
 "recorrido": "Alabama → Mayo → Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "06:50",
 "salida": 6.5,
 "recorrido": "Las Ralos → Villa Tercera → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "07:30",
 "salida": 7.3,
 "recorrido": "Lolita Sur → Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal",
 "recorrido2": "Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "08:10",
 "salida": 8.1,
 "recorrido": "Mayo → Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "08:25",
 "salida": 8.25,
 "recorrido": "Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "09;25",
 "salida": 9.25,
 "recorrido": "Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal",
 "recorrido2": "Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "10:20",
 "salida": 10.2,
 "recorrido": "Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal",
 "recorrido2": "Los Ralos → Villa Tercera → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "11:10",
 "salida": 11.1,
 "recorrido": "Alabama → Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "12:00",
 "salida": 12,
 "recorrido": "Las Cejas → Lolita → Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "12:15",
 "salida": 12.15,
 "recorrido": "Mayo → Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "13:10",
 "salida": 13.1,
 "recorrido": "Alabama → Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "14:10",
 "salida": 14.1,
 "recorrido": "Los Ralos → Villa Tercera → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "15:00",
 "salida": 15,
 "recorrido": "Lolita Sur → Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "15:25",
 "salida": 15.25,
 "recorrido": "Los Ralos → Villa Tercera → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "16:25",
 "salida": 16.25,
 "recorrido": "Los Ralos → Villa Tercera → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "16:30",
 "salida": 16.3,
 "recorrido": "Mayo → Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "17:15",
 "salida": 17.15,
 "recorrido": "Mayo → Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "17:20",
 "salida": 17.2,
 "recorrido": "Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "18:10",
 "salida": 18.1,
 "recorrido": "Los Ralos → Villa Tercera → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "19:00",
 "salida": 19,
 "recorrido": "Alabama → Mayo → Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 // {
 // "nombre": "19:05",
 // "salida": 19.05,
 // "recorrido": "Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 // },
 {
 "nombre": "20:00",
 "salida": 20,
 "recorrido": "Lolita → Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "21:10",
 "salida": 21.1,
 "recorrido": "Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "21:30",
 "salida": 21.3,
 "recorrido": "Mayo → Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "22:20",
 "salida": 22.2,
 "recorrido": "Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
]
const ralosTerminalD = [
 {
 "nombre": "05:00",
 "salida": 5,
 "recorrido": "Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "05:30",
 "salida": 5.3,
 "recorrido": "Villa Tercera → Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "07:00",
 "salida": 7,
 "recorrido": "Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "08:10",
 "salida": 8.1,
 "recorrido": "Alabama → Mayo → Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 // {
 // "nombre":"08:30",
 // "salida":8.3,
 // "recorrido":"Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 // },
 {
 "nombre": "09;30",
 "salida": 9.3,
 "recorrido": "Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "10:30",
 "salida": 10.3,
 "recorrido": "Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal",
 },
 {
 "nombre": "11:10",
 "salida": 11.1,
 "recorrido": "Alabama → Mayo → Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "12:10",
 "salida": 12.1,
 "recorrido": "Mayo → Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "13:10",
 "salida": 13.1,
 "recorrido": "Alabama → Mayo → Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "13:20",
 "salida": 13.2,
 "recorrido": "Los Ralos → Llona → Parada 6 (Lujan)"
 },
 {
 "nombre": "14:10",
 "salida": 14.1,
 "recorrido": "Los Ralos → Villa Tercera → Llona → Cevil Pozo → Banda R.S. → Terminal",
 "recorrido2": "Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "15:10",
 "salida": 15.1,
 "recorrido": "Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "15:25",
 "salida": 15.25,
 "recorrido": "Los Ralos → Villa Tercera → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "16:20",
 "salida": 16.2,
 "recorrido": "Los Ralos → Villa Tercera → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "17:15",
 "salida": 17.15,
 "recorrido": "Alabama → Mayo → Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal",
 "recorrido2": "Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "18:10",
 "salida": 18.1,
 "recorrido": "Los Ralos → Villa Tercera → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "19:00",
 "salida": 19,
 "recorrido": "Alabama → Mayo → Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "19:15",
 "salida": 19.15,
 "recorrido": "Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "20:00",
 "salida": 20,
 "recorrido": "Lolita → Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "21:10",
 "salida": 21.1,
 "recorrido": "Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "21:30",
 "salida": 21.3,
 "recorrido": "Mayo → Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "21:10",
 "salida": 21.1,
 "recorrido": "Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "22:20",
 "salida": 22.2,
 "recorrido": "Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },

]
const terminalRalosLaV = [
 {
 "nombre": "06.00",
 "salida": 6,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos"
 },
 {
 "nombre": "06.30",
 "salida": 6.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Lolita Norte → Lolita Sur"
 },
 {
 "nombre": "07:00",
 "salida": 7,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Mayo → La Marta"
 },
 {
 "nombre": "08:00",
 "salida": 8,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Mayo"
 },
 {
 "nombre": "08:30",
 "salida": 8.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos"
 },
 {
 "nombre": "09:15",
 "salida": 9.15,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Villa Tercera"
 },
 {
 "nombre": "09:30",
 "salida": 9.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos"
 },
 {
 "nombre": "10:00",
 "salida": 10,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Mayo → Alabama"
 },
 {
 "nombre": "10:30",
 "salida": 10.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Las Cejas"
 },
 {
 "nombre": "10:40",
 "salida": 10.4,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Lolita Sur"
 },
 {
 "nombre": "11:00",
 "salida": 11,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Las Cejas → Piedrabuena"
 },
 {
 "nombre": "11:15",
 "salida": 11.15,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Mayo"
 },
 {
 "nombre": "11:30",
 "salida": 11.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Mayo"
 },
 {
 "nombre": "11:45",
 "salida": 11.45,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Villa Tercera → Lolita Sur"
 },
 // {
 // "nombre":"11:50",
 // "salida":11.5,
 // "recorrido":"Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Villa Tercera"
 // },
 {
 "nombre": "12:10",
 "salida": 12.1,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Mayo → Alabama",
 "recorrido2": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Mayo"
 },
 {
 "nombre": "12:30",
 "salida": 12.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → B° Trigal"
 },
 {
 "nombre": "13:00",
 "salida": 13,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos",
 "recorrido2": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Villa Tercera"
 },
 {
 "nombre": "13:30",
 "salida": 13.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Villa Tercera → Lolita Sur",
 "recorrido2": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos"
 },
 {
 "nombre": "14:00",
 "salida": 14,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → B° Trigal"
 },
 // {
 // "nombre":"14:00",
 // "salida":14,
 // "recorrido":"Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Lolita"
 // },
 {
 "nombre": "14:30",
 "salida": 14.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Villa Tercera",
 "recorrido2": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Las Cejas"
 },
 {
 "nombre": "15:00",
 "salida": 15,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos"
 },
 {
 "nombre": "15:15",
 "salida": 15.15,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Villa Tercera"
 },
 {
 "nombre": "15:30",
 "salida": 15.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Mayo → Cruce"
 },
 {
 "nombre": "16:00",
 "salida": 16,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos"
 },
 {
 "nombre": "16:15",
 "salida": 16.15,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Mayo → Alabama"
 },
 {
 "nombre": "16:30",
 "salida": 16.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos"
 },
 {
 "nombre": "16:50",
 "salida": 16.5,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos"
 },
 {
 "nombre": "17:10",
 "salida": 17.1,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Villa Tercera"
 },
 {
 "nombre": "17:30",
 "salida": 17.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos"
 },
 {
 "nombre": "17:50",
 "salida": 17.5,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Villa Tercera"
 },
 {
 "nombre": "18:00",
 "salida": 18,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Mayo → Alabama"
 },
 {
 "nombre": "18:30",
 "salida": 18.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Villa Tercera",
 "recorrido2": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Las Cejas"
 },
 {
 "nombre": "19:00",
 "salida": 19,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Lolita Sur",
 "recorrido2": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos"
 },
 {
 "nombre": "19:30",
 "salida": 19.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → B° Trigal"
 },
 {
 "nombre": "20:00",
 "salida": 20,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Las Cejas",
 "recorrido2": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos"
 },
 {
 "nombre": "20:20",
 "salida": 20.2,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Villa Tercera"
 },
 {
 "nombre": "20:30",
 "salida": 20.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Mayo → Alabama"
 },
 {
 "nombre": "21:00",
 "salida": 21,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → B° Trigal"
 },
 {
 "nombre": "21:20",
 "salida": 21.2,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos"
 },
 {
 "nombre": "21:30",
 "salida": 21.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Villa Tercera"
 },
 {
 "nombre": "22:00",
 "salida": 22,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos"
 },
 {
 "nombre": "22:30",
 "salida": 22.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Villa Tercera → B° Trigal"
 },
 {
 "nombre": "23:30",
 "salida": 23.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Villa Tercer → B° Trigal"
 }
]
const terminalRalosS = [
 {
 "nombre": "06.00",
 "salida": 6,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos"
 },
 {
 "nombre": "06.30",
 "salida": 6.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Lolita Sur → Las Cejas"
 },
 {
 "nombre": "07:00",
 "salida": 7,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Mayo → Alabama"
 },
 {
 "nombre": "07:45",
 "salida": 7.45,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos"
 },
 {
 "nombre": "08:30",
 "salida": 8.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos"
 },
 {
 "nombre": "09:30",
 "salida": 9.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos"
 },
 {
 "nombre": "10:00",
 "salida": 10,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Mayo → Alabama"
 },
 {
 "nombre": "10:40",
 "salida": 10.4,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Lolita → Las Cejas"
 },
 {
 "nombre": "11:00",
 "salida": 11,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Mayo → Cruce"

 },
 {
 "nombre": "11:50",
 "salida": 11.5,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Villa Tercera"
 },
 {
 "nombre": "12:10",
 "salida": 12.1,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Mayo → Alabama"
 },
 {
 "nombre": "12:30",
 "salida": 12.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Villa Tercera"
 },
 {
 "nombre": "13:00",
 "salida": 13,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Villa Tercera"
 },
 {
 "nombre": "13:20",
 "salida": 13.2,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos"
 },
 {
 "nombre": "13:30",
 "salida": 13.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Villa Tercera → Lolita"
 },
 {
 "nombre": "14:00",
 "salida": 14,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Lolita"
 },
 {
 "nombre": "14:30",
 "salida": 14.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Villa Tercera",
 "recorrido2": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Las Cejas"
 },
 {
 "nombre": "15:15",
 "salida": 15.15,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Villa Tercera",
 },
 {
 "nombre": "15:30",
 "salida": 15.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Mayo",
 },
 {
 "nombre": "16:00",
 "salida": 16,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos",
 },
 {
 "nombre": "16:15",
 "salida": 16.15,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Mayo → Alabama",
 },
 {
 "nombre": "17:00",
 "salida": 17,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos"
 },
 {
 "nombre": "17:10",
 "salida": 17.1,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Villa Tercera",
 },
 {
 "nombre": "18:00",
 "salida": 18,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Mayo → Alabama",
 "recorrido2": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos"
 },
 {
 "nombre": "18:30",
 "salida": 18.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Las Cejas"
 },
 {
 "nombre": "19:00",
 "salida": 19,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Lolita",
 "recorrido2": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos"
 },
 {
 "nombre": "19:30",
 "salida": 19.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Villa Tercera",
 },
 {
 "nombre": "20:00",
 "salida": 20,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Las Cejas",
 "recorrido2": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos"
 },
 {
 "nombre": "20:30",
 "salida": 20.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Mayo → Alabama",
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos"
 },
 {
 "nombre": "21:00",
 "salida": 21,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos",
 },
 {
 "nombre": "21:30",
 "salida": 21.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Villa Tercera",
 },
 {
 "nombre": "22:00",
 "salida": 22,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos",
 },
 {
 "nombre": "22:30",
 "salida": 22.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Villa Tercera",
 },
 {
 "nombre": "23:30",
 "salida": 23.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Villa Tercera",
 }
]
const terminalRalosD = [
 {
 "nombre": "06.00",
 "salida": 6,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos"
 },
 {
 "nombre": "06.30",
 "salida": 6.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Las Cejas"
 },
 {
 "nombre": "07:00",
 "salida": 7,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Mayo → Alabama"
 },
 {
 "nombre": "08:30",
 "salida": 8.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos"
 },
 {
 "nombre": "09:30",
 "salida": 9.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos"
 },
 {
 "nombre": "10:00",
 "salida": 10,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Mayo → Alabama"
 },
 {
 "nombre": "10:30",
 "salida": 10.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Lolita → Las Cejas"
 },
 {
 "nombre": "11:00",
 "salida": 11,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Mayo"
 },
 {
 "nombre": "12:10",
 "salida": 12.1,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Mayo → Alabama"
 },
 {
 "nombre": "13:00",
 "salida": 13,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → VIlla Tercera"
 },
 {
 "nombre": "14:05",
 "salida": 14.05,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos"
 },
 {
 "nombre": "14:30",
 "salida": 14.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Villa Tercera"
 },
 {
 "nombre": "15:00",
 "salida": 15,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Las Cejas → 7 de Abril"
 },
 {
 "nombre": "15:30",
 "salida": 15.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos"
 },
 {
 "nombre": "16:15",
 "salida": 16.15,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Mayo → Alabama",
 },
 {
 "nombre": "17:10",
 "salida": 17.1,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Villa Tercera"
 },
 {
 "nombre": "18:00",
 "salida": 18,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Mayo → Alabama",
 "recorrido2": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos"
 },
 {
 "nombre": "18:25",
 "salida": 18.25,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos"
 },
 {
 "nombre": "18:30",
 "salida": 18.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Las Cejas",
 "recorrido2": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos"
 },
 {
 "nombre": "19:00",
 "salida": 19,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Lolita Sur"
 },
 {
 "nombre": "19:30",
 "salida": 19.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Cruz Alta",
 "recorrido2": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos"
 
 },
 {
 "nombre": "20:00",
 "salida": 20,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos",
 },
 {
 "nombre": "20:30",
 "salida": 20.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Mayo → Las Cejas"
 },
 {
 "nombre": "21:00",
 "salida": 21,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos"
 },
 {
 "nombre": "21:30",
 "salida": 21.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Villa Tercera"
 },
 {
 "nombre": "22:00",
 "salida": 22,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos"
 },
 {
 "nombre": "22:30",
 "salida": 22.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Villa Tercera"
 },
 {
 "nombre": "23:30",
 "salida": 23.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Villa Tercera",
 }
]
const ralosCruzAltaTerminalLaV = [
 {
 "nombre": "05:30",
 "salida": 5.3,
 "recorrido": "Los Ralos → Cruz Alta → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "07:20",
 "salida": 7.2,
 "recorrido": "Los Ralos → Cruz Alta → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 // {
 // "nombre":"07:45",
 // "salida":7.45,
 // "recorrido":"Britos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 // },
 {
 "nombre": "08:10",
 "salida": 8.1,
 "recorrido": "Los Ralos → Cruz Alta → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "12:10",
 "salida": 12.1,
 "recorrido": "Los Ralos → Cruz Alta → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "14:15",
 "salida": 14.15,
 "recorrido": "Los Ralos → Cruz Alta → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "18:30",
 "salida": 18.3,
 "recorrido": "Colonia 9 → Los Ralos → Cruz Alta → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },

]
const ralosCruzAltaTerminalS = [
 {
 "nombre": "05:30",
 "salida": 5.3,
 "recorrido": "Los Ralos → Cruz Alta → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "07:15",
 "salida": 7.15,
 "recorrido": "Los Ralos → Cruz Alta → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "08:40",
 "salida": 8.4,
 "recorrido": "Colonia 9 → Cruz Alta → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "11:50",
 "salida": 11.5,
 "recorrido": "Los Ralos → Cruz Alta → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "14:15",
 "salida": 14.15,
 "recorrido": "Los Ralos → Cruz Alta → Llona → Cevil Pozo → Banda R.S. → Terminal"
 }
]
const ralosCruzAltaTerminalD = []

const terminalCruzAltaRalosLaV = [
 {
 "nombre": "06:50",
 "salida": 6.5,
 "recorrido": "Terminal → Banda R.S. → Llona → Cevil Pozo → Cruz Alta → Los Ralos"
 },
 {
 "nombre": "10:45",
 "salida": 10.45,
 "recorrido": "Terminal → Banda R.S. → Llona → Cevil Pozo → Cruz Alta → Los Ralos"
 },
 {
 "nombre": "12:00",
 "salida": 12,
 "recorrido": "Terminal → Banda R.S. → Llona → Cevil Pozo → Cruz Alta → Los Ralos"
 },
 {
 "nombre": "13:15",
 "salida": 13.15,
 "recorrido": "Terminal → Banda R.S. → Llona → Cevil Pozo → Cruz Alta → Los Ralos"
 },
 {
 "nombre": "17:30",
 "salida": 17.3,
 "recorrido": "Terminal → Banda R.S. → Llona → Cevil Pozo → Cruz Alta → Colonia 9"
 },
 {
 "nombre": "20:00",
 "salida": 20,
 "recorrido": "Terminal → Banda R.S. → Llona → Cevil Pozo → Cruz Alta → Los Ralos"
 }
]
const terminalCruzAltaRalosS = [
 {
 "nombre": "10:45",
 "salida": 10.45,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Cruz Alta → Los Ralos"
 },
 {
 "nombre": "13:15",
 "salida": 13.15,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Cruz Alta → Los Ralos"
 },
 {
 "nombre": "19:30",
 "salida": 19.30,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Cruz Alta → Los Ralos"
 }
];
const terminalCruzAltaRalosD = [
 {
 "nombre": "19:30",
 "valor": 19.3,
 "recorrido": "Terminal → Banda del Rio Sali → Cevil Pozo → Cruz Alta → Los Ralos"
 }
]
const sieteDeAbrilTerminalLaV = [
 {
 "nombre": "04:30",
 "salida": 4.3,
 "recorrido": "7 de Abril → Las Cejas → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "11:30",
 "salida": 11.3,
 "recorrido": "7 de Abril → Las Cejas → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "16:20",
 "salida": 16.2,
 "recorrido": "7 de Abril → Las Cejas → Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 }
]
const sieteDeAbrilTerminalS = [
 {
 "nombre": "05:30",
 "salida": 5.3,
 "recorrido": "7 de Abril → Las Cejas → Llona → Cevil Pozo → Banda R.S. → Terminal"
 }
]
const sieteDeAbrilTerminalD = [
 {
 "nombre": "18:00",
 "salida": 18,
 "recorrido": "7 de Abril → Las Cejas → Llona → Cevil Pozo → Banda R.S. → Terminal"
 }
]
const terminalSieteDeAbrilLaV = [
 {
 "nombre": "06:15",
 "salida": 6.15,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Las Cejas → 7 de Abril"
 },
 {
 "nombre": "12:30",
 "salida": 12.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Las Cejas → 7 de Abril"
 },
 {
 "nombre": "15:45",
 "salida": 15.45,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Las Cejas → 7 de Abril"
 }
]
const terminalSieteDeAbrilS = [
 {
 "nombre": "15:45",
 "salida": 15.45,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Las Cejas → 7 de Abril"
 }
]
const terminalSieteDeAbrilD = [
 {
 "nombre": "15:00",
 "salida": 15,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Las Cejas → 7 de Abril"
 }
 // {
 // "nombre": "18:30",
 // "salida": 18.3,
 // "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Las Cejas → 7 de Abril"
 // },
 // {
 // "nombre": "20:30",
 // "salida": 20.3,
 // "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Las Cejas → 7 de Abril"
 // }
]
const lasCejasTerminalLaV = [
 {
 "nombre": "05:30",
 "salida": 5.3,
 "recorrido": "Las Cejas → Lolita Sur → Cerco 2 → Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "06:25",
 "salida": 6.25,
 "recorrido": "Las Cejas → Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "07:50",
 "salida": 7.5,
 "recorrido": "Las Cejas → Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "12:10",
 "salida": 12.1,
 "recorrido": "Las Cejas → Lolita → Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "13:20",
 "salida": 13.2,
 "recorrido": "Las Cejas → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "15:40",
 "salida": 15.4,
 "recorrido": "Las Cejas → Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "18:20",
 "salida": 18.2,
 "recorrido": "Las Cejas → Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "19:50",
 "salida": 19.5,
 "recorrido": "Las Cejas → Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 }
]
const lasCejasTerminalS = [
 {
 "nombre": "06:25",
 "salida": 6.25,
 "recorrido": "Las Cejas → Los Ralos → (Trasbordo)"
 },
 {
 "nombre": "07:50",
 "salida": 7.5,
 "recorrido": "Las Cejas → Llona → Cevil Pozo → Banda del Rio Sali"
 },
 {
 "nombre": "12:00",
 "salida": 12,
 "recorrido": "Las Cejas → Lolita → Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "15:40",
 "salida": 15.4,
 "recorrido": "Las Cejas → Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "19:50",
 "salida": 19.5,
 "recorrido": "Las Cejas → Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
]
const lasCejasTerminalD = [
 {
 "nombre": "07:50",
 "salida": 7.5,
 "recorrido": "Las Cejas → Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "12:00",
 "salida": 12,
 "recorrido": "Las Cejas → Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "15:40",
 "salida": 15.4,
 "recorrido": "Las Cejas → Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "18:00",
 "salida": 18,
 "recorrido": "7 de Abril → Las Cejas → Llona → Cevil Pozo → Banda R.S. → Terminal"
 },
 {
 "nombre": "19:50",
 "salida": 19.5,
 "recorrido": "Las Cejas → Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
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
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Las Cejas"
 },
 {
 "nombre": "11:00",
 "salida": 11,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Las Cejas → Piedrabuena"
 },
 {
 "nombre": "12:30",
 "salida": 12.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Las Cejas",
 "recorrido2": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Las Cejas → 7 de Abril"
 },
 {
 "nombre": "14:30",
 "salida": 14.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Las Cejas"
 },
 {
 "nombre": "15:45",
 "salida": 15.45,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Las Cejas → 7 de Abril"
 },
 {
 "nombre": "18:30",
 "salida": 18.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Las Cejas"
 },
 {
 "nombre": "20:00",
 "salida": 20,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Las Cejas"
 },
 {
 "nombre": "22:00",
 "salida": 22,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Las Cejas"
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
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Las Cejas"
 },
 {
 "nombre": "15:45",
 "salida": 15.45,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Las Cejas → 7 de Abril"
 },
 {
 "nombre": "18:30",
 "salida": 18.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Las Cejas"
 },
 {
 "nombre": "20:00",
 "salida": 20,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Las Cejas"
 },
]
const terminalLasCejasD = [
 {
 "nombre": "06:30",
 "salida": 6.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Las Cejas"
 },
 {
 "nombre": "10:30",
 "salida": 10.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Las Cejas"
 },
 {
 "nombre": "15:00",
 "salida": 15,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Las Cejas → 7 de Abril"
 },
 {
 "nombre": "18:30",
 "salida": 18.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Las Cejas"
 },
 {
 "nombre": "20:30",
 "salida": 20.3,
 "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Las Cejas"
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
