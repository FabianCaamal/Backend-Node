const { NotaModel } = require('../models/Index')

exports.getNotas = async (req, res) => {
    let notas = await NotaModel.find();

    // let todo = await Users.populate(notas, { path: "autor" });

    res.json(notas);
}

exports.postNotas = async (req, res) => {

    const { titulo, body } = req.body;

    const create = await NotaModel.create({ titulo, body, autor: userId });

    res.json({ create });
}