// Creating our Express app

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// set up Express app
const app = express();
var PORT = process.env.PORT || 2000;

// log requests to console
app.use(logger('dev'));

// parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// make app aware of routes
// this has to come before the catch-all route
require('./server/routes')(app);
// default catch-all route with welcome message
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  

// note application entry is in bin/www as required with Express 4.x
// https://stackoverflow.com/questions/23169941/what-does-bin-www-do-in-express-4-x
module.exports = app;