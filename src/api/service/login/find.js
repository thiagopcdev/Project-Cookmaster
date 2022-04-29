const jwt = require('jsonwebtoken');
const statusCode = require('../../helper/statusCode');
const { find } = require('../../model/users');

const secret = 'senhasecreta';

const jwtConfig = {
  expiresIn: '15m',
  algorithm: 'HS256',
};

const error = {
  status: statusCode.UNAUTHORIZED,
  message: 'Incorrect username or password',
};

module.exports = async (email, pass) => {
  const filters = { email };
  const user = await find(filters);

  if (!user[0] || user[0].password !== pass) return error;
  const { _id } = user[0];
  const { password, name, ...userWithoutPassword } = user[0];
  const token = jwt.sign({ data: { _id, ...userWithoutPassword } }, secret, jwtConfig);

  return { status: statusCode.OK, token };
};
