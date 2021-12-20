const Notas = require('../models/Notas');
const Users = require('../models/User');

exports.getNotas = async (req, res) => {
    let notas = await Notas.find();

    let todo = await Users.populate(notas, { path: "autor" });

    res.json(todo);
}

exports.postNotas = async (req, res) => {

    const { titulo, body, userId } = req.body;

    const create = await Notas.create({ titulo, body, autor: userId });

    res.json({ create });
}