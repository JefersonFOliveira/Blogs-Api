const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

const createToken = (user) => {
  const { displayName, email } = user;
  const payload = { displayName, email };
  const jwtConfig = {
    algorithm: 'HS256',
    expiresIn: '13d',
  };

  const token = jwt.sign(payload, secret, jwtConfig);
  return { token };
};

module.exports = { createToken };