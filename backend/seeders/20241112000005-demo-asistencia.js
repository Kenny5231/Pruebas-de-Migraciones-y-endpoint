'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('asistencia', [
      {
        idUsuario: 6,
        idEvento: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        idUsuario: 7,
        idEvento: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        idUsuario: 8,
        idEvento: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        idUsuario: 6,
        idEvento: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        idUsuario: 7,
        idEvento: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        idUsuario: 9,
        idEvento: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        idUsuario: 6,
        idEvento: 13,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        idUsuario: 8,
        idEvento: 13,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        idUsuario: 10,
        idEvento: 13,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        idUsuario: 7,
        idEvento: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        idUsuario: 8,
        idEvento: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        idUsuario: 9,
        idEvento: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        idUsuario: 8,
        idEvento: 15,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        idUsuario: 10,
        idEvento: 15,
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('asistencia', null, {});
  }
};
