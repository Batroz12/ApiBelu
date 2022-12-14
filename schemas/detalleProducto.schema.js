const Joi = require('joi')

const id = Joi.string().uuid()
const stock = Joi.number().integer().min(2);
const precioCompra = Joi.number().integer().min(3);
const precioVenta = Joi.number().integer().min(2);

const crearDetallePSchema = Joi.object({
  stock: stock,
  precioCompra: precioCompra,
  precioVenta: precioVenta,
})

const actualizarDetallePSchema = Joi.object({
  stock,
  precioCompra,
  precioVenta,
})

const findByDetallePSchema = Joi.object({
  id: id.required()
})
module.exports = {crearDetallePSchema,actualizarDetallePSchema,findByDetallePSchema}
