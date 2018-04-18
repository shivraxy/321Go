// Creating our Express app

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// set up Express app
const app = express();

// log requests to console
app.use(logger('dev'));

// parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// default catch-all route with welcome message
app.get('*', (req, res) => res.status(200).sendStatus({
    message: 'Welcome to 321Go!',
}));

// note application entry is in bin/www as required with Express 4.x
// https://stackoverflow.com/questions/23169941/what-does-bin-www-do-in-express-4-x
module.exports = app;