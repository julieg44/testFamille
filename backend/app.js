const express = require('./node_modules/express');
const mysql = require('mysql2')
const Sequelize = require ('sequelize')
const individuRoutes = require('./routes/individu');

const app = express();

const sequelize = new Sequelize ('famille', 'julie','marty',{
  host:'localhost',
  dialect: 'mysql'
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });



app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });



app.use((req, res, next) => {
   res.json({ message: 'Votre requête a bien été reçue !' }); 
   next();
});



app.use ('/api/individu', individuRoutes) ;


module.exports = app;
