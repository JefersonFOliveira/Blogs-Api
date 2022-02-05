const { User } = require('../models');
const { createToken } = require('../auth/createToken');

const getEmailUser = async (email) => {
  const result = await User.findOne({ where: { email } });
  return result;
};

const createUser = async ({ displayName, email, password, image }) => {
  const isExist = await getEmailUser(email);

  if (isExist !== null) {
    return {
    err: { message: 'User already registered' } }; 
}
  const user = await User.create({ displayName, email, password, image });
  const token = createToken(user);
  return token;
};

const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ where: { email, password } });

  if (user === null) {
    return {
    err: { message: 'Invalid fields' } };
}
  const token = createToken(user);
  return token;
};

const getAllUser = async () => {
  const result = await User.findAll({});
  return result;
};

const getUserById = async (id) => {
  const user = await User.findOne({ where: { id } });
  if (user === null) {
    return {
    err: { message: 'User does not exist' } };
}
  console.log(user);
  return { user };
};

module.exports = {
  createUser,
  getEmailUser,
  loginUser,
  getAllUser,
  getUserById,
};
