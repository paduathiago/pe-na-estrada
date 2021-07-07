const Passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../viajantes/model/Viajante');

Passport.use(
  'login',
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

        const senhaBateu = (senha === user.senha);
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

