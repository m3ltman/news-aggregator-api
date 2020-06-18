/* eslint-disable max-len */
const Article = require('../../models/article');

module.exports.getArticles = (req, res, next) => {
  Article.find({})
    .populate('owner')
    .then((articles) => (articles ? res.status(200).send(articles) : res.status(200).send(articles)))
    .catch(next);
};
