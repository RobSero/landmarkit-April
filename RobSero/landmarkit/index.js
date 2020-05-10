const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const port = 8000
const mongooseURL = 'mongodb://localhost:27017/landmarkDB'
const logs = require('./lib/logs')
const routes = require('./routers/routes')

const app = express( )

mongoose.connect(mongooseURL, { useUnifiedTopology: true, useNewUrlParser: true }, (err)=>{
  if (err){
    console.log(err)
  } else {
    console.log('CONNECTED TO DATABASE')
  }
})

// ---- Middleware

app.use(bodyParser.json())
app.use(logs)
app.use('/api', routes)




// ----- Middleware end
 

app.listen(port, ()=> {
  console.log(`CONNECTED TO SERVER ON ${port}`)
})