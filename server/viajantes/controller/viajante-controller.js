const viajanteRouter=require('express').Router();
const ViajanteService=require('../service/ViajanteService');
const {
  loginMiddleware,
  notLoggedIn,
  jwtMiddleware,
  isAdminOrRequester,
  roleChangeFilter,
}=require('../../middlewares/auth-middlewares');
const { Router } = require('express');
const { getViajanteById } = require('../service/ViajanteService');

viajanteRouter.post('/', async (req, res)=>{
  // TEMPORARARIO
  try {
    const viajante={
      nome: req.body.nome,
      email: req.body.email,
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
    const numViajantes = parseInt(req.query.limit);
    const viajantes=await ViajanteService.getAllViajantes(numViajantes);
    res.json(viajantes).status(200);
  } catch (error) {
    console.log(error);
  }
});

// viajanteRouter.get('/:numeroViajantes', async (req, res)=>{
//   try {
//     const numeroViajantes = req.params.numeroViajantes;
//     const viajantes=await ViajanteService.getAllViajantes(numeroViajantes);
//     res.json(viajantes).status(200);
//   } catch (error) {
//     console.log(error);
//   }
// });

viajanteRouter.get('/viajante/:id', async (req,res) =>{
  try {
    const viajanteId = req.params.id;
    const viajante = await ViajanteService.getViajanteById(viajanteId);
    res.status(200).json(viajante);
  } catch (error) {
    console.log(error);
  }
});

viajanteRouter.put('/viajante/:id', async (req,res) =>{
  try {
    const viajanteId = req.params.id;
    await ViajanteService.updateViajante(viajanteId, req.body);
    
    res.status(204).end();
  } catch (error) {
    console.log(error);
  }
});

viajanteRouter.delete('/viajante/:id', async (req,res)=>{
  try {
    const viajanteId = req.params.id;
    await ViajanteService.deleteViajante(viajanteId);
    res.status(204).end();
  } catch (error) {
    console.log(error);
  }
});

viajanteRouter.post('/login', notLoggedIn, loginMiddleware);

viajanteRouter.get('/logout', jwtMiddleware, (req, res)=>{
  try {
    res.clearCookie('jwt');
    res.status(204).end();
  } catch (error) {
    console.log(error);
  }
});

module.exports=viajanteRouter;
