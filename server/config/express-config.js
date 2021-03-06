require('dotenv').config();

const express= require('express');

const web=express();

const cors = require('cors');
web.use(cors({
  origin: process.env.APP_URL,
  credentials: true,
}));

const cookieParser = require('cookie-parser');
web.use(cookieParser());

web.use(express.urlencoded({
  extended: true,
}));

web.use(express.json());

require('./auth');

const viagemRouter=require('../viagens/controller/viagem-controller');
web.use('/viagens', viagemRouter);

const viajanteRouter=require('../viajantes/controller/viajante-controller');
web.use('/viajantes', viajanteRouter);

const {
  loginMiddleware,
  notLoggedIn,
  jwtMiddleware,
}=require('../middlewares/auth-middlewares');

const {
  objectValidator,
}=require('../middlewares/data-validators');

const {
  viajanteValidate,
}=require('../middlewares/viajanteValidator');

web.post('/login',
  objectValidator(
    'body',
    ['email', 'senha'],
  ),
  viajanteValidate('login'), notLoggedIn, loginMiddleware);

web.get('/logout', jwtMiddleware, (req, res)=>{
  try {
    res.clearCookie('jwt');
    res.status(204).end();
  } catch (error) {
    console.log(error);
  }
});

const {getViajanteById} = require('../viajantes/service/ViajanteService');

web.get('/me', jwtMiddleware, async (req, res)=>{
  const viajante = await getViajanteById(req.viajante.id);
  res.status(200).json(viajante);
});

function defaultErrorMiddleware(err, req, res, next) {
  console.log(err);
  res.status(500).send(err.toString());
}

web.use(defaultErrorMiddleware);

module.exports=web;
