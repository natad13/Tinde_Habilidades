const connection = require ("../knexfile")['development'];

// instancia a la conexion de base de datos
const database = require('knex')(connection);

const createPersona =(persona) =>{
    console.log("estoy creando modelo")
    return database ('persona')
    .insert(persona); // inserta lo que trae del body
};


const getAllpersonas =() =>{
   
    return database.select('*').from('persona');
};

const getOnepersona =(id) =>{
 
    return database.select('*').from('persona').where('id_persona', id);
};

const loginPersona =(usuario, pass, tipo) =>{
 
    return database.select('*').from(tipo).where({ usuario: usuario,contrasena:pass });
};

const UpdatePersona =(id,x) =>{
 
    return database.select('*').from('persona').where('id_persona', id).update(x);
};

const deletePersona =(id) =>{
 
    return database.select('*').from('persona').where('id_persona', id).delete();
};
module.exports ={
    createPersona,
    getAllpersonas,
    getOnepersona,
    UpdatePersona,
    deletePersona,
    loginPersona
};