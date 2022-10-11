const express = require("express");

//const routes = require("./router")

const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.json());

//app.use("/names", routes);

const names = require("./names");

app.use("/names", names);

app.listen(4420);
