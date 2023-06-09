const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const user = require('../src/controller/user.controller');
const task = require('../src/controller/task.controller');
const auth = require('../src/controller/auth.controller');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/user', user);
app.use('/task', task);
app.use('/auth', auth);

app.use((error, req, res, _next) => res.send(error.message));

module.exports = app;
