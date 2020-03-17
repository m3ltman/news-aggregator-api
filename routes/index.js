const router = require('express').Router();
const usersRouter = require('./users');
const articlesRouter = require('./articles');
const NotFoundError = require('../errors/NotFound');

const notFoundHandler = () => {
  throw new NotFoundError('Запрашиваемый ресурс не найден');
};

router.use('/', usersRouter);
router.use('/articles', articlesRouter);
router.get('*', notFoundHandler);

module.exports = router;
