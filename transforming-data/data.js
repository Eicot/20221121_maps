async function loadData(url) {
    const response = await axios.get(url);
    return response.data;
  }
  
  
  function transformData(data) {
    //   let earnings = [];
    //   for (let dataPoint of data) {
    //     earnings.push({
    //       "amount": dataPoint.payment.amount,
    //       "date": new Date(dataPoint.completed_at)
    //     })
    //   }
  
    const earnings = data.map(function(dataPoint) {
      return {
        "amount": dataPoint.payment.amount,
        'date': new Date(dataPoint.completed_at)
      }
    })

    console.log("earnings", earnings)
    const shortlisted=[];
    for (let dataPoint of earnings) {
      if (dataPoint.date.getFullYear() == 2020) {
        shortlisted.push(dataPoint);
      }
    }
    console.log("shortlisted", shortlisted);
  }