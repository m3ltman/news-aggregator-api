const articlesRouter = require('express').Router();
const { getArticles } = require('../controllers/articles/get-articles');
const { createArticle } = require('../controllers/articles/create-article');
const { deleteArticle } = require('../controllers/articles/delete-article');
const { articleCreateCheck, idCheck } = require('../modules/celebrate-validation');
const auth = require('../middlewares/auth');

articlesRouter.get('/', auth, getArticles);
articlesRouter.post('/', auth, articleCreateCheck, createArticle);
articlesRouter.delete('/:articleId', auth, idCheck, deleteArticle);

module.exports = articlesRouter;
