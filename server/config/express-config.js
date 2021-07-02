require('dotenv').config();

const express= require('express');

const web=express();

web.use(express.urlencoded({
  extended: true,
}));

web.use(express.json());


module.exports=web;
