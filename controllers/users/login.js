const jwt = require('jsonwebtoken');
const User = require('../../models/user');
const { key } = require('../../configuration/config');
const UnathorizedError = require('../../errors/Unathorized');
const { UNAUTHORIZED } = require('../../configuration/constants');

module.exports.login = (req, res, next) => {
  const { email, password } = req.body;
  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign(
        {
          _id: user._id,
          email: user.email,
          name: user.name,
        },
        key,
        { expiresIn: '7d' },
      );
      res.cookie('jwt', token, {
        maxAge: 3600000 * 24 * 7,
        httpOnly: true,
        sameSite: true,
      }).end();
    })
    .catch((err) => {
      if (err.message !== 'Неправильные почта или пароль') {
        return next(err);
      }
      return next(new UnathorizedError(UNAUTHORIZED));
    });
};
