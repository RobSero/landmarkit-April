const User = require('../models/user')

async function register(req,res){

  try {
    const newUser = await User.create(req.body)
    res.status(201).json(`ADDED YOU YAY! ${newUser}`)
  } catch (err) {
    res.status(422).json(err)
  }
}

async function updateUser(req,res){
  try {
    const newUser = await User.create(req.body)
    res.status(201).json(`ADDED YOU YAY! ${newUser}`)
  } catch (err) {
    res.status(422).json(err)
  }
}

module.exports = {
  register: register,
  update: updateUser
}