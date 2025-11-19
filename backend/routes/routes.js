const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

//Prueba
router.get('/test', (req, res) => {
    res.json({ message: 'API is working!' });
});

// Endpoints de usuario usando el controller
router.post('/createNewUser', userController.createNewUser);
router.get('/getAllUsers', userController.getAllUsers);
router.post('/register', userController.register);
router.post('/login', userController.login);

module.exports = router;