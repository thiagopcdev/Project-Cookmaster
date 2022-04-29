const { find } = require('../../model/users');

module.exports = (filters) => find(filters);