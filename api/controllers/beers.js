const mongoose = require("mongoose")

const Beer = require("../models/Beer.js")

module.exports = {
  async getBeers(){
    try {
    return Beer.find()
    } catch (err) {
      console.error("[Controler] error retrieving beers from the DB", err)
    }
  }
}
