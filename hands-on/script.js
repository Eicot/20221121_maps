const options =  {
    chart: {
        type: 'line',
        height:"100%"
    },
    series:[
        // NO DATA
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
    const data = await loadData();
})