const service = require('../../service/recipes');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const resp = await service.remove(id);

    if (resp.status === 404) {
      return res.status(resp.status).json({ message: resp.message });
    }
    return res.status(resp.status).end();
  } catch (err) {
    next(err);
  }
};