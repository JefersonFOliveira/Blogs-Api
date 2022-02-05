const jwt = require('jsonwebtoken');
require('dotenv').config();

const { schemaCreateUser, schemaLogin } = require('./validates');

const secret = process.env.JWT_SECRET;

const validateCreateUser = async (req, res, next) => {
  const { error } = schemaCreateUser.validate(req.body);
  if (error) {
    return res.status(400)
    .json({ message: error.message });
  }
    next();
};

const validateLogin = async (req, res, next) => {
  const { error } = schemaLogin.validate(req.body);
  if (error) {
    return res.status(400)
    .json({ message: error.message });
  }
    next();
};

const validateJWT = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ message: 'Token not found' });

  try {
    const validToken = jwt.verify(authorization, secret);
    req.user = validToken;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  validateCreateUser,
  validateLogin,
  validateJWT,
};