const viajanteRouter=require('express').Router();
const ViajanteService=require('../service/ViajanteService');

viajanteRouter.post('/', async (req, res)=>{
  // TEMPORARARIO
  const viajante={
    nome: req.body.nome,
    email: req.body.email,
    senhaHash: req.body.senhaHash,
    senhaSalt: req.body.senhaSalt,
    isAdmin: req.body.isAdmin,
    introducao: req.body.introducao,
    imagemPerfil: req.body.imagemPerfil,
  };

  await ViajanteService.createViajante(viajante);

  res.status(201).end();
});


module.exports=viajanteRouter;
