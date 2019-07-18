const path = require('path');
const express = require('express');
const mongoose = require("mongoose");
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');
const db = require('./models');
const routes = require('./routes');
const passport = require('./config/passport');
const corsOptions = require('./config/cors.js');
​
const PORT = process.env.PORT || 3001;
const app = express();
​
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());
app.use(session({ secret: 'TBD', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors(corsOptions));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});


​
// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.

module.exports = app;