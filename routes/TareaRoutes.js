const express = require('express');

const router = express.Router();
const {TareaController} = require('../controllers')



//Crear Tarea 
router.post('/',TareaController.createTarea);

// Leer Todos
router.get ('/',TareaController.getAlltarea);

// Leer uno
router.get ('/:id_tarea',TareaController.getOneTarea);


// Update todo
router.put ('/:id_tarea',(req,res) => res.send ({ message : "Se sustituyo"}))

// Update uno
router.patch ('/:id_tarea',TareaController.updateTarea);

router.delete('/:id_tarea',TareaController.deleteTarea);

module.exports = router;