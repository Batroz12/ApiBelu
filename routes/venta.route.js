const { json } = require("express");
const express = require("express");
const controlValidar = require('../middlewares/validar.middleware');
const {crearVentaSchema,actualizarVentaSchema,findByVentaSchema} = require("../schemas/venta.schema");

const VentaService = require('../services/venta.service')
const service = new VentaService();
const router = express.Router();

router.get('/',async (req, res, next)=>{
  try {
    const Venta = await service.find();
    res.status(200).json(Venta);
    } catch (error) {
      next(error)
    }
  });

router.get('/:id', controlValidar(findByVentaSchema, 'params'), async (req,res, next)=>{
  try {
    const { id } = req.params;
    const Venta = await service.finfOne(id);
    res.json(Venta);
  } catch (error) {
    next(error);
  }
});

router.post('/', controlValidar(crearVentaSchema, 'body'),async (req, res, next)=>{
  try {
    const body = req.body;
    const crearNuevaVenta = await service.create(body);
    res.status(201).json({
      mensaje: 'registro de Venta exitoso',
      datos: crearNuevaVenta
    });
  } catch (error) {
    next(error)
  }
});
router.patch('/:id',controlValidar(findByVentaSchema, 'params'), controlValidar(actualizarVentaSchema, 'body'), async (req,res, next) => {
  try {
    const { id }= req.params;
      const body = req.body;
      const Venta =await service.update(id,body);
      res.status(200).json({
        mensaje: 'Venta actualizado',
        Empleado
      });
  } catch (error) {
    next(error)
  }
});

router.delete('/:id',controlValidar(findByVentaSchema, 'params'), async (req,res, next)=> {
  try {
    const {id} = req.params;
    const VentaEliminada = await service.delete(id);
    res.json({
    mensaje :'Venta eliminada',
    VentaEliminada
    });
  } catch (error) {
    next(error)
  }
});
module.exports = router;
