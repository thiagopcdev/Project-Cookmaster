const statusCode = require('../../helper/statusCode');
const { findById, remove } = require('../../model/recipes');

const error = {
  status: statusCode.NOT_FOUND,
  message: 'Recipe not found',
};

module.exports = async (id) => {
  const recipe = await findById(id);
  if (!recipe) return error;
  await remove(id);
  return { status: statusCode.NO_CONTENT };
};
