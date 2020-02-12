module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(`CREATE TABLE task(
      id UUID NOT NULL PRIMARY KEY,
      task VARCHAR(50),
      created_at DATE NOT NULL,
      updated_at DATE NOT NULL
    )`);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(`DROP TABLE task`);
  }
};
