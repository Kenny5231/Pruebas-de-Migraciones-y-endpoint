'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('fuentes', [
      {
        idUser: 6,
        titulo: 'Conferencia de Tecnología 2025',
        descripcion: 'Charla sobre las últimas tendencias en desarrollo de software y IA',
        fecha: new Date('2025-12-15 10:00:00'),
        lugar: 'Auditorio Principal',
        tipo_evento: 'Conferencia',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        idUser: 7,
        titulo: 'Workshop de Emprendimiento',
        descripcion: 'Taller práctico sobre cómo iniciar tu propio negocio',
        fecha: new Date('2025-11-20 14:00:00'),
        lugar: 'Sala de Juntas B',
        tipo_evento: 'Workshop',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        idUser: 6,
        titulo: 'Hackathon Universitario',
        descripcion: 'Competencia de programación de 24 horas',
        fecha: new Date('2025-12-01 08:00:00'),
        lugar: 'Laboratorio de Cómputo',
        tipo_evento: 'Hackathon',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        idUser: 9,
        titulo: 'Exposición de Arte Digital',
        descripcion: 'Muestra de trabajos de diseño gráfico de estudiantes',
        fecha: new Date('2025-11-25 16:00:00'),
        lugar: 'Galería Universitaria',
        tipo_evento: 'Exposición',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        idUser: 10,
        titulo: 'Seminario de Sostenibilidad',
        descripcion: 'Construcción sustentable y arquitectura verde',
        fecha: new Date('2025-12-10 11:00:00'),
        lugar: 'Aula Magna',
        tipo_evento: 'Seminario',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('fuentes', null, {});
  }
};
