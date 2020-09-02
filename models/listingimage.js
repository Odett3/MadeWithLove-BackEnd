"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class listingImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      listingImage.belongsTo(models.listing);
    }
  }
  listingImage.init(
    {
      imageUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "listingImage",
    }
  );
  return listingImage;
};
