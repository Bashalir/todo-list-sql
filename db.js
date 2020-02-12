const { Sequelize } = require('sequelize');

const databaseConfig = {
  name: 'todo_list',
  user: 'tester',
  password: 'test'
};

const db = new Sequelize(
  databaseConfig.name,
  databaseConfig.user,
  databaseConfig.password,
  { dialect: 'postgres' }
);

async function test() {
  try {
  await db.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

test();

module.exports = db;