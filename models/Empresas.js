const connection = require ("../knexfile")['development'];

// instancia a la conexion de base de datos
const database = require('knex')(connection);

const createEmpresa =(empresa) =>{
    console.log("estoy creando")
    console.log(empresa);
    return database ('empresa')
    .insert(empresa); // inserta lo que trae del body
};


const getAllempresas =() =>{
    console.log("estoy buscando")
    return database.select('*').from('empresa');
};

const getOneempresa =(id) =>{
    console.log(id);
    return database.select('*').from('empresa').where('id_empresa', id);
};

module.exports ={
    createEmpresa,
    getAllempresas,
    getOneempresa
};