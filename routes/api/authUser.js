const express = require('express');
const passport = require('passport');
const router = express.Router();
const auth = require('../../controllers/AuthController');

// /api/auth/
router.get('/', auth.home);

router.post('/signup', auth.register);

router.post('/signout', auth.logout);

router
// .post('/',
//     passport.authenticate('local', { successRedirect: '/app/dashboard', failureRedirect: '/', failureFlash: true })
// )
    .use('/signin', passport.authenticate('local'))
    .route('/signin')
    .post(auth.register);

module.exports = router;