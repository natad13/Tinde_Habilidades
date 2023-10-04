const express = require('express');

const router = express.Router();
const {PersonaController} = require('../controllers')

//Crear Tarea 
router.post('/',PersonaController.createPersona);

// Leer Todos
router.get ('/',PersonaController.getAllpersonas);

// Leer uno
router.get ('/:id_persona',PersonaController.getOnepersona);


// Update todo
router.put ('/:id_persona',(req,res) => res.send ({ message : "Se sustituyo"}))

// Update uno
router.patch ('/:id_persona', PersonaController.updatePersona);

router.delete('/:id_persona',(req,res) => res.send ({ message : "se creo"}));

module.exports = router;