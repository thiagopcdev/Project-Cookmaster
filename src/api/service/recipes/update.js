const statusCode = require('../../helper/statusCode');
const { findById, update } = require('../../model/recipes');

const error = {
  status: statusCode.NOT_FOUND,
  message: 'Recipe not found',
};

module.exports = async (id, obj) => {
  const recipe = await findById(id);
  if (!recipe) return error;
  const resUpdate = await update(id, obj);
  const result = { ...recipe, ...resUpdate };
  return { status: statusCode.OK, message: result };
};
