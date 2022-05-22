const {DataTypes} = require("sequelize");

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("characters", {
    id: {
      allowNull: false,
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      validate: {
        notNull: {msg: "Can not be null"},
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, //nombre unico
      validate: {
        is: /^([a-zA-Z -_]+)$/,
        notNull: {msg: "Can not be null"},
        notEmpty: true,
      },
    },
    species: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // status: {
    //   type: DataTypes.ENUM("Alive", "Dead", "unknown"),//solo acepta los elementos definidos
    // },
    origin: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    created: {
      type: DataTypes.BOOLEAN,
      // allowNull: false,
      // defaultValue: false,
    },
  });
};
