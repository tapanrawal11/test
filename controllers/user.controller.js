//  var {
//    db
// } = require('../models');

var db = require('../models');
var User = db.Users;
var Vehicle = db.Vehicle;
// User.hasOne(Vehicle)

User.hasOne(Vehicle, { sourceKey: "id", foreignKey: "user_id", as: "vehicle" })

module.exports.createUser = function (req, res) {
    var body = req.body;
    User.create({
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        status: (body.type == 'user' ? 2 : 1)
    })
        .then(function (user) {
            res.json(user);
        });
}

module.exports.getUser = function (req, res) {
    var status = req.params.status
    User.findAll({ where: { status } })
        .then(function (users) {
            res.json(users);
        });
}

module.exports.createVehicles = function (req, res) {
    var body = req.body;
    Vehicle.create({
        vehicle_no: body.vehicle_no,
        vehicle_type: body.vehicle_type,
        vehicle_assign_driver: body.vehicle_assign_driver,
    })
        .then(function (user) {
            res.json(user);
        });
}
