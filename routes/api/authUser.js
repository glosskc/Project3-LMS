const express = require('express');
const router = express.Router();
const auth = require = require('../../controllers/AuthController');

router.get('/', auth.home);

router.get('/Register', auth.register);

router.post('/Register', auth.doRegister);

router.get('/signin', auth.login);

router.post('/signin', auth.doLogin);

router.get('/signout', auth.logout);

module.exports = router;