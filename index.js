// importaciones
const express = require('express');
const config = require('./src/configs/config');
const cors = require('cors');
require('dotenv').config();

const app = express();

// estados globales de la app
app.set('llave', config.llave);

// permisos de CORS
app.use(cors({ 
    origin: process.env.ALLOWED_HOST, 
    methods: 'GET,POST,PUT,DELETE' 
}));

// declaracion para recibir datos 
app.use(express.json());

//declaraciones de las rutas
app.use(require('./src/Routes/web'));

//declaracion del puerto
app.listen( process.env.PORT || 4000, () => console.log('App en puerto', process.env.PORT) );