const { ObjectId } = require('mongodb');
const coon = require('../connection');

module.exports = async (id, obj) => (
  await coon()).collection('recipes').updateOne(
      { _id: ObjectId(id) },
      { $set: { ...obj } },
    ).then(() => ({ _id: id, ...obj }));
