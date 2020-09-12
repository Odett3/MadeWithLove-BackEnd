"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Danny",
          surname: "Speck",
          email: "test@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          phone: "0123456789",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSmpoQaaw13BKAmYv1iRPzkz9AkM0ZskCqK_g&usqp=CAU",
          lat: 52.3595125,
          long: 4.6569828,
          address: "112 Spijkerboorweg, Haarlem",
          postcode: "2037 EN",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Odette",
          surname: "Pulé",
          email: "o@o.com",
          password: bcrypt.hashSync("o", SALT_ROUNDS),
          phone: "0123456789",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYX0UyMft82PFNiKBcQ1RKdEw8XhGl0K0HkQ&usqp=CAU",
          lat: 52.3564192,
          long: 4.635418,
          address: "Engelandlaan 2038, Haarlem",
          postcode: "2034 GV",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
