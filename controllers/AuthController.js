const mongoose = require('mongoose');
const passport = require('passport');
const User = require('../models/User');

const userController = {};

userController.home = function(req, res) {
    res.render('index', )
};

userController.register = function(req, res) {
    res.render('register');
};

userController.doRegister = function(req, res) {
    User.register(new User({
        email: req.body.email
    }), req.body.password, function(err, user) {
        if(err) {
            return res.render('register', {user : user });
        }

        passport.authenticate('local')(req, res, function() {
            res.redirect('/');
        });
    });
};

userController.login = function(req, res) {
    res.render('SignIn');
};

userController.doLogin = function(req, res) {
    passport.authenticate('local')(req, res, function () {
        res.direct('/app/dashboard');
    });
};

userController.logout = function(req, res) {
    req.logout();
    res.redirect('/');
};

