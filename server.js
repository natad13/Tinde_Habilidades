// Configuracion del servidor 

const express = require('express'); // instanciar express

const server = express();

const port = 3000 ; 

const Routes = require ('./routes');

server.use(express.json());
server.use('/api/v1',Routes); 


// crear un servidor y esta escuchando peticiones 
server.listen(port ,()=> {
    console.log(`La API se encuentra escuchando el puerto ${port}`)

}); // crea mi servidor