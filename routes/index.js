const express = require("express");

const taskListRouter = require("./tasklist");

const router = express.Router();

router.get('/', (request, response) => {
  response.redirect('/tasklist');
});

router.use('/tasklist', taskListRouter);

router.use('*', (request, response) => {
  response
    .status(404)
    .render('404.ejs');
});

module.exports = router;