const Models = require ('../models');
const Individu = require('../models/Individu');
const Sequelize = require('sequelize');
const { Model } = require('sequelize');

const sequelize = new Sequelize ('famille', 'julie','marty',{
    host:'localhost',
    dialect: 'mysql'
  });



exports.getAll = (req,res,next) => {
    Models.Individu.findAll()
        .then(results => {
        //   console.log(results);
        res.json(results);
        })
    };

exports.sup = (req, res, next) => {
    id = req.params.id;
    console.log(id);
    Models.Individu.destroy({ where: { id: id } })
        .then(() => res.status(200).json({ message: 'Gobin supprimé !'}))
        .catch(error => res.status(400).json({message: 'foiré'}));
};

exports.modify = (req, res, next) => {
    console.log(req.params.id)
    console.log(req.body)
    Models.Individu.update({ ...req.body },{ where: { id: req.params.id } })
      .then(() => res.status(200).json({ message: 'Gobin modifié !'}))
      .catch(error => res.status(400).json({ error }));
  };

exports.createSb = (req, res, next) => {
    // let gobinPersonne = JSON.parse(req.body);
    let gobinPersonne = req.body ;
    console.log(gobinPersonne);

    const {
        espece,
        date_naissance,
        nom,
        commentaires
    } = req.body;

        Models.Individu.create({
        espece: gobinPersonne.espece,
        date_naissance: gobinPersonne.date_naissance,
        nom: gobinPersonne.nom,
        commentaires: gobinPersonne.commentaires
    })
    .then(Individu => res.status(201).json({
        error: false,
        data: Individu,
        message: 'New Gobin is born !'
    }))
    .catch(error => res.json({
        error: true,
        data: [],
        error: error
    }));
}

exports.getOne = (req, res, next) => {
    console.log(req.params.id)
    Models.Individu.findOne({ where: { id: req.params.id } })
    .then (individu => res.status (200).json(individu))
    .catch(error => res.status (404).json ({error}))
}


