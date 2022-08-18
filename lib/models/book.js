'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      book.belongsTo(models.author, {
        foreignKey: 'genre_id',
      });
      // define association here
    }
  }
  book.init({
    title: DataTypes.STRING,
    released: DataTypes.INTEGER,
    author_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'book',
  });
  return book;
};
