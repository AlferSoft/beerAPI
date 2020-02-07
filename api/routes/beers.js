const express = require("express");
router = express.Router();

const { 
  getBeers, 
  getBeerById,
  createBeer
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

module.exports = router;
