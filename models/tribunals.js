'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tribunals extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tribunals.init({
    Name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tribunals',
  });
  return Tribunals;
};