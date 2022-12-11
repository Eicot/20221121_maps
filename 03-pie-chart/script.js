const options= {
    chart: {
        'type' : 'pie',
        'height' : '100%'
    },

    series: [21,23,22,27,25],
    labels: ["English", "Mathematics", "Mother Tongue", "Science", "PE"],
    colors: ["#67597A", "#544E61", "#6E8894", "#85BAA1", "#CEEDDB"]
}

const chart = new ApexCharts (document.querySelector('#chart'),options);
chart.render();