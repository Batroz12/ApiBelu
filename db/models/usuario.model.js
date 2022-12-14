const { Model, Sequelize, DataTypes } = require('sequelize');

const USUARIO_TABLE = 'clientes';

const UsuarioSchema = {
  id: {
    primaryKey: true,
    type: DataTypes.UUID
  },
  correo: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  }
};

class Usuario extends Model {
  static associate(models){
    this.hasMany(models.venta, {
      foreignKey: 'usuarioId'
    });
  }
  static config(sequelize){
    return {
      sequelize,
      tableName: USUARIO_TABLE,
      modelName: 'Usuario',
      timestamps: false
    };
  }
}
module.exports= { USUARIO_TABLE, UsuarioSchema, Usuario }
