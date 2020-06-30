const jwt = require('jsonwebtoken');
const { key } = require('../../configuration/config');
const Article = require('../../models/article');
const NotFoundError = require('../../errors/NotFound');
const ForbiddenError = require('../../errors/Forbidden');
const BadRequestError = require('../../errors/BadRequest');
const { FORBIDDEN, BAD_REQUEST, ITEM_NOT_FOUND } = require('../../configuration/constants');

module.exports.deleteArticle = (req, res, next) => {
  const { articleId } = req.params;
  const payload = jwt.verify(req.cookies.jwt, key);

  Article.findById(articleId)
    .orFail(() => {
      throw new NotFoundError(ITEM_NOT_FOUND);
    })
    .populate('owner')
    .then((article) => {
      const ownerId = article.owner._id.toString();
      if (ownerId !== payload._id) {
        throw new ForbiddenError(FORBIDDEN);
      }
      return Article.deleteOne(article).then(() => res.status(200).send(article));
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        return next(new BadRequestError(BAD_REQUEST));
      }
      return next(err);
    });
};
