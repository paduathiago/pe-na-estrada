const sequelize = require('../../database/index');
const {DataTypes} = require('sequelize');
const Viajante = require('../../viajantes/model/Viajante');

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
    type: DataTypes.TEXT("medium"),
    allowNull: true,
  },
  inicio: {
    type: DataTypes.STRING, 
    allowNull: false,          
  },
  fim: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const ViajantesViagens = sequelize.define('ViajantesViagens', {}, { timestamps: false });

Viagem.belongsToMany(Viajante, {through: ViajantesViagens});
Viajante.belongsToMany(Viagem, {through: ViajantesViagens});

ViajantesViagens.sync({alter: false, force: false})
  .then(() => console.log('Tabela de ViajantesViagens criada/sincronizada!'))
  .catch((err) => console.log(err));

Viagem.sync({alter: false, force: false})
  .then(() => console.log('Tabela de Viagens criada/sincronizada!'))
  .catch((err) => console.log(err));

Viajante.sync({alter: false, force: false})
  .then(() => console.log('Tabela de Viajantes criada/sincronizada!'))
  .catch((err) => console.log(err));

module.exports = Viagem;
