const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');

require('dotenv').config();

const authRouter = require('./app/routes/auth.routes');

const app = express();
const PORT = 3001;
const isProduction = process.env.NODE_ENV === 'production';

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

// Security Middleware
if (!isProduction) {
  // enable cors only in development
  app.use(cors());
}

// Set the _csrf token and create req.csrfToken method
// app.use(
//   csurf({
//     cookie: {
//       secure: isProduction,
//       sameSite: isProduction && 'Lax',
//       httpOnly: true,
//     },
//   })
// );

// helmet helps set a variety of headers to better secure your app
app.use(
  helmet.crossOriginResourcePolicy({
    policy: 'cross-origin',
  })
);

app.use('/auth', authRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
