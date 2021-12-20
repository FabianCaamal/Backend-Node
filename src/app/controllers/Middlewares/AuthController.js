const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const key = require('../../../configs/config');
const User = require('../../models/User');

exports.login = async (req, res) => {

    const { email, password } = req.body;

    const user = await User.findOne({ email }).exec();

    if(!user) return res.json({err: 'Credenciales incorrectos'});

    jwt.sign({ userId: user._id }, key.admin, (err, token) => {
        res.json( (!err) ? { user, token, err: false } : err)
    });

}


exports.register = async (req, res) => {

    const { nombre, email, password } = req.body;

    const existUser = await User.findOne({email: email}).exec();

    if(existUser) return res.json({err: 'ya existe un usuario con este email'});

    const user = new User({ nombre, email, password });
    await user.save();

    jwt.sign({ userId: user._id }, key.admin, (err, token) => {
        res.json((!err) ? { user, token, err: false } : err)
    });
}

exports.verifyToken = async (req, res, next) => {

    const token = req.headers['access-token'];

    if(!token) return res.json({ error: 'acceso denegado' });

    const decoded = jwt.verify(token, key.admin);

    const user = await User.findById( decoded.userId );

    if(!user) return res.json({ msj: "usuario no existe"});

    //req.body.userId = decoded.userId;

    next();

}