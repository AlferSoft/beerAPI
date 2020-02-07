const mongoose = require("mongoose")

const Beer = require("../models/Beer.js")

module.exports = {
  async getBeers(){
    try {
    return Beer.find()
    } catch (err) {
      console.error("[Controler] error retrieving beers from the DB", err)
    }
  },
  
  async getBeerById(beerId){
    try {
    return Beer.find({
      id: beerId 
    })
    } catch (err) {
      console.error("[Controler] error retrieving beer with id " + beerId  + "  from the DB", err)
    }
  }
}
