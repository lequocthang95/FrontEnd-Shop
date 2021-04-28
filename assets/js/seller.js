var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['','JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG','SEP','OCT','NOV','DEC','',],
        datasets: [
            {
                label: '# Votes th',
                data: [0, 1100,3000,2500,1700,2500,3400,1100,2600,4200,3400,2800,2300,0],
                pointRadius: 0,
                backgroundColor: '#f5aa5d',
            },
            {
                label: '# Votes',
                data: [0, 300,500,300,900,200,500,800,500,800,50,150,600,0],
                pointRadius: 0,
                backgroundColor: '#6aac54',
            },
    ],
    },
   
    options: {
        fill: true,
        scales: {
            y: {
                stacked: true
            },
        }
    }
});
