var express = require('express');
var app = express();

const {mongoose} = require('./database')
const cors = require('cors');

//middlewares
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

//Cargamos el modulo de direccionamiento de rutas para puntos
app.use('/api/mensajes', require('./routes/mensajes.route.js'));
app.use('/api/asistentes', require('./routes/asistentes.route.js'));
app.use('/api/empresas', require('./routes/empresa.route'));
app.use('/api/pasajes', require('./routes/pasajes.route'));
app.use('/api/adelantos', require('./routes/adelantos.route'));
//setting

app.set('port', process.env.PORT || 3000);
//starting the server

app.listen(app.get('port'), () => {
 console.log(`Server started on port`, app.get('port'));
});
