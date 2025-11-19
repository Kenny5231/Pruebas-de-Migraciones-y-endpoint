'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('publicaciones', [
      {
        idUser: 6,
        titulo: 'Introducción a Node.js',
        Contenido: 'Node.js es un entorno de ejecución para JavaScript construido sobre el motor V8 de Chrome. Es perfecto para aplicaciones en tiempo real y APIs REST.',
        Categoria: 'Tecnología',
        fecha: new Date('2025-11-10 09:00:00'),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        idUser: 7,
        titulo: 'Consejos para emprendedores',
        Contenido: 'Emprender no es fácil, pero con la mentalidad correcta y un buen plan de negocios, puedes lograr grandes cosas. Aquí algunos tips importantes...',
        Categoria: 'Negocios',
        fecha: new Date('2025-11-08 14:30:00'),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        idUser: 8,
        titulo: 'Arquitectura Moderna',
        Contenido: 'La arquitectura contemporánea busca la funcionalidad sin sacrificar la estética. El uso de materiales sustentables es clave.',
        Categoria: 'Arquitectura',
        fecha: new Date('2025-11-09 16:00:00'),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        idUser: 9,
        titulo: 'Tendencias en Diseño 2025',
        Contenido: 'El minimalismo sigue siendo tendencia, pero vemos un retorno a elementos más orgánicos y texturas naturales en el diseño gráfico.',
        Categoria: 'Diseño',
        fecha: new Date('2025-11-11 10:15:00'),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        idUser: 10,
        titulo: 'Construcción Sustentable',
        Contenido: 'La construcción verde no es solo una moda, es una necesidad. Reducir el impacto ambiental es responsabilidad de todos los ingenieros.',
        Categoria: 'Ingeniería',
        fecha: new Date('2025-11-12 08:00:00'),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        idUser: 6,
        titulo: 'React vs Vue: ¿Cuál elegir?',
        Contenido: 'Ambos frameworks tienen sus ventajas. React tiene una comunidad más grande, mientras que Vue es más fácil de aprender.',
        Categoria: 'Tecnología',
        fecha: new Date('2025-11-07 11:30:00'),
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('publicaciones', null, {});
  }
};
