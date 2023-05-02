// Grilla horaria

const horariosLvFloAl = [

    {
        "nombre": "04:40",
        "salida": 4.4,
        "recorrido": "Fortín → Esquina Lastra → Florida → Talar → Alderetes → Banda R.S. → Terminal"
    },
    {
        "nombre": "05:35",
        "salida": 5.35,
        "recorrido": "Fortín → Esquina Lastra → Florida → Talar → Alternativa → Terminal"
    },
    {
        "nombre": "06:10",
        "salida": 6.1,
        "recorrido": "Fortín → Esquina Lastra → Florida → Talar → Alderetes → Banda R.S. → Terminal",
        "recorrido2": "Colonia 10 → Colonia 4 → B° La Cancha → Cochuchal → Alderetes → Autopista → Terminal"
    },
    {
        "nombre": "06:20",
        "salida": 6.2,
        "recorrido": "Colonia 5 → Fortín → Esquina Lastra → Fonda → B° La Cancha → Talar → Alternativa → Terminal"
    },
    {
        "nombre": "06:50",
        "salida": 6.5,
        "recorrido": "Colonia 4 → Fonda → Talar → Alternativa → Terminal"
    },
    {
        "nombre": "07:20",
        "salida": 7.2,
        "recorrido": "Colonia 4 → B° La Cancha → Talar → Alternativa → Terminal",
        "recorrido2": "Fortín → Esquina Lastra → Florida → Talar → Cochuchal → Alderetes → Banda R.S. → Terminal"
    },
    {
        "nombre": "07:40",
        "salida": 7.4,
        "recorrido": "Finca Mayo → Fortín → Esquina Lastra → Florida → Cochuchal → Alderetes → Banda R.S. → Terminal"
    },
    {
        "nombre": "07:50",
        "salida": 7.5,
        "recorrido": "Colonia 4 → Fonda → Talar → Alternativa → Terminal",
        "recorrido2": "Colonia 4 → B° La Cancha → Talar → Alderetes → Autopista → Terminal"
    },
    {
        "nombre": "08:45",
        "salida": 8.45,
        "recorrido": "Colonia 4 → B° La Cancha → Cochuchal → Alderetes → Banda R.S. → Terminal",
        "recorrido2": "Colonia 4 → B° La Cancha → Talar → Alternativa → Terminal"
    },
    {
        "nombre": "09:20",
        "salida": 9.2,
        "recorrido": "Fortín → Esquina Lastra → Florida → Talar → Alderetes → Banda R.S. → Terminal"
    },
    {
        "nombre": "09:50",
        "salida": 9.5,
        "recorrido": "Colonia 4 → B° La Cancha → Talar → Alderetes → Autopista → Terminal"
    },
    {
        "nombre": "10:30",
        "salida": 10.3,
        "recorrido": "Fortín → Esquina Lastra → Florida → Talar → Alderetes → Banda R.S. → Terminal"

    },
    {
        "nombre": "11:40",
        "salida": 11.40,
        "recorrido": "Fortín → Esquina Lastra → Florida → Talar → Alderetes → Banda R.S. → Terminal"
    },
    {
        "nombre": "12:20",
        "salida": 12.2,
        "recorrido": "Fortín → Colonia 4 → B° La Cancha → Talar → Alderetes → Autopista → Terminal"
    },
    {
        "nombre": "12:30",
        "salida": 12.3,
        "recorrido": "Los Perez → Colonia 4 → B° La Cancha → Talar → Alternativa → Terminal"
    },
    {
        "nombre": "13:15",
        "salida": 13.15,
        "recorrido": "Colonia 4 → B° La Cancha → Talar → Alderetes → Banda R.S. → Terminal"
    },
    {
        "nombre": "13:50",
        "salida": 13.5,
        "recorrido": "B° La Cancha → Cochuchal → Alderetes → Banda R.S. → Terminal",
    },
    {
        "nombre": "14:45",
        "salida": 14.45,
        "recorrido": "Colonia 4 → B° La Cancha → Talar → Alderetes → Alternativa → Terminal",
        "recorrido2": "Colonia 4 → B° La Cancha → Talar → Alderetes → Banda R.S. → Terminal"
    },
    {
        "nombre": "15:47",
        "salida": 15.47,
        "recorrido": "Fortín → Esquina Lastra → Florida → Talar → Alternativa → Terminal"
    },
    {
        "nombre": "16:20",
        "salida": 16.2,
        "recorrido": "La Marta → Colonia 4 → B° La Cancha → Talar → Alternativa → Terminal"
    },
    {
        "nombre": "16:50",
        "salida": 16.5,
        "recorrido": "Colonia 4 → B° La Cancha → Talar → Alderetes → Banda R.S. → Terminal"
    },
    {
        "nombre": "17:35",
        "salida": 17.35,
        "recorrido": "Colonia 4 → B° La Cancha → Talar → Alternativa → Terminal"
    },
    {
        "nombre": "17:50",
        "salida": 17.5,
        "recorrido": "Fortín → Esquina Lastra → Florida → Talar → Alderetes → Banda R.S. → Terminal"
    },
    {
        "nombre": "18:10",
        "salida": 18.1,
        "recorrido": "Colonia 4 → B° La Cancha → Talar → Alternativa → Terminal"
    },
    {
        "nombre": "18:30",
        "salida": 18.3,
        "recorrido": "Fortín → Esquina Lastra → Florida → Talar → Alderetes → Banda R.S. → Terminal"
    },
    {
        "nombre": "19:00",
        "salida": 19,
        "recorrido": "La Marta → Colonia 3 → B° La Cancha → Talar → Alderetes → Banda R.S. → Terminal"
    },
    {
        "nombre": "21:05",
        "salida": 21.15,
        "recorrido": "Colonia 4 → B° La Cancha → Talar → Alderetes → Autopista → Terminal"
    }

]
const horariosSFloAl = [
    {
        "nombre": "04:40",
        "salida": 4.4,
        "recorrido": "Fortín → Esquina Lastra → Fonda → B° La Cancha → Florida → Talar → Alderetes → Banda R.S. → Terminal"

    },
    {
        "nombre": "05:45",
        "salida": 5.45,
        "recorrido": "Fortín → Esquina Lastra → Fonda → B° La Cancha → Florida → Talar → Alderetes → Autopista → Terminal"
    },
    {
        "nombre": "06:10",
        "salida": 6.10,
        "recorrido": "Colonia 10 → B° La Cancha → Cochuchal → Alderetes → Autopista → Terminal"
    },
    {
        "nombre": "06:25",
        "salida": 6.25,
        "recorrido": "Colonia 5 Florida → Fortín → (Trasbordo)"
    },
    {
        "nombre": "06:50",
        "salida": 6.5,
        "recorrido": "Colonia 4 → B° La Cancha → Talar → Alternativa → Terminal"
    },
    {
        "nombre": "07:18",
        "salida": 7.18,
        "recorrido": "Colonia 4 → B° La Cancha → Talar → Alderetes → Autopista → Terminal"
    },
    {
        "nombre": "07:40",
        "salida": 7.4,
        "recorrido": "Mayo → Colonia 5/4/3/2 → Fortín → Esquina Lastra → Florida → Talar → Alderetes → Banda R.S. → Terminal"
    },
    {
        "nombre": "07:50",
        "salida": 7.5,
        "recorrido": "Colonia 4 → B° La Cancha → Talar → Alternativa → Terminal"
    },
    {
        "nombre": "08:45",
        "salida": 8.45,
        "recorrido": "Colonia 4 → B° La Cancha → Talar → Alderetes → Banda R.S. → Terminal"
    },
    {
        "nombre": "09:20",
        "salida": 9.2,
        "recorrido": "Fortín → Esquina Lastra → Florida → Talar → Alderetes → Banda R.S. → Terminal"
    },
    {
        "nombre": "10:30",
        "salida": 10.30,
        "recorrido": "Fortín → Esquina Lastra → Florida → Talar → Alderetes → Banda R.S. → Terminal"
    },
    {
        "nombre": "11:40",
        "salida": 11.40,
        "recorrido": "Fortín → Esquina Lastra → Florida → Talar → Alderetes → Banda R.S. → Terminal"

    },
    {
        "nombre": "12:40",
        "salida": 12.4,
        "recorrido": "Mayo → Colonia 5/4/3/2 → Fortín → Esquina Lastra → Florida → Talar → Alderetes → Banda R.S. → Terminal"
    },
    {
        "nombre": "13:15",
        "salida": 13.15,
        "recorrido": "Colonia 4 → B° La Cancha → Talar → Alderetes → Autopista → Terminal"
    },
    {
        "nombre": "14:50",
        "salida": 14.5,
        "recorrido": "B° La Cancha → Talar → Alderetes → Banda R.S. → Terminal"
    },
    {
        "nombre": "15:50",
        "salida": 15.5,
        "recorrido": "Colonia 4 → B° La Cancha → Talar → Alderetes → Autopista → Terminal"
    },
    {
        "nombre": "16:50",
        "salida": 16.5,
        "recorrido": "Colonia 4 → B° La Cancha → Talar → Alternativa → Terminal",
        "recorrido2": "Colonia 3 FLorida → Talar → Alderetes → Banda R.S. → Terminal"
    },
    {
        "nombre": "17:50",
        "salida": 17.5,
        "recorrido": "Fortín → Esquina Lastra → Florida → Talar → Alderetes → Banda R.S. → Terminal"
    },
    {
        "nombre": "19:00",
        "salida": 19,
        "recorrido": "La Marta → Colonia 3 (Luisiana) → B° La Cancha → Talar → Alderetes → Banda R.S. → Terminal"
    },
    {
        "nombre": "20:50",
        "salida": 20.5,
        "recorrido": "Mayo → Colonia 10 y 4 (Luisiana) → B° La Cancha → Talar → Alderetes → Autopista → Terminal"
    }

]
const horariosDFloAl = [

    {
        "nombre": "07:40",
        "salida": 7.4,
        "recorrido": "Finca Mayo → Colonia 5 → Colonia 4 → Colonia 3 → Colonia 2 → Fortín → Esquina Lastra → Florida → Talar → Alderetes → Banda R.S. → Terminal"
    },
    {
        "nombre": "10:30",
        "salida": 10.30,
        "recorrido": "Colonia 2 → Fortín → Esquina Lastra → Florida → Talar → Alderetes → Banda R.S. → Terminal"
    },
    {
        "nombre": "12:40",
        "salida": 12.4,
        "recorrido": "Finca Mayo → Colonia 5 → Colonia 4 → Colonia 3 → Colonia 2 → Fortín → Esquina Lastra → Florida → Talar → Alderetes → Banda R.S. → Terminal"
    },
    {
        "nombre": "14:45",
        "salida": 14.45,
        "recorrido": "Colonia 4 → B° La Cancha → Talar → Alderetes → Banda R.S. → Terminal"
    },
    {
        "nombre": "15:50",
        "salida": 15.5,
        "recorrido": "Colonia 4 → B° La Cancha → Talar → Alderetes → Banda R.S. → Terminal"
    },
    {
        "nombre": "16:50",
        "salida": 16.5,
        "recorrido": "Colonia 3 → Fortín → Esquina Lastra → Florida → Talar → Alderetes → Banda R.S. → Terminal"
    },
    {
        "nombre": "17:50",
        "salida": 17.5,
        "recorrido": "B° La Cancha → Talar → Alderetes → Banda R.S. → Terminal"
    },
    {
        "nombre": "19:00",
        "salida": 19,
        "recorrido": "Mayo → Colonia 3 → B° La Cancha → Talar → Alderetes → Banda R.S. → Terminal"
    }
]
const horariosLvFloPo = [

    {
        "nombre": "04:50",
        "salida": 4.5,
        "recorrido": "B° La Cancha → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },
    {
        "nombre": "05:50",
        "salida": 5.5,
        "recorrido": "B° La Cancha → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },
    {
        "nombre": "06:20",
        "salida": 6.2,
        "recorrido": "B° La Cancha → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },

    {
        "nombre": "06:50",
        "salida": 6.5,
        "recorrido": "B° La Cancha → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },
    {
        "nombre": "07:20",
        "salida": 7.2,
        "recorrido": "B° La Cancha → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },

    {
        "nombre": "07:55",
        "salida": 7.55,
        "recorrido": "Fortín → Esquina Lastra → Florida → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },

    {
        "nombre": "08:20",
        "salida": 8.2,
        "recorrido": "B° La Cancha → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },

    {
        "nombre": "09:05",
        "salida": 9.05,
        "recorrido": "B° La Cancha → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },

    {
        "nombre": "09:55",
        "salida": 9.55,
        "recorrido": "B° La Cancha → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },

    {
        "nombre": "10:20",
        "salida": 10.2,
        "recorrido": "B° La Cancha → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },
    {
        "nombre": "10:50",
        "salida": 10.5,
        "recorrido": "B° La Cancha → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },
    {
        "nombre": "11:20",
        "salida": 11.2,
        "recorrido": "B° La Cancha → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },
    {
        "nombre": "11:50",
        "salida": 11.5,
        "recorrido": "B° La Cancha → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },
    {
        "nombre": "12:40",
        "salida": 12.40,
        "recorrido": "B° La Cancha → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },
    {
        "nombre": "13:20",
        "salida": 13.2,
        "recorrido": "B° La Cancha → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },
    {
        "nombre": "13:50",
        "salida": 13.5,
        "recorrido": "B° La Cancha → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },
    {
        "nombre": "14:50",
        "salida": 14.5,
        "recorrido": "B° La Cancha → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },
    {
        "nombre": "15:55",
        "salida": 15.55,
        "recorrido": "Fortín → Esquina Lastra → Florida → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },
    {
        "nombre": "16:50",
        "salida": 16.5,
        "recorrido": "B° La Cancha → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },
    {
        "nombre": "17:55",
        "salida": 17.55,
        "recorrido": "B° La Cancha → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },
    {
        "nombre": "18:50",
        "salida": 18.5,
        "recorrido": "B° La Cancha → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },
    {
        "nombre": "19:20",
        "salida": 19.2,
        "recorrido": "B° La Cancha → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },
    {
        "nombre": "19:50",
        "salida": 19.5,
        "recorrido": "Colonia 4 → B° La Cancha → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },
    {
        "nombre": "20:50",
        "salida": 20.5,
        "recorrido": "B° La Cancha → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },
    {
        "nombre": "21:20",
        "salida": 21.2,
        "recorrido": "B° La Cancha → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },
    {
        "nombre": "22:20",
        "salida": 22.20,
        "recorrido": "B° La Cancha → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },
    {
        "nombre": "23:20",
        "salida": 23.2,
        "recorrido": "B° La Cancha → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    }
]
const horariosSFloPo = [
    {
        "nombre": "04:50",
        "salida": 4.5,
        "recorrido": "B° La Cancha → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },

    {
        "nombre": "05:50",
        "salida": 5.5,
        "recorrido": "B° La Cancha → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },
    {
        "nombre": "06:20",
        "salida": 6.2,
        "recorrido": "B° La Cancha → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },

    {
        "nombre": "06:50",
        "salida": 6.5,
        "recorrido": "B° La Cancha → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },

    {
        "nombre": "07:20",
        "salida": 7.2,
        "recorrido": "B° La Cancha → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },

    {
        "nombre": "07:55",
        "salida": 7.55,
        "recorrido": "Fortín → Esquina Lastra → Florida → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },

    {
        "nombre": "08:20",
        "salida": 8.2,
        "recorrido": "B° La Cancha → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },

    {
        "nombre": "09:05",
        "salida": 9.05,
        "recorrido": "B° La Cancha → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },

    {
        "nombre": "09:55",
        "salida": 9.55,
        "recorrido": "B° La Cancha → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },

    {
        "nombre": "10:20",
        "salida": 10.2,
        "recorrido": "B° La Cancha → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },
    {
        "nombre": "10:50",
        "salida": 10.5,
        "recorrido": "B° La Cancha → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },
    {
        "nombre": "11:20",
        "salida": 11.2,
        "recorrido": "B° La Cancha → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },
    {
        "nombre": "11:50",
        "salida": 11.5,
        "recorrido": "B° La Cancha → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },
    {
        "nombre": "12:40",
        "salida": 12.40,
        "recorrido": "B° La Cancha → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },
    // {
    //     "nombre":"12:25",
    //     "salida":12.25,
    //     "recorrido":"Fortín hasta Llona"
    // },
    {
        "nombre": "13:25",
        "salida": 13.25,
        "recorrido": "B° La Cancha → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },
    {
        "nombre": "13:50",
        "salida": 13.5,
        "recorrido": "B° La Cancha → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },
    {
        "nombre": "15:00",
        "salida": 15,
        "recorrido": "Esquina Lastra → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },
    {
        "nombre": "15:55",
        "salida": 15.55,
        "recorrido": "Fortín → Esquina Lastra → Florida → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },
    {
        "nombre": "16:50",
        "salida": 16.5,
        "recorrido": "B° La Cancha → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },
    {
        "nombre": "17:50",
        "salida": 17.5,
        "recorrido": "B° La Cancha → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },
    {
        "nombre": "18:50",
        "salida": 18.5,
        "recorrido": "B° La Cancha → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },
    {
        "nombre": "19:25",
        "salida": 19.25,
        "recorrido": "Fortín → Esquina Lastra → Florida → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },
    {
        "nombre": "20:20",
        "salida": 20.2,
        "recorrido": "B° La Cancha → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },
    {
        "nombre": "20:50",
        "salida": 20.5,
        "recorrido": "B° La Cancha → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },
    {
        "nombre": "21:20",
        "salida": 21.2,
        "recorrido": "B° La Cancha → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },
    {
        "nombre": "22:20",
        "salida": 22.20,
        "recorrido": "B° La Cancha → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },
]
const horariosDFloPo = [
    {
        "nombre": "04:50",
        "salida": 4.5,
        "recorrido": "B° La Cancha → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },
    {
        "nombre": "05:50",
        "salida": 5.5,
        "recorrido": "B° La Cancha → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },
    {
        "nombre": "06:50",
        "salida": 6.5,
        "recorrido": "Fortín → Esquina Lastra → Florida → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },
    {
        "nombre": "07:50",
        "salida": 7.5,
        "recorrido": "Fortín → Esquina Lastra → Florida → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },
    {
        "nombre": "08:50",
        "salida": 8.5,
        "recorrido": "Fortín → Esquina Lastra → Florida → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },
    {
        "nombre": "09:50",
        "salida": 9.5,
        "recorrido": "B° La Cancha → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },
    {
        "nombre": "10:50",
        "salida": 10.50,
        "recorrido": "B° La Cancha → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },
    {
        "nombre": "11:50",
        "salida": 11.5,
        "recorrido": "B° La Cancha → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },
    {
        "nombre": "13:00",
        "salida": 13,
        "recorrido": "Esquina Lastra → Florida → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },
    {
        "nombre": "13:50",
        "salida": 13.5,
        "recorrido": "B° La Cancha → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },
    {
        "nombre": "15:00",
        "salida": 15,
        "recorrido": "Esquina Lastra → Florida → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },
    {
        "nombre": "15:50",
        "salida": 15.5,
        "recorrido": "Fortín → Esquina Lastra → Florida → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },
    {
        "nombre": "16:50",
        "salida": 16.5,
        "recorrido": "B° La Cancha → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },
    {
        "nombre": "17:50",
        "salida": 17.5,
        "recorrido": "B° La Cancha → Paraíso → Posse → Dispensario → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },
    {
        "nombre": "18:50",
        "salida": 18.5,
        "recorrido": "B° La Cancha → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },
    {
        "nombre": "19:25",
        "salida": 19.25,
        "recorrido": "Fortín → Esquina Lastra → Florida → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },
    {
        "nombre": "20:00",
        "salida": 20.00,
        "recorrido": "Esquina Lastra → Florida → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },
    {
        "nombre": "21:00",
        "salida": 21,
        "recorrido": "B° La Cancha → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },
    {
        "nombre": "22:20",
        "salida": 22.20,
        "recorrido": "B° La Cancha → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },

]
const horariosLvSMAl = [

    {
        "nombre": "05:20",
        "salida": 5.2,
        "recorrido": "Terminal → Catalinas Park → Autopista → Alderetes → Talar → Florida → B° La Cancha"
    },
    {
        "nombre": "06:25",
        "salida": 6.25,
        "recorrido": "Terminal → Banda R.S. → Talar → Florida → Esquina Lastra → Fortín → Mayo(por abajo)"
    },
    {
        "nombre": "07:00",
        "salida": 7,
        "recorrido": "Terminal → Alternativa → Talar → Florida → B° La Cancha → Colonia 4 → La Marta"
    },
    {
        "nombre": "07:15",
        "salida": 7.15,
        "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → Florida → Fonda → Colonia 4 → Los Perez"
    },
    {
        "nombre": "08:00",
        "salida": 8,
        "recorrido": "Terminal → Catalinas Park → Autopista → Alderetes → Cochuchal → Florida → Colonia 4"
    },
    {
        "nombre": "08:35",
        "salida": 8.35,
        "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → Florida → Esquina Lastra → Fortín"
    },
    {
        "nombre": "09:00",
        "salida": 9,
        "recorrido": "Terminal → Catalinas Park → Autopista → Talar → Florida → B° La Cancha → Colonia 4 "
    },
    {
        "nombre": "09:45",
        "salida": 9.45,
        "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → Florida → Esquina Lastra → Fortín"
    },
    {
        "nombre": "10:45",
        "salida": 10.45,
        "recorrido": "Terminal → Alternativa → Talar → Florida → Esquina Lastra → Fortín"
    },
    {
        "nombre": "11:15",
        "salida": 11.15,
        "recorrido": "Terminal → Catalinas Park → Autopista → Talar → Florida → B° La Cancha → La Marta"
    },
    {
        "nombre": "11:40",
        "salida": 11.4,
        "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → Florida → Esquina Lastra → Mayo"
    },
    {
        "nombre": "12:15",
        "salida": 12.15,
        "recorrido": "Terminal → Catalinas Park → Alternativa → Talar → Florida → B° La Cancha → Colonia 4"
    },
    {
        "nombre": "12:20",
        "salida": 12.2,
        "recorrido": "Terminal → Catalinas Park → Autopista → Talar → Florida → B° La Cancha → Colonia 4"
    },
    {
        "nombre": "12:45",
        "salida": 12.45,
        "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → Florida → Colonia 3"
    },
    {
        "nombre": "13:15",
        "salida": 13.15,
        "recorrido": "Terminal → Banda R.S. → Alderetes → Cochuchal → B° La Cancha → Colonia 4"
    },
    {
        "nombre": "13:30",
        "salida": 13.3,
        "recorrido": "Terminal → Catalinas Park → Autopista → Alderetes → Talar → Florida → B° La Cancha → Mayo → La Marta"
    },
    {
        "nombre": "14:00",
        "salida": 14,
        "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → Florida → B° La Cancha"
    },
    {
        "nombre": "14:50",
        "salida": 14.5,
        "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → Florida → B° La Cancha",
        "recorrido2": "Terminal → Comisaria 11 → Cnel. Suarez → Gdor. del Campo → Alternativa → Talar → Florida → Esquina Lastra → Fortín"
    },
    {
        "nombre": "15:50",
        "salida": 15.5,
        "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → Florida → B° La Cancha → Colonia 4",
        "recorrido2": "Terminal → Comisaria 11 → Cnel. Suarez → Gdor. del Campo → Alternativa → Talar → Florida → B° La Cancha → Colonia 4"
    },
    {
        "nombre": "16:50",
        "salida": 16.5,
        "recorrido": "Terminal → Banda R.S. → Alderetes → Cochuchal → Florida → Esquina Lastra → Fortín",
        "recorrido2": "Terminal → Comisaria 11 → Cnel. Suarez → Gdor. del Campo → Alternativa → Talar → Florida → B° La Cancha → Colonia 4"
    },
    {
        "nombre": "17:40",
        "salida": 17.4,
        "recorrido": "Terminal → Comisaria 11 → Cnel. Suarez → Gdor. del Campo → Alternativa → Talar → Florida → B° La Cancha → Colonia 4"
    },
    {
        "nombre": "17:45",
        "salida": 17.45,
        "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → Florida → B° La Cancha → Mayo → La Marta"
    },
    {
        "nombre": "18:20",
        "salida": 18.2,
        "recorrido": "Terminal → Comisaria 11 → Cnel. Suarez → Gdor. del Campo → Alternativa → Talar → B° La Cancha → Colonia 4"
    },
    {
        "nombre": "18:30",
        "salida": 18.3,
        "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → Florida → B° La Cancha → Colonia 4"
    },
    {
        "nombre": "19:00",
        "salida": 19,
        "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → Florida → B° La Cancha → Colonia 4"
    },
    {
        "nombre": "19:45",
        "salida": 19.45,
        "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → Florida → Esquina Lastra → Fortín → Mayo(por abajo)"
    },
    {
        "nombre": "20:30",
        "salida": 20.3,
        "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → Florida → Esquina Lastra → Fortín"
    },
    {
        "nombre": "21:00",
        "salida": 21,
        "recorrido": "Terminal → Comisaria 11 → Cnel. Suarez → Gdor. del Campo → Autopista → Alderetes → Talar → Florida → B° La Cancha"
    },
    {
        "nombre": "21:30",
        "salida": 21.30,
        "recorrido": "Terminal → Comisaria 11 → Cnel. Suarez → Gdor. del Campo → Autopista → Alderetes → Talar → Florida → B° La Cancha → Colonia 4"
    },
    {
        "nombre": "22:30",
        "salida": 22.30,
        "recorrido": "Terminal → Comisaria 11 → Cnel. Suarez → Gdor. del Campo → Autopista → Alderetes → Talar → Florida → B° La Cancha → Colonia 4"
    },
    {
        "nombre": "23:30",
        "salida": 23.30,
        "recorrido": "Terminal → Comisaria 11 → Cnel. Suarez → Gdor. del Campo → Autopista → Alderetes → Talar → Florida → B° La Cancha → Colonia 4"
    }
]
const horariosSSMAl = [
    {
        "nombre": "05:20",
        "salida": 5.2,
        "recorrido": "Terminal → Catalinas Park → Autopista → Alderetes → Talar → Florida → B° La Cancha"
    },
    {
        "nombre": "06:25",
        "salida": 6.25,
        "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → Florida → Esquina Lastra → Fortín → Mayo"
    },
    {
        "nombre": "07:15",
        "salida": 7.15,
        "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → Florida → B° La Cancha"
    },
    {
        "nombre": "08:00",
        "salida": 8,
        "recorrido": "Terminal → Catalinas Park → Autopista → Alderetes → Cochuchal → Florida"
    },
    {
        "nombre": "08:35",
        "salida": 8.35,
        "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → Florida → Esquina Lastra → Fortín"
    },
    {
        "nombre": "09:45",
        "salida": 9.45,
        "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → Florida → Esquina Lastra → Fortín"
    },
    {
        "nombre": "10:45",
        "salida": 10.45,
        "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → Florida → Esquina Lastra → Fortín"
    },
    {
        "nombre": "11:40",
        "salida": 11.4,
        "recorrido": "Terminal → Banda R.S. → Alderetes → Cochuchal → Florida → Esquina Lastra → Fortín → Colonias 2/3/4/5 → Mayo"
    },
    {
        "nombre": "12:20",
        "salida": 12.2,
        "recorrido": "Terminal → Catalinas Park → Autopista → Alderetes → Talar → Florida → B° La Cancha → Colonia 4"
    },
    {
        "nombre": "13:30",
        "salida": 13.3,
        "recorrido": "Terminal → Autopista → Alderetes → Talar → Florida → B° La Cancha → Colonia 4 → Mayo"
    },
    {
        "nombre": "14:00",
        "salida": 14,
        "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → FLorida → B° La Cancha"
    },
    {
        "nombre": "14:50",
        "salida": 14.5,
        "recorrido": "Terminal → Banda R.S. → Alderetes → B° La Cancha → Colonia 4"
    },
    {
        "nombre": "16:00",
        "salida": 16,
        "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → Florida → Esquina Lastra → Fortín → Colonia 3 (Florida)"
    },
    {
        "nombre": "16:50",
        "salida": 16.5,
        "recorrido": "Terminal → Banda R.S. → Alderetes → Cochuchal → Florida → Esquina Lastra → Fortín"
    },
    {
        "nombre": "17:45",
        "salida": 17.45,
        "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → Florida → B° La Cancha → Colonia 3 (Luisiana) → Mayo → La Marta"
    },
    {
        "nombre": "19:00",
        "salida": 19,
        "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → Florida → Colonia 4"
    },
    {
        "nombre": "19:45",
        "salida": 19.45,
        "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → Florida → Esquina Lastra → Fortín → Colonias 2/3/4/5 → Mayo"
    },
    {
        "nombre": "20:30",
        "salida": 20.3,
        "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → Florida → Esquina Lastra → Fortín"
    },
    {
        "nombre": "21:30",
        "salida": 21.30,
        "recorrido": "Terminal → Comisaria 11 → Cnel. Suarez → Gdor. del Campo → Autopista → Alderetes → Talar → Florida → Esquina Lastra → Fortín → Colonia 4 (Luisiana)"
    },
    // {
    //     "nombre":"22:00",
    //     "salida":22,
    //     "recorrido":"Terminal → Alternativa → Colonia 4"
    // },
    {
        "nombre": "22:30",
        "salida": 22.30,
        "recorrido": "Terminal → Comisaria 11 → Cnel. Suarez → Gdor. del Campo → Autopista → Alderetes → Talar → Florida → Esquina Lastra → Fortín → Colonia 4"
    }
]
const horariosDSMAl = [

    {
        "nombre": "06:25",
        "salida": 6.25,
        "recorrido": "Terminal → Banda R.S. → Alderetes Talar → Florida → Esquina Lastra → Fortín → Mayo"
    },
    {
        "nombre": "09:45",
        "salida": 9.45,
        "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → Florida → Esquina Lastra → Fortín → Colonia 2"
    },
    {
        "nombre": "11:40",
        "salida": 11.40,
        "recorrido": "Terminal → Banda R.S. → Alderetes → Cochuchal → Florida → Esquina Lastra → Fortín → Mayo"
    },
    {
        "nombre": "14:00",
        "salida": 14,
        "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → Florida → B° La Cancha → Colonia 4"
    },
    {
        "nombre": "14:50",
        "salida": 14.5,
        "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → Florida → B° La Cancha → Colonia 4"
    },
    // {
    //     "nombre": "16:00",
    //     "salida": 16,
    //     "recorrido": "Terminal → Banda R.S. → Alderetes → Cochuchal → Florida → Esquina Lastra → Fortín → Colonia 3"
    // },
    {
        "nombre": "17:45",
        "salida": 17.45,
        "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → Florida → Esquina Lastra → Fortín → Colonia 3 → Mayo"
    },
    {
        "nombre": "19:45",
        "salida": 19.45,
        "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → Florida → Esquina Lastra → Fortín → Mayo"
    },
    {
        "nombre": "20:30",
        "salida": 20.3,
        "recorrido": "Terminal → Banda R.S. → Alderetes → Talar → Florida → Esquina Lastra → Fortín"
    }

]
const horariosLvSMPo = [
    // {
    //     "nombre": "00:30",
    //     "salida": 0.3,
    //     "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → B° La Cancha"
    // },
    {
        "nombre": "06:00",
        "salida": 6,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → B° La Cancha → Colonia 4"
    },
    {
        "nombre": "06:30",
        "salida": 6.3,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → B° La Cancha"
    },
    {
        "nombre": "07:00",
        "salida": 7,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → Florida → Esquina Lastra → Fortín"
    },
    {
        "nombre": "07:30",
        "salida": 7.3,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → B° La Cancha"
    },
    {
        "nombre": "08:15",
        "salida": 8.15,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → Esquina Lastra"
    },
    {
        "nombre": "09:00",
        "salida": 9,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → B° La Cancha"
    },
    {
        "nombre": "09:30",
        "salida": 9.30,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → B° La Cancha"
    },
    {
        "nombre": "10:00",
        "salida": 10,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → Florida → B° La Cancha → Colonia 4"
    },
    {
        "nombre": "10:30",
        "salida": 10.3,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → B° La Cancha"
    },
    {
        "nombre": "11:00",
        "salida": 11,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → B° La Cancha"
    },
    {
        "nombre": "11:20",
        "salida": 11.2,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → Esquina Lastra → Fortín"
    },
    {
        "nombre": "11:45",
        "salida": 11.45,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → B° La Cancha"
    },
    {
        "nombre": "12:25",
        "salida": 12.25,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → Esquina Lastra → Fortín"
    },
    {
        "nombre": "12:30",
        "salida": 12.3,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → B° La Cancha"
    },
    {
        "nombre": "13:00",
        "salida": 13,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → B° La Cancha"
    },
    {
        "nombre": "13:30",
        "salida": 13.3,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → Esquina Lastra"
    },
    {
        "nombre": "14:05",
        "salida": 14.05,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → B° La Cancha"
    },
    {
        "nombre": "14:30",
        "salida": 14.3,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → FLorida → Esquina Lastra"
    },
    {
        "nombre": "15:00",
        "salida": 15,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → Esquina Lastra → Fortín"
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
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → Esquina Lastra → Fortín"
    },
    {
        "nombre": "18:00",
        "salida": 18,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → B° La Cancha"
    },
    {
        "nombre": "18:30",
        "salida": 18.3,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → Esquina Lastra → Fortín"
    },
    {
        "nombre": "19:10",
        "salida": 19.1,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → B° La Cancha → Colonia 4"
    },
    {
        "nombre": "19:30",
        "salida": 19.3,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → B° La Cancha"
    },
    {
        "nombre": "20:00",
        "salida": 20,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → B° La Cancha"
    },
    {
        "nombre": "20:30",
        "salida": 20.3,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → B° La Cancha"
    },
    {
        "nombre": "20:45",
        "salida": 20.45,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → B° La Cancha"
    },
    {
        "nombre": "21:00",
        "salida": 21,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Fila del Medio → Bosque → Posse → Paraíso → Florida → B° La Cancha"
    },
    {
        "nombre": "21:30",
        "salida": 21.3,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → B° La Cancha"
    },
    {
        "nombre": "22:00",
        "salida": 22,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → B° La Cancha"
    },
    {
        "nombre": "22:30",
        "salida": 22.3,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → B° La Cancha"
    },
    {
        "nombre": "23:30",
        "salida": 23.3,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → B° La Cancha → Fortín → Colonia 4"
    },
    // {
    //     "nombre": "00:30",
    //     "salida": 24.3,
    //     "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → B° La Cancha"
    // }
]
const horariosSSMPo = [
    {
        "nombre": "00:30",
        "salida": 0.3,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → B° La Cancha"
    },
    {
        "nombre": "06:00",
        "salida": 6,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → B° La Cancha → Colonia 4"
    },
    {
        "nombre": "06:40",
        "salida": 6.1,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → B° La Cancha"
    },
    {
        "nombre": "07:00",
        "salida": 7,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → Esquina Lastra → Fortín"
    },
    {
        "nombre": "07:30",
        "salida": 7.3,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → B° La Cancha"
    },
    {
        "nombre": "08:15",
        "salida": 8.15,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → Esquina Lastra"
    },
    {
        "nombre": "09:00",
        "salida": 9,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → B° La Cancha"
    },
    {
        "nombre": "09:30",
        "salida": 9.30,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → B° La Cancha"
    },
    {
        "nombre": "10:00",
        "salida": 10,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → B° La Cancha → Colonia 4"
    },
    {
        "nombre": "10:30",
        "salida": 10.3,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → B° La Cancha"
    },
    {
        "nombre": "11:00",
        "salida": 11,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → B° La Cancha"
    },
    {
        "nombre": "11:45",
        "salida": 11.45,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → B° La Cancha"
    },
    {
        "nombre": "12:30",
        "salida": 12.3,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → B° La Cancha"
    },
    {
        "nombre": "13:00",
        "salida": 13,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → B° La Cancha"
    },
    {
        "nombre": "13:45",
        "salida": 13.45,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → Esquina Lastra → Fortín"
    },
    {
        "nombre": "14:15",
        "salida": 14.15,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → Esquina Lastra"
    },
    {
        "nombre": "15:00",
        "salida": 15,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → Esquina Lastra → Fortín"
    },
    {
        "nombre": "16:00",
        "salida": 16,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → B° La Cancha"
    },
    {
        "nombre": "17:00",
        "salida": 17,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → B° La Cancha"
    },
    {
        "nombre": "17:30",
        "salida": 17.3,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → Esquina Lastra → Fortín"
    },
    {
        "nombre": "18:00",
        "salida": 18,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → B° La Cancha"
    },
    {
        "nombre": "18:30",
        "salida": 18.3,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → Esquina Lastra → Fortín"
    },
    {
        "nombre": "19:15",
        "salida": 19.15,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → B° La Cancha → Colonia 4"
    },
    {
        "nombre": "19:30",
        "salida": 19.3,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → B° La Cancha"
    },
    {
        "nombre": "20:00",
        "salida": 20,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → B° La Cancha"
    },
    {
        "nombre": "20:30",
        "salida": 20.3,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → B° La Cancha"
    },
    {
        "nombre": "21:00",
        "salida": 21,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Fila del medio → Bosque → Paraíso → Florida → B° La Cancha → Colonia 4"
    },
    {
        "nombre": "21:30",
        "salida": 21.3,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → B° La Cancha"
    },
    {
        "nombre": "22:00",
        "salida": 22,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → B° La Cancha → Colonia 4"
    },
    {
        "nombre": "22:30",
        "salida": 22.3,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → B° La Cancha"
    },
    {
        "nombre": "23:30",
        "salida": 23.3,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → B° La Cancha"
    },
]
const horariosDSMPo = [
    {
        "nombre": "06:00",
        "salida": 6,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → Esquina Lastra → Fortín"
    },
    {
        "nombre": "07:00",
        "salida": 7,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → Esquina Lastra → Fortín"
    },
    {
        "nombre": "08:00",
        "salida": 8,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → Esquina Lastra → Fortín"
    },
    {
        "nombre": "09:00",
        "salida": 9,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → B° La Cancha"
    },
    {
        "nombre": "10:00",
        "salida": 10,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → B° La Cancha"
    },
    {
        "nombre": "11:00",
        "salida": 11,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → B° La Cancha"
    },
    {
        "nombre": "12:00",
        "salida": 12,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → Esquina Lastra"
    },
    // {
    //     "nombre": "12:30",
    //     "salida": 12.3,
    //     "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → Esquina Lastra"
    // },
    {
        "nombre": "13:00",
        "salida": 13,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → B° La Cancha"
    },
    {
        "nombre": "14:15",
        "salida": 14.15,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → Esquina Lastra"
    },
    {
        "nombre": "15:00",
        "salida": 15,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → Esquina Lastra → Fortín"
    },
    {
        "nombre": "16:00",
        "salida": 16,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → B° La Cancha"
    },
    {
        "nombre": "17:00",
        "salida": 17,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → B° La Cancha"
    },
    {
        "nombre": "18:00",
        "salida": 18,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → B° La Cancha"
    },
    {
        "nombre": "18:30",
        "salida": 18.3,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → Esquina Lastra → Fortín"
    },
    {
        "nombre": "19:10",
        "salida": 19.1,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → B° La Cancha"
    },
    {
        "nombre": "20:00",
        "salida": 20,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → B° La Cancha"
    },
    {
        "nombre": "20:45",
        "salida": 20.45,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → B° La Cancha"
    },
    // {
    //     "nombre": "21:00",
    //     "salida": 21,
    //     "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → B° La Cancha"
    // },
    {
        "nombre": "21:30",
        "salida": 21.3,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → B° La Cancha"
    },
    {
        "nombre": "22:30",
        "salida": 22.3,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → B° La Cancha"
    },
    {
        "nombre": "23:30",
        "salida": 23.3,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → B° La Cancha"
    }
]
const posseTerminalLaV = [
    {
        "nombre": "05:00",
        "salida": 5,
        "recorrido": "Dispensario → Fila de la orilla → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },
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
        "recorrido": "Bosque → Fila del Medio → Cevil Pozo → Banda R.S. → Terminal"
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
        "nombre": "16:10",
        "salida": 16.1,
        "recorrido": "Dispensario → Fila del Medio → Cevil Pozo → Banda R.S. → Terminal"
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
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Fila del medio → Bosque → Florida"
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
        "nombre": "21:00",
        "salida": 21,
        "recorrido": "Terminal → Banda del Río Sali → Cevil Pozo → Fila del medio → Bosque → Dispensario"
    },
]
const terminalPosseD = [
    {
        "nombre": "21:20",
        "salida": 21.2,
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
        "recorrido2": "Alabama → Mayo → Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
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
    //     "nombre": "19:05",
    //     "salida": 19.05,
    //     "recorrido": "Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
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
    //     "nombre":"08:30",
    //     "salida":8.3,
    //     "recorrido":"Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
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
        "nombre": "14:10",
        "salida": 14.1,
        "recorrido": "Los Ralos → Villa Tercera → Llona → Cevil Pozo → Banda R.S. → Terminal"
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
        "recorrido": "Alabama → Mayo → Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
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
    //     "nombre": "19:50",
    //     "salida": 19.50,
    //     "recorrido": "Las Cejas → Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
    // },
    {
        "nombre": "20:00",
        "salida": 20,
        "recorrido": "Lolita → Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
    },
    // {
    //     "nombre":"20:30",
    //     "salida":20.3,
    //     "recorrido":"Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
    // },
    {
        "nombre": "21:30",
        "salida": 21.3,
        "recorrido": "Mayo → Los Ralos → Llona → Cevil Pozo → Banda R.S. → Terminal"
    }
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
    //     "nombre":"11:50",
    //     "salida":11.5,
    //     "recorrido":"Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Villa Tercera"
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
    //     "nombre":"14:00",
    //     "salida":14,
    //     "recorrido":"Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Lolita"
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
        "nombre": "13:30",
        "salida": 13.3,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Villa Tercera → Lolita"
    },
    // {
    //     "nombre": "13:50",
    //     "salida": 13.5,
    //     "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → B° Trigal"
    // },
    {
        "nombre": "14:00",
        "salida": 14,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Lolita"
    },
    // {
    //     "nombre": "14:20",
    //     "salida": 14,
    //     "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Las Cejas"
    // },
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
        "nombre": "17:10",
        "salida": 17.1,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Villa Tercera",
    },
    {
        "nombre": "18:00",
        "salida": 18,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Mayo → Alabama",
    },
    {
        "nombre": "18:30",
        "salida": 18.3,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Las Cejas"
    },
    {
        "nombre": "19:00",
        "salida": 19,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Lolita"
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
    },
    // {
    //     "nombre": "20:20",
    //     "salida": 20.2,
    //     "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Villa Tercera",
    // },
    {
        "nombre": "20:30",
        "salida": 20.3,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Mayo → Alabama",
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
        "nombre": "14:30",
        "salida": 14.3,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → VIlla Tercera"
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
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Villa Tercera",
    },
    {
        "nombre": "18:00",
        "salida": 18,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Mayo → Alabama",
    },
    {
        "nombre": "18:30",
        "salida": 18.3,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Las Cejas",
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
    },
    {
        "nombre": "20:10",
        "salida": 20.1,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos",
    },
    {
        "nombre": "20:30",
        "salida": 20.3,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Mayo → Las Cejas",
    },
    {
        "nombre": "21:30",
        "salida": 21.3,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Los Ralos → Villa Tercera",
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
    //     "nombre":"07:45",
    //     "salida":7.45,
    //     "recorrido":"Britos → Llona → Cevil Pozo → Banda R.S. → Terminal"
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
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona  → Cruz Alta → Los Ralos"
    },
    {
        "nombre": "13:15",
        "salida": 13.15,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona  → Cruz Alta → Los Ralos"
    },
    {
        "nombre": "19:30",
        "salida": 19.30,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona  → Cruz Alta → Los Ralos"
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
    //     "nombre": "18:30",
    //     "salida": 18.3,
    //     "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Las Cejas → 7 de Abril"
    // },
    // {
    //     "nombre": "20:30",
    //     "salida": 20.3,
    //     "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Las Cejas → 7 de Abril"
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
