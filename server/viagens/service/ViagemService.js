const Viagem = require('../model/Viagem');

class ViagemService{
    async createViagem(viagem){
        await Viagem.create(viagem);
    }
    async getAllViagens(numeroViagens) {
        return await Viagem.findAll({limit: numeroViagens, order:[['inicio', 'ASC']], raw: true});
    }
    async getViagemById(id){
        return await Viagem.findByPk(id, {raw: true});
    }
    async updateViagem(id, body){
        await Viagem.update(body, {where: {id:id}});
    }
    async deleteViagem(id){
        await Viagem.destroy({where:{id:id}});
    }
} 

module.exports = new ViagemService;