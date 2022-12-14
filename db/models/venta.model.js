const { Model, Sequelize, DataTypes } = require('sequelize');

const VENTA_TABLE = 'venta';

const VentaSchema = {
  id: {
    primaryKey: true,
    type: DataTypes.UUID
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
};

class Venta extends Model {
  static associate(models){
    this.belongsTo(models.empleado, {
      as: 'empleado'
    });
  }
  static associate(models){
    this.belongsTo(models.usuario, {
      as: 'usuario'
    });
  }
  static associate(models){
    this.hasMany(models.detalleventa, {
      foreignKey: 'ventaId'
    });
  }
  static config(sequelize){
    return{
      sequelize,
      tableName: VENTA_TABLE,
      modelName: 'venta',
      timestamps: false
    };
  }
}
module.exports= { VENTA_TABLE, VentaSchema, Venta }
