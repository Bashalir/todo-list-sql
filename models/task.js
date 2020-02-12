const dataType = require("sequelize");
const db = require("../db");

const Task = db.define('task', {
  id: {
    allowNull: false,
    primaryKey: true,
    type: dataType.UUID
  },
  task: {
    field: "task",
    type: dataType.STRING(50)
  },
  createdAt: {
    field: "created_at",
    allowNull: false,
    type: dataType.DATE
  },
  updatedAt: {
    field: "updated_at",
    allowNull: false,
    type: dataType.DATE
  }
});

module.exports = Task;