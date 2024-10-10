// Grilla horaria


const horariosLvFloAl = [
    {
        "nombre": "04:40",
        "salida": 4.4,
        "recorrido": "Fortín → B° La Cancha → Talar → Alderetes → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "05:35",
        "salida": 5.35,
        "recorrido": "Fortín → Esquina Lastra → Fonda → B° La Cancha → Talar → Alternativa → Terminal"
    },
    // {
    //     "nombre": "06:05",
    //     "salida": 6.05,
    //     "recorrido": "Fortín → Esquina Lastra → Fonda → B° La Cancha → Talar → Alternativa → Terminal"
    // },
    {
        "nombre": "06:10",
        "salida": 6.1,
        "recorrido": "Fortín → Esquina Lastra → Talar → Alderetes → Banda del Río Salí → Terminal",
        "recorrido2": "Colonia 10 → Colonia 4 (Luisiana) → B° La Cancha → Cochuchal → Alderetes → Autopista → Terminal"
    },
    {
        "nombre": "06:25",
        "salida": 6.25,
        "recorrido": "Colonia 5 (Florida) → Finca Mayo → Fortín → Esquina Lastra → Talar → Alternativa → Terminal"
    },
    {
        "nombre": "06:40",
        "salida": 6.4,
        "recorrido": "Fortín → B° La Cancha → Alderetes → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "06:50",
        "salida": 6.5,
        "recorrido": "Colonia 4 (Luisiana) → B° La Cancha → Talar → Alternativa → Terminal",
        // "recorrido2": "Colonia 4 (Luisiana) → Fonda → Talar → Alderetes → Autopista → Terminal"
        // "recorrido2": "Colonia 4 (Luisiana) → Fonda → Talar → Autopista → Terminal",
    },
    // {
    //     "nombre": "07:20",
    //     "salida": 7.2,
    //     "recorrido": "B° La Cancha → Talar → Alternativa → Terminal"
    // },
    {
        "nombre": "07:20",
        "salida": 7.2,
        // "recorrido": "Colonia 4 (Luisiana) → Fonda → Talar → Alternativa → Terminal",
        "recorrido": "Fortín → Esquina Lastra → Talar → Alderetes → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "07:40",
        "salida": 7.4,
        "recorrido": "Finca Mayo → Fortín → Esquina Lastra → Cochuchal → Alderetes → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "07:50",
        "salida": 7.5,
        "recorrido": "Colonia 4 (Luisiana) → Fonda → Talar → Alternativa → Terminal",
        "recorrido2": "Colonia 4 (Luisiana) → B° La Cancha → Talar → Alderetes → Autopista → Terminal"
    },
    // {
    //     "nombre": "07:55",
    //     "salida": 7.55,
    //     "recorrido": "B° La Cancha → Talar → Alderetes → Autopista → Terminal"
    // },
    // {
    //     "nombre": "08:20",
    //     "salida": 8.2,
    //     "recorrido": "La Marta → Colonia 4 (Luisiana) → B° La Cancha → Cochuchal → Alderetes → Banda del Río Salí → Terminal",
    //     // "recorrido2": "Colonia 4 (Luisiana) → B° La Cancha → Talar → Alternativa → Terminal"
    // },
    {
        "nombre": "08:45",
        "salida": 8.45,
        "recorrido": "Colonia 4 (Luisiana) → B° La Cancha → Cochuchal → Alderetes → Autopista → Terminal",
        // "recorrido2": "Colonia 4 (Luisiana) → B° La Cancha → Talar → Alderetes → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "09:20",
        "salida": 9.2,
        "recorrido": "Fortín → Esquina Lastra → Talar → Alderetes → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "09:50",
        "salida": 9.5,
        "recorrido": "Colonia 4 (Luisiana) → B° La Cancha → Talar → Alderetes → Autopista → Terminal"
    },
    {
        "nombre": "10:30",
        "salida": 10.3,
        "recorrido": "Fortín → Esquina Lastra → Talar → Alderetes → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "11:40",
        "salida": 11.40,
        "recorrido": "Fortín → Esquina Lastra → Talar → Alderetes → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "12:30",
        "salida": 12.3,
        "recorrido": "Colonia 4 (Luisiana) → B° La Cancha → Talar → Alderetes → Autopista → Terminal"
    },
    {
        "nombre": "12:40",
        "salida": 12.4,
        "recorrido": "Finca Mayo → Fortín → Esquina Lastra → Talar → Alderetes → Banda del Río Salí → Terminal",
    },
    // {
    //     "nombre": "12:45",
    //     "salida": 12.45,
    //     // "recorrido": "Finca Mayo → Fortín (12:55) → Talar → Alderetes → Banda del Río Salí → Terminal",
    //     "recorrido": "La Marta → Finca Mayo → Colonia 10 → Colonia 4 (Luisiana) (13:15) → B° La Cancha → Talar → Alternativa → Terminal",
    // },
    {
        "nombre": "13:15",
        "salida": 13.15,
        "recorrido": "Colonia 4 (Luisiana) → B° La Cancha → Talar → Alderetes → Autopista → Terminal"
    },
    {
        "nombre": "14:00",
        "salida": 14,
        "recorrido": "B° La Cancha → Cochuchal → Alderetes → Banda del Río Salí → Terminal",
    },
    // {
    //     "nombre": "14:45",
    //     "salida": 14.45,
    //     "recorrido": "Fortín → Esquina Lastra → Talar → Alternativa → Terminal",
    //     // "recorrido": "Colonia 4 (Luisiana) → B° La Cancha → Talar → Alderetes → Banda del Río Salí → Terminal"
    // },
    {
        "nombre": "14:50",
        "salida": 14.5,
        "recorrido": "Colonia 4 (Luisiana) → B° La Cancha → Talar → Alderetes → Autopista → Terminal",
        // "recorrido": "Colonia 4 (Luisiana) → B° La Cancha → Talar → Alderetes → Banda del Río Salí → Terminal"
    },
    // {
    //     "nombre": "15:40",
    //     "salida": 15.4,
    //     "recorrido": "Colonia 4 (Luisiana) → B° La Cancha → Talar → Alternativa → Terminal",
    //     // "recorrido": "Colonia 4 (Luisiana) → B° La Cancha → Talar → Alderetes → Banda del Río Salí → Terminal"
    // },
    // {
    //     "nombre": "15:47",
    //     "salida": 15.47,
    //     "recorrido": "Fortín → Esquina Lastra → Talar → Alternativa → Terminal",
    // },
    {
        "nombre": "15:50",
        "salida": 15.5,
        "recorrido" : "Colonia 4 (Luisiana) → B° La Cancha → Talar → Alderetes → Autopista → Terminal",
        "recorrido2": "Fortín → Esquina Lastra → Talar → Alternativa → Terminal",
    },
    // {
    //     "nombre": "16:20",
    //     "salida": 16.2,
    //     "recorrido": "La Marta → Plaza Finca Mayo → Colonia 4 (Luisiana) (16:50) → B° La Cancha → Talar → Alternativa → Terminal"
    // },
//     {
//       "nombre": "16:40",
//       "salida": 16.4,
//       "recorrido": "Colonia 4 (Luisiana) → B° La Cancha → Talar → Alternativa → Terminal",
  
//   },
    {
        "nombre": "16:50",
        "salida": 16.5,
        "recorrido":"Colonia 4 (Florida) → Fortín → Esquina Lastra → Talar → Alderetes → Banda del Río Salí → Terminal",
        "recorrido2" :"Colonia 4 (Luisiana) → B° La Cancha → Talar → Alternativa → Terminal"
    },
    // {
    //     "nombre": "17:35",
    //     "salida": 17.35,
    //     "recorrido": "Colonia 4 (Luisiana) → B° La Cancha → Talar → Alternativa → Terminal"
    // },
    {
        "nombre": "17:50",
        "salida": 17.5,
        "recorrido": "Fortín → Esquina Lastra → Talar → Alderetes → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "18:10",
        "salida": 18.1,
        "recorrido": "Colonia 4 (Luisiana) → B° La Cancha → Talar → Alternativa → Terminal"
    },
    {
        "nombre": "18:30",
        "salida": 18.3,
        "recorrido": "Fortín → Esquina Lastra → Talar → Alderetes → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "19:00",
        "salida": 19,
        "recorrido": "La Marta → Colonia 3 (Luisiana) → B° La Cancha (19:15) → Talar → Alderetes → Banda del Río Salí → Terminal"
    },
    // {
    //     "nombre": "20:55",
    //     "salida": 20.55,
    //     "recorrido": "Finca Mayo → Colonia 4 (Luisiana) (21:05) → B° La Cancha → Talar → Alderetes → Autopista → Terminal"
    // }

]
const horariosSFloAl = [
    {
        "nombre": "04:40",
        "salida": 4.4,
        "recorrido": "Fortín → Esquina Lastra → Fonda → B° La Cancha → Talar → Alderetes → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "05:45",
        "salida": 5.45,
        "recorrido": "Fortín → Esquina Lastra → Fonda → B° La Cancha → Talar → Alderetes → Autopista → Terminal"
    },
    {
        "nombre": "06:10",
        "salida": 6.10,
        "recorrido": "Colonia 10 (Luisiana) → B° La Cancha → Cochuchal → Alderetes → Autopista → Terminal"
    },
    //
    {
        "nombre": "06:50",
        "salida": 6.5,
        "recorrido": "Colonia 4 (Luisiana) → B° La Cancha → Talar → Alternativa → Terminal"
    },
    {
        "nombre": "07:20",
        "salida": 7.20,
        "recorrido": "Colonia 4 (Luisiana) → B° La Cancha → Talar → Alderetes → Autopista → Terminal"
    },
    {
        "nombre": "07:40",
        "salida": 7.4,
        "recorrido": "Finca Mayo → Fortín → Esquina Lastra → Talar → Alderetes → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "07:50",
        "salida": 7.5,
        "recorrido": "Colonia 4 (Luisiana) → B° La Cancha → Talar → Alternativa → Terminal"
    },
    {
        "nombre": "08:45",
        "salida": 8.45,
        "recorrido": "Colonia 4 (Luisiana) → B° La Cancha → Talar → Alderetes → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "09:20",
        "salida": 9.2,
        "recorrido": "Fortín → Esquina Lastra → Talar → Alderetes → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "10:30",
        "salida": 10.30,
        "recorrido": "Fortín → Esquina Lastra → Talar → Alderetes → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "11:40",
        "salida": 11.40,
        "recorrido": "Fortín → Esquina Lastra → Talar → Alderetes → Banda del Río Salí → Terminal"

    },
    {
        "nombre": "12:40",
        "salida": 12.4,
        "recorrido": "Finca Mayo → Fortín → Esquina Lastra → Talar → Alderetes → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "13:15",
        "salida": 13.15,
        "recorrido": "Colonia 4 (Luisiana) → B° La Cancha → Talar → Alderetes → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "14:50",
        "salida": 14.5,
        "recorrido": "Colonia 4 (Luisiana) → B° La Cancha → Talar → Alderetes → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "15:50",
        "salida": 15.5,
        "recorrido": "Colonia 4 (Luisiana) → B° La Cancha → Talar → Alderetes → Alternativa → Terminal",
        "recorrido2" : "Colonia 4 (Luisiana) → B° La Cancha → Talar → Alderetes → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "16:45",
        "salida": 16.45,
        "recorrido": "Colonia 4 (Luisiana) → B° La Cancha → Talar → Alternativa → Terminal"
    },
    {
        "nombre": "16:50",
        "salida": 16.5,
        // "recorrido": "Colonia 4 (Luisiana) → Fortín → Esquina Lastra → Talar → Alderetes → Banda del Río Salí → Terminal",
        "recorrido" : "Colonia 4 (Florida) → Fortín → Esquina Lastra → Talar → Alderetes → Banda del Río Salí → Terminal"
    },
  
    {
        "nombre": "17:50",
        "salida": 17.5,
        "recorrido": "Fortín → Esquina Lastra → Talar → Alderetes → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "19:00",
        "salida": 19,
        "recorrido": "La Marta → Colonia 3 (Luisiana) → B° La Cancha → Talar → Alderetes → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "20:55",
        "salida": 20.55,
        "recorrido": "Finca Mayo → Colonia 10 y 4 (Luisiana) → B° La Cancha → Talar → Alderetes → Autopista → Terminal"
    }

]
const horariosDFloAl = [

    {
        "nombre": "07:40",
        "salida": 7.4,
        "recorrido": "Finca Mayo → Fortín → Esquina Lastra → Talar → Alderetes → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "10:30",
        "salida": 10.30,
        "recorrido": "Colonia 2 (Florida) → Fortín → Esquina Lastra → Talar → Alderetes → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "12:40",
        "salida": 12.4,
        "recorrido": "Finca Mayo → Fortín → Esquina Lastra → Talar → Alderetes → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "14:45",
        "salida": 14.45,
        "recorrido": "Colonia 4 (Luisiana) → B° La Cancha → Talar → Alderetes → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "15:50",
        "salida": 15.5,
        "recorrido": "Colonia 4 (Luisiana) → B° La Cancha → Talar → Alderetes → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "16:50",
        "salida": 16.5,
        "recorrido": "Colonia 4 (Florida)  Fortín → Esquina Lastra → Talar → Alderetes → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "17:50",
        "salida": 17.5,
        "recorrido": "B° La Cancha → Talar → Alderetes → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "19:00",
        "salida": 19,
        "recorrido": "Finca Mayo → Colonia 3 (Luisiana) → B° La Cancha → Talar → Alderetes → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "20:55",
        "salida": 19,
        "recorrido": "Finca Mayo → Colonia 10 → Colonia 4 (Luisiana) B° La Cancha → Talar → Alderetes → Banda del Río Salí → Terminal"
    }
]
const horariosLvFloPo = [

    {
        "nombre": "04:50",
        "salida": 4.5,
        "recorrido": "Fonda → B° La Cancha → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "05:50",
        "salida": 5.5,
        "recorrido": "B° La Cancha → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "06:25",
        "salida": 6.25,
        "recorrido": "B° La Cancha → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "06:50",
        "salida": 6.5,
        "recorrido": "B° La Cancha → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal",
        // "recorrido2": "Fortín → Esquina Lastra → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "07:25",
        "salida": 7.25,
        "recorrido": "B° La Cancha → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "07:55",
        "salida": 7.55,
        "recorrido": "Fortín → Esquina Lastra → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },

    {
        "nombre": "08:25",
        "salida": 8.25,
        "recorrido": "B° La Cancha → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },

    {
        "nombre": "09:05",
        "salida": 9.05,
        "recorrido": "B° La Cancha → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },

    {
        "nombre": "09:55",
        "salida": 9.55,
        "recorrido": "B° La Cancha → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    // {
    //     "nombre": "10:20",
    //     "salida": 10.2,
    //     "recorrido": "B° La Cancha → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    // },
    {
        "nombre": "10:55",
        "salida": 10.55,
        "recorrido": "B° La Cancha → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    // {
    //     "nombre": "11:20",
    //     "salida": 11.2,
    //     "recorrido": "B° La Cancha → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    // },
    // {
    //     "nombre": "11:50",
    //     "salida": 11.5,
    //     "recorrido": "B° La Cancha → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    // },
    {
        "nombre": "12:40",
        "salida": 12.40,
        "recorrido": "B° La Cancha → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    
    // {
    //     "nombre": "13:25",
    //     "salida": 13.25,
    //     // "recorrido": "B° La Cancha → Paraíso → Posse → Esquina Llona",
    //     "recorrido": "Fortín → Esquina Lastra → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    // },
    // {
    //     "nombre": "13:30",
    //     "salida": 13.3,
    //     // "recorrido": "B° La Cancha → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal",
    //     "recorrido": "B° La Cancha → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    // },
    {
        "nombre": "13:55",
        "salida": 13.55,
        "recorrido": "B° La Cancha → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "14:55",
        "salida": 14.55,
        "recorrido": "B° La Cancha → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    // {
    //     "nombre": "15:00",
    //     "salida": 15.5,
    //     "recorrido": "Fortín → Esquina Lastra → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    // },
    {
        "nombre": "15:55",
        "salida": 15.55,
        "recorrido": "Fortín → Esquina Lastra → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "16:55",
        "salida": 16.55,
        "recorrido": "B° La Cancha → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "17:55",
        "salida": 17.55,
        // "recorrido": "Escuela Croacia → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal",
        "recorrido": "Fortín → Esquina Lastra → Paraiso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "18:55",
        "salida": 18.55,
        "recorrido": "B° La Cancha → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "19:30",
        "salida": 19.3,
        "recorrido": "Fortín → Esquina Lastra → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    // {
    //     "nombre": "19:50",
    //     "salida": 19.5,
    //     "recorrido": "B° La Cancha → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    // },
    {
        "nombre": "20:00",
        "salida": 20,
        "recorrido": "Colonia 4 (Luisiana) → B° La Cancha → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    // {
    //     "nombre": "20:20",
    //     "salida": 20.2,
    //     "recorrido": "B° La Cancha → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    // },
    {
        "nombre": "20:55",
        "salida": 20.55,
        "recorrido": "B° La Cancha → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "21:20",
        "salida": 21.2,
        "recorrido": "B° La Cancha → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "22:20",
        "salida": 22.20,
        "recorrido": "B° La Cancha → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    // {
    //     "nombre": "23:20",
    //     "salida": 23.2,
    //     "recorrido": "B° La Cancha → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    // }
]
const horariosSFloPo = [
    {
        "nombre": "04:50",
        "salida": 4.5,
        "recorrido": "B° La Cancha → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "05:50",
        "salida": 5.5,
        "recorrido": "B° La Cancha → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "06:25",
        "salida": 6.25,
        "recorrido": "Colonia 5 (Florida) → Fortín → Fonda → B° La Cancha (06:50) → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal",
        "recorrido2": "B° La Cancha → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    // {
    //     "nombre": "06:50",
    //     "salida": 6.5,
    //     "recorrido": "B° La Cancha → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    // },
    {
        "nombre": "07:25",
        "salida": 7.25,
        "recorrido": "B° La Cancha → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    // {
    //     "nombre": "07:55",
    //     "salida": 7.55,
    //     "recorrido": "Fortín → Esquina Lastra → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    // },

    {
        "nombre": "08:25",
        "salida": 8.25,
        "recorrido": "B° La Cancha → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },

    {
        "nombre": "09:05",
        "salida": 9.05,
        "recorrido": "B° La Cancha → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },

    {
        "nombre": "09:55",
        "salida": 9.55,
        "recorrido": "B° La Cancha → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },

    {
        "nombre": "10:25",
        "salida": 10.25,
        "recorrido": "B° La Cancha → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "10:55",
        "salida": 10.55,
        "recorrido": "B° La Cancha → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "11:25",
        "salida": 11.25,
        "recorrido": "B° La Cancha → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "11:55",
        "salida": 11.55,
        "recorrido": "B° La Cancha → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "12:40",
        "salida": 12.40,
        "recorrido": "B° La Cancha → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    // {
    //     "nombre":"12:25",
    //     "salida":12.25,
    //     "recorrido":"Fortín hasta Esquina Llona"
    // },
    {
        "nombre": "13:25",
        "salida": 13.25,
        "recorrido": "B° La Cancha → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "13:55",
        "salida": 13.55,
        "recorrido": "B° La Cancha → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "15:00",
        "salida": 15,
        "recorrido": "Esquina de Lastra → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "15:55",
        "salida": 15.55,
        "recorrido": "Fortín → Esquina Lastra → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "16:55",
        "salida": 16.55,
        "recorrido": "B° La Cancha → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "17:55",
        "salida": 17.55,
        "recorrido": "B° La Cancha → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "18:55",
        "salida": 18.55,
        "recorrido": "B° La Cancha → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "19:25",
        "salida": 19.25,
        "recorrido": "Fortín → Esquina Lastra → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "20:25",
        "salida": 20.25,
        "recorrido": "B° La Cancha → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "20:55",
        "salida": 20.55,
        "recorrido": "B° La Cancha → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "21:25",
        "salida": 21.25,
        "recorrido": "B° La Cancha → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "22:25",
        "salida": 22.25,
        "recorrido": "B° La Cancha → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    }
]
const horariosDFloPo = [
    {
        "nombre": "04:50",
        "salida": 4.5,
        "recorrido": "B° La Cancha → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "05:55",
        "salida": 5.55,
        "recorrido": "B° La Cancha → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    // {
    //     "nombre": "06:55",
    //     "salida": 6.55,
    //     "recorrido": "Fortín → Esquina Lastra → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    // },
    {
        "nombre": "07:55",
        "salida": 7.55,
        "recorrido": "Fortín → Esquina Lastra → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "08:55",
        "salida": 8.55,
        "recorrido": "Fortín → Esquina Lastra → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "09:55",
        "salida": 9.55,
        "recorrido": "B° La Cancha → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "10:55",
        "salida": 10.55,
        "recorrido": "B° La Cancha → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "11:55",
        "salida": 11.55,
        "recorrido": "B° La Cancha → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "13:00",
        "salida": 13,
        "recorrido": "Esquina Lastra → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "13:55",
        "salida": 13.55,
        "recorrido": "B° La Cancha → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "15:00",
        "salida": 15,
        "recorrido": "Esquina de Lastra → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "15:55",
        "salida": 15.55,
        "recorrido": "Fortín → Esquina Lastra → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "16:55",
        "salida": 16.55,
        "recorrido": "B° La Cancha → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "17:55",
        "salida": 17.55,
        "recorrido": "B° La Cancha → Paraíso → Posse → Dispensario → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "18:55",
        "salida": 18.55,
        "recorrido": "B° La Cancha → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "19:25",
        "salida": 19.25,
        "recorrido": "Fortín → Esquina Lastra → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "20:25",
        "salida": 20.25,
        "recorrido": "B° La Cancha → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "21:00",
        "salida": 21,
        "recorrido": "B° La Cancha → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "21:25",
        "salida": 21.25,
        "recorrido": "B° La Cancha → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "22:25",
        "salida": 22.25,
        "recorrido": "B° La Cancha → Paraíso → Posse → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },

]
const horariosLvSMAl = [

    {
        "nombre": "05:20",
        "salida": 5.2,
        "recorrido": "Terminal → Catalinas Park → Autopista → Alderetes → Talar → B° La Cancha"
    },
    // {
    //     "nombre": "06:20",
    //     "salida": 6.2,
    //     "recorrido": "Terminal → Catalinas Park → Alternativa → Fonda → Colonia 4 (Luisiana) → Colonia 10 (Luisiana) → Colonia 4 (Florida) → Plaza Mayo → La Marta"
    // },
    {
        "nombre": "06:25",
        "salida": 6.25,
        "recorrido": "Terminal → Banda del Río Salí → Talar → Esquina Lastra → Fortín → Finca Mayo"
    },
    // {
    //     "nombre": "07:00",
    //     "salida": 7,
    //     "recorrido": "Terminal → Alternativa → Talar → B° La Cancha → Colonia 4 (Luisiana) → La Marta"
    // },
    {
        "nombre": "07:15",
        "salida": 7.15,
        "recorrido": "Terminal → Banda del Río Salí → Alderetes → Talar → Fonda → Colonia 4 (Luisiana)" 
    },
    {
        "nombre": "08:00",
        "salida": 8,
        "recorrido": "Terminal → Catalinas Park → Autopista → Alderetes → Cochuchal → Fonda → Esquina Lastra"
    },
    {
        "nombre": "08:35",
        "salida": 8.35,
        "recorrido": "Terminal → Banda del Río Salí → Alderetes → Talar → Esquina Lastra → Fortín"
    },
    {
        "nombre": "09:00",
        "salida": 9,
        "recorrido": "Terminal → Catalinas Park → Autopista → Talar → Colonia 4 (Luisiana) "
    },
    {
        "nombre": "09:45",
        "salida": 9.45,
        "recorrido": "Terminal → Banda del Río Salí → Alderetes → Talar → Esquina Lastra → Fortín"
    },
    {
        "nombre": "10:45",
        "salida": 10.45,
        "recorrido": "Terminal → Banda del Río Salí → Alderetes → Talar → Colonia 4 (Luisiana)",
        "recorrido2": "Terminal → Catalinas Park → Autopista → Alderetes → Talar → Esquina Lastra → Fortín",
    },  
    {
        "nombre": "11:15",
        "salida": 11.15,
        "recorrido": "Terminal → Catalinas Park → Autopista → Talar → B° La Cancha → Colonia 10 (Luisiana) → La Marta"
    },
    {
        "nombre": "11:40",
        "salida": 11.4,
        "recorrido": "Terminal → Banda del Río Salí → Alderetes → Cochuchal → Esquina Lastra → Finca Mayo"
    },
    {
        "nombre": "12:15",
        "salida": 12.15,
        "recorrido": "Terminal → Catalinas Park → Alternativa → Talar → B° La Cancha → Colonia 4 (Luisiana)"
    },
    {
        "nombre": "12:20",
        "salida": 12.2,
        "recorrido": "Terminal → Catalinas Park → Autopista → Talar → Colonia 4 (Luisiana)"
    },
    {
        "nombre": "12:45",
        "salida": 12.45,
        "recorrido": "Terminal → Banda del Río Salí → Alderetes → Talar → Esquina Lastra → Fortín → Colonia 3 (Florida)",
        // "recorrido2": "Terminal → Catalinas Park → Alternativa → Talar → B° La Cancha → Colonia 4 (Luisiana)"
    },
    {
        "nombre": "13:15",
        "salida": 13.15,
        "recorrido": "Terminal → Banda del Río Salí → Alderetes → Cochuchal → B° La Cancha → Colonia 4 (Luisiana)"
    },
    {
        "nombre": "13:30",
        "salida": 13.3,
        // "recorrido": "Terminal → Catalinas Park → Alternativa → Talar → B° La Cancha → Colonia 4 (Luisiana)",
        "recorrido":"Terminal → Catalinas Park → Autopista → Talar → B° La Cancha → Colonia 4 (Luisiana) → Finca Mayo → La Marta"
    },
    {
        "nombre": "14:00",
        "salida": 14,
        "recorrido": "Terminal → Banda del Río Salí → Alderetes → Talar → Fortín → B° La Cancha → Colonia 4 (Luisiana)"
    },
    {
        "nombre": "14:50",
        "salida": 14.5,
        "recorrido": "Terminal → Banda del Río Salí → Alderetes → Talar → Colonia 4 (Luisiana)",
        // "recorrido2": "Terminal → Comisaria 11 → Alternativa → Talar → Esquina Lastra → Fortín"
    },
    {
        "nombre": "15:50",
        "salida": 15.5,
        "recorrido": "Terminal → Comisaria 11 → Alternativa → Talar → Colonia 4 (Luisiana)",
        "recorrido2": "Terminal → Comisaria 11 → Autopista → Alderetes → Talar → Colonia 4 (Luisiana) → B° La Cancha → Colonia 3 (Florida)"
    },
    {
        "nombre": "16:50",
        "salida": 16.5,
        "recorrido": "Terminal → Banda del Río Salí → Alderetes → Cochuchal → Esquina Lastra → Fortín",
        // "recorrido2": "Terminal → Comisaria 11 → Alternativa → Talar → Colonia 4 (Luisiana)"
    },
    {
        "nombre": "17:40",
        "salida": 17.4,
        "recorrido": "Terminal → Comisaria 11 → Alternativa → Talar → B° La Cancha → Colonia 4 (Luisiana)"
    },
    {
        "nombre": "17:45",
        "salida": 17.45,
        // "recorrido": "Terminal → Comisaria 11 → Alternativa → Talar → Colonia 4 (Luisiana)",
        "recorrido" :"Terminal → Banda del Río Salí → Alderetes → Talar → B° La Cancha → Colonia 3 (Luisiana) → La Marta"
    },
    // {
    //     "nombre": "18:20",
    //     "salida": 18.2,
    //     "recorrido": "Terminal → Comisaria 11 → Alternativa → Talar → B° La Cancha → Colonia 4 (Luisiana)"
    // },
    {
        "nombre": "18:30",
        "salida": 18.3,
        "recorrido": "Terminal → Comisaria 11 → Alternativa → Talar → B° La Cancha → Colonia 4 (Luisiana)"
    },
    // {
    //     "nombre": "18:55",
    //     "salida": 18.55,
    //     "recorrido": "Terminal → Comisaria 11 → Alternativa → Talar → B° La Cancha → Colonia 4 (Luisiana)"
    // },
    {
        "nombre": "19:00",
        "salida": 19,
        "recorrido": "Terminal → Banda del Río Salí → Alderetes → Talar → Colonia 4 (Luisiana)"
    },
    // {
    //     "nombre": "19:40",
    //     "salida": 19.4,
    //     "recorrido": "Terminal → Comisaria 11 → Alternativa → Talar → B° La Cancha → Colonia 4 (Luisiana)"
    // },
    {
        "nombre": "19:45",
        "salida": 19.45,
        "recorrido": "Terminal → Banda del Río Salí → Alderetes → Talar → Esquina Lastra → Fortín → Finca Mayo",
        "recorrido2": "Terminal → Comisaria 11 → Alternativa → Talar → B° La Cancha → Colonia 4 (Luisiana)"
    },
    // {
    //     "nombre": "20:20",
    //     "salida": 20.2,
    //     "recorrido": "Terminal → Comisaria 11 → Alternativa → Talar → B° La Cancha → Colonia 4 (Luisiana)"
    // },
    {
        "nombre": "20:30",
        "salida": 20.3,
        "recorrido": "Terminal → Banda del Río Salí → Alderetes → Talar → Esquina Lastra → Fortín"
    },
    // {
    //     "nombre": "20:45",
    //     "salida": 20.45,
    //     "recorrido": "Banda del Río Salí (Chango Más) → Alderetes → Talar → Esquina Lastra → Fortín"
    // },
    {
        "nombre": "21:00",
        "salida": 21,
        "recorrido": "Terminal → Comisaria 11 → Autopista → Alderetes → Talar → Colonia 4 (Luisiana)"
    },
    {
        "nombre": "21:30",
        "salida": 21.30,
        "recorrido": "Terminal → Comisaria 11 → Autopista → Alderetes → Talar → Esquina Lastra → Fortín → Colonia 4 (Luisiana)"
    },
    // {
    //     "nombre": "22:00",
    //     "salida": 22,
    //     "recorrido": "Terminal → Comisaria 11 → Alternativa → Talar → B° La Cancha → Colonia 4 (Luisiana)"
    // },
    {
        "nombre": "22:30",
        "salida": 22.3,
        "recorrido": "Terminal → Comisaria 11 → Autopista → Alderetes → Talar → Esquina Lastra → Fortín" 
    },
    // {
    //     "nombre": "23:30",
    //     "salida": 23.30,
    //     "recorrido": "Terminal → Comisaria 11 → Autopista → Alderetes → Talar → Esquina Lastra → Fortín → Colonia 4 (Luisiana)"
    // }
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
        "recorrido": "Terminal → Banda del Río Salí → Alderetes → Talar → Esquina Lastra → Fortín → Finca Mayo"
    },
    {
        "nombre": "07:15",
        "salida": 7.15,
        "recorrido": "Terminal → Banda del Río Salí → Alderetes → Talar → B° La Cancha → Colonia 4 (Luisiana)"
    },
    {
        "nombre": "08:00",
        "salida": 8,
        "recorrido": "Terminal → Catalinas Park → Autopista → Alderetes → Cochuchal → B° La Cancha → Colonia 4 (Luisiana)"
    },
    {
        "nombre": "08:35",
        "salida": 8.35,
        "recorrido": "Terminal → Banda del Río Salí → Alderetes → Talar → Esquina Lastra → Fortín"
    },
    {
        "nombre": "09:45",
        "salida": 9.45,
        "recorrido": "Terminal → Banda del Río Salí → Alderetes → Talar → Esquina Lastra → Fortín"
    },
    {
        "nombre": "10:45",
        "salida": 10.45,
        "recorrido": "Terminal → Banda del Río Salí → Alderetes → Talar → Esquina Lastra → Fortín"
    },
    {
        "nombre": "11:40",
        "salida": 11.4,
        "recorrido": "Terminal → Banda del Río Salí → Alderetes → Cochuchal → Esquina Lastra → Fortín → Finca Mayo"
    },
    {
        "nombre": "12:20",
        "salida": 12.2,
        "recorrido": "Terminal → Catalinas Park → Autopista → Alderetes → Talar → B° La Cancha → Colonia 4 (Luisiana)"
    },
    // {
    //     "nombre": "13:15",
    //     "salida": 13.15,
    //     "recorrido": "Terminal → Catalinas Park → Alternativa → Talar → B° La Cancha → Colonia 4 (Luisiana)"
    // },
    {
        "nombre": "13:30",
        "salida": 13.3,
        "recorrido": "Terminal → Banda del Río Salí → Alderetes → Talar → Colonia 4 (Luisiana) → Finca Mayo"
    },
    {
        "nombre": "14:00",
        "salida": 14,
        "recorrido": "Terminal → Banda del Río Salí → Alderetes → Talar → Colonia 4 (Luisiana)"
    },
    {
        "nombre": "14:50",
        "salida": 14.5,
        "recorrido": "Terminal → Banda del Río Salí → Alderetes → Talar → Esquina Lastra → Fortín → Colonia 4 (Luisiana)"
    },
    {
        "nombre": "16:00",
        "salida": 16,
        "recorrido": "Terminal → Banda del Río Salí → Alderetes → Talar → Esquina Lastra → Fortín → Colonia 4 (Florida)"
    },
    {
        "nombre": "16:50",
        "salida": 16.5,
        "recorrido": "Terminal → Banda del Río Salí → Alderetes → Cochuchal → Esquina Lastra → Colonia 4 (Florida) → Fortín"
    },
    // {
    //     "nombre": "17:40",
    //     "salida": 17.4,
    //     "recorrido": "Terminal → Comisaria 11 → Autopista → Alderetes → Talar → B° La Ca → Colonia 4 (Luisiana)"
    // },
    {
        "nombre": "17:45",
        "salida": 17.45,
        "recorrido": "Terminal → Banda del Río Salí → Alderetes → Talar → B° La Cancha → Colonia 3 (Luisiana) → Finca Mayo → La Marta"
    },
    // {
    //     "nombre": "18:30",
    //     "salida": 18.3,
    //     "recorrido": "Terminal → Banda del Río Salí → Alderetes → Talar → B° La Cancha → Colonia 4 (Luisiana)"
    // },
    {
        "nombre": "19:00",
        "salida": 19,
        "recorrido": "Terminal → Banda del Río Salí → Alderetes → Talar → Colonia 4 (Luisiana)"
    },
    {
        "nombre": "19:45",
        "salida": 19.45,
        "recorrido": "Terminal → Banda del Río Salí → Alderetes → Talar → Finca Mayo"
    },
    // {
    //     "nombre": "20:20",
    //     "salida": 20.2,
    //     "recorrido": "Terminal → Comisaria 11 → Alternativa → Talar → B° La Cancha → Colonia 4 (Luisiana)"
    // },
    {
        "nombre": "20:30",
        "salida": 20.3,
        "recorrido": "Terminal → Banda del Río Salí → Alderetes → Talar → Esquina Lastra → Fortín"
    },
    {
        "nombre": "21:00",
        "salida": 21.00,
        "recorrido": "Terminal → Comisaria 11 → Autopista → Alderetes → Talar → B° La Cancha → Colonia 4 (Luisiana)"
    },
    {
        "nombre": "21:30",
        "salida": 21.30,
        "recorrido": "Terminal → Comisaria 11 → Autopista → Alderetes → Talar → Esquina Lastra → Fortín → Colonia 4 (Luisiana)"
    },
    // {
    //     "nombre": "22:00",
    //     "salida": 22,
    //     "recorrido": "Terminal → Comisaria 11 → Alternativa → Talar → B° La Cancha → Colonia 4 (Luisiana)"
    // },
    {
        "nombre": "22:30",
        "salida": 22.30,
        "recorrido": "Terminal → Comisaria 11 → Autopista → Alderetes → Talar → Esquina Lastra → Fortín → Colonia 4 (Luisiana)"
    }
]
const horariosDSMAl = [

    {
        "nombre": "06:40",
        "salida": 6.40,
        "recorrido": "Terminal → Banda del Río Salí → Alderetes → Talar → Finca Mayo"
    },
    {
        "nombre": "09:45",
        "salida": 9.45,
        "recorrido": "Terminal → Banda del Río Salí → Alderetes → Talar → Esquina Lastra → Fortín → Colonia 2 (Florida)"
    },
    {
        "nombre": "11:40",
        "salida": 11.40,
        "recorrido": "Terminal → Banda del Río Salí → Alderetes → Cochuchal → Finca Mayo"
    },
    {
        "nombre": "14:00",
        "salida": 14,
        "recorrido": "Terminal → Banda del Río Salí → Alderetes → Talar → Colonia 4 (Luisiana)"
    },
    {
        "nombre": "14:50",
        "salida": 14.5,
        "recorrido": "Terminal → Banda del Río Salí → Alderetes → Talar → Colonia 4 (Luisiana)"
    },
    {
        "nombre": "16:00",
        "salida": 16,
        "recorrido": "Terminal → Banda del Río Salí → Alderetes → Talar → Esquina Lastra → Fortín → Colonia 4 (Florida)"
    },
    { 
        "nombre": "16:50",
        "salida": 16.5,
        "recorrido": "Terminal → Banda del Río Salí → Alderetes → Talar → B° La Cancha"
    },
    {
        "nombre": "17:45",
        "salida": 17.45,
        "recorrido": "Terminal → Banda del Río Salí → Alderetes → Talar → Colonia 3 (Luisiana) → Finca Mayo"
    },
    // {
    //     "nombre": "18:30",
    //     "salida": 18.3,
    //     "recorrido": "Terminal → Banda del Río Salí → Alderetes → Talar → B° La Cancha → Colonia 4 (Luisiana)"
    // },
    {
        "nombre": "19:45",
        "salida": 19.45,
        "recorrido": "Terminal → Banda del Río Salí → Alderetes → Talar → Finca Mayo"
    },
    // {
    //     "nombre": "20:30",
    //     "salida": 20.3,
    //     "recorrido": "Terminal → Banda del Río Salí → Alderetes → Talar → Esquina Lastra → Fortín"
    // },
    {
        "nombre": "21:00",
        "salida": 21,
        "recorrido": "Terminal → Banda del Río Salí → Alderetes → Talar → B° La Cancha → Colonia 4 (Luisiana)"
    },
    {
        "nombre": "22:30",
        "salida": 22.3,
        "recorrido": "Terminal → Comisaria 11 → Autopista → Alderetes → Talar → Esquina Lastra → Fortín → B° La Cancha → Colonia 4 (Luisiana)"
    },

]
const horariosLvSMPo = [
    {
        "nombre": "00:30",
        "salida": 0.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha"
    },
    {
        "nombre": "06:00",
        "salida": 6,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha → Colonia 4 (luisiana)"
    },
    {
        "nombre": "06:40",
        "salida": 6.4,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha"
    },
    {
        "nombre": "07:00",
        "salida": 7,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → Esquina Lastra → Fortín"
    },
    {
        "nombre": "07:30",
        "salida": 7.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha"
    },
    {
        "nombre": "08:15",
        "salida": 8.15,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha"
    },
    {
        "nombre": "09:00",
        "salida": 9,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha"
    },
    {
        "nombre": "09:30",
        "salida": 9.30,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha"
    },
    {
        "nombre": "10:00",
        "salida": 10,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha"
    },
    {
      "nombre": "10:25",
      "salida": 10.25,
      "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha"
  },
    {
        "nombre": "10:30",
        "salida": 10.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha"
    },
    {
        "nombre": "11:00",
        "salida": 11,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha"
    },
    // {
    //     "nombre": "11:15",
    //     "salida": 11.15,
    //     "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → Esquina Lastra → Fortín",
    //     // "recorrido2": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha"
    // },
    {
        "nombre": "11:25",
        "salida": 11.25,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha",
        // "recorrido2": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha"
    },
    {
        "nombre": "11:45",
        "salida": 11.45,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha"
    },
    {
        "nombre": "12:00",
        "salida": 12,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha",
        // "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → Esquina Lastra → Fortín"
    },
    {
        "nombre": "12:30",
        "salida": 12.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha",
        // "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → Esquina Lastra → Fortín"
    },
    // {
    //     "nombre": "13:00",
    //     "salida": 13,
    //     "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha",
    //     // "recorrido2": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha"
    // },
    {
        "nombre": "13:25",
        "salida": 13.25,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha"
    },
    {
        "nombre": "13:30",
        "salida": 13.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Fila del medio → Posse → Paraíso → B° La Cancha",
        "recorrido2": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → Esquina Lastra"
    },
    {
        "nombre": "13:45",
        "salida": 13.45,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Fila del medio → Posse → Paraíso → Esquina Lastra → Fortín",
    },
    // {
    //     "nombre": "14:05",
    //     "salida": 14.05,
    //     "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha"
    // },
    // {
    //     "nombre": "14:15",
    //     "salida": 14.15,
    //     "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → Esquina Lastra → Fortín"
    // },
    {
        "nombre": "14:20",
        "salida": 14.2,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → Esquina Lastra"
    },
    {
        "nombre": "15:00",
        "salida": 15,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → Esquina Lastra → Fortín"
    },
    {
        "nombre": "16:00",
        "salida": 16,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha"
    },
    {
        "nombre": "17:00",
        "salida": 17,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha"
    },
    {
        "nombre": "17:30",
        "salida": 17.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → Esquina Lastra → Fortín",
        // "recorrido2" : "Esquina Llona → Posse → Paraíso → Florida"
    },
    // {
    //     "nombre": "17:50",
    //     "salida": 17.5,
    //     "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → Esquina Lastra → Fortín → B° La Cancha → Colonia 4 (Luisiana)"
    // },
    {
        "nombre": "18:00",
        "salida": 18,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha",
        // "recorrido2": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → Esquina Lastra → Fortín → B° La Cancha → Colonia 4 (Luisiana)"
    },
    {
        "nombre": "18:30",
        "salida": 18.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → Esquina Lastra → Fortín",
        "recorrido2": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha",
    },
    // {
    //     "nombre": "19:00",
    //     "salida": 19,
    //     "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha"
    // },
    {
        "nombre": "19:15",
        "salida": 19.1,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha → Colonia 4 (Luisiana)"
    },
    {
        "nombre": "19:30",
        "salida": 19.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha"
    },
    {
        "nombre": "20:00",
        "salida": 20,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha",
        // "recorrido2" : "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → Esquina Longo"
    },
    // {
    //     "nombre": "20:15",
    //     "salida": 20.15,
    //     "recorrido" : "Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → Esquina Longo"
    // },
    {
        "nombre": "20:30",
        "salida": 20.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha"
    },
    // {
    //     "nombre": "20:45",
    //     "salida": 20.45,
    //     "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha"
    // },
    {
        "nombre": "20:45",
        "salida": 20.45,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Posse → Paraíso → B° La Cancha"
    },
    {
        "nombre": "21:00",
        "salida": 21,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Fila del Medio → Bosque → Posse → Paraíso → B° La Cancha"
    },
    {
        "nombre": "21:30",
        "salida": 21.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha"
    },
    {
        "nombre": "22:00",
        "salida": 22,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha"
    },
    {
        "nombre": "22:30",
        "salida": 22.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha"
    },
    {
        "nombre": "23:30",
        "salida": 23.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → Esquina Lastra → Fortín → Fonda → Colonia 4 (Luisiana)"
    },
    {
        "nombre": "00:30",
        "salida": 24.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha"
    }
]
const horariosSSMPo = [
    {
        "nombre":"00:30",
        "salida":0.3,
        "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha"
    },
    {
        "nombre": "06:00",
        "salida": 6,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → Colonia 4 (Luisiana)"
    },
    {
        "nombre": "06:40",
        "salida": 6.1,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha"
    },
    {
        "nombre": "07:00",
        "salida": 7,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → Esquina Lastra → Fortín"
    },
    {
        "nombre": "07:30",
        "salida": 7.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha"
    },
    {
        "nombre": "08:15",
        "salida": 8.15,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha"
    },
    {
        "nombre": "09:00",
        "salida": 9,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha"
    },
    {
        "nombre": "09:30",
        "salida": 9.30,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha"
    },
    {
        "nombre": "10:00",
        "salida": 10,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha → B° La Cancha"
    },
    {
        "nombre": "10:30",
        "salida": 10.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha"
    },
    {
        "nombre": "11:00",
        "salida": 11,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha"
    },
    {
        "nombre": "11:45",
        "salida": 11.45,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha"
    },
    {
        "nombre": "12:30",
        "salida": 12.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha"
    },
    {
        "nombre": "13:00",
        "salida": 13,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha"
    },
    {
        "nombre": "13:45",
        "salida": 13.45,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → Esquina Lastra → Fortín"
    },
    {
        "nombre": "14:15",
        "salida": 14.15,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → Esquina Lastra"
    },
    {
        "nombre": "15:00",
        "salida": 15,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → Esquina Lastra → Fortín"
    },
    {
        "nombre": "16:00",
        "salida": 16,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha"
    },
    {
        "nombre": "17:00",
        "salida": 17,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha"
    },
    {
        "nombre": "17:30",
        "salida": 17.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → Esquina Lastra → Fortín"
    },
    {
        "nombre": "18:00",
        "salida": 18,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha"
    },
    {
        "nombre": "18:30",
        "salida": 18.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → Esquina Lastra → Fortín"
    },
    {
        "nombre": "19:10",
        "salida": 19.10,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → Colonia 4 (Luisiana)"
    },
    {
        "nombre": "19:30",
        "salida": 19.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha"
    },
    {
        "nombre": "20:00",
        "salida": 20,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha"
    },
    {
        "nombre": "20:30",
        "salida": 20.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha"
    },
    {
        "nombre": "21:00",
        "salida": 21,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Fila del medio → Paraíso → Colonia 4 (Luisiana)"
    },
    {
        "nombre": "21:30",
        "salida": 21.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha"
    },
    {
        "nombre": "22:00",
        "salida": 22,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha"
    },
    {
        "nombre": "22:30",
        "salida": 22.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha"
    },
    {
        "nombre": "23:30",
        "salida": 23.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → Esquina Lastra → Fortín → Fonda → Colonia 4 (Luisiana)"
    },
]
const horariosDSMPo = [
    {
        "nombre": "06:00",
        "salida": 6,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → Esquina Lastra → Fortín"
    },
    {
        "nombre": "07:00",
        "salida": 7,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → Esquina Lastra → Fortín"
    },
    {
        "nombre": "08:00",
        "salida": 8,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → Esquina Lastra → Fortín"
    },
    {
        "nombre": "09:00",
        "salida": 9,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha"
    },
    {
        "nombre": "10:00",
        "salida": 10,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha"
    },
    {
        "nombre": "11:00",
        "salida": 11,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha"
    },
    {
        "nombre": "12:00",
        "salida": 12,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → Esquina Lastra"
    },
    // {
    //     "nombre": "12:30",
    //     "salida": 12.3,
    //     "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → Esquina Lastra"
    // },
    {
        "nombre": "13:00",
        "salida": 13,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha"
    },
    {
        "nombre": "14:15",
        "salida": 14.15,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → Esquina Lastra"
    },
    {
        "nombre": "15:00",
        "salida": 15,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → Esquina Lastra → Fortín"
    },
    {
        "nombre": "16:00",
        "salida": 16,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha"
    },
    {
        "nombre": "17:00",
        "salida": 17,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha"
    },
    {
        "nombre": "18:00",
        "salida": 18,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha"
    },
    {
        "nombre": "18:30",
        "salida": 18.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → Esquina Lastra → Fortín"
    },
    // {
    //     "nombre": "19:00",
    //     "salida": 19,
    //     "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha"
    // },
    {
        "nombre": "19:30",
        "salida": 19.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha"
    },
    {
        "nombre": "20:00",
        "salida": 20,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha"
    },
    {
        "nombre": "20:30",
        "salida": 20.30,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha"
    },
    // {
    //     "nombre": "21:00",
    //     "salida": 21,
    //     "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha → Colonia 4 (Luisiana)"
    // },
    {
        "nombre": "21:30",
        "salida": 21.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha"
    },
    {
        "nombre": "22:00",
        "salida": 22,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha → Colonia 4 (Luisiana)"
    },
    {
        "nombre": "22:30",
        "salida": 22.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha"
    },
    {
        "nombre": "23:30",
        "salida": 23.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Posse → Paraíso → B° La Cancha"
    }
]
const posseTerminalLaV = [
    {
        "nombre": "05:05",
        "salida": 5.5,
        "recorrido": "Plaza de la pila → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    // {
    //     "nombre": "05:55",
    //     "salida": 5.55,
    //     "recorrido": "Dispensario → Fila de la orilla → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    // },
    {
        "nombre": "06:05",
        "salida": 6.05,
        "recorrido": "Dispensario → Fila de la orilla → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    // {
    //     "nombre": "06:08",
    //     "salida": 6.08,
    //     "recorrido": "Dispensario → Fila del medio → Cevil Pozo → Banda del Río Salí → Terminal"
    // },
    {
        "nombre": "06:30",
        "salida": 6.3,
        "recorrido": "Dispensario → Bosque → Fila del Medio → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    // {
    //     "nombre": "06:35",
    //     "salida": 6.35,
    //     "recorrido": "Bosque → Fila del medio → Cevil Pozo → Banda del Río Salí → Terminal",
    //     "recorrido2": "Dispensario → Fila del medio → Cevil Pozo → Banda del Río Salí → Terminal"
    // },
    {
        "nombre": "07:08",
        "salida": 7.08,
        "recorrido": "Dispensario → Fila de la orilla → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal",
        "recorrido2": "Bosque → Fila del Medio → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "07:40",
        "salida": 7.40,
        "recorrido": "Dispensario → Fila de la orilla → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    // {
    //     "nombre": "07:40",
    //     "salida": 7.4,
    //     "recorrido": "Bosque → Fila del Medio → Cevil Pozo → Banda del Río Salí → Terminal",
        
    // },
    {
        "nombre": "08:10",
        "salida": 8.1,
        "recorrido": "Bosque → Fila del medio → Cevil Pozo → Banda del Río Salí → Terminal",
        "recorrido2": "Dispensario → Fila de la orilla → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "08:35",
        "salida": 8.35,
        "recorrido": "Dispensario → Fila de la orilla → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "09:10",
        "salida": 9.1,
        "recorrido": "Dispensario → Fila del medio → Cevil Pozo → Banda del Río Salí → Terminal",
        "recorrido2": "Dispensario → Fila de la orilla → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "10:10",
        "salida": 10.1,
        "recorrido": "Dispensario → Fila del medio → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "11:10",
        "salida": 11.1,
        "recorrido": "Dispensario → Fila de la orilla → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    // {
    //     "nombre": "12:50",
    //     "salida": 12.5,
    //     "recorrido": "Dispensario → Fila de la orilla → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    // },
    // {
    //     "nombre": "13:00",
    //     "salida": 13,
    //     "recorrido": "Dispensario → Fila del Medio → Cevil Pozo → Banda del Río Salí → Terminal"
    // },
    {
        "nombre": "14:10",
        "salida": 14.1,
        "recorrido": "Dispensario → Fila de la orilla → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "14:40",
        "salida": 14.4,
        "recorrido": "Bosque → Fila del medio → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "15:10",
        "salida": 15.1,
        "recorrido": "Plaza → → Fila de la orilla → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "16:00",
        "salida": 16,
        "recorrido": "Dispensario → Fila de la orilla → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "16:10",
        "salida": 16.1,
        "recorrido": "Dispensario → Fila del Medio → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "17:10",
        "salida": 17.1,
        "recorrido": "Dispensario → Fila del medio → Cevil Pozo → Banda del Río Salí → Terminal",
        "recorrido2": "Plaza → Fila de la orilla → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    // {
    //     "nombre": "17:45",
    //     "salida": 17.45,
    //     "recorrido": "Dispensario → Fila del medio → Cevil Pozo → Banda del Río Salí → Terminal"
    // },
    {
        "nombre": "18:10",
        "salida": 18.1,
        "recorrido": "Dispensario → Fila del medio → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    // {
    //     "nombre": "19:10",
    //     "salida": 19.1,
    //     "recorrido": "Dispensario → Fila de la orilla → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    // },
]
const posseTerminalS = [
    {
        "nombre": "06:05",
        "salida": 6.05,
        "recorrido": "Dispensario → Fila del Medio → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "07:05",
        "salida": 7.05,
        "recorrido": "Bosque → Fila del Medio → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "08:05",
        "salida": 8.05,
        "recorrido": "Dispensario → Fila de la orilla → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "08:10",
        "salida": 8.1,
        "recorrido": "Bosque → Fila del Medio → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "09:10",
        "salida": 9.1,
        "recorrido": "Dispensario → Fila del Medio → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    // {
    //     "nombre": "10:10",
    //     "salida": 10.1,
    //     "recorrido": "Dispensario → Fila del Medio → Cevil Pozo → Banda del Río Salí → Terminal"
    // },
    {
        "nombre": "13:00",
        "salida": 13,
        "recorrido": "Dispensario → Fila del Medio → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    // {
    //     "nombre": "15:05",
    //     "salida": 13,
    //     "recorrido": "Dispensario → Fila de la orilla → Cevil Pozo → Banda del Río Salí → Terminal"
    // },
    {
        "nombre": "16:10",
        "salida": 16.1,
        "recorrido": "Dispensario → Fila del Medio → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    // {
    //     "nombre": "17:05",
    //     "salida": 17.05,
    //     "recorrido": "Dispensario → Fila de la orilla → Cevil Pozo → Banda del Río Salí → Terminal"
    // },
    {
        "nombre": "17:10",
        "salida": 17.1,
        "recorrido": "Dispensario → Fila del Medio → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "18:10",
        "salida": 18.10,
        "recorrido": "Dispensario → Fila dela orilla → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    }
    // {
    //     "nombre": "19:05",
    //     "salida": 19.05,
    //     "recorrido": "Dispensario → Fila dela orilla → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    // }
]
const posseTerminalD = [
    
    {
        "nombre": "06:08",
        "salida": 6.08,
        "recorrido": "Dispensario → Fila de la orilla → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },{
        "nombre": "09:10",
        "salida": 9.1,
        "recorrido": "Dispensario → Fila de la orilla → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "10:10",
        "salida": 10.1,
        "recorrido": "Dispensario → Fila de la orilla → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    // {
    //     "nombre": "11:10",
    //     "salida": 11.1,
    //     "recorrido": "Dispensario → Fila de la orilla → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    // },
    // {
    //     "nombre": "12:10",
    //     "salida": 12.1,
    //     "recorrido": "Dispensario → Fila de la orilla → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    // },
    // {
    //     "nombre": "15:05",
    //     "salida": 15.05,
    //     "recorrido": "Dispensario → Fila de la orilla → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    // },
    // {
    //     "nombre": "16:10",
    //     "salida": 16.1,
    //     "recorrido": "Plaza → Fila de la orilla → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    // },
    // {
    //     "nombre": "17:10",
    //     "salida": 17.1,
    //     "recorrido": "Dispensario → Fila de la orilla → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    // },
    // {
    //     "nombre": "18:05",
    //     "salida": 18.05,
    //     "recorrido": "Dispensario → Fila de la orilla → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    // }
];
const terminalPosseLaV = [
    {
        "nombre": "05:25",
        "salida": 5.25,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Fila de la orilla → Bosque"
    },
    // {
    //     "nombre": "08:10",
    //     "salida": 8.1,
    //     "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Fila de la orilla → → Dispensario"
    // },
    {
        "nombre": "08:30",
        "salida": 8.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Fila del medio → Bosque"
    },
       {
        "nombre": "10:25",
        "salida": 11.35,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Fila de la orilla → Dispensario"
    },
    {
        "nombre": "11:35",
        "salida": 11.35,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Fila de la orilla → Dispensario"
    },
    // {
    //     "nombre": "12:00",
    //     "salida": 12,
    //     "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Fila de la orilla → Dispensario"
    // },
    {
        "nombre": "12:15",
        "salida": 12.15,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Fila del medio → Bosque"
    },
       {
        "nombre": "12:25",
        "salida": 12.25,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Fila de la orilla → Dispensario"
    },
//     {
//       "nombre": "12:45",
//       "salida": 12.45,
//       "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Fila del medio → Bosque → Dispensario"
//   },
    {
        "nombre": "13:00",
        "salida": 13,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Fila del medio → Bosque",
        "recorrido2" :"Terminal → Banda del Río Salí → Cevil Pozo → Fila del medio → Dispensario"
    },
    // {
    //     "nombre": "13:30",
    //     "salida": 13.3,
    //     "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Fila del medio → Bosque → Dispensario → Paraiso → Florida"
    // },
    {
        "nombre": "14:05",
        "salida": 14.05,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Fila de la orilla → Dispensario"
    },
    {
        "nombre": "15:00",
        "salida": 15,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Fila del medio → Bosque → Dispensario"
    },
    {
        "nombre": "15:30",
        "salida": 15.3,
        "recorrido": " Terminal → Banda del Río Salí → Cevil Pozo → Fila del medio → Bosque"
    },
       {
        "nombre": "16:00",
        "salida": 16,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Fila de la orilla → Dispensario"
    },
    {
        "nombre": "16:30",
        "salida": 16.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Fila del medio → Bosque"
    },
    {
        "nombre": "17:20",
        "salida": 17.2,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Fila de la orilla → Bosque"
    },
    {
        "nombre": "17:55",
        "salida": 17.55,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Fila de la orilla → Dispensario"
    },
    {
        "nombre": "18:55",
        "salida": 18.55,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Fila del medio → Bosque"
    },
    {
        "nombre": "19:25",
        "salida": 19.25,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Fila de la orilla → Dispensario"
    },
    {
        "nombre": "20:00",
        "salida": 20,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Fila de la orilla → Dispensario"
    },
    {
      "nombre": "20:25",
      "salida": 20.25,
      "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Fila de la orilla → Dispensario"
  },
    {
        "nombre": "21:25",
        "salida": 21.2,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Fila de la orilla → Dispensario"
    },
    {
        "nombre": "21:50",
        "salida": 21.5,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Fila de la orilla → Dispensario"
    },
    // {
    //     "nombre": "22:20",
    //     "salida": 22.2,
    //     "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Fila del medio → Dispensario"
    // },
      {
        "nombre": "23:20",
        "salida": 23.2,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Fila de la orilla → Dispensario"
    },
]
const terminalPosseS = [
    {
        "nombre": "05:25",
        "salida": 5.25,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Fila de la orilla → Bosque → Dispensario"
    },
    {
        "nombre": "08:30",
        "salida": 8.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Fila del medio → Bosque"
    },
    {
        "nombre": "11:40",
        "salida": 11.4,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Fila de la orilla → Dispensario"
    },
    {
        "nombre": "12:15",
        "salida": 12.15,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Fila del medio → Bosque"
    },
    {
        "nombre": "13:30",
        "salida": 13.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Fila del medio → Bosque"
    },
    // {
    //     "nombre": "14:05",
    //     "salida": 14.05,
    //     "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Fila de la orilla → Dispensario"
    // },
    // {
    //     "nombre": "15:00",
    //     "salida": 15,
    //     "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Fila de la orilla → Dispensario"
    // },
    {
        "nombre": "15:30",
        "salida": 15.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Fila del medio → Bosque"
    },
    {
        "nombre": "16:30",
        "salida": 16.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Fila del medio → Bosque"
    },
    {
        "nombre": "17:30",
        "salida": 17.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Fila de la orilla → Dispensario"
    },
    // {
    //     "nombre": "19:00",
    //     "salida": 19,
    //     "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Fila de la orilla → Dispensario"
    // },
    {
        "nombre": "23:30",
        "salida": 23.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Fila de la orilla → Dispensario"
    },
]
const terminalPosseD = [
    // {
    //     "nombre": "19:50",
    //     "salida": 19.5,
    //     "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Fila de la orilla → Esquina Llona → Dispensario"
    // },
    {
        "nombre": "21:15",
        "salida": 21.15,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Fila de la orilla → Esquina Llona → Dispensario"
    },
    // {
    //     "nombre": "22:00",
    //     "salida": 22,
    //     "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Fila de la orilla → Esquina Llona → Dispensario"
    // },
    // {
    //     "nombre": "22:20",
    //     "salida": 22.2,
    //     "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Fila de la orilla → Esquina Llona → Dispensario"
    // }
];
const ralosTerminalLaV = [
    {
        "nombre": "04:40",
        "salida": 4.4,
        "recorrido": "Los Ralos → Villa Tercera → Esquina Llona → Plaza de la pila → Cevil Pozo → Banda del Río Salí → Terminal",
        // "recorrido2": "Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "05:30",
        "salida": 5.3,
        "recorrido": "Finca Mayo → B° Trigal → Los Ralos (06:08) → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal",
        "recorrido2": "Villa Tercera → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"

    },
    {
        "nombre": "05:30",
        "salida": 5.5,
        "recorrido": "Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    // {
    //     "nombre": "05:55",
    //     "salida": 5.55,
    //     "recorrido": "Lolita Sur → Cerco 2→ Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    // },
    {
        "nombre": "06:05",
        "salida": 6.05,
        "recorrido": "Villa Tercera → Cooperativa → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal",
        // "recorrido2" : "Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "06:15",
        "salida": 6.15,
        "recorrido": "Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "06:25",
        "salida": 6.25,
        "recorrido": "Alabama → Finca Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "06:40",
        "salida": 6.4,
        "recorrido": "Villa Tercera → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal",
        // "recorrido2": "Lolita Sur → Cerco 2 → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "06:50",
        "salida": 6.5,
        "recorrido": "Las Vias → B° Trigal → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal",
        "recorrido2": "Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    // {
    //     "nombre": "07:20",
    //     "salida": 7.2,
    //     "recorrido": "Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    // },
    {
        "nombre": "07:30",
        "salida": 7.3,
        "recorrido": "Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal",
        // "recorrido": "Lolita Sur → Lolita Norte → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    // {
    //     "nombre": "07:35",
    //     "salida": 7.35,
    //     "recorrido": "Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    // },
    // {
    //     "nombre": "07:50",
    //     "salida": 7.5,
    //     "recorrido": "La Marta → Finca Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    // },
    {
        "nombre": "08:10",
        "salida": 8.10,
        "recorrido": "Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal",
    },
    {
        "nombre": "08:15",
        "salida": 8.15,
        "recorrido": " La Marta → Finca Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal",
        "recorrido2": "Los Ralos → B° Trigal →Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    // {
    //     "nombre": "09:10",
    //     "salida": 9.1,
    //     "recorrido": "Finca Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    // },
    {
        "nombre": "09:25",
        "salida": 9.25,
        "recorrido": "Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "10:20",
        "salida": 10.2,
        "recorrido": "Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal",
        "recorrido2" : "Los Ralos → Villa Tercera → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    // {
    //     "nombre": "11:05",
    //     "salida": 11.05,
    //     "recorrido": "Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    // },
    {
        "nombre": "11:10",
        "salida": 11.1,
        "recorrido": "Alabama → Finca Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    // {
    //     "nombre": "12:00",
    //     "salida": 12,
    //     "recorrido": "Lolita Sur → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    // },
    {
        "nombre": "12:15",
        "salida": 12.15,
        "recorrido": "Finca Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "12:50",
        "salida": 12.5,
        "recorrido": "Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "13:00",
        "salida": 13,
        "recorrido": "Lolita Sur → Villa Tercera → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "13:10",
        "salida": 13.1,
        // "recorrido": "Finca Mayo → Los Ralos",
        "recorrido":"Alabama → Finca Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    // {
    //     "nombre": "14:05",
    //     "salida": 14.05,
    //     "recorrido": "Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    // },
    {
        "nombre": "14:10",
        "salida": 14.1,
        "recorrido": "Villa Tercera → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    // {
    //     "nombre": "15:00",
    //     "salida": 15,
    //     "recorrido": "Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    // },
    {
        "nombre": "15:00",
        "salida": 15,
        "recorrido": "Lolita Sur → Los Ralos → B° Trigal → Cevil Pozo → Banda del Río Salí → Terminal",
        "recorrido2": "Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "15:30",
        "salida": 15.3,
        "recorrido": "Los Ralos → Villa Tercera → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "16:10",
        "salida": 16.1,
        "recorrido": "Los Ralos → B° Trigal → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "16:25",
        "salida": 16.25,
        "recorrido": "Los Ralos → Villa Tercera → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "16:30",
        "salida": 16.3,
        "recorrido": "Finca Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "17:15",
        "salida": 17.15,
        "recorrido": "Alabama → Finca Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "17:20",
        "salida": 17.2,
        "recorrido": "Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    // {
    //     "nombre": "17:45",
    //     "salida": 17.45,
    //     "recorrido":"Alabama → Finca Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    // },
    {
        "nombre": "18:10",
        "salida": 18.1,
        "recorrido": "Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal",
        "recorrido2": "Los Ralos → Villa Tercera → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    // {
    //     "nombre": "18:20",
    //     "salida": 18.2,
    //     "recorrido": "Los Ralos → Villa Tercera → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    // },
    {
        "nombre": "19:00",
        "salida": 19,
        "recorrido": "Alabama → Finca Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    // {
    //     "nombre": "19:15",
    //     "salida": 19.15,
    //     "recorrido": "Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    // },
    {
        "nombre": "20:00",
        "salida": 20,
        "recorrido": "Lolita Sur → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    // {
    //     "nombre": "20:20",
    //     "salida": 20.2,
    //     "recorrido": "Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    // },
    {
        "nombre": "21:10",
        "salida": 21.1,
        "recorrido": "Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "21:30",
        "salida": 21.3,
        "recorrido": "Finca Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "22:20",
        "salida": 22.2,
        "recorrido": "Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    }
]
const ralosTerminalS = [
    {
        "nombre": "04:40",
        "salida": 4.4,
        "recorrido": "Los Ralos → Villa Tercera → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "05:25",
        "salida": 5.25,
        "recorrido": "Finca Mayo → B° Trilgal → Infiernillo (trasbordo)",
    },
    {
        "nombre": "05:30",
        "salida": 5.3,
        "recorrido": "Villa Tercera → Los Ralos (trasbordo)",
    },
    {
        "nombre": "05:55",
        "salida": 5.55,
        "recorrido": "Villa Tercera → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "06:25",
        "salida": 6.25,
        "recorrido": "Alabama → B° Trigal → Finca Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    // {
    //     "nombre": "06:48",
    //     "salida": 6.48,
    //     "recorrido": "Las Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    // },
    {
        "nombre": "06:50",
        "salida": 6.5,
        "recorrido": "Las Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "07:30",
        "salida": 7.3,
        "recorrido": "Lolita Sur → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal",
        "recorrido2": "Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "08:10",
        "salida": 8.1,
        "recorrido": "Alabama → Finca Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    // {
    //     "nombre": "08:25",
    //     "salida": 8.25,
    //     "recorrido": "Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    // },
    {
        "nombre": "09:25",
        "salida": 9.25,
        "recorrido": "Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal",
    },
    {
        "nombre": "09:30",
        "salida": 9.3,
        "recorrido": "Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal",
    },
    {
        "nombre": "10:20",
        "salida": 10.2,
        "recorrido": "Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal",
        "recorrido2": "Los Ralos → Villa Tercera → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "11:10",
        "salida": 11.1,
        "recorrido": "Alabama → Finca Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    // {
    //     "nombre": "12:00",
    //     "salida": 12,
    //     "recorrido": "Las Cejas → Lolita → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    // },
    {
        "nombre": "12:15",
        "salida": 12.15,
        "recorrido": "Finca Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "13:10",
        "salida": 13.1,
        "recorrido": "Alabama → Finca Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "14:10",
        "salida": 14.1,
        "recorrido": "Los Ralos → Villa Tercera → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "15:10",
        "salida": 15.1,
        "recorrido": "Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "15:20",
        "salida": 15.2,
        "recorrido": "Lolita → Los Ralos → Villa Tercera → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    // {
    //     "nombre": "16:20",
    //     "salida": 16.2,
    //     "recorrido": "Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    // },
    {
        "nombre": "16:30",
        "salida": 16.3,
        "recorrido": "Los Ralos → Villa Tercera → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "17:15",
        "salida": 17.15,
        "recorrido": "Alabama → Finca Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "17:20",
        "salida": 17.2,
        "recorrido": "Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "18:15",
        "salida": 18.15,
        "recorrido": "Los Ralos → Villa Tercera → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "19:00",
        "salida": 19,
        "recorrido": "Alabama → Finca Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    // {
    //     "nombre": "19:05",
    //     "salida": 19.05,
    //     "recorrido": "Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    // },
    {
        "nombre": "20:00",
        "salida": 20,
        "recorrido": "Lolita Sur → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "21:10",
        "salida": 21.1,
        "recorrido": "Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "21:30",
        "salida": 21.3,
        "recorrido": "Alabama → Finca Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "22:20",
        "salida": 22.2,
        "recorrido": "Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
]
const ralosTerminalD = [
    {
        "nombre": "05:00",
        "salida": 5,
        "recorrido": "Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "05:30",
        "salida": 5.3,
        "recorrido": "Villa Tercera → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "07:00",
        "salida": 7,
        "recorrido": "Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "08:10",
        "salida": 8.1,
        "recorrido": "Alabama → Finca Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre":"08:30",
        "salida":8.3,
        "recorrido":"Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "09:25",
        "salida": 9.25,
        "recorrido": "Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "10:30",
        "salida": 10.3,
        "recorrido": "Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal",
    },
    {
        "nombre": "11:10",
        "salida": 11.1,
        "recorrido": "Alabama → Finca Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "12:15",
        "salida": 12.15,
        "recorrido": "Cruce → Finca Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "12:30",
        "salida": 12.3,
        "recorrido": "Las Cejas → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "13:10",
        "salida": 13.1,
        "recorrido": "Alabama → Finca Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    // {
    //     "nombre": "13:20",
    //     "salida": 13.2,
    //     "recorrido": "Los Ralos → Esquina Llona → Parada 6 (Lujan)"
    // },
    {
        "nombre": "14:10",
        "salida": 14.1,
        "recorrido": "Los Ralos → Villa Tercera → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
        // "recorrido2": "Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    // {
    //     "nombre": "15:10",
    //     "salida": 15.1,
    //     "recorrido": "Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    // },
    {
        "nombre": "15:25",
        "salida": 15.25,
        "recorrido": "Los Ralos → Villa Tercera → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
        {
        "nombre": "16:20",
        "salida": 16.2,
        "recorrido": "Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "16:25",
        "salida": 16.25,
        "recorrido": "Los Ralos → Villa Tercera → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "17:15",
        "salida": 17.15,
        "recorrido": "Alabama → Finca Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal",
        "recorrido2": "Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "18:10",
        "salida": 18.1,
        "recorrido": "Los Ralos → Villa Tercera → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "19:00",
        "salida": 19,
        "recorrido": "Alabama → Finca Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    // {
    //     "nombre": "19:15",
    //     "salida": 19.15,
    //     "recorrido": "Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    // },
    {
        "nombre": "20:00",
        "salida": 20,
        "recorrido": "Lolita Sur → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "20:15",
        "salida": 20.15,
        "recorrido": "Las Cejas → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    

    {
        "nombre": "21:10",
        "salida": 21.1,
        "recorrido": "Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "21:30",
        "salida": 21.3,
        "recorrido": "Alabama → Finca Mayo → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "22:20",
        "salida": 22.2,
        "recorrido": "Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },

]
const terminalRalosLaV = [
    {
        "nombre": "06:00",
        "salida": 6,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
    },
    // {
    //     "nombre": "06:30",
    //     "salida": 6.3,
    //     "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Lolita Norte → Lolita Sur → Las Cejas"
    // },
    {
        "nombre": "07:00",
        "salida": 7,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Finca Mayo → La Marta"
    },
    {
        "nombre": "08:00",
        "salida": 8,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Finca Mayo"
    },
    {
        "nombre": "08:30",
        "salida": 8.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
    },
    {
        "nombre": "09:15",
        "salida": 9.15,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera"
    },
    {
        "nombre": "09:30",
        "salida": 9.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
    },
    // {
    //     "nombre": "09:55",
    //     "salida": 9.55,
    //     "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
    // },
    {
        "nombre": "10:00",
        "salida": 10,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Finca Mayo → Alabama"
    },
    // {
    //     "nombre": "10:30",
    //     "salida": 10.3,
    //     "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas"
    // },
    {
        "nombre": "10:40",
        "salida": 10.4,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos",
        // "recorrido2" : "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas"
    },
    {
        "nombre": "11:00",
        "salida": 11,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Finca Mayo → La Marta"
    },
    // {
    //     "nombre": "11:15",
    //     "salida": 11.15,
    //     "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Finca Mayo"
    // },
    // {
    //     "nombre": "11:35",
    //     "salida": 11.35,
    //     "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
    // },
    {
        "nombre": "11:40",
        "salida": 11.4,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera → Lolita Sur"
    },
    {
        "nombre":"12:00",
        "salida":12,
        "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera"
    },
    {
        "nombre": "12:10",
        "salida": 12.1,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Finca Mayo → Alabama",
        // "recorrido2": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Finca Mayo"
    },
    {
        "nombre": "12:30",
        "salida": 12.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera → B° Trigal"
    },
    {
        "nombre": "13:00",
        "salida": 13,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos",
        "recorrido2": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera"
    },
    {
        "nombre": "13:30",
        "salida": 13.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera → Lolita Sur",
    },
    {
        "nombre": "13:40",
        "salida": 13.4,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
    },
    {
        "nombre": "14:00",
        "salida": 14,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → B° Trigal"
    },
    {
        "nombre":"14:00",
        "salida":14,
        "recorrido":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera"
    },
    {
        "nombre": "14:20",
        "salida": 14.2,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos",
    },
    {
        "nombre": "14:30",
        "salida": 14.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera",
    },
    {
        "nombre": "15:00",
        "salida": 15,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Lolita → Los Ralos"
    },
    {
        "nombre": "15:15",
        "salida": 15.15,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera"
    },
    {
        "nombre": "15:30",
        "salida": 15.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Finca Mayo"
    },
    // {
    //     "nombre": "15:45",
    //     "salida": 15.45,
    //     "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas"
    // },
    {
        "nombre": "16:00",
        "salida": 16,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
    },
    {
        "nombre": "16:15",
        "salida": 16.15,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Finca Mayo → Alabama"
    },
    // {
    //     "nombre": "16:25",
    //     "salida": 16.25,
    //     "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
    // },
    {
        "nombre": "16:50",
        "salida": 16.5,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
    },
    {
        "nombre": "17:10",
        "salida": 17.1,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera"
    },
    {
        "nombre": "17:30",
        "salida": 17.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
    },
    {
        "nombre": "17:50",
        "salida": 17.5,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera"
    },
    {
        "nombre": "18:00",
        "salida": 18,
        // "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos",
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Finca Mayo → Alabama"
    },
    {
        "nombre": "18:30",
        "salida": 18.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera",
        // "recorrido2": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas"
    },
    {
        "nombre": "19:00",
        "salida": 19,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos",
        "recorrido2": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Lolita Sur"
    },
    {
        "nombre": "19:30",
        "salida": 19.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera",
        // "recorrido2":"Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
    },
    {
        "nombre": "19:55",
        "salida": 19.55,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
    },
    {
        "nombre": "20:20",
        "salida": 20.2,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera"
    },
    {
        "nombre": "20:30",
        "salida": 20.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Finca Mayo → B° Trigal → Alabama"
    },
    {
        "nombre": "21:00",
        "salida": 21,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → B° Trigal"
    },
    // {
    //     "nombre": "21:15",
    //     "salida": 21.15,
    //     "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera"
    // },
    {
        "nombre": "21:30",
        "salida": 21.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera"
    },
    {
        "nombre": "22:00",
        "salida": 22,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
    },
    {
        "nombre": "22:30",
        "salida": 22.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera → B° Trigal"
    },
    {
        "nombre": "23:30",
        "salida": 23.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera → B° Trigal"
    }
]
const terminalRalosS = [
    {
        "nombre": "06.00",
        "salida": 6,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos",
        "recorrido2": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas → 7 de Abril"
    },
    {
        "nombre": "06.30",
        "salida": 6.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas"
    },
    {
        "nombre": "07:00",
        "salida": 7,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Finca Mayo → Alabama"
    },
    {
        "nombre": "07:50",
        "salida": 7.5,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
    },
    {
        "nombre": "08:30",
        "salida": 8.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
    },
    {
        "nombre": "09:30",
        "salida": 9.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
    },
    {
        "nombre": "10:00",
        "salida": 10,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Finca Mayo → Alabama"
    },
    {
        "nombre": "10:40",
        "salida": 10.4,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Lolita → Las Cejas"
    },
    {
        "nombre": "11:00",
        "salida": 11,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Finca Mayo → Cruce"
    },
    {
        "nombre": "11:50",
        "salida": 11.5,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera"
    },
    {
        "nombre": "12:10",
        "salida": 12.1,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Finca Mayo → Alabama"
    },
    {
        "nombre": "12:30",
        "salida": 12.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera"
    },
    {
        "nombre": "13:00",
        "salida": 13,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera"
    },
    // {
    //     "nombre": "13:20",
    //     "salida": 13.2,
    //     "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
    // },
    {
        "nombre": "13:30",
        "salida": 13.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera → Lolita"
    },
    {
        "nombre": "14:00",
        "salida": 14,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Lolita Sur"
    },
    {
        "nombre": "14:30",
        "salida": 14.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera → Las Cejas",
    },
    {
        "nombre": "15:15",
        "salida": 15.15,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera"
    },
    {
        "nombre": "15:30",
        "salida": 15.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Finca Mayo",
    },
    // {
    //     "nombre": "16:00",
    //     "salida": 16,
    //     "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos",
    // },
    {
        "nombre": "16:15",
        "salida": 16.15,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Finca Mayo → Alabama",
    },
    // {
    //     "nombre": "17:00",
    //     "salida": 17,
    //     "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
    // },
    {
        "nombre": "17:10",
        "salida": 17.1,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera",
    },
    {
        "nombre": "18:00",
        "salida": 18,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Finca Mayo → Alabama",
        "recorrido2": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
    },
    {
        "nombre": "18:30",
        "salida": 18.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas"
    },
    {
        "nombre": "19:00",
        "salida": 19,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Lolita Sur"
        // "recorrido2": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
    },
    {
        "nombre": "19:30",
        "salida": 19.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera"
    },
    {
        "nombre": "20:00",
        "salida": 20,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera → Las Cejas",
    },
    {
        "nombre": "20:20",
        "salida": 20.2,
        // "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas",
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
    },
    {
        "nombre": "20:30",
        "salida": 20.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Finca Mayo → Alabama",
        // "recorrido2": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
    },
    {
        "nombre": "21:00",
        "salida": 21,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos",
    },
    {
        "nombre": "21:30",
        "salida": 21.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera",
    },
    {
        "nombre": "22:00",
        "salida": 22,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos",
    },
    {
        "nombre": "22:30",
        "salida": 22.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera",
    },
    {
        "nombre": "23:30",
        "salida": 23.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera",
    }
]
const terminalRalosD = [
    {
        "nombre": "06.00",
        "salida": 6,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
    },
    // {
    //     "nombre": "06.30",
    //     "salida": 6.3,
    //     "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas"
    // },
    {
        "nombre": "07:00",
        "salida": 7,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Finca Mayo → Alabama"
    },
    {
        "nombre": "08:30",
        "salida": 8.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
    },
    {
        "nombre": "09:30",
        "salida": 9.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
    },
    {
        "nombre": "10:00",
        "salida": 10,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Finca Mayo → Alabama"
    },
    // {
    //     "nombre": "10:30",
    //     "salida": 10.3,
    //     "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Lolita → Las Cejas"
    // },
    {
        "nombre": "11:00",
        "salida": 11,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Finca Mayo → Cruce"
    },
    {
        "nombre": "12:10",
        "salida": 12.1,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Finca Mayo → Alabama"
    },
    {
        "nombre": "13:00",
        "salida": 13,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera"
    },
    {
        "nombre": "14:00",
        "salida": 14,
        // "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos",
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas"
    },
    {
        "nombre": "14:30",
        "salida": 14.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera"
    },
    // {
    //     "nombre": "15:00",
    //     "salida": 15,
    //     "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas → 7 de Abril"
    // },
    // {
    //     "nombre": "15:30",
    //     "salida": 15.3,
    //     "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
    // },
    {
        "nombre": "16:15",
        "salida": 16.15,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Finca Mayo → Alabama",
    },
    {
        "nombre": "17:10",
        "salida": 17.1,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera"
    },
    {
        "nombre": "18:00",
        "salida": 18,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Finca Mayo → Alabama",
        // "recorrido2": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
    },
    // {
    //     "nombre": "18:25",
    //     "salida": 18.25,
    //     "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
    // },
    // {
    //     "nombre": "18:30",
    //     "salida": 18.3,
    //     "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas",
    //     // "recorrido2": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
    // },
    {
        "nombre": "19:00",
        "salida": 19,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Lolita Sur"
    },
    // {
    //     "nombre": "19:30",
    //     "salida": 19.3,
    //     "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Cruz Alta"
    //     // "recorrido2": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
        
    // },
    // {
    //     "nombre": "20:00",
    //     "salida": 20,
    //     // "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos",
    //     "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Cruz Alta"
    // },
    {
        "nombre": "20:30",
        "salida": 20.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Finca Mayo"
    },
    // {
    //     "nombre": "21:00",
    //     "salida": 21,
    //     "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
    // },
    {
        "nombre": "21:30",
        "salida": 21.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera"
    },
    // {
    //     "nombre": "22:00",
    //     "salida": 22,
    //     "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos"
    // },
    {
        "nombre": "22:30",
        "salida": 22.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera"
    },
    {
        "nombre": "23:30",
        "salida": 23.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Villa Tercera",
    }
]
const ralosCruzAltaTerminalLaV = [
    {
        "nombre": "05:32",
        "salida": 5.32,
        "recorrido": "Los Ralos → Cruz Alta → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    // {
    //     "nombre": "06:05",
    //     "salida": 6.05,
    //     "recorrido": "Los Ralos → Cruz Alta → Delfin Gallo → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    // },
    {
        "nombre": "07:20",
        "salida": 7.2,
        "recorrido": "Los Ralos → Cruz Alta → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    // {
    //     "nombre":"07:50",
    //     "salida":7.5,
    //     "recorrido":"Britos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    // },
    {
        "nombre": "08:10",
        "salida": 8.1,
        "recorrido": "Los Ralos → Cruz Alta → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "11:50",
        "salida": 11.5,
        "recorrido": "Los Ralos → Cruz Alta → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "14:15",
        "salida": 14.15,
        "recorrido": "Los Ralos → Cruz Alta → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "18:30",
        "salida": 18.3,
        "recorrido": "Colonia 9 → Los Ralos → Cruz Alta → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },

]
const ralosCruzAltaTerminalS = [
    {
        "nombre": "05:30",
        "salida": 5.3,
        "recorrido": "Los Ralos → Cruz Alta → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "07:15",
        "salida": 7.15,
        "recorrido": "Los Ralos → Cruz Alta → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    // {
    //     "nombre": "08:30",
    //     "salida": 8.3,
    //     "recorrido": "Los Ralos → Cruz Alta → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    // },
    {
        "nombre": "11:50",
        "salida": 11.5,
        "recorrido": "Los Ralos → Cruz Alta → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "14:15",
        "salida": 14.15,
        "recorrido": "Los Ralos → Cruz Alta → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    }
]
const ralosCruzAltaTerminalD = []

const terminalCruzAltaRalosLaV = [
    {
        "nombre": "07:00",
        "salida": 7,
        "recorrido": "Terminal → Banda del Río Salí → Esquina Llona → Cevil Pozo → Cruz Alta → Los Ralos"
    },
    {
        "nombre": "10:45",
        "salida": 10.45,
        "recorrido": "Terminal → Banda del Río Salí → Esquina Llona → Cevil Pozo → Cruz Alta → Los Ralos"
    },
    // {
    //     "nombre": "12:00",
    //     "salida": 12,
    //     "recorrido": "Terminal → Banda del Río Salí → Esquina Llona → Cevil Pozo → Cruz Alta → Los Ralos"
    // },
    {
        "nombre": "13:15",
        "salida": 13.15,
        "recorrido": "Terminal → Banda del Río Salí → Esquina Llona → Cevil Pozo → Cruz Alta → Los Ralos"
    },
    {
        "nombre": "17:30",
        "salida": 17.3,
        "recorrido": "Terminal → Banda del Río Salí → Esquina Llona → Cevil Pozo → Cruz Alta → Colonia 9"
    },
    {
        "nombre": "20:00",
        "salida": 20,
        "recorrido": "Terminal → Banda del Río Salí → Esquina Llona → Cevil Pozo → Cruz Alta"
    },
    
]
const terminalCruzAltaRalosS = [
    {
        "nombre": "10:45",
        "salida": 10.45,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona  → Cruz Alta → Los Ralos"
    },
    {
        "nombre": "13:15",
        "salida": 13.15,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona  → Cruz Alta → Los Ralos"
    },
    {
        "nombre": "19:30",
        "salida": 19.30,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona  → Cruz Alta → Los Ralos"
    }
];
const terminalCruzAltaRalosD = [
    {
        "nombre": "20:00",
        "valor": 20,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Los Ralos → Cruz Alta"
    }
]
const sieteDeAbrilTerminalLaV = [
    {
        "nombre": "04:50",
        "salida": 4.5,
        "recorrido": "7 de Abril → Las Cejas (06:20) → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    // {
    //     "nombre": "11:30",
    //     "salida": 11.3,
    //     "recorrido": "7 de Abril → Las Cejas → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    // },
    {
        "nombre": "15:45",
        "salida": 15.45,
        "recorrido": "7 de Abril → Las Cejas → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "16:20",
        "salida": 16.2,
        "recorrido": "7 de Abril → Las Cejas → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    }
]
const sieteDeAbrilTerminalS = [
    {
        "nombre": "06:00",
        "salida": 6,
        "recorrido": "7 de Abril → Las Cejas (07:50) → Los Ralos (08:20) → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    }
]
const sieteDeAbrilTerminalD = [
    {
        "nombre": "17:30",
        "salida": 17.3,
        "recorrido": "7 de Abril → Las Cejas → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    }
]
const terminalSieteDeAbrilLaV = [
    // {
    //     "nombre": "06:15",
    //     "salida": 6.15,
    //     "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Las Cejas → 7 de Abril"
    // },
    // {
    //     "nombre": "12:45",
    //     "salida": 12.3,
    //     "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Las Cejas → 7 de Abril"
    // },
    {
        "nombre": "15:45",
        "salida": 15.45,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Las Cejas → 7 de Abril"
    }
]
const terminalSieteDeAbrilS = [
    {
        "nombre": "15:45",
        "salida": 15.45,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → 7 de Abril"
    }
]
const terminalSieteDeAbrilD = [
    {
        "nombre": "15:30",
        "salida": 15,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos →Las Cejas → 7 de Abril"
    }
    // {
    //     "nombre": "18:30",
    //     "salida": 18.3,
    //     "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Las Cejas → 7 de Abril"
    // },
    // {
    //     "nombre": "20:30",
    //     "salida": 20.3,
    //     "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Las Cejas → 7 de Abril"
    // }
]
const lasCejasTerminalLaV = [
    // {
    //     "nombre": "05:00",
    //     "salida": 5,
    //     "recorrido": "B° Matienzo → Las Cejas → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    // },
    {
        "nombre": "05:30",
        "salida": 5.3,
        "recorrido": "Las Cejas → Lolita Sur → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "06:35",
        "salida": 6.35,
        "recorrido": "Las Cejas → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "07:50",
        "salida": 7.5,
        "recorrido": "Las Cejas → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    // {
    //     "nombre": "08:00",
    //     "salida": 8,
    //     "recorrido": "Garmendia → Las Cejas (09:00) → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    // },
    {
        "nombre": "11:50",
        "salida": 11.5,
        "recorrido": "Las Cejas → Lolita Sur → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    // {
    //     "nombre": "13:20",
    //     "salida": 13.2,
    //     "recorrido": "Las Cejas → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    // },
    // {
    //     "nombre": "15:40",
    //     "salida": 15.4,
    //     "recorrido": "Las Cejas → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    // },
    // {
    //     "nombre": "18:20",
    //     "salida": 18.2,
    //     "recorrido": "Las Cejas → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    // },
    {
        "nombre": "19:50",
        "salida": 19.5,
        "recorrido": "Las Cejas → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    }
]
const lasCejasTerminalS = [
    {
        "nombre": "06:25",
        "salida": 6.25,
        "recorrido": "Las Cejas → Los Ralos (Trasbordo)"
    },
    {
        "nombre": "07:50",
        "salida": 7.5,
        "recorrido": "Las Cejas → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "12:00",
        "salida": 12,
        "recorrido": "Las Cejas → Lolita Sur → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "15:50",
        "salida": 15.5,
        "recorrido": "Las Cejas → Los Ralos (16:20) → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "19:50",
        "salida": 19.5,
        "recorrido": "Las Cejas → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
]
const lasCejasTerminalD = [
    {
        "nombre": "07:55",
        "salida": 7.55,
        "recorrido": "Las Cejas → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "12:00",
        "salida": 12,
        "recorrido": "Las Cejas → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    {
        "nombre": "15:50",
        "salida": 15.5,
        "recorrido": "Las Cejas → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
    // {
    //     "nombre": "18:00",
    //     "salida": 18,
    //     "recorrido": "7 de Abril → Las Cejas → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    // },
    {
        "nombre": "19:50",
        "salida": 19.5,
        "recorrido": "Las Cejas → Los Ralos → Esquina Llona → Cevil Pozo → Banda del Río Salí → Terminal"
    },
]
const terminalLasCejasLaV = [
    // {
    //     "nombre": "06:15",
    //     "salida": 6.15,
    //     "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Lolita → Las Cejas → 7 de Abril"
    // },
        {
        "nombre": "06:30",
        "salida": 6.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Lolita Sur → Las Cejas"
    },
    {
        "nombre": "10:40",
        "salida": 10.4,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas"
    },
    // {
    //     "nombre": "11:00",
    //     "salida": 11,
    //     "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas → Piedrabuena"
    // },
    {
        "nombre": "12:40",
        "salida": 12.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas",
        // "recorrido2": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas → 7 de Abril"
    },
    // {
    //     "nombre": "14:30",
    //     "salida": 14.3,
    //     "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas"
    // },
    // {
    //     "nombre": "15:45",
    //     "salida": 15.45,
    //     "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas → 7 de Abril"
    // },
    // {
    //     "nombre": "17:00",
    //     "salida": 17,
    //     "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas → Pozo Hondo"
    // },
    {
        "nombre": "18:30",
        "salida": 18.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas"
    },
    {
        "nombre": "20:00",
        "salida": 20,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas"
    },
//     {
//         "nombre": "22:00",
//         "salida": 22,
//         "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas"
//     },
]
const terminalLasCejasS = [
    {
        "nombre": "06:30",
        "salida": 6.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas"
    },
    {
        "nombre": "10:40",
        "salida": 10.4,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Lolita Sur → Las Cejas"
    },
    {
        "nombre": "14:30",
        "salida": 14.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Villa Tercera → Los Ralos → Las Cejas"
    },
    // {
    //     "nombre": "15:45",
    //     "salida": 15.45,
    //     "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas → 7 de Abril"
    // },
    {
        "nombre": "18:30",
        "salida": 18.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas"
    },
    {
        "nombre": "20:00",
        "salida": 20,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas"
    },
]
const terminalLasCejasD = [
    {
        "nombre": "06:30",
        "salida": 6.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas"
    },
    {
        "nombre": "10:30",
        "salida": 10.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas"
    },
    // {
    //     "nombre": "14:00",
    //     "salida": 15,
    //     "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas"
    // },
    // {
    //     "nombre": "15:00",
    //     "salida": 15,
    //     "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Las Cejas → 7 de Abril"
    // },
    {
            "nombre": "15:30",
            "salida": 15,
            "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas → 7 de Abril"
        },
    {
        "nombre": "18:30",
        "salida": 18.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas"
    },
    {
        "nombre": "20:30",
        "salida": 20.3,
        "recorrido": "Terminal → Banda del Río Salí → Cevil Pozo → Esquina Llona → Los Ralos → Las Cejas"
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
