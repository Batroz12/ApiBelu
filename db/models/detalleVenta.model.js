const { Model, Sequelize, DataTypes } = require('sequelize');

const DETALLEVENTA_TABLE = 'detalleventa';

const DetalleVSchema = {
  id: {
    primaryKey: true,
    type: DataTypes.UUID
  },
  cantidad: {
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true
  },
  precioVenta: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  descuento: {
    allowNull: false,
    type: DataTypes.INTEGER
  }
};

class DetalleVenta extends Model {
  static associate(models){
    this.belongsTo(models.venta, {
      as: 'venta'
    });
  }
  static config(sequelize){
    return {
      sequelize,
      tableName: DETALLEVENTA_TABLE,
      modelName: 'detalleventa',
      timestamps: false
    };
  }
}
module.exports= { DETALLEVENTA_TABLE, DetalleVSchema, DetalleVenta }
