const User = require('../models/User');

exports.getUsuarios = (req, res) => {
    
    User.find((err, people) => {
        res.json(people)
    })

    // res.json({ status: 200, notas });
}

exports.postUsuarios = (req, res) => {
    
    // let { nombre, email, password } = req.body;

    // const user = new User({ nombre, email, password });
    // user.save();

    res.json({ status:200, msj: 'Usuario agregado', body: req.body });
}