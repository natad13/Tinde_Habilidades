const express = require('express');
const validateJTW =require('../controllers/AutorizacionController')

const router = express.Router();
const {PersonaController} = require('../controllers')

//Crear Tarea 
router.post('/',PersonaController.createPersona);

// Leer Todos
router.get ('/',validateJTW,PersonaController.getAllpersonas);

// Leer uno
router.get ('/:id_persona',validateJTW,PersonaController.getOnepersona);


// Update todo
router.put ('/:id_persona',(req,res) => res.send ({ message : "Se sustituyo"}))

// Update uno
router.patch ('/:id_persona', PersonaController.updatePersona);

router.delete('/:id_persona',PersonaController.deletePersona);

module.exports = router;