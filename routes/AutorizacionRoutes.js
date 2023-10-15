const express = require('express');
const PersonaModel = require ('../models/Personas')
const PersonaRoutes =require ('./PersonasRoutes')
const AutorizacionController =require ('../controllers/AutorizacionController')
require('dotenv').config();


const router = express.Router();

const jwt = require ('jsonwebtoken');
const SECRET_KEY =process.env.SECRET_KEY;

//creacion de un token que no permita posteriormente acceder a los recursos que requieren la info que requerien  autorizcion

router.post('/auth',(req,res) =>{
    const {usuario , contrasena} = req.body;
    console.log( usuario + contrasena);
    PersonaModel.loginPersona(usuario,contrasena)
    .then((respuesta) => {
        console.log("credenciales correctas");
        
        const token = jwt.sign({usuario},SECRET_KEY,{expiresIn:'120m'});
        return res.status(201).send(token)
   })
   .catch ((error) =>{
        console.log ("me mori ")
        return res.status(500).send({message: error})
   });


});


module.exports = router;