const passport = require('passport');
const jwt = require('jsonwebtoken');
const {
  viagemHasViajante,
} = require('../viagens/service/ViagemService');
const {
  isTheLastAdmin,
}= require('../viajantes/service/ViajanteService');
const {getViajanteAtual} = require('../viajantes/service/ViajanteService');


function loginMiddleware(req, res, next) {
  passport.authenticate(
    'logar',
    (err, viaj, info) =>{
      try {
        if (err) {
          return next(err);
        } else {
          req.login(
            viaj,
            {session: false},
            async (error) => {
              if (error) next(error);
              else {
                const payload ={
                  id: viaj.id,
                  isAdmin: viaj.isAdmin,
                };

                const token = jwt.sign(
                  // Aqui é o nome que é enviado pro cliente!
                  {viajante: payload},
                  process.env.SECRET_KEY,
                  {expiresIn: process.env.JWT_EXPIRATION},
                );
                res.cookie('jwt', token, {
                  // Essas duas opções podem mudar.
                  httpOnly: true,
                  secure: process.env.SECURE_JWT_COOKIE === 'true',
                },
                );
              }
              const viajante = await getViajanteAtual(viaj.id);
              res.status(200).json(viajante);
            },
          );
        }
      } catch (error) {
        next(error);
      }
    },
  )(req, res, next);
}

function notLoggedIn(req, res, next) {
  const jwtToken=req.cookies['jwt'];
  if (jwtToken) {
    jwt.verify(jwtToken, process.env.SECRET_KEY, (err, decoded)=>{
      if (err instanceof jwt.TokenExpiredError) {
        next();
      } else {
        res.status(400).send('Voce ja esta logado no sistema!');
      }
    });
  } else {
    next();
  }
}

function jwtMiddleware(req, res, next) {
  passport.authenticate(
    'jwt',
    {session: false},
    (err, viaj, info)=>{
      if (err) return next(err);
      if (!viaj) {
        res.status(401).send(
          'Voce precisa estar logado para realizar essa operacao!',
        );
      } else {
        req.viajante=viaj;
        next();
      }
    },
  )(req, res, next);
}

function isAdminOrRequester(req, res, next) {
  if (req.viajante.isAdmin==true||req.params.id==req.viajante.id) next();
  else {
    res.status(401).send('Voce nao esta autorizado a realizar essa operacao.');
  }
}

async function isAdminOrInvolved(req, res, next) {
  const isInvolved=await viagemHasViajante(req.params.id,req.viajante.id);
  if (req.viajante.isAdmin==true||isInvolved) {
    next();
  } else {
    res.status(401).send('Voce nao esta autorizado a realizar essa operacao.');
  }
}

function roleChangeFilter(req, res, next) {
  if (req.viajante.isAdmin==true) next();
  else if (req.body.isAdmin=='true') {
    res.status(401).send('Voce nao pode mudar seu proprio papel.');
  } else next();
}

function insertAdminFilter(req, res, next) {
  if (!(req.body.isAdmin=='true')) next();
  else if ('isAdmin' in req.body) {
    res.status(401).send('Voce nao pode inserir um administrador.');
  } else next();
}

async function removeAllAdmFilter(req, res, next) {
  const lastAdmin=await isTheLastAdmin(req.params.id);
  console.log(lastAdmin)
  if (lastAdmin) {
    res.status(403).send('Operacao negada.');
    // Não dando detalhe pros possíveis hackers :D
    // Mas basicamente isso aqui impede que todos os admins sejam deletados,
    // pois isso geraria uma inconsistência, já que não teria mais como
    // adicionar novos admins.
  } else next();
}

async function removeAllAdmFilterPut(req, res, next) {
  const lastAdmin=await isTheLastAdmin(req.params.id);
  console.log(lastAdmin)
  console.log(req.body.isAdmin)
  if (lastAdmin&&(req.body.isAdmin==false||req.body.isAdmin=="false")) {
    res.status(403).send('Operacao negada.');
    // Não dando detalhe pros possíveis hackers :D
    // Mas basicamente isso aqui impede que todos os admins sejam deletados,
    // pois isso geraria uma inconsistência, já que não teria mais como
    // adicionar novos admins.
  } else next();
}

module.exports={
  loginMiddleware,
  notLoggedIn,
  jwtMiddleware,
  isAdminOrRequester,
  roleChangeFilter,
  isAdminOrInvolved,
  insertAdminFilter,
  removeAllAdmFilter,
  removeAllAdmFilterPut,
};
