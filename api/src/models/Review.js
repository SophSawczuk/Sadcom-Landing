const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define("review", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email:{
      type: DataTypes.STRING,
      allowNull: false
    },
    review:{
      type: DataTypes.STRING,
      allowNull: false
    },
    business: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status:{
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  /* {
    timestamps: false
  } */);
};