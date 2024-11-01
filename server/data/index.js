const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const datasourceUrl = process.env.DATABASE_URL;

const prisma = new PrismaClient();

module.exports = prisma;
