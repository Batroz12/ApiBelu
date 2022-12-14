const express = require('express');

const empleadoRouter = require('./empleado.route');
const pedidoRouter = require('./pedido.route');
const productoRouter = require('./product.route');
const usuarioRouter = require('./usuario.route');
const detalleProductoRouter = require('./detalleProducto.route');
const detalleVentaRouter = require('./detalleVenta.route');
const ventaRouter = require('./venta.route');

function rutas(app) {
  app.get('/',(req, res)=> {
    res.send("API 'Es un Rasho es un mostruo' ACTIVAO 24/7")
   });
  const router = express.Router();
  app.use('/api/v1', router)
  router.use('/empleados', empleadoRouter);
  router.use('/pedidos', pedidoRouter);
  router.use('/productos', productoRouter);
  router.use('/usuarios', usuarioRouter);
  router.use('/venta', ventaRouter);
  router.use('/detVenta', detalleVentaRouter);
  router.use('/detProducto', detalleProductoRouter);

}
 
module.exports = rutas; 
