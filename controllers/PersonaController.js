const PersonaModel = require('../models/Personas');

//Crear persona (POST)
const createPersona = (req,res) =>{
    console.log(req.body);
   PersonaModel.createPersona(req.body)
   .then((respuesta) => {
        return res.status(201).send({menssage: respuesta})
   })
   .catch ((error) =>{
        console.log ("me mori ")
        return res.status(500).send({message: error})
   });

};

// Buscar todas las personas (GET)
const getAllpersonas = (req,res) =>{
    PersonaModel.getAllpersonas()
    .then((data) => {
        return res.status(201).send({message:data})

    })
    .catch ((error) =>{
        console.log(error)
        return res.status(500).send({message: error})

   });

};

// Buscar una persona (GET)
const getOnepersona = (req,res) =>{
    PersonaModel.getOnepersona(req.params.id_persona)
    .then((data) => {
        return res.status(201).send({message:data})
    })
    .catch ((error) =>{
        return res.status(500).send({message: error})
   });

};

//Actualizar persona 

const updatePersona = (req,res) =>{
    console.log(req.body);
   
    console.log(`patch body ${req.body}`);
    PersonaModel.UpdatePersona(req.params.id_persona,req.body)
    .then((data) => {
        return res.status(201).send({message:data})
    })
    .catch ((error) =>{
        return res.status(500).send({message: error})
   });

};


const deletePersona = (req,res) =>{
    console.log(req.body);
   
    console.log(`patch body ${req.body}`);
    PersonaModel.deletePersona(req.params.id_persona)
    .then((data) => {
        return res.status(201).send({message:data})
    })
    .catch ((error) =>{
        return res.status(500).send({message: error})
   });

};

module.exports = {
    createPersona,
    getAllpersonas,
    getOnepersona,
    updatePersona,
    deletePersona
}