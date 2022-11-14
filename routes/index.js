const express = require('express');

const empleadoRouter = require('./empleado.route');
const pedidoRouter = require('./pedido.route');

function rutas(app) {
  app.get('/',(req, res)=> {
    res.send("API 'Es un Rasho es un mostruo' ACTIVAO 24/7")
   });
  const router = express.Router();
  app.use('/api/v1', router)
  router.use('/empleados', empleadoRouter);
  router.use('/pedidos', pedidoRouter);

}
 
module.exports = rutas; 
