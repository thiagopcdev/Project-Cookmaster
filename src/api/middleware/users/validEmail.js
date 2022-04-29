const statusCode = require('../../helper/statusCode');

const error = {
  notExist: {
    message: 'Invalid entries. Try again.',
  },
};

module.exports = (req, res, next) => {
  try {
    const { email } = req.body;
    // // Regex from https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
    // // Thank you Stackoverflow!
    const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
     if (!emailRegex.test(email)) {
      return res.status(statusCode.BAD_REQUEST)
      .json(error.notExist);
     }
     next();
  } catch (err) {
    next(err);
  }
};