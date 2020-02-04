const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const beerSchema = Schema({
  id: Number,
  name: String,
  tagline: String,
  first_brewed: String,
  description: String,
  image_url: String,
  abv: Number,
  ibu: Number,
  target_fg: Number,
  target_og: Number,
  ebc: Number,
  srm: Number,
  ph: Number,
  attenuation_level: Number,
  volume: {
    value: Number,
    unit: String
  },
  boil_volume: {
    value: Number,
    unit: String
  },
  //add method
  //add ingredients
  food_pairing: [ String ],
  brewers_tips: String,
  contributed_by: String
    
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
})

const Beer = mongoose.model("Beer", beerSchema)

module.exports = Beer;
