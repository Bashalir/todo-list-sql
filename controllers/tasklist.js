const uuid = require("uuid/v4");

const TaskList = require("../models/task");

module.exports = {
  addTask: async task => {
    TaskList.create({
      id: uuid(),
      task: task
    });
  },

  collectTasks: async () => {
    return await TaskList.findAll({ raw: true });
  },

  deleteTask: async id => {
    const taskToDelete = await TaskList.findByPk(id);
    taskToDelete.destroy();
  }
};
