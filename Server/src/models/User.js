const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.UUID, //* Tipo de dato, hexadecimal
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4, //* GENERADOR DE HEXADECIMALES
      },
      email: {
         type: DataTypes.STRING,
         allowNull: false,
         unique: true,
         isEmail: true
      },
      password: {
         type: DataTypes.STRING,
         allowNull: false,

      },
    },
    { timestamps: false }
  );
};
