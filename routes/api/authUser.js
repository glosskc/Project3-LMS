const express = require('express');
const passport = require('passport');
const router = express.Router();
const auth = require('../../controllers/AuthController');

// /api/auth/
router.get('/', auth.home);

router.post('/signup', auth.register);

router.post('/signout', auth.logout);

router
    .use('/signin', passport.authenticate('local'))
    .route('/signin')
    .post(auth.login);

module.exports = router;