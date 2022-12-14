const { Model, Sequelize, DataTypes } = require('sequelize');

const PRODUCTO_TABLE = 'producto';

const ProductoSchema = {
  id: {
    primaryKey: true,
    type: DataTypes.UUID
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING
  },
  precio: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
};

class Producto extends Model {
  static associate(models){
    this.hasMany(models.detalleProducto, {
      foreignKey: 'productoId'
    });
  }
  static config(sequelize){
    return{
      sequelize,
      tableName: PRODUCTO_TABLE,
      modelName: 'producto',
      timestamps: false
    };
  }
}
module.exports= { PRODUCTO_TABLE, ProductoSchema, Producto }
