const express = require("express");
const router = express.Router();

router.use("/beers", require("./beers.js"))

module.exports = router;
