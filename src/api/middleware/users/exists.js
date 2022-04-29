const statusCode = require('../../helper/statusCode');

const error = {
  notExist: {
    message: 'Invalid entries. Try again.',
  },
};

module.exports = (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if ((!name) || (!email) || (!password)) { 
      return res.status(statusCode.BAD_REQUEST)
        .json(error.notExist);
     }
     next();
  } catch (err) {
    next(err);
  }
};