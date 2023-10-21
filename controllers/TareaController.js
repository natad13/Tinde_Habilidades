const TareaModel = require ('../models/Tarea');


//Crear empresa (POST)
const createTarea = (req,res) =>{
   
   TareaModel.createTarea(req.body)
   .then((respuesta) => {
        
        return res.status(201).send({menssage: "elemento creado"})
   })
   .catch ((error) =>{
    
        return res.status(500).send({message: "error"})
   });

};

// Buscar todas las empresas (GET)
const getAlltarea = (req,res) =>{
    TareaModel.getAlltarea()
    .then((data) => {
        return res.status(201).send({message:data})

    })
    .catch ((error) =>{
        console.log(error)
        return res.status(500).send({message: error})

   });

};

// Buscar una empresa (GET)
const getOneTarea = (req,res) =>{
 
    TareaModel.getOnetarea(req.params.id_tarea)
    .then((data) => {
        return res.status(201).send({message:data})
    })
    .catch ((error) =>{
        return res.status(500).send({message: error})
   });

};

// Buscar Tarea por empresa


const getTareaEmpresa = (req,res) =>{
    
    TareaModel.getTareaEmpresa(req.params.id_empresa)
    .then((data) => {
        return res.status(201).send(data)
    })
    .catch ((error) =>{
        return res.status(500).send({message: error})
   });

};

// Buscar Tarea por persona


const getTareaPersona = (req,res) =>{
     console.log("ingrese a tarea persona")
  
    TareaModel.getTareaPersona(req.params.id_persona)
    .then((data) => {
        return res.status(201).send(data)
    })
    .catch ((error) =>{
        return res.status(500).send({message: error})
   });

};

//Actualizar empresa 

const updateTarea = (req,res) =>{
    
    TareaModel.UpdateTarea(req.params.id_tarea,req.body)
    .then((data) => {
        return res.status(201).send({message:"actualizado correctamente"})
    })
    .catch ((error) =>{
        return res.status(500).send({message: error})
   });

};


const deleteTarea = (req,res) =>{

    TareaModel.deleteTarea(req.params.id_tarea)
    .then((data) => {
        return res.status(201).send({message:data})
    })
    .catch ((error) =>{
        return res.status(500).send({message: error})
   });

};

module.exports = {
   createTarea,
   getAlltarea,
   getOneTarea,
   updateTarea,
   deleteTarea,
   getTareaEmpresa,
   getTareaPersona
}