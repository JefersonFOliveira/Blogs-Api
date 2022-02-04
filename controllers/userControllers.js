const { createUser, getUserByEmail } = require('../services/userServices');
const { schemaCreateUser } = require('../utils/validates');

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  try {
    schemaCreateUser.validate({ displayName, email, password, image });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
  const userByEmail = await getUserByEmail(email);
  if (userByEmail) return res.status(409).json({ message: 'User already registered' });

  const user = await createUser({ displayName, email, password, image });
  return res.status(201).json(user);
};

module.exports = { create }; 
