const coon = require('../connection');

module.exports = async (recipe) => (
  await coon()).collection('recipes').insertOne({ ...recipe }).then((res) =>
  ({ recipe: { ...recipe, _id: res.insertedId } }));
