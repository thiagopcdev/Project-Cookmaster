const statusCode = require('../../helper/statusCode');
const { findById, update } = require('../../model/recipes');

const error = {
  notFound: {
    status: statusCode.NOT_FOUND,
    message: 'Recipe not found',
  }, 
  permission: {
    status: statusCode.UNAUTHORIZED,
    message: 'You are not allowed to perform this operation.',
  },
};

module.exports = async ({ id, filename, userRole, userId }) => {
  const recipe = await findById(id);
  if (!recipe) return error.notFound;
  if (recipe.userId !== userId && userRole === 'user') {
    return error.permission;
  }
  const newField = { image: `localhost:3000/src/uploads/${filename}` };
  const resUpdate = await update(id, newField);
  const result = { ...recipe, ...resUpdate };
  return { status: statusCode.OK, message: result };
};