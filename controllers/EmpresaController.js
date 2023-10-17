const EmpresaModel = require('../models/Empresas');


//Crear empresa (POST)
const createEmpresa = (req,res) =>{
    console.log(req.body);
   EmpresaModel.createEmpresa(req.body)
   .then((respuesta) => {
        return res.status(201).send({menssage: "Elemento Creado"})
   })
   .catch ((error) =>{
        console.log ("me mori ")
        return res.status(500).send({message: "error"})
   });

};

// Buscar todas las empresas (GET)
const getAllempresas = (req,res) =>{
    EmpresaModel.getAllempresas()
    .then((data) => {
        return res.status(201).send({message:data})

    })
    .catch ((error) =>{
        console.log(error)
        return res.status(500).send({message: error})

   });

};

// Buscar una empresa (GET)
const getOnepeempresa = (req,res) =>{
    console.log(req.params.id_empresa)
    EmpresaModel.getOneempresa(req.params.id_empresa)
    .then((data) => {
        console.log('INFO EMPRESA')
        return res.status(201).send(data)
    })
    .catch ((error) =>{
        return res.status(500).send({message: error})
   });

};


//Actualizar empresa 

const updateEmpresa = (req,res) =>{
    
    EmpresaModel.UpdateEmpresa(req.params.id_empresa,req.body)
    .then((data) => {
        return res.status(201).send({message:data})
    })
    .catch ((error) =>{
        return res.status(500).send({message: error})
   });

};


const deleteEmpresa = (req,res) =>{

    EmpresaModel.deleteEmpresa(req.params.id_empresa)
    .then((data) => {
        return res.status(201).send({message:data})
    })
    .catch ((error) =>{
        return res.status(500).send({message: error})
   });

};

module.exports = {
    createEmpresa,
    getAllempresas,
    getOnepeempresa,
    updateEmpresa,
    deleteEmpresa
}