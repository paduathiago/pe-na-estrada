const Viajante = require('../../viajantes/model/Viajante');
const Viagem = require('../../viagens/model/Viagem');
const sequelize = require('../../database/index');
const {DataTypes} = require('sequelize');

const ViajanteViagens = sequelize.define('ViajanteViagens', {
    viajanteId: {
        type: DataTypes.INTEGER,
        references: {
            model: Viajante,
            key: 'id',
        },
    },
    viagemId: {
        type: DataTypes.INTEGER,
        references: {
            model: Viagem,
            key: 'id',
        },
    },
});



ViajanteViagens.sync({alter: false, force: false})
  .then(() => console.log('Tabela de Viajantes e Viagens (re)criada!'))
  .catch((err) => console.log(err));

module.exports = ViajanteViagens;
