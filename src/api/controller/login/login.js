const { find } = require('../../service/login');

module.exports = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const result = await find(email, password);

    if (!result.token) {
      return res.status(result.status).json({ message: result.message });
    }
    return res.status(result.status).json({ token: result.token });
  } catch (err) {
    next(err);
  }
};