const jwt = require('jsonwebtoken');
const statusCode = require('../helper/statusCode');

const secret = 'senhasecreta';
const error = {
  notFound: {
    message: 'missing auth token',
  },
  invalid: {
    message: 'jwt malformed',
  },
};
module.exports = async (req, res, next) => {
 try {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(statusCode.UNAUTHORIZED)
      .json(error.notFound);
  }
  const decoded = jwt.verify(token, secret);
  const { _id: id, role } = decoded.data;
  req.id = id;
  req.userRole = role;
  next();
 } catch (_err) {
   return res.status(statusCode.UNAUTHORIZED)
    .json(error.invalid);
 }
};