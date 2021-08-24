const cors = require('cors');

module.exports = {

    // LLaves JWT
    admin: 'admin12',
    user: 'comun',

    // Permisos Cors
    cors: cors({ 
        origin: process.env.ALLOWED_HOST, 
        methods: 'GET,POST,PUT,DELETE' 
    })
};