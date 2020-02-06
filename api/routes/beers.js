const express = require("express");
router = express.Router();

const { getBeers } = require("../controllers/index.js")

router.get("/get", async (req, res) => {
  console.log("/beers/get hit")  
  const beers = await getBeers()
  res.status(200).json( beers )
})

module.exports = router;
