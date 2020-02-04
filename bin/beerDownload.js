const fs = require("fs")
const axios = require("axios")
const delay = require("../helpers/delay.js")

async function importBeers() {

 // const testUrl = "https://api.punkapi.com/v2/beers?page=1&per_page=80"
 // const data = await axios.get(testUrl)
 // fs.appendFile("beers.json", JSON.stringify(data.data), (err) => { if (err) throw err})
 // console.log(data.data[0])
  
  let count = 1;
  let finish = false;
  const fullData = []
  while (!finish) {
    let url = `https://api.punkapi.com/v2/beers?page=${count}&per_page=80` 
    let data = await axios.get(url)
    if (data.data.length > 0) {
      fullData.push(...data.data)
      console.log(count)
      count++
      await delay(1000)
    } else {
      console.log(count)
      console.log("end")
      finish = true
      fs.appendFile("beers.json", JSON.stringify(fullData), err => { if (err) throw err})
    }
  }
}

importBeers()
  .catch(err => console.error("error @ importBeers", err));

