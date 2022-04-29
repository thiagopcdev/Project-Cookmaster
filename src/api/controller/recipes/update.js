const service = require('../../service/recipes');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await service.update(id, req.body);

    return res.status(result.status).json(result.message);
  } catch (err) {
    next(err);
  }
};