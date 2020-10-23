/* jshint indent: 2 */

const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('individu', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    espece: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    date_naissance: {
      type: DataTypes.DATE,
      allowNull: false
    },
    nom: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    commentaires: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'individu',
    timestamps: false
    });
};
