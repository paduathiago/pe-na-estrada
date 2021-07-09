const viajanteRouter=require('express').Router();
const ViajanteService=require('../service/ViajanteService');
const {
  loginMiddleware,
  notLoggedIn,
}=require('../../middlewares/auth-middlewares');

viajanteRouter.post('/', async (req, res)=>{
  // TEMPORARARIO
  try {
    const viajante={
      nome: req.body.nome,
      email: req.body.email,
      // senhaHash: req.body.senhaHash,
      // senhaSalt: req.body.senhaSalt,
      senha: req.body.senha,
      isAdmin: req.body.isAdmin,
      introducao: req.body.introducao,
      imagemPerfil: req.body.imagemPerfil,
    };

    await ViajanteService.createViajante(viajante);

    res.status(201).end();
  } catch (error) {
    console.log(error);
  }
});

viajanteRouter.get('/', async (req, res)=>{
  try {
    const viajantes=await ViajanteService.getAllViajantes();
    res.json(viajantes).status(200);
  } catch (error) {
    console.log(error);
  }
});

viajanteRouter.post('/login', notLoggedIn, loginMiddleware);

viajanteRouter.get('/logout', (req, res)=>{
  try {
    res.clearCookie('jwt');
    res.status(204).end();
  } catch (error) {
    console.log(error);
  }
});

module.exports=viajanteRouter;
