const Viagem = require('../model/Viagem');
const Viajante = require('../../viajantes/model/Viajante')

class ViagemService {
  async createViagem(viagem,viajantes) {
    const vi=await Viagem.create(viagem);
    viajantes=JSON.parse(viajantes)
    for(v in viajantes){
      const viaj=await Viajante.findByPk(viajantes[v]);
      await vi.addViajante(viaj)
    }
  }
  async getAllViagens(numeroViagens) {
    return await Viagem.findAll(
      {limit: numeroViagens, order: [['inicio', 'DESC']], raw: true},
    );
  }
  async getViagemById(id) {
    return await Viagem.findByPk(id, {raw: true});
  }
  async updateViagem(id, body) {
    await Viagem.update(body, {where: {id: id}});
  }
  async deleteViagem(id) {
    await Viagem.destroy({where: {id: id}});
  }
  async viagemHasViajante(viagemID,viajanteID) {
    //await Viagem.
    return true;//temp
  }
}

module.exports = new ViagemService;
