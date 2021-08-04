const viajanteRouter=require('express').Router();
const {
  jwtMiddleware,
  isAdminOrRequester,
  roleChangeFilter,
  insertAdminFilter,
  removeAllAdmFilter,
}=require('../../middlewares/auth-middlewares');
const {
  createViajante,
  getAllViajantes,
  getViajanteById,
  updateViajante,
  deleteViajante,
} = require('../service/ViajanteService');

const objectValidator = require('../../middlewares/data-validators');
const viajanteValidate = require('../../middlewares/viajanteValidator');

viajanteRouter.post('/',
  objectValidator('body', [
    'nome', 'email', 'senha', 'isAdmin', 'introducao', 'imagemPerfil',
  ]),
  viajanteValidate('create'),
  insertAdminFilter,
  async (req, res)=>{
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
  },
);

viajanteRouter.get('/', async (req, res)=>{
  try {// E se req.query.limit nao existir?
    const numViajantes = parseInt(req.query.limit);
    const viajantes=await getAllViajantes(numViajantes);
    res.json(viajantes).status(200);
  } catch (error) {
    console.log(error);
  }
});

viajanteRouter.get('/:id', async (req, res) =>{
  try {// E se o ID for invalido?
    const viajanteId = req.params.id;
    const viajante = await getViajanteById(viajanteId);
    res.status(200).json(viajante);
  } catch (error) {
    console.log(error);
  }
});

viajanteRouter.put(
  '/:id', // E se o ID for invalido?
  objectValidator('body', [
    'nome', 'email', 'senha', 'isAdmin', 'introducao', 'imagemPerfil',
  ]),
  viajanteValidate('update'),
  jwtMiddleware,
  isAdminOrRequester,
  roleChangeFilter,
  async (req, res) =>{
    try {// E se nao tiver req.params? Ou req.params.id? Ou req.body?
      const viajanteId = req.params.id;
      await updateViajante(viajanteId, req.body);
      res.status(204).end();
    } catch (error) {
      console.log(error);
    }
  });

viajanteRouter.delete(
  '/:id', // E se o ID for invalido?
  jwtMiddleware,
  isAdminOrRequester,
  removeAllAdmFilter,
  async (req, res)=>{
    try {// E se nao tiver req.params.id?
      const viajanteId = req.params.id;
      await deleteViajante(viajanteId);
      res.status(204).end();
    } catch (error) {
      console.log(error);
    }
  });

module.exports=viajanteRouter;
