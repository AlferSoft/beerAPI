require("dotenv").config()
const mongoose = require("mongoose")
const Beer = require("../api/models/Beer.js")
const beers = require("../beers.json")


async function importBeers() {
  await mongoose
    .connect(process.env.DBURL, {useNewUrlParser: true})
    .then( db => console.log(`Connected to Mongo! Database name: ${db.connections[0].name}`))
    .catch(err => console.error("Error connecting to mongo", err))

  Beer.create(beers)
    .then( result => {
      console.log(`succesfully saved ${result.length} records from beers.json to the DB`)
      })
    .catch( err => {
      console.error("Error importing beers to the DB", err)
    })
    .then(() => {
      console.log("terminating connection to the database")
      mongoose.disconnect()
    })
}

importBeers()
  .catch( err => {console.error("error @ importBeers", err)})
