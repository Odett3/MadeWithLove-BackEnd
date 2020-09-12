"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class listingTag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      listingTag.belongsTo(models.tag), listingTag.belongsTo(models.listing);
    }
  }
  listingTag.init(
    {
      listingId: DataTypes.INTEGER,
      tagId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "listingTag",
    }
  );
  return listingTag;
};
