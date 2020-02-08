const express = require("express");
router = express.Router();

const { 
  getBeers, 
  getBeerById,
  createBeer,
  updateBeerByName,
  updateBeerByBeerId,
  updateBeerById,
  removeByName,
  removeByBeerId,
  removeById
} = require("../controllers/index.js")

router.get("/get", async (req, res) => {
  console.log("/beers/get hit")  
  const beers = await getBeers()
    .catch( err => {
      console.error("[Routes] Error retrieving full list of beers")
    })
  res.status(200).json( beers )
})

router.get("/get-single/:beerid", async (req, res) => {
  const beerId = req.params.beerid
  console.log("/beers/get-single" + beerId + " hit")  
  const beer = await getBeerById(beerId)
    .catch( err => {
      console.error("[Routes] Error retrieving single beer by Id", err)
    })
  if (beer.length !== 0) {
  res.status(200).json( beer )
  } else {
  res.status(200).send( "no beer found with such beer-id")
  }
})

router.post("/create", async (req, res) => {
  console.log("/beers/create hit")
  const newBeer = await createBeer(req.body)
    .catch( err => console.error("[Routes] Error creating new beer",err))
  res.status(200).json(newBeer)
})

router.post("/update-by-name", async (req, res) => {
  console.log("/beers/update-by-name hit")
  const updatedBeer = await updateBeerByName(req.body)
    .catch( err => console.error("[Routes] Error updating beer by name", err))
  res.status(200).json(updatedBeer)
})

router.post("/update-by-beerid", async (req, res) => {
  console.log("/beers/update-by-beerid hit")
  const updatedBeer = await updateBeerByBeerId(req.body)
    .catch( err => console.error("[Routes] Error updating beer by beerId", err))
  res.status(200).json(updatedBeer)
})

router.post("/update-by-id", async (req, res) => {
  console.log("/beers/update-by-id hit")
  const updatedBeer = await updateBeerById(req.body)
    .catch( err => console.error("[Routes] Error updating beer by id", err))
  res.status(200).json(updatedBeer)
})

router.post("/remove-by-name", async (req, res) => {
  console.log("/beers/remove-by-name hit")
  const removedBeer = await removeByName(req.body)
    .catch( err => console.error("[Routes] Error removing beer by name", err))
  res.status(200).json(removedBeer)
})

router.post("/remove-by-beerid", async (req, res) => {
  console.log("/beers/remove-by-beerid hit")
  const removedBeer = await removeByBeerId(req.body)
    .catch( err => console.error("[Routes] Error removing beer by beerId", err))
  res.status(200).json(removedBeer)
})

router.post("/remove-by-id", async (req, res) => {
  console.log("/beers/remove-by-id hit")
  const removedBeer = await removeById(req.body)
    .catch( err => console.error("[Routes] Error removing beer by name", err))
  res.status(200).json(removedBeer)
})

module.exports = router;
