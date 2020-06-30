const jwt = require('jsonwebtoken');
const { key } = require('../configuration/config');
const UnathorizedError = require('../errors/Unathorized');
const { UNAUTHORIZED } = require('../configuration/constants');

module.exports = (req, res, next) => {
  if (!req.cookies.jwt) {
    throw new UnathorizedError(UNAUTHORIZED);
  }

  let payload;

  try {
    payload = jwt.verify(req.cookies.jwt, key);
  } catch (err) {
    next(new UnathorizedError(UNAUTHORIZED));
  }
  req.user = payload;

  next();
};
