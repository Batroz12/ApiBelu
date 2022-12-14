const { EMPLEADO_TABLE, EmpleadoSchema, Empleado } = require('./empleados.model');
const { VENTA_TABLE, VentaSchema, Venta } = require('./venta.model');
const { USUARIO_TABLE, UsuarioSchema, Usuario } = require('./usuario.model');
const { DETALLEPRODUCTO_TABLE, DetalleSchema, DetalleProducto } = require('./detalleProducto.model');
const { DETALLEVENTA_TABLE, DetalleVSchema, DetalleVenta } = require('./detalleVenta.model');
const { PRODUCTO_TABLE, ProductoSchema, Producto } = require('./producto.model');

function setupModels(sequelize){
  Empleado.init(EmpleadoSchema, Empleado.config(sequelize));
  Venta.init(VentaSchema, Venta.config(sequelize));
  Usuario.init(UsuarioSchema, Usuario.config(sequelize));
  DetalleProducto.init(DetalleSchema, DetalleProducto.config(sequelize));
  DetalleVenta.init(DetalleVSchema, DetalleVenta.config(sequelize));
  Producto.init(ProductoSchema, Producto.config(sequelize));

  Empleado.associate(sequelize.models);
  Venta.associate(sequelize.models);
  Usuario.associate(sequelize.models);
  DetalleProducto.associate(sequelize.models);
  DetalleVenta.associate(sequelize.models);
  Producto.associate(sequelize.models);
}

module.exports = {setupModels}
