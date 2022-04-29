const coon = require('../connection');

module.exports = async (user) => (
  await coon()).collection('users').insertOne({ ...user }).then((res) =>
  ({ ...user, _id: res.insertedId }));
