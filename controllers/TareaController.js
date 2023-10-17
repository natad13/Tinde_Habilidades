const TareaModel = require ('../models/Tarea');


//Crear empresa (POST)
const createTarea = (req,res) =>{
    console.log(req.body);
   TareaModel.createTarea(req.body)
   .then((respuesta) => {
        console.log("tarea creada correctamente")
        return res.status(201).send({menssage: "elemento creado"})
   })
   .catch ((error) =>{
        console.log ("me mori ")
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
    console.log(req.params.id_empresa)
    TareaModel.getOnetarea(req.params.id_tarea)
    .then((data) => {
        return res.status(201).send({message:data})
    })
    .catch ((error) =>{
        return res.status(500).send({message: error})
   });

};


//Actualizar empresa 

const updateTarea = (req,res) =>{
    
    TareaModel.UpdateTarea(req.params.id_tarea,req.body)
    .then((data) => {
        return res.status(201).send({message:data})
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
   deleteTarea
}