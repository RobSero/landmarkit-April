const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// --------------------- FAKE DB  -------------------------

const buildings = []

class Building {
  constructor(id,name,location,age,height,visitorsPerYear){
    this.id = id
    this.name = name,
    this.location = location
    this.age = age,
    this.height = height,
    this.visitorsPerYear = visitorsPerYear
  }
}


buildings.push(new Building(1,'big ben', 'London', 235, 366, 300000))
buildings.push(new Building(2,'Tower Bridge', 'London', 625, 216, 4320000))
buildings.push(new Building(3,'Empire State', 'New York', 115, 766, 1330500))
buildings.push(new Building(4,'Shanghai Tower', 'Shanghai', 64, 922, 2405621))
buildings.push(new Building(5,'London Eye', 'London', 20, 416, 8776400))
buildings.push(new Building(6,'Burg Khalifa', 'Dubai', 11, 1466, 4682500))
console.log(buildings)


// --------------------- START OF MIDDLEWARE -------------------------

app.use(bodyParser.json())

app.use((req,res,next) => {
  console.log(`Request ${req.method} sent to server to ${req.url}`)
  next()
})


//GET ALL BUILDINGS
app.get('/buildings', (req,res) => {
  res.status(200).json(buildings)
})

// ADD BUILDING
app.post('/buildings', (req,res) => {
  const newBuilding = new Building(req.body.name, req.body.location, req.body.age, req.body.height, req.body.visitorsPerYear)
  buildings.push(newBuilding)
  res.status(201).json(newBuilding)
})

// GET SINGLE BUILDING
app.get('/buildings/:id', (req,res) => {
  const buildingId = parseInt(req.params.id)
  
  const singleBuilding = buildings.find( building => {
    console.log(building.id)
    console.log(buildingId)
    return building.id === buildingId
  })
  console.log(singleBuilding)
  res.status(200).json(singleBuilding)
})


// DELETE SECTION
app.delete('/buildings/:id', (req,res) => {
  const buildingId = parseInt(req.params.id)
  
  const singleBuilding = buildings.find( building => {
    console.log(building.id)
    console.log(buildingId)
    return building.id === buildingId
  })

  const buildingIndex = buildings.findIndex( building => {
    return building.id === buildingId
  })
  buildings.splice(buildingIndex,1)

  if (singleBuilding && buildingIndex){
    res.status(201).json(singleBuilding)
  } else {
    res.status(404).json('CANT FIND DUDE')
  }
  
})

app.use((req,res) => {
  res.status(404).json('cannot seem to find the good stuff :(')
})



// --------------------- END OF MIDDLEWARE -------------------------

app.listen(8000, () => {
  console.log('WOO SERVER RUNNING')
}
)