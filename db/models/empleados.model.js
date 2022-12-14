const { Model, Sequelize, DataTypes } = require('sequelize');

const EMPLEADO_TABLE = 'empleados';

const EmpleadoSchema = {
  id: {
    primaryKey: true,
    type: DataTypes.UUID
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  apellido: {
    allowNull: false,
    type: DataTypes.STRING
  },
  edad: {
    allowNull: false,
    type: DataTypes.STRING
  },
  usuario: {
    allowNull: true,
    type: DataTypes.STRING,
    unique: true
  }
};

class Empleado extends Model {
  static associate(models){
    this.hasMany(models.venta, {
      foreignKey: 'empleadoid'
    });
  }
  static config(sequelize){
    return {
      sequelize,
      tableName: EMPLEADO_TABLE,
      modelName: 'Empleado',
      timestamps: false
    };
  }
}
module.exports= { EMPLEADO_TABLE, EmpleadoSchema, Empleado }
