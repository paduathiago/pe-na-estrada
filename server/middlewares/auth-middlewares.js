const passport = require('passport');
const jwt = require('jsonwebtoken');

function loginMiddleware(req, res, next) {
  // QUEBRAR ISSO EM PARTES QUANDO FOR MANDAR O OFICIAL! TIPO VÁRIOS COMMITS
  passport.authenticate(
    'logar',
    (err, viaj, info) =>{
      try {
        if (err) {
        // Aparentemente manda o erro pra frente. E se n tivesse o return?
          return next(err);
        } else {
          req.login(
            viaj,
            {session: false},
            // TENTAR ENTENDER Q TANTO DE TREM IDENTADO É ESSE!
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
                  httpOnly: true, // Como assim? N aceita HTTPS?
                  // Ver oq q isso faz exatamente
                  secure: process.env.SECURE_JWT_COOKIE === 'true',
                },
                );
              }
              // 204 é do que?
              res.status(204).end();
            },
          );
        }
      } catch (error) {
        next(error);// SEM RETURN AQUI!
      }
    },
  // Authenticate() retorna uma função então? Middleware né????
  // Pq q n pode botar ele direto???
  )(req, res, next);
}

function notLoggedIn(req, res, next) {
  const jwtToken=req.cookies['jwt'];
  if (jwtToken) {
    jwt.verify(jwtToken, process.env.SECRET_KEY, (err, decoded)=>{
      if (err instanceof jwt.TokenExpiredError) {

      } else {
        res.status(400).send('Voce ja esta logado no sistema!');
      }
    });
  }
  next();
}

function jwtMiddleware(req, res, next) {
  passport.authenticate(
    'jwt',
    {session: false},
    (err, viaj, info)=>{
      if (err) return next(err); // E se n tivesse return?
      if (!viaj) {
        res.status(401).send(
          'Voce precisa estar logado para realizar essa operacao!',
        );
      }
      req.viajante=viaj;
      next();
    },
  )(req, res, next);
}

// Pq como objeto?
module.exports={
  loginMiddleware,
  notLoggedIn,
  jwtMiddleware,
};
