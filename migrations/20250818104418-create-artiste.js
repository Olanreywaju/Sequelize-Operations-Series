'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Artistes', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      name: {
        type: Sequelize.STRING,
        allowNull:false
      },
      genre: {
        type: Sequelize.STRING,
        allowNull:false
      },
      record_label: {
        type: Sequelize.STRING,
        allowNull:false
      },
      country: {
        type: Sequelize.STRING,
        allowNull:false
      },
      is_married: {
        type: Sequelize.BOOLEAN,
        allowNull:false
      },
      gender: {
        type: Sequelize.ENUM(['MALE', 'FEMALE']),
        allowNull:false
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
    await queryInterface.dropTable('Artistes');
  }
};