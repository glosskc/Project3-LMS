const User = require('../models/User');

module.exports = {
    home: function(req, res) {
        res.render('/');
    },
    
    register: function(req, res) {
        console.log(req.body);
        User.register(new User({ username: req.body.username }), req.body.password, function(err, user) {
            if(err) {
                return res.status(500).json({msg: 'Unable to register account', err});
            }
            
            res.json(user);
        });
    },
    
    login: function(req, res) {
        res.json(req.user);
    },
    
    logout: function(req, res) {
        req.logout();
        res.end();
    }
};
