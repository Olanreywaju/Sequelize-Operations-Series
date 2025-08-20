// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Artiste extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Artiste.init({
//     name: DataTypes.STRING,
//     genre: DataTypes.STRING,
//     record_label: DataTypes.STRING,
//     country: DataTypes.STRING,
//     is_married: DataTypes.BOOLEAN
//   }, {
//     sequelize,
//     modelName: 'Artiste',
//   });
//   return Artiste;
// };


const { Sequelize, DataTypes, Model, UUIDV4 } = require('sequelize');
const sequelize = require('../database/database');

class Artiste extends Model {}

Artiste.init(
  {
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      genre: {
        type: DataTypes.STRING,
        allowNull: false
      },
      record_label: {
        type: DataTypes.STRING,
        allowNull: false
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false
      },
      is_married: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      gender: {
        type: DataTypes.ENUM(['MALE', 'FEMALE']),
        allowNull: false
      },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Artistes', // We need to choose the model name,
    timestamps: true
  },
);

// the defined model is the class itself
// console.log(User === sequelize.models.User); // tru

module.exports = Artiste;