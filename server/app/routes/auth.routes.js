const express = require('express');
const {
  getHomeController,
  registerUser,
  getAllUsers,
} = require('../controllers/authController.js');
const authRouter = express.Router();

authRouter.get('/', getHomeController);
authRouter.post('/signup', registerUser);
authRouter.get('/all', getAllUsers);

module.exports = authRouter;
