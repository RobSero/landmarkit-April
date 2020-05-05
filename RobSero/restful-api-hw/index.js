const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const logger = require('./lib/logger')
const router = require('./config/routes')
const port = 8000
const dbURI = 'mongodb://localhost/buildingsDB'

mongoose.connect(dbURI, // * If connection to mongo works, we should see "Mongo is connected log in terminal"
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err) => {
    if (err) return console.log(err)
    console.log('Mongo is Connected!')
  })

// --------------- start of middleware ----------------- 

app.use(bodyParser.json())

app.use(logger) // * <-- Logging middleware not found in "lib/logger.js"

// * Place and additional middlewares below here
app.use(router)
// * Start at model.js
app.use((req,res) => {
  res.status(404).json('NOT FOUND SORRY!')
})

// --------------- end of middleware ----------------- 

app.listen(port, () => console.log(`Express is listening on port ${port}`))