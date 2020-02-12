const express = require("express");
const ejs = require("ejs");

const db = require("./db");
const router = require("./routes");

const app = express();

db.sync();

app.engine("ejs", ejs.renderFile);
app.use(router);
app.listen(8080);

