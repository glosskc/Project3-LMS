const express = require("express");
const mongoose = require("mongoose");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const routes = require("./routes");
const db = require("./models");

const app = express();
const PORT = process.env.PORT || 3001;

// passport.use(new LocalStrategy({
//   usernameField: 'email',
// }, User.authenticate()));
passport.use(new LocalStrategy(db.User.authenticate()));
passport.serializeUser(db.User.serializeUser());
passport.deserializeUser(db.User.deserializeUser());

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Initialize passport and express session
app.use(require('express-session') ({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}



// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/CRM")
  .then(() => console.log('Connection is successul!'))
  .catch((err) => console.log(err));

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
