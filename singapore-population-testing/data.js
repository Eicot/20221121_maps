async function loadData() {
    const response = await axios.get("data.json");
    // console.log(response)
    return response.data;
}

loadData();

function transformData(data) {
    const population = data[1].map(function(dataPoint) {
        return {
            "amount" : dataPoint.value,
            "year": dataPoint.date
        }
    })
    console.log("population=", population);

    const series = [];

    for (let dataPoint of population) {
        const pop = dataPoint.amount;
        const years = dataPoint.year;
        // console.log(pop);
        // console.log(years);

        series.push({
            x: dataPoint.year,
            y: dataPoint.amount
        })
    }
    console.log(series); 
    return series;  

}


