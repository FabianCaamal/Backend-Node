const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    nombre: String,
    email: { type: String, unique: true },
    password: String
});

module.exports = model('Users', UserSchema);
