const ViajanteViagens = require('../model/ViajanteViagens');

class ViajanteViagensService {
  async createViajanteViagem(viajanteviagens) {
    await ViajanteViagens.create(viajanteviagens);
  }
  async hasViajanteViagem(viajanteId, viagemId) {
    const findIt = await ViajanteViagens.findAndCountAll({
      where: {viajanteId: viajanteId, viagemId: viagemId},
    });
    return !(findIt.count==0);
  }
}

module.exports = new ViajanteViagensService;
