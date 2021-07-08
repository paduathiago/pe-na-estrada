const Viajante= require('../model/Viajante');
const bcrypt= require('bcrypt');

class ViajanteService {
  async createViajante(viajante) {
    try {
      // 'Quantas vezes vai repetir a encriptação'...
      const saltRounds=10;
      viajante.senhaHash= await bcrypt.hash(viajante.senha, saltRounds);
      delete viajante.senha;
      // Gambiarra minha aqui tbm
      viajante.senhaSalt='';
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
