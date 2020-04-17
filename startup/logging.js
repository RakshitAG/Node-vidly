const winston = require("winston");
//require("winston-mongodb");
require("express-async-errors");
module.exports = function () {
  //Hnadling Uncaught Exceptions
  winston.handleExceptions(
    new winston.transports.Console({ colorize: true, prettyPrint: true }),
    new winston.transports.File({ filename: "uncaughtExceptions.log" })
  );

  //Handling Promise rejection errors
  process.on("unhandledRejection", (ex) => {
    throw ex;
  });

  winston.configure({
    transports: [new winston.transports.File({ filename: "logfile.log" })],
  });

  //   winston.add(winston.transports.MongoDB, {
  //     db: "mongodb://localhost/vidly",
  //     level: "info",
  //   });
};
