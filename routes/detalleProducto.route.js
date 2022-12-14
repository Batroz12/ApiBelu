const { json } = require("express");
const express = require("express");
const controlValidar = require('../middlewares/validar.middleware');
const {crearDetallePSchema,actualizarDetallePSchema,findByDetallePSchema} = require("../schemas/detalleProducto.schema");

const DetalleProductoService = require('../services/detalleProducto.service')
const service = new DetalleProductoService();
const router = express.Router();

router.get('/',async (req, res, next)=>{
  try {
    const DetalleP = await service.find();
    res.status(200).json(DetalleP);
    } catch (error) {
      next(error)
    }
  });

router.get('/:id', controlValidar(findByDetallePSchema, 'params'), async (req,res, next)=>{
  try {
    const { id } = req.params;
    const DetalleP = await service.finfOne(id);
    res.json(DetalleP);
  } catch (error) {
    next(error);
  }
});

router.post('/', controlValidar(crearDetallePSchema, 'body'),async (req, res, next)=>{
  try {
    const body = req.body;
    const crearNuevoDetalleP = await service.create(body);
    res.status(201).json({
      mensaje: 'registro exitoso',
      datos: crearNuevoDetalleP
    });
  } catch (error) {
    next(error)
  }
});
router.patch('/:id',controlValidar(findByDetallePSchema, 'params'), controlValidar(actualizarDetallePSchema, 'body'), async (req,res, next) => {
  try {
    const { id }= req.params;
      const body = req.body;
      const DetalleP =await service.update(id,body);
      res.status(200).json({
        mensaje: 'DetalleP actualizado',
        DetalleP
      });
  } catch (error) {
    next(error)
  }
});

router.delete('/:id',controlValidar(findByDetallePSchema, 'params'), async (req,res, next)=> {
  try {
    const {id} = req.params;
    const DetallePEliminado = await service.delete(id);
    res.json({
    mensaje :'DetalleP eliminado',
    DetallePEliminado
    });
  } catch (error) {
    next(error)
  }
});
module.exports = router;
