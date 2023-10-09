//Funcion para validar el token

const jwt = require ('jsonwebtoken');
const SECRET_KEY ="mi_clave_super_cool";
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