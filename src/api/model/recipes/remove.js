const { ObjectId } = require('mongodb');
const conn = require('../connection');

module.exports = async (id) =>
  (await conn()).collection('recipes').deleteOne({ _id: ObjectId(id) });
