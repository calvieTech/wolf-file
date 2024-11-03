const bcrypt = require('bcryptjs');
const prisma = require('../../data/index');
require('dotenv').config();

const getHomeController = (req, res, next) => {
  res.send('Hello World!');
};

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const findUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!findUser) {
      return res.status(401).json({ error: 'Email not found' });
    }

    const foundUserPassword = findUser.password;
    const compareUserPassword = await bcrypt.compare(
      password,
      foundUserPassword
    );

    if (!compareUserPassword) {
      return res.status(401).json({ error: 'Incorrect password' });
    }

    res.json({
      foundUser: findUser,
    });
  } catch (error) {
    console.error('Error signing in a user: ', error.message);
    return;
  }
};

const registerUser = async (req, res, next) => {
  const { email, password } = req.body;

  // Check if the email is already registered
  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      return res
        .status(409)
        .json({ message: 'Email is already registered.' });
    }

    // Hash password before saving
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create the user in the database
    const newUser = await prisma.user.create({
      data: {
        email: email,
        password: hashedPassword,
      },
    });

    res
      .status(201)
      .json({ message: 'User registered successfully.' });
  } catch (error) {
    console.error('Error registering a user:', error.message);
    res
      .status(500)
      .json({ message: 'An error occurred during signup.' });
  }
};

const getAUser = async (req, res, next) => {
  let foundUser;
  let userID = Number.parseInt(req.params.id);

  console.log('userID: ', userID);
  console.log(`params: `, req.params);
  console.log(`typeParams: `, typeof req.params);

  try {
    foundUser = await prisma.user.findUnique({
      where: {
        id: userID,
      },
    });

    console.log(`foundUser: `, foundUser);
    res.json(foundUser);
  } catch (error) {
    console.error('Error getting a user by ID: ', error.message);
    return;
  }
};

const getAllUsers = async (req, res, next) => {
  let allUsers;
  try {
    allUsers = await prisma.user.findMany();
    res.json(allUsers);
  } catch (error) {
    console.error('Error getting all users: ', error.message);
    return;
  }
};

module.exports = {
  getHomeController,
  registerUser,
  getAllUsers,
  getAUser,
  loginUser,
};
