var mongoose = require("mongoose");
// var passportLocalMongoose = require('passport-local-mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
      },
    password: {
        type: String,
        trim: true,
        required: "Password is Required",
        validate: [
        function(input) {
            return input.length >= 8;
      },
        "Password should be longer."
        ]   
    },
    userCreated: {
        type: Date,
        default: Date.now
     }
});

// UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);