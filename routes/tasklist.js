
const express = require("express");
const bodyparser = require("body-parser");

const tasklistController = require("../controllers/tasklist");

const router = express.Router();

router.use(bodyparser.urlencoded({extended: false}));

router.get('/', async (request, response) => {
  const tasklist = await tasklistController.collectTasks();
  response.render('homepage.ejs', { tasklist })
});

router.post('/add', (request, response) => {
  const { task } = request.body;
  tasklistController.addTask(task);
  response.redirect('/');
});

router.get('/delete/:id', (request, response) => {
  const id = request.params.id;
  tasklistController.deleteTask(id);
  response.redirect('/');
});

module.exports = router;