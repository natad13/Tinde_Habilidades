// Configuracion del servidor 
//const {corsConfiguration} =require('./midle/cors');
const express = require('express'); // instanciar express
const cors = require('cors');
const server = express();

const port = 3000 ; 

const Routes = require ('./routes');


server.use(express.json());
server.use(cors())

server.use('/api/v1',Routes); 
//server.use(corsConfiguration());

// crear un servidor y esta escuchando peticiones 
server.listen(port ,()=> {
    console.log(`La API se encuentra escuchando el puerto ${port}`)

}); // crea mi servidor