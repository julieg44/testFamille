const individu = require('../models/individu');

exports.getAll = (req,res,next) => {
    individu.findAll()
        .then(individus => res.status(200).json(individus))
        .catch(error => res.status(400).json({error}));
        console.log(res.json(individus));
};





