/* eslint-disable no-unused-vars */
const { SERVER_ERROR } = require('../configuration/constants');

const errorHandler = (err, _req, res, next) => {
  const { statusCode = 500, message } = err;
  res.status(statusCode).send({ message: statusCode === 500 ? SERVER_ERROR : message });
};

module.exports = {
  errorHandler,
};
