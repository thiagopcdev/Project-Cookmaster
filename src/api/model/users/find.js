const coon = require('../connection');

module.exports = async (filters) => 
  (await coon()).collection('users').find(filters).toArray();