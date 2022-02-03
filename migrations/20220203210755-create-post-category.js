'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PostsCategories', {
      postId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'BlogPosts',
          },
          key: 'id'
        },
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Categories',
          },
          key: 'id'
        },
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PostsCategories');
  }
};