const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Inicializar modelos
const User = require('./user')(sequelize, DataTypes);
const Publicacion = require('./publicacion')(sequelize, DataTypes);
const Comentario = require('./comentario')(sequelize, DataTypes);
const Fuente = require('./fuente')(sequelize, DataTypes);
const Asistencia = require('./asistencia')(sequelize, DataTypes);

db.User = User;
db.Publicacion = Publicacion;
db.Comentario = Comentario;
db.Fuente = Fuente;
db.Asistencia = Asistencia;

// Asociaciones
if (User.associate) User.associate(db);
if (Publicacion.associate) Publicacion.associate(db);
if (Comentario.associate) Comentario.associate(db);
if (Fuente.associate) Fuente.associate(db);
if (Asistencia.associate) Asistencia.associate(db);

module.exports = db;