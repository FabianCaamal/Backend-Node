const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    nombre: String,
    email: String,
    password: String
});

module.exports = model('users', UserSchema);
