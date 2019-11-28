let hour = [];
let sis = [];
let dias = [];
let bpm = [];


window.addEventListener('load', setup);
async function setup() {
  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: hour,

      datasets: [

        {
          label: 'Sístole',
          data: sis,
          yAxisID: 'y-axis-1',
          tension: 0,
          pointStyle: 'rectRounded',
          pointBorderWidth: 5,
          pointHoverRadius: 10,
          fill: false,
          borderColor: '#29FFFF',
          backgroundColor: '#29FFFF',
          borderWidth: 4,

        },
        {
          label: 'Diástole',
          data: dias,
          tension: 0,
          pointStyle: 'rectRounded',
          pointBorderWidth: 5,
          pointHoverRadius: 10,
          fill: false,
          borderColor: '#2B32D6',
          backgroundColor: '#2B32D6',
          borderWidth: 4

        },
        {
          label: 'PPM',
          data: bpm,
          yAxisID: 'y-axis-2',
          tension: 0.4,
          pointStyle: 'rectRounded',
          pointBorderWidth: 5,
          pointHoverRadius: 10,
          fill: false,
          borderColor: '#D62B87',
          backgroundColor: '#D62B87',
          borderWidth: 3

        },
      ]
    },
    options: {

      responsive: true,
      hoverMode: 'index',
      stacked: false,
      title: {
        display: true,
      },
      scales: {
        xAxes: [{

          gridLines: {
            borderDash: [2, 5],
          },

          ticks: {
            beginAtZero: true,
            fontFamily: 'Poppins',
            fontSize: 12,
            fontStyle: 'Bold',
            padding: 10,
          },

        }],

        yAxes: [{
          type: 'linear',
          display: true,
          position: 'left',
          id: 'y-axis-1',

          ticks: {
            beginAtZero: true,
            max: 150,
            min: 50,
            stepSize: 10,
            fontFamily: 'Poppins',
            fontSize: 13,
            fontColor: '#000000'
          },

          scaleLabel: {
            display: true,
            labelString: 'mmHg',
            fontFamily: 'Poppins',
            fontSize: 15,
            fontStyle: 'Bold',
            fontColor: '#000000'
          },

          gridLines: {
            tickMarkLength: 25,
            display: false,
          },

        }, {

          type: 'linear',
          display: true,
          position: 'right',
          id: 'y-axis-2',


          // grid line settings
          gridLines: {
            drawOnChartArea: false, // only want the grid lines for one axis to show up
            tickMarkLength: 20,
            display: false,
          },

          ticks: {
            max: 200,
            min: 50,
            stepSize: 25,
            beginAtZero: true,
            fontFamily: 'Poppins',
            fontSize: 13,
            fontColor: '#D62B87',
          },

          scaleLabel: {
            display: true,
            labelString: 'PPM',
            fontFamily: 'Poppins',
            fontSize: 15,
            fontColor: '#D62B87',
            fontStyle: 'Bold',
          },



        }],
      }


    }
  });
}



async function getData() {

  const response = await fetch('http://127.0.0.1:5500/auraarias');
  const data = await response.json();
  console.log("getData");

  data.forEach(e => {
    hour.push(e.Hora);
    sis.push(e.Sistole);
    dias.push(e.Diastole);
    bpm.push(e.BPM);
  });

}

getData();

function Login() {
  var done = 0;
  var usuario = document.login.usuario.value;
  var password = document.login.password.value;
  if (usuario == "1234567890" && password == "1234") {
    window.location = "index.html";
  }
  if (usuario == "1987654321" && password == "1234") {
    window.location = "homeEnfermera.html";
  }
}

document.oncontextmenu = function () {
  return false
}