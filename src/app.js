const express = require('express');
const bodyParser = require('body-parser');
const user = require('../src/controller/user.controller');
const task = require('../src/controller/task.controller');

const app = express();

app.use(bodyParser.json());
app.use('/user', user);
app.use('/task', task);

app.use((error, req, res, _next) => res.send(error.message));

module.exports = app;
