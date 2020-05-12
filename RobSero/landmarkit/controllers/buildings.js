const Building = require('../models/Buildings')




// ------------------------------ GET BUILDINGS SECTION -------------------------------------

async function getAllbuildings(req,res){
  try {
    const allBuildings = await Building.find().populate('user').populate('comments.user')
    res.status(200).json(allBuildings)
  } catch (err) {
    res.status(500).json(err)
  }
}

async function getOnebuilding(req,res){
  try {
    const oneBuilding = await Building.findById(req.params.id).populate('user').populate('comments.user')
    if (!oneBuilding) {
      throw new Error()
    }
    res.status(200).json(oneBuilding)
  } catch (err){
    res.status(404).json('building not found')
  }
}

// ------------------------------ CREATE SECTION -------------------------------------

async function createBuilding(req,res){
  req.body.user = req.currentUser
  try {
    const newBuilding = await Building.create(req.body)
    res.status(201).json(newBuilding)
  } catch (err){
    res.status(422).json(err)
  }
}

// ------------------------------ UPDATE SECTION -------------------------------------

async function updateBuilding(req,res){
  try {
    const singleBuilding = await Building.findById(req.params.id)
    if (!singleBuilding) {
      throw new Error('Could not find building')
    }
    if (!singleBuilding.user.equals(req.currentUser._id)){
      throw new Error('Not eligable to update this building')
    }
    Object.assign(singleBuilding, req.body)
    await singleBuilding.save()
    res.status(202).json(singleBuilding)
  } catch (err){
    res.status(422).json(err.message)
  }
}

// ------------------------------ DELETE SECTION -------------------------------------

async function deleteBuilding(req,res){
  try {
    const singleBuilding = await Building.findById(req.params.id)
    if (!singleBuilding) {
      throw new Error('Could not find building')
    }
    if (!singleBuilding.user.equals(req.currentUser._id)){
      throw new Error('Not eligable to delete this building')
    }
    await singleBuilding.remove()
    res.status(201).json('deleted successfully')
  } catch (err){
    res.status(422).json(err.message)
  }
}


// ------------------------------ COMMENTS SECTION -------------------------------------

async function addComment(req,res){
  try {
    const singleBuilding = await Building.findById(req.params.id)
    if (!singleBuilding) {
      throw new Error('Could not find building')
    }
    console.log(req.currentUser)
    
    req.body.user = req.currentUser
    singleBuilding.comments.push(req.body)
    await singleBuilding.save()
    res.status(201).json('comment added successfully')
  } catch (err){
    res.status(422).json(err.message)
  }
}

async function removeComment(req,res){
  try {
    const singleBuilding = await Building.findById(req.params.id)
    if (!singleBuilding) {
      throw new Error('Could not find building')
    }
    const commentToRemove = singleBuilding.comments.id(req.params.commentId)
    if (!commentToRemove) {
      throw new Error('comment could not be found, this may already be removed!')
    }

    if (!commentToRemove.user.equals(req.currentUser._id)){
      throw new Error('You are not authorized to delete this comment')
    }
    await commentToRemove.remove()
    await singleBuilding.save()
    res.status(201).json('comment removed successfully')
  } catch (err){
    res.status(422).json(err.message)
  }
}










module.exports = {
  get: getAllbuildings,
  show: getOnebuilding,
  create: createBuilding,
  update: updateBuilding,
  delete: deleteBuilding,
  comment: addComment,
  removeComment: removeComment
}