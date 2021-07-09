const Passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const User = require('../viajantes/model/Viajante');
const bcrypt = require('bcrypt');

Passport.use(
  'logar',
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'senha',
      session: false,
    },
    async (email, senha, done) => {
      try {
        const user = await User.findOne({
          where: {email: email},
        });
        if (!user) {
          throw new Error('E-mail ou senha incorretos!');
        }

        // Gambiarra minha aqui
        const senhaBateu = await bcrypt.compare(senha, user.senhaHash);
        if (!senhaBateu) {
          throw new Error('E-mail ou senha incorretos!');
        }

        return done(null, user);
      } catch (error) {
        return done(error, false);
      }
    },
  ),
);

function tiraBiscoito(req) {
  let token = null;

  if (req && req.cookies) {
    token=req.cookies['jwt'];
  }

  return token;
}

Passport.use(
  'jwt',
  new JwtStrategy(
    {
      secretOrKey: process.env.SECRET_KEY,
      jwtFromRequest: tiraBiscoito,
    },
    async (jwtPayload, done)=>{
      try {
        return done(null, jwtPayload.viajante);
      } catch (error) {
        return done(error, false);
      }
    },
  ),
);
