const Building = require('../models/Buildings')




// ------------------------------ GET BUILDINGS SECTION -------------------------------------

async function getAllbuildings(req,res,next){
  try {
    const allBuildings = await Building.find().populate('user').populate('comments.user')
    res.status(200).json(allBuildings)
  } catch (err) {
    next(err)
  }
}

async function getOnebuilding(req,res,next){
  try {
    const oneBuilding = await Building.findById(req.params.id).populate('user').populate('comments.user')
    if (!oneBuilding) {
      throw new Error('Building not found')
    }
    res.status(200).json(oneBuilding)
  } catch (err){
    next(err)
  }
}

// ------------------------------ CREATE SECTION -------------------------------------

async function createBuilding(req,res,next){
  req.body.user = req.currentUser
  try {
    const newBuilding = await Building.create(req.body)
    res.status(201).json(newBuilding)
  } catch (err){
    next(err)
  }
}

// ------------------------------ UPDATE SECTION -------------------------------------

async function updateBuilding(req,res,next){
  try {
    const singleBuilding = await Building.findById(req.params.id)
    if (!singleBuilding) {
      throw new Error('Building not found')
    }
    if (!singleBuilding.user.equals(req.currentUser._id)){
      throw new Error('Not authorized to do this')
    }
    Object.assign(singleBuilding, req.body)
    await singleBuilding.save()
    res.status(202).json(singleBuilding)
  } catch (err){
    next(err)
  }
}

// ------------------------------ DELETE SECTION -------------------------------------

async function deleteBuilding(req,res,next){
  try {
    const singleBuilding = await Building.findById(req.params.id)
    if (!singleBuilding) {
      throw new Error('Building not found')
    }
    if (!singleBuilding.user.equals(req.currentUser._id)){
      throw new Error('Not authorized to do this')
    }
    await singleBuilding.remove()
    res.status(201).json('deleted successfully')
  } catch (err){
    next(err)
  }
}


// ------------------------------ COMMENTS SECTION -------------------------------------

async function addComment(req,res,next){
  try {
    const singleBuilding = await Building.findById(req.params.id)
    if (!singleBuilding) {
      throw new Error('Building not found')
    }
    console.log(req.currentUser)
    
    req.body.user = req.currentUser
    singleBuilding.comments.push(req.body)
    await singleBuilding.save()
    res.status(201).json('comment added successfully')
  } catch (err){
    next(err)
  }
}

async function removeComment(req,res,next){
  try {
    const singleBuilding = await Building.findById(req.params.id)
    if (!singleBuilding) {
      throw new Error('Could not find building')
    }
    const commentToRemove = singleBuilding.comments.id(req.params.commentId)
    if (!commentToRemove) {
      throw new Error('comment could not be found, this may already be removed!')
    }
    // console.log(req.currentUser)
    // console.log(commentToRemove)
    // console.log(singleBuilding)

    if (commentToRemove.user.equals(req.currentUser._id) || singleBuilding.user.equals(req.currentUser._id) ){
      await commentToRemove.remove()
      await singleBuilding.save()
      res.status(201).json('comment removed successfully')
    } else {
      throw new Error('Not authorized to do this')
    }
    // console.log(!singleBuilding.user.equals(req.currentUser._id))
    // console.log(!commentToRemove.user.equals(req.currentUser._id))
  } catch (err){
    next(err)
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