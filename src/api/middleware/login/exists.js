const statusCode = require('../../helper/statusCode');

const error = {
  message: 'All fields must be filled',
};

module.exports = (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(statusCode.UNAUTHORIZED).json(error);
    }
    next();
  } catch (err) {
    next(err);
  }
};