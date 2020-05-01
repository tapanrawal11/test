var db = require('../models');
var User = db.Users;
var Vechilechild = db.Vechilechild;
var Booking = db.Booking;

User.hasOne(Booking, { sourceKey: "id", foreignKey: "user_id", as: "booking" });


module.exports.bookCreate = function (req, res) {
    var body = req.body;
    Booking.create({
        user_id: body.user_id,
        vehicle_id: body.vehicle_id,
        lat: body.lat,
        long: body.long,
        booking_from: body.booking_from,
        booking_to: body.booking_to
    }).then(function (user) {
        res.json(user);
    });
}

module.exports.bookList = function (req, res) {
    var body = req.body;
    User.findAll({
        where: {
            id: body.user_id
        },
        include: [
            {
                as: "booking",
                model: Booking,
            }
        ]
    }).then(function (users) {
        res.json(users);
    });
}

module.exports.vehicleList = function (req, res) {
    var body = req.body;
    db.sequelize.query("SELECT * FROM (SELECT b.id AS vid,a.id, a.`vehicle_no`, a.`vehicle_type`,CONCAT(c.first_name,' ',c.last_name) AS fullname , (((ACOS( SIN(( " + body.lat + "* PI() / 180))*SIN(( b.lat * PI() / 180)) + COS(( " + body.lat + " * PI() /180 ))*COS(( b.lat * PI() / 180)) * COS((( " + body.long + " - b.long) * PI()/180))))* 180/PI()) * 60 * 1.1515) AS distance  FROM `vehicles` AS a,vechilechildren AS b,users AS c  WHERE a.id = b.vehicle_id AND a.user_id = c.id AND b.id IN(SELECT MAX(id) AS id FROM vechilechildren  GROUP BY vehicle_id )) AS mydata").spread(
        function (settingName1) {
            res.json(settingName1);
        });
}

module.exports.updateVehicleLatlong = function (req, res) {
    var body = req.body;
    Vechilechild.create({
        vehicle_id: body.vehicle_id,
        lat: body.lat,
        long: body.long,
    }).then(function (user) {
        res.json(user);
    });
}
