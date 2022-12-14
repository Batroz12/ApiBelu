const faker = require("faker")
const crypto = require("crypto");
const boom = require("@hapi/boom");
const { models } = require('./../libs/sequelize');

class DetalleVentaService{
  constructor(){
  }
  async create(data) {
    const crearNuevoDetalleVenta ={
      id : crypto.randomUUID(),
      ...data
    }
    const salida = await models.DetVenta.create(crearNuevoDetalleVenta);
    return salida;
  }
  async find(){
    const salida = await models.DetVenta.findAll();
    return salida;
    // return this.empleado;
  }
  async finfOne(id){
    const data = await models.DetVenta.findByPk(id);
    return data;
    // const Empleado = this.empleado.find((Empleado) =>{
    //   return Empleado.id === id;
    // });
    // if (!Empleado) {
    //   throw boom.notFound("Empleado no encontrado");
    // }
    // if (!Empleado.estaBloqueado) {
    //   throw boom.forbidden("Empleado bloqueado");
    // }
    // return Empleado;
  }
  async update(id, changes){
    const DetVenta = await this.finfOne(id);
    const salida = await DetVenta.update(changes);
    return salida;
    // const index = this.empleado.findIndex(empleado =>{
    //   return empleado.id === id;
    // });
    // if(index===-1){
    //   throw new Error('Empleado no encontrado');
    // }
    // const empleado = this.empleado[index];
    //   this.empleado[index] = {
    //     ...empleado,
    //     ...changes
    // };
    // return this.empleado[index];
  }
  async delete(id){
    const DetVenta = await this.finfOne(id);
    await DetVenta.destroy();
    return { id };
  //   const posicion = this.empleado.findIndex(item => item.id == id);
  //   if (posicion === -1) {
  //     throw boom.notFound("Empleado no encontrado");
  //   }
  //   this.empleado.splice(posicion, 1);
  //   return {
  //     mensaje: "Empleado eliminado",
  //     id
  //   };
 }
}

module.exports = DetalleVentaService;
