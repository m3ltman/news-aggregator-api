const router = require('express').Router();
const usersRouter = require('./users');
const articlesRouter = require('./articles');
const NotFoundError = require('../errors/NotFound');
const { NOT_FOUND } = require('../configuration/constants');

const notFoundHandler = () => {
  throw new NotFoundError(NOT_FOUND);
};

router.use('/', usersRouter);
router.use('/articles', articlesRouter);
router.get('*', notFoundHandler);

module.exports = router;
