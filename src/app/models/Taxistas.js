const { Schema, model } = require('mongoose');

const TaxistaSchema = Schema({
    name: String,
    last_name: String,
    email: String,
    modelo_taxi: String,
    estrellas: String
});

module.exports = model('Taxistas', TaxistaSchema);