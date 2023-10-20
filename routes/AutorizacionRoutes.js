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
     console.log("entre a auteticacion");
     const {usuario , contrasena , tipo} = req.body;
     PersonaModel.loginPersona(usuario,contrasena,tipo)
    .then((data) => {
          const tamano =(Object.entries(data).length);;
          if (tamano !=0 ) {
          
               const token = jwt.sign({usuario},SECRET_KEY,{expiresIn:'120m'});
               if (tipo == "empresa") {

                    return res.status(201).send([{token:token},{id:data[0].id_empresa}])
  
               }
               else{
                    return res.status(201).send([{token:token},{id:data[0].id_persona}])
               }
               //return res.status(201).send({message:data})
          }else{
              return res.status(401).send({ message: 'Correo o contraseña incorrectos' })
     
          } 
    })
    .catch ((error) =>{
         
        return res.status(500).send({message: error})
   });



     
});
module.exports = router;