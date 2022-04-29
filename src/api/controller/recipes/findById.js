const statusCode = require('../../helper/statusCode');
const { findById } = require('../../service/recipes');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const recipe = await findById(id);
    if (!recipe) {
      return res.status(statusCode.NOT_FOUND)
        .json({ message: 'recipe not found' });
    }
    return res.status(statusCode.OK).json(recipe);
  } catch (err) {
    next(err);
  }
};