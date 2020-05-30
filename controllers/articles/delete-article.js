const jwt = require('jsonwebtoken');
const { key } = require('../../configuration/config');
const Article = require('../../models/article');
const NotFoundError = require('../../errors/NotFound');
const ForbiddenError = require('../../errors/Forbidden');
const BadRequestError = require('../../errors/BadRequest');

module.exports.deleteArticle = (req, res, next) => {
  const { articleId } = req.params;
  const payload = jwt.verify(req.cookies.jwt, key);

  Article.findById(articleId)
    .orFail(() => {
      throw new NotFoundError('Not Found');
    })
    .populate('owner')
    .then((article) => {
      const ownerId = article.owner._id.toString();
      if (ownerId !== payload._id) {
        throw new ForbiddenError('Forbidden');
      }
      return Article.deleteOne(article).then(() => res.status(200).send(article));
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        return next(new BadRequestError('Bad request'));
      }
      return next(err);
    });
};
