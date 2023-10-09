const express = require('express');

const router = express.Router();


 const PersonaRoutes = require ('./PersonasRoutes');
 const EmpresaRoutes = require ('./EmpresaRoutes');
 const TareaRoutes = require ('./TareaRoutes');
 const AutorizacionRoutes = require ('./AutorizacionRoutes');



 router.use('/persona',PersonaRoutes);
 router.use('/empresas',EmpresaRoutes); 
 router.use('/tareas',TareaRoutes); 
 router.use('/login',AutorizacionRoutes); 




 module.exports =router;