const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User, Publicacion } = require('../models');
const publicacionController = require('../controllers/publicacionController');

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         name:
 *           type: string
 *         email:
 *           type: string
 *         isActive:
 *           type: boolean
 *     UserCreate:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *       properties:
 *         name:
 *           type: string
 *         email:
 *           type: string
 *         password:
 *           type: string
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Obtener todos los usuarios
 *     tags: [Usuario]
 *     responses:
 *       200:
 *         description: Lista de usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */

/**
 * @swagger
 * /register:
 *   post:
 *     summary: Crear un nuevo usuario
 *     tags: [usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: Nombre de usuario
 *               correo:
 *                 type: string
 *                 description: Correo electrónico
 *               password:
 *                 type: string
 *                 description: Contraseña
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 *       409:
 *         description: El usuario ya existe
 *       500:
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /publicaciones:
 *   post:
 *     summary: Crear una nueva publicación
 *     tags: [publicaciones]
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *                 description: Título de la publicación
 *               contenido:
 *                 type: string
 *                 description: Contenido de la publicación
 *               idUser:
 *                 type: integer
 *                 description: ID del usuario autor
 *     responses:
 *       201:
 *         description: Publicación creada exitosamente
 *       404:
 *         description: Usuario no encontrado
 *       409:
 *         description: Ya existe una publicación con ese título para este usuario
 *       500:
 *         description: Error interno del servidor
 */

//Prueba
router.get('/test', (req, res) => {
    res.json({ message: 'API is working!' });
});

// Obtener todos los usuarios
router.get('/users', async (req, res) => {
    try {
        const users = await User.findAll({
            attributes: { exclude: ['password'] } // Excluir password de la respuesta
        });
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Registro de usuario
router.post('/register', async (req, res) => {
    try {
        const { nombre, correo, password } = req.body;
        
        // Verificar si el usuario ya existe
        const existingUser = await User.findOne({ where: { correo } });
        if (existingUser) {
            return res.status(409).json({ error: 'El usuario ya existe' });
        }
        
        // Hash del password
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Crear usuario
        const user = await User.create({
            nombre,
            correo,
            password: hashedPassword
        });
        
        // Respuesta sin password
        const userResponse = {
            id: user.id,
            nombre: user.nombre,
            correo: user.correo,
            isActive: user.isActive
        };
        
        res.status(201).json({ user: userResponse, message: 'Usuario creado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Buscar usuario
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(401).json({ error: 'Credenciales inválidas' });
        }
        
        // Verificar password
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(401).json({ error: 'Credenciales inválidas' });
        }
        
        // Generar token JWT
        const token = jwt.sign(
            { userId: user.id, email: user.email },
            process.env.JWT_SECRET || 'your-secret-key',
            { expiresIn: '24h' }
        );
        
        // Respuesta sin password
        const userResponse = {
            id: user.id,
            name: user.name,
            email: user.email,
            isActive: user.isActive
        };
        
        res.json({ user: userResponse, token, message: 'Login exitoso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Crear nueva publicación
router.post('/publicaciones', publicacionController.crearPublicacion);

module.exports = router;