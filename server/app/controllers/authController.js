const bcrypt = require('bcryptjs');
const prisma = require('../../data/index');
require('dotenv').config();

const getHomeController = (req, res, next) => {
  res.send('Hello World!');
};

const registerUser = async (req, res, next) => {
  const { email, password } = req.query;
  const saltRounds = 10;

  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const newUserObject = { email: email, password: hashedPassword };

  const newUser = await prisma.user.create({
    data: newUserObject,
  });

  console.log(`newUser: `, newUser);

  res.json({
    user: newUser,
  });
};

const getAllUsers = async (req, res, next) => {
  const allUsers = await prisma.user.findMany();
  res.json(allUsers);
};

module.exports = { getHomeController, registerUser, getAllUsers };
