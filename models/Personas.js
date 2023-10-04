const connection = require ("../knexfile")['development'];

// instancia a la conexion de base de datos
const database = require('knex')(connection);

const createPersona =(persona) =>{
    console.log("estoy creando")
    console.log(persona);
    return database ('persona')
    .insert(persona); // inserta lo que trae del body
};


const getAllpersonas =() =>{
    console.log("estoy buscando")
    return database.select('*').from('persona');
};

const getOnepersona =(id) =>{
    return database.select('*').from('persona').where('id_persona', id);
};

const UpdatePersona =(id,x) =>{
 
    return database.select('*').from('persona').where('id_persona', id).update(x);
};
module.exports ={
    createPersona,
    getAllpersonas,
    getOnepersona,
    UpdatePersona
};