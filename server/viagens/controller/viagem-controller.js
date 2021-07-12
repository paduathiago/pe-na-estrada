const viagemRouter = require('express').Router();
const ViagemService = require('../service/ViagemService');


viagemRouter.post('/', async (req, res)=>{
  try {
    const viagem={
      imagemViagem: req.body.imagemViagem,
      localizacao: req.body.localizacao,
      descricao: req.body.descricao,
      inicio: req.body.inicio,
      fim: req.body.fim,
    };

    await ViagemService.createViagem(viagem);

    res.status(201).end();
  } catch (error) {
    console.log(error);
  }
});

viagemRouter.get('/', async (req, res)=>{
    try {
      const numViagens = parseInt(req.query.limit);
      const viagens = await ViagemService.getAllViagens(numViagens);
      res.json(viagens).status(200);
    } catch (error) {
      console.log(error);
    }
});

viagemRouter.get('/:id', async (req,res) =>{
    try {
      const viagemId = req.params.id;
      const viagem = await ViagemService.getViagemById(viagemId);
      res.status(200).json(viagem);
    } catch (error) {
      console.log(error);
    }
});
  
viagemRouter.put('/:id', async (req,res)=>{
    try {
        const viagemId = req.params.id;
        await ViagemService.updateViagem(viagemId, req.body);
        res.status(204).end();
    } catch (error) {
        console.log(error);
    }
});

viagemRouter.delete('/:id', async(req,res)=>{
    try {
        const viagemId = req.params.id;
        await ViagemService.deleteViagem(viagemId);
        res.status(204).end();
    } catch (error) {
        console.log(error);
    }
});





module.exports = viagemRouter;