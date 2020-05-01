'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    user_id: DataTypes.INTEGER,
    vehicle_id: DataTypes.INTEGER,
    lat: DataTypes.STRING,
    long: DataTypes.STRING,
    booking_from: DataTypes.STRING,
    booking_to: DataTypes.STRING
  }, {});
  Booking.associate = function(models) {
    // associations can be defined here
  };
  return Booking;
};