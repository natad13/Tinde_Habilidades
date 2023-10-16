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
     console.log(req.body);
     const {usuario , contrasena , tipo} = req.body;
     PersonaModel.loginPersona(usuario,contrasena,tipo)
    .then((data) => {
          console.log("me devolvi con la info")
          const tamano =(Object.entries(data).length)
          console.log(tamano)
          if (tamano !=0 ) {
               console.log("credenciales correctas");
               const token = jwt.sign({usuario},SECRET_KEY,{expiresIn:'120m'});
               return res.status(201).send({token})
               //return res.status(201).send({message:data})
          }else{
              return res.status(401).send({ message: 'Correo o contraseña incorrectos' })
     
          } 
    })
    .catch ((error) =>{
          console.log ("Credenciales Incorrectas ")
        return res.status(500).send({message: error})
   });



     /* PersonaModel.loginPersona(usuario,contrasena,tipo)
     .then((respuesta) => {
          console.log("credenciales correctas");
          
          //const token = jwt.sign({usuario},SECRET_KEY,{expiresIn:'120m'});
          //return res.status(201).send(token)
          return res.status(201).send({message:'oki'})
     })
     .catch ((error) =>{
          console.log ("me mori ")
          return res.status(500).send({message: error})
     });
 */


/* 
     if(validate){
          const token = jwt.sign({usuario}, SECRET_KEY, { expiresIn: '5m' })
          res.status(201).send({ token }) 
     } else{
          res.status(401).send({ message: 'Correo o contraseña incorrectos' })

     } */

});
module.exports = router;