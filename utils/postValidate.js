const { schemaCreatePost } = require('./validates');

const validateCreatePost = async (req, res, next) => {
  const { error } = schemaCreatePost.validate(req.body);
  if (error) {
    return res.status(400)
    .json({ message: error.message });
  }
    next();
};

module.exports = {
  validateCreatePost,
};