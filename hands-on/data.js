async function loadData() {
    const response = await axios.get("data.json");
    // console.log (response.data);
    return response.data;
  }

loadData();

function transformData(data) {
    const price = data.map(function(dataPoint) {
      return {
        "price": dataPoint.resale_price,
        "month": dataPoint.month
      }
    })
    console.log("price=", price)

    const shortlisted = [];
    for (let dataPoint of price){
      if (dataPoint.price > 300000 ) {
        shortlisted.push(dataPoint);
      }
    }
    console.log("shortlisted=", shortlisted);

    const series = [];
    for (let dataPoint of shortlisted) {
      const resalePrice = dataPoint.price;
      const months = dataPoint.month;
      console.log(resalePrice);
      console.log(months);

      series.push({
        x: dataPoint.price,
        y: dataPoint.month
      })
    }
    
    console.log(series);
    return series;
  
  }




// function transformData(data) {
//   let earnings = [];
//   for (let dataPoint of data) {
//     earnings.push({
//       "amount": dataPoint.resale_price,
//       "date": dataPoint.town
//     })
//     console.log (earnings)
//   }
// }








