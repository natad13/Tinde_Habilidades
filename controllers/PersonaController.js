const PersonaModel = require('../models/Personas');

//Crear persona (POST)
const createPersona = (req,res) =>{
    res.set( 'Access-Control-Allow-Origin', '*');
    console.log("eNTRE A CREAR");
    console.log(req.body);
   PersonaModel.createPersona(req.body)
   .then((respuesta) => {
       
        return res.status(201).send({menssage: "Elemento Creado"})
   })
   .catch ((error) =>{
        console.log ("me mori ")
        return res.status(500).send({message: "error"})
   });

};

// Buscar todas las personas (GET)
const getAllpersonas = (req,res) =>{
    //res.set( 'Access-Control-Allow-Origin', '*');
    PersonaModel.getAllpersonas()
    .then((data) => {
        return  res.status(201).send(data)

    })
    .catch ((error) =>{
        //console.log(error)
        return res.status(500).send("Error de lectura")

   });

};

// Buscar una persona (GET)
const getOnepersona = (req,res) =>{
    PersonaModel.getOnepersona(req.params.id_persona)
    .then((data) => {
        return res.status(201).send(data)
    })
    .catch ((error) =>{
        return res.status(500).send({message: error})
   });

};

//Actualizar persona 

const updatePersona = (req,res) =>{
  
    PersonaModel.UpdatePersona(req.params.id_persona,req.body)
    .then((data) => {
        return res.status(201).send({message:data})
    })
    .catch ((error) =>{
        return res.status(500).send({message: error})
   });

};


const deletePersona = (req,res) =>{
    
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