const options = {
    chart: {
        type: 'bar',
        height: "100%"

    },

    series:[
        {
            'name' : 'sightings',
            'data' : [10,13,15,22,24,28]

        },
        {
            'name' : 'temperature',
            'data' : [31,32,27,29,28,31]

        },

        {
            'name' : 'Precipitation',
            'data' : [58,59,55,54,55,56]

        }
    ],
    xaxis:{
        categories: ['Jan','Feb','Mar','April','May','June']
    }
}

const chartElement = document.querySelector("#chart");
const chart = new ApexCharts(chartElement,options);

chart.render();