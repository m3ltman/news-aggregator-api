/* eslint-disable max-len */
const Article = require('../../models/article');
const NotFoundError = require('../../errors/NotFound');
const { ITEM_NOT_FOUND } = require('../../configuration/constants');

module.exports.getArticles = (req, res, next) => {
  Article.find({ owner: req.user._id })
    .orFail(new NotFoundError(ITEM_NOT_FOUND))
    .populate('owner')
    .then(articles => res.status(200).send(articles))
    .catch(next);
};
