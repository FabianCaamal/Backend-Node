// importaciones
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// connection DB Mongo
mongoose.connect('mongodb://127.0.0.1:27017/', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => console.log('DB conectado'))
    .catch(err => console.log(err))

// permisos de CORS
app.use(require('./src/configs/config').cors);

// declaracion para recibir datos 
app.use(express.json());

//declaraciones de las rutas
app.use(require('./src/routes/web'));

//declaracion del puerto
app.listen( process.env.PORT || 4000, () => console.log('App en puerto', process.env.PORT) );