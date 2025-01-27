'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ServiceRequests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      RequestorPhoneNumber: {
        type: Sequelize.STRING
      },
      RequestTime: {
        type: Sequelize.STRING
      },
      RequestDate: {
        type: Sequelize.STRING
      },
      TribunalsID: {
        type: Sequelize.INTEGER
      },
      TribunalServiceID: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ServiceRequests');
  }
};