const jwt = require('jsonwebtoken');
const claves = require('../../configs/config');

const User = require('../../models/User');

exports.login = async (req, res) => {
    const { email, password } = req.body;

    let payload = { email, password };

    const user = await User.findOne({email, password}).exec();

    if(user){

        jwt.sign({payload}, claves.admin, (err, token) => {
            (!err) ? res.json({user, token}) : res.json(err);
        });

    } else {
        res.json({err: 'Credenciales incorrectos'});
    }
}


exports.register = async (req, res) => {

    const existUser = await User.findOne({email: req.body.email}).exec();

    if(existUser){
        return res.json({status: 'ya existe un usuario con este email'});
    }

    let payload = {
        nombre: req.body.nombre,
        email: req.body.email
    }

    const user = new User(req.body);
    user.save();

    jwt.sign({payload }, claves.admin, (err, token) => {
        (!err) ? res.json({user, token}) : res.json(err);
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