"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "listings",
      [
        {
          title: "Apple Pie",
          description: "Test",
          price: 3.5,
          likes: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },
        {
          title: "Strawberry Cheesecake",
          description: "Test",
          price: 2.5,
          likes: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },
        {
          title: "Lasagna",
          description: "Test",
          price: 5,
          likes: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },

        {
          title: "Spring Rolls",
          description: "Test",
          price: 0.5,
          likes: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },
        {
          title: "French Baguettes",
          description: "Test",
          price: 2,
          likes: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },
        {
          title: "Salted Caramel Muffins",
          description: "Test",
          price: 1.5,
          likes: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("listings", null, {});
  },
};
