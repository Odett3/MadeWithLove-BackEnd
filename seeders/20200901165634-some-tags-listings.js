"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "listingTags",
      [
        {
          listingId: 1,
          tagId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listingId: 1,
          tagId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listingId: 2,
          tagId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          listingId: 2,
          tagId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listingId: 3,
          tagId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listingId: 4,
          tagId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listingId: 4,
          tagId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listingId: 5,
          tagId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listingId: 5,
          tagId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listingId: 6,
          tagId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listingId: 6,
          tagId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("listingTags", null, {});
  },
};
