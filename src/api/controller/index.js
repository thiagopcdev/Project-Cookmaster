const express = require('express');

const root = express.Router({ mergeParams: true });

root.use('/users', require('./users'));
root.use('/login', require('./login'));
root.use('/recipes', require('./recipes'));

module.exports = root;