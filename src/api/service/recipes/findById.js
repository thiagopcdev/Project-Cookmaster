const { findById } = require('../../model/recipes');

module.exports = (id) => findById(id);