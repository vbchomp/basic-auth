'use strict';

// 3rd Party Resources
const express = require('express');

// Prepare the express app
const app = express();

// require error handlers
const handle404 = require('./error-handlers/404.js');
const handle500 = require('./error-handlers/500.js');

// bring in the authRouter
const authRouter = require('./auth/router.js');

// Process JSON input and put the data on req.body
app.use(express.json());

// Process FORM intput and put the data on req.body
app.use(express.urlencoded({ extended: true }));

// use the authRouter
app.use(authRouter);

// use 404 and 500 handlers
app.use('*', handle404);
app.use(handle500);

module.exports = app;


