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
        "place": dataPoint.town
      }
    })
    console.log("price=", price)

    const shortlisted =[];
    for (let dataPoint of price){
      if (dataPoint.price > 3000000 ) {
        shortlisted.push(dataPoint);
      }
    }
    console.log("shortlisted=", shortlisted);
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








