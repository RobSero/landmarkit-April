const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const router = require('./routes/buildings')

mongoose.connect('mongodb://localhost/buildingsDB', { useUnifiedTopology: true, useNewUrlParser: true }, (err)=>{
  if (err){
    console.log(err)
  } else {
    console.log('CONNECTED TO MONGO!')
    
  }
})

app.use(bodyParser.json())

// --------------- start of middleware ----------------- 

app.use((req,res,next) => {
  console.log(`A ${req.method} request was made to ${req.url}`)
  next()
})

app.use(router)


app.use((req,res) => {
  res.status(404).json('NOT FOUND SORRY!')
})

// --------------- start of middleware ----------------- 


app.listen(8000, ()=> {
  console.log('SERVER ONLINE WOO')
})