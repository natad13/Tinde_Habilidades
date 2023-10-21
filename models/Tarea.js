const connection = require ("../knexfile")['development'];

// instancia a la conexion de base de datos
const database = require('knex')(connection);

const createTarea =(tarea) =>{
    
    return database ('tarea')
    .insert(tarea); // inserta lo que trae del body
};


const getAlltarea =() =>{
  
    return database.select('*').from('tarea');
};

const getOnetarea =(id) =>{
    return database.select('*').from('tarea').where('id_tarea', id);
};


const getTareaEmpresa =(id) =>{
    
    return database.select('*').from('tarea').where('idempresa', id);
};

const getTareaPersona =(id) =>{

    return database.select('*').from('tarea').where('idpersona', id);
};

const UpdateTarea =(id,x) =>{
 
    return database.select('*').from('tarea').where('id_tarea', id).update(x);
};

const deleteTarea =(id) =>{
 
    return database.select('*').from('tarea').where('id_tarea', id).delete();
};
module.exports ={
    createTarea,
    getAlltarea,
    getOnetarea,
    UpdateTarea,
    deleteTarea,
    getTareaEmpresa,
    getTareaPersona
};