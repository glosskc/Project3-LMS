const express = require('express');
const router = express.Router();
const auth = require = require('../../controllers/AuthController');

router.get('/', auth.home);

router.get('/signup', auth.register);

router.post('/signup', auth.doRegister);

router.get('/signin', auth.login);

router.post('/signin', auth.doLogin);

router.get('/signout', auth.logout);

module.exports = router;