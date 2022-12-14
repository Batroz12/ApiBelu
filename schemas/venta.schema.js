const Joi = require('joi')

const id = Joi.string().uuid()
const nombre = Joi.string().min(1).max(30);

const crearVentaSchema = Joi.object({
  nombre: nombre.required(),
})

const actualizarVentaSchema = Joi.object({
  nombre,
})

const findByVentaSchema = Joi.object({
  id: id.required()
})
module.exports = {crearVentaSchema,actualizarVentaSchema,findByVentaSchema}
