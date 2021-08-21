const express = require('express');
const router = express.Router();

const { login, register, verifyToken } = require('../controllers/Middlewares/AuthController');
const users = require('../controllers/UserController');

// <============= Registro de Auth =================>
router.post('/login', login)
router.post('/register', register)

router.get('/notas', verifyToken, users.getUsuarios );
router.post('/notas', verifyToken, users.postUsuarios );

router.get('/api', (req, res) => res.json({ status: 200 }));

module.exports = router;