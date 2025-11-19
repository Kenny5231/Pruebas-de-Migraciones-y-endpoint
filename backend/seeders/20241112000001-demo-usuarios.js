'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', [
      {
        nombre: 'Juan Pérez',
        correo: 'juan.perez@example.com',
        password: '$2b$10$abcdefghijklmnopqrstuvwxyz123456', // Hash de ejemplo
        carrera: 'Ingeniería en Sistemas',
        auto: 'Toyota Corolla 2020',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nombre: 'María González',
        correo: 'maria.gonzalez@example.com',
        password: '$2b$10$abcdefghijklmnopqrstuvwxyz123456',
        carrera: 'Administración de Empresas',
        auto: 'Honda Civic 2019',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nombre: 'Carlos Rodríguez',
        correo: 'carlos.rodriguez@example.com',
        password: '$2b$10$abcdefghijklmnopqrstuvwxyz123456',
        carrera: 'Arquitectura',
        auto: null,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nombre: 'Ana Martínez',
        correo: 'ana.martinez@example.com',
        password: '$2b$10$abcdefghijklmnopqrstuvwxyz123456',
        carrera: 'Diseño Gráfico',
        auto: 'Mazda 3 2021',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nombre: 'Luis Hernández',
        correo: 'luis.hernandez@example.com',
        password: '$2b$10$abcdefghijklmnopqrstuvwxyz123456',
        carrera: 'Ingeniería Civil',
        auto: 'Ford Escape 2022',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};
