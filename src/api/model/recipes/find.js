const coon = require('../connection');

module.exports = async (filters) => 
  (await coon()).collection('recipes').find(filters).toArray();