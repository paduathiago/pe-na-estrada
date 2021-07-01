const sequelize = require('../../database/index');
const {DataTypes} = require('sequelize');

const Viajante = sequelize.define('Users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,

  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  senhaHash: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  senhaSalt: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  introducao: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  imagemPerfil: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

Viajante.sync({alter: false, force: false})
  .then(() => console.log('Tabela de Viajantes (re)criada!'))
  .catch((err) => console.log(err));

module.exports=Viajante;
