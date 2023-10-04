const EmpresaModel = require('../models/Empresas');

//Crear persona (POST)
const createEmpresa = (req,res) =>{
    console.log(req.body);
   EmpresaModel.createEmpresa(req.body)
   .then((respuesta) => {
        return res.status(201).send({menssage: respuesta})
   })
   .catch ((error) =>{
        console.log ("me mori ")
        return res.status(500).send({message: error})
   });

};

// Buscar todas las personas (GET)
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

// Buscar una persona (GET)
const getOnepeempresa = (req,res) =>{
    console.log("holaaa");
    console.log(req.params.id_empresa)
    EmpresaModel.getOneempresa(req.params.id_empresa)
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
    getOnepeempresa
}