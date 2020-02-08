const mongoose = require("mongoose")

const Beer = require("../models/Beer.js")

module.exports = {

  //read controllers
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

  //create controllers
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

  // update controllers
  async updateBeerByName(body){
    const { name } = body
    const update = { ...body }
    delete update.name
    const updatedBeer = await Beer.findOneAndUpdate( {name}, update, {new: true} )
      .catch( err => console.error("[Controller] Error updating beer by name", err))
    return updatedBeer
  },

  async updateBeerByBeerId(body){
    const { id: beerId } = body
    const update = { ...body }
    delete update.id
    const updatedBeer = await Beer.findOneAndUpdate( {id: beerId}, update, {new: true} )
      .catch( err => console.error("[Controller] Error updating beer by beerId", err) )
    return updatedBeer
  },

  async updateBeerById(body){
    const { _id } = body
    const update = { ...body }
    delete update._body
    const updatedBeer = await Beer.findByIdAndUpdate( _id, update, {new: true})
      .catch( err => console.error("[Controller] Error updating beer by _id", err))
    return updatedBeer 
  },

  //remove controllers
  async removeByName(body){
    const { name } = body
    const removedBeer = await Beer.findOneAndRemove({name})
      .catch(err => console.error("[Controller] Error removing beer by name" ,err))
    return removedBeer
  },

  async removeByBeerId(body){
    const { id: beerId } = body
    const removedBeer = await Beer.findOneAndRemove({id: beerId})
      .catch(err => console.error("[Controller] Error removing beer by beerId" ,err))
    return removedBeer
  },

  async removeById(body){
    const { _id } = body
    const removedBeer = await Beer.findByIdAndRemove(_id)
      .catch(err => console.error("[Controller] Error removing beer by _id" ,err))
    return removedBeer
  }
}
