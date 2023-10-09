const express = require('express');
const PersonaModel = require ('../models/Personas')


const router = express.Router();

const jwt = require ('jsonwebtoken');
const SECRET_KEY ="mi_clave_super_cool";

//creacion de un token que no permita posteriormente acceder a los recursos que requieren la info que requerien  autorizcion

router.post('/',(req,res) =>{
    const {usuario , contrasena} = req.body;
    console.log( usuario + contrasena);
    PersonaModel.loginPersona(usuario,contrasena)
    .then((data) => {

        const token = jwt.sign({nombre},SECRET_KEY,{expiresIn:'3m'});
        return res.status(201).send(token)
        
    })
    .catch ((error) =>{
        return res.status(500).send({message: 'informacion incorrecta'})
   });

   

});


module.exports = router;