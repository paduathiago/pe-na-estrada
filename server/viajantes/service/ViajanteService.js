const Viajante= require('../model/Viajante');

class ViajanteService {
  async createViajante(viajante) {
    await Viajante.create(viajante);
  }
}

module.exports = new ViajanteService;
