const jwt = require('jsonwebtoken')
const User = require('../models/Users')
const secret = 'Test secret'


//get payoad from the webtoken to find id
async function secureRoute(req,res,next){
  try {
    if (!req.headers.authorization) {
      throw new Error('Not authorized to do this')
    }
    const token = req.headers.authorization.replace('Bearer ', '')
    const payload = await jwt.verify(token,secret)
    
    const user = await User.findById(payload.sub)
    if (!user) {
      throw new Error('Not authorized to do this')
    }

    req.currentUser = user
    next()
  } catch (err){
    // console.log(err)
    next(err)
  }
}

//find user and check if they exist
//check if token is valid & not expired

// if none of this is true, send 422 response

module.exports = secureRoute