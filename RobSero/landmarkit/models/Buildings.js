const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
})


const BuildingSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  age: { type: Number },
  visitorsPerYear: { type: Number },
  image: { type: String, required: true },
  comments: [commentSchema],
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
})


module.exports = mongoose.model('building', BuildingSchema)