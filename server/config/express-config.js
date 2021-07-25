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

const viajanteRouter=require('../viajantes/controller/viajante-controller');
web.use('/viajantes', viajanteRouter);

const viagemRouter=require('../viagens/controller/viagem-controller');
web.use('/viagens', viagemRouter);

const viajanteViagensRouter=require(
  '../viajantesviagens/controller/viajantes-viagens-controller',
);
web.use('/viajantesviagens', viajanteViagensRouter);

const {
  loginMiddleware,
  notLoggedIn,
  jwtMiddleware,
}=require('../middlewares/auth-middlewares');

web.post('/login', notLoggedIn, loginMiddleware);

web.get('/logout', jwtMiddleware, (req, res)=>{
  try {
    res.clearCookie('jwt');
    res.status(204).end();
  } catch (error) {
    console.log(error);
  }
});

const {getViajanteAtual} = require('../viajantes/service/ViajanteService');

web.get('/me', jwtMiddleware, async (req, res)=>{
  const viajante = await getViajanteAtual(req.viajante.id);
  res.status(200).json(viajante);
});

module.exports=web;
