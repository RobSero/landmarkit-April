const Building = require('../models/Buildings')

async function getAllbuildings(req,res){
  try {
    const allBuildings = await Building.find()
    res.status(200).json(allBuildings)
  } catch (err) {
    res.status(500).json('OOPS THIS IS OUR PROBLEM, TRY AGAIN LATER')
  }
}


async function getOnebuilding(req,res){
  try {
    const oneBuilding = await Building.findById(req.params.id)
    if (!oneBuilding) {
      throw new Error()
    }
    res.status(200).json(oneBuilding)
  } catch (err){
    res.status(404).json('building not found')
  }
}


async function createBuilding(req,res){
  try {
    const newBuilding = await Building.create(req.body)
    res.status(201).json(newBuilding)
  } catch (err){
    res.status(422).json(err)
  }
}


async function updateBuilding(req,res){
  try {
    const singleBuilding = await Building.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(202).json(singleBuilding)
  } catch (err){
    res.status(422).json(err)
  }
}

async function deleteBuilding(req,res){
  try {
    await Building.deleteOne({ _id: req.params.id })
    res.status(201).json('deleted successfully')
  } catch (err){
    res.status(422).json(err)
  }
}


module.exports = {
  get: getAllbuildings,
  show: getOnebuilding,
  create: createBuilding,
  update: updateBuilding,
  delete: deleteBuilding
}