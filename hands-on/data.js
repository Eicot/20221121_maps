async function loadData() {
    const response = await axios.get("data.json");
    // console.log (response.data);
    return response.data;
  }

loadData();

// function transformData(data) {
//     const price = data.map(function(dataPoint) {
//       return {
//         "price": dataPoint.resale_price,
//         "place": dataPoint.town
//       }
//     })
//     console.log("price", price)
// }

function transformData(data) {
  let earnings = [];
  for (let dataPoint of data) {
    earnings.push({
      "amount": dataPoint.resale_price,
      "date": dataPoint.town
    })
    console.log (earnings)
  }
}
