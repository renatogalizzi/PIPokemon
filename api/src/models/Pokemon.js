const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true  
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imagen:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    vida:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    ataque:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    defensa:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    velocidad:{
      type:DataTypes.FLOAT,
    },
    altura:{
      type:DataTypes.FLOAT,
    },
    peso:{
      type:DataTypes.FLOAT,
    },


  },{
    timestamps:false
});
};
