const Router = require('express')
const router = new Router()
const controller = require('../controllers/carController.js')

router.get('/getCars', controller.getCars)

router.post('/postCarBooking', controller.postCarBooking)

module.exports = router