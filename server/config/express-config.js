require('dotenv').config();

const express= require('express');

const web=express();

const cors = require('cors');
web.use(cors());

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


module.exports=web;
