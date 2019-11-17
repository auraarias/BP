chartIt();

async function chartIt(){
const data= await getData();
const ctx = document.getElementById('myChartUno').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: data.hora,
        datasets: [
            {
                label: 'Sístole',
                data: data.sis,
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
                data: data.dias,
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
                data: data.BPM,
                yAxisID: 'y-axis-2',
                tension: 0.4,
                pointStyle: 'rectRounded',
                pointBorderWidth: 5,
                pointHoverRadius: 10,
                fill: false,
                borderColor:'#D62B87',
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
    const hora = []
    const sis = []
    const dias = []
    const BPM = []

    const response = await fetch('pacienteUno.csv');
    const data = await response.text();

    const table = data.split('\n').slice(1);
    table.forEach( row => {
        const columns = row.split(/[/,]/);
        const hour = columns [1];
        hora.push(hour);
        const sistole = columns [2];
        sis.push(sistole);
        const diastole = columns [3];
        dias.push(diastole);
        const PPM = columns [4];
        BPM.push(PPM);
    }) 

    return {hora, sis, dias, BPM};
}