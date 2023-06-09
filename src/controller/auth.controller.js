const express = require('express');

const route = express.Router();

route.get('/', (req, res) => {
  res.send('ok');
});

module.exports = route;
