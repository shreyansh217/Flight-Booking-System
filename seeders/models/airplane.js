// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Airplane extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Airplane.init({
//     modelNumber:{
//       type:DataTypes.STRING,
//       allowNull:false,
//     },
//     capacity: {
//       // DataTypes.INTEGER
//       type:DataTypes.INTEGER, 
//       allowNull:false, 
//       defaultValue:0, 
//       // max:1000
//       validate:{
//         max:1000
//       }

//   }
// }, {
//     sequelize,
//     modelName: 'airplanes',
//   });
//   return Airplane;
// };

'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {
    static associate(models) {
      // Define associations here if needed
    }
  }

  Airplane.init({
    modelNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      validate: {
        isInt: true,
        max: 1000
      }
    }
  }, {
    sequelize,
    modelName: 'Airplane', // Ensure correct case
  });

  return Airplane;
};
