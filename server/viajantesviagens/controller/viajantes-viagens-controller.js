const viajanteViagensRouter=require('express').Router();
const ViajanteViagensService = require('../service/ViajantesViagensService');

viajanteViagensRouter.post('/', async (req, res)=>{
  // TEMPORARARIO
  try {
    const viajanteviagem={
        viajanteId: req.body.viajanteId,
        viagemId: req.body.viagemId,
    };

    await ViajanteViagensService.createViajanteViagem(viajanteviagem);

    res.status(201).end();
  } catch (error) {
    console.log(error);
  }
});

module.exports=viajanteViagensRouter;
