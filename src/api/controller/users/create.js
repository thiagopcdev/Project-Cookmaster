const statusCode = require('../../helper/statusCode');
const service = require('../../service/users');

module.exports = async (req, res, next) => {
  try {
    const create = await service.create(req.body);
    if (create.err) {
      return res.status(statusCode.CONFLICT).json(create.err);
    }
    return res.status(statusCode.CREATED).json(create);
  } catch (err) {
    next(err);
  }
};