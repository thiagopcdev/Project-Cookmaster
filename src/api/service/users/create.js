const { create, find } = require('../../model/users');

const error = {
  err: {
    message: 'Email already registered',
  },
};

module.exports = async (user) => {
  const { email } = user;
  const filters = { email };
  const emailExists = await find(filters);

  if (emailExists.length > 0) {
    return error; 
  }
 
  const userWithRole = { ...user, role: 'user' };

  const res = await create(userWithRole);
  const { password, ...userWithoutRole } = res;
  return { user: userWithoutRole };
};