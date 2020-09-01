"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class listing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      listing.belongsTo(models.user), listing.hasMany(models.listingImage);
    }
  }
  listing.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      price: DataTypes.FLOAT,

      likes: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "listing",
    }
  );
  return listing;
};
