const router = require('express').Router()
const buildings = require('../controllers/buildings')
const auth = require('../controllers/auth')
const secureRoute = require('../lib/secureRoute')




// ------------- Buildings routes ------------------
router.route('/buildings')
  .get(buildings.get)
  .post(secureRoute, buildings.create)


router.route('/buildings/:id')
  .get(buildings.show)
  .put(secureRoute, buildings.update)
  .delete(secureRoute, buildings.delete)

  
// ------------- Comments Routes ------------------

router.route('/buildings/:id/comments')
  .post(secureRoute, buildings.comment)


router.route('/buildings/:id/comments/:commentId')
  .delete(secureRoute, buildings.removeComment)



// ------------- User and Auth Routes ------------------
router.route('/register')
  .post(auth.register)


router.route('/login')
  .post(auth.login)

module.exports = router