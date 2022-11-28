const { EMPLEADO_TABLE, EmpleadoSchema, Empleado } = require('./empleados.model');

function setupModels(sequelize){
  Empleado.init(EmpleadoSchema, Empleado.config(sequelize));
  Empleado.associate(sequelize.models);
}

module.exports = {setupModels}
