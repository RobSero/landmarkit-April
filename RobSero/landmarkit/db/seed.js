const mongoose = require('mongoose')
const User = require('../models/Users')
const Building = require('../models/Buildings')
const mongooseURL = 'mongodb://localhost:27017/landmarkDB'

mongoose.connect(mongooseURL, { useUnifiedTopology: true, useNewUrlParser: true }, 
  async (err, db)=>{
    try {
      if (err){
        return console.log(err)
      } else {
        console.log(db)
        await db.dropDatabase()


        const user = await User.create({
          username: 'robbo',
          email: 'rob@rob.com' ,
          password: 'pass',
          passwordConfirmation: 'pass'
        })
        console.log(user)
        
   
        for (let i = 0; i < 12; i++) {
          await Building.create({
            name: `Big Ben${i}` ,
            city: 'London',
            country: 'UK',
            age: 213,
            visitorsPerYear: 1466,
            image: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg',
            user: user._id
          })
        }
        console.log('buildings created')
      }

    } catch (err){
      console.log(err)
      
    }
  
  })


// dropdatabase


// reset users


//reset buildings