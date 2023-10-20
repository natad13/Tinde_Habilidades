const express = require('express');

const router = express.Router();
const {TareaController} = require('../controllers')
const validateJTW =require('../controllers/AutorizacionController')



//Crear Tarea 
router.post('/',TareaController.createTarea);

// Leer Todos
router.get ('/',TareaController.getAlltarea);

// Leer uno
router.get ('/:id_tarea',TareaController.getOneTarea);

// Leer tarea por empresa
router.get ('/empresa/:id_empresa',validateJTW,TareaController.getTareaEmpresa);

// Leer tarea por persona
router.get ('/persona/:id_persona',TareaController.getTareaPersona);


// Update todo
router.put ('/:id_tarea',(req,res) => res.send ({ message : "Se sustituyo"}))

// Update uno
router.patch ('/:id_tarea',TareaController.updateTarea);

router.delete('/:id_tarea',TareaController.deleteTarea);

module.exports = router;