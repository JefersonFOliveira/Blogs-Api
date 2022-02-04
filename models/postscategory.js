module.exports = (sequelize, DataTypes) => {
  const PostsCategory = sequelize.define('PostsCategory', 
  {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  }, { timestamps: false });
  return PostsCategory;
};