const winston = require("winston");

//Middleware works for logging request error only
module.exports = function (err, req, res, next) {
  //Log the exception
  winston.error(err.message, err);
  res.status(500).send("Something failed.");
};
