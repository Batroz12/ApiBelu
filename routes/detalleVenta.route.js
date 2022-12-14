const { json } = require("express");
const express = require("express");
const controlValidar = require('../middlewares/validar.middleware');
const {crearDetalleVSchema,actualizarDetalleVSchema,findByDetalleVSchema} = require("../schemas/detalleVenta.schema");

const DetalleVService = require('../services/detalleVenta.service')
const service = new DetalleVService();
const router = express.Router();

router.get('/',async (req, res, next)=>{
  try {
    const DetalleV = await service.find();
    res.status(200).json(DetalleV);
    } catch (error) {
      next(error)
    }
  });

router.get('/:id', controlValidar(findByDetalleVSchema, 'params'), async (req,res, next)=>{
  try {
    const { id } = req.params;
    const DetalleV = await service.finfOne(id);
    res.json(DetalleV);
  } catch (error) {
    next(error);
  }
});

router.post('/', controlValidar(crearDetalleVSchema, 'body'),async (req, res, next)=>{
  try {
    const body = req.body;
    const crearNuevoDetalleV = await service.create(body);
    res.status(201).json({
      mensaje: 'registro exitoso',
      datos: crearNuevoDetalleV
    });
  } catch (error) {
    next(error)
  }
});
router.patch('/:id',controlValidar(findByDetalleVSchema, 'params'), controlValidar(actualizarDetalleVSchema, 'body'), async (req,res, next) => {
  try {
    const { id }= req.params;
      const body = req.body;
      const DetalleV =await service.update(id,body);
      res.status(200).json({
        mensaje: 'DetalleV actualizado',
        DetalleV
      });
  } catch (error) {
    next(error)
  }
});

router.delete('/:id',controlValidar(findByDetalleVSchema, 'params'), async (req,res, next)=> {
  try {
    const {id} = req.params;
    const DetalleVEliminado = await service.delete(id);
    res.json({
    mensaje :'DetalleV eliminado',
    DetalleVEliminado
    });
  } catch (error) {
    next(error)
  }
});
module.exports = router;
