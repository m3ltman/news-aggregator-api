/* eslint-disable max-len */
const Article = require('../../models/article');

module.exports.getArticles = (req, res, next) => {
  Article.find({ owner: req.user._id })
    .populate('owner')
    .then(articles => res.status(200).send(articles))
    .catch(next);
};
