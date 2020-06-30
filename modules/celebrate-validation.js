const { celebrate, Joi } = require('celebrate');
const { UrlRegExp } = require('../configuration/config');

const userCreateCheck = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().min(8).required(),
    name: Joi.string().min(2).max(30).required(),
  }),
  headers: Joi.object().keys({
    'content-type': Joi.string().valid('application/json').required(),
  }).unknown(true),
});

const userLoginCheck = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().min(8).required(),
  }),
  headers: Joi.object().keys({
    'content-type': Joi.string().valid('application/json').required(),
  }).unknown(true),
});

const idCheck = celebrate({
  params: Joi.object().keys({
    articleId: Joi.string().alphanum().length(24),
  }),
});

const articleCreateCheck = celebrate({
  body: Joi.object().keys({
    keyword: Joi.string().required(),
    title: Joi.string().required(),
    text: Joi.string().required(),
    date: Joi.string().required(),
    source: Joi.string().required(),
    link: Joi.string().required().uri().pattern(UrlRegExp, 'URL'),
    image: Joi.string().required().uri().pattern(UrlRegExp, 'URL'),
  }),
  headers: Joi.object().keys({
    'content-type': Joi.string().valid('application/json').required(),
  }).unknown(true),
});

module.exports = {
  userCreateCheck,
  userLoginCheck,
  idCheck,
  articleCreateCheck,
};
