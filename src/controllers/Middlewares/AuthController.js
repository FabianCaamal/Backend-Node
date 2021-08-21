const jwt = require('jsonwebtoken');
const claves = require('../../configs/config');

const usersTemp = {
    nombre: 'fabian',
    email: 'fabian@gmail.com',
    pass: '123'
}

exports.login = (req, res) => {
    const { email, password } = req.body;

    if( email == usersTemp.email && password == usersTemp.pass ){

        const payload = {
            nombre: usersTemp.nombre,
            email: usersTemp.email
        }

        jwt.sign({payload}, claves.admin, (err, token) => {
            (!err) ? res.json({payload, token}) : res.json(JSON.stringify(err));
        });
    } else {
        res.json({ err: 'Credenciales incorrectos' });
    }

}


exports.register = (req, res) => {
    
    const payload = req.body;

    jwt.sign({payload}, claves.admin, (err, token) => {
        (!err) ? res.json({payload, token}) : res.json(JSON.stringify(err));
    });

}

exports.verifyToken = (req, res, next) => {

    const token = req.headers['access-token'];

    if(token !== undefined){
        jwt.verify(token, claves.admin, (err, decoded) => {
            if(err){
                res.json({ error: 'Token invalido' });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        res.json({ error: 'denegado' });
    }
}