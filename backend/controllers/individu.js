const Individu = require('../models/Individu');
const Sequelize = require('sequelize');

const sequelize = new Sequelize ('famille', 'julie','marty',{
    host:'localhost',
    dialect: 'mysql'
  });




exports.getAll = (req,res,next) => {
sequelize.query("SELECT * from individu", {type: sequelize.QueryTypes.SELECT})
    .then(results => {
    //   console.log(results);
    res.json(results);
    })
};

exports.createSb = (req, res, next) => {
    sequelize.query("INSERT into individu (espece, date_naissance, nom, commentaires) VALUES ('chien','2020-04-16','Marty','whouaf'), ('chat','2015-06-03','Nestor','miaou')")
    .then(results => {
        res.json(results);
    })
};

exports.sup = (req, res, next) => {
    sequelize.query("DELETE FROM individu WHERE nom = 'Marty' OR nom = 'Nestor'")
    .then (results => {
        res.json(results);
    })
};
