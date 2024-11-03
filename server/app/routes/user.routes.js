const express = require('express');
const passport = require('passport');

const {
  getHomeController,
  registerUser,
  getAllUsers,
  getAUser,
  loginUser,
} = require('../controllers/userController.js');
const userRouter = express.Router();

userRouter.get('/', getHomeController);

// authenticate middleware looks for req.body.email & req.body.password then runs the LocalStrategy fc comparing them to the db
userRouter.post('/login', loginUser);

userRouter.post('/signup', registerUser);
userRouter.get('/all', getAllUsers);
userRouter.get('/:id', getAUser);

module.exports = userRouter;
