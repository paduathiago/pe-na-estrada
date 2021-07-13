const sequelize = require('../../database/index');
const {DataTypes} = require('sequelize');

const Viagem = sequelize.define('Viagens', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  imagemViagem: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  localizacao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  inicio: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  fim: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

Viagem.sync({alter: false, force: false})
  .then(() => console.log('Tabela de Viagens (re)criada!'))
  .catch((err) => console.log(err));

module.exports = Viagem;
