const ViajanteViagens = require('../model/ViajanteViagens');

class ViajanteViagensService {
  async createViajanteViagem(viajanteviagens) {
    await ViajanteViagens.create(viajanteviagens);
  }
}

module.exports = new ViajanteViagensService;
