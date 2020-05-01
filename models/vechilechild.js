'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vechilechild = sequelize.define('Vechilechild', {
    vehicle_id: DataTypes.INTEGER,
    lat: DataTypes.STRING,
    long: DataTypes.STRING
  }, {});
  Vechilechild.associate = function(models) {
    // associations can be defined here
  };
  return Vechilechild;
};