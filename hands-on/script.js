const options =  {
    chart: {
        type: 'bar',
        height:"100%"
    },
    series:[
        
    ],
    // what to show there is no data
    noData: {
        "text": "Loading..."
    }
   
}
 
// create the chart
const chart = new ApexCharts(document.querySelector('#chart'), options);
 
// render the chart
chart.render()

window.addEventListener("DOMContentLoaded", async function(){
    const data = await loadData('data.js');
    const series = transformData(data);

    chart.updateSeries([
        {
            'name':'Sales',
            'data': series
        }
    ])

})