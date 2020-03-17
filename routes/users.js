const usersRouter = require('express').Router();
const { createUser } = require('../controllers/users/create-user');
const { login } = require('../controllers/users/login');
const { getUser } = require('../controllers/users/get-user');
const { userCreateCheck, userLoginCheck } = require('../modules/celebrate-validation');
const auth = require('../middlewares/auth');

usersRouter.post('/signup', userCreateCheck, createUser);
usersRouter.post('/signin', userLoginCheck, login);
usersRouter.get('/users/me', auth, getUser);


module.exports = usersRouter;
