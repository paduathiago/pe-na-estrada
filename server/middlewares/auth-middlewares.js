const passport = require('passport');
const jwt = require('jsonwebtoken');

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
            (error) => {
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
              res.status(204).end();
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

function isAdminOrRequester(req,res,next){
  if(req.viajante.isAdmin=="true"||req.params.id===req.viajante.id)
    next();
  else
    res.status(401).send("Voce nao esta autorizado a realizar essa operacao.");
}

function roleChangeFilter(req,res,next){
  if(req.viajante.isAdmin=="true")
    next();
  else if(isAdmin in req.body)
    res.status(401).send("Voce nao pode mudar seu proprio papel.");
  else
    next();
}

module.exports={
  loginMiddleware,
  notLoggedIn,
  jwtMiddleware,
  isAdminOrRequester,
  roleChangeFilter,
};
