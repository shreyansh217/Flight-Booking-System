'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Airplane,{
        foreignKey:'airplaneId'
      });
      this.belongsTo(models.Airport,{
        foreigKey: 'arrivalAirportID'

      });
      this.belongsTo(models.Airport,{
        foreigKey: 'departureAirportID'

      });
    }
  }
  Flight.init({
    flightNumber:{ 
      type:DataTypes.STRING,
      allowNull:false
    },

    airplaneID:{
      type: DataTypes.INTEGER,
      allowNull:false
    },

    departureAirportID:{ 
      type:DataTypes.STRING,
      allowNull:false
    },

    arrivalAirportID: {
      type:DataTypes.STRING,
      allowNull:false
    },
    arrivalTime:{
      type:DataTypes.DATE,
      allowNull:false
    } ,
    departureTime:
    { 
      type:DataTypes.DATE,
      allowNull:false
    },
    price: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    boardingGate:{
    type: DataTypes.STRING,
   },
    totalSeats:{ 
      type:DataTypes.INTEGER,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Flight',
  });
  return Flight;
};