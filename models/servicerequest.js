'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ServiceRequest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.TribunalServices.hasMany(models.ServiceRequest, {
        foreignKey: 'TribunalServiceID',
    });
    ServiceRequest.belongsTo(models.TribunalServices, {
        foreignKey: 'TribunalServiceID',
    });

    models.Tribunals.hasMany(ServiceRequest, {
      foreignKey: 'TribunalsID',
  });
  ServiceRequest.belongsTo(models.Tribunals, {
      foreignKey: 'TribunalsID',
  });
    }
  }
  ServiceRequest.init({
    RequestorPhoneNumber: DataTypes.STRING,
    RequestTime: DataTypes.STRING,
    RequestDate: DataTypes.STRING,
    TribunalsID: DataTypes.INTEGER,
    TribunalServiceID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ServiceRequest',
  });
  return ServiceRequest;
};