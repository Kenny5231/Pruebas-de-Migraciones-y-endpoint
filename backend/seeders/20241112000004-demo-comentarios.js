'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('comentarios', [
      {
        idPublicacion: 7,
        idUser: 7,
        texto: 'Excelente artículo sobre Node.js! Me ayudó mucho a entender los conceptos básicos.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        idPublicacion: 7,
        idUser: 8,
        texto: '¿Podrías hacer un tutorial más avanzado sobre APIs con Express?',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        idPublicacion: 8,
        idUser: 6,
        texto: 'Muy buenos consejos, especialmente lo del plan de negocios.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        idPublicacion: 9,
        idUser: 10,
        texto: 'Totalmente de acuerdo con el enfoque sustentable en la arquitectura moderna.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        idPublicacion: 10,
        idUser: 7,
        texto: 'Interesante ver cómo evolucionan las tendencias de diseño año con año.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        idPublicacion: 10,
        idUser: 8,
        texto: '¿Qué herramientas recomiendas para diseño minimalista?',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        idPublicacion: 11,
        idUser: 9,
        texto: 'La construcción sustentable debería ser obligatoria en todos los proyectos.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        idPublicacion: 12,
        idUser: 10,
        texto: 'Yo prefiero React por su ecosistema y comunidad, pero Vue también es genial.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        idPublicacion: 12,
        idUser: 7,
        texto: 'Para proyectos pequeños definitivamente Vue, para grandes React.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        idPublicacion: 7,
        idUser: 9,
        texto: 'Node.js cambió completamente el desarrollo web. Gran artículo!',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('comentarios', null, {});
  }
};
