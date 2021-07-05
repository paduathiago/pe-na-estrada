const Viajante= require('../model/Viajante');

class ViajanteService {
  async createViajante(viajante) {
    await Viajante.create(viajante);
  }
  async getAllViajantes() {
    return await Viajante.findAll({raw: true});
  }
}

module.exports = new ViajanteService;
