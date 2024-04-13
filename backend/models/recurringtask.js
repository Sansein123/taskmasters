'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RecurringTask extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RecurringTask.init({
    RecurrencePattern: DataTypes.STRING,
    StartDate: DataTypes.DATE,
    EndDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'RecurringTask',
  });
  return RecurringTask;
};