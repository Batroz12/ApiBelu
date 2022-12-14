const { Model, Sequelize, DataTypes } = require('sequelize');

const DETALLEPRODUCTO_TABLE = 'detalleproducto';

const DetalleSchema = {
  id: {
    primaryKey: true,
    type: DataTypes.UUID
  },
  stock: {
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true
  },
  precioCompra: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  precioVenta: {
    allowNull: false,
    type: DataTypes.INTEGER
  }
};

class DetalleProducto extends Model {
  static associate(models){
    this.belongsTo(models.producto, {
      as: 'producto'
    });
  }
  static config(sequelize){
    return {
      sequelize,
      tableName: DETALLEPRODUCTO_TABLE,
      modelName: 'detalleProducto',
      timestamps: false
    };
  }
}
module.exports= { DETALLEPRODUCTO_TABLE, DetalleSchema, DetalleProducto }
