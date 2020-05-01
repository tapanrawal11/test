'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vehicle = sequelize.define('Vehicle', {
    vehicle_no: DataTypes.STRING,
    vehicle_type: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {});
  Vehicle.associate = function(models) {
    // associations can be defined here
  };
  return Vehicle;
};