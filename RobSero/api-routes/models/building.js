const mongoose = require('mongoose')

const buildingSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
  visitorsPerYear: { type: Number, default: 500000 },
  height: { type: Number, required: true },
  active: { type: Boolean, required: false }
}, {
  timestamps: true
})

module.exports = mongoose.model('Building', buildingSchema)