const express = require('express');

const router = express.Router();

//Crear Tarea 
router.post('/',(req,res) => res.send ({ message : "se creo"}));

// Leer Todos
router.get ('/',(req,res) => res.send ({ message : "se Leen todos"}));

// Leer uno
router.get ('/:id_tarea',(req,res) => res.send ({ message : "se Leen todos"}))


// Update todo
router.put ('/:id_tarea',(req,res) => res.send ({ message : "Se sustituyo"}))

// Update uno
router.patch ('/:id_tarea',(req,res) => res.send ({ message : "Se modifico una o mas propiedades"}))

router.delete('/:id_tarea',(req,res) => res.send ({ message : "se creo"}));

module.exports = router;