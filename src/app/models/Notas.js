const { Schema, model } = require('mongoose');

const NotaSchema = Schema({
    titulo: String,
    body: String,
    hidden: { type: Boolean, default: false },
    date: { type: Date, default: Date.now },
    autor: { type: Schema.ObjectId, ref: "Users" }
});

module.exports = model('Notas', NotaSchema);