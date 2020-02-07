const mongoose = require("mongoose")

const Beer = require("../models/Beer.js")

module.exports = {
  async getBeers(){
    try {
    return await Beer.find()
    } catch (err) {
      console.error("[Controller] Error retrieving beers from the DB", err)
    }
  },
  
  async getBeerById(beerId){
    try {
    return await Beer.find({
      id: beerId 
    })
    } catch (err) {
      console.error("[Controller] Error retrieving beer with id " + beerId  + "  from the DB", err)
    }
  },

  async createBeer(body){
    const NewBeer = new Beer({
      ...body
    })
    const createdBeer = await NewBeer.save()
      .catch( err =>{
        console.error("[Controller] Error saving new beer", err)
      })
    return createdBeer 
  }
}
