const mongoose = require('mongoose')


const BuildingSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  age: { type: Number },
  visitorsPerYear: { type: Number },
  image: { type: String, required: true }
}, {
  timestamps: true
})


module.exports = mongoose.model('building', BuildingSchema)