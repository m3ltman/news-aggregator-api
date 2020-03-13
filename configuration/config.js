/* eslint-disable no-useless-escape */
/* eslint-disable no-control-regex */
require('dotenv').config();

const { NODE_ENV, JWT_SECRET, PORT = 3000 } = process.env;
const dbLink = 'mongodb://localhost:27017/mestodb';
const dbOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
};
const key = NODE_ENV !== 'production' ? 'dev_secret' : JWT_SECRET;
const UrlRegExp = new RegExp('^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)$');

module.exports = {
  PORT,
  dbLink,
  dbOptions,
  NODE_ENV,
  JWT_SECRET,
  key,
  UrlRegExp,
};
