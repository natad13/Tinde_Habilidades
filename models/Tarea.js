const connection = require ("../knexfile")['development'];

// instancia a la conexion de base de datos
const database = require('knex')(connection);

const createTarea =(tarea) =>{
    console.log("estoy creando  Tarea")
    console.log(tarea);
    return database ('tarea')
    .insert(tarea); // inserta lo que trae del body
};


const getAlltarea =() =>{
    console.log("estoy buscando tarea 1")
    return database.select('*').from('tarea');
};

const getOnetarea =(id) =>{
    return database.select('*').from('tarea').where('id_tarea', id);
};


const getTareaEmpresa =(id) =>{
    console.log("modelo buscar tarea empresa ");
    console.log(id)
    return database.select('*').from('tarea').where('idempresa', id);
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
    getTareaEmpresa
};