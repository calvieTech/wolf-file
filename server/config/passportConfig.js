const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const prismaClient = require('../data/index');

// find user in our DB and compare user pw to given pw
passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const { rows } = await prismaClient.$queryRaw(
        'SELECT * FROM users WHERE email = $1',
        [email]
      );
      const user = rows[0];

      if (!user) {
        return done(null, false, { message: 'Incorrect email' });
      }
      if (user.password !== password) {
        return done(null, false, { message: 'Incorrect password' });
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);

// successfuly login -> store user.id into session data
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// if matching session for req is found, retrieve id from session data and query it against our db for specified user
passport.deserializeUser(async (id, done) => {
  try {
    const { rows } = prismaClient.$queryRaw(
      'SELECT * FROM users WHERE id = $1',
      [id]
    );
    const user = rows[0];

    done(null, user);
  } catch (error) {
    done(error);
  }
});

// module.exports = passport;
