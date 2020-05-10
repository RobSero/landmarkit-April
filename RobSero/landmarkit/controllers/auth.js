const User = require('../models/Users')
const secret = 'Test secret'
const jwt = require('jsonwebtoken')


async function register(req,res){
  try {
    await User.create(req.body)
    res.status(201).json({ message: `Thanks for signing up ${req.body.username}!` })
  } catch (err){
    res.status(422).json(err)
  }
}

//validate username and pw
//provide a valid token

async function login(req,res){
  try {
    const user = await User.findOne({ username: req.body.username })
    if (!user || !user.validatePassword(req.body.password)){
      throw new Error()
    } else {
      const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '1 day' })
      res.status(202).json({
        message: `Welcome back ${user.username}`,
        token: token
      })
    }
  } catch (err){
    res.status(422).json('Wrong username or password')
  }
}

module.exports = {
  register,
  login
}