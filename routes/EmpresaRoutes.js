const express = require('express');

const router = express.Router();

const {EmpresaController} = require('../controllers')
//Crear Tarea 
router.post('/',EmpresaController.createEmpresa);

// Leer Todos
router.get ('/',EmpresaController.getAllempresas);

// Leer uno
router.get ('/:id_empresa',EmpresaController.getOnepeempresa);


// Update todo
router.put ('/:id_empresa',(req,res) => res.send ({ message : "Se sustituyo"}))

// Update uno
router.patch ('/:id_empresa',EmpresaController.updateEmpresa)

router.delete('/:id_empresa',EmpresaController.deleteEmpresa);

module.exports = router;