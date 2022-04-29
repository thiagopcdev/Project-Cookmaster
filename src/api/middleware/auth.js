const jwt = require('jsonwebtoken');
const statusCode = require('../helper/statusCode');

const secret = 'senhasecreta';
const error = {
  message: 'jwt malformed',
};
module.exports = async (req, res, next) => {
 try {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(statusCode.UNAUTHORIZED)
      .json(error);
  }
  const decoded = jwt.verify(token, secret);
  const { _id: id } = decoded.data;
  req.id = id;
  next();
 } catch (_err) {
   return res.status(statusCode.UNAUTHORIZED)
    .json(error);
 }
};