const express = require('express');
const bodyParser = require('body-parser')
const app = express();
let urlencodedParser = bodyParser.urlencoded({ extended: false })

let name = "";
let lastName = "";
let contenidoCSV = "";
let arduino = false;

app.listen(3000, () => console.log('listening at 3000'));

app.get("/home", (req, res) => {
    res.send("home.html");
});

app.post('/form', urlencodedParser,  (req, res) => {
    contenidoCSV = req.body.name;
    lastName = req.body.lastName;

    console.log("Contenido CVS: " + contenidoCSV);
});

app.post('/arduino', (req, res) = {
    
});

app.use(express.static('public'));