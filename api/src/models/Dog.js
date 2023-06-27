const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Dog', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    height: { // altura
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight: { // peso
      type: DataTypes.STRING,
      allowNull: false,
    },
    life_span: { // años de vida
      type: DataTypes.STRING,
      allowNull: false,
    },
    created: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },{
    timestamps: false,
});
};
