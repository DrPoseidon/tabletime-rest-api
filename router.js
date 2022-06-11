const Router = require('express').Router;
const router = new Router;
const UserController = require('./controllers/user-controller');

router.post('/createOrder', UserController.createOrder);

router.post('/register', UserController.register);

router.get('/getUsers', UserController.getUsers);

router.post('/getUser', UserController.getUser);

module.exports = router;