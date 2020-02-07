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
  },

  async updateBeerByName(body){
    const { name } = body
    const update = { ...body }
    delete update.name
    const updatedBeer = await Beer.findOneAndUpdate( {name}, update, {new: true} )
      .catch( err => console.error("[Controller] Error updating beer by name", err))
    return updatedBeer
  },

  async updateBeerByBeerId(body){
    const { beerId } = body
  
  },

  async updateBeerById(body){
    const { id } = body
  
  }
}
