'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Buys', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },
      dateBuy: {
        type: Sequelize.DATE,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      gameId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Games',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Buys');
  }
};