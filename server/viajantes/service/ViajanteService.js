const Viajante= require('../model/Viajante');
const bcrypt= require('bcrypt');

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
    return await Viajante.findAll({limit: numeroViajantes, order:[['updatedAt', 'DESC']], raw: true});
  }
  async getViajanteById(id){
    return await Viajante.findByPk(id, {raw:true});
  }
  async updateViajante(id, body){
    await Viajante.update(body, {where: {id: id}});
  }
  async deleteViajante(id){
    await Viajante.destroy({where: {id: id}});
  }
}

module.exports = new ViajanteService;
