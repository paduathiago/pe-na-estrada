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

module.exports=web;
