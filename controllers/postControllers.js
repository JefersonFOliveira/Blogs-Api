const postService = require('../services/postServices');
const { validateJWT } = require('../auth/validateToken');
const { getEmailUser } = require('../services/userServices');

const create = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  // const { id } = req.user;
  const { authorization } = req.headers;
  const payload = validateJWT(authorization);
  const userEmail = payload.email;
  const userData = await getEmailUser(userEmail);
  const userId = userData.id;
  
  const { post, err } = await postService.createPost(title, content, categoryIds, userId);
  
  if (err) return res.status(400).json(err);

  return res.status(201).json(post);
};

const getAll = async (_req, res) => {
  const posts = await postService.getAllPost();

  res.status(200).json(posts);
};

module.exports = {
  create,
  getAll,
};