var express = require('express');
var router = express.Router();

var UserController = require('../controllers/user.controller');
var bookingController = require('../controllers/booking.controller');

router.post('/create-user', UserController.createUser);
router.get('/user-List/:status', UserController.getUser);
router.post('/create-vehicle', UserController.createVehicles);
router.post('/create-book', bookingController.bookCreate);
router.post('/book-list', bookingController.bookList);
router.post('/vehicle-list', bookingController.vehicleList);
router.post('/update-vehicle-latlong', bookingController.updateVehicleLatlong);


module.exports = router;