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
    const viagem= await Viagem.findByPk(id);
    const viajantes=await viagem.getViajantes({
      attributes: {
        exclude: ['senhaHash', 'createdAt', 'updatedAt','isAdmin'],
      },
    })

    return {
      "Viagem":viagem,
      "Viajantes":viajantes
    } 
  }
  async updateViagem(id, body) {
    let addViajantes
    let remViajantes
    if(body.addViajantes){
      addViajantes=JSON.parse(body.addViajantes)
      delete body.addViajantes
    }
    if(body.remViajantes){
      remViajantes=JSON.parse(body.remViajantes)
      delete body.remViajantes
    }
    await Viagem.update(body, {where: {id: id}});
    const vi=await Viagem.findByPk(id)
    if(addViajantes){
      for(v in addViajantes){
        const viaj=await Viajante.findByPk(addViajantes[v]);
        await vi.addViajante(viaj)
      }
    }
    if(remViajantes){
      for(v in remViajantes){
        const viaj=await Viajante.findByPk(remViajantes[v]);
        await vi.removeViajante(viaj)
      }
    }

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
