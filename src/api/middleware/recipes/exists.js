const statusCode = require('../../helper/statusCode');

module.exports = async (req, res, next) => {
  try {
    const { name, ingredients, preparation } = req.body;
    if ((!name) || (!ingredients) || (!preparation)) {
      return res.status(statusCode.BAD_REQUEST)
        .json({ message: 'Invalid entries. Try again.' });
    }
    next();
  } catch (err) {
    next(err);
  }
};