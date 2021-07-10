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
  async getAllViajantes() {
    return await Viajante.findAll({raw: true});
  }
}

module.exports = new ViajanteService;
