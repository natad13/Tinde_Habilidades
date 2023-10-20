//Funcion para validar el token
require('dotenv').config();
const jwt = require ('jsonwebtoken');
const SECRET_KEY =process.env.SECRET_KEY;
const validateJTW = (request , response, next) => {
    const authHeader = request.get('Authorization'); // me trae cabecera
    //const accessToken = authHeader.split(' ')[1];

    console.log(`token ${authHeader}`)
    jwt.verify(authHeader,SECRET_KEY,(error,decode) => {

        if (error) {
            console.log("tooke erroneo")
            response.status(401).send('Denegado')
        } else{
            next()
        }

    });


};
module.exports = validateJTW;