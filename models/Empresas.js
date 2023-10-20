const connection = require ("../knexfile")['development'];

// instancia a la conexion de base de datos
const database = require('knex')(connection);

const createEmpresa =(empresa) =>{
    console.log("estoy creando empresa")
    console.log(empresa);
    return database ('empresa')
    .insert(empresa); // inserta lo que trae del body
};


const getAllempresas =() =>{
    
    return database.select('*').from('empresa');
};

const getOneempresa =(id) =>{
 
    return database.select('*').from('empresa').where('id_empresa', id);
};

const UpdateEmpresa =(id,x) =>{
    return database.select('*').from('empresa').where('id_empresa', id).update(x);
};

const deleteEmpresa =(id) =>{
 
    return database.select('*').from('empresa').where('id_empresa', id).delete();
};

module.exports ={
    createEmpresa,
    getAllempresas,
    getOneempresa,
    UpdateEmpresa,
    deleteEmpresa
};