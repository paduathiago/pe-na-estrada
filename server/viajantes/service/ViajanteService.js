const Viajante = require('../model/Viajante');
const bcrypt= require('bcrypt');
const Viagem = require('../../viagens/model/Viagem');

class ViajanteService {
  async createViajante(viajante) {
    try {
      const saltRounds=10;
      viajante.senhaHash= await bcrypt.hash(viajante.senha, saltRounds);
      delete viajante.senha;
      await Viajante.create(viajante);
    } catch (error) {
      throw error;
    }
  }
  async getAllViajantes(numeroViajantes) {
    return await Viajante.findAll(
      {limit: numeroViajantes, order: [['updatedAt', 'DESC']], raw: true},
    );
  }
  async getAllViajantes() {
    return await Viajante.findAll();
  }
  async getViajanteById(id) {
    const viajante= await Viajante.findByPk(id,{
      attributes: {
        exclude: ['senhaHash', 'createdAt', 'updatedAt'],
      },
    });
    const viagens= await viajante.getViagens();

    return {
      "Viajante":viajante,
      "Viagens":viagens
    }
  }
  async updateViajante(id, body) {
    if (body.senha) {
      const saltRounds=10;
      body.senhaHash= await bcrypt.hash(body.senha, saltRounds);
      delete body.senha;
    }
    await Viajante.update(body, {where: {id: id}});
  }
  async deleteViajante(id) {
    await Viajante.destroy({where: {id: id}});
  }
  async getViajanteAtual(id) {
    return await Viajante.findByPk(id, {
      attributes: {
        exclude: ['senhaHash', 'createdAt', 'updatedAt'],
      },
    });
  }
  async isTheLastAdmin(id) {
    const numAdmin=await Viajante.count(
      {where: {'isAdmin': 1}},
    );
    if(numAdmin==1){
      const viajante=await Viajante.findOne(
        {where: {'isAdmin': 1}},
      );
      if(viajante.id==id)
        return true;
    }
    return false
      
  }
}

module.exports = new ViajanteService;
