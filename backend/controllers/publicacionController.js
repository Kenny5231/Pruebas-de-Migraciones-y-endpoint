// Controlador para publicaciones
const { Publicacion, User } = require('../models');

// Crear nueva publicación
exports.crearPublicacion = async (req, res) => {
    try {
        const { titulo, contenido, idUser } = req.body;
        // Verificar si el usuario existe
        const user = await User.findByPk(idUser);
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        // Verificar si ya existe una publicación con ese título para ese usuario
        const existing = await Publicacion.findOne({ where: { titulo, idUser } });
        if (existing) {
            return res.status(409).json({ error: 'Ya existe una publicación con ese título para este usuario' });
        }
        // Crear publicación (ajustando el nombre del campo a 'Contenido')
        const publicacion = await Publicacion.create({ titulo, Contenido: contenido, idUser });
        res.status(201).json({ publicacion, message: 'Publicación creada exitosamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
