/* eslint-disable no-unused-vars */
const errorHandler = (err, _req, res, next) => {
  const { statusCode = 500, message } = err;
  res.status(statusCode).send({ message: statusCode === 500 ? 'Internal Server Error' : message });
};

module.exports = {
  errorHandler,
};
