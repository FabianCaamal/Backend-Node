const express = require('express');
const router = express.Router();

const { login, register, verifyToken } = require('../app/controllers/Middlewares/AuthController');

const { userCtr, notaCtr, taxistaCtr } = require('../app/controllers/Index');

// <============= Registro de Auth =================>
router.post('/login', login)
router.post('/register', register)

// <============= Users =================>
router.get('/users', verifyToken, userCtr.getUsuarios );
router.post('/users', verifyToken, userCtr.postUsuarios );

// <============= Notas =================>
router.get('/notas', verifyToken, notaCtr.getNotas);
router.post('/notas', verifyToken, notaCtr.postNotas);


// <============= Taxistas =================>
router.get('/taxistas', taxistaCtr.getAllTaxistas);
router.post('/new-taxista', taxistaCtr.newTaxista);

module.exports = router;