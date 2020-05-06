// * rename your file to reflect your resource
const Buildings = require('../models/building')
// * Create the controllers for your resouce here (index, create), (show, update delete optional)


async function getAllBuildings(req,res) {
  try {
    const allBuildings = await Buildings.find()
    res.status(200).json(allBuildings)
  } catch (err) {
    res.status(422).json(err)
  }
}

async function createBuilding(req,res){
  try {
    const newBuilding = await Buildings.create(req.body)
    res.status(201).json(newBuilding)
  } catch (err) {
    res.status(404).json(err)
  }
  
}

async function showBuilding(req,res){
  try {
    const oneBuilding = await Buildings.findById(req.params.id)
    if (!oneBuilding) {
      throw new Error()
    }
    res.status(200).json(oneBuilding)
  } catch (err) {
    res.status(422).json(err)
  }
}

async function deleteBuilding(req,res){
  try {
    await Buildings.deleteOne({ _id: req.params.id })
    res.json('DELETED WOO')
  } catch (err){
    res.status(422).json(err)
  }
}

async function updateBuilding(req,res){
  try {
    const building = await Buildings.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    res.status(202).json(building)
  } catch (err){
    res.status(422).json(err)
  }
  
}



module.exports = {
  getAll: getAllBuildings,
  create: createBuilding,
  show: showBuilding,
  delete: deleteBuilding,
  update: updateBuilding
}
// * export your controllers for use in the router