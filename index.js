const express = require('express'); 
const rutas = require('./routes');
const cors = require('cors');
const app = express();

const { manejarError, mostrarError, boomManejarError } = require('./middlewares/error.middleware');


app.use(cors());

const port = 3500;
app.use(express.json());

rutas(app);
app.use(mostrarError);
app.use(boomManejarError);
app.use(manejarError);


app.listen(port, () =>{
  console.log("puerto activao " + port);
});

