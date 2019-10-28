let name = document.getElementById("formName");
let lastName = document.getElementById("formLastName");

// UNO

let hourUno = document.getElementById("formHourUno");
let sisUno = document.getElementById("formSistoleUno");
let diasUno = document.getElementById("formDiastoleUno");
let bpmUno = document.getElementById("formBpmUno");

// DOS

let hourDos = document.getElementById("formHourDos");
let sisDos = document.getElementById("formSistoleDos");
let diasDos = document.getElementById("formDiastoleDos");
let bpmDos = document.getElementById("formBpmDos");

// TRES

let hourTres = document.getElementById("formHourTres");
let sisTres = document.getElementById("formSistoleTres");
let diasTres = document.getElementById("formDiastoleTres");
let bpmTres = document.getElementById("formBpmTres");

// CUATRO

let hourCuatro = document.getElementById("formHourCuatro");
let sisCuatro = document.getElementById("formSistoleCuatro");
let diasCuatro = document.getElementById("formDiastoleCuatro");
let bpmCuatro = document.getElementById("formBpmCuatro");

// CINCO

let hourCinco = document.getElementById("formHourCinco");
let sisCinco = document.getElementById("formSistoleCinco");
let diasCinco = document.getElementById("formDiastoleCinco");
let bpmCinco = document.getElementById("formBpmCinco");

let generar = document.getElementById("generar");
let hour = [];
let sis = [];
let dias = [];
let bpm = [];


async function getData() {
        
    const response = await fetch('datos.csv');
    const data = await response.text();


    const table = data.split('\n').slice(1);
    table.forEach( row => {
        const columns = row.split(/[,/]/);

        const mins = columns [1];
        hour.push(mins);
        
        const  sistole = columns [2];
        sis.push(sistole);

        const diastole = columns[3];
        dias.push(diastole);

        const ppm = columns[4];
        bpm.push(ppm);


    }) 

    // UNO

    hourUno.value = hour[0];
    sisUno.value = sis [0];
    diasUno.value = dias [0];
    bpmUno.value = bpm[0];

    // DOS

    hourDos.value = hour[1];
    sisDos.value = sis [1];
    diasDos.value = dias [1];
    bpmDos.value = bpm[1];

     // TRES

     hourTres.value = hour[2];
     sisTres.value = sis [2];
     diasTres.value = dias [2];
     bpmTres.value = bpm[2];

      // CUATRO

    hourCuatro.value = hour[3];
    sisCuatro.value = sis [3];
    diasCuatro.value = dias [3];
    bpmCuatro.value = bpm[3];

     // CINCO

     hourCinco.value = hour[4];
     sisCinco.value = sis [4];
     diasCinco.value = dias [4];
     bpmCinco.value = bpm[4];

    


}

generar.addEventListener('click', () => {

 getData();

})


