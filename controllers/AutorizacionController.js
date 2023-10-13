//Funcion para validar el token
require('dotenv').config();
const jwt = require ('jsonwebtoken');
const SECRET_KEY =process.env.SECRET_KEY;
const validateJTW = (request , response, next) => {
    const authHeader = request.get('authorization'); // me trae cabecera
    const accessToken = authHeader.split(' ')[1];


    jwt.verify(accessToken,SECRET_KEY,(error,decode) => {

        if (error) {
            response.status(401).send('Denegado')
        } else{
            next()
        }

    });


};
module.exports = validateJTW;