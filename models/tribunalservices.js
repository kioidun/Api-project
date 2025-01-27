'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TribunalServices extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Tribunals.hasMany(models.TribunalServices, {
        foreignKey: 'TribunalID',
    });
    TribunalServices.belongsTo(models.Tribunals, {
        foreignKey: 'TribunalID',
    });
    }
  }
  TribunalServices.init({
    Name: DataTypes.STRING,
    TribunalID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TribunalServices',
  });
  return TribunalServices;
};