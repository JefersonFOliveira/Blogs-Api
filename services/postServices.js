const { BlogPost, Category, User } = require('../models');

const getCategoryById = async (id) => {
  const category = await Category.findByPk(id);
  return category;
};

const createPost = async (title, content, categoryIds, userId) => {
  const postExist = await getCategoryById(categoryIds[0]);
  // console.log('entrou aqui', postExist);

  if (postExist === null) {
    return {
    err: { message: '"categoryIds" not found' } }; 
}
  
  const post = await BlogPost.create({ title, content, categoryIds, userId });
  return { post };
};

const getAllPost = async () => {
  const result = await BlogPost.findAll({ include: [{ model: User, as: 'user' },
  { model: Category, as: 'categories', atributes: ['id', 'name'] }] });
  return result;
};

module.exports = {
  getCategoryById,
  createPost,
  getAllPost,
};