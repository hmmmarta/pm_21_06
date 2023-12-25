
var ctx = document.getElementById('myChart').getContext('2d');

// Ваші дані для графік

var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['','Oct 14-20','','', 'Oct 21-27','','', 'Oct 28-3','','', 'Nov 4-10',''],
    datasets: [
      {
        label: 'Info 1',
        data: [
          { x: '', y: 12 },
          { x: 'Oct 14-20', y: 15 },
          { x: '', y: 25 },
          { x: '', y: 20 },
          { x: 'Oct 21-27', y: 15 },
          { x: '', y: 18 },
          { x: '', y: 17 },
          { x: 'Oct 28-3', y: 28 },
          { x: '', y: 21 },
          { x: '', y: 21 },
          { x: 'Nov 4-10', y: 32 },
          { x: '', y: 9 }
          // Додайте інші пари значень за аналогією
        ],
        pointBackgroundColor: 'white',
        pointBorderColor:"#9bf014",
        pointRadius: [0, 4, 0, 0, 4, 0, 0, 4, 0, 0, 4, 0 ],
        borderColor: '#cdd945',
        borderWidth: 3,
        tension: 0.4,
      },
      {
        label: 'Info 2',
        data: [
          { x: '', y: 15 },
          { x: 'Oct 14-20', y: 20 },
          { x: '', y: 18 },
          { x: '', y: 22 },
          { x: 'Oct 21-27', y: 28 },
          { x: '', y: 17 },
          { x: '', y: 20 },
          { x: 'Oct 28-3', y: 18 },
          { x: '', y: 23 },
          { x: '', y: 23 },
          { x: 'Nov 4-10', y: 15 },
          { x: '', y: 13 }
          // Додайте інші пари значень за аналогією
        ],
        pointBackgroundColor: 'white',
        pointBorderColor:"#62baf0",
        pointRadius: [0, 4, 0, 0, 4, 0, 0, 4, 0, 0, 4, 0 ],
        borderColor: '#5caee1',
        borderWidth: 3,
        tension: 0.4,
      }
    ]
  },
  options: {
    responsive: true,
    
    scales: {
      x: {
        type: 'category',
        grid: {
          display: false
        },
        ticks: { color: '#a3aec8' }
      },
      y: {
        min: 0,
        max: 40, 
        ticks: {
            stepSize: 10,
            color: '#a3aec8'
        }
      }
    },
    plugins: {
      legend:{
        display: true,       
        position: 'bottom',
        align: 'start',
        labels: {
          usePointStyle: true,
          color: '#a3aec8', 
          padding: 20
        },
      },

      tooltip: {
        enabled: true
      }
    }
  }
});
document.getElementById('myChart').style.filter = 'drop-shadow(0px 7px 2.5px rgba(0,0,0,0.18))';




function updateChartData() {
  fetch('./data.json') 
    .then(response => response.json())
    .then(newData => {
      myChart.data.datasets[0].data = newData.info1;
      myChart.data.datasets[1].data = newData.info2;

      myChart.data.labels = newData.labels;

      myChart.update();
    })
    .catch(error => {
      console.error('Failed to fetch data:', error);
    });
}

// Викликати функцію для першого разу
updateChartData();

