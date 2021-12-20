const Taxista = require('../models/Taxistas')

exports.getAllTaxistas = async (req, res) => {
    let taxistas = await Taxista.find();
    res.json( taxistas )
}

exports.newTaxista = async (req, res) => {

    await Taxista.create( req.body )

    res.json({ staus: true })
}