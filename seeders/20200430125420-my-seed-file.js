'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
	  
	  return queryInterface.bulkInsert('Users', [{
      first_name : 'John',
      last_name : 'Doe',
      status : 2,
      createdAt : new Date(),
      updatedAt : new Date(),
      email : 'johnDoe@gmail.com'
    },{
      first_name : 'driver1',
      last_name : 'driver1',
      status : 1,
      createdAt : new Date(),
      updatedAt : new Date(),
      email : 'driver1@gmail.com'
    }], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
