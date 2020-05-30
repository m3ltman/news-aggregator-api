/* eslint-disable object-curly-newline */
const Article = require('../../models/article');
const BadRequestError = require('../../errors/BadRequest');

module.exports.createArticle = (req, res, next) => {
  const owner = req.user._id;
  const { keyword, title, text, date, source, link, image } = req.body;

  Article.create({ keyword, title, text, date, source, link, image, owner })
    .then((article) => res.status(201).send({
      keyword: article.keyword,
      title: article.title,
      text: article.text,
      date: article.date,
      source: article.source,
      link: article.link,
      image: article.image,
    }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return next(new BadRequestError(err.message));
      }
      return next(err);
    });
};
