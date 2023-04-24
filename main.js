
document.addEventListener('DOMContentLoaded', function () {
    iniciarApp();
})

function iniciarApp() {
    reloj();
    busquedaManual();
};

function reloj() {

    let momentoActual = new Date();
    let hora = momentoActual.getHours();
    let minuto = momentoActual.getMinutes();
    let segundo = momentoActual.getSeconds();
    let fecha = momentoActual.getDate();
    let dia = momentoActual.getDay()
    let mes = momentoActual.getMonth()

    if (minuto <= 9) {
        minuto = "0" + minuto
    }
    if (segundo <= 9) {
        segundo = "0" + segundo;
    }
    if (hora <= 9) {
        hora = "0" + hora;
    }
    if (fecha <= 9) {
        fecha = "0" + fecha;
    }

    let diaFecha = document.getElementById('dia')
    let numeroFecha = document.getElementById('fecha')
    let mesFecha = document.getElementById('mes')
    let horita = document.getElementById('horas')
    let minutitos = document.getElementById('minutos')
    let segunditos = document.getElementById('segundos')
    let diasDeLaSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    let mesesDelAño = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    diaFecha.textContent = `${diasDeLaSemana[dia]}`
    numeroFecha.textContent = `${fecha}`;
    mesFecha.textContent = `${mesesDelAño[mes]}`;
    horita.textContent = hora;
    minutitos.textContent = minuto;
    segunditos.textContent = segundo;

    /*MOVER RELOJ A TIEMPO ACTUAL*/
    setTimeout("reloj()", 1000)
    /*                          */
}

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
        "recorrido": "Esquina de Lastra → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
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
        "recorrido": "Esquina de Lastra → Florida → Paraíso → Posse → Llona → Cevil Pozo → Banda R.S. → Terminal"
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
    {
        "nombre": "00:30",
        "salida": 24.3,
        "recorrido": "Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → B° La Cancha"
    }
]
const horariosSSMPo = [
    {
        "nombre":"00:30",
        "salida":0.3,
        "recorrido":"Terminal → Banda R.S. → Cevil Pozo → Llona → Posse → Paraíso → Florida → B° La Cancha"
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

/* Funcion para determinar la localidad de posicion*/

const selector = document.menu.selector;
const selector2 = document.menu2.selector2;

const boton = document.getElementById('boton');

const opcionbase = selector[0]
const opcionbase2 = selector2[0]
const florida = selector[1];
const xposse = selector[2]
const sanM = selector[3];
let valorSelecionado;
let valorSelecionado2;
let valores = [];
let valores2 = [];
let posicion;
let posicion2;
let label1;
let label2;



const botonDeCambio = document.querySelector('.botonDeCambio');
const botonDeCambio2 = document.querySelector('.botonDeCambio2');
const mensaje2 = document.querySelector('.mensaje2');
const indicacioncont = document.querySelector('.indicacion-cont')
const resultadoscont = document.querySelector('.resultados-cont')


let titulo = document.getElementById('titulo');

botonDeCambio.addEventListener('click', function () {
    $('.menu2').css('display', 'flex');
    $('.origen').css('display', 'flex');
    $('.botonDeCambio2').css('display', 'flex');
    $('.destino').css('display', 'none');
    $('.menu').css('display', 'none');
    $('.botonDeCambio').css('display', 'none');
    opcionbase.selected = true;
    linea1.textContent = '';
    linea2.textContent = '';
})

botonDeCambio2.addEventListener('click', function () {
    $('.menu2').css('display', 'none');
    $('.origen').css('display', 'none');
    $('.botonDeCambio2').css('display', 'none');
    $('.destino').css('display', 'flex');
    $('.menu').css('display', 'flex');
    $('.botonDeCambio').css('display', 'flex');
    opcionbase2.selected = true;
    linea1.textContent = '';
    linea2.textContent = '';
})

    
function borrarGlobos(){
    let arrayResultados = Array.prototype.slice.call(document.getElementsByClassName("resultados"), 0);
    for(element of arrayResultados){
        element.remove();
    }
}


let indiceDeBusqueda;

boton.addEventListener('click', ()=> {


    // Definimos la posicion del selector 1

    for (opcion of selector) {
        if (opcion.selected) {
            valorSelecionado = opcion;
        }
    }
    for (i = 0; i < selector.length; i++) {
        valores.push(selector[i])
    }

    for (i = 0; i < valores.length; i++) {
        posicion = valores.indexOf(valorSelecionado)
    }


    // Definimos la posicion del selector 2

    for (opcion of selector2) {
        if (opcion.selected) {
            valorSelecionado2 = opcion;
        }
    }
    for (i = 0; i < selector2.length; i++) {
        valores2.push(selector2[i])
    }

    for (i = 0; i < valores2.length; i++) {
        posicion2 = valores2.indexOf(valorSelecionado2)
    }


    // Definimos las variables globales

    let momentoActual = new Date();
    let hora = momentoActual.getHours();
    let minutos = momentoActual.getMinutes();
    let horaEnEnteros = (hora * 60) + minutos;
    let dia = momentoActual.getDay();
    let fecha = momentoActual.getDate();
    let mes = momentoActual.getMonth();
    let diasDeLaSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    let diaSemana = diasDeLaSemana[dia]
    let elMasCercano = 3000;
    let anteriorPasado = 3000;
    let diaRango = []
    let ruta = [];
    let listaDelDia = [];
    let horariosEnEnteros = [];
    let listaDiferencias = []
    let listaDiferencias2 = [];
    let actual1 = document.getElementById('actual1');
    let actual2 = document.getElementById('actual2');
    let actual3 = document.getElementById('actual3');
    let futuro1 = document.getElementById('futuro1');
    let futuro2 = document.getElementById('futuro2');
    let futuro3 = document.getElementById('futuro3');
    let futuro4 = document.getElementById('futuro4');
    let tituloResultado = document.getElementById('tituloResultado')
    let linea1 = document.getElementById('linea1');
    let feriado = false;
    let semiFeriado = false;
    let nombreServicio;
    let recorridoServicio;
    let recorridoServicio2;
    let estadoServicio;
    


    if (opcionbase.selected == true && opcionbase2.selected == false) {
        ruta = todosTucumanDestino[posicion2 - 1]
        // linea1.textContent = origen.textContent

        linea2.textContent = selector2[posicion2].label;
    }
    if (opcionbase2.selected == true && opcionbase.selected == false) {
        ruta = todosDestinoTucuman[posicion - 1];
        linea2.textContent = selector[posicion].label;
        // linea2.textContent = destino.textContent;   
    }

    function obtenerDiaRuta(x) {

        if (x == 0) {
            diaRango = ruta[0].slice(0, ruta[0].length);
        }
        if (x >= 1 && x <= 5) {
            diaRango = ruta[1].slice(0, ruta[1].length);
        }
        if (x == 6) {
            diaRango = ruta[2].slice(0, ruta[2].length);
        }

        return diaRango
    }

    let rutaObtenida

    if ((fecha == 24) && (mes == 2)) {
        tituloResultado.textContent = `Hoy, ${diasDeLaSemana[dia].toLowerCase()} (feriado): Circulación como día domingo `;
        rutaObtenida = obtenerDiaRuta(0);
        feriado = true;
    }

    else if ((fecha == 6) && (mes == 3)) {
        semiFeriado = true;
        rutaObtenida = obtenerDiaRuta(6);
        tituloResultado.textContent = `Hoy, ${diasDeLaSemana[dia].toLowerCase()} santo: Circulación como día sábado `;
    }

    else if ((fecha == 7) && (mes == 3)) {
        feriado = true;
        rutaObtenida = obtenerDiaRuta(0);
        tituloResultado.textContent = `Hoy, ${diasDeLaSemana[dia].toLowerCase()} santo: Circulación como día domingo`;

    }


    else {

        tituloResultado.textContent = `Hoy, ${diaSemana.toLowerCase()}, tenés éstos servicios`

        // Aqui definimos el array dependiendo el dia de la semana
        rutaObtenida = obtenerDiaRuta(dia)
    }

    //funcion para crear los globos de resultados

    


    // Aqui extraemos del array de arriba los salidaes de cada horario y lo agregamos a la lista del dia


    function obtenerLista(x) {
        for (i = 0; i < x.length; i++) {
            listaDelDia.push(x[i].salida);
        }
        // Aqui usamos la lista con los salidaes y las pasamos a numero enteros junto con los minutos

        return listaDelDia
    }

    let listaObtenida = obtenerLista(rutaObtenida)


    function convertirHorarioAMinutos(x) {
        a = (Math.trunc(x)) * 60;
        b = ((x) - (Math.trunc(x))) * 100;
        c = a + b;

        return c
    }

    function pasarHoraAMinutos(x, y) {
        a = x * 60;
        b = a + y;
        return b
    }

    let conversionHorario;
    let conversionHora;


    for (let i = 0; i < listaObtenida.length; i++) {
        let horasEnEnteros = (Math.trunc(listaObtenida[i])) * 60;
        let minutosEnEnteros = (listaDelDia[i] - (Math.trunc(listaObtenida[i]))) * 100;
        let horaMinutosEnEnteros = horasEnEnteros + minutosEnEnteros;
        horariosEnEnteros.push(horaMinutosEnEnteros);
    }

    /*Recorremos el array y buscamos coincidencias con el horario actual*/

    for (i = 0; i < horariosEnEnteros.length; i++) {
        let difHoraHorarios = horaEnEnteros - horariosEnEnteros[i];
        listaDiferencias.push(difHoraHorarios);
    }


    for (i = 0; i < listaDiferencias.length; i++) {
        if (listaDiferencias[i] >= 0){
            anteriorPasado = Math.min(anteriorPasado, listaDiferencias[i]);
        }
    }
    
    if(anteriorPasado <= 15 && (listaDiferencias.indexOf(anteriorPasado) < listaDiferencias.length - 1)){
        indiceDeBusqueda = listaDiferencias.indexOf(anteriorPasado);
    }
    else if (listaDiferencias.indexOf(anteriorPasado) < listaDiferencias.length - 1){
        indiceDeBusqueda = (listaDiferencias.indexOf(anteriorPasado)) + 1;
        
    }
    else if ((listaDiferencias.indexOf(anteriorPasado)) == (listaDiferencias.length - 1)){
        indiceDeBusqueda = listaDiferencias.indexOf(anteriorPasado);
        
    }
    
    

    for (i = 0; i < rutaObtenida.length; i++){
    
        const resultado = document.createElement('DIV')
        resultado.classList.add('resultados')
        const fondo = document.createElement('SPAN');-
        fondo.classList.add('fondo')
        let p1 = document.createElement('P');
        p1.classList.add('actual1')
        let p2 = document.createElement('P');
        p2.classList.add('actual2')
        let p3 = document.createElement('P');
        p3.classList.add('actual3');
        resultado.appendChild(fondo);
        resultado.appendChild(p1);
        resultado.appendChild(p2);
        resultado.appendChild(p3);
        if((Object.keys(rutaObtenida[i]).length) > 3){
            let p4 = document.createElement('P');
            p4.classList.add('actual4');
            resultado.appendChild(p4);
        }
        resultadoscont.appendChild(resultado);
        mensaje2.appendChild(resultadoscont)
    }
    
    function irAlObjeto() {
        let a = resultadoscont.children[indiceDeBusqueda];
        a.scrollIntoView({behavior: 'smooth', block:'center'});
    };

    resultadoscont.children[indiceDeBusqueda].classList.add('resaltado');
    resultadoscont.children[indiceDeBusqueda].classList.add('manito');
    resultadoscont.classList.add('opacarFondo');
    mensaje2.appendChild(indicacioncont);

    for (i = 0; i < resultadoscont.children.length; i++) {
        if(i < indiceDeBusqueda || i > indiceDeBusqueda){
            resultadoscont.children[i].classList.add('opacar')
        }
    }

    for (i = 0; i < (resultadoscont.children).length; i++) {
      nombreServicio = (resultadoscont.children[i]).children[1];
      estadoServicio = (resultadoscont.children[i]).children[2];
      recorridoServicio = (resultadoscont.children[i]).children[3];
      recorridoServicio2 = (resultadoscont.children[i]).children[4];
      
        if(listaDiferencias[i] > 0){
            if((Object.keys(rutaObtenida[i])).length > 3){
                if(i == 0){
                    nombreServicio.textContent = `Primeros servicios del día ${rutaObtenida[i].nombre} Hrs`;
                  }
                  else if(i == (rutaObtenida.length) - 1){
                    nombreServicio.textContent = `Últimos servicios del día ${rutaObtenida[i].nombre} Hrs`;
                  }
                  else{
                    nombreServicio.textContent = `Servicios de las ${rutaObtenida[i].nombre} Hrs`;
                  }
                if (listaDiferencias[i] >= 120) {
                    estadoServicio.textContent = 'Iniciaron sus recorridos hace un par horas'
                }
                    if (listaDiferencias[i] > 60 && listaDiferencias[i] < 120) {
                        estadoServicio.textContent = 'Iniciaron sus recorridos hace mas de 1 hora'
                    }
                    if (listaDiferencias[i] == 60) {
                        estadoServicio.textContent = 'Iniciaron sus recorridos hace 1 hora'
                    }
                    if (listaDiferencias[i] < 60) {
                        estadoServicio.textContent = `Iniciaron sus recorrido hace menos de 1 hora`
                    }
                    if (listaDiferencias[i] < 30) {
                        estadoServicio.textContent = `Iniciaron sus recorrido hace menos de media hora`
                    }
                    if (listaDiferencias[i] < 10) {
                        estadoServicio.textContent = `Iniciaron sus recorrido hace menos de 10 minutos`
                    }
                    if (listaDiferencias[i] < 5 && listaDiferencias[i] > 0) {
                        estadoServicio.textContent = 'Iniciaron sus recorridos hace menos de 5 minutos'
                    }
                    if (Math.trunc(listaDiferencias[i]) == 0) {
                        estadoServicio.textContent = 'Están iniciando sus recorridos'
                    }
                    recorridoServicio.textContent = `1° Recorrido: ${rutaObtenida[i].recorrido}`
                    recorridoServicio2.textContent = `2° Recorrido: ${rutaObtenida[i].recorrido2}`;
            }
                else{
                    if(i == 0){
                        nombreServicio.textContent = `Primer servicio del día ${rutaObtenida[i].nombre} Hrs`;
                      }
                      else if(i == (rutaObtenida.length)){
                        nombreServicio.textContent = `Último servicio del día ${rutaObtenida[i].nombre} Hrs`;
                      }
                      else{
                        nombreServicio.textContent = `Servicio de las ${rutaObtenida[i].nombre} Hrs`;
                      }
                    if (listaDiferencias[i] >= 120) {
                        estadoServicio.textContent = 'Inició su recorrido hace un par horas'
                    }
                    if (listaDiferencias[i] > 60 && listaDiferencias[i] < 120) {
                        estadoServicio.textContent = 'Inició su recorrido hace mas de 1 hora'
                    }
                    if (listaDiferencias[i] == 60) {
                        estadoServicio.textContent = 'Inició su recorrido hace 1 hora'
                    }
                    if (listaDiferencias[i] < 60) {
                        estadoServicio.textContent = `Inició su recorrido hace menos de 1 hora`
                    }
                    if (listaDiferencias[i] < 30) {
                        estadoServicio.textContent = `Inició su recorrido hace menos de media hora`
                    }
                    if (listaDiferencias[i] < 15) {
                        estadoServicio.textContent = `Inició su recorrido hace menos de 15 minutos`
                    }
                    if (listaDiferencias[i] < 10) {
                        estadoServicio.textContent = `Inició su recorrido hace menos de 10 minutos`
                    }
                    if (listaDiferencias[i] < 5 && listaDiferencias[i] > 2) {
                        estadoServicio.textContent = 'Inició su recorrido hace menos de 5 minutos'
                    }
                    if (Math.abs(listaDiferencias[i]) >= 0 && listaDiferencias[i] <= 2) {
                        estadoServicio.textContent = 'Está iniciando su recorrido'
                    }
                    recorridoServicio.textContent = `Recorrido: ${rutaObtenida[i].recorrido}`;
            }
        }
                else{
                    if((Object.keys(rutaObtenida[i])).length > 4){
                        if(i == 0){
                            nombreServicio.textContent = `Primeros servicios del día ${rutaObtenida[i].nombre} Hrs`;
                          }
                          else if(i == (rutaObtenida.length)){
                            nombreServicio.textContent = `Últimos servicio del día ${rutaObtenida[i].nombre} Hrs`;
                          }
                          else{
                            nombreServicio.textContent = `Servicios de las ${rutaObtenida[i].nombre} Hrs`;
                          }
                        
                        if (Math.abs(listaDiferencias[i]) >= 120) {
                            estadoServicio.textContent = 'Iniciarán sus recorridos en un par horas'
                        }
                        if (Math.abs(listaDiferencias[i]) > 60 && Math.abs(listaDiferencias[i]) < 120) {
                            estadoServicio.textContent = 'Iniciarán sus recorridos en poco más de 1 hora'
                        }
                        if (Math.abs(listaDiferencias[i]) == 60) {
                            estadoServicio.textContent = 'Iniciarán sus recorridos en 1 hora'
                        }
                        if (Math.abs(listaDiferencias[i]) < 60) {
                            estadoServicio.textContent = 'Iniciarán sus recorridos en menos de 1 hora';
                        }
                        if (Math.abs(listaDiferencias[i]) < 30) {
                            estadoServicio.textContent = 'Iniciarán sus recorridos en menos de media hora';
                        }
                        if (Math.abs(listaDiferencias[i]) < 10) {
                            estadoServicio.textContent = 'Iniciarán sus recorridos en menos de 10 minutos';
                        }
                        if (Math.abs(listaDiferencias[i]) < 5 && Math.abs(listaDiferencias[i]) > 0) {
                            estadoServicio.textContent = 'Iniciarán sus recorridos en menos de 5 minutos'
                        }
                        recorridoServicio.textContent = `1° Recorrido: ${rutaObtenida[i].recorrido}`
                        recorridoServicio2.textContent = `2° Recorrido: ${rutaObtenida[i].recorrido2}`;
                    }
                    else{
                        
                        if(i == 0){
                            nombreServicio.textContent = `Primer servicio del día ${rutaObtenida[i].nombre} Hrs`;
                          }
                          else if(i == (rutaObtenida.length)- 1){
                            nombreServicio.textContent = `Último servicio del día ${rutaObtenida[i].nombre} Hrs`;
                          }
                          else{
                            nombreServicio.textContent = `Servicio de las ${rutaObtenida[i].nombre} Hrs`;
                          }
                        if (Math.abs(listaDiferencias[i]) >= 120) {
                            estadoServicio.textContent = 'Iniciará su recorrido en un par horas'
                        }
                        if (Math.abs(listaDiferencias[i]) > 60 && Math.abs(listaDiferencias[i]) < 120) {
                            estadoServicio.textContent = 'Iniciará su recorrido en poco mas de 1 hora'
                        }
                        if (Math.abs(listaDiferencias[i]) == 60) {
                            estadoServicio.textContent = 'Iniciaá su recorrido en 1 hora'
                        }
                        if (Math.abs(listaDiferencias[i]) < 60) {
                            estadoServicio.textContent = 'Iniciará su recorrido en menos de 1 hora'
                        }
                        if (Math.abs(listaDiferencias[i]) < 30) {
                            estadoServicio.textContent = 'Iniciará su recorrido en menos de media hora'
                        }
                        if (Math.abs(listaDiferencias[i]) < 10) {
                            estadoServicio.textContent = 'Iniciará su recorrido en menos de 10 minutos'
                        }
                        if (Math.abs(listaDiferencias[i]) < 5 && Math.abs(listaDiferencias[i]) > 0) {
                            estadoServicio.textContent = 'Iniciará su recorrido en menos de 5 minutos'
                        }
                        recorridoServicio.textContent = `Recorrido: ${rutaObtenida[i].recorrido}`;
                    }
                }

    }
    
    $('.resultados').css('display', 'flex');
    $('.mensaje2').css('display', 'flex');
    setTimeout( ()=> {
        irAlObjeto()
    }, 750);
})


resultadoscont.addEventListener('touchmove', ()=> {
    for (i = 0; i < resultadoscont.children.length; i++) {
        if(i < indiceDeBusqueda || i > indiceDeBusqueda){
            resultadoscont.children[i].classList.replace('opacar','normalizar');
            resultadoscont.children[indiceDeBusqueda].classList.replace('resaltado','normalizarResaltado')
        }
    }
})

indicacioncont.addEventListener('click',()=> {
    // actual4.textContent = '';
    // futuro4.textContent = '';
    $('.mensaje2').css('display', 'none')
    $('.resultados').css('display', 'none')
    $('.resultados2').css('display', 'none')
    opcionbase.selected = true;
    opcionbase2.selected = true;
    linea1.textContent = '';
    linea2.textContent = '';
    borrarGlobos();
})


function busquedaManual() {

    const botonOrigenCapital = document.getElementById('origenCapital');
    const botonCapitalDestino = document.getElementById('capitalDestino')
    const botonManual = document.getElementById('busquedaManual')
    const botonAuto = document.getElementById('busquedaAuto')
    const selector3 = document.menu3.selector3;
    const selector4 = document.menu4.selector4;
    const selector5 = document.menu5.selector5;
    const ingHora = document.getElementById('ingHora')
    const boton2 = document.getElementById('boton2')
    let mostrar1 = document.getElementById('mostrar1')
    let mostrar2 = document.getElementById('mostrar2')
    let mostrar3 = document.getElementById('mostrar3')
    let mostrar4 = document.getElementById('mostrar4')
    const opcionbase3 = selector3[0];
    const opcionbase4 = selector4[0];
    const opcionbase5 = selector5[0];
    let posicion3;
    let posicion4;
    let posicion5;
    let ruta2 = []
    let valorSelecionado3;
    let valorSelecionado4;
    let valorSelecionado5;
    let valores3 = []
    let valores4 = []
    let valores5 = []
    let diaRango2 = []
    let horaInputAMinutos
    let mensajeError = document.getElementById('mensajeError')
    let linea2 = document.getElementById('linea2');
    let linea3 = document.getElementById('linea3');
    let linea4 = document.getElementById('linea4')
    let tituloResultado = document.getElementById('tituloResultado');
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
        $('#ingHora').css('display', 'none');
        $('.aclaracion').css('display', 'none');
        opcionbase3.selected = true;
        opcionbase4.selected = true;
        opcionbase5.selected = true;
    })


    botonOrigenCapital.addEventListener('click', function () {
        $('#selector3').css('display', 'flex');
        $('#selector5').css('display', 'flex');
        $('#ingHora').css('display', 'flex');
        $('#selector4').css('display', 'none');
        $('#origenCapital').css('background-color', 'black');
        $('#origenCapital').css('color', 'var(--rojo2');
        $('#capitalDestino').css('background-color', 'var(--blanco');
        $('#capitalDestino').css('color', 'var(--black');
        opcionbase4.selected = true;
        opcionbase5.selected = true;
        ingHora.value = ''
    })

    botonCapitalDestino.addEventListener('click', function () {
        $('#selector4').css('display', 'flex');
        $('#selector5').css('display', 'flex');
        $('#ingHora').css('display', 'flex');
        $('#selector3').css('display', 'none');
        $('#capitalDestino').css('background-color', 'black');
        $('#capitalDestino').css('color', 'var(--rojo2');
        $('#origenCapital').css('background-color', 'var(--blanco');
        $('#origenCapital').css('color', 'var(--black');
        opcionbase3.selected = true;
        opcionbase5.selected = true;
        ingHora.value = ''
    })

    boton2.addEventListener('click', function () {

        let listaDelDia2 = []
        let listaDiferencias3 = [];
        let horariosEnEnteros2 = [];
        let proximo = 3000;

        // Definimos la posicion del selector 3
        if (opcionbase3.selected == true) {
            posicion3 = 0
        }

        for (opcion of selector3) {
            if (opcion.selected) {
                valorSelecionado3 = opcion
            }
        }

        for (i = 0; i < selector3.length; i++) {
            valores3.push(selector3[i])
        }

        for (i = 0; i < valores3.length; i++) {
            posicion3 = valores3.indexOf(valorSelecionado3)
        }

        // Definimos la posicion del selector 4

        if (opcionbase4.selected == true) {
            posicion4 = 0;
        }

        for (opcion of selector4) {
            if (opcion.selected) {
                valorSelecionado4 = opcion;
            }
        }

        for (i = 0; i < selector4.length; i++) {
            valores4.push(selector4[i])
        }

        for (i = 0; i < valores4.length; i++) {
            posicion4 = valores4.indexOf(valorSelecionado4)
        }

        // Definimos la posicion del selector 5

        if (opcionbase5.selected == true) {
            posicion5 = 0;
        }

        for (opcion of selector5) {
            if (opcion.selected) {
                valorSelecionado5 = opcion;
            }
        }

        for (i = 0; i < selector5.length; i++) {
            valores5.push(selector5[i])
        }

        for (i = 0; i < valores5.length; i++) {
            posicion5 = valores5.indexOf(valorSelecionado5)
        }

        // Aqui definimos donde localidad de salida y camino

        if (opcionbase4.selected == true && opcionbase3.selected == false) {
            ruta2 = todosDestinoTucuman[posicion3 - 1];
            linea2.textContent = selector3[posicion3].label;
        }

        if (opcionbase3.selected == true && opcionbase4.selected == false) {
            ruta2 = todosTucumanDestino[posicion4 - 1];
            linea2.textContent = selector4[posicion4].label;
        }


        //    Aqui definimos el array dependiendo el dia de la semana

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


        if ((posicion5 - 1) == 0) {
            linea3.textContent = `De ${selector5[posicion5].label}`;
        }
        else {
            linea3.textContent = `Días ${selector5[posicion5].label}`;
        }

        

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

        if (ingHora.value == '' || ingHora.value > 23) {
            mensajeError.textContent = 'Ingresa un número entre 0 y 23'
            $('#mensajeError').css('display', 'flex')
            setTimeout(() => {
                mensajeError.remove(), ingHora.value = '';
            }, 2000)

        }
        else {
            if (ingHora.value < 10) {
                tituloResultado.textContent = `Servicios cercanos a las 0${ingHora.value}:00 Hrs`;
            }
            else {
                tituloResultado.textContent = `Servicios cercanos a las ${ingHora.value}:00 Hrs`;
            }

            horaInputAMinutos = (ingHora.value) * 60

            for (let i = 0; i < horariosEnEnteros2.length; i++) {
                listaDiferencias3.push(horariosEnEnteros2[i] - horaInputAMinutos)
            }



            for (i = 0; i < rutaObtenidaManual.length; i++){
    
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
                if((Object.keys(rutaObtenidaManual[i])).length > 3){
                    let p3 = document.createElement('P');
                    p3.classList.add('actual3');
                    resultado.appendChild(p3);
                }
                resultadoscont.appendChild(resultado);
                mensaje2.appendChild(resultadoscont)
                
            }
            function irAlObjeto() {
                let a = resultadoscont.children[indiceDeBusqueda];
                a.scrollIntoView({behavior: 'smooth', block:'center'});
            };

            for (let i = 0; i < listaDiferencias3.length; i++) {
                if (listaDiferencias3[i] >= 0) {
                    proximo = Math.min(proximo, listaDiferencias3[i]);
                    indiceDeBusqueda = listaDiferencias3.indexOf(proximo);
                }
                else{
                    indiceDeBusqueda = (rutaObtenidaManual.length) - 1;
                }
            }

            

            resultadoscont.children[indiceDeBusqueda].classList.add('resaltado');
            resultadoscont.classList.add('opacarFondo');
            mensaje2.appendChild(indicacioncont);

    
            console.log(proximo)
            for (i = 0; i < resultadoscont.children.length; i++) {
                if(i < indiceDeBusqueda || i > indiceDeBusqueda){
                    resultadoscont.children[i].classList.add('opacar')
                }
            }

            console.log(rutaObtenidaManual)

            for (i = 0; i < (resultadoscont.children).length; i++){
                nombreServicioManual = (resultadoscont.children[i]).children[1];
                recorridoServicioManual = (resultadoscont.children[i]).children[2];
                recorridoServicio2Manual = (resultadoscont.children[i]).children[3];
                if((Object.keys(rutaObtenidaManual[i])).length > 3){
                    if(rutaObtenidaManual.length == 1){
                        nombreServicioManual.textContent = `Únicos servicios del día ${rutaObtenidaManual[i].nombre} Hrs`;
                    }
                    if(i == 0){
                        nombreServicioManual.textContent = `Primeros servicios del día ${rutaObtenidaManual[i].nombre} Hrs`;
                    }
                    else if(i == (rutaObtenidaManual.length) - 1){
                        nombreServicioManual.textContent = `Últimos servicios del día ${rutaObtenidaManual[i].nombre} Hrs`;
                    }
                    else{
                        nombreServicioManual.textContent = `Servicios de las ${rutaObtenidaManual[i].nombre} Hrs`
                    }
                    recorridoServicioManual.textContent = `1° Recorrido: ${rutaObtenidaManual[i].recorrido}`;
                    recorridoServicio2Manual.textContent = `2° Recorrido: ${rutaObtenidaManual[i].recorrido2}`;
                }
                else{
                    if(rutaObtenidaManual.length == 1){
                        nombreServicioManual.textContent = `Único servicio del día ${rutaObtenidaManual[i].nombre} Hrs`;
                    }
                    if(i == 0){
                        nombreServicioManual.textContent = `Primer servicio del día ${rutaObtenidaManual[i].nombre} Hrs`
                    }
                    else if(i == (rutaObtenidaManual.length) - 1){
                        nombreServicioManual.textContent = `Último servicio del día ${rutaObtenidaManual[i].nombre} Hrs`;
                    }
                    else{
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
                $('.mensaje2').css('display', 'flex');
                setTimeout( ()=> {
                    irAlObjeto()
                }, 750);
            

        }
    })

    indicacioncont.addEventListener('click', function () {
        $('.mensaje2').css('display', 'none');
        $('.resultados').css('display', 'none');
        linea2.textContent = '';
        linea3.textContent = '';

        // $('#selector3').css('display','none')      
        // $('#selector4').css('display','none') 
        // $('#selector5').css('display','none') 
        // $('#ingHora').css('display','none')
        // $('#capitalDestino').css('background-color', 'var(--blanco');
        // $('#capitalDestino').css('color', 'var(--black');
        // $('#origenCapital').css('background-color', 'var(--blanco');
        // $('#origenCapital').css('color', 'var(--black'); 
        // opcionbase3.selected = true;
        // opcionbase4.selected = true;
        // opcionbase5.selected = true;
        // ingHora.value = '';
        // botonOrigenCapital.selected = false;
        // botonCapitalDestino.selected = false;
    })
}


















