const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
let urlencodedParser = bodyParser.urlencoded({
    extended: false
})



let name = "";
let lastName = "";

// UNO

let hourUno = "";
let sisUno = "";
let diasUno = "";
let bpmUno = "";

// DOS

let hourDos = "";
let sisDos = "";
let diasDos = "";
let bpmDos = "";

// TRES

let hourTres = "";
let sisTres = "";
let diasTres = "";
let bpmTres = "";

// CUATRO

let hourCuatro = "";
let sisCuatro = "";
let diasCuatro = "";
let bpmCuatro = "";

// CINCO

let hourCinco = "";
let sisCinco = "";
let diasCinco = "";
let bpmCinco = "";

let arduino = 0;

app.use(cors());

app.listen(5500, () => console.log('listening at 5500'));

app.get("/auraarias", (req, res) => {
    res.json(
        [{
                "Nombre": name,
                "Apellido": lastName,
                "Hora": hourUno,
                "Sistole": sisUno,
                "Diastole": diasUno,
                "BPM": bpmUno,
            },
            {
                "Nombre": name,
                "Apellido": lastName,
                "Hora": hourDos,
                "Sistole": sisDos,
                "Diastole": diasDos,
                "BPM": bpmDos,
            },
            {
                "Nombre": name,
                "Apellido": lastName,
                "Hora": hourTres,
                "Sistole": sisTres,
                "Diastole": diasTres,
                "BPM": bpmTres,
            },
            {
                "Nombre": name,
                "Apellido": lastName,
                "Hora": hourCuatro,
                "Sistole": sisCuatro,
                "Diastole": diasCuatro,
                "BPM": bpmCuatro,
            },
            {
                "Nombre": name,
                "Apellido": lastName,
                "Hora": hourCinco,
                "Sistole": sisCinco,
                "Diastole": diasCinco,
                "BPM": bpmCinco,

            }
        ]
    );

});

app.get("/arduino", (req,res)=>{
    res.send(arduino + "");
    console.log("request");

});

app.get('/arduinoUno', (req,res)=>{
    arduino = 1;
    res.send(arduino + "");
    console.log("Uno");
});

app.get('/arduinoCero', (req,res)=>{
    arduino = 0;
    res.send(arduino + "");
    console.log("Cero");


});


app.post('/cualquierRuta', urlencodedParser, (req, res) => {

    // UNO

    hourUno = req.body.hourUno;
    sisUno = req.body.sistoleUno;
    diasUno = req.body.diastoleUno;
    bpmUno = req.body.bpmUno;

    // DOS

    hourDos = req.body.hourDos;
    sisDos = req.body.sistoleDos;
    diasDos = req.body.diastoleDos;
    bpmDos = req.body.bpmDos;

    // TRES

    hourTres = req.body.hourTres;
    sisTres = req.body.sistoleTres;
    diasTres = req.body.diastoleTres;
    bpmTres = req.body.bpmTres;

    // CUATRO

    hourCuatro = req.body.hourCuatro;
    sisCuatro = req.body.sistoleCuatro;
    diasCuatro = req.body.diastoleCuatro;
    bpmCuatro = req.body.bpmCuatro;

    // CINCO

    hourCinco = req.body.hourCinco;
    sisCinco = req.body.sistoleCinco;
    diasCinco = req.body.diastoleCinco;
    bpmCinco = req.body.bpmCinco;

    res.send("Enviado");
});

app.use(express.static('public'));