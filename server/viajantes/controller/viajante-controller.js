const viajanteRouter=require('express').Router();
const passport = require('passport');
const ViajanteService=require('../service/ViajanteService');
const jwt = require('jsonwebtoken');

viajanteRouter.post('/', async (req, res)=>{
  // TEMPORARARIO
  try {
    const viajante={
      nome: req.body.nome,
      email: req.body.email,
      senhaHash: req.body.senhaHash,
      senhaSalt: req.body.senhaSalt,
      isAdmin: req.body.isAdmin,
      introducao: req.body.introducao,
      imagemPerfil: req.body.imagemPerfil,
    };

    await ViajanteService.createViajante(viajante);

    res.status(201).end();
  } catch (error) {
    console.log(error);
  }
});

viajanteRouter.get('/', async (req, res)=>{
  try {
    const viajantes=await ViajanteService.getAllViajantes();
    res.json(viajantes).status(200);
  } catch (error) {
    console.log(error);
  }
});

viajanteRouter.post('/login', async (req, res, next)=>{
  try {
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
                    {user: payload},
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
  } catch (error) {
    console.log(error);
  }
});

module.exports=viajanteRouter;
