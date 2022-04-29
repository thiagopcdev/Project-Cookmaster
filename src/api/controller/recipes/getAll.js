const statusCode = require('../../helper/statusCode');
const { find } = require('../../service/recipes');

module.exports = async (_req, res, next) => {
  try {
    const filters = {};
    const recipes = await find(filters);
    return res.status(statusCode.OK).json(recipes);
  } catch (err) {
    next(err);
  }
};