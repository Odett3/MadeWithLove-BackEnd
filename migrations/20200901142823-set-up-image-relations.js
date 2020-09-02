"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("listingImages", "listingId", {
      type: Sequelize.INTEGER,
      references: {
        model: "listings",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("listingImages", "listingId");
  },
};
