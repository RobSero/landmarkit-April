// * Create your router here

const router = require('express').Router()
const buildings = require('../controllers/buildingControl')

router.route('/buildings')
  .get(buildings.getAll)
  .post(buildings.create)

router.route('/buildings/:id')
  .get(buildings.show)
  .delete(buildings.delete)


module.exports = router










// * Export your router! you will need to register this as middleware in "index.js" !