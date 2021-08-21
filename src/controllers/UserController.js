let notas = [
    {
        tittle: 'subir repo',
        description: 'acualizar en la repor con git',
        status: false
    }
];

exports.getUsuarios = (req, res) => {
    res.json({ status: 200, notas });
}

exports.postUsuarios = (req, res) => {

    notas.push(req.body)

    res.json({ status:200, msj: 'Tarea agregada', notas });
}