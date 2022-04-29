const statusCode = require('../../helper/statusCode');
const { create } = require('../../service/recipes');

module.exports = async (req, res, next) => {
  try {
    const { name, ingredients, preparation } = req.body;
    const { id: userId } = req;
    const recipeSchema = {
      name,
      ingredients,
      preparation,
      userId,
    };
    const created = await create(recipeSchema);
    if (!created) {
      return res.status(statusCode.INTERNAL_SERVER_ERROR);
    }
    return res.status(statusCode.CREATED).json(created);
  } catch (err) {
    next(err);
  }
};