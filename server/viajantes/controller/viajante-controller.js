const viajanteRouter=require('express').Router();
const {
  jwtMiddleware,
  isAdminOrRequester,
  roleChangeFilter,
  insertAdminFilter,
}=require('../../middlewares/auth-middlewares');
const {
  createViajante,
  getAllViajantes,
  getViajanteById,
  updateViajante,
  deleteViajante,
} = require('../service/ViajanteService');

viajanteRouter.post('/', insertAdminFilter, async (req, res)=>{
  try {
    const viajante={
      nome: req.body.nome,
      email: req.body.email,
      senha: req.body.senha,
      isAdmin: req.body.isAdmin,
      introducao: req.body.introducao,
      imagemPerfil: req.body.imagemPerfil,
    };

    await createViajante(viajante);

    res.status(201).end();
  } catch (error) {
    console.log(error);
  }
});

viajanteRouter.get('/', async (req, res)=>{
  try {
    const numViajantes = parseInt(req.query.limit);
    const viajantes=await getAllViajantes(numViajantes);
    res.json(viajantes).status(200);
  } catch (error) {
    console.log(error);
  }
});

viajanteRouter.get('/:id', async (req, res) =>{
  try {
    const viajanteId = req.params.id;
    const viajante = await getViajanteById(viajanteId);
    res.status(200).json(viajante);
  } catch (error) {
    console.log(error);
  }
});

viajanteRouter.put(
  '/:id',
  jwtMiddleware,
  isAdminOrRequester,
  roleChangeFilter,
  async (req, res) =>{
    try {
      const viajanteId = req.params.id;
      await updateViajante(viajanteId, req.body);
      res.status(204).end();
    } catch (error) {
      console.log(error);
    }
  });

viajanteRouter.delete(
  '/:id',
  jwtMiddleware,
  isAdminOrRequester,
  async (req, res)=>{
    try {
      const viajanteId = req.params.id;
      await deleteViajante(viajanteId);
      res.status(204).end();
    } catch (error) {
      console.log(error);
    }
  });

module.exports=viajanteRouter;
