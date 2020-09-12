"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "listingImages",
      [
        {
          imageUrl:
            "https://cdn.pixabay.com/photo/2020/08/11/13/58/apple-pie-5479993__480.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          listingId: 1,
        },
        {
          imageUrl:
            "https://cdn.pixabay.com/photo/2018/07/22/18/26/cake-3555185__480.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          listingId: 2,
        },
        {
          imageUrl:
            "https://cdn.pixabay.com/photo/2017/02/15/15/17/meal-2069021_1280.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          listingId: 3,
        },

        {
          imageUrl:
            "https://cdn.pixabay.com/photo/2017/02/25/15/18/spring-rolls-2097978__480.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          listingId: 4,
        },
        {
          imageUrl:
            "https://cdn.pixabay.com/photo/2010/12/13/10/14/background-2561__480.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          listingId: 5,
        },
        {
          imageUrl:
            "https://cdn.pixabay.com/photo/2016/08/27/13/19/muffins-1624142_1280.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          listingId: 6,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("listingImages", null, {});
  },
};
