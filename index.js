const express = require("express");
const app = express();
const winston = require("winston");

require("./startup/logging")();
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/config")();
require("./startup/validation")();
require("./startup/prod")(app);

app.set("port", process.env.PORT || 3000);
const server = app.listen(app.get("port"), () =>
  winston.info(`Listening on port ${port}...`)
);

module.exports = server;
