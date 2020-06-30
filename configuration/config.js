/* eslint-disable no-useless-escape */
/* eslint-disable no-control-regex */
require('dotenv').config();
const rateLimit = require('express-rate-limit');

const { NODE_ENV, JWT_SECRET, PORT = 3000 } = process.env;

const dbLink = 'mongodb://localhost:27017/news-aggregator';
const dbOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
};
const key = NODE_ENV !== 'production' ? 'dev_secret' : JWT_SECRET;

const pattern = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;
const UrlRegExp = new RegExp(pattern);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

module.exports = {
  PORT,
  dbLink,
  dbOptions,
  key,
  UrlRegExp,
  limiter,
};
