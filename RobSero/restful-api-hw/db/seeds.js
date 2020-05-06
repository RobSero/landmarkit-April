const mongoose = require('mongoose')
const dbURI = 'mongodb://localhost/buildingsDB'
const Buildings = require('../models/building')
const User = require('../models/user')

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true } ,
  async (err,db) => {
    try {
      if (err){
        return console.log(err)
      } else {
        await db.dropDatabase()
  
        const user = await User.create({
          name: 'rob',
          username: 'robbo',
          age: 26,
          password: 'pass',
          passwordConfirmation: 'pass'
        })
        console.log(user)
  
        for (let i = 0; i < 15; i++){
          const newBuilding = await Buildings.create(
            {
              'name': `building ${i}`,
              'age': i,
              'visitorsPerYear': i * 10,
              'height': i * 5,
              'active': true
            })
          console.log(newBuilding)
        }
        
      }
    } catch (err){
      console.log(err)
      
    }
   
  }
)