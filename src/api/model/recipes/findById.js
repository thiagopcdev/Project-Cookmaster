const { ObjectId } = require('mongodb');
const conn = require('../connection');

module.exports = async (id) => (ObjectId.isValid(id)
    ? (await conn()).collection('recipes').findOne(ObjectId(id))
    : null);
