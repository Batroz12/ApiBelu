const Joi = require('joi')

const id = Joi.string().uuid()
const cantidad = Joi.number().integer().min(2);
const precioVenta = Joi.number().integer().min(3);
const descuento = Joi.number().integer().min(2);

const crearDetalleVSchema = Joi.object({
  cantidad: cantidad.required(),
  precioVenta: precioVenta,
  descuento: descuento,
})

const actualizarDetalleVSchema = Joi.object({
  cantidad,
  precioVenta,
  descuento,
})

const findByDetalleVSchema = Joi.object({
  id: id.required()
})
module.exports = {crearDetalleVSchema,actualizarDetalleVSchema,findByDetalleVSchema}
