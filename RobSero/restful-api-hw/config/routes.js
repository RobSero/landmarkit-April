// * Create your router here

const router = require('express').Router()
const buildings = require('../controllers/buildingControl')
const auth = require('../controllers/auth')

router.route('/buildings')
  .get(buildings.getAll)
  .post(buildings.create)

router.route('/buildings/:id')
  .get(buildings.show)
  .delete(buildings.delete)
  .put(buildings.update)

router.route('/register')
  .post(auth.register)
  // .put(auth.update)


module.exports = router










// * Export your router! you will need to register this as middleware in "index.js" !