'use strict';
module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('Users', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    status: DataTypes.INTEGER,
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
      }
    }
  });

  return User;
};