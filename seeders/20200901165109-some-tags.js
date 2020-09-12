"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "tags",
      [
        {
          title: "dessert",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "baking",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "french",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          title: "pasta",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "thai",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "vegetarian",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("tags", null, {});
  },
};
